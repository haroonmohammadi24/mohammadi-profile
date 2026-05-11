import { useEffect, useMemo, useRef, useState } from 'react'
import { profile } from './content/profile'
import profilePhoto from './assets/mohammadi profile.jpeg'
import HeroScene from './components/HeroScene'
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CircleUser,
  Copy,
  GraduationCap,
  LaptopMinimal,
  Link as LinkIcon,
  Mail,
  Moon,
  Phone,
  Sun,
  Wrench,
} from 'lucide-react'

type Theme = 'light' | 'dark'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const stored =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    return stored === 'dark' || stored === 'light' ? stored : 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const navItems = useMemo(
    () =>
      [
        { href: '#about', label: 'About', Icon: CircleUser },
        { href: '#skills', label: 'Skills', Icon: Wrench },
        { href: '#projects', label: 'Projects', Icon: LaptopMinimal },
        { href: '#experience', label: 'Experience', Icon: BriefcaseBusiness },
        { href: '#education', label: 'Education', Icon: GraduationCap },
        { href: '#contact', label: 'Contact', Icon: Mail },
      ] as const,
    [],
  )

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-white to-slate-50 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-floaty absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
        <div className="animate-floaty absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-300/20 blur-3xl [animation-delay:-1.7s] dark:bg-fuchsia-500/10" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid size-8 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
              M
            </span>
            <span className="hidden sm:block">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <item.Icon className="size-4 opacity-80" aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn-secondary px-3 py-2 text-sm font-medium"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
              aria-pressed={theme === 'dark'}
            >
              <span className="hidden sm:inline">
                Theme: {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <span
                aria-hidden="true"
                className="grid size-5 place-items-center"
              >
                {theme === 'dark' ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
              </span>
            </button>

            <button
              type="button"
              className="btn-secondary p-2 md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200/70 bg-white/90 backdrop-blur md:hidden dark:border-slate-800/60 dark:bg-slate-950/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-2">
                    <item.Icon className="size-4 opacity-80" aria-hidden="true" />
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-4">
        <section className="relative py-14 sm:py-20">
          <HeroScene className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-80" />
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="chip gap-2 shadow-sm">
                <BadgeCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                Open to impactful work
              </p>
              <h1 className="gradient-text animate-shimmer mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {profile.name}
              </h1>
              <Typewriter
                text={profile.title}
                className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary"
                >
                  <Mail className="mr-2 size-4" aria-hidden="true" />
                  Email me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <LinkIcon className="mr-2 size-4" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="#experience"
                  className="btn-secondary"
                >
                  <BriefcaseBusiness className="mr-2 size-4" aria-hidden="true" />
                  View experience
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <InfoCard label="Location" value={profile.location} icon="location" />
                <InfoCard label="Phone" value={profile.phone} icon="phone" />
                <InfoCard label="Email" value={profile.email} icon="mail" />
                <InfoCard
                  label="Organization"
                  value="Afghanistan Payment System (APS)"
                  href={profile.companySite}
                  icon="link"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glass glass-hover rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/20 to-emerald-400/20 blur-sm dark:from-indigo-500/30 dark:via-fuchsia-500/15 dark:to-emerald-400/15" />
                    <img
                      src={profilePhoto}
                      alt={`${profile.name} profile photo`}
                      className="relative size-20 rounded-3xl border border-white/60 object-cover shadow-sm dark:border-slate-900/60"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.name}
                    </div>
                    <div className="mt-1 truncate text-xs text-slate-600 dark:text-slate-300">
                      {profile.location}
                    </div>
                  </div>
                </div>

                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Focus areas
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'System Architecture',
                    'Microservices',
                    'National Payment Systems',
                    'Integration & Interoperability',
                    'Security (JWT, OAuth2)',
                    'CI/CD & Docker',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/40">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    Building secure, scalable platforms for financial and
                    e-government services—focused on reliability, performance,
                    and practical delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About" subtitle="A quick summary">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                {profile.summary.map((p) => (
                  <p key={p} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Top skills
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.topSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                  <div className="font-medium text-slate-900 dark:text-white">
                    Standards
                  </div>
                  <div className="mt-1">ISO 8583 • ISO 20022</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools I work with">
          <div className="grid gap-4 md:grid-cols-2">
            <SkillGroup
              title="Backend"
              items={[
                'Java (Spring Boot)',
                'Kotlin',
                'REST APIs',
                'Spring Security',
                'JWT / OAuth2',
              ]}
            />
            <SkillGroup
              title="Frontend"
              items={['React', 'TypeScript', 'Responsive UI', 'State management']}
            />
            <SkillGroup
              title="Data & Messaging"
              items={['Kafka', 'MongoDB', 'PostgreSQL', 'Apache Spark']}
            />
            <SkillGroup
              title="DevOps"
              items={['Docker', 'CI/CD', 'Monitoring mindset', 'Production hardening']}
            />
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected systems I worked on"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {profile.projects.map((project) => (
              <ProjectCard
                key={`${project.name}-${project.organization}`}
                project={project}
              />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Roles and responsibilities"
        >
          <div className="grid gap-4">
            {profile.experiences.map((exp) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}-${exp.period}`}
                experience={exp}
              />
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" subtitle="Academic background">
          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-base font-semibold text-slate-900 dark:text-white">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="size-4 text-indigo-600/80 dark:text-indigo-300/80" aria-hidden="true" />
                  {profile.education.school}
                </span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {profile.education.period}
              </div>
            </div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              {profile.education.degree}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s connect">
          <div className="grid gap-4 md:grid-cols-2">
            <ContactCard
              title="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              icon="mail"
              copyValue={profile.email}
            />
            <ContactCard
              title="LinkedIn"
              value="mohammad-haroon-m-0533b6240"
              href={profile.linkedin}
              icon="link"
            />
            <ContactCard
              title="Phone"
              value={profile.phone}
              href={`tel:${profile.phone}`}
              icon="phone"
              copyValue={profile.phone}
            />
            <ContactCard
              title="APS"
              value="aps.gov.af"
              href={profile.companySite}
              icon="org"
            />
          </div>
        </Section>

        <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind
            CSS.
          </p>
        </footer>
      </main>
    </div>
  )
}

function Typewriter(props: { text: string; className?: string }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pause'>('typing')

  useEffect(() => {
    if (phase === 'typing') {
      if (visibleCount >= props.text.length) {
        const pauseId = window.setTimeout(() => setPhase('pause'), 1400)
        return () => window.clearTimeout(pauseId)
      }

      const nextDelay = props.text[visibleCount] === ' ' ? 15 : 26
      const id = window.setTimeout(
        () => setVisibleCount((c) => Math.min(props.text.length, c + 1)),
        nextDelay,
      )
      return () => window.clearTimeout(id)
    }

    const restartId = window.setTimeout(() => {
      setVisibleCount(0)
      setPhase('typing')
    }, 400)
    return () => window.clearTimeout(restartId)
  }, [phase, props.text, visibleCount])

  return (
    <p className={props.className} aria-label={props.text}>
      <span aria-hidden="true">{props.text.slice(0, visibleCount)}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[0.6ch] animate-[pulse_0.9s_ease-in-out_infinite] align-[-0.06em] text-indigo-500/80 dark:text-indigo-300/70"
      >
        |
      </span>
    </p>
  )
}

function Section(props: {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section id={props.id} className="scroll-mt-24 py-14">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {props.title}
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {props.subtitle}
        </p>
      </div>
      {props.children}
    </section>
  )
}

function InfoCard(props: {
  label: string
  value: string
  href?: string
  icon?: 'phone' | 'mail' | 'link' | 'location'
}) {
  const icon =
    props.icon === 'phone' ? (
      <Phone className="size-4" aria-hidden="true" />
    ) : props.icon === 'mail' ? (
      <Mail className="size-4" aria-hidden="true" />
    ) : props.icon === 'link' ? (
      <LinkIcon className="size-4" aria-hidden="true" />
    ) : (
      <Building2 className="size-4" aria-hidden="true" />
    )

  const body = (
    <div className="glass glass-hover rounded-2xl px-4 py-3">
      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">{icon}</span>
          {props.label}
        </span>
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
        {props.value}
      </div>
    </div>
  )

  if (!props.href) return body
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className="block">
      {body}
    </a>
  )
}

function SkillGroup(props: { title: string; items: string[] }) {
  const icon =
    props.title === 'Backend' ? (
      <Wrench className="size-4" aria-hidden="true" />
    ) : props.title === 'Frontend' ? (
      <LaptopMinimal className="size-4" aria-hidden="true" />
    ) : props.title === 'DevOps' ? (
      <BriefcaseBusiness className="size-4" aria-hidden="true" />
    ) : (
      <Building2 className="size-4" aria-hidden="true" />
    )

  return (
    <Reveal>
      <div className="glass glass-hover rounded-3xl p-6">
      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        <span className="inline-flex items-center gap-2">
          <span className="text-indigo-600/80 dark:text-indigo-300/80">
            {icon}
          </span>
          {props.title}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {props.items.map((item) => (
          <span
            key={item}
            className="chip"
          >
            {item}
          </span>
        ))}
      </div>
      </div>
    </Reveal>
  )
}

function ExperienceCard(props: { experience: import('./content/profile').Experience }) {
  const { experience } = props
  return (
    <Reveal>
      <article className="glass glass-hover rounded-3xl p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
          <div className="text-base font-semibold text-slate-900 dark:text-white">
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="size-4 text-indigo-600/80 dark:text-indigo-300/80" aria-hidden="true" />
              {experience.role}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-700 dark:text-slate-200">
            <span className="inline-flex items-center gap-2">
              <Building2 className="size-4 opacity-80" aria-hidden="true" />
              {experience.company}
            </span>
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {experience.location}
          </div>
        </div>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {experience.period}
        </div>
      </div>

      {experience.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {experience.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
      </article>
    </Reveal>
  )
}

function ContactCard(props: {
  title: string
  value: string
  href: string
  icon: 'mail' | 'phone' | 'link' | 'org'
  copyValue?: string
}) {
  const icon =
    props.icon === 'mail' ? (
      <Mail className="size-4" aria-hidden="true" />
    ) : props.icon === 'phone' ? (
      <Phone className="size-4" aria-hidden="true" />
    ) : props.icon === 'link' ? (
      <LinkIcon className="size-4" aria-hidden="true" />
    ) : (
      <Building2 className="size-4" aria-hidden="true" />
    )

  const canCopy = Boolean(props.copyValue)

  return (
    <Reveal>
      <a
        href={props.href}
        target={props.href.startsWith('http') ? '_blank' : undefined}
        rel={props.href.startsWith('http') ? 'noreferrer' : undefined}
        className="glass group relative overflow-hidden rounded-3xl p-6 transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-400/10" />
          <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-fuchsia-500/10 blur-2xl dark:bg-fuchsia-400/10" />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <span className="grid size-8 place-items-center rounded-2xl border border-slate-200 bg-white text-indigo-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-indigo-300">
                {icon}
              </span>
              {props.title}
            </div>

            <div className="mt-3 truncate text-base font-semibold text-slate-900 dark:text-white">
              {props.value}
            </div>
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Click to open
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2">
            <ArrowUpRight className="size-5 text-slate-400 transition group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-200" />
            {canCopy ? (
              <button
                type="button"
                className="btn-secondary px-2.5 py-1.5 text-xs"
                onClick={(e) => {
                  e.preventDefault()
                  void navigator.clipboard?.writeText(props.copyValue ?? '')
                }}
                aria-label={`Copy ${props.title}`}
              >
                <Copy className="mr-1.5 size-3.5" aria-hidden="true" />
                Copy
              </button>
            ) : null}
          </div>
        </div>
      </a>
    </Reveal>
  )
}

function ProjectCard(props: { project: import('./content/profile').Project }) {
  const { project } = props
  return (
    <Reveal>
      <article className="glass glass-hover rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-base font-semibold text-slate-900 dark:text-white">
            {project.name}
          </div>
          <div className="mt-1 text-sm text-slate-700 dark:text-slate-200">
            <span className="inline-flex items-center gap-2">
              <Building2 className="size-4 opacity-80" aria-hidden="true" />
              {project.organization}
            </span>
          </div>
        </div>
        <span className="chip-accent shrink-0">{project.role}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        {project.whatItIs}
      </p>

      {project.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
      </article>
    </Reveal>
  )
}

function Reveal(props: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return !('IntersectionObserver' in window)
  })
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '80px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return (
    <div
      ref={ref}
      className={[
        'transition duration-700 ease-out will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      ].join(' ')}
    >
      {props.children}
    </div>
  )
}

export default App
