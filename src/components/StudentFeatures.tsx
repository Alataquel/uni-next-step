import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Award, Mail, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Smart Job Board",
    description: "Discover curated internship and job opportunities matched to your profile and career goals.",
  },
  {
    icon: FileText,
    title: "AI Resume Builder",
    description: "Create professional, ATS-optimized resumes with intelligent suggestions and templates.",
  },
  {
    icon: Award,
    title: "Resume Grader",
    description: "Get instant feedback on your resume with actionable insights to improve your success rate.",
  },
  {
    icon: Mail,
    title: "Cover Letter Maker",
    description: "Generate personalized cover letters tailored to each position with AI assistance.",
  },
  {
    icon: BarChart3,
    title: "Application Tracker",
    description: "Monitor all your applications in one place with status updates and follow-up reminders.",
  },
];

const StudentFeatures = () => {
  return (
    <section id="students" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            For Students
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Smart Tools for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to find opportunities, optimize applications, and land your dream role.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex flex-col justify-center items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Track Your Progress</h3>
            <p className="mb-4 text-muted-foreground">
              Monitor success metrics and improve your application strategy
            </p>
            <Button className="bg-gradient-primary shadow-primary hover:opacity-90 transition-opacity group">
              Start Applying
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Card>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">See Your Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Applications Sent</span>
                  <span className="text-2xl font-bold text-primary">47</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Interviews Scheduled</span>
                  <span className="text-2xl font-bold text-accent">12</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="font-medium">Success Rate</span>
                  <span className="text-2xl font-bold text-primary">25.5%</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg bg-gradient-subtle flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-muted-foreground">Your Dashboard Preview</div>
                <BarChart3 className="mx-auto h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeatures;
