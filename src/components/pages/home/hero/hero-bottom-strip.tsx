const heroStats = [
  {
    value: "20+",
    label: "Years in Practice",
  },
  {
    value: "10,000+",
    label: "Consultations Delivered",
  },
  {
    value: "2,000+",
    label: "Students Trained",
  },
  {
    value: "4.9 / 5",
    label: "Average Client Rating",
  },
];

const HeroBottomStrip = () => {
  return (
    <div className="bg-accent-foreground w-full">
      <div className="mx-auto grid w-full max-w-300 grid-cols-2 gap-8 px-8 py-4 text-white sm:grid-cols-4 2xl:px-0">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <p className="text-primary font-mono text-2xl leading-none tracking-normal">
              {stat.value}
            </p>
            <p className="text-sm leading-tight text-white/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBottomStrip;
