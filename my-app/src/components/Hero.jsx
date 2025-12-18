
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedShape = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#5A6D7A"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 text-center bg-gradient-to-br from-[#F5F5F5] to-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <AnimatedShape />
        </Canvas>
      </div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-bold text-[#222222]"
        >
          Développeur Web et web mobile
        </motion.h1>
        <p className="mb-6 text-lg text-[#5A6D7A]">
          Je conçois des sites personnalisés et performants pour les indépendants et petites entreprises.
        </p>
        <a href="#projects" className="px-6 py-3 text-[#FAFAFA] transition bg-[#333333] rounded hover:bg-[#5A6D7A]">
          Voir mes projets
        </a>
      </motion.div>
    </section>
  );
}
