
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProgressCharacter = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    let renderer: THREE.WebGLRenderer;
    
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);
    } catch (error) {
      console.error("Failed to initialize WebGL renderer:", error);
      return;
    }
    
    // Create a simple character (can be replaced with more complex model)
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xFFD700,
      emissive: 0xFFD700,
      emissiveIntensity: 0.2,
      specular: 0xFFFFFF
    });
    const character = new THREE.Mesh(geometry, material);
    scene.add(character);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Animation related variables
    let scrollY = 0;
    let targetScrollY = 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Handle scroll event
    const handleScroll = () => {
      targetScrollY = window.scrollY / maxScroll; // Convert to 0-1 range
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      // Smooth scrolling effect
      scrollY += (targetScrollY - scrollY) * 0.05;
      
      // Move character based on scroll position
      character.position.y = 2 - scrollY * 4; // Move from top to bottom
      character.rotation.y += 0.01; // Continuous rotation
      
      // Add some "bobbing" effect
      character.position.y += Math.sin(Date.now() * 0.002) * 0.05;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      geometry.dispose();
      material.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="fixed right-4 h-full pointer-events-none z-[5]"
      style={{ width: '100px' }}
    />
  );
};

export default ProgressCharacter;
