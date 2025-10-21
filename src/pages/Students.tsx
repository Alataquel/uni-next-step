import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedFeature from "@/components/AnimatedFeature";
import DemoVideo from "@/components/DemoVideo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { benefits, features, trustItems } from "@/data/student-content";

const Students = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-subtle">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-xl"
            >
              <Star className="h-4 w-4 fill-primary" />
              100% Free Forever
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-foreground mb-2">Land Your</span>
              <span className="block text-primary">
                Dream Job
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              AI-powered tools that actually help. No BS, no busywork. 
              Just smart features that get you from application to offer faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            >
              {trustItems.map((item, i) => (
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
      </section>

      {/* Demo Video Section */}
      <DemoVideo 
        videoId="dQw4w9WgXcQ"
        title="See ApplyLab in Action"
        description="Watch how students are landing their dream jobs faster with our AI-powered tools"
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 bg-card p-8 transition-all hover:shadow-2xl hover:border-primary h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
                  <div className="relative">
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
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
              <AnimatedFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                position={feature.position}
              />
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
                      <ArrowRight className="ml-2 h-5 w-5" />
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
