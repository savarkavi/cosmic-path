import {
  GraduationCap,
  Users,
  CalendarCheck,
  Phone,
  BadgeCheck,
  UsersRound,
  SquareChartGantt,
  Sparkles,
  Heart,
  Briefcase,
  Stethoscope,
  Plane,
} from "lucide-react";

export const heroServices = [
  {
    icon: GraduationCap,
    color: "oklch(63.7% 0.237 25.331)",
    title: "Certified Learning",
    desc: "Structured curriculum from beginner to advanced.",
  },
  {
    icon: Users,
    color: "oklch(72.3% 0.219 149.579)",
    title: "Private Sessions",
    desc: "1-on-1 guidance with master astrologers.",
  },
  {
    icon: CalendarCheck,
    color: "oklch(79.5% 0.184 86.047)",
    title: "Personal Consulations",
    desc: "Online kundali consulations and matching.",
  },
];

export const headerItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const coursesData = [
  {
    img: "/card-img-1.png",
    title: "Vedic astrology basics",
    desc: "A deep dive into your soul's blueprint. Understand your karma, dharma, and life path through the lens of Vedic astrology.",
    price: "1,000",
    length: "3 weeks",
  },
  {
    img: "/card-img-2.png",
    title: "Practice sessions",
    desc: "Begin your journey as a seer. Learn the basics of planets, signs, and houses in this comprehensive 8-week course.",
    price: "1,000",
    length: "8 weeks",
  },
  {
    img: "/card-img-3.jpg",
    title: "Palmistry - The roadmap of your life",
    desc: "Understand the cosmic dynamics between you and your partner. Discover harmony and areas for growth.",
    price: "1,000",
    length: "3 weeks",
  },
  {
    img: "/card-img-4.jpg",
    title: "Vedic astrology research",
    desc: "Master the art of Dashas and Transits. For students who have completed the foundations course",
    price: "2,000",
    length: "5 weeks",
  },
  {
    img: "/card-img-5.jpg",
    title: "Astro palmistry and vastu",
    desc: "Understand the cosmic dynamics between you and your partner. Discover harmony and areas for growth.",
    price: "1,000",
    length: "3 weeks",
  },
  {
    img: "/card-img-6.jpg",
    title: "Vedic astrology professional",
    desc: "Begin your journey as a seer. Learn the basics of planets, signs, and houses in this comprehensive 8-week course.",
    price: "2,000",
    length: "6 weeks",
  },
];

export const testimonialsData = [
  {
    name: "Ananya Sharma",
    avatar: "/testimonial-avatar-1.jpg",
    quote:
      "The course gave me a completely new perspective on astrology. The concepts were explained with clarity and depth, and I now feel confident reading my own chart.",
    stars: 5,
    date: "March 12, 2025",
  },
  {
    name: "Rohit Verma",
    avatar: "/testimonial-avatar-2.jpg",
    quote:
      "I had read many astrology books before, but this course connected everything logically. The teachings felt authentic and deeply rooted in tradition.",
    stars: 5,
    date: "February 28, 2025",
  },
  {
    name: "Priya Nair",
    avatar: "/testimonial-avatar-3.jpg",
    quote:
      "This course helped me understand planetary energies in a very practical way. I’ve started applying the knowledge in daily life with amazing results.",
    stars: 5,
    date: "January 19, 2025",
  },
];

export const bookConsultationInfo = [
  {
    label: "Call expert",
    icon: Phone,
  },
  {
    label: "Choose type",
    icon: BadgeCheck,
  },
  {
    label: "Schedule",
    icon: CalendarCheck,
  },
];

export const servicesData = [
  {
    label: "Astrology consultations",
    slug: "astrology-consultations",
    desc: "Get deep astrological and spiritual insights to navigate life's challenges and discover your true path.",
    img: "/hero-img.jpg",
  },
  {
    label: "Vastu Consultations",
    slug: "vastu-consultations",
    desc: "Harmonize your living and working spaces to attract positive cosmic energy, prosperity, and peace.",
    img: "/service-vastu-img.jpg",
  },
  {
    label: "Remedies",
    slug: "remedies",
    desc: "Authentic Vedic remedies including Puja, Mantra Jaap, and Yagya Anushthan to overcome life's obstacles.",
    img: "/service-remedies-img.jpg",
  },
  {
    label: "Scientific logo design",
    slug: "scientific-logo-design",
    desc: "Create a powerful brand identity with logos designed using Vastu and Astrological principles for success.",
    img: "/service-logo-design-img.jpg",
  },
  {
    label: "Wrist watch consultation",
    slug: "wrist-watch-consultation",
    desc: "Optimize your time and energy by choosing the right wrist watch based on your planetary alignments.",
    img: "/service-watch-img.jpg",
  },
];

export const aboutStats = [
  {
    label: "Happy Students",
    stats: "100+",
    icon: UsersRound,
  },
  {
    label: "Chart Reads",
    stats: "2000+",
    icon: SquareChartGantt,
  },
  {
    label: "Years of Wisdom",
    stats: "15+",
    icon: Sparkles,
  },
];

export const consultationHighlights = [
  {
    label: "Love & Marriage",
    icon: Heart,
  },
  {
    label: "Education & Career",
    icon: GraduationCap,
  },
  {
    label: "Business & Finance",
    icon: Briefcase,
  },
  {
    label: "Health & Child Problems",
    icon: Stethoscope,
  },
  {
    label: "Travel Abroad & Legal Issues",
    icon: Plane,
  },
];
