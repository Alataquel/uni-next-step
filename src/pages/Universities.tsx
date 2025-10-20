import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Database, AlertCircle, ArrowRight, Building2, LineChart, UserCheck } from "lucide-react";
import heroUniversity from "@/assets/hero-university.jpg";
import featureAnalytics from "@/assets/feature-analytics.jpg";

const features = [
  {
    icon: Database,
    title: "Student Outcomes Tracking",
    description: "Real-time visibility into placement rates, internship status, and career readiness metrics across your entire student population.",
    image: featureAnalytics,
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Comprehensive labor market insights to align curriculum with industry demands and prepare students for in-demand roles.",
    image: featureAnalytics,
  },
  {
    icon: Target,
    title: "Qualification Insights",
    description: "Data-driven insights on skills gaps and emerging competencies to help guide curriculum development and career counseling.",
    image: featureAnalytics,
  },
  {
    icon: AlertCircle,
    title: "Early Intervention",
    description: "Identify at-risk students who need support before they fall behind, enabling proactive career guidance and resources.",
    image: featureAnalytics,
  },
  {
    icon: Users,
    title: "Engagement Analytics",
    description: "Track student engagement with career services and measure program effectiveness to optimize your offerings.",
    image: featureAnalytics,
  },
];

const benefits = [
  {
    icon: LineChart,
    title: "Improve Outcomes",
    description: "Data-driven insights help increase placement rates and career readiness.",
  },
  {
    icon: UserCheck,
    title: "Support Students",
    description: "Identify and assist students who need career guidance most.",
  },
  {
    icon: Building2,
    title: "Demonstrate Value",
    description: "Showcase ROI and outcomes to stakeholders with comprehensive reporting.",
  },
];

const Universities = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur">
                <Building2 className="h-4 w-4" />
                Enterprise Career Services
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                Transform Career Outcomes with Data
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
                Empower your institution with comprehensive analytics and insights to measure, improve, and showcase student career success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Request Information
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30"></div>
              <img 
                src={heroUniversity} 
                alt="University career services analytics"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Career Services Platform
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to support students and demonstrate the value of your career services.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`}>
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
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-in`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-primary blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="relative rounded-xl shadow-xl border border-border"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
                Partner with ApplyLab
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                Join leading universities transforming career outcomes with data-driven insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
