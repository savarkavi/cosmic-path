import { aboutStats } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";

const aboutText = `At Cosmic Path, we believe that astrology is not just a subject, but a timeless science that connects the cosmic with the human experience. Our mission is to provide authentic, structured, and practical education in Vedic Astrology, Palmistry, and Vastu Shastra, empowering learners to unlock the wisdom of the stars and apply it meaningfully in everyday life.<br /><br />

With carefully designed courses ranging from Vedic Astrology Basics to Research and Professional Practice, as well as specialized programs in Palmistry, Astro Palmistry & Vastu, and hands-on practice sessions, we cater to learners at every stage — beginners, enthusiasts, and aspiring professionals.<br /><br />

Our approach combines traditional wisdom with modern teaching methods. Students are guided through real-life case studies, interactive sessions, and practical applications, ensuring they develop not just theoretical knowledge but also real interpretative skills.<br /><br />

We are not just teaching astrology — we are nurturing future astrologers, palmists, and vastu experts who can guide the world with wisdom and compassion.`;

const AboutCosmicPath = () => {
  return (
    <div className="flex max-w-[620px] flex-col gap-8">
      <p className="text-6xl capitalize">
        Bridging Ancient{" "}
        <span className="text-accent-foreground italic">Wisdom</span> with
        Modern Life
      </p>
      <div
        className="text-muted-foreground text-justify font-semibold"
        dangerouslySetInnerHTML={{ __html: aboutText }}
      ></div>
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
