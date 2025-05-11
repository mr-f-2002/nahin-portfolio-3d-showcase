
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    let renderer: THREE.WebGLRenderer;
    
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
    } catch (error) {
      console.error("Failed to initialize WebGL renderer:", error);
      return;
    }
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000;
    
    const posArray = new Float32Array(particlesCnt * 3);
    
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xFFD700,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.5
    });
    
    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add some geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.7, 0),
    ];
    
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xFFA500, flatShading: true, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0xFFD700, flatShading: true, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0xFFFFFF, flatShading: true, transparent: true, opacity: 0.8 }),
    ];
    
    const meshes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 3; i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i]);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      meshes.push(mesh);
      scene.add(mesh);
    }
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Scroll position for parallax effect
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    });
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0001;
      
      // Rotate meshes
      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.001 + i * 0.0005;
        mesh.rotation.y += 0.002 - i * 0.0003;
      });
      
      // Add parallax effect based on mouse position and scroll
      particlesMesh.position.y = -scrollY * 0.0015;
      
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('scroll', () => {});
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      cancelAnimationFrame(animationFrameId);
      
      // Dispose of geometries and materials
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="bg-three" />;
};

export default ThreeDBackground;
