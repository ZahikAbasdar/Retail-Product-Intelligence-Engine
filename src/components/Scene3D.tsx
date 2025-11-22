import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

interface BarProps {
  position: [number, number, number];
  height: number;
  color: string;
  label: string;
}

const AnimatedBar = ({ position, height, color, label }: BarProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} position={[0, height / 2, 0]}>
        <boxGeometry args={[0.8, height, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const Scene3D = () => {
  const data = [
    { label: "TCS", value: 8.4, color: "#ef4444" },
    { label: "Infosys", value: 7.2, color: "#f59e0b" },
    { label: "Reliance", value: 12.3, color: "#eab308" },
    { label: "HDFC", value: 14.5, color: "#ef4444" },
    { label: "Wipro", value: 5.8, color: "#f59e0b" },
  ];

  return (
    <div className="w-full h-[500px] bg-card rounded-lg overflow-hidden border border-border">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <OrbitControls enableZoom enablePan enableRotate />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f59e0b" />
        
        {data.map((item, index) => (
          <AnimatedBar
            key={item.label}
            position={[(index - 2) * 2, 0, 0]}
            height={item.value / 2}
            color={item.color}
            label={item.label}
          />
        ))}
        
        <gridHelper args={[20, 20, "#ef4444", "#333"]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
