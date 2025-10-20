const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-bold">
                apply<span className="text-primary">lab</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered career acceleration platform for students and universities.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">For Students</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Job Board</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Grader</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cover Letters</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">For Universities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Outcomes Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Market Insights</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ApplyLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
