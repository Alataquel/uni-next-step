import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Database, AlertCircle, ArrowRight, Building2, LineChart, UserCheck, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import heroUniversity from "@/assets/hero-university.jpg";
import featureAnalytics from "@/assets/feature-analytics.jpg";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Database,
    title: "Comprehensive Outcome Tracking",
    description: "Real-time visibility into placement rates, internship status, and career readiness metrics across your entire student population. Make data-driven decisions with confidence.",
    image: featureAnalytics,
  },
  {
    icon: TrendingUp,
    title: "Labor Market Intelligence",
    description: "Access comprehensive labor market insights to align curriculum with industry demands. Help students prepare for in-demand roles with up-to-date market data.",
    image: featureAnalytics,
  },
  {
    icon: Target,
    title: "Skills Gap Analysis",
    description: "Data-driven insights on skills gaps and emerging competencies to guide curriculum development, career counseling, and program improvements.",
    image: featureAnalytics,
  },
  {
    icon: AlertCircle,
    title: "Proactive Student Support",
    description: "Identify at-risk students who need career guidance before they fall behind. Enable your team to provide timely, targeted support where it's needed most.",
    image: featureAnalytics,
  },
  {
    icon: Users,
    title: "Engagement & ROI Metrics",
    description: "Track student engagement with career services and measure program effectiveness. Demonstrate ROI to stakeholders with comprehensive analytics and reporting.",
    image: featureAnalytics,
  },
];

const benefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Measurable Impact",
    description: "Data-driven insights help increase placement rates and demonstrate value to stakeholders.",
  },
  {
    icon: UserCheck,
    title: "Better Student Outcomes",
    description: "Identify and assist students who need career guidance with targeted interventions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSO, compliance certifications, and dedicated support.",
  },
];

const Universities = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur">
                <Building2 className="h-4 w-4" />
                Trusted by Leading Universities
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                Your Partner in{" "}
                <span className="relative inline-block">
                  Career Excellence
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 blur-sm"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
                We partner exclusively with universities to transform career outcomes. Your institution is our client, your success is our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30"></div>
              <motion.img 
                src={heroUniversity} 
                alt="University career services analytics"
                className="relative rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Partner with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ApplyLab
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We're not a marketplace. We're your dedicated partner in delivering exceptional career services.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-xl hover:border-accent/50 h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
                  <div className="relative">
                    <motion.div
                      className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <benefit.icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Enterprise-Grade{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Career Platform
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive tools to support students, track outcomes, and demonstrate the value of your career services.
            </p>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold md:text-3xl">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-primary blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="relative rounded-xl shadow-xl border border-border"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
                Let's Build Something Great Together
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                Join leading universities partnering with ApplyLab to deliver exceptional career outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Request Information
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
