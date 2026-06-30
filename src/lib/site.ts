import {
  Sparkles,
  Layers,
  Wand2,
  LineChart,
  Compass,
  Globe,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Voices", href: "#testimonials" },
] as const;

export const MARQUEE_WORDS = [
  "Brand Systems",
  "Motion Design",
  "Digital Products",
  "Art Direction",
  "Web Experiences",
  "Creative Strategy",
  "3D & Visual",
  "Identity",
];

export const STATS = [
  { value: 140, suffix: "+", label: "Projects shipped" },
  { value: 38, suffix: "", label: "Awards & honors" },
  { value: 12, suffix: "yr", label: "Crafting brands" },
  { value: 27, suffix: "", label: "Countries served" },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string;
  accent?: "coral" | "lime" | "ink";
}

export const FEATURES: Feature[] = [
  {
    icon: Compass,
    title: "Brand Strategy",
    description:
      "Positioning, naming and narrative frameworks that give your brand a sharp, undeniable point of view.",
    span: "lg:col-span-2",
    accent: "coral",
  },
  {
    icon: Wand2,
    title: "Art Direction",
    description:
      "Distinctive visual languages — typography, color, and imagery systems built to scale.",
    accent: "ink",
  },
  {
    icon: Layers,
    title: "Product Design",
    description:
      "End-to-end digital products, from zero-to-one flows to mature design systems.",
    accent: "lime",
  },
  {
    icon: Sparkles,
    title: "Motion & 3D",
    description:
      "Cinematic motion design and real-time 3D that makes interfaces feel alive.",
    span: "lg:col-span-2",
    accent: "coral",
  },
  {
    icon: Globe,
    title: "Web Experiences",
    description:
      "High-craft, high-performance websites engineered to convert and impress.",
    accent: "ink",
  },
];

export interface Project {
  title: string;
  category: string;
  year: string;
  tags: string[];
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Hélios",
    category: "Renewable Energy",
    year: "2024",
    tags: ["Identity", "Web", "Motion"],
    accent: "#ff5b2e",
  },
  {
    title: "Maison Verte",
    category: "Sustainable Fashion",
    year: "2024",
    tags: ["Brand System", "Packaging"],
    accent: "#c8f04a",
  },
  {
    title: "Orbit Labs",
    category: "AI Infrastructure",
    year: "2023",
    tags: ["Product", "Design System"],
    accent: "#14110f",
  },
  {
    title: "Cadence",
    category: "Fintech",
    year: "2023",
    tags: ["Identity", "Web", "Motion"],
    accent: "#ff7a52",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const PROCESS: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse in your world — audience, market, ambition — to map the territory before we move.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Strategy crystallizes into a sharp creative platform and a clear, measurable direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft the system — visual language, product, and motion — in tight, iterative loops.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We ship polished, production-ready work and stay on as a long-term creative partner.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "NOVA rebuilt our brand from the ground up and the impact was immediate. Pipeline doubled within a quarter of the relaunch.",
    name: "Elena Marsh",
    role: "CEO, Hélios",
    initials: "EM",
  },
  {
    quote:
      "The most thoughtful design partner we've worked with. They sweat details nobody else even notices — and it shows in the product.",
    name: "Daniel Cho",
    role: "Founder, Orbit Labs",
    initials: "DC",
  },
  {
    quote:
      "From strategy to motion, every artifact felt considered and cohesive. Our investors literally applauded the rebrand deck.",
    name: "Priya Nair",
    role: "CMO, Cadence",
    initials: "PN",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PRICING: PricingTier[] = [
  {
    name: "Sprint",
    price: "$12k",
    cadence: "/ 2 weeks",
    description: "A focused burst to validate an idea or ship a single deliverable.",
    features: [
      "1 dedicated designer",
      "Brand or product sprint",
      "2 rounds of revision",
      "Hand-off & source files",
    ],
  },
  {
    name: "Studio",
    price: "$28k",
    cadence: "/ month",
    description: "An embedded creative team for ongoing, high-craft work.",
    features: [
      "Cross-functional pod",
      "Brand + product + motion",
      "Weekly delivery cadence",
      "Priority slack channel",
      "Design system maintenance",
    ],
    highlighted: true,
  },
  {
    name: "Partner",
    price: "Custom",
    cadence: "/ quarter",
    description: "A long-term partnership for multi-quarter transformation programs.",
    features: [
      "Dedicated strategy lead",
      "Multiple workstreams",
      "Quarterly roadmapping",
      "Executive reporting",
    ],
  },
];
