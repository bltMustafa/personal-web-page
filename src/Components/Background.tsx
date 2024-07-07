import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingShape from './RotatingShape';
import "../styles/MainPage.css"


function Background() {
  return (
    <Canvas className="background">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingShape />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Background;

