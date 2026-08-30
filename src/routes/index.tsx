import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudent from "@/assets/hero-student.jpg";
import counselor from "@/assets/counselor.jpg";
import visaDesk from "@/assets/visa-desk.jpg";
import {
  AppointmentForm,
  DEEP_DIVE,
  FEATURES,
  Faq,
  FloatingActions,
  Footer,
  Header,
  IconBadge,
  SUPPORT,
  TESTIMONIALS,
} from "@/components/site/BrightWay";

const title = "Bright Way Consultancy | Study Abroad & Migration Experts";
const description =
  "Bright Way Consultancy guides students through university admissions, IELTS/PTE/OET coaching, visa documentation and verified accommodation abroad.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActions />
      <main>
        {/* Hero */}
        <section id="home" className="relative">
          <div className="relative">
            <img
              src={heroStudent}
              alt="Smiling student holding books on a university campus"
              width={1536}
              height={1024}
              className="h-[26rem] w-full object-cover object-[center_35%] md:h-[34rem]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center gap-6 px-6">
              <h1 className="max-w-xl text-4xl text-brand-red md:text-5xl">
                Your Trusted Partner
                <br />
                in Global Education
                <br />& Migration
              </h1>
              <p className="max-w-md text-sm text-primary-foreground/85 md:text-base">
                Structured counseling, transparent processes and support that continues long after
                your visa is stamped.
              </p>
              <div>
                <Button asChild variant="hero" size="pill">
                  <a href="#appointment">Book An Appointment</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-10 max-w-6xl px-5">
            <img
              src={counselor}
              alt="Counselor advising a student in the Bright Way office"
              width={1024}
              height={768}
              loading="lazy"
              className="h-48 w-full rounded-3xl object-cover object-[center_40%] shadow-card md:h-72"
            />
          </div>
        </section>

        {/* Services intro */}
        <section id="services" className="px-5 pt-14 pb-4">
          <div className="mx-auto max-w-6xl">
            <IconBadge>
              <Globe2 />
            </IconBadge>
            <p className="eyebrow mt-5">Our Services</p>
            <h2 className="mt-3 max-w-lg text-3xl md:text-4xl">
              Empowering Your Academic
              <br />& Global Journey
            </h2>
          </div>
        </section>

        {/* Feature cards */}
        <section className="px-5 py-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {FEATURES.map((f) => (
              <article key={f.title} className="rounded-3xl bg-card p-7 shadow-card">
                <IconBadge>{f.icon}</IconBadge>
                <h3 className="mt-5 text-xl text-navy">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Student support */}
        <section className="px-5 py-8">
          <div className="mx-auto max-w-6xl rounded-3xl bg-card p-7 shadow-card">
            <h2 className="text-2xl text-navy">Student Support</h2>
            <ol className="mt-6 space-y-4">
              {SUPPORT.map((item, i) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-brand-red-foreground">
                    {i + 1}
                  </span>
                  <a
                    href="#appointment"
                    className="font-medium text-teal underline-offset-4 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <Button asChild variant="hero" size="pill" className="mb-5">
              <a href="#services">View All</a>
            </Button>
            <div className="rounded-3xl bg-cream p-7 md:p-10">
              <p className="eyebrow">About Us</p>
              <h2 className="mt-3 text-3xl text-navy md:text-4xl">
                Where Guidance
                <br />
                Meets Opportunity
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-navy/80 md:text-base">
                Bright Way Consultancy was built on one belief: students succeed when counseling is
                structured and processes are transparent. We support you across study abroad
                admissions, competitive exam coaching, visa guidance and secure accommodation — with
                one counselor accountable for your file from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Deep dive */}
        <section className="px-5 py-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {DEEP_DIVE.map((s) => (
              <article key={s.title} id={s.id} className="rounded-3xl bg-card p-7 shadow-card">
                <IconBadge>{s.icon}</IconBadge>
                <h3 className="mt-5 text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <Button asChild variant="outlineNavy" size="pill" className="mt-6">
                  <a href="#appointment">Read More</a>
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="mt-8 bg-surface px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              What Makes
              <br />
              Us Different?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              At Bright Way Consultancy, we provide structured guidance, transparent processes and
              personalized support to help students achieve their academic and career goals with
              confidence.
            </p>
            <Button asChild variant="hero" size="pill" className="mt-7">
              <a href="#appointment">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Hear From Our Successful Students</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
              Real Experiences from Students
              <br />
              Who Trusted Bright Way
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Placeholder quotes below — replace with real student feedback (with permission) before
              publishing.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="rounded-3xl bg-surface p-7">
                  <blockquote className="font-heading text-lg leading-snug text-navy">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-lavender font-heading font-bold text-navy">
                      {t.country.slice(0, 1)}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-navy">{t.name}</span>
                      <span className="block text-muted-foreground">
                        {t.course} · {t.country}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface px-5 py-14">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Ask Questions</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Frequently
              <br />
              Asked Questions
            </h2>
            <div className="mt-8">
              <Faq />
            </div>
          </div>
        </section>

        {/* Appointment */}
        <section id="appointment" className="px-5 py-14">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card p-7 shadow-card md:p-10">
            <h2 className="text-2xl text-navy md:text-3xl">Appointment Now</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us where you want to study — we'll map the route.
            </p>
            <div className="mt-7">
              <AppointmentForm />
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <img
              src={visaDesk}
              alt="Applicant reviewing a visa application form at a desk"
              width={1280}
              height={896}
              loading="lazy"
              className="h-56 w-full rounded-3xl object-cover object-[center_15%] md:h-80"
            />
          </div>
        </section>
      </main>
      <Footer />
      <div className="h-6" />
    </div>
  );
}
