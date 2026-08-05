"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Objects (The Icosahedron from your UI design)
    const geometry = new THREE.IcosahedronGeometry(1.6, 3);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0052ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      shininess: 120,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Inner Core
    const coreGeom = new THREE.SphereGeometry(0.7, 32, 32);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0052ff,
      transparent: true,
      opacity: 0.1,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    // 3. Lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    scene.add(new THREE.AmbientLight(0x404040, 1));

    camera.position.z = 4;

    // 4. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.002;
      
      const time = Date.now() * 0.002;
      core.scale.setScalar(1 + Math.sin(time) * 0.1);
      
      renderer.render(scene, camera);
    };
    animate();

    // 5. Handle Resize
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
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full aspect-square max-w-[500px]" />;
};