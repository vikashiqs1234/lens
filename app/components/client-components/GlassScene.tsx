"use client";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Reusable Glass Frame Component
const GlassFrame = ({ color = '#ffffff', ...props }) => {
    const mesh = useRef<any>('');
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const lensMaterial = useRef<any>('');

    useFrame(() => {
        if (!mesh.current) return;
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;

        if (lensMaterial.current) {
            lensMaterial.current.emissiveIntensity = THREE.MathUtils.lerp(
                lensMaterial.current.emissiveIntensity,
                hovered ? 0.5 : 0.1,
                0.05
            );
        }
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 0.5, 0.1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : color} />
            <mesh position={[0, 0, 0.55]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshPhysicalMaterial
                    ref={lensMaterial}
                    color="lightblue"
                    transparent
                    opacity={0.7}
                    emissive="white"
                    emissiveIntensity={0.1}
                    roughness={0.2}
                    transmission={0.9}
                    ior={1.5}
                />
            </mesh>
        </mesh>
    );
};

const GlassScene = () => (
    <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 1, 1]} intensity={0.8} />
        <GlassFrame position={[-1.5, 0, 0]} color="#FF5733" />
        <GlassFrame position={[1.5, 0, 0]} color="#3498DB" />
        <GlassFrame position={[0, 1, 0]} color="#F0F3F4" />
    </Canvas>
);

export default GlassScene;
