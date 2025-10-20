import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Database, AlertCircle, ArrowRight, Building2, LineChart, UserCheck, Shield, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import universityHero from "@/assets/university-hero.jpg";
import featureAnalytics from "@/assets/feature-analytics-modern.jpg";

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
  color: string;
}

const features: Feature[] = [
  {
    icon: Database,
    title: "See The Whole Picture",
    description: "Track every student's career journey in real-time. Know who's thriving, who needs help, and exactly how to support them. No more guessing - just data-driven decisions.",
    image: featureAnalytics,
  },
  {
    icon: TrendingUp,
    title: "Stay Ahead of The Market",
    description: "Get the inside scoop on what employers actually want. Align your programs with real market demand and prepare students for jobs that exist.",
    image: featureAnalytics,
  },
  {
    icon: Target,
    title: "Spot Skills Gaps Before They Matter",
    description: "Know exactly what skills your students have and what they're missing. Guide curriculum decisions with real data, not hunches.",
    image: featureAnalytics,
  },
  {
    icon: AlertCircle,
    title: "Help Students Before They Fall Behind",
    description: "Identify at-risk students early and intervene with targeted support. Be proactive, not reactive.",
    image: featureAnalytics,
  },
  {
    icon: Users,
    title: "Prove Your Impact",
    description: "Show stakeholders exactly how your career services move the needle. Track engagement, measure ROI, and demonstrate real outcomes.",
    image: featureAnalytics,
  },
];

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
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-xl"
              >
                <Building2 className="h-4 w-4" />
                Partnering with 50+ Universities
              </motion.div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-foreground">Career Services</span>
                <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]">
                  That Actually Work
                </span>
              </h1>
              
              <p className="mb-4 text-xl md:text-2xl font-medium text-foreground">
                We're your partner, not a vendor
              </p>
              
              <p className="mb-8 text-lg text-muted-foreground">
                Universities are our clients. Your success is literally our business model. 
                We give students amazing tools for free and help you prove the impact of your career services.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-accent to-primary shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all text-lg px-8">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <Button size="lg" variant="outline" className="backdrop-blur-xl border-2 text-lg px-8">
                  Schedule Demo
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: Rocket, text: "Quick setup" },
                  { icon: Shield, text: "Enterprise security" },
                  { icon: UserCheck, text: "Dedicated support" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <item.icon className="h-4 w-4 text-accent" />
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
                className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-2xl opacity-30"
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
                src={universityHero} 
                alt="University analytics dashboard"
                className="relative rounded-3xl shadow-2xl border-4 border-background"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  +24%
                </div>
                <div className="text-sm text-muted-foreground">Placement Rate Increase</div>
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
              Why universities{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
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
              Everything you need in{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                one platform
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Stop cobbling together ten different tools. We've got it all.
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
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary shadow-lg"
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h3 className="mb-4 text-3xl font-bold md:text-4xl">{feature.title}</h3>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <Button className="bg-gradient-to-r from-accent to-primary shadow-lg hover:shadow-xl transition-all group">
                    See It In Action
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
                    <div className="absolute -inset-6 bg-gradient-to-r from-accent via-primary to-accent blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-primary to-accent p-12 md:p-20 text-center shadow-2xl"
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
                    <Button size="lg" variant="secondary" className="shadow-2xl text-lg px-8">
                      Partner With Us
                      <Rocket className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl text-lg px-8">
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
