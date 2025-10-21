import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import StatsCounter from "@/components/StatsCounter";
import AnimatedFeature from "@/components/AnimatedFeature";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Briefcase, Building2, Sparkles, Zap, TrendingUp, Users, Award, Star, Rocket, Target, FileText, BarChart3, Brain, Shield, Globe, CheckCircle2, Mic, FileCheck, BookOpen, FileEdit, Search, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const Index = () => {
  const prefersReducedMotion = useReducedMotion();

  const getAnimationProps = (delay = 0) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3 }
      };
    }
    return {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay }
    };
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-[95vh] flex items-center">
        <VideoBackground opacity={0.85} />

        <div className="container relative mx-auto px-4 z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-xl"
            >
              <Star className="h-4 w-4 fill-primary" />
              Partnering with Leading Universities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-foreground mb-2">Career Acceleration Platform</span>
              <span className="block text-primary">
                Powered by AI
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Empowering universities to deliver exceptional career outcomes for their students through advanced AI technology and comprehensive analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <Link to="/universities">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl text-lg px-8">
                    Partner With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/students">
                <Button size="lg" variant="outline" className="border-2 text-lg px-8">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            {...getAnimationProps()}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                <StatsCounter end={10} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Active Pilot Programs</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                <StatsCounter end={5} suffix="K+" />
              </div>
              <p className="text-sm text-muted-foreground">Job Postings</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                <StatsCounter end={1} suffix="K+" />
              </div>
              <p className="text-sm text-muted-foreground">Resumes Analyzed</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                <StatsCounter end={50} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Partner Companies</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segments We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Segments We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              360° impact on the talent ecosystem with specialized solutions for every stakeholder.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link to="/students">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card p-8 transition-all hover:shadow-2xl hover:border-primary cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
                  <div className="relative text-center">
                    <motion.div
                      className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Briefcase className="h-10 w-10" />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold">Students</h3>
                    <p className="mb-6 text-muted-foreground">
                      Accelerate your career journey with AI-powered tools that provide instant feedback for targeted careers and opportunities.
                    </p>
                    <Button variant="ghost" className="group-hover:text-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Link>

            <Link to="/universities">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group relative overflow-hidden border-2 border-accent/20 bg-card p-8 transition-all hover:shadow-2xl hover:border-accent cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative text-center">
                    <motion.div
                      className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Building2 className="h-10 w-10" />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold">Universities</h3>
                    <p className="mb-6 text-muted-foreground">
                      Engage students and alumni with the most advanced AI-powered career services platform for measurable outcomes.
                    </p>
                    <Button variant="ghost" className="group-hover:text-accent">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group relative overflow-hidden border-2 border-border bg-card p-8 transition-all hover:shadow-2xl hover:border-primary/50 cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
                <div className="relative text-center">
                  <motion.div
                    className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mb-4 text-2xl font-bold">Corporates</h3>
                  <p className="mb-6 text-muted-foreground">
                    Manage talent navigation with intelligent solutions for internal mobility, strategic hiring, and workforce development.
                  </p>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Coming Soon <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Platform Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...getAnimationProps()}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our AI Platform Fuels{" "}
              <span className="text-primary">Your Success</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Advanced AI technology powering intelligent career guidance and personalized recommendations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Brain,
                title: "Large Language Models",
                description: "Powered by state-of-the-art LLMs to understand context, generate personalized content, and provide intelligent career guidance tailored to each student's unique journey.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FileText,
                title: "Natural Language Processing",
                description: "Advanced NLP algorithms analyze resumes, cover letters, and job descriptions to optimize content, improve keyword matching, and enhance application quality.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Skill-Based Matching",
                description: "Intelligent matching algorithms (coming soon) that connect students with opportunities based on their skills, experience, and career goals for better placement outcomes.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Real-Time Feedback Loops",
                description: "Continuous learning system that provides instant, actionable feedback and improves recommendations based on user interactions and success patterns.",
                color: "from-orange-500 to-red-500"
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 bg-card p-8 transition-all hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-10`}></div>
                  <div className="relative">
                    <motion.div
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Universities{" "}
              <span className="text-primary">Choose ApplyLab</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Enterprise Security", description: "Built with security best practices and compliance-ready architecture" },
              { icon: Rocket, title: "Quick Deployment", description: "Get started quickly with seamless integration and comprehensive onboarding support" },
              { icon: CheckCircle2, title: "Measurable Impact", description: "Track student engagement and career outcomes with comprehensive analytics" },
              { icon: Users, title: "Dedicated Support", description: "Personalized onboarding, training, and ongoing support for your institution" },
              { icon: TrendingUp, title: "Continuous Innovation", description: "Regular platform updates with the latest AI advancements and features" },
              { icon: Globe, title: "Scalable Platform", description: "Designed to grow with your institution from pilot programs to full deployment" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
              <span className="text-primary">
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

      {/* Comprehensive Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...getAnimationProps()}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Solutions for{" "}
              <span className="text-primary">Every Career Need</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From resume grading and building to job search and application tracking - with AI-powered cover letters, interview prep, and case study tools.
            </p>
          </motion.div>

          <div className="space-y-32">
            <AnimatedFeature
              icon={FileCheck}
              title="AI-Powered Resume Grader"
              description="Get instant, actionable feedback on your resume with our advanced AI analysis. Our system evaluates formatting, keyword optimization, ATS compatibility, and content quality. Receive detailed scoring across multiple dimensions, personalized improvement suggestions, and industry-specific recommendations to make your resume stand out."
              position="left"
            />

            <AnimatedFeature
              icon={FileEdit}
              title="Resume Builder"
              description="Create professional, ATS-optimized resumes with our intuitive builder. Choose from multiple templates, customize layouts, and let our AI guide you through crafting compelling content. Export in multiple formats and keep all versions organized in one place for different applications."
              position="right"
            />

            <AnimatedFeature
              icon={FileText}
              title="Cover Letter Maker AI"
              description="Generate compelling, personalized cover letters tailored to each job application. Our AI analyzes job descriptions and crafts professional cover letters that highlight your relevant experience and skills. Save time while maintaining authenticity and personalization for every application."
              position="left"
            />

            <AnimatedFeature
              icon={Search}
              title="Job Board"
              description="Discover opportunities from thousands of companies all in one place. Filter by industry, location, experience level, and more. Get personalized job recommendations based on your profile and preferences. Save searches and receive instant alerts when new matching positions are posted."
              position="right"
            />

            <AnimatedFeature
              icon={ListChecks}
              title="Application Tracking"
              description="Manage all your applications in one centralized dashboard. Track application status, set reminders for follow-ups, and visualize your job search pipeline. Never miss a deadline with automated notifications and stay organized throughout your entire job search journey."
              position="left"
            />

            <AnimatedFeature
              icon={Mic}
              title="Interview Preparation (Coming Soon)"
              description="Practice with AI-powered mock interviews and get instant feedback on your responses, body language, and communication skills. Video practice sessions, real-time feedback, common questions database, and performance analytics will help you ace every interview."
              position="right"
            />

            <AnimatedFeature
              icon={BookOpen}
              title="Case Study Prep (Coming Soon)"
              description="Master case interviews with structured frameworks and practice scenarios. Our platform will provide industry-specific case studies, step-by-step solution guides, and expert tips to help you excel in consulting and analytical interviews."
              position="left"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-20 text-center shadow-2xl"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 opacity-20"
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
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
                  <Sparkles className="h-4 w-4" />
                  Join Our Growing Network
                </div>
                <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Ready to Transform Career Outcomes?
                </h2>
                <p className="mb-8 text-xl text-primary-foreground/90 mx-auto max-w-2xl">
                  Partner with ApplyLab to provide world-class career services and demonstrate measurable impact.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/universities">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="secondary" className="group shadow-2xl text-lg px-8">
                        Become a Partner
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur text-lg px-8">
                    Schedule a Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/80"
                >
                  {[
                    { icon: Shield, text: "Enterprise Security" },
                    { icon: Globe, text: "Global Reach" },
                    { icon: Award, text: "Industry Leading" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
