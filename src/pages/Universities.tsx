import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedFeature from "@/components/AnimatedFeature";
import DemoVideo from "@/components/DemoVideo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Database, AlertCircle, ArrowRight, Building2, LineChart, UserCheck, Shield, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Better Outcomes",
    description: "Higher placement rates. Better job matches. Happier students.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: UserCheck,
    title: "Smarter Support",
    description: "Target help where it's needed most. Stop wasting time on blanket approaches.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Bank-level security, SSO, compliance certifications. We've got you covered.",
    color: "from-purple-500 to-pink-500",
  },
];

const Universities = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-subtle">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-32 w-[550px] h-[550px] bg-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-xl"
            >
              <Building2 className="h-4 w-4" />
              Partnering with Leading Universities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-foreground mb-2">Career Services</span>
              <span className="block text-primary">
                That Actually Work
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Universities are our clients. Your success is literally our business model. 
              We give students amazing tools for free and help you prove the impact of your career services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl text-lg px-8">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            >
              {[
                { icon: Rocket, text: "Quick setup" },
                { icon: Shield, text: "Enterprise security" },
                { icon: UserCheck, text: "Dedicated support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4 text-accent" />
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
        title="See How Universities Win With ApplyLab"
        description="Discover how our platform helps institutions deliver measurable career outcomes"
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
              Why universities{" "}
              <span className="text-primary">
                choose us
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              We're not a job board. We're your career services powerhouse.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 bg-card p-8 transition-all hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative">
                    <motion.div
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, duration: 0.3 }}
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
              Everything you need in{" "}
              <span className="text-primary">
                one platform
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Stop cobbling together ten different tools. We've got it all.
            </p>
          </motion.div>

          <div className="space-y-32">
            <AnimatedFeature
              icon={Database}
              title="See The Whole Picture"
              description="Track every student's career journey in real-time. Know who's thriving, who needs help, and exactly how to support them. No more guessing - just data-driven decisions that improve outcomes across your institution."
              position="left"
            />

            <AnimatedFeature
              icon={TrendingUp}
              title="Stay Ahead of The Market"
              description="Get the inside scoop on what employers actually want. Align your programs with real market demand and prepare students for jobs that exist. Access comprehensive labor market analytics and industry trends."
              position="right"
            />

            <AnimatedFeature
              icon={Target}
              title="Spot Skills Gaps Before They Matter"
              description="Know exactly what skills your students have and what they're missing. Guide curriculum decisions with real data, not hunches. Identify emerging skills gaps and address them proactively."
              position="left"
            />

            <AnimatedFeature
              icon={AlertCircle}
              title="Help Students Before They Fall Behind"
              description="Identify at-risk students early and intervene with targeted support. Be proactive, not reactive. Our early warning system helps you provide personalized assistance when it matters most."
              position="right"
            />

            <AnimatedFeature
              icon={Users}
              title="Prove Your Impact"
              description="Show stakeholders exactly how your career services move the needle. Track engagement, measure ROI, and demonstrate real outcomes with comprehensive analytics and beautiful reporting tools."
              position="left"
            />
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
                  Let's transform outcomes together
                </h2>
                <p className="mb-8 text-xl text-white/90 mx-auto max-w-2xl">
                  We're building the future of career services. Want in?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="secondary" className="shadow-2xl text-lg px-8 bg-white text-primary hover:bg-white/90">
                      Partner With Us
                      <Rocket className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                    Talk to Sales
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

export default Universities;
