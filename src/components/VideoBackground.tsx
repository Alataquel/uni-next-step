import { motion } from "framer-motion";

interface VideoBackgroundProps {
  opacity?: number;
}

const VideoBackground = ({ opacity = 0.3 }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2))",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))",
            "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
            opacity: [opacity * 0.5, opacity, opacity * 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.2) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export default VideoBackground;
