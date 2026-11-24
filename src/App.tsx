import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { profile, skills, projects, experience, education } from "./data";

type Theme = "dark" | "light";
function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s === "dark" || s === "light") return s;
    } catch {
      /* ignore */
    }
    return matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);
  return [
    theme,
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
  ] as const;
}

// Fades content in when it scrolls into view (disabled for reduced-motion users in CSS)
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="block">
      <Reveal>
        <h2>
          <span className="num">{n}</span>
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}

function Projects() {
  const [tag, setTag] = useState("All");
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    [],
  );
  const shown = projects.filter((p) => tag === "All" || p.tags.includes(tag));
  return (
    <>
      <div
        className="chips"
        role="group"
        aria-label="Filter projects by technology"
      >
        {tags.map((t) => (
          <button
            key={t}
            className={`chip ${t === tag ? "on" : ""}`}
            aria-pressed={t === tag}
            onClick={() => setTag(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <article key={p.title} className="card project">
            <div className="cover">
              {p.image ? (
                <img
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  loading="lazy"
                />
              ) : (
                <span aria-hidden="true">{p.title.slice(0, 2)}</span>
              )}
              {p.featured && <em className="badge">Featured</em>}
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live demo ↗
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  Source code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const r = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (r.ok) {
        form.reset();
        setState("sent");
      } else setState("error");
    } catch {
      setState("error");
    }
  }
  return (
    <div className="contact">
      <a className="mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      {profile.formEndpoint && (
        <form className="form" onSubmit={send}>
          <input
            name="name"
            placeholder="Your name"
            required
            aria-label="Your name"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            aria-label="Your email"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            aria-label="Your message"
          />
          <button className="btn primary" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send message"}
          </button>
          {state === "sent" && <p className="ok">Thanks! I’ll reply soon.</p>}
          {state === "error" && (
            <p className="err">
              Something went wrong. Please email me directly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default function App() {
  const [theme, toggle] = useTheme();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <a href="#top" className="logo">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <button
            className="icon"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div>
            {profile.availability.open && (
              <p className="avail">
                <i aria-hidden="true" />
                {profile.availability.text}
              </p>
            )}
            <p className="role mono">{profile.role}</p>
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.intro}</p>
            <div className="cta">
              <a className="btn primary" href="#projects">
                See my projects
              </a>
              {profile.cv && (
                <a className="btn" href={profile.cv} download>
                  Download CV
                </a>
              )}
              <a className="btn" href="#contact">
                Contact me
              </a>
            </div>
            <ul className="stats">
              {profile.stats.map((s) => (
                <li key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="photo">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </figure>
        </section>

        <Section id="about" n="01" title="About me">
          <div className="about">
            <div className="prose">
              {profile.about.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <ul className="facts mono">
              <li>
                <b>Location</b>
                {profile.location}
              </li>
              <li>
                <b>Status</b>
                {profile.availability.text}
              </li>
            </ul>
          </div>
        </Section>
        <Section id="projects" n="02" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" n="03" title="Skills">
          <div className="grid skills">
            {skills.map((g) => (
              <div key={g.group} className="card">
                <h3 className="mono">{g.group}</h3>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section id="experience" n="04" title="Experience">
          <ol className="timeline">
            {experience.map((x) => (
              <li key={x.period}>
                <span className="when mono">{x.period}</span>
                <div>
                  <h3>
                    {x.role}{" "}
                    <small>
                      · {x.company}, {x.location}
                    </small>
                  </h3>
                  <p>{x.summary}</p>
                  <ul className="bullets">
                    {x.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="education" n="05" title="Education">
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="when mono">{e.period}</span>
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.field}</p>
                  <p>
                    <small>
                      {e.school} · {e.location}
                    </small>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="contact" n="05" title="Let’s talk">
          <p className="lead">
            I’m looking for a PFE internship. Send me a message and I’ll answer
            within 24 hours.
          </p>
          <Contact />
          <p className="social">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label} ↗
              </a>
            ))}
          </p>
        </Section>
      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
