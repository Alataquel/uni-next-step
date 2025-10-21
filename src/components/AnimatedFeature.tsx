import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
}

const AnimatedFeature = ({ icon: Icon, title, description, position = "left" }: AnimatedFeatureProps) => {
  const isLeft = position === "left";

  return (
    <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
      {/* Animated Icon Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative">
          {/* Pulsing Background Circle */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
            style={{ width: "300px", height: "300px", margin: "-50px" }}
          />

          {/* Main Icon with Floating Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative bg-gradient-primary p-12 rounded-3xl shadow-2xl"
          >
            <Icon className="w-32 h-32 text-primary-foreground" strokeWidth={1.5} />
          </motion.div>

          {/* Orbiting Dots */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              className="absolute top-1/2 left-1/2"
              style={{
                width: "180px",
                height: "180px",
                marginLeft: "-90px",
                marginTop: "-90px",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 bg-primary rounded-full absolute top-0 left-1/2 -translate-x-1/2"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default AnimatedFeature;
