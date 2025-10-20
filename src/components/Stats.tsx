const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "50+", label: "University Partners" },
  { value: "25K+", label: "Applications Tracked" },
  { value: "89%", label: "Student Satisfaction" },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
