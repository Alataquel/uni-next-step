import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, TrendingUp } from "lucide-react";

const PilotMetrics = () => {
  const pilotProgress = (5 / 10) * 100;

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            {/* Pilot Live Card */}
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Pilot Live
                </Badge>
                <Building2 className="h-5 w-5 text-primary/60" />
              </div>
              <div className="mb-2">
                <div className="text-3xl font-bold text-foreground">5 universities</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Onboarding student cohorts now
              </p>
            </Card>

            {/* In Pipeline Card */}
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  In Pipeline
                </Badge>
                <TrendingUp className="h-5 w-5 text-accent/60" />
              </div>
              <div className="mb-2">
                <div className="text-3xl font-bold text-foreground">10 universities</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Formalizing pilots & partnerships
              </p>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="p-4 border bg-card/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">2025 pilot target</span>
              <span className="text-sm text-muted-foreground">5 / 10</span>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pilotProgress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Expanding pilots this semester
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotMetrics;
