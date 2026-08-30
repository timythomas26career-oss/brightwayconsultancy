import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Languages,
  Users,
  ClipboardCheck,
  GraduationCap,
  Presentation,
  Globe2,
  BedDouble,
  Stethoscope,
  MapPinned,
  Plus,
  Minus,
  User,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const CONTACT = {
  phone: "+91 75106 12427",
  phoneHref: "tel:+917510612427",
  whatsapp: "https://wa.me/917510612427",
  email: "hello@brightwayconsultancy.com",
  address: "2nd Floor, City Tower, MG Road, Kochi, Kerala 682016",
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Contact", href: "#appointment" },
];

export function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-14 items-center justify-center rounded-full bg-lavender text-foreground [&_svg]:size-7 [&_svg]:stroke-[1.5]">
      {children}
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="leading-none">
          <span className="font-heading text-2xl font-extrabold tracking-tight">
            <span className="text-navy">Bright</span>
            <span className="text-brand-red"> Way</span>
          </span>
          <span className="mt-1 block text-[10px] font-bold tracking-[0.22em] text-muted-foreground">
            STUDY | VISA | CAREER
          </span>
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-navy transition-colors hover:text-brand-red"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-primary-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-base font-semibold text-navy last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function FloatingActions() {
  return (
    <>
      <a
        href="#language"
        className="fixed bottom-6 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-primary-foreground shadow-float"
      >
        <Languages className="size-4" /> Translate
      </a>
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
        <Button asChild variant="whatsapp" size="fab" aria-label="Call us">
          <a href={CONTACT.phoneHref}>
            <Phone />
          </a>
        </Button>
        <Button asChild variant="whatsapp" size="fab" aria-label="Chat on WhatsApp">
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle />
          </a>
        </Button>
      </div>
    </>
  );
}

export const FEATURES = [
  {
    icon: <Users />,
    title: "Personalized Counseling",
    text: "One-to-one guidance shaped around your academic background, career goals and budget — never a template plan.",
  },
  {
    icon: <ClipboardCheck />,
    title: "Transparent Admission Process",
    text: "Clear documentation checklists and honest, step-by-step updates so you always know what happens next.",
  },
  {
    icon: <GraduationCap />,
    title: "Global Study Opportunities",
    text: "Structured admission support for internationally recognized universities across our partner destinations.",
  },
  {
    icon: <Presentation />,
    title: "Expert Coaching Support",
    text: "Professional training for IELTS, PTE and OET, delivered by trainers who track your score progress weekly.",
  },
];

export const SUPPORT = [
  "Admission Assistance",
  "Documentation Support",
  "Visa Guidance",
  "Pre-Departure Support",
];

export const DEEP_DIVE = [
  {
    icon: <BedDouble />,
    id: "accommodation",
    title: "Premium Accommodation Support",
    text: "Safe, comfortable and study-friendly hostels with round-the-clock security. We verify every property before students relocate.",
  },
  {
    icon: <Stethoscope />,
    id: "academy",
    title: "MBBS in Georgia & Kazakhstan",
    text: "Affordable tuition at recognized medical universities with English-medium instruction and full documentation support.",
  },
  {
    icon: <MapPinned />,
    id: "other-countries",
    title: "Study in Other Countries",
    text: "Structured guidance for higher education in the UK, Canada, Australia and Europe beyond our flagship programs.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — every document was ready before the deadline and my visa came through first attempt.",
    name: "Student Name",
    course: "MBBS, First Year",
    country: "Georgia",
  },
  {
    quote: "TESTIMONIAL PLACEHOLDER — the IELTS coaching pushed me from 6.0 to 7.5 in eight weeks.",
    name: "Student Name",
    course: "MSc Data Science",
    country: "United Kingdom",
  },
  {
    quote:
      "TESTIMONIAL PLACEHOLDER — they found me verified accommodation near campus before I landed.",
    name: "Student Name",
    course: "Nursing (OET)",
    country: "Australia",
  },
];

export const FAQS = [
  {
    q: "What services does Bright Way provide?",
    a: "Career counseling, university admissions, IELTS/PTE/OET coaching, visa documentation and guidance, and verified accommodation support abroad.",
  },
  {
    q: "Is NEET or IELTS mandatory for MBBS abroad?",
    a: "NEET qualification is required for Indian students pursuing MBBS abroad. IELTS is not mandatory for most of our partner universities, though it strengthens your visa file.",
  },
  {
    q: "Are the universities you support internationally recognized?",
    a: "Yes. We only work with universities recognized by their national ministries and listed with the relevant international medical and education directories.",
  },
  {
    q: "Is accommodation assistance available?",
    a: "Yes. We arrange verified, secure hostels and shared apartments close to campus, and support you through the move-in process.",
  },
  {
    q: "Do you provide visa assistance?",
    a: "From documentation to interview preparation and travel briefing, our visa team handles your file end to end.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="space-y-3">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="rounded-3xl bg-card p-5 shadow-card">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="font-heading text-lg font-bold text-navy">{item.q}</span>
              <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-brand-red-foreground">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

export function AppointmentForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const field = (hasError?: boolean) =>
    `h-12 w-full rounded-full border bg-background pr-11 pl-5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-navy/30 ${
      hasError ? "border-destructive" : "border-input"
    }`;

  const errorText = "mt-1.5 pl-5 text-xs font-medium text-destructive";

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key as keyof FieldErrors]) {
        setErrors((er) => ({ ...er, [key]: undefined }));
      }
    };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim() || !/^[0-9+\-()\s]{10,15}$/.test(values.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.service) next.service = "Please choose a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sent || !validate()) return;
    const text = [
      "New appointment request — Bright Way Consultancy",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service: ${values.service}`,
      values.message.trim() ? `Message: ${values.message.trim()}` : null,
    ]
      .filter((line): line is string => typeof line === "string")
      .join("\n");
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = url;
    }
    setSent(true);
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div className="relative">
        <input
          className={field(!!errors.name)}
          name="name"
          placeholder="Name"
          maxLength={100}
          value={values.name}
          onChange={set("name")}
          aria-invalid={!!errors.name}
        />
        <User className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground" />
        {errors.name && <p className={errorText}>{errors.name}</p>}
      </div>
      <div className="relative">
        <input
          className={field(!!errors.phone)}
          name="phone"
          type="tel"
          placeholder="Phone Number"
          maxLength={20}
          value={values.phone}
          onChange={set("phone")}
          aria-invalid={!!errors.phone}
        />
        <Phone className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground" />
        {errors.phone && <p className={errorText}>{errors.phone}</p>}
      </div>
      <div className="relative">
        <input
          className={field(!!errors.email)}
          name="email"
          type="email"
          placeholder="Email Address *"
          maxLength={255}
          value={values.email}
          onChange={set("email")}
          aria-invalid={!!errors.email}
        />
        <Mail className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground" />
        {errors.email && <p className={errorText}>{errors.email}</p>}
      </div>
      <div className="relative">
        <select
          className={field(!!errors.service)}
          name="service"
          value={values.service}
          onChange={set("service")}
          aria-invalid={!!errors.service}
        >
          <option value="" disabled>
            Please choose your service
          </option>
          <option>Career Counseling</option>
          <option>University Admission</option>
          <option>IELTS / PTE / OET Coaching</option>
          <option>Visa Guidance</option>
          <option>Accommodation Support</option>
        </select>
        {errors.service && <p className={errorText}>{errors.service}</p>}
      </div>
      <div className="relative">
        <textarea
          className="min-h-32 w-full rounded-3xl border border-input bg-background px-5 py-4 pr-11 text-sm outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
          name="message"
          placeholder="Message"
          maxLength={1000}
          value={values.message}
          onChange={set("message")}
        />
        <MessageSquare className="pointer-events-none absolute top-5 right-4 size-4 text-muted-foreground" />
      </div>
      <Button type="submit" variant="hero" size="pill" className="w-full" disabled={sent}>
        {sent ? "Request Sent" : "Send Message"}
      </Button>
      {sent && (
        <p className="rounded-2xl bg-teal/10 px-4 py-3 text-center text-sm font-semibold text-teal">
          Thank you — your request has been opened in WhatsApp. Press send there to confirm, and our
          counselor will contact you within one working day.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <span className="font-heading text-2xl font-extrabold">
            <span className="text-navy">Bright</span>
            <span className="text-brand-red"> Way</span>
          </span>
          <p className="mt-1 text-[10px] font-bold tracking-[0.22em] text-muted-foreground">
            STUDY | VISA | CAREER
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We guide students from first counseling session to first day on campus, with honest
            advice at every step.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-primary-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-primary-foreground"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={CONTACT.whatsapp}
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full bg-whatsapp text-primary-foreground"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-base text-navy">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-teal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base text-navy">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Career Counseling</li>
            <li>University Admissions</li>
            <li>IELTS / PTE / OET Coaching</li>
            <li>Visa Guidance</li>
            <li>Accommodation Support</li>
          </ul>
        </div>
        <div id="language">
          <h3 className="text-base text-navy">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-teal">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-teal">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bright Way Consultancy. All rights reserved.
      </p>
    </footer>
  );
}

export { Globe2 };
