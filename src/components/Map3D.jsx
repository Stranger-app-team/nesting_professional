import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Bus, Plane, TrainFront, Car } from 'lucide-react';
import puneMapImg from '../assets/image/pune-location.png';

// Scale factor for the map (2x)
const MAP_SCALE = 80;

// The map image center is [0,0,0]. 
// Original Chidiya Ghar was at roughly [-0.15 * MAP_SCALE, 0, -0.18 * MAP_SCALE] = [-12, 0, -14.4].
// We want Chidiya Ghar to be exactly at [0,0,0] for perfect framing and zero cut-offs.
// So we shift the map geometry underneath it by [+12, 0, +14.4].
const MAP_OFFSET = [12, -0.1, 14.4];

function MapSurface() {
  const texture = useLoader(THREE.TextureLoader, puneMapImg);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={MAP_OFFSET}>
      <planeGeometry args={[MAP_SCALE, MAP_SCALE]} />
      <meshBasicMaterial map={texture} transparent={true} opacity={0.9} />
    </mesh>
  );
}

// Center Pin (Chidiya Ghar)
function CenterPin() {
  return (
    <group position={[0, 0, 0]}>
      {/* 3D Pin representation */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.3, 1.4, 16]} />
        <meshStandardMaterial color="#7B2D16" />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#7B2D16" />
      </mesh>
      
      {/* HTML Label */}
      <Html position={[0, 2.6, 0]} center zIndexRange={[100, 0]}>
        <div className="bg-[#7B2D16] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-md shadow-xl whitespace-nowrap tracking-wide border border-white/20">
          Chidiya Ghar
        </div>
      </Html>
    </group>
  );
}

// A single moving vehicle along a path
function AnimatedRoute({ start, end, IconComponent, color, duration = 4, delay = 0 }) {
  const groupRef = useRef();
  const iconRef = useRef();

  // Create a curved path (CatmullRomCurve3)
  const curve = useMemo(() => {
    const midPoint = new THREE.Vector3(
      (start[0] + end[0]) / 2,
      Math.max(3, Math.abs(start[0] - end[0]) * 0.4), // arch height
      (start[2] + end[2]) / 2
    );
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      midPoint,
      new THREE.Vector3(...end),
    ]);
  }, [start, end]);

  // Points for drawing the dashed line
  const points = useMemo(() => curve.getPoints(50), [curve]);

  useFrame(({ clock }) => {
    const t = ((clock.elapsedTime + delay) % duration) / duration;
    if (groupRef.current) {
      // Get position on curve
      const position = curve.getPointAt(t);
      groupRef.current.position.copy(position);
    }
    
    // Simple fade in/out near start and end
    if (iconRef.current) {
      let opacity = 1;
      if (t < 0.1) opacity = t * 10;
      if (t > 0.9) opacity = (1 - t) * 10;
      iconRef.current.style.opacity = opacity;
    }
  });

  return (
    <group>
      {/* The Route Path Line */}
      <Line
        points={points}
        color={color}
        lineWidth={2.5}
        dashed={true}
        dashSize={0.5}
        gapSize={0.25}
        opacity={0.5}
        transparent
      />
      
      {/* The Moving Vehicle - No Background, Stroke 1.5, Icon Color #7B2D16 */}
      <group ref={groupRef}>
        <Html center zIndexRange={[90, 0]}>
          <div 
            ref={iconRef}
            className="flex items-center justify-center"
          >
            <IconComponent 
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B2D16]" 
              strokeWidth={1.5} 
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.4))' }} 
            />
          </div>
        </Html>
      </group>
    </group>
  );
}

// Distances scaled 2x and mapped relative to Chidiya Ghar [0,0,0]
const routes = [
  { id: 'highstreet', title: 'Balewadi High St.', start: [2, 0, 1.6], icon: Bus, color: '#E68A3B', delay: 0, duration: 4 },
  { id: 'stadium', title: 'Stadium', start: [-2, 0, -2.4], icon: Car, color: '#C9A06A', delay: 1.2, duration: 5 },
  { id: 'ithub', title: 'Pune IT Hub', start: [12, 0, 14.4], icon: TrainFront, color: '#4A6FA5', delay: 0.5, duration: 6 },
  { id: 'perks', title: 'Airport / Transit', start: [21.6, 0, 8], icon: Plane, color: '#D95D39', delay: 2.1, duration: 7 },
];

export default function Map3D() {
  return (
    <div className="w-full h-full min-h-[400px] bg-transparent rounded-[20px] overflow-hidden relative">
      <Canvas camera={{ position: [0, 14, 12], fov: 40 }}>
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />

        <Suspense fallback={null}>
          {/* Map Elements */}
          <MapSurface />
          <CenterPin />
          
          {/* Render animated routes */}
          {routes.map((route) => (
            <React.Fragment key={route.id}>
              <AnimatedRoute 
                start={route.start} 
                end={[0, 0, 0]} 
                IconComponent={route.icon} 
                color={route.color}
                delay={route.delay}
                duration={route.duration}
              />
              {/* Origin Marker Label */}
              <Html position={[route.start[0], 0.2, route.start[2]]} center zIndexRange={[50, 0]}>
                <div className="bg-[#2A1205]/90 text-[#FDF8F4] text-[9.5px] sm:text-[10px] font-medium px-2 py-1 rounded shadow-sm whitespace-nowrap border border-white/10 opacity-70">
                  {route.title}
                </div>
              </Html>
            </React.Fragment>
          ))}
        </Suspense>

        {/* Controls - Fixed to look at Chidiya Ghar, No Zoom, No Pan, No AutoRotate */}
        <OrbitControls 
          target={[0, 0, 0]}
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2} 
          minPolarAngle={Math.PI / 6} 
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
