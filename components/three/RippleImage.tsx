"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uPlaneRatio;

  void main() {
    vec2 uv = (vUv - 0.5) * uPlaneRatio + 0.5;

    // liquid ripple around the pointer
    float d = distance(uv, uMouse);
    float ripple = sin(d * 28.0 - uTime * 4.0) * 0.014 * uHover * smoothstep(0.45, 0.0, d);
    vec2 dir = normalize(uv - uMouse + 0.0001);
    vec2 ruv = uv + dir * ripple;

    // chromatic split scaled by hover
    float split = 0.006 * uHover * smoothstep(0.5, 0.0, d);
    float r = texture2D(uTex, ruv + vec2(split, 0.0)).r;
    float g = texture2D(uTex, ruv).g;
    float b = texture2D(uTex, ruv - vec2(split, 0.0)).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

/** WebGL liquid-ripple + chromatic-split image. Falls back to a plain <img> when reduced motion or WebGL is unavailable. */
export function RippleImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || reduced) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
    } catch {
      return; // fallback <img> stays visible
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTex: { value: null as THREE.Texture | null },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uPlaneRatio: { value: new THREE.Vector2(1, 1) },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

    let imgW = 1, imgH = 1, ready = false;
    new THREE.TextureLoader().load(src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      uniforms.uTex.value = tex;
      imgW = tex.image.width; imgH = tex.image.height;
      ready = true;
      cover();
      canvas.style.opacity = "1";
    });

    // object-fit: cover math
    const cover = () => {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      const canvasRatio = w / h, imgRatio = imgW / imgH;
      if (canvasRatio > imgRatio) uniforms.uPlaneRatio.value.set(1, imgRatio / canvasRatio);
      else uniforms.uPlaneRatio.value.set(canvasRatio / imgRatio, 1);
    };
    const ro = new ResizeObserver(cover);
    ro.observe(wrap);

    let hoverTarget = 0;
    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      uniforms.uMouse.value.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
    };
    const onEnter = () => { hoverTarget = 1; };
    const onLeave = () => { hoverTarget = 0; };
    wrap.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);

    const clock = new THREE.Clock();
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(wrap);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!ready || !visible) return;
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * 0.07;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      uniforms.uTex.value?.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [src, reduced]);

  return (
    <div ref={wrapRef} className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      {!reduced && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500"
          aria-hidden
        />
      )}
    </div>
  );
}
