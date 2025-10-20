import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Briefcase, Building2, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
              </span>
              AI-Powered Career Acceleration Platform
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
              Accelerate Your{" "}
              <span className="relative inline-block">
                Career Journey
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 blur-sm"></span>
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl animate-fade-in">
              The intelligent career services platform connecting students with opportunities 
              and empowering universities with data-driven insights.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-4 animate-fade-in">
              <Link to="/students">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  For Students
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/universities">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  For Universities
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80 animate-fade-in">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Free for Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>University Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>AI-Powered Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Audience Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you're a student looking for opportunities or a university tracking outcomes, we've got you covered.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Students Card */}
            <Link to="/students">
              <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card p-8 transition-all hover:shadow-2xl hover:border-primary cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">For Students</h3>
                  <p className="mb-6 text-muted-foreground">
                    Find internships, optimize your resume, create cover letters, and track all your applications in one place.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Smart Job Board</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>AI Resume Builder & Grader</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Cover Letter Generator</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Application Tracker</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group w-full">
                    Explore Student Tools
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </Link>

            {/* Universities Card */}
            <Link to="/universities">
              <Card className="group relative overflow-hidden border-2 border-accent/20 bg-card p-8 transition-all hover:shadow-2xl hover:border-accent cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-primary">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">For Universities</h3>
                  <p className="mb-6 text-muted-foreground">
                    Track student outcomes, analyze market trends, and demonstrate the value of your career services with comprehensive data.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span>Student Outcomes Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span>Market Analysis & Insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span>Early Intervention Alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span>Engagement Analytics</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group w-full">
                    Explore University Tools
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Leverage artificial intelligence to optimize resumes, match opportunities, and provide intelligent recommendations.
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Make informed decisions with comprehensive analytics and real-time insights into career outcomes.
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Intuitive interface designed for both students and administrators, no technical expertise required.
                </p>
              </div>
            </Card>
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
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                Join the next generation of career services. Start accelerating outcomes today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="group shadow-xl">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                  Schedule a Demo
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

export default Index;
