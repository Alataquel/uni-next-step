import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Database, AlertCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Student Outcomes Tracking",
    description: "Real-time visibility into placement rates, internship status, and career readiness metrics.",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Comprehensive labor market insights to align curriculum with industry demands.",
  },
  {
    icon: Target,
    title: "Qualification Insights",
    description: "Data-driven insights on skills gaps and emerging competencies in your student population.",
  },
  {
    icon: AlertCircle,
    title: "Early Intervention",
    description: "Identify students who need support before they fall behind in their career journey.",
  },
  {
    icon: Users,
    title: "Engagement Analytics",
    description: "Track student engagement with career services and measure program effectiveness.",
  },
];

const UniversityFeatures = () => {
  return (
    <section id="universities" className="bg-gradient-subtle py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
            For Universities
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Data-Driven{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career Services
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Empower your institution with comprehensive analytics and insights to improve student outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/50"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 p-6 flex flex-col justify-center items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">See It In Action</h3>
            <p className="mb-4 text-muted-foreground">
              Schedule a demo to explore the full platform capabilities
            </p>
            <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group">
              Book Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Card>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-64 rounded-lg bg-gradient-subtle flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-muted-foreground">University Dashboard</div>
                <Database className="mx-auto h-16 w-16 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">Real-Time Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Student Engagement</span>
                  <span className="text-2xl font-bold text-primary">89%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Placement Rate</span>
                  <span className="text-2xl font-bold text-accent">67%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Students Supported</span>
                  <span className="text-2xl font-bold text-primary">342</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Applications Tracked</span>
                  <span className="text-2xl font-bold text-accent">1,247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityFeatures;
