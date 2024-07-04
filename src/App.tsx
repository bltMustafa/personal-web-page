import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Layout } from 'antd'; // Ant Design Layout bileşeni
import './styles/MainPage.css';

const { Header, Content } = Layout;

function RotatingShape() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={'#001'} wireframe />
    </mesh>
  );
}

function Background() {
  return (
    <Canvas className="background">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingShape />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return (
    <Layout className="App">
      <div className="canvas-container">
        <Background />
      </div>
      <Content className="content">
        <h1>Mustafa Bolat</h1>
        <span>Software Developer</span>
      </Content>
    </Layout>
  );
}

export default App;
