import { useEffect, useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Heart,
  Landmark,
  Menu,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Play,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react"

type Language = "mr" | "hi" | "en"

const content = {
  mr: {
    nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "उत्सव", "कार्यक्रम", "सेवा", "संपर्क"],
    heroKicker: "श्री गणेशाच्या चरणी सेवा • संस्कृती • एकता",
    heroTitle: "गणपती बाप्पा मोरया!",
    heroText: "नवयुवक गणेश मंडळात आपले मनःपूर्वक स्वागत. भक्ती, संस्कृती आणि समाजसेवेचा उत्सव एकत्र साजरा करूया.",
    primary: "उत्सवाची माहिती",
    secondary: "मंडळाबद्दल जाणून घ्या",
    stats: ["वर्षांची परंपरा", "स्वयंसेवक"],
    aboutEyebrow: "आमची ओळख",
    aboutTitle: "भक्तीपासून समाजसेवेपर्यंतचा प्रवास",
    aboutText: "नवयुवक गणेश मंडळ हे केवळ उत्सवाचे व्यासपीठ नाही; हे परिसरातील लोकांना एकत्र आणणारे, संस्कृती जपणारे आणि समाजासाठी सकारात्मक काम करणारे कुटुंब आहे.",
    values: ["भक्ती आणि परंपरा", "युवा सहभाग", "समाजसेवा", "स्वच्छ आणि सुरक्षित उत्सव"],
    festivalEyebrow: "गणेशोत्सव २०२६",
    festivalTitle: "या वर्षीचा उत्सव खास बनवूया",
    festivalText: "दहा दिवसांची भक्ती, सांस्कृतिक कार्यक्रम, सामाजिक उपक्रम आणि आपल्या सर्वांचा उत्साह.",
    countdown: "उत्सवाला सुरुवात",
    scheduleEyebrow: "कार्यक्रम",
    scheduleTitle: "उत्सवातील प्रत्येक दिवस खास",
    scheduleText: "तारीख, वेळ आणि कार्यक्रमांची माहिती एका ठिकाणी.",
    sevaEyebrow: "सेवा आणि सहभाग",
    sevaTitle: "बाप्पाच्या सेवेत तुमचा सहभाग",
    sevaText: "देणगी, स्वयंसेवा किंवा उपक्रमात सहभाग — तुमची छोटी मदत मोठा बदल घडवू शकते.",
    donate: "देणगी द्या",
    volunteer: "स्वयंसेवक व्हा",
    contactEyebrow: "संपर्क",
    contactTitle: "चला, एकत्र उत्सव साजरा करूया",
    contactText: "मंडळ, कार्यक्रम, देणगी किंवा स्वयंसेवा याबाबत काहीही विचारायचे असल्यास आम्हाला संदेश पाठवा.",
    message: "WhatsApp वर संदेश",
    footer: "भक्ती • संस्कृती • समाजसेवा",
    upcoming: "लवकरच",
    readMore: "अधिक जाणून घ्या",
  },
  hi: {
    nav: ["मुख्य", "हमारे बारे में", "उत्सव", "कार्यक्रम", "सेवा", "संपर्क"],
    heroKicker: "श्री गणेश के चरणों में सेवा • संस्कृति • एकता",
    heroTitle: "गणपति बप्पा मोरया!",
    heroText: "नवयुवक गणेश मंडल में आपका हार्दिक स्वागत है। आइए भक्ति, संस्कृति और समाजसेवा का उत्सव साथ मनाएं।",
    primary: "उत्सव की जानकारी",
    secondary: "मंडल के बारे में",
    stats: ["वर्षों की परंपरा", "स्वयंसेवक"],
    aboutEyebrow: "हमारी पहचान",
    aboutTitle: "भक्ति से समाजसेवा तक का सफर",
    aboutText: "नवयुवक गणेश मंडल केवल उत्सव का मंच नहीं, बल्कि लोगों को जोड़ने, संस्कृति को संजोने और समाज के लिए सकारात्मक कार्य करने वाला परिवार है।",
    values: ["भक्ति और परंपरा", "युवा सहभागिता", "समाजसेवा", "स्वच्छ और सुरक्षित उत्सव"],
    festivalEyebrow: "गणेशोत्सव २०२६",
    festivalTitle: "इस वर्ष का उत्सव खास बनाएं",
    festivalText: "दस दिनों की भक्ति, सांस्कृतिक कार्यक्रम, सामाजिक पहल और हम सभी का उत्साह।",
    countdown: "उत्सव की शुरुआत",
    scheduleEyebrow: "कार्यक्रम",
    scheduleTitle: "उत्सव का हर दिन खास",
    scheduleText: "तारीख, समय और कार्यक्रमों की जानकारी एक ही जगह।",
    sevaEyebrow: "सेवा और सहभागिता",
    sevaTitle: "बप्पा की सेवा में आपका योगदान",
    sevaText: "दान, स्वयंसेवा या किसी पहल में भागीदारी — आपकी छोटी मदद बड़ा बदलाव ला सकती है।",
    donate: "दान करें",
    volunteer: "स्वयंसेवक बनें",
    contactEyebrow: "संपर्क",
    contactTitle: "आइए, उत्सव साथ मनाएं",
    contactText: "मंडल, कार्यक्रम, दान या स्वयंसेवा से जुड़ा कोई सवाल हो तो हमें संदेश भेजें।",
    message: "WhatsApp संदेश",
    footer: "भक्ति • संस्कृति • समाजसेवा",
    upcoming: "जल्द ही",
    readMore: "और जानें",
  },
  en: {
    nav: ["Home", "About", "Festival", "Events", "Seva", "Contact"],
    heroKicker: "Devotion • Culture • Community",
    heroTitle: "Ganpati Bappa Morya!",
    heroText: "Welcome to Navyuvak Ganesh Mandal — a community brought together by devotion, culture, service and the spirit of togetherness.",
    primary: "Explore the festival",
    secondary: "Discover our mandal",
    stats: ["Years of tradition", "Volunteers"],
    aboutEyebrow: "Who we are",
    aboutTitle: "A celebration rooted in devotion and service",
    aboutText: "Navyuvak Ganesh Mandal is more than a festival committee. We are a community family preserving culture, bringing people together and creating meaningful social impact.",
    values: ["Devotion & tradition", "Youth participation", "Community service", "Clean & safe celebrations"],
    festivalEyebrow: "Ganeshotsav 2026",
    festivalTitle: "Make this year's celebration unforgettable",
    festivalText: "Ten days of devotion, cultural experiences, community initiatives and shared joy.",
    countdown: "Festival begins",
    scheduleEyebrow: "What's on",
    scheduleTitle: "Every day has a story",
    scheduleText: "Dates, timings and programmes — beautifully organized in one place.",
    sevaEyebrow: "Seva & participation",
    sevaTitle: "Be part of Bappa's seva",
    sevaText: "Donate, volunteer or participate in an initiative. Every contribution helps us serve the community better.",
    donate: "Donate now",
    volunteer: "Become a volunteer",
    contactEyebrow: "Contact",
    contactTitle: "Let's celebrate together",
    contactText: "Have a question about the mandal, events, donations or volunteering? Send us a message.",
    message: "Message on WhatsApp",
    footer: "Devotion • Culture • Community",
    upcoming: "Coming soon",
    readMore: "Learn more",
  },
} as const

const events = [
  { day: "19", month: "SEP", title: "Ganesh Sthapana", time: "08:00 AM", tag: "Opening", icon: Landmark },
  { day: "20", month: "SEP", title: "Aarti & Cultural Evening", time: "07:30 PM", tag: "Cultural", icon: Music2 },
  { day: "23", month: "SEP", title: "Community Seva Drive", time: "10:00 AM", tag: "Seva", icon: Heart },
  { day: "27", month: "SEP", title: "Mahaa Aarti", time: "08:00 PM", tag: "Devotion", icon: Sparkles },
]


function App() {
  const [lang, setLang] = useState<Language>("mr")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("home")
  const t = content[lang]

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "festival", "events", "seva", "contact"]
      const current = ids.findLast((id) => {
        const el = document.getElementById(id)
        return el && window.scrollY >= el.offsetTop - 180
      })
      if (current) setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navIds = ["home", "about", "festival", "events", "seva", "contact"]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0706] text-[#f8f2e9] selection:bg-[#d49a32]/30">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0706]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Navyuvak Ganesh Mandal logo" className="h-14 w-14 rounded-full object-cover ring-1 ring-[#d49a32]/40" />
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-bold tracking-wide text-[#f7d48b]">नवयुवक गणेश मंडळ</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Navyuvak Ganesh Mandal</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {t.nav.map((item, i) => (
              <a
                key={item}
                href={`#${navIds[i]}`}
                className={`text-sm font-medium transition ${active === navIds[i] ? "text-[#f2bd59]" : "text-white/65 hover:text-white"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-white/10 bg-white/5 p-1 md:flex">
              {(["mr", "hi", "en"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${lang === l ? "bg-[#d49a32] text-black" : "text-white/55 hover:text-white"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              className="rounded-full border border-white/10 p-2.5 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#0a0706] px-5 py-5 lg:hidden">
            <div className="grid gap-1">
              {t.nav.map((item, i) => (
                <a key={item} href={`#${navIds[i]}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-white/75 hover:bg-white/5">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {(["mr", "hi", "en"] as Language[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`rounded-full px-4 py-2 text-xs font-bold uppercase ${lang === l ? "bg-[#d49a32] text-black" : "bg-white/5 text-white/60"}`}>{l}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      <main>
        <section id="home" className="relative flex min-h-[850px] items-center pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(181,34,17,.30),transparent_38%),radial-gradient(circle_at_20%_60%,rgba(214,154,50,.10),transparent_28%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:60px_60px]" />
          <div className="absolute left-1/2 top-36 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#b32117]/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d49a32]/25 bg-[#d49a32]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f3c978]">
                <Sparkles size={14} />
                {t.heroKicker}
              </div>
              <h1 className="font-serif text-6xl font-black leading-[.95] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="text-white">गणपती</span>
                <br />
                <span className="gold-text">बाप्पा मोरया!</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">{t.heroText}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#festival" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d49a32] px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_40px_rgba(212,154,50,.18)] transition hover:-translate-y-0.5 hover:bg-[#efbb5b]">
                  {t.primary}<ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {t.secondary}
                </a>
              </div>
              <div className="mt-14 grid max-w-md grid-cols-2 gap-5 border-t border-white/10 pt-7">
                {["5+", "54+"].map((n, i) => (
                  <div key={n}>
                    <p className="font-serif text-2xl font-bold text-[#f3c978]">{n}</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">{t.stats[i]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-10 rounded-full bg-[#b32117]/30 blur-3xl" />
              <div className="relative rounded-[2rem] border border-[#d49a32]/20 bg-gradient-to-br from-white/[.08] to-white/[.02] p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#100b09] p-3">
                  <img src="/logo.png" alt="Navyuvak Ganesh Mandal" className="mx-auto aspect-square w-full rounded-[1.15rem] object-cover" />
                </div>
                <div className="flex items-center justify-between px-3 pb-2 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[.25em] text-white/40">Navyuvak Ganesh</p>
                    <p className="mt-1 font-serif text-lg text-[#f7d48b]">भक्ती • संस्कृती • सेवा</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#d49a32]/10 text-[#e5b85d]"><Star size={18} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/5 bg-[#100b09] py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.aboutEyebrow}</p>
              <h2 className="section-title mt-4">{t.aboutTitle}</h2>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/55">{t.aboutText}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.values.map((v, i) => (
                  <div key={v} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.025] p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d49a32]/10 text-[#e7bb63]">{["✦", "◈", "✺", "✓"][i]}</span>
                    <span className="text-sm font-semibold text-white/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/5 bg-[#0b0807] py-20 sm:py-24">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#b32117]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Landmark, title: "परंपरा", text: "भक्ती आणि संस्कृतीची जपणूक" },
                { icon: Users, title: "एकता", text: "समुदायाला जोडणारा उत्सव" },
                { icon: Heart, title: "सेवा", text: "समाजासाठी सकारात्मक योगदान" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="group rounded-3xl border border-white/8 bg-white/[.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d49a32]/25 hover:bg-white/[.04]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#d49a32]/20 bg-[#d49a32]/10 text-[#eac06b]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#f6d58d]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="festival" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#b32117]/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-[2rem] border border-[#d49a32]/20 bg-gradient-to-br from-[#6f1b13]/35 to-white/[.025] p-8 sm:p-12">
                <p className="eyebrow">{t.festivalEyebrow}</p>
                <h2 className="section-title mt-4 max-w-3xl">{t.festivalTitle}</h2>
                <p className="mt-6 max-w-2xl text-white/55 leading-8">{t.festivalText}</p>
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[["19","SEP"],["20","SEP"],["21","SEP"],["22","SEP"]].map(([d,m]) => (
                    <div key={d} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-serif text-3xl font-bold text-[#f5cf82]">{d}</p>
                      <p className="text-[10px] font-bold tracking-[.25em] text-white/35">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
                <div className="flex items-center gap-2 text-[#e6b85f]"><CalendarDays size={18} /><span className="text-xs font-bold uppercase tracking-[.2em]">{t.countdown}</span></div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[["12","Days"],["08","Hours"],["42","Min"]].map(([n,l]) => (
                    <div key={l} className="rounded-2xl bg-black/25 p-4 text-center">
                      <p className="font-serif text-4xl font-bold">{n}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/35">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#d49a32]/10 text-[#efc66f]"><Clock3 size={18}/></div>
                  <div><p className="text-sm font-semibold">19 September 2026</p><p className="text-xs text-white/40">Grand opening & Sthapana</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-[#100b09] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">{t.scheduleEyebrow}</p>
                <h2 className="section-title mt-4">{t.scheduleTitle}</h2>
                <p className="mt-4 max-w-2xl text-white/50">{t.scheduleText}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8bd68]">{t.readMore}<ArrowRight size={16}/></a>
            </div>
            <div className="mt-12 grid gap-4">
              {events.map((event) => {
                const Icon = event.icon
                return (
                  <article key={event.title} className="group grid gap-5 rounded-2xl border border-white/8 bg-white/[.025] p-5 transition hover:border-[#d49a32]/25 hover:bg-white/[.04] sm:grid-cols-[90px_1fr_auto] sm:items-center">
                    <div className="flex items-center gap-3 sm:block">
                      <p className="font-serif text-4xl font-bold text-[#f1c873]">{event.day}</p>
                      <p className="text-[10px] font-bold tracking-[.25em] text-white/35">{event.month}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden h-11 w-11 place-items-center rounded-full bg-[#d49a32]/10 text-[#e7b95f] sm:grid"><Icon size={18}/></div>
                      <div><p className="font-semibold text-white/90">{event.title}</p><p className="mt-1 text-sm text-white/40">{event.time}</p></div>
                    </div>
                    <span className="w-fit rounded-full border border-[#d49a32]/20 bg-[#d49a32]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#e8bd68]">{event.tag}</span>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="seva" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d49a32]/20 bg-gradient-to-br from-[#701c13] to-[#21100b] p-8 sm:p-12 lg:p-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d49a32]/15 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="eyebrow">{t.sevaEyebrow}</p>
                  <h2 className="section-title mt-4 max-w-3xl">{t.sevaTitle}</h2>
                  <p className="mt-5 max-w-2xl leading-8 text-white/55">{t.sevaText}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0c76d] px-6 py-3.5 text-sm font-bold text-black hover:bg-[#ffe09a]"><Heart size={16}/> {t.donate}</a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10"><Users size={16}/> {t.volunteer}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 bg-[#100b09] py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.85fr]">
            <div>
              <p className="eyebrow">{t.contactEyebrow}</p>
              <h2 className="section-title mt-4">{t.contactTitle}</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/50">{t.contactText}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a href="tel:+917517726476" className="contact-card"><Phone size={18}/><span><b>7517726476</b><small>Call the mandal</small></span></a>
                <a href="tel:+919022500433" className="contact-card"><Phone size={18}/><span><b>902250433</b><small>Call the mandal</small></span></a>
                <div className="contact-card"><MapPin size={18}/><span><b>Mandwa, Chandur Rly, Amravati</b><small>Mandal location</small></span></div>
                <div className="contact-card"><Clock3 size={18}/><span><b>09:00 AM – 10:00 PM</b><small>Festival help desk</small></span></div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.025] p-7 sm:p-9">
              <div className="flex items-center gap-3"><img src="/logo.png" className="h-14 w-14 rounded-full object-cover" alt="Mandal logo"/><div><p className="font-serif text-xl text-[#f5d184]">नवयुवक गणेश मंडळ</p><p className="text-xs text-white/35">Mandwa • Chandur Rly • Amravati</p></div></div>
              <div className="my-8 h-px bg-white/10" />
              <p className="text-sm leading-7 text-white/45">“The best celebrations are the ones that leave the community stronger than before.”</p>
              <div className="mt-8 flex gap-2">
                <a
                  href="#contact"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.03] text-xs font-bold text-white/55 transition hover:border-[#d49a32]/30 hover:text-[#f0c76d]"
                >
                  IG
                </a>
                <a
                  href="#contact"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.03] text-sm font-bold text-white/55 transition hover:border-[#d49a32]/30 hover:text-[#f0c76d]"
                >
                  f
                </a>
                <a
                  href="#contact"
                  aria-label="YouTube"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.03] text-xs font-bold text-white/55 transition hover:border-[#d49a32]/30 hover:text-[#f0c76d]"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080504]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><img src="/logo.png" className="h-10 w-10 rounded-full object-cover" alt="Mandal logo"/><div><p className="text-sm font-semibold text-white/80">नवयुवक गणेश मंडळ</p><p className="text-[10px] uppercase tracking-[.2em] text-white/30">{t.footer}</p></div></div>
          <p className="text-xs text-white/30">© 2026 Navyuvak Ganesh Mandal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App