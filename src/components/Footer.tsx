import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "For Students",
    links: [
      { label: "Job Board", href: "/students" },
      { label: "Resume Builder", href: "/students" },
      { label: "Resume Grader", href: "/students" },
      { label: "Cover Letters", href: "/students" },
    ],
  },
  {
    title: "For Universities",
    links: [
      { label: "Partner Portal", href: "/universities" },
      { label: "Outcomes Tracking", href: "/universities" },
      { label: "Market Insights", href: "/universities" },
      { label: "Request Demo", href: "/universities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 group">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </motion.div>
              <span className="text-xl font-bold">
                apply<span className="text-primary">lab</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered career acceleration platform partnering with universities to transform student outcomes.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-foreground transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ApplyLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
