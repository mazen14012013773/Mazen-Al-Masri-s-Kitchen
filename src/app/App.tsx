import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, Star, Flame, ChevronDown } from "lucide-react";

// SVG decorations
function EgyptianDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9952a]" />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
        <polygon points="24,0 48,24 0,24" fill="none" stroke="#c9952a" strokeWidth="1.5" />
        <polygon points="24,6 40,22 8,22" fill="none" stroke="#c9952a" strokeWidth="0.8" opacity="0.5" />
        <circle cx="24" cy="13" r="2" fill="#d4af37" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9952a]" />
    </div>
  );
}

function EyeOfRa() {
  return (
    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" aria-hidden="true">
      <ellipse cx="16" cy="10" rx="14" ry="8" stroke="#d4af37" strokeWidth="1.2" />
      <circle cx="16" cy="10" r="4" fill="#d4af37" />
      <circle cx="16" cy="10" r="2" fill="#0e0a04" />
      <line x1="16" y1="2" x2="16" y2="0" stroke="#d4af37" strokeWidth="1" />
      <line x1="26" y1="14" x2="30" y2="18" stroke="#d4af37" strokeWidth="1" />
      <line x1="6" y1="14" x2="2" y2="18" stroke="#d4af37" strokeWidth="1" />
    </svg>
  );
}

function PyramidSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden="true">
      <polygon points="100,8 190,112 10,112" fill="none" stroke="#c9952a" strokeWidth="1.5" opacity="0.7" />
      <polygon points="100,30 168,112 32,112" fill="none" stroke="#c9952a" strokeWidth="0.8" opacity="0.4" />
      <line x1="100" y1="8" x2="100" y2="112" stroke="#c9952a" strokeWidth="0.5" opacity="0.3" />
      <line x1="55" y1="112" x2="100" y2="8" stroke="#c9952a" strokeWidth="0.3" opacity="0.2" />
      <line x1="145" y1="112" x2="100" y2="8" stroke="#c9952a" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}

function HieroglyphBorder() {
  const symbols = ["𓂀", "𓃭", "𓆣", "𓅓", "𓀭", "𓂋", "𓈖", "𓇯", "𓆑", "𓂝"];
  return (
    <div className="flex items-center justify-center gap-3 py-2 opacity-30 overflow-hidden">
      {[...symbols, ...symbols].map((s, i) => (
        <span key={i} className="text-[#d4af37] text-xs font-normal select-none">{s}</span>
      ))}
    </div>
  );
}

// Navigation bar
const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "قائمتنا", href: "#menu" },
  { label: "عن مازن", href: "#about" },
  { label: "آراء العملاء", href: "#reviews" },
  { label: "تواصل معنا", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0702]/95 backdrop-blur-md border-b border-[#c9952a]/30 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-center gap-0.5 group">
          <EyeOfRa />
          <span className="font-['Amiri'] text-xl font-bold text-[#d4af37] leading-none group-hover:text-[#e8c547] transition-colors">
            مازن للمشويات
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#f5e6c0]/80 hover:text-[#d4af37] font-['Cairo'] text-sm font-semibold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 right-0 w-0 group-hover:w-full h-px bg-[#d4af37] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#c9952a] hover:bg-[#d4af37] text-[#0e0a04] font-['Cairo'] font-bold text-sm px-5 py-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,149,42,0.5)]"
          style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
        >
          <Phone size={14} />
          اطلب الآن
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden text-[#d4af37]"
          onClick={() => setOpen(!open)}
          aria-label="قائمة التنقل"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a0702]/98 border-t border-[#c9952a]/30 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#f5e6c0]/80 hover:text-[#d4af37] font-['Cairo'] font-semibold block py-1 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// Hero section
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e0a04]">
        <img
          src="https://images.unsplash.com/photo-1678038592492-d73c063bb9e2?w=1920&h=1080&fit=crop&auto=format"
          alt="أهرامات الجيزة عند الغروب"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0a04]/70 via-transparent to-[#0e0a04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a04] via-transparent to-transparent" />
      </div>

      {/* Stars particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#d4af37]"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top ornament */}
        <div className="flex justify-center mb-6">
          <EyeOfRa />
        </div>

        <p className="font-['Amiri'] text-[#c9952a] text-lg tracking-[0.3em] mb-3 italic">
          منذ عام ٢٠٠٥ — القاهرة
        </p>

        <h1 className="font-['Amiri'] text-6xl md:text-8xl font-bold text-[#f5e6c0] mb-2 leading-tight drop-shadow-2xl">
          مازن
        </h1>
        <h1 className="font-['Amiri'] text-3xl md:text-5xl font-bold text-[#d4af37] mb-6 drop-shadow-2xl">
          للمشويات
        </h1>

        <EgyptianDivider />

        <p className="font-['Cairo'] text-[#f5e6c0]/70 text-lg md:text-xl mt-6 mb-8 leading-relaxed max-w-2xl mx-auto">
          أجود المشويات المصرية الأصيلة، محضّرة بأيدي أمهر الطهاة،
          <br className="hidden md:block" />
          وعلى نار الفحم الطبيعي منذ عشرين عاماً
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-[#c9952a] hover:bg-[#d4af37] text-[#0e0a04] font-['Cairo'] font-bold text-base px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,149,42,0.6)]"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            <Flame size={18} />
            استعرض قائمتنا
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-[#c9952a]/50 hover:border-[#c9952a] text-[#d4af37] font-['Cairo'] font-bold text-base px-8 py-3.5 transition-all duration-300 hover:bg-[#c9952a]/10"
          >
            تعرّف علينا
            <ChevronDown size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[#c9952a] to-transparent" />
        <ChevronDown size={16} className="text-[#c9952a]" />
      </div>
    </section>
  );
}

// Stats bar
const stats = [
  { value: "+٢٠", label: "عاماً من التميّز" },
  { value: "+٥٠", label: "طبق مصري أصيل" },
  { value: "+١٠٠٠٠", label: "عميل سعيد" },
  { value: "٣", label: "فروع في القاهرة" },
];

function Stats() {
  return (
    <section className="bg-[#c9952a] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Amiri'] text-4xl font-bold text-[#0e0a04] mb-1">{s.value}</div>
              <div className="font-['Cairo'] text-sm text-[#0e0a04]/70 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About section
function About() {
  return (
    <section id="about" className="py-24 bg-[#0e0a04]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative order-2 md:order-1">
          <div
            className="absolute inset-0 border border-[#c9952a]/30 translate-x-4 translate-y-4"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
          />
          <img
            src="https://images.unsplash.com/photo-1730082460730-573793ec7c8f?w=700&h=900&fit=crop&auto=format"
            alt="طاهٍ يشوي اللحم على الفحم"
            className="relative w-full object-cover bg-[#1a1206]"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              height: "480px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #0e0a04 0%, transparent 40%)",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
            }}
          />
          {/* Floating badge */}
          <div className="absolute bottom-8 right-6 bg-[#c9952a] text-[#0e0a04] px-5 py-3 font-['Amiri'] text-center">
            <div className="text-3xl font-bold">٢٠٠٥</div>
            <div className="text-xs font-['Cairo'] font-bold">سنة التأسيس</div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 md:order-2">
          <HieroglyphBorder />
          <p className="font-['Cairo'] text-[#c9952a] text-sm tracking-widest uppercase mb-3 mt-4">قصتنا</p>
          <h2 className="font-['Amiri'] text-4xl md:text-5xl font-bold text-[#f5e6c0] mb-6 leading-tight">
            تراث مصري أصيل
            <br />
            <span className="text-[#d4af37]">على نار الفحم</span>
          </h2>
          <EgyptianDivider />
          <p className="font-['Cairo'] text-[#f5e6c0]/70 leading-relaxed mt-6 mb-4 text-base">
            منذ عام ٢٠٠٥، يقدّم مازن للمشويات أجود أنواع اللحوم المصرية المشوية على الفحم الطبيعي.
            بدأت الرحلة في حي شبرا بقاهرة المعز، ولا تزال حتى اليوم تحمل نفس الوصفات الموروثة
            والأسرار التي تجعل كل قضمة لا تُنسى.
          </p>
          <p className="font-['Cairo'] text-[#f5e6c0]/70 leading-relaxed mb-8 text-base">
            نختار اللحوم بعناية من أفضل المصادر المحلية، ونتبّلها بخلطة البهارات المصرية السرية
            التي توارثها عن أجداده — فكل طبق حكاية من حكايات مصر.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🔥", text: "فحم طبيعي ١٠٠٪" },
              { icon: "🥩", text: "لحوم طازجة يومياً" },
              { icon: "🌿", text: "بهارات مصرية أصيلة" },
              { icon: "👨‍🍳", text: "طهاة بخبرة عشرين عاماً" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-3 bg-[#1a1206] border border-[#c9952a]/20 px-4 py-3">
                <span className="text-xl">{f.icon}</span>
                <span className="font-['Cairo'] text-[#f5e6c0]/80 text-sm font-semibold">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu section
const menuCategories = ["كل الأصناف", "المشويات", "الشاورما", "الأطباق", "المشروبات"];

const menuItems = [
  {
    category: "المشويات",
    name: "كفتة مازن الخاصة",
    desc: "كفتة بهارات مصرية سرية مشوية على الفحم، تُقدَّم مع سلطة وخبز",
    price: "٨٥",
    tag: "الأكثر طلباً",
    img: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=400&h=300&fit=crop&auto=format",
  },
  {
    category: "المشويات",
    name: "ريش ضاني مشوية",
    desc: "ريش خروف طازج مع بهارات كامل الأوصاف وشوي احترافي",
    price: "١٤٠",
    tag: "مميّز",
    img: "https://images.unsplash.com/photo-1620167790054-de54f34308bb?w=400&h=300&fit=crop&auto=format",
  },
  {
    category: "المشويات",
    name: "مشاوي مشكّلة",
    desc: "تشكيلة من الكفتة والشيش طاووق والريش وشيش اللحم",
    price: "١٩٥",
    tag: "للعائلة",
    img: "https://images.unsplash.com/photo-1777716003985-68fed08d0c7e?w=400&h=300&fit=crop&auto=format",
  },
  {
    category: "الشاورما",
    name: "شاورما لحم مصري",
    desc: "لحم عجل متبّل بالبهارات المصرية مع الطحينة والخضار الطازجة",
    price: "٦٥",
    tag: "",
    img: "https://images.unsplash.com/photo-1729370146699-d552925ab445?w=400&h=300&fit=crop&auto=format",
  },
  {
    category: "الأطباق",
    name: "ملوخية بالأرانب",
    desc: "ملوخية مصرية أصيلة مطبوخة مع الأرانب وتُقدَّم مع الأرز",
    price: "١١٠",
    tag: "تراثي",
    img: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=400&h=300&fit=crop&auto=format",
  },
  {
    category: "المشروبات",
    name: "عصير قصب طازج",
    desc: "عصير قصب السكر الطازج المستخرج أمامك",
    price: "٢٥",
    tag: "",
    img: "/sugarcane-juice.jfif",
  },
];

function MenuSection() {
  const [active, setActive] = useState("كل الأصناف");

  const filtered = active === "كل الأصناف"
    ? menuItems
    : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-24 bg-[#0d0902]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <HieroglyphBorder />
          <p className="font-['Cairo'] text-[#c9952a] text-sm tracking-widest uppercase mt-4 mb-3">قائمة الطعام</p>
          <h2 className="font-['Amiri'] text-4xl md:text-5xl font-bold text-[#f5e6c0] mb-4">
            أشهى المشويات المصرية
          </h2>
          <EgyptianDivider />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-['Cairo'] text-sm font-bold px-5 py-2 transition-all duration-300 ${
                active === cat
                  ? "bg-[#c9952a] text-[#0e0a04] shadow-[0_0_20px_rgba(201,149,42,0.4)]"
                  : "border border-[#c9952a]/30 text-[#f5e6c0]/60 hover:border-[#c9952a]/60 hover:text-[#d4af37]"
              }`}
              style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="bg-[#1a1206] border border-[#c9952a]/20 hover:border-[#c9952a]/50 transition-all duration-300 group overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
            >
              <div className="relative h-48 overflow-hidden bg-[#2a1e08]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1206] via-transparent to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 right-3 bg-[#c9952a] text-[#0e0a04] font-['Cairo'] text-xs font-bold px-3 py-1">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-['Amiri'] text-xl font-bold text-[#f5e6c0]">{item.name}</h3>
                  <span className="font-['Amiri'] text-2xl font-bold text-[#d4af37] shrink-0">
                    {item.price} <span className="text-sm font-['Cairo']">جنيه</span>
                  </span>
                </div>
                <p className="font-['Cairo'] text-[#f5e6c0]/50 text-sm leading-relaxed">{item.desc}</p>
                <button className="mt-4 w-full font-['Cairo'] text-sm font-bold text-[#c9952a] border border-[#c9952a]/30 py-2 hover:bg-[#c9952a] hover:text-[#0e0a04] transition-all duration-300">
                  أضف للطلب
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery section
function Gallery() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1678038592492-d73c063bb9e2?w=600&h=400&fit=crop&auto=format",
      alt: "أهرامات الجيزة عند الغروب",
    },
    {
      src: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=600&h=800&fit=crop&auto=format",
      alt: "مشويات مازن الأصيلة",
    },
    {
      src: "https://images.unsplash.com/photo-1777716003985-68fed08d0c7e?w=600&h=400&fit=crop&auto=format",
      alt: "طبق مشاوي مشكّلة",
    },
    {
      src: "https://images.unsplash.com/photo-1643808147605-f986d30b461b?w=600&h=400&fit=crop&auto=format",
      alt: "أهرامات مصر العظيمة",
    },
  ];

  return (
    <section className="py-24 bg-[#0e0a04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <HieroglyphBorder />
          <h2 className="font-['Amiri'] text-4xl font-bold text-[#f5e6c0] mt-4 mb-2">من مطبخنا</h2>
          <EgyptianDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-[#1a1206] group ${i === 1 ? "row-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                style={{ height: i === 1 ? "100%" : "220px", minHeight: "220px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a04]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Customer reviews
const reviews = [
  {
    name: "أحمد العبد",
    location: "المعادي، القاهرة",
    text: "أكلت في كثير من المطاعم، لكن كفتة مازن لا مثيل لها. البهارات والشوي على الفحم بيديلها طعم مختلف تماماً.",
    stars: 5,
  },
  {
    name: "سارة محمد",
    location: "مصر الجديدة",
    text: "المكان نظيف والخدمة محترمة جداً. الريش الضاني كانت طرية ومتبّلة صح. هنرجع قريباً إن شاء الله!",
    stars: 5,
  },
  {
    name: "خالد إبراهيم",
    location: "شبرا الخيمة",
    text: "من أيام الجيش وأنا عارف مازن. ما اتغيرش حاجة — نفس الجودة ونفس الطعم الأصيل. شكراً يا عم مازن!",
    stars: 5,
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0d0902] relative overflow-hidden">
      {/* Background pyramid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <PyramidSVG className="w-[600px] h-[400px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <HieroglyphBorder />
          <p className="font-['Cairo'] text-[#c9952a] text-sm tracking-widest uppercase mt-4 mb-3">آراء عملاؤنا</p>
          <h2 className="font-['Amiri'] text-4xl md:text-5xl font-bold text-[#f5e6c0] mb-4">
            ماذا يقولون عنّا
          </h2>
          <EgyptianDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#1a1206] border border-[#c9952a]/20 p-7 relative"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="font-['Cairo'] text-[#f5e6c0]/70 leading-relaxed mb-6 text-sm">"{r.text}"</p>
              <div className="border-t border-[#c9952a]/20 pt-4">
                <div className="font-['Amiri'] font-bold text-[#d4af37]">{r.name}</div>
                <div className="font-['Cairo'] text-xs text-[#f5e6c0]/40 mt-0.5">{r.location}</div>
              </div>
              {/* Gold corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-r-2 border-[#c9952a]" style={{ transform: "scaleX(-1)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pyramid banner
function PyramidBanner() {
  return (
    <div className="relative h-64 overflow-hidden bg-[#0e0a04] flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1758546705512-2071bf8dc17e?w=1920&h=500&fit=crop&auto=format"
        alt="أهرامات مصر"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0a04] via-transparent to-[#0e0a04]" />
      <div className="relative z-10 text-center px-6">
        <div className="flex justify-center mb-4">
          <PyramidSVG className="w-40 h-24" />
        </div>
        <p className="font-['Amiri'] text-[#d4af37] text-2xl italic">
          "الأكل المصري الأصيل — كأنك في قلب القاهرة"
        </p>
      </div>
    </div>
  );
}

// Contact section
function Contact() {
  const branches = [
    { name: "فرع شبرا", address: "شارع شبرا الرئيسي، بجوار مسجد الحسين", phone: "٠١٠٠ ١٢٣ ٤٥٦٧", hours: "١٠ص – ٢ص" },
    { name: "فرع المعادي", address: "شارع ٩، المعادي الجديدة، القاهرة", phone: "٠١٠٠ ٧٨٩ ٠١٢٣", hours: "١٢ظ – ٣ص" },
    { name: "فرع مدينة نصر", address: "شارع عباس العقاد، مدينة نصر", phone: "٠١٠٠ ٤٥٦ ٧٨٩٠", hours: "١١ص – ١ص" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0e0a04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <HieroglyphBorder />
          <p className="font-['Cairo'] text-[#c9952a] text-sm tracking-widest uppercase mt-4 mb-3">فروعنا</p>
          <h2 className="font-['Amiri'] text-4xl md:text-5xl font-bold text-[#f5e6c0] mb-4">
            تواصل معنا
          </h2>
          <EgyptianDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {branches.map((b) => (
            <div
              key={b.name}
              className="bg-[#1a1206] border border-[#c9952a]/20 hover:border-[#c9952a]/50 p-7 transition-all duration-300 group"
            >
              <h3 className="font-['Amiri'] text-2xl font-bold text-[#d4af37] mb-5">{b.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#c9952a] mt-0.5 shrink-0" />
                  <span className="font-['Cairo'] text-[#f5e6c0]/70 text-sm leading-relaxed">{b.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#c9952a] shrink-0" />
                  <span className="font-['Cairo'] text-[#f5e6c0]/70 text-sm" dir="ltr">{b.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#c9952a] shrink-0" />
                  <span className="font-['Cairo'] text-[#f5e6c0]/70 text-sm">{b.hours}</span>
                </div>
              </div>
              <a
                href={`tel:${b.phone}`}
                className="mt-6 block text-center font-['Cairo'] text-sm font-bold text-[#0e0a04] bg-[#c9952a] hover:bg-[#d4af37] py-2.5 transition-all duration-300"
              >
                اتصل الآن
              </a>
            </div>
          ))}
        </div>

        {/* Order form */}
        <div className="max-w-2xl mx-auto bg-[#1a1206] border border-[#c9952a]/20 p-8"
          style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
        >
          <h3 className="font-['Amiri'] text-2xl font-bold text-[#d4af37] text-center mb-6">
            اطلب توصيل أو اترك رسالة
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-['Cairo'] text-[#c9952a] text-xs font-bold block mb-1.5">الاسم</label>
              <input
                type="text"
                placeholder="اسمك الكريم"
                className="w-full bg-[#0e0a04] border border-[#c9952a]/30 focus:border-[#c9952a] text-[#f5e6c0] font-['Cairo'] text-sm px-4 py-2.5 outline-none transition-colors placeholder:text-[#f5e6c0]/20"
              />
            </div>
            <div>
              <label className="font-['Cairo'] text-[#c9952a] text-xs font-bold block mb-1.5">رقم الهاتف</label>
              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                dir="ltr"
                className="w-full bg-[#0e0a04] border border-[#c9952a]/30 focus:border-[#c9952a] text-[#f5e6c0] font-['Cairo'] text-sm px-4 py-2.5 outline-none transition-colors placeholder:text-[#f5e6c0]/20"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="font-['Cairo'] text-[#c9952a] text-xs font-bold block mb-1.5">رسالتك أو طلبك</label>
            <textarea
              rows={4}
              placeholder="اكتب طلبك أو استفسارك هنا..."
              className="w-full bg-[#0e0a04] border border-[#c9952a]/30 focus:border-[#c9952a] text-[#f5e6c0] font-['Cairo'] text-sm px-4 py-2.5 outline-none transition-colors resize-none placeholder:text-[#f5e6c0]/20"
            />
          </div>
          <button
            className="w-full font-['Cairo'] font-bold text-[#0e0a04] bg-[#c9952a] hover:bg-[#d4af37] py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,149,42,0.5)] flex items-center justify-center gap-2"
          >
            <Flame size={16} />
            أرسل الطلب
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-[#c9952a]/20 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <EyeOfRa />
              <span className="font-['Amiri'] text-xl font-bold text-[#d4af37]">مازن للمشويات</span>
            </div>
            <p className="font-['Cairo'] text-[#f5e6c0]/30 text-xs">
              منذ ٢٠٠٥ — القاهرة، مصر
            </p>
          </div>

          <div className="flex gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-['Cairo'] text-xs text-[#f5e6c0]/40 hover:text-[#d4af37] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <HieroglyphBorder />

        <p className="font-['Cairo'] text-[#f5e6c0]/20 text-xs text-center mt-4">
          جميع الحقوق محفوظة © ٢٠٢٦ مازن للمشويات
        </p>
        <p className="font-['Cairo'] text-[#d4af37]/50 text-xs text-center mt-2">
          Made by Mazen Mohamed — صُنع بواسطة مازن محمد
        </p>
      </div>
    </footer>
  );
}

// App component
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <MenuSection />
      <Gallery />
      <Reviews />
      <PyramidBanner />
      <Contact />
      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
