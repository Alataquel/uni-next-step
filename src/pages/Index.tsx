import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Briefcase, Building2, Sparkles, Zap, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50 h-full">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
              </span>
              Trusted by Leading Universities Worldwide
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Where{" "}
              <span className="relative inline-block">
                Careers
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              {" "}Begin
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-primary-foreground/90 md:text-xl"
            >
              Empowering universities to transform student career outcomes through 
              intelligent tools and data-driven insights
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 flex flex-wrap justify-center gap-4"
            >
              <Link to="/universities">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/students">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  For Students
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Free for Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Enterprise Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>AI-Powered Platform</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-foreground/60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* University Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
              <Building2 className="h-4 w-4" />
              For University Partners
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your Partner in{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Career Success
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We work exclusively with universities to provide comprehensive career services. 
              Your institution is our client, your success is our mission.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <Link to="/universities">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group relative overflow-hidden border-2 border-accent/20 bg-card p-10 transition-all hover:shadow-2xl hover:border-accent cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold">University Dashboard</h3>
                    <p className="mb-6 text-lg text-muted-foreground">
                      Comprehensive analytics, outcome tracking, and market insights to demonstrate 
                      the value of your career services.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                          <TrendingUp className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-base">Real-time Placement Tracking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                          <Users className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-base">Student Engagement Analytics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                          <Award className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-base">ROI Reporting</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group w-full">
                      Explore Partner Portal
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Link>

            <Link to="/students">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card p-10 transition-all hover:shadow-2xl hover:border-primary cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary">
                      <Briefcase className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold">Student Platform</h3>
                    <p className="mb-6 text-lg text-muted-foreground">
                      Free, powerful tools for students to discover opportunities, optimize applications, 
                      and track their career journey.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">AI-Powered Job Matching</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">Resume Builder & Grader</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">Application Tracking</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group w-full">
                      Start Your Career Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Scale & Impact
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Enterprise-grade platform designed to serve thousands of students while providing 
              actionable insights to career services teams.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="AI-Powered Intelligence"
              description="Advanced machine learning algorithms that match students with opportunities and provide personalized guidance."
              delay={0}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Real-Time Analytics"
              description="Live dashboards showing placement rates, engagement metrics, and outcome trends across your institution."
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="Seamless Integration"
              description="Easy deployment with single sign-on, API access, and integration with your existing student information systems."
              delay={0.2}
            />
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
                Ready to Transform Career Outcomes?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                Join leading universities leveraging ApplyLab to provide world-class career services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/universities">
                  <Button size="lg" variant="secondary" className="group shadow-xl">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Schedule a Demo
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

export default Index;
