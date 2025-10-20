import { motion } from "framer-motion";
import { Briefcase, FileText, GraduationCap, Target, TrendingUp, Users } from "lucide-react";

interface VideoBackgroundProps {
  opacity?: number;
  withFloatingObjects?: boolean;
}

interface FloatingObject {
  Icon: React.ElementType;
  delay: number;
  duration: number;
  startX: string;
  startY: string;
  color: string;
}

const floatingObjects: FloatingObject[] = [
  { Icon: FileText, delay: 0, duration: 20, startX: "10%", startY: "20%", color: "text-primary" },
  { Icon: Briefcase, delay: 2, duration: 25, startX: "80%", startY: "15%", color: "text-accent" },
  { Icon: GraduationCap, delay: 4, duration: 22, startX: "15%", startY: "70%", color: "text-primary" },
  { Icon: Target, delay: 1, duration: 24, startX: "85%", startY: "65%", color: "text-accent" },
  { Icon: TrendingUp, delay: 3, duration: 23, startX: "50%", startY: "30%", color: "text-primary" },
  { Icon: Users, delay: 5, duration: 21, startX: "45%", startY: "80%", color: "text-accent" },
];

const VideoBackground = ({ opacity = 0.3, withFloatingObjects = false }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Career Objects */}
      {withFloatingObjects && floatingObjects.map((obj, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            left: obj.startX, 
            top: obj.startY,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            left: [obj.startX, `${parseFloat(obj.startX) + (Math.random() * 20 - 10)}%`, obj.startX],
            top: [obj.startY, `${parseFloat(obj.startY) + (Math.random() * 20 - 10)}%`, obj.startY],
            opacity: [0, opacity * 1.5, opacity * 1.5, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: obj.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: obj.delay,
          }}
        >
          <motion.div
            className={`${obj.color} opacity-20`}
            whileHover={{ scale: 1.2, opacity: 0.4 }}
          >
            <obj.Icon className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export default VideoBackground;
