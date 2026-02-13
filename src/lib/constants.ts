export const SITE_CONFIG = {
  name: "Smart Home Installers Minneapolis",
  domain: "smarthomeinstallersminneapolis.com",
  url: "https://smarthomeinstallersminneapolis.com",
  description:
    "Connect with certified local smart home installers in the Minneapolis–St. Paul metro area. Free quotes for home automation, security, lighting, theater, and more.",
  phone: "(612) 555-0199",
  email: "info@smarthomeinstallersminneapolis.com",
};

export type Service = {
  icon: string;
  title: string;
  slug: string;
  desc: string;
  keywords: string;
};

export const SERVICES: Service[] = [
  {
    icon: "Home",
    title: "Whole-Home Automation",
    slug: "whole-home-automation",
    desc: "Control4, Savant & Crestron systems integrated into one seamless experience.",
    keywords: "control4 installer minneapolis, savant dealer minnesota",
  },
  {
    icon: "Shield",
    title: "Security & Cameras",
    slug: "smart-home-security",
    desc: "Smart locks, HD cameras, motion sensors & 24/7 monitoring for peace of mind.",
    keywords: "security camera installation minneapolis",
  },
  {
    icon: "Lightbulb",
    title: "Smart Lighting",
    slug: "smart-lighting",
    desc: "Lutron, Hue & custom lighting scenes for every room and every mood.",
    keywords: "smart lighting installation minneapolis",
  },
  {
    icon: "Thermometer",
    title: "Climate & Energy",
    slug: "smart-thermostat",
    desc: "Smart thermostats & energy management built for Minnesota's extreme seasons.",
    keywords: "smart thermostat installation minneapolis",
  },
  {
    icon: "Tv",
    title: "Home Theater",
    slug: "home-theater",
    desc: "Custom media rooms, surround sound & 4K projection designed for your space.",
    keywords: "home theater installation minneapolis",
  },
  {
    icon: "Wifi",
    title: "Home Networking",
    slug: "home-network",
    desc: "Enterprise-grade WiFi & wired networks that power every smart device reliably.",
    keywords: "home wifi installation minneapolis",
  },
];

export type Area = {
  name: string;
  slug: string;
};

export const AREAS: Area[] = [
  { name: "Minneapolis", slug: "minneapolis" },
  { name: "St. Paul", slug: "st-paul" },
  { name: "Edina", slug: "edina" },
  { name: "Minnetonka", slug: "minnetonka" },
  { name: "Eden Prairie", slug: "eden-prairie" },
  { name: "Wayzata", slug: "wayzata" },
  { name: "Woodbury", slug: "woodbury" },
  { name: "Plymouth", slug: "plymouth" },
  { name: "Burnsville", slug: "burnsville" },
  { name: "Eagan", slug: "eagan" },
  { name: "Bloomington", slug: "bloomington" },
  { name: "Maple Grove", slug: "maple-grove" },
];

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Much Does Smart Home Installation Cost in Minneapolis? (2026 Guide)",
    slug: "smart-home-installation-cost-minneapolis",
    category: "Buying Guides",
    date: "Feb 10, 2026",
    readTime: "8 min",
    excerpt:
      "A detailed breakdown of smart home installation costs in the Twin Cities, from basic setups to whole-home automation systems.",
  },
  {
    title: "Control4 vs Savant vs Crestron: Which System Is Right for Your MN Home?",
    slug: "control4-vs-savant-vs-crestron",
    category: "Comparisons",
    date: "Feb 8, 2026",
    readTime: "12 min",
    excerpt:
      "We compare the three leading whole-home automation platforms to help Minneapolis homeowners make the right choice.",
  },
  {
    title: "Best Smart Thermostats for Minnesota Winters (Tested in -20°F)",
    slug: "best-smart-thermostats-minnesota-winter",
    category: "Reviews",
    date: "Feb 5, 2026",
    readTime: "10 min",
    excerpt:
      "Not all smart thermostats handle extreme cold well. Here are the ones that actually work when Minneapolis hits -20°F.",
  },
  {
    title: "Smart Home Security: Do You Need Professional Installation?",
    slug: "diy-vs-professional-smart-home-security",
    category: "Guides",
    date: "Feb 3, 2026",
    readTime: "7 min",
    excerpt:
      "DIY security cameras vs. professional installation — what makes sense for Twin Cities homeowners.",
  },
  {
    title: "Freeze Detection Sensors Every Minnesota Homeowner Needs",
    slug: "freeze-detection-sensors-minnesota",
    category: "Minnesota Living",
    date: "Jan 30, 2026",
    readTime: "6 min",
    excerpt:
      "Protect your pipes and property with smart freeze detection — especially critical for snowbirds leaving their MN home.",
  },
  {
    title: "Smart Home Setup for Aging Parents in Minneapolis",
    slug: "smart-home-aging-parents-minneapolis",
    category: "Use Cases",
    date: "Jan 28, 2026",
    readTime: "9 min",
    excerpt:
      "How smart home technology can help elderly parents stay safe and independent in their Twin Cities home.",
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Buying Guides",
  "Comparisons",
  "Reviews",
  "Minnesota Living",
  "Use Cases",
  "How-To",
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They connected us with an incredible installer who automated our entire Edina home. The lighting scenes alone changed how we live.",
    name: "Sarah & Mike T.",
    location: "Edina, MN",
    rating: 5,
  },
  {
    quote:
      "Got three quotes within 24 hours of submitting my request. The installer they matched us with was professional and fairly priced.",
    name: "James K.",
    location: "Plymouth, MN",
    rating: 5,
  },
  {
    quote:
      "As a snowbird, I needed someone to set up remote monitoring for our Minneapolis home. They found exactly the right company.",
    name: "Linda R.",
    location: "Minnetonka, MN",
    rating: 5,
  },
];

export const TRUST_SIGNALS = [
  { num: "500+", label: "Projects Completed" },
  { num: "4.9", label: "Average Rating" },
  { num: "50+", label: "Certified Installers" },
];
