import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, FileText, Award, Mail, BarChart3, ArrowRight, Sparkles, Zap, Target, Star, TrendingUp, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import studentsHero from "@/assets/students-hero.jpg";
import featureResume from "@/assets/feature-resume-modern.jpg";
import featureJobs from "@/assets/feature-jobs-modern.jpg";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  stat?: string;
  statLabel?: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Briefcase,
    title: "Smart Job Board",
    description: "Forget endless scrolling. Our AI learns what you want and surfaces opportunities you'll actually love. Get matched with roles that fit your skills, goals, and vibe.",
    image: featureJobs,
    stat: "10x",
    statLabel: "Faster Job Discovery",
  },
  {
    icon: FileText,
    title: "Resume Builder That Doesn't Suck",
    description: "No more staring at blank templates. Our AI helps you craft a resume that actually gets past those annoying ATS bots and catches recruiter eyes.",
    image: featureResume,
    stat: "92%",
    statLabel: "ATS Pass Rate",
  },
  {
    icon: Award,
    title: "Instant Resume Feedback",
    description: "Get real talk on your resume in seconds. We'll tell you exactly what's working and what's not - no sugar coating, just actionable insights.",
    image: featureResume,
    stat: "30 sec",
    statLabel: "Average Feedback Time",
  },
  {
    icon: Mail,
    title: "Cover Letters Made Easy",
    description: "Stop copying templates. Our AI helps you write compelling, personalized cover letters that sound like you - just way more polished.",
    image: featureResume,
    stat: "5 min",
    statLabel: "To Perfect Letter",
  },
  {
    icon: BarChart3,
    title: "Track Everything, Miss Nothing",
    description: "Keep tabs on every application with smart reminders and follow-ups. Never wonder 'did I apply there?' again.",
    image: featureJobs,
    stat: "100%",
    statLabel: "Organized Applications",
  },
];

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Apply to 10 jobs in the time it used to take for one. Seriously.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Actually Get Interviews",
    description: "Optimized resumes = more callbacks. It's that simple.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Stand Out",
    description: "Look like a pro, even if this is your first rodeo.",
    color: "from-purple-500 to-pink-500",
  },
];

const Students = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
        <VideoBackground opacity={0.25} />
        
        <div className="container relative mx-auto px-4 z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-xl"
              >
                <Star className="h-4 w-4 fill-primary" />
                100% Free Forever
              </motion.div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-foreground">Land Your</span>
                <span className="block text-primary">
                  Dream Job
                </span>
              </h1>
              
              <p className="mb-4 text-xl md:text-2xl font-medium text-foreground">
                Without the soul-crushing grind
              </p>
              
              <p className="mb-8 text-lg text-muted-foreground">
                AI-powered tools that actually help. No BS, no busywork. 
                Just smart features that get you from application to offer faster.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl text-lg px-8">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: CheckCircle, text: "No credit card needed" },
                  { icon: CheckCircle, text: "Set up in 2 minutes" },
                  { icon: CheckCircle, text: "Land interviews faster" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img 
                src={studentsHero} 
                alt="Students celebrating career success"
                className="relative rounded-3xl shadow-2xl border-4 border-background"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  10x
                </div>
                <div className="text-sm text-muted-foreground">Faster Applications</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Everything you need to{" "}
              <span className="text-primary">
                succeed
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 bg-card p-8 transition-all hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative">
                    <motion.div
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Your complete career{" "}
              <span className="text-primary">
                toolkit
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Everything you need in one place. No more juggling ten different apps.
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
                className={`grid gap-12 lg:gap-16 items-center ${
                  index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg"
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h3 className="mb-4 text-3xl font-bold md:text-4xl">{feature.title}</h3>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  {feature.stat && (
                    <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="text-4xl font-bold text-primary">{feature.stat}</div>
                      <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                    </div>
                  )}
                  
                  <Button className="bg-primary hover:bg-primary/90 shadow-lg transition-all group">
                    Try It Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="relative rounded-2xl shadow-2xl border-4 border-background"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-center shadow-2xl"
          >
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Ready to skip the struggle?
                </h2>
                <p className="mb-8 text-xl text-white/90 mx-auto max-w-2xl">
                  Join thousands of students who are landing offers faster with ApplyLab
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="secondary" className="shadow-2xl text-lg px-8 bg-white text-primary hover:bg-white/90">
                      Start Your Journey
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Students;
