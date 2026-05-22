import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xf5f0e8, 0); // Japandy paper tone
    } catch (e) {
      console.error('WebGL init failed:', e);
      return;
    }

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // ─────────────────────────────────────────────
    // SOFT INK PARTICLES (reduced intensity)
    // ─────────────────────────────────────────────
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 800;

    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xa0845c, // Japandy ink brown
      transparent: true,
      opacity: 0.18,
      blending: THREE.NormalBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );

    scene.add(particlesMesh);

    // ─────────────────────────────────────────────
    // MINIMAL PAPER GEOMETRIES (very subtle)
    // ─────────────────────────────────────────────
    const geometries = [
      new THREE.TetrahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.6, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0xc8b89a,
        transparent: true,
        opacity: 0.08,
        wireframe: true,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xa0845c,
        transparent: true,
        opacity: 0.06,
        wireframe: true,
      }),
    ];

    const meshes: THREE.Mesh[] = [];

    for (let i = 0; i < 2; i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i]);

      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      meshes.push(mesh);
      scene.add(mesh);
    }

    // ─────────────────────────────────────────────
    // LIGHTING (soft paper light, not neon)
    // ─────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(2, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // ─────────────────────────────────────────────
    // INTERACTION (very subtle motion)
    // ─────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };

    document.addEventListener('mousemove', onMouseMove);

    let scrollY = window.scrollY;

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    // ─────────────────────────────────────────────
    // ANIMATION LOOP (slow, calm, ink-like)
    // ─────────────────────────────────────────────
    let frame: number;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.0002;
      particlesMesh.rotation.x += 0.00005;

      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.0004 + i * 0.0002;
        mesh.rotation.y += 0.0006;
      });

      particlesMesh.position.y = -scrollY * 0.0005;

      camera.position.x += (mouseX - camera.position.x) * 0.03;
      camera.position.y += (-mouseY - camera.position.y) * 0.03;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ─────────────────────────────────────────────
    // RESIZE
    // ─────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // ─────────────────────────────────────────────
    // CLEANUP
    // ─────────────────────────────────────────────
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);

      cancelAnimationFrame(frame);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="bg-three" />;
};

export default ThreeDBackground;
