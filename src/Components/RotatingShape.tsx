import {useRef} from "react";
import {useFrame} from "@react-three/fiber";


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

export default RotatingShape;
