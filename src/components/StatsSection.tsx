import { motion, useReducedMotion } from "framer-motion";
import StatsCounter from "@/components/StatsCounter";

interface Stat {
  end: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    end: 10,
    suffix: "+",
    label: "Active Pilot Programs",
  },
  {
    end: 5,
    suffix: "K+",
    label: "Job Postings",
  },
  {
    end: 1,
    suffix: "K+",
    label: "Resumes Analyzed",
  },
  {
    end: 95,
    suffix: "%",
    label: "Student Satisfaction",
  },
];

const StatsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const getAnimationProps = () => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 30 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  });

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          {...getAnimationProps()}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                <StatsCounter end={stat.end} suffix={stat.suffix || ""} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
