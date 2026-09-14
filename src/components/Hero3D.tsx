
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// --------------------------------------------------
// COLORS
// --------------------------------------------------

const LINE_COLOR = 0x334155;
const ACCENT_COLOR = 0x2563eb;

const BEZEL_COLOR = 0x111827;
const SCREEN_COLOR = 0x020617;
const BASE_COLOR = 0xe8ecf2;

const KEY_COLOR = 0xf8fafc;
const KEY_EDGE_COLOR = 0x64748b;

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // --------------------------------------------------
    // 1. SCENE
    // --------------------------------------------------

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );

    camera.position.set(0.6, 0.8, 5.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    containerRef.current.appendChild(renderer.domElement);

    // --------------------------------------------------
    // 2. LIGHTING
    // --------------------------------------------------

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.45);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    // --------------------------------------------------
    // 3. LAPTOP GROUP
    // --------------------------------------------------

    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];
    const textures: THREE.Texture[] = [];

    const track = <T extends THREE.BufferGeometry | THREE.Material>(
      item: T
    ): T => {
      disposables.push(item);
      return item;
    };

    // --------------------------------------------------
    // 4. SCREEN
    // --------------------------------------------------

    const panelW = 2.6;
    const panelH = 1.6;

    const screenGroup = new THREE.Group();
    laptopGroup.add(screenGroup);

    const screenContent = new THREE.Group();

    screenContent.position.y = panelH / 2;

    screenGroup.add(screenContent);

    // --------------------------------------------------
    // SCREEN BEZEL
    // --------------------------------------------------

    const panelGeom = track(
      new THREE.BoxGeometry(panelW, panelH, 0.08)
    );

    const panelMat = track(
      new THREE.MeshStandardMaterial({
        color: BEZEL_COLOR,
        roughness: 0.75,
        metalness: 0.15,
      })
    );

    const panel = new THREE.Mesh(panelGeom, panelMat);

    screenContent.add(panel);

    const panelEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(panelGeom),
      track(
        new THREE.LineBasicMaterial({
          color: LINE_COLOR,
          transparent: true,
          opacity: 0.9,
        })
      )
    );

    screenContent.add(panelEdges);

    // --------------------------------------------------
    // BLACK SCREEN
    // --------------------------------------------------

    const inset = 0.13;

    const displayW = panelW - inset * 2;
    const displayH = panelH - inset * 2;

    const displayGeom = track(
      new THREE.PlaneGeometry(displayW, displayH)
    );

    const displayMat = track(
      new THREE.MeshStandardMaterial({
        color: SCREEN_COLOR,
        roughness: 0.35,
        metalness: 0.05,
      })
    );

    const display = new THREE.Mesh(displayGeom, displayMat);

    display.position.set(
      0,
      0,
      0.047
    );

    screenContent.add(display);

    // --------------------------------------------------
    // SUBTLE SCREEN GLOW
    // --------------------------------------------------

    const glowGeom = track(
      new THREE.PlaneGeometry(
        displayW * 1.05,
        displayH * 1.05
      )
    );

    const glowMat = track(
      new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.025,
        depthWrite: false,
      })
    );

    const glow = new THREE.Mesh(glowGeom, glowMat);

    glow.position.set(
      0,
      0,
      0.045
    );

    screenContent.add(glow);

    // --------------------------------------------------
    // 5. SCREEN TOP BAR
    // --------------------------------------------------

    const titleBarY = panelH / 2 - inset - 0.09;

    const topLineGeom = track(
      new THREE.PlaneGeometry(
        displayW,
        0.008
      )
    );

    const topLineMat = track(
      new THREE.MeshBasicMaterial({
        color: 0x334155,
        transparent: true,
        opacity: 0.55,
      })
    );

    const topLine = new THREE.Mesh(
      topLineGeom,
      topLineMat
    );

    topLine.position.set(
      0,
      titleBarY - 0.12,
      0.051
    );

    screenContent.add(topLine);

    // --------------------------------------------------
    // WINDOW DOTS
    // --------------------------------------------------

    const dotGeom = track(
      new THREE.CircleGeometry(0.025, 20)
    );

    [0, 1, 2].forEach((i) => {
      const dotMat = track(
        new THREE.MeshBasicMaterial({
          color:
            i === 0
              ? 0xef4444
              : i === 1
              ? 0xf59e0b
              : 0x22c55e,
        })
      );

      const dot = new THREE.Mesh(
        dotGeom,
        dotMat
      );

      dot.position.set(
        -displayW / 2 + 0.09 + i * 0.13,
        titleBarY,
        0.052
      );

      screenContent.add(dot);
    });

    // --------------------------------------------------
    // 6. CODE SCREEN
    // --------------------------------------------------

    const codeCanvas = document.createElement("canvas");

    codeCanvas.width = 768;
    codeCanvas.height = 460;

    const codeContext = codeCanvas.getContext("2d");

    const codeTexture = new THREE.CanvasTexture(
      codeCanvas
    );

    codeTexture.minFilter = THREE.LinearFilter;
    codeTexture.magFilter = THREE.LinearFilter;
    codeTexture.needsUpdate = true;

    textures.push(codeTexture);

    // Transparent code layer
    const codeGeom = track(
      new THREE.PlaneGeometry(
        displayW - 0.12,
        displayH - 0.28
      )
    );

    const codeMat = track(
      new THREE.MeshBasicMaterial({
        map: codeTexture,
        transparent: true,
        depthWrite: false,
      })
    );

    const codeMesh = new THREE.Mesh(
      codeGeom,
      codeMat
    );

    codeMesh.position.set(
      0.03,
      -0.07,
      0.054
    );

    screenContent.add(codeMesh);

    // --------------------------------------------------
    // CODE CONTENT
    // --------------------------------------------------

    const codeLines = [
      "const developer = {",
      "  name: 'Abhishek',",
      "  role: 'Software Engineer',",
      "  skills: ['React', 'Next.js'],",
      "};",
      "",
      "function buildWebsite() {",
      "  const app = createApp();",
      "  app.initialize();",
      "  app.render();",
      "}",
      "",
      "const project = await buildProject();",
      "console.log(project);",
      "",
      "export default function App() {",
      "  return <Portfolio />;",
      "}",
      "",
      "// Building something awesome...",
      "const experience = '2+ years';",
      "const passion = 'technology';",
      "",
      "while (learning) {",
      "  improve();",
      "  build();",
      "  create();",
      "}",
    ];

    // --------------------------------------------------
    // DRAW CODE
    // --------------------------------------------------

    let scrollPosition = 0;

    const drawCode = () => {
      if (!codeContext) return;

      const ctx = codeContext;

      const canvasWidth = codeCanvas.width;
      const canvasHeight = codeCanvas.height;

      // Clear canvas
      ctx.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
      );

      // Dark transparent background
      ctx.fillStyle = "rgba(2, 6, 23, 0.25)";

      ctx.fillRect(
        0,
        0,
        canvasWidth,
        canvasHeight
      );

      // Code font
      ctx.font =
        "20px 'Courier New', monospace";

      ctx.textBaseline = "top";

      const lineHeight = 31;

      // Add a little left padding
      const leftPadding = 35;

      // Code starts slightly above the visible area
      const startY = 25 - scrollPosition;

      codeLines.forEach((line, index) => {
        const y =
          startY +
          index * lineHeight;

        // Only draw visible lines
        if (
          y < -lineHeight ||
          y > canvasHeight + lineHeight
        ) {
          return;
        }

        // Different green shades
        if (
          line.includes("const") ||
          line.includes("function") ||
          line.includes("return") ||
          line.includes("export")
        ) {
          ctx.fillStyle = "#86efac";
        } else if (
          line.includes("//")
        ) {
          ctx.fillStyle = "#4ade80";
        } else {
          ctx.fillStyle = "#22c55e";
        }

        ctx.fillText(
          line,
          leftPadding,
          y
        );
      });

      // Cursor
      const cursorY =
        startY +
        codeLines.length * lineHeight;

      if (
        cursorY > 0 &&
        cursorY < canvasHeight
      ) {
        ctx.fillStyle = "#86efac";

        ctx.fillRect(
          leftPadding,
          cursorY,
          3,
          22
        );
      }

      codeTexture.needsUpdate = true;
    };

    // --------------------------------------------------
    // 7. SCREEN ANGLE
    // --------------------------------------------------

    screenGroup.rotation.x = -0.32;

    // --------------------------------------------------
    // 8. LAPTOP BASE
    // --------------------------------------------------

    const baseW = panelW * 1.03;
    const baseDepth = 1.35;
    const baseThickness = 0.08;

    const baseGroup = new THREE.Group();

    laptopGroup.add(baseGroup);

    const baseGeom = track(
      new THREE.BoxGeometry(
        baseW,
        baseThickness,
        baseDepth
      )
    );

    const baseMat = track(
      new THREE.MeshStandardMaterial({
        color: BASE_COLOR,
        roughness: 0.8,
        metalness: 0.08,
      })
    );

    const base = new THREE.Mesh(
      baseGeom,
      baseMat
    );

    base.position.set(
      0,
      -baseThickness / 2,
      baseDepth / 2
    );

    baseGroup.add(base);

    // --------------------------------------------------
    // BASE EDGES
    // --------------------------------------------------

    const baseEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(baseGeom),
      track(
        new THREE.LineBasicMaterial({
          color: LINE_COLOR,
          transparent: true,
          opacity: 0.7,
        })
      )
    );

    baseEdges.position.copy(
      base.position
    );

    baseGroup.add(baseEdges);

    // --------------------------------------------------
    // 9. KEYBOARD
    // --------------------------------------------------

    const kbAreaW = baseW * 0.84;
    const kbAreaH = baseDepth * 0.50;

    const kbCenterZ = baseDepth * 0.38;

    // IMPORTANT:
    // Keys are now above the laptop surface.
    const kbY = 0.006;

    const keyCols = 12;
    const keyRows = 5;

    const gap = 0.025;

    const keyW =
      (kbAreaW -
        gap * (keyCols + 1)) /
      keyCols;

    const rowH =
      (kbAreaH -
        gap * (keyRows + 1)) /
      keyRows;

    // --------------------------------------------------
    // KEY MATERIALS
    // --------------------------------------------------

    const keyFillMat = track(
      new THREE.MeshStandardMaterial({
        color: KEY_COLOR,
        roughness: 0.55,
        metalness: 0.05,
      })
    );

    const keyEdgeMat = track(
      new THREE.LineBasicMaterial({
        color: KEY_EDGE_COLOR,
        transparent: true,
        opacity: 0.7,
      })
    );

    // --------------------------------------------------
    // CREATE KEY
    // --------------------------------------------------

    const addKey = (
      w: number,
      h: number,
      localX: number,
      localZ: number
    ) => {
      const geom = track(
        new THREE.BoxGeometry(
          w * 0.88,
          0.018,
          h * 0.82
        )
      );

      const key = new THREE.Mesh(
        geom,
        keyFillMat
      );

      key.position.set(
        localX,
        kbY,
        kbCenterZ + localZ
      );

      baseGroup.add(key);

      const edges =
        new THREE.LineSegments(
          new THREE.EdgesGeometry(geom),
          keyEdgeMat
        );

      edges.position.copy(
        key.position
      );

      baseGroup.add(edges);
    };

    // --------------------------------------------------
    // NORMAL KEY GRID
    // --------------------------------------------------

    const gridTop =
      -kbAreaH / 2;

    for (
      let row = 0;
      row < keyRows;
      row++
    ) {
      for (
        let col = 0;
        col < keyCols;
        col++
      ) {
        const localX =
          -kbAreaW / 2 +
          gap +
          col * (keyW + gap) +
          keyW / 2;

        const localZ =
          gridTop +
          gap +
          row * (rowH + gap) +
          rowH / 2;

        addKey(
          keyW,
          rowH,
          localX,
          localZ
        );
      }
    }

    // --------------------------------------------------
    // SPACEBAR
    // --------------------------------------------------

    const spacebarWidth =
      keyW * 5.2;

    const spacebarZ =
      gridTop +
      gap +
      keyRows *
        (rowH + gap) +
      rowH / 2;

    addKey(
      spacebarWidth,
      rowH,
      0,
      spacebarZ
    );

    // --------------------------------------------------
    // EXTRA SPACEBAR SIDE KEYS
    // --------------------------------------------------

    const sideKeyWidth =
      keyW * 1.6;

    addKey(
      sideKeyWidth,
      rowH,
      -kbAreaW / 2 +
        sideKeyWidth / 2 +
        gap,
      spacebarZ
    );

    addKey(
      sideKeyWidth,
      rowH,
      kbAreaW / 2 -
        sideKeyWidth / 2 -
        gap,
      spacebarZ
    );

    // --------------------------------------------------
    // 10. TRACKPAD
    // --------------------------------------------------

    const padGeom = track(
      new THREE.BoxGeometry(
        baseW * 0.28,
        0.012,
        baseDepth * 0.19
      )
    );

    const padMat = track(
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.45,
        metalness: 0.05,
      })
    );

    const trackpad = new THREE.Mesh(
      padGeom,
      padMat
    );

    trackpad.position.set(
      0,
      0.006,
      baseDepth * 0.87
    );

    baseGroup.add(trackpad);

    const padEdges =
      new THREE.LineSegments(
        new THREE.EdgesGeometry(
          padGeom
        ),
        track(
          new THREE.LineBasicMaterial({
            color: LINE_COLOR,
            transparent: true,
            opacity: 0.5,
          })
        )
      );

    padEdges.position.copy(
      trackpad.position
    );

    baseGroup.add(padEdges);

    // --------------------------------------------------
    // 11. TOUCHPAD LINE
    // --------------------------------------------------

    const touchLineGeom = track(
      new THREE.PlaneGeometry(
        baseW * 0.14,
        0.008
      )
    );

    const touchLineMat = track(
      new THREE.MeshBasicMaterial({
        color: LINE_COLOR,
        transparent: true,
        opacity: 0.35,
      })
    );

    const touchLine = new THREE.Mesh(
      touchLineGeom,
      touchLineMat
    );

    touchLine.rotation.x =
      -Math.PI / 2;

    touchLine.position.set(
      0,
      0.014,
      baseDepth * 0.93
    );

    baseGroup.add(touchLine);

    // --------------------------------------------------
    // 12. HINGE
    // --------------------------------------------------

    const hingeGeom = track(
      new THREE.BoxGeometry(
        baseW * 0.72,
        0.09,
        0.08
      )
    );

    const hingeMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.45,
        metalness: 0.25,
      })
    );

    const hinge = new THREE.Mesh(
      hingeGeom,
      hingeMat
    );

    hinge.position.set(
      0,
      0.015,
      0.035
    );

    baseGroup.add(hinge);

    // --------------------------------------------------
    // 13. GROUND SHADOW
    // --------------------------------------------------

    const shadowCanvas =
      document.createElement("canvas");

    shadowCanvas.width = 256;
    shadowCanvas.height = 256;

    const ctx =
      shadowCanvas.getContext("2d");

    if (ctx) {
      const gradient =
        ctx.createRadialGradient(
          128,
          128,
          0,
          128,
          128,
          128
        );

      gradient.addColorStop(
        0,
        "rgba(15,23,42,0.32)"
      );

      gradient.addColorStop(
        1,
        "rgba(15,23,42,0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        256,
        256
      );
    }

    const shadowTexture =
      new THREE.CanvasTexture(
        shadowCanvas
      );

    textures.push(
      shadowTexture
    );

    const shadowGeom = track(
      new THREE.PlaneGeometry(
        baseW * 1.7,
        baseDepth * 2
      )
    );

    const shadowMat = track(
      new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        depthWrite: false,
      })
    );

    const shadow = new THREE.Mesh(
      shadowGeom,
      shadowMat
    );

    shadow.rotation.x =
      -Math.PI / 2;

    shadow.position.set(
      0,
      -baseThickness - 0.015,
      baseDepth * 0.5
    );

    baseGroup.add(shadow);

    // --------------------------------------------------
    // 14. LAPTOP POSITION
    // --------------------------------------------------

    laptopGroup.position.y = -0.35;

    laptopGroup.rotation.y = -0.5;

    camera.lookAt(
      0,
      -0.1,
      0
    );

    // --------------------------------------------------
    // 15. ANIMATION
    // --------------------------------------------------

    let animationFrameId: number;

    let previousTime = 0;

    const animate = (
      time: number
    ) => {
      animationFrameId =
        requestAnimationFrame(
          animate
        );

      const delta =
        time - previousTime;

      previousTime = time;

      // ----------------------------------------------
      // Laptop floating animation
      // ----------------------------------------------

      laptopGroup.rotation.y =
        -0.5 +
        Math.sin(time * 0.00025) *
          0.28;

      laptopGroup.position.y =
        -0.35 +
        Math.sin(time * 0.0005) *
          0.05;

      // ----------------------------------------------
      // CODE SCROLL
      // ----------------------------------------------

      scrollPosition +=
        delta * 0.035;

      const totalCodeHeight =
        codeLines.length * 31;

      // When code reaches the bottom,
      // start again from the top.
      if (
        scrollPosition >
        totalCodeHeight
      ) {
        scrollPosition = 0;
      }

      drawCode();

      // ----------------------------------------------
      // Render
      // ----------------------------------------------

      renderer.render(
        scene,
        camera
      );
    };

    animate(0);

    // --------------------------------------------------
    // 16. RESIZE
    // --------------------------------------------------

    const handleResize = () => {
      if (!containerRef.current) {
        return;
      }

      const w =
        containerRef.current
          .clientWidth;

      const h =
        containerRef.current
          .clientHeight;

      camera.aspect =
        w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(
        w,
        h
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // --------------------------------------------------
    // 17. CLEANUP
    // --------------------------------------------------

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(
        animationFrameId
      );

      renderer.dispose();

      disposables.forEach(
        (item) => item.dispose()
      );

      textures.forEach(
        (texture) =>
          texture.dispose()
      );

      if (
        containerRef.current &&
        renderer.domElement.parentNode ===
          containerRef.current
      ) {
        containerRef.current.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square max-w-[500px]"
    />
  );
};
