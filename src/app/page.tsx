'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* 🌆 Animated Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <Image
          src="https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Vamika Fashion Background"
          fill
          priority
          className="object-cover object-center brightness-[0.65]"
        />
      </motion.div>

      {/* 🔷 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#000000]/90 mix-blend-multiply" />

      {/* ✨ Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 md:px-12 text-center text-white space-y-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Discover <span className="text-blue-400">Vamika</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Where timeless fashion meets cutting-edge technology. Vamika brings
          you curated collections designed to empower your individuality and
          elevate your everyday look — bold, minimal, and undeniably elegant.
        </p>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto italic">
          “Every outfit tells a story. Let yours begin with Vamika.”
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-7 py-3 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-all">
            Explore Collection
          </Button>
          <Button
            variant="outline"
            className="border border-blue-400 text-blue-300 hover:bg-blue-500/20 text-lg px-7 py-3 rounded-2xl transition-all"
          >
            Our Story
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-sm text-gray-400"
        >
          Trusted by over{' '}
          <span className="text-blue-400 font-semibold">50,000+</span> fashion
          enthusiasts worldwide
        </motion.div>
      </motion.div>
    </section>
  );
}