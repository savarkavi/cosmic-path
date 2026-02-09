import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const about = `At Cosmic Path, we believe that astrology is not just a subject, but a timeless science that connects the cosmic with the human experience. Our mission is to provide authentic, structured, and practical education in Vedic Astrology, Palmistry, and Vastu Shastra, empowering learners to unlock the wisdom of the stars and apply it meaningfully in everyday life.<br /><br />

With carefully designed courses ranging from Vedic Astrology Basics to Research and Professional Practice, as well as specialized programs in Palmistry, Astro Palmistry & Vastu, and hands-on practice sessions, we cater to learners at every stage — beginners, enthusiasts, and aspiring professionals. Each module is taught in a step-by-step manner to ensure clarity, depth, and accuracy in learning.<br /><br />

What sets us apart is our commitment to integrity, authenticity, and personalized learning. We believe that astrology is both an art and a science, and our purpose is to keep its purity intact while making it accessible to all. By joining us, you become part of a supportive community of seekers and practitioners who share the same passion for uncovering life’s deeper truths.`;

const AboutUs = () => {
  return (
    <div className="bg-accent-foreground mt-16 flex w-full py-12">
      <div className="mx-auto flex items-center gap-40">
        <div className="relative h-[600px] w-[280px] shrink-0">
          <Image
            src="/vedic-astrologer-cropped.png"
            alt="astrologer art image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex max-w-[600px] flex-col gap-12 text-white">
          <p className="text-5xl font-semibold uppercase">
            See beyond through ancient wisdom
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: about }}
            className="text-justify"
          ></div>
          <Link href="/about">
            <Button className="w-fit cursor-pointer text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
