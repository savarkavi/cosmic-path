import { aboutStats } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";

const aboutText = [
  "Cosmic Path is a spiritual guidance company founded around the work of Yashkaran Sharma, bringing together astrology, vastu, palmistry, remedies, consultations, astrological products, and structured learning under one disciplined practice.",
  "The company serves people who want more than generic predictions. Through personal horoscope analysis, prashna, Lal Kitab, Jaimini astrology, vastu guidance, palmistry readings, scientific logo design, watch consultation, and carefully chosen remedies, Cosmic Path helps seekers understand their situation clearly and act with steadiness.",
  "Education remains an important part of the work, but it is one part of a wider mission. Courses and webinars are designed for students who want to learn the shastras seriously, while consultations and services support individuals, families, professionals, and businesses looking for practical direction.",
  "At its heart, Cosmic Path exists to make traditional wisdom usable in modern life: honest guidance, grounded remedies, and learning that builds confidence instead of fear.",
];

const AboutCosmicPath = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <p className="text-3xl capitalize md:text-5xl">
        Bridging Ancient{" "}
        <span className="text-accent-foreground italic">Wisdom</span> with
        Modern Life
      </p>
      <div className="text-muted-foreground space-y-5 text-justify font-semibold">
        {aboutText.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Separator className="h-px w-full bg-gray-300" />
      <div className="flex items-center justify-between text-sm">
        {aboutStats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col items-center">
              <p className="text-accent-foreground text-2xl font-semibold">
                {item.stats}
              </p>
              <div className="flex items-center gap-1">
                <Icon size={16} />
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCosmicPath;
