"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Palette matched to the site: white bg, slate-800 line art, blue-600 accent
const LINE_COLOR = 0x334155;
const ACCENT_COLOR = 0x2563eb;
const FILL_COLOR = 0xf1f5f9;

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0.6, 0.75, 5.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Disposal bucket so cleanup doesn't get unwieldy
    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];
    const track = <T extends THREE.BufferGeometry | THREE.Material>(x: T): T => {
      disposables.push(x);
      return x;
    };

    // 2. SCREEN — pivots at its bottom edge (the hinge) so tilting it reads as "opening"
    const panelW = 2.6;
    const panelH = 1.6;

    const screenGroup = new THREE.Group(); // rotates around the hinge (local origin)
    laptopGroup.add(screenGroup);

    const screenContent = new THREE.Group();
    screenContent.position.y = panelH / 2; // lifts the panel so its bottom sits at the hinge
    screenGroup.add(screenContent);

    const panelGeom = track(new THREE.BoxGeometry(panelW, panelH, 0.05));
    const panelMat = track(
      new THREE.MeshBasicMaterial({ color: FILL_COLOR, transparent: true, opacity: 0.6 })
    );
    const panel = new THREE.Mesh(panelGeom, panelMat);
    screenContent.add(panel);

    const panelEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(panelGeom),
      track(new THREE.LineBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.85 }))
    );
    screenContent.add(panelEdges);

    // Title bar divider
    const dividerGeom = track(new THREE.PlaneGeometry(panelW, 0.006));
    const dividerMat = track(
      new THREE.MeshBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.4 })
    );
    const divider = new THREE.Mesh(dividerGeom, dividerMat);
    divider.position.set(0, panelH / 2 - 0.26, 0.026);
    screenContent.add(divider);

    // Window dots
    const dotGeom = track(new THREE.CircleGeometry(0.03, 20));
    [0, 1, 2].forEach((i) => {
      const mat = track(
        new THREE.MeshBasicMaterial({
          color: i === 0 ? ACCENT_COLOR : LINE_COLOR,
          transparent: true,
          opacity: i === 0 ? 0.9 : 0.55,
        })
      );
      const dot = new THREE.Mesh(dotGeom, mat);
      dot.position.set(-panelW / 2 + 0.2 + i * 0.15, panelH / 2 - 0.15, 0.026);
      screenContent.add(dot);
    });

    // Code lines — indented, monochrome, one accent line
    type CodeLine = { indent: number; width: number; accent: boolean };
    const lines: CodeLine[] = [
      { indent: 0, width: 1.05, accent: false },
      { indent: 0.15, width: 0.8, accent: true },
      { indent: 0.3, width: 0.5, accent: false },
      { indent: 0.15, width: 0.65, accent: false },
      { indent: 0, width: 0.38, accent: false },
      { indent: 0, width: 0.9, accent: false },
    ];
    const startX = -panelW / 2 + 0.2;
    const startY = panelH / 2 - 0.48;
    const lineHeight = 0.18;

    lines.forEach((l, i) => {
      const geom = track(new THREE.PlaneGeometry(l.width, 0.045));
      const mat = track(
        new THREE.MeshBasicMaterial({
          color: l.accent ? ACCENT_COLOR : LINE_COLOR,
          transparent: true,
          opacity: l.accent ? 0.85 : 0.4,
        })
      );
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(startX + l.indent + l.width / 2, startY - i * lineHeight, 0.026);
      screenContent.add(mesh);
    });

    // Blinking cursor
    const lastLine = lines[lines.length - 1];
    const cursorGeom = track(new THREE.PlaneGeometry(0.02, 0.13));
    const cursorMat = track(new THREE.MeshBasicMaterial({ color: ACCENT_COLOR }));
    const cursor = new THREE.Mesh(cursorGeom, cursorMat);
    cursor.position.set(
      startX + lastLine.indent + lastLine.width + 0.05,
      startY - (lines.length - 1) * lineHeight,
      0.027
    );
    screenContent.add(cursor);

    // Tilt the screen back like an open laptop (pivoting around the hinge at y=0)
    screenGroup.rotation.x = -0.32;

    // 3. BASE — keyboard deck, hinged at the same origin, extending toward the viewer
    const baseW = panelW * 1.03;
    const baseDepth = 1.35;
    const baseThickness = 0.06;

    const baseGroup = new THREE.Group();
    laptopGroup.add(baseGroup);

    const baseGeom = track(new THREE.BoxGeometry(baseW, baseThickness, baseDepth));
    const baseMat = track(
      new THREE.MeshBasicMaterial({ color: FILL_COLOR, transparent: true, opacity: 0.5 })
    );
    const base = new THREE.Mesh(baseGeom, baseMat);
    base.position.set(0, -baseThickness / 2, baseDepth / 2);
    baseGroup.add(base);

    const baseEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(baseGeom),
      track(new THREE.LineBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.75 }))
    );
    baseEdges.position.copy(base.position);
    baseGroup.add(baseEdges);

    // Keyboard block — a soft-outlined rectangle suggesting the key well
    const kbGeom = track(new THREE.PlaneGeometry(baseW * 0.82, baseDepth * 0.55));
    const kbMat = track(
      new THREE.MeshBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.12 })
    );
    const keyboard = new THREE.Mesh(kbGeom, kbMat);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, -baseThickness + 0.001, baseDepth * 0.42);
    baseGroup.add(keyboard);
    const kbEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(kbGeom),
      track(new THREE.LineBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.3 }))
    );
    kbEdges.rotation.x = -Math.PI / 2;
    kbEdges.position.copy(keyboard.position);
    baseGroup.add(kbEdges);

    // Trackpad
    const padGeom = track(new THREE.PlaneGeometry(baseW * 0.28, baseDepth * 0.22));
    const padMat = track(
      new THREE.MeshBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.15 })
    );
    const trackpad = new THREE.Mesh(padGeom, padMat);
    trackpad.rotation.x = -Math.PI / 2;
    trackpad.position.set(0, -baseThickness + 0.002, baseDepth * 0.86);
    baseGroup.add(trackpad);
    const padEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(padGeom),
      track(new THREE.LineBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.4 }))
    );
    padEdges.rotation.x = -Math.PI / 2;
    padEdges.position.copy(trackpad.position);
    baseGroup.add(padEdges);

    // Sit the whole laptop slightly lower so it's centered in frame once tilted
    laptopGroup.position.y = -0.35;
    laptopGroup.rotation.y = -0.5;

    camera.lookAt(0, -0.1, 0);

    // 4. Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle turntable + float, restrained like the rest of the site's motion
      laptopGroup.rotation.y = -0.5 + Math.sin(t * 0.25) * 0.28;
      laptopGroup.position.y = -0.35 + Math.sin(t * 0.5) * 0.05;

      cursor.visible = Math.floor(t * 1.6) % 2 === 0;

      renderer.render(scene, camera);
    };
    animate();

    // 5. Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      disposables.forEach((d) => d.dispose());
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full aspect-square max-w-[500px]" />;
};
