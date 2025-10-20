import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, FileText, Award, Mail, BarChart3, ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import heroStudents from "@/assets/hero-students.jpg";
import featureResume from "@/assets/feature-resume.jpg";
import featureJobs from "@/assets/feature-jobs.jpg";

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
    icon: Briefcase,
    title: "Smart Job Board",
    description: "Discover curated internship and job opportunities matched to your profile and career goals with AI-powered recommendations.",
    image: featureJobs,
  },
  {
    icon: FileText,
    title: "AI Resume Builder",
    description: "Create professional, ATS-optimized resumes with intelligent suggestions, templates, and real-time feedback.",
    image: featureResume,
  },
  {
    icon: Award,
    title: "Resume Grader",
    description: "Get instant, comprehensive feedback on your resume with actionable insights to maximize your success rate.",
    image: featureResume,
  },
  {
    icon: Mail,
    title: "Cover Letter Maker",
    description: "Generate personalized, compelling cover letters tailored to each position with AI assistance.",
    image: featureResume,
  },
  {
    icon: BarChart3,
    title: "Application Tracker",
    description: "Monitor all your applications in one intuitive dashboard with status updates and follow-up reminders.",
    image: featureJobs,
  },
];

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Apply 10x Faster",
    description: "Autofill applications and optimize your documents in seconds, not hours.",
  },
  {
    icon: Target,
    title: "Higher Success Rate",
    description: "AI-powered optimization increases your chances of landing interviews.",
  },
  {
    icon: Sparkles,
    title: "Stand Out",
    description: "Professional documents that get past ATS and impress recruiters.",
  },
];

const Students = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
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
                <Sparkles className="h-4 w-4" />
                Free for All Students
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                Land Your Dream Role{" "}
                <span className="relative inline-block">
                  Faster
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 blur-sm"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
                Stop wasting time on repetitive applications. Our AI-powered platform helps you apply smarter, faster, and more effectively.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Start Free Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  See How It Works
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
                src={heroStudents} 
                alt="Students collaborating on career development"
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
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-xl hover:border-primary/50 h-full">
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
              Everything You Need to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful tools designed to streamline your job search and maximize your success.
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
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                Ready to Accelerate Your Career?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                Join thousands of students using ApplyLab to land their dream roles faster.
              </p>
              <Button size="lg" variant="secondary" className="group shadow-xl">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Students;
