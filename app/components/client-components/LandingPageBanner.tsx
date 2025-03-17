"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Link from 'next/link';

// Reusable Glass Frame Component using Three.js and React Three Fiber
const GlassFrame = ({ color = '#ffffff', ...props }) => {
    const mesh = useRef<any>('');
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Ref for the lens material
    const lensMaterial = useRef<any>('');

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;

        // Subtle glint effect on the lens
        if (lensMaterial.current) {
            lensMaterial.current.emissiveIntensity = THREE.MathUtils.lerp(
                lensMaterial.current.emissiveIntensity,
                hovered ? 0.5 : 0.1, // Slightly brighter when hovered
                0.05 // Smoothing factor
            );
        }
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1, 0.5, 0.1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : color} />
            {/* Add lens to the glasses */}
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
                    ior={1.5} // Index of refraction
                />
            </mesh>
        </mesh>
    );
};

const LandingPageBanner = () => {
    // Animation variants for the main container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3, // Stagger the animation of children
            },
        },
    };

    // Animation variants for text elements
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for the buttons
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                yoyo: Infinity, // Oscillate between the two states
            },
        },
        tap: { scale: 0.95 },
    };

    // Animation variants for the glasses display
    const glassesVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Animation variants for floating elements
    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <motion.div
            className="relative w-full h-[calc(100vh-128px)] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-18">
                {/* Left side - Text Content */}
                <motion.div
                    className="z-10 md:w-1/2 text-white pt-16 md:pt-0"
                    variants={textVariants}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        variants={textVariants}
                    >
                        Explore the Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            of Vision
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl mb-8 max-w-lg text-gray-300"
                        variants={textVariants}
                    >
                        Experience eyewear redefined with cutting-edge design and unparalleled clarity.
                        Step into a new dimension of style and functionality.
                    </motion.p>

                    <motion.div
                        className="flex space-x-4"
                        variants={buttonVariants}
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            
                        >
                          <Link href={'/products'}>Shope Now</Link>
                        </motion.button>
                        <motion.button
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Try Virtual
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right side - Glasses Display using React Three Fiber */}
                <motion.div
                    className="relative md:w-1/2 h-96 mt-16 md:mt-0 z-10"
                    variants={glassesVariants}
                >
                    {isClient && (
                        <Canvas className="w-full h-full">
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[0, 1, 1]} intensity={0.8} />
                            <GlassFrame position={[-1.5, 0, 0]} color="#FF5733" />
                            <GlassFrame position={[1.5, 0, 0]} color="#3498DB" />
                            <GlassFrame position={[0, 1, 0]} color="#F0F3F4" />
                        </Canvas>
                    )}
                </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-yellow-500"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-green-500"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
            />

            <motion.div
                className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full bg-red-400"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
            />
        </motion.div>
    );
};

export default LandingPageBanner;
