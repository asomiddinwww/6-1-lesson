import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function OwnerSuccessPage() {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    let particles = [];
    const createParticles = () => {
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);
    animate();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      <canvas
        id="particle-canvas"
        className="absolute inset-0 w-full h-full"
      ></canvas>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-md text-center bg-white/10 backdrop-blur-xl shadow-2xl p-10 rounded-3xl border border-white/20"
      >
        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <CheckCircle size={80} className="mx-auto text-green-400" />
        </motion.div>

        <h1 className="text-3xl font-bold mt-6 mb-3">Login Successful!</h1>
        <p className="text-lg text-gray-200 mb-6">
          Welcome back! You have successfully logged into your account.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg"
        >
          Go to Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
}