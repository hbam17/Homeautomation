import { useState } from "react";

// ============================================================
// SMART HOME INSTALLERS MINNEAPOLIS - Full Site Design Prototype
// smarthomeinstallersminneapolis.com
// ============================================================

// --- Design System ---
const colors = {
  navy: "#0B1D35",
  navyLight: "#132B4D",
  blue: "#2563EB",
  blueLight: "#3B82F6",
  bluePale: "#EFF6FF",
  cyan: "#06B6D4",
  teal: "#0D9488",
  amber: "#F59E0B",
  white: "#FFFFFF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",
  green: "#059669",
  greenLight: "#D1FAE5",
};

const fonts = {
  display: "'DM Serif Display', Georgia, serif",
  body: "'DM Sans', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// --- Icons (inline SVG components) ---
const Icons = {
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Lightbulb: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/><path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  ),
  Thermometer: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  ),
  Tv: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>
    </svg>
  ),
  Home: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Wifi: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Snowflake: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
    </svg>
  ),
};

// --- Service Data ---
const services = [
  { icon: Icons.Home, title: "Whole-Home Automation", slug: "whole-home-automation", desc: "Control4, Savant & Crestron systems integrated into one seamless experience.", keywords: "control4 installer minneapolis, savant dealer minnesota" },
  { icon: Icons.Shield, title: "Security & Cameras", slug: "smart-home-security", desc: "Smart locks, HD cameras, motion sensors & 24/7 monitoring for peace of mind.", keywords: "security camera installation minneapolis" },
  { icon: Icons.Lightbulb, title: "Smart Lighting", slug: "smart-lighting", desc: "Lutron, Hue & custom lighting scenes for every room and every mood.", keywords: "smart lighting installation minneapolis" },
  { icon: Icons.Thermometer, title: "Climate & Energy", slug: "smart-thermostat", desc: "Smart thermostats & energy management built for Minnesota's extreme seasons.", keywords: "smart thermostat installation minneapolis" },
  { icon: Icons.Tv, title: "Home Theater", slug: "home-theater", desc: "Custom media rooms, surround sound & 4K projection designed for your space.", keywords: "home theater installation minneapolis" },
  { icon: Icons.Wifi, title: "Home Networking", slug: "home-network", desc: "Enterprise-grade WiFi & wired networks that power every smart device reliably.", keywords: "home wifi installation minneapolis" },
];

const areas = [
  { name: "Minneapolis", slug: "minneapolis" }, { name: "St. Paul", slug: "st-paul" },
  { name: "Edina", slug: "edina" }, { name: "Minnetonka", slug: "minnetonka" },
  { name: "Eden Prairie", slug: "eden-prairie" }, { name: "Wayzata", slug: "wayzata" },
  { name: "Woodbury", slug: "woodbury" }, { name: "Plymouth", slug: "plymouth" },
  { name: "Burnsville", slug: "burnsville" }, { name: "Eagan", slug: "eagan" },
  { name: "Bloomington", slug: "bloomington" }, { name: "Maple Grove", slug: "maple-grove" },
];

const blogPosts = [
  { title: "How Much Does Smart Home Installation Cost in Minneapolis? (2026 Guide)", slug: "smart-home-installation-cost-minneapolis", category: "Buying Guides", date: "Feb 10, 2026", readTime: "8 min", excerpt: "A detailed breakdown of smart home installation costs in the Twin Cities, from basic setups to whole-home automation systems." },
  { title: "Control4 vs Savant vs Crestron: Which System Is Right for Your MN Home?", slug: "control4-vs-savant-vs-crestron", category: "Comparisons", date: "Feb 8, 2026", readTime: "12 min", excerpt: "We compare the three leading whole-home automation platforms to help Minneapolis homeowners make the right choice." },
  { title: "Best Smart Thermostats for Minnesota Winters (Tested in -20°F)", slug: "best-smart-thermostats-minnesota-winter", category: "Reviews", date: "Feb 5, 2026", readTime: "10 min", excerpt: "Not all smart thermostats handle extreme cold well. Here are the ones that actually work when Minneapolis hits -20°F." },
  { title: "Smart Home Security: Do You Need Professional Installation?", slug: "diy-vs-professional-smart-home-security", category: "Guides", date: "Feb 3, 2026", readTime: "7 min", excerpt: "DIY security cameras vs. professional installation — what makes sense for Twin Cities homeowners." },
  { title: "Freeze Detection Sensors Every Minnesota Homeowner Needs", slug: "freeze-detection-sensors-minnesota", category: "Minnesota Living", date: "Jan 30, 2026", readTime: "6 min", excerpt: "Protect your pipes and property with smart freeze detection — especially critical for snowbirds leaving their MN home." },
  { title: "Smart Home Setup for Aging Parents in Minneapolis", slug: "smart-home-aging-parents-minneapolis", category: "Use Cases", date: "Jan 28, 2026", readTime: "9 min", excerpt: "How smart home technology can help elderly parents stay safe and independent in their Twin Cities home." },
];

const testimonials = [
  { quote: "They connected us with an incredible installer who automated our entire Edina home. The lighting scenes alone changed how we live.", name: "Sarah & Mike T.", location: "Edina, MN", rating: 5 },
  { quote: "Got three quotes within 24 hours of submitting my request. The installer they matched us with was professional and fairly priced.", name: "James K.", location: "Plymouth, MN", rating: 5 },
  { quote: "As a snowbird, I needed someone to set up remote monitoring for our Minneapolis home. They found exactly the right company.", name: "Linda R.", location: "Minnetonka, MN", rating: 5 },
];

// --- Shared Components ---
const Container = ({ children, className = "" }) => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }} className={className}>{children}</div>
);

const Button = ({ children, variant = "primary", size = "md", onClick, style = {} }) => {
  const base = {
    fontFamily: fonts.body,
    fontWeight: 600,
    borderRadius: 8,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "none",
    transition: "all 0.2s ease",
    letterSpacing: "-0.01em",
  };
  const variants = {
    primary: { background: colors.blue, color: colors.white, padding: size === "lg" ? "16px 32px" : "12px 24px", fontSize: size === "lg" ? 17 : 15 },
    secondary: { background: "transparent", color: colors.white, border: `2px solid rgba(255,255,255,0.3)`, padding: size === "lg" ? "14px 30px" : "10px 22px", fontSize: size === "lg" ? 17 : 15 },
    outline: { background: "transparent", color: colors.blue, border: `2px solid ${colors.blue}`, padding: size === "lg" ? "14px 30px" : "10px 22px", fontSize: size === "lg" ? 17 : 15 },
    ghost: { background: "transparent", color: colors.gray700, padding: "10px 20px", fontSize: 15 },
  };
  return <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>{children}</button>;
};

const Badge = ({ children, color = colors.blue }) => (
  <span style={{
    fontFamily: fonts.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.05em",
    textTransform: "uppercase", color, background: color + "15", padding: "4px 10px",
    borderRadius: 4, display: "inline-block",
  }}>{children}</span>
);

const StarRating = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => <Icons.Star key={i} />)}
  </div>
);

// --- Navigation ---
const Nav = ({ currentPage, setPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(11, 29, 53, 0.97)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid rgba(255,255,255,0.08)`,
    }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setPage("home")}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
              display: "flex", alignItems: "center", justifyContent: "center", color: colors.white,
            }}>
              <Icons.Home />
            </div>
            <div>
              <div style={{ fontFamily: fonts.display, fontSize: 18, color: colors.white, lineHeight: 1.1 }}>Smart Home Installers</div>
              <div style={{ fontFamily: fonts.body, fontSize: 11, color: colors.gray500, letterSpacing: "0.08em", textTransform: "uppercase" }}>Minneapolis</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {[
              { label: "Services", page: "services" },
              { label: "Areas", page: "areas" },
              { label: "Blog", page: "blog" },
              { label: "About", page: "about" },
            ].map(item => (
              <a key={item.page} onClick={() => setPage(item.page)} style={{
                fontFamily: fonts.body, fontSize: 14, fontWeight: 500,
                color: currentPage === item.page ? colors.white : "rgba(255,255,255,0.6)",
                cursor: "pointer", textDecoration: "none", transition: "color 0.2s",
                borderBottom: currentPage === item.page ? `2px solid ${colors.blue}` : "2px solid transparent",
                paddingBottom: 4,
              }}>{item.label}</a>
            ))}
            <Button onClick={() => setPage("quote")} size="md">Get Free Quote</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

// --- HOMEPAGE ---
const HomePage = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section style={{
      background: `linear-gradient(165deg, ${colors.navy} 0%, ${colors.navyLight} 50%, #1a365d 100%)`,
      position: "relative", overflow: "hidden", padding: "80px 0 100px",
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: -100, right: -100, width: 500, height: 500,
        borderRadius: "50%", background: `radial-gradient(circle, ${colors.blue}20, transparent 70%)`,
      }} />

      <Container>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <Icons.Snowflake />
            <span style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 500, color: colors.cyan, letterSpacing: "0.03em" }}>
              Built for Minnesota homes & winters
            </span>
          </div>

          <h1 style={{
            fontFamily: fonts.display, fontSize: 52, fontWeight: 400, color: colors.white,
            lineHeight: 1.12, margin: "0 0 24px", letterSpacing: "-0.02em",
          }}>
            Find Trusted Smart Home Installers in{" "}
            <span style={{ color: colors.cyan }}>Minneapolis</span>
          </h1>

          <p style={{
            fontFamily: fonts.body, fontSize: 19, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65, margin: "0 0 40px", maxWidth: 560,
          }}>
            Connect with certified local professionals for home automation, security, lighting, theater, and energy management. Free quotes from vetted Twin Cities installers.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <Button variant="primary" size="lg" onClick={() => setPage("quote")}>
              Get Your Free Quote <Icons.ArrowRight />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setPage("services")}>
              Explore Services
            </Button>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "4.9", label: "Average Rating" },
              { num: "50+", label: "Certified Installers" },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontFamily: fonts.display, fontSize: 28, color: colors.white }}>{item.num}</div>
                <div style={{ fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    {/* Services Grid */}
    <section style={{ padding: "80px 0", background: colors.white }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Badge>Our Services</Badge>
          <h2 style={{ fontFamily: fonts.display, fontSize: 38, color: colors.gray900, margin: "16px 0 12px", letterSpacing: "-0.02em" }}>
            Complete Smart Home Solutions
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray500, maxWidth: 560, margin: "0 auto" }}>
            From single-device installs to whole-home automation, we connect you with the right installer for your project.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {services.map((svc, i) => (
            <div key={i} onClick={() => setPage("service-detail")} style={{
              padding: 32, borderRadius: 16, cursor: "pointer",
              border: `1px solid ${colors.gray200}`, transition: "all 0.25s ease",
              background: colors.white,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = colors.blue; e.currentTarget.style.boxShadow = `0 8px 30px ${colors.blue}15`; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = colors.gray200; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: 20,
                background: `linear-gradient(135deg, ${colors.bluePale}, ${colors.blue}10)`,
                display: "flex", alignItems: "center", justifyContent: "center", color: colors.blue,
              }}>
                <svc.icon />
              </div>
              <h3 style={{ fontFamily: fonts.display, fontSize: 20, color: colors.gray900, margin: "0 0 8px" }}>{svc.title}</h3>
              <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.gray500, lineHeight: 1.6, margin: "0 0 16px" }}>{svc.desc}</p>
              <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.blue, display: "flex", alignItems: "center", gap: 4 }}>
                Learn more <Icons.ChevronRight />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Minnesota-specific CTA */}
    <section style={{
      padding: "64px 0",
      background: `linear-gradient(135deg, ${colors.navy} 0%, #1e3a5f 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -60, left: "50%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${colors.cyan}10, transparent 70%)` }} />
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 48, position: "relative", zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Icons.Snowflake />
              <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.cyan, letterSpacing: "0.06em", textTransform: "uppercase" }}>Minnesota-Specific Expertise</span>
            </div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 32, color: colors.white, margin: "0 0 16px", lineHeight: 1.2 }}>
              Smart Homes Built for -20°F Winters
            </h2>
            <p style={{ fontFamily: fonts.body, fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: 0 }}>
              Our network of installers understands the unique challenges of Minnesota homes — from freeze detection and pipe monitoring to energy-efficient climate control that handles our extreme temperature swings.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Freeze Detection", desc: "Pipe & water sensors" },
              { label: "Snow Melting", desc: "Smart driveway systems" },
              { label: "Energy Savings", desc: "30%+ heating reduction" },
              { label: "Remote Monitoring", desc: "Perfect for snowbirds" },
            ].map(item => (
              <div key={item.label} style={{
                padding: "16px 20px", borderRadius: 12,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: colors.white, marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontFamily: fonts.body, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    {/* Testimonials */}
    <section style={{ padding: "80px 0", background: colors.gray50 }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Badge color={colors.green}>Testimonials</Badge>
          <h2 style={{ fontFamily: fonts.display, fontSize: 34, color: colors.gray900, margin: "16px 0 0" }}>
            What Minneapolis Homeowners Say
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: 32, borderRadius: 16, background: colors.white,
              border: `1px solid ${colors.gray200}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
              <StarRating count={t.rating} />
              <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.gray700, lineHeight: 1.65, margin: "16px 0 20px", fontStyle: "italic" }}>
                "{t.quote}"
              </p>
              <div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: colors.gray900 }}>{t.name}</div>
              <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                <Icons.MapPin /> {t.location}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Service Areas */}
    <section style={{ padding: "80px 0", background: colors.white }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Badge color={colors.teal}>Service Areas</Badge>
          <h2 style={{ fontFamily: fonts.display, fontSize: 34, color: colors.gray900, margin: "16px 0 12px" }}>
            Serving the Entire Twin Cities Metro
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 16, color: colors.gray500 }}>
            Our installer network covers Minneapolis, St. Paul, and all surrounding suburbs.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {areas.map(area => (
            <div key={area.slug} onClick={() => setPage("area-detail")} style={{
              padding: "16px 20px", borderRadius: 10, cursor: "pointer",
              border: `1px solid ${colors.gray200}`, transition: "all 0.2s",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = colors.teal; e.currentTarget.style.background = colors.teal + "08"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = colors.gray200; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Icons.MapPin />
                <span style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 500, color: colors.gray800 }}>{area.name}</span>
              </div>
              <Icons.ChevronRight />
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Latest Blog Posts */}
    <section style={{ padding: "80px 0", background: colors.gray50 }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <Badge>Smart Home Blog</Badge>
            <h2 style={{ fontFamily: fonts.display, fontSize: 34, color: colors.gray900, margin: "16px 0 0" }}>
              Latest Guides & Resources
            </h2>
          </div>
          <a onClick={() => setPage("blog")} style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: colors.blue, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            View all articles <Icons.ArrowRight />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {blogPosts.slice(0, 3).map((post, i) => (
            <article key={i} onClick={() => setPage("blog-post")} style={{
              borderRadius: 16, overflow: "hidden", cursor: "pointer",
              background: colors.white, border: `1px solid ${colors.gray200}`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; }}
            >
              <div style={{
                height: 180,
                background: `linear-gradient(135deg, ${colors.navy}, ${[colors.blue, colors.teal, colors.cyan][i]})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: 24,
              }}>
                <div style={{ fontFamily: fonts.display, fontSize: 22, color: colors.white, textAlign: "center", lineHeight: 1.3 }}>
                  {post.title.split(":")[0]}
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <Badge color={colors.teal}>{post.category}</Badge>
                <h3 style={{ fontFamily: fonts.display, fontSize: 18, color: colors.gray900, margin: "12px 0 8px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.gray500, lineHeight: 1.55, margin: "0 0 16px" }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: fonts.body, fontSize: 12, color: colors.gray500 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Icons.Clock /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>

    {/* Final CTA */}
    <section style={{
      padding: "80px 0",
      background: `linear-gradient(135deg, ${colors.blue}, ${colors.blueLight})`,
      textAlign: "center",
    }}>
      <Container>
        <h2 style={{ fontFamily: fonts.display, fontSize: 38, color: colors.white, margin: "0 0 16px" }}>
          Ready to Make Your Home Smarter?
        </h2>
        <p style={{ fontFamily: fonts.body, fontSize: 18, color: "rgba(255,255,255,0.8)", margin: "0 0 32px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Get free, no-obligation quotes from certified smart home installers in the Minneapolis–St. Paul area.
        </p>
        <Button variant="secondary" size="lg" onClick={() => setPage("quote")} style={{ background: colors.white, color: colors.blue, border: "none" }}>
          Get Your Free Quote <Icons.ArrowRight />
        </Button>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 32 }}>
          {["No obligation", "Free estimates", "Vetted installers"].map(item => (
            <span key={item} style={{ fontFamily: fonts.body, fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 6 }}>
              <Icons.Check /> {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

// --- SERVICE DETAIL PAGE ---
const ServiceDetailPage = ({ setPage }) => (
  <div>
    {/* Breadcrumb */}
    <div style={{ background: colors.gray50, borderBottom: `1px solid ${colors.gray200}`, padding: "12px 0" }}>
      <Container>
        <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500, display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("home")}>Home</span> / <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("services")}>Services</span> / <span>Whole-Home Automation</span>
        </div>
      </Container>
    </div>

    <section style={{ padding: "64px 0", background: colors.white }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64 }}>
          <div>
            <Badge>Whole-Home Automation</Badge>
            <h1 style={{ fontFamily: fonts.display, fontSize: 42, color: colors.gray900, margin: "16px 0 24px", lineHeight: 1.15 }}>
              Whole-Home Automation Installation in Minneapolis
            </h1>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray600, lineHeight: 1.75, margin: "0 0 24px" }}>
              Transform your Minneapolis home with a fully integrated automation system. Our network of certified Control4, Savant, and Crestron installers design custom solutions that unify lighting, climate, security, audio, and entertainment into one seamless experience — all controlled from your phone, voice, or a single wall panel.
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray600, lineHeight: 1.75, margin: "0 0 32px" }}>
              Whether you're building a new home in Edina, renovating a 1950s bungalow in South Minneapolis, or upgrading your Wayzata lakefront property, our installers have the experience to deliver the perfect system for your lifestyle and budget.
            </p>

            <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "0 0 16px" }}>
              What's Included in Whole-Home Automation?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {[
                "Centralized control system (Control4, Savant, or Crestron)",
                "Smart lighting scenes for every room",
                "Climate control & smart thermostat integration",
                "Multi-room audio & video distribution",
                "Security system integration",
                "Motorized shades & blinds",
                "Voice assistant integration (Alexa, Google)",
                "Remote access from anywhere in the world",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ color: colors.green, marginTop: 2, flexShrink: 0 }}><Icons.Check /></div>
                  <span style={{ fontFamily: fonts.body, fontSize: 15, color: colors.gray700 }}>{item}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "0 0 16px" }}>
              How Much Does Whole-Home Automation Cost in Minneapolis?
            </h2>
            <p style={{ fontFamily: fonts.body, fontSize: 16, color: colors.gray600, lineHeight: 1.7, margin: "0 0 20px" }}>
              Whole-home automation projects in the Twin Cities typically range from $10,000 for a basic system to $100,000+ for luxury estate installations. Here's a general breakdown:
            </p>
            <div style={{
              borderRadius: 12, overflow: "hidden", marginBottom: 40,
              border: `1px solid ${colors.gray200}`,
            }}>
              {[
                { tier: "Starter", range: "$10,000 – $25,000", desc: "3-5 rooms, basic lighting & climate control, one entertainment zone" },
                { tier: "Mid-Range", range: "$25,000 – $50,000", desc: "Whole-home lighting, multi-zone audio, security integration, motorized shades" },
                { tier: "Premium", range: "$50,000 – $100,000+", desc: "Full Savant/Crestron system, dedicated theater, outdoor entertainment, pool/spa integration" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "20px 24px", display: "flex", alignItems: "center", gap: 24,
                  borderBottom: i < 2 ? `1px solid ${colors.gray200}` : "none",
                  background: i % 2 === 0 ? colors.gray50 : colors.white,
                }}>
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <div style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.blue, textTransform: "uppercase" }}>{item.tier}</div>
                  </div>
                  <div style={{ width: 180, flexShrink: 0 }}>
                    <div style={{ fontFamily: fonts.display, fontSize: 18, color: colors.gray900 }}>{item.range}</div>
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: 14, color: colors.gray600 }}>{item.desc}</div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "0 0 20px" }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: "How long does a whole-home automation installation take?", a: "Most installations take 2-5 days depending on scope. New construction pre-wiring is done during the build phase, with equipment installed after drywall." },
              { q: "Can I add smart home automation to an older Minneapolis home?", a: "Absolutely. Modern wireless protocols (Z-Wave, Zigbee, WiFi) make it possible to automate older homes without extensive rewiring. A good installer will assess your home's electrical and networking needs first." },
              { q: "Do I need to pick one brand for my whole system?", a: "Not necessarily. Platforms like Control4 and Savant integrate with hundreds of third-party devices. However, staying within one ecosystem typically provides the most seamless experience." },
            ].map((faq, i) => (
              <div key={i} style={{
                padding: "20px 0", borderBottom: `1px solid ${colors.gray200}`,
              }}>
                <h3 style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 600, color: colors.gray900, margin: "0 0 8px" }}>{faq.q}</h3>
                <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.gray600, lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            <div style={{
              position: "sticky", top: 96, padding: 32, borderRadius: 16,
              background: `linear-gradient(165deg, ${colors.navy}, ${colors.navyLight})`,
            }}>
              <h3 style={{ fontFamily: fonts.display, fontSize: 22, color: colors.white, margin: "0 0 12px" }}>
                Get a Free Automation Quote
              </h3>
              <p style={{ fontFamily: fonts.body, fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>
                Connect with certified installers in the Twin Cities. No obligation.
              </p>
              <Button onClick={() => setPage("quote")} size="lg" style={{ width: "100%", justifyContent: "center" }}>
                Request Free Quote <Icons.ArrowRight />
              </Button>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Free, no-obligation quotes", "Certified local installers", "Response within 24 hours"].map(item => (
                  <span key={item} style={{ fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: colors.cyan }}><Icons.Check /></span> {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: 24, padding: 24, borderRadius: 12,
              background: colors.gray50, border: `1px solid ${colors.gray200}`,
            }}>
              <h4 style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: colors.gray900, margin: "0 0 12px" }}>
                Related Articles
              </h4>
              {blogPosts.slice(0, 3).map((post, i) => (
                <a key={i} onClick={() => setPage("blog-post")} style={{
                  display: "block", padding: "10px 0", cursor: "pointer",
                  borderBottom: i < 2 ? `1px solid ${colors.gray200}` : "none",
                }}>
                  <div style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: colors.blue, lineHeight: 1.4 }}>{post.title}</div>
                  <div style={{ fontFamily: fonts.body, fontSize: 11, color: colors.gray500, marginTop: 4 }}>{post.readTime} read</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

// --- AREA DETAIL PAGE ---
const AreaDetailPage = ({ setPage }) => (
  <div>
    <div style={{ background: colors.gray50, borderBottom: `1px solid ${colors.gray200}`, padding: "12px 0" }}>
      <Container>
        <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500, display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("home")}>Home</span> / <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("areas")}>Service Areas</span> / <span>Edina</span>
        </div>
      </Container>
    </div>

    <section style={{
      padding: "64px 0 40px",
      background: `linear-gradient(165deg, ${colors.navy} 0%, ${colors.navyLight} 100%)`,
    }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <Icons.MapPin />
          <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.cyan, letterSpacing: "0.06em", textTransform: "uppercase" }}>Service Area</span>
        </div>
        <h1 style={{ fontFamily: fonts.display, fontSize: 42, color: colors.white, margin: "0 0 16px", lineHeight: 1.15 }}>
          Smart Home Installation in Edina, MN
        </h1>
        <p style={{ fontFamily: fonts.body, fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
          Premium smart home automation, security, and entertainment solutions for Edina homeowners. Certified local installers who know your neighborhood.
        </p>
      </Container>
    </section>

    <section style={{ padding: "48px 0 80px", background: colors.white }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64 }}>
          <div>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray600, lineHeight: 1.75, margin: "0 0 24px" }}>
              Edina is one of the Twin Cities' premier communities for smart home technology. With its mix of stately mid-century homes in the Country Club neighborhood, newer construction in Grandview, and everything in between, Edina homeowners have unique automation needs that require experienced, local installers.
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray600, lineHeight: 1.75, margin: "0 0 32px" }}>
              Many Edina homes — particularly those built in the 1950s-70s — need network infrastructure upgrades before smart home systems can be fully installed. Our installer network includes specialists who understand the wiring and electrical challenges of older Edina construction, as well as experts in new-build automation for homes being built along the France Avenue corridor.
            </p>

            <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "0 0 20px" }}>
              Popular Smart Home Services in Edina
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {services.map((svc, i) => (
                <div key={i} onClick={() => setPage("service-detail")} style={{
                  padding: 20, borderRadius: 12, cursor: "pointer",
                  border: `1px solid ${colors.gray200}`, transition: "all 0.2s",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = colors.blue; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = colors.gray200; }}
                >
                  <div style={{ color: colors.blue, marginTop: 2, flexShrink: 0 }}><svc.icon /></div>
                  <div>
                    <div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: colors.gray900, marginBottom: 4 }}>{svc.title}</div>
                    <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500 }}>{svc.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "0 0 16px" }}>
              Edina Neighborhoods We Serve
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {["Country Club", "Grandview", "Morningside", "Indian Hills", "Cornelia", "Highlands", "Parkwood Knolls", "South Harriet Park", "Arden Park", "Cahill"].map(n => (
                <span key={n} style={{
                  fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: colors.gray700,
                  background: colors.gray100, padding: "6px 14px", borderRadius: 20,
                }}>{n}</span>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div style={{
              position: "sticky", top: 96, padding: 32, borderRadius: 16,
              background: `linear-gradient(165deg, ${colors.navy}, ${colors.navyLight})`,
            }}>
              <h3 style={{ fontFamily: fonts.display, fontSize: 22, color: colors.white, margin: "0 0 12px" }}>
                Get Edina Smart Home Quotes
              </h3>
              <p style={{ fontFamily: fonts.body, fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>
                Free quotes from installers who know Edina homes.
              </p>
              <Button onClick={() => setPage("quote")} size="lg" style={{ width: "100%", justifyContent: "center" }}>
                Get Free Quote <Icons.ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

// --- BLOG INDEX PAGE ---
const BlogIndexPage = ({ setPage }) => (
  <div>
    <section style={{
      padding: "64px 0 40px",
      background: `linear-gradient(165deg, ${colors.navy} 0%, ${colors.navyLight} 100%)`,
    }}>
      <Container>
        <Badge>Smart Home Blog</Badge>
        <h1 style={{ fontFamily: fonts.display, fontSize: 42, color: colors.white, margin: "16px 0 12px" }}>
          Guides, Reviews & Resources
        </h1>
        <p style={{ fontFamily: fonts.body, fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>
          Expert smart home advice tailored for Minneapolis–St. Paul homeowners.
        </p>
      </Container>
    </section>

    <section style={{ padding: "48px 0 80px", background: colors.white }}>
      <Container>
        <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
          {["All", "Buying Guides", "Comparisons", "Reviews", "Minnesota Living", "Use Cases", "How-To"].map((cat, i) => (
            <button key={cat} style={{
              fontFamily: fonts.body, fontSize: 13, fontWeight: 500, padding: "8px 16px",
              borderRadius: 20, border: `1px solid ${i === 0 ? colors.blue : colors.gray300}`,
              background: i === 0 ? colors.blue : "transparent",
              color: i === 0 ? colors.white : colors.gray600, cursor: "pointer",
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {blogPosts.map((post, i) => (
            <article key={i} onClick={() => setPage("blog-post")} style={{
              borderRadius: 16, overflow: "hidden", cursor: "pointer",
              background: colors.white, border: `1px solid ${colors.gray200}`,
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                height: 160,
                background: `linear-gradient(135deg, ${colors.navy}, ${[colors.blue, colors.teal, colors.cyan, colors.green, "#7C3AED", colors.amber][i % 6]})`,
                display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
              }}>
                <div style={{ fontFamily: fonts.display, fontSize: 20, color: colors.white, textAlign: "center", lineHeight: 1.3 }}>
                  {post.title.length > 50 ? post.title.substring(0, 50) + "..." : post.title}
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <Badge color={colors.teal}>{post.category}</Badge>
                <h3 style={{ fontFamily: fonts.display, fontSize: 17, color: colors.gray900, margin: "10px 0 8px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500, lineHeight: 1.55, margin: "0 0 12px" }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: fonts.body, fontSize: 12, color: colors.gray500 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Icons.Clock /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

// --- BLOG POST PAGE ---
const BlogPostPage = ({ setPage }) => (
  <div>
    <div style={{ background: colors.gray50, borderBottom: `1px solid ${colors.gray200}`, padding: "12px 0" }}>
      <Container>
        <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.gray500, display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("home")}>Home</span> / <span style={{ cursor: "pointer", color: colors.blue }} onClick={() => setPage("blog")}>Blog</span> / <span>Smart Home Installation Cost</span>
        </div>
      </Container>
    </div>

    <section style={{ padding: "48px 0 80px", background: colors.white }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64 }}>
          <article>
            <Badge>Buying Guides</Badge>
            <h1 style={{ fontFamily: fonts.display, fontSize: 38, color: colors.gray900, margin: "16px 0 16px", lineHeight: 1.2 }}>
              How Much Does Smart Home Installation Cost in Minneapolis? (2026 Guide)
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, fontFamily: fonts.body, fontSize: 13, color: colors.gray500 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Icons.Clock /> 8 min read</span>
              <span>Updated Feb 10, 2026</span>
              <span>By Alex Johnson, Smart Home Specialist</span>
            </div>

            {/* Article content */}
            <div style={{ fontFamily: fonts.body, fontSize: 17, color: colors.gray700, lineHeight: 1.8 }}>
              <p style={{ margin: "0 0 24px" }}>
                If you're a Minneapolis homeowner considering smart home technology, one of your first questions is probably: "How much is this going to cost?" The answer depends on the scope of your project, but we've compiled real pricing data from Twin Cities installers to give you a comprehensive breakdown.
              </p>

              <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "40px 0 16px" }}>
                Quick Cost Overview
              </h2>
              <div style={{
                borderRadius: 12, overflow: "hidden", marginBottom: 32,
                border: `1px solid ${colors.gray200}`,
              }}>
                {[
                  { service: "Smart Thermostat Install", range: "$150 – $500" },
                  { service: "Security Camera System (4 cameras)", range: "$800 – $3,000" },
                  { service: "Smart Lighting (per room)", range: "$200 – $1,500" },
                  { service: "Home Theater", range: "$3,000 – $25,000" },
                  { service: "Whole-Home Automation", range: "$10,000 – $100,000+" },
                  { service: "Smart Lock Installation", range: "$200 – $600" },
                  { service: "Motorized Shades (per window)", range: "$400 – $1,200" },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "14px 20px", display: "flex", justifyContent: "space-between",
                    borderBottom: i < 6 ? `1px solid ${colors.gray200}` : "none",
                    background: i % 2 === 0 ? colors.gray50 : colors.white,
                  }}>
                    <span style={{ fontFamily: fonts.body, fontSize: 15, color: colors.gray700 }}>{item.service}</span>
                    <span style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 600, color: colors.gray900 }}>{item.range}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "40px 0 16px" }}>
                Factors That Affect Price in Minneapolis
              </h2>
              <p style={{ margin: "0 0 16px" }}>
                Several factors specific to the Twin Cities market influence what you'll pay for smart home installation:
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong>Home age and construction.</strong> Many Minneapolis homes were built in the 1950s-70s and may need electrical upgrades, new wiring runs, or network infrastructure before smart devices can be installed. Budget an additional $500-$2,000 for pre-wiring in older homes.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong>Minnesota weather considerations.</strong> Outdoor cameras, smart locks, and sensors need to be rated for extreme cold. Premium cold-weather rated devices cost 10-20% more than standard options, but they're essential in our climate.
              </p>
              <p style={{ margin: "0 0 24px" }}>
                <strong>Wireless vs. wired.</strong> Wireless systems (Z-Wave, Zigbee, WiFi) are cheaper to install since they don't require new wiring. However, wired systems offer better reliability for mission-critical applications like security and automation control.
              </p>

              {/* Inline CTA */}
              <div style={{
                padding: 32, borderRadius: 16, margin: "40px 0",
                background: `linear-gradient(135deg, ${colors.bluePale}, #dbeafe)`,
                border: `1px solid ${colors.blue}30`,
              }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: 22, color: colors.gray900, margin: "0 0 8px" }}>
                  Want an exact price for your project?
                </h3>
                <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.gray600, margin: "0 0 16px" }}>
                  Get free, no-obligation quotes from certified Minneapolis smart home installers.
                </p>
                <Button onClick={() => setPage("quote")}>Get Free Quotes <Icons.ArrowRight /></Button>
              </div>

              <h2 style={{ fontFamily: fonts.display, fontSize: 26, color: colors.gray900, margin: "40px 0 16px" }}>
                How to Save Money on Smart Home Installation
              </h2>
              <p style={{ margin: "0 0 16px" }}>
                <strong>Start small, plan big.</strong> Many homeowners begin with a smart thermostat and a few smart lights, then expand their system over time. A good installer will design a system architecture that allows for easy expansion without rework.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong>Bundle services.</strong> Installing multiple systems at once (e.g., lighting + security + climate) is typically 15-25% cheaper than doing each separately, since the installer only needs to mobilize once and can share infrastructure like network cabling.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong>Take advantage of energy rebates.</strong> Minnesota offers several incentives for energy-efficient smart home devices. Xcel Energy's rebate programs can offset the cost of smart thermostats and energy monitoring systems.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <div>
            <div style={{
              position: "sticky", top: 96, padding: 28, borderRadius: 16,
              background: `linear-gradient(165deg, ${colors.navy}, ${colors.navyLight})`,
              marginBottom: 24,
            }}>
              <h3 style={{ fontFamily: fonts.display, fontSize: 20, color: colors.white, margin: "0 0 12px" }}>
                Get Your Free Quote
              </h3>
              <p style={{ fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.6)", margin: "0 0 20px" }}>
                Compare prices from certified local installers.
              </p>
              <Button onClick={() => setPage("quote")} style={{ width: "100%", justifyContent: "center" }}>
                Request Quotes <Icons.ArrowRight />
              </Button>
            </div>

            {/* Table of contents */}
            <div style={{
              padding: 24, borderRadius: 12, background: colors.gray50,
              border: `1px solid ${colors.gray200}`, marginBottom: 24,
            }}>
              <h4 style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.gray900, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                In this article
              </h4>
              {["Quick Cost Overview", "Factors That Affect Price", "How to Save Money", "FAQs"].map((item, i) => (
                <div key={i} style={{
                  fontFamily: fonts.body, fontSize: 13, color: colors.blue, padding: "6px 0",
                  cursor: "pointer", borderBottom: i < 3 ? `1px solid ${colors.gray200}` : "none",
                }}>{item}</div>
              ))}
            </div>

            {/* Related posts */}
            <div style={{ padding: 24, borderRadius: 12, background: colors.gray50, border: `1px solid ${colors.gray200}` }}>
              <h4 style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: colors.gray900, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Related articles
              </h4>
              {blogPosts.slice(1, 4).map((post, i) => (
                <a key={i} onClick={() => setPage("blog-post")} style={{
                  display: "block", padding: "10px 0", cursor: "pointer",
                  borderBottom: i < 2 ? `1px solid ${colors.gray200}` : "none",
                }}>
                  <div style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: colors.blue, lineHeight: 1.4 }}>{post.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

// --- FOOTER ---
const Footer = ({ setPage }) => (
  <footer style={{ background: colors.navy, padding: "64px 0 32px" }}>
    <Container>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`,
              display: "flex", alignItems: "center", justifyContent: "center", color: colors.white,
            }}>
              <Icons.Home />
            </div>
            <span style={{ fontFamily: fonts.display, fontSize: 16, color: colors.white }}>Smart Home Installers Minneapolis</span>
          </div>
          <p style={{ fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: 280 }}>
            Connecting Twin Cities homeowners with certified smart home installation professionals since 2026.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>Services</h4>
          {services.map(svc => (
            <a key={svc.slug} onClick={() => setPage("service-detail")} style={{
              display: "block", fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.5)",
              cursor: "pointer", padding: "4px 0", textDecoration: "none",
            }}>{svc.title}</a>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>Top Areas</h4>
          {areas.slice(0, 6).map(area => (
            <a key={area.slug} onClick={() => setPage("area-detail")} style={{
              display: "block", fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.5)",
              cursor: "pointer", padding: "4px 0", textDecoration: "none",
            }}>{area.name}</a>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>Resources</h4>
          {["Blog", "Cost Guides", "Comparisons", "About Us", "Contact", "Privacy Policy"].map(item => (
            <a key={item} onClick={() => setPage("blog")} style={{
              display: "block", fontFamily: fonts.body, fontSize: 13, color: "rgba(255,255,255,0.5)",
              cursor: "pointer", padding: "4px 0", textDecoration: "none",
            }}>{item}</a>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: fonts.body, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Smart Home Installers Minneapolis. All rights reserved.
        </span>
        <span style={{ fontFamily: fonts.body, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          Serving Minneapolis, St. Paul & the entire Twin Cities metro area.
        </span>
      </div>
    </Container>
  </footer>
);

// --- MAIN APP ---
export default function App() {
  const [currentPage, setPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage setPage={setPage} />;
      case "services":
      case "service-detail": return <ServiceDetailPage setPage={setPage} />;
      case "areas":
      case "area-detail": return <AreaDetailPage setPage={setPage} />;
      case "blog": return <BlogIndexPage setPage={setPage} />;
      case "blog-post": return <BlogPostPage setPage={setPage} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: colors.white }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <Nav currentPage={currentPage} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}
