import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Briefcase, Building2, Sparkles, Zap, TrendingUp, Users, Award, Star, Rocket } from "lucide-react";
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
      <section className="relative overflow-hidden py-20 md:py-32 min-h-[95vh] flex items-center">
        <VideoBackground opacity={0.25} />

        <div className="container relative mx-auto px-4 z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-xl"
            >
              <Star className="h-4 w-4 fill-primary" />
              Trusted by 50+ Universities Worldwide
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-foreground mb-2">Where</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]">
                Careers Take Off
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We partner with universities to give students powerful career tools - for free.
              You get the data and insights to prove your impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <Link to="/universities">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all text-lg px-8">
                    Partner With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/students">
                <Button size="lg" variant="outline" className="backdrop-blur-xl border-2 text-lg px-8">
                  For Students
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            >
              {[
                { icon: Check, text: "100% Free for Students" },
                { icon: Check, text: "Universities Are Our Clients" },
                { icon: Check, text: "AI-Powered Intelligence" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
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
