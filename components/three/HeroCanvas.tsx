"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Cinematic WebGL atmosphere layered over the hero imagery:
 * - drifting ember particles in iron-red / sand
 * - a sparse "flow field" of wind lines
 * - mouse turbulence + scroll dolly
 * Renders transparent; the cinematic image sits behind it in the DOM.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 22;

    const isMobile = window.innerWidth < 700;
    const EMBERS = isMobile ? 900 : 2200;
    const LINES = isMobile ? 40 : 90;

    // ── Embers: slow-rising sparks, red→sand gradient by depth ──
    const emberGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(EMBERS * 3);
    const seed = new Float32Array(EMBERS);
    const col = new Float32Array(EMBERS * 3);
    const red = new THREE.Color("#c1121f");
    const sand = new THREE.Color("#e8ddcf");
    const tmp = new THREE.Color();
    for (let i = 0; i < EMBERS; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 34;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24;
      seed[i] = Math.random() * 1000;
      tmp.copy(red).lerp(sand, Math.random() * 0.7);
      col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
    }
    emberGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    emberGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    // round sprite so points render as dots, not squares
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const emberMat = new THREE.PointsMaterial({
      size: 0.16,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    // ── Flow lines: sparse horizontal wind streaks ──
    const lineGroup = new THREE.Group();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xc1121f,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
    });
    const lineData: { line: THREE.Line; speed: number; len: number }[] = [];
    for (let i = 0; i < LINES; i++) {
      const len = 1.5 + Math.random() * 5;
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(len, 0, 0),
      ]);
      const line = new THREE.Line(g, lineMat);
      line.position.set((Math.random() - 0.5) * 70, (Math.random() - 0.5) * 34, (Math.random() - 0.5) * 18);
      lineGroup.add(line);
      lineData.push({ line, speed: 2.5 + Math.random() * 7, len });
    }
    scene.add(lineGroup);

    // ── Interaction state ──
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let scrollP = 0;
    const onScroll = () => {
      scrollP = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth, h = parent.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);
    resize();

    // ── Loop ──
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      const dt = Math.min(clock.getDelta() || 0.016, 0.05);

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      // embers rise + sway
      const p = emberGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < EMBERS; i++) {
        p[i * 3 + 1] += (0.4 + Math.sin(seed[i]) * 0.25) * dt;
        p[i * 3] += Math.sin(t * 0.5 + seed[i]) * 0.006 + mouse.x * 0.012;
        if (p[i * 3 + 1] > 17) p[i * 3 + 1] = -17;
      }
      emberGeo.attributes.position.needsUpdate = true;

      // wind lines drift left→right, loop around
      for (const { line, speed } of lineData) {
        line.position.x += speed * dt;
        if (line.position.x > 38) line.position.x = -38;
      }

      embers.rotation.y = mouse.x * 0.05;
      lineGroup.position.y = mouse.y * -0.6;

      camera.position.z = 22 + scrollP * 8;
      camera.position.y = -scrollP * 4;
      emberMat.opacity = 0.75 * (1 - scrollP * 0.85);
      lineMat.opacity = 0.14 * (1 - scrollP);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      emberGeo.dispose();
      emberMat.dispose();
      sprite.dispose();
      lineMat.dispose();
      lineData.forEach(({ line }) => line.geometry.dispose());
      renderer.dispose();
    };
  }, [reduced]);

  if (reduced) return null;
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
