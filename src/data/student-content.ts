import { 
  Briefcase, 
  FileText, 
  Award, 
  Mail, 
  BarChart3, 
  Zap, 
  Target, 
  Sparkles, 
  CheckCircle,
  Mic,
  BookOpen
} from "lucide-react";
import { Benefit, Feature, TrustItem } from "@/types/student-features";

export const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Apply to 10 jobs in the time it used to take for one. Seriously.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Get Better Results",
    description: "AI-graded resumes and tailored cover letters = better applications.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Stand Out",
    description: "Look like a pro, even if this is your first rodeo.",
    color: "from-purple-500 to-pink-500",
  },
];

export const features: Feature[] = [
  {
    icon: Briefcase,
    title: "Smart Job Board",
    description: "Forget endless scrolling. Our AI learns what you want and surfaces opportunities you'll actually love. Get matched with roles that fit your skills, goals, and vibe. Discover jobs 10x faster with intelligent matching that understands your career aspirations.",
    position: "left",
  },
  {
    icon: FileText,
    title: "Resume Builder That Doesn't Suck",
    description: "No more staring at blank templates. Our AI helps you craft a resume that actually gets past those annoying ATS bots and catches recruiter eyes. With a 92% ATS pass rate, your resume will stand out from the crowd.",
    position: "right",
  },
  {
    icon: Award,
    title: "Instant Resume Feedback",
    description: "Get real talk on your resume in seconds. We'll tell you exactly what's working and what's not - no sugar coating, just actionable insights. Receive comprehensive feedback in under 30 seconds to perfect your application.",
    position: "left",
  },
  {
    icon: Mail,
    title: "Cover Letters Made Easy",
    description: "Stop copying templates. Our AI helps you write compelling, personalized cover letters that sound like you - just way more polished. Create perfect cover letters in just 5 minutes with AI-powered personalization.",
    position: "right",
  },
  {
    icon: BarChart3,
    title: "Track Everything, Miss Nothing",
    description: "Keep tabs on every application with smart reminders and follow-ups. Never wonder 'did I apply there?' again. Stay 100% organized with our comprehensive application tracking system.",
    position: "left",
  },
  {
    icon: Mic,
    title: "Interview Preparation (Coming Soon)",
    description: "Practice with AI-powered mock interviews and get instant feedback on your responses, body language, and communication skills. Video practice sessions, real-time feedback, common questions database, and performance analytics will help you ace every interview.",
    position: "right",
    comingSoon: true,
  },
  {
    icon: BookOpen,
    title: "Case Study Prep (Coming Soon)",
    description: "Master case interviews with structured frameworks and practice scenarios. Our platform will provide industry-specific case studies, step-by-step solution guides, and expert tips to help you excel in consulting and analytical interviews.",
    position: "left",
    comingSoon: true,
  },
];

export const trustItems: TrustItem[] = [
  { icon: CheckCircle, text: "No credit card needed" },
  { icon: CheckCircle, text: "Set up in 2 minutes" },
  { icon: CheckCircle, text: "Get better results faster" },
];
