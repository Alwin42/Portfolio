import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Globe, Database, Cpu,
  Github, Linkedin, Mail, Download, Sparkles,
  ExternalLink, ChevronDown, Briefcase, GraduationCap, Trophy ,MonitorCog ,GitBranch,
} from 'lucide-react'
import heroImg from '../assets/hero-illustration.png'

// ── React Bits imports ────────────────────────
import SplitText      from '../components/Split-Text'
import BlurText       from '../components/Blur-Text'
import ShinyText      from '../components/Shiny-Text'
import CountUp        from '../components/CountUp'
import ScrollVelocity from '../components/Scroll-Velocity'
import ClickSpark     from '../components/ClickSpark'
import Aurora         from '../components/Aurora'

// ── Replace the skills const with these 3 categories ──
const skillCategories = [
  {
    title: 'Languages',
    color: 'bg-[#5227FF]',
    shadow: '3px 3px 0 #7cff67',
    headerShadow: '3px 3px 0 #7cff67',
    skills: [
      { label: 'C',      icon: <Code2 size={14} /> },
      { label: 'C++',    icon: <Code2 size={14} /> },
      { label: 'Python', icon: <Code2 size={14} /> },
      { label: 'Java',   icon: <Code2 size={14} /> },
      { label: 'JavaScript',   icon: <Code2 size={14} /> },

    ],
    tagColors: 'bg-[#5227FF] text-white',
  },
  {
    title: 'Tech Stack',
    color: 'bg-[#E63946]',
    shadow: '3px 3px 0 #F1C40F',
    headerShadow: '3px 3px 0 #F1C40F',
    skills: [
      { label: 'HTML',         icon: <Globe size={14} /> },
      { label: 'Tailwind CSS', icon: <Sparkles size={14} /> },
      { label: 'Boostrap CSS', icon: <Sparkles size={14} /> },
      { label: 'React JS',     icon: <Code2 size={14} /> },
      { label: 'Vue JS',       icon: <Sparkles size={14} /> },
      { label: 'Django',       icon: <MonitorCog size={14} /> },
      { label: 'Flask',        icon: <MonitorCog size={14} /> },
      { label: 'Fast API',     icon: <MonitorCog size={14} /> },
      { label: 'REST APIs',    icon: <Globe size={14} /> },
      { label: 'PostgreSQL',   icon: <Database size={14} /> },
      { label: 'SQLite3',      icon: <Database size={14} /> },
      { label: 'Blockchain',   icon: <Cpu size={14} /> },
    ],
    tagColors: [
      'bg-[#E63946] text-white',
      'bg-[#F1C40F] text-black',
      'bg-[#2A9D8F] text-white',
      'bg-[#F3722C] text-white',
      'bg-[#1D3557] text-white',
    ],
  },
  {
    title: 'Tools',
    color: 'bg-[#2A9D8F]',
    shadow: '3px 3px 0 #B19EEF',
    headerShadow: '3px 3px 0 #B19EEF',
    skills: [
      { label: 'GitHub',  icon: <Github size={14} /> },
      { label: 'Git',     icon: <GitBranch size={14} /> },
      { label: 'VS code', icon: <Code2 size={14} /> },
      { label: 'Vercel',  icon: <Globe size={14} /> },
      { label: 'Render',  icon: <Globe size={14} /> },
      { label: 'Neon',    icon: <Globe size={14} /> },
    ],
    tagColors: 'bg-[#2A9D8F] text-white',
  },
]

const socials = [
  { icon: <Github size={18} />,   href: 'https://github.com',   label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Mail size={18} />,     href: 'mailto:alwin@dev.com', label: 'Email' },
]

const experience = [
  {
    year: '2025',
    role: 'Frontend Developer',
    company: 'AISAT College Web Team',
    color: 'bg-[#E63946]',
    icon: <Code2 size={16} className="text-white" />,
  },
  {
    year: '2024',
    role: 'Graphic Designer',
    company: 'Heptarc Technology Solution Pvt. Ltd.',
    color: 'bg-[#F1C40F]',
    icon: <Briefcase size={16} className="text-black" />,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function Home() {
  return (
    <main className="bg-black">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[calc(100vh-65px)]">

        {/* LEFT — Red panel */}
        <div className="bg-[#E63946] flex flex-col justify-center px-10 md:px-16 py-20 border-r-2 border-black relative overflow-hidden">
          {/* Dot texture */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          {/* Diagonal stripe accent */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 16px)' }} />

          {/* ShinyText badge */}
          <motion.div {...fadeUp(0)} className="mb-6 relative">
            <span className="tag-label bg-black text-[#F1C40F] flex items-center gap-2 w-fit"
              style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.5)' }}>
              <span className="w-2 h-2 rounded-full bg-[#7cff67] inline-block animate-pulse" />
              <ShinyText
                text="✦ Full Stack Developer"
                disabled={false}
                speed={3}
                className="text-[#F1C40F] font-bold text-xs uppercase tracking-widest"
              />
            </span>
          </motion.div>

          {/* SplitText hero name */}
          <div className="mb-6 relative" style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}>
            <SplitText
              text="HY I'M"
              className="font-display text-white leading-[0.9] block"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,60px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
            />
            <SplitText
              text="ALWIN"
              className="font-display leading-[0.9] block"
              style={{ color: '#F1C40F', textShadow: '4px 4px 0 #000' }}
              delay={80}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,60px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
            />
            <SplitText
              text="EMMANUEL"
              className="font-display text-white leading-[0.9] block"
              delay={60}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,60px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
            />
          </div>

          {/* BlurText tagline */}
          <div className="mb-4 max-w-sm border-l-4 border-white/30 pl-4">
            <BlurText
              text="Building innovative Websites, dApps, and responsive UIs with Django, React, Vue and blockchain tech."
              delay={80}
              animateBy="words"
              direction="top"
              className="text-white/90 text-sm leading-relaxed font-body"
            />
          </div>

          <motion.p {...fadeUp(0.3)} className="text-white text-sm font-bold mb-8 relative">
            Let's turn ideas into{' '}
            <span className="text-[#F1C40F] underline decoration-2">code.</span>
          </motion.p>

          {/* ClickSpark buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-8 relative">
            <Link to="/projects">
              <ClickSpark sparkColor="#F1C40F" sparkSize={8} sparkRadius={20} sparkCount={8}>
                <button className="btn-brutal bg-[#F1C40F] text-black flex items-center gap-2">
                  View Work <ArrowRight size={16} />
                </button>
              </ClickSpark>
            </Link>
            <Link to="/contact">
              <ClickSpark sparkColor="#7cff67" sparkSize={8} sparkRadius={20} sparkCount={8}>
                <button className="btn-brutal bg-white text-black flex items-center gap-2">
                  Hire Me <ExternalLink size={14} />
                </button>
              </ClickSpark>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-3 relative">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                className="w-10 h-10 bg-white/10 border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#E63946] transition-all duration-150"
                style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
                {s.icon}
              </a>
            ))}
            <a href="/resume.pdf" download
              className="btn-brutal bg-transparent text-white border-white text-xs flex items-center gap-1.5 ml-2"
              style={{ boxShadow: '3px 3px 0 rgba(255,255,255,0.4)', padding: '8px 14px' }}>
              <Download size={13} /> Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
            <span className="text-[9px] uppercase tracking-widest font-bold">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </motion.div>
        </div>

        {/* RIGHT — Yellow panel */}
        <div className="bg-[#F1C40F] relative flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {['absolute top-8 left-8 text-5xl text-black/20', 'absolute top-16 right-12 text-3xl text-black/15',
            'absolute bottom-28 left-10 text-4xl text-black/20', 'absolute bottom-8 right-8 text-2xl text-black/15',
          ].map((cls, i) => <span key={i} className={`${cls} font-display select-none`}>✦</span>)}

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="absolute top-8 right-8 bg-[#E63946] border-2 border-black flex flex-col items-center justify-center w-16 h-16 z-10"
            style={{ boxShadow: '4px 4px 0 #000' }}>
            <span className="font-display text-white text-2xl leading-none">10+</span>
            <span className="text-white/80 text-[8px] font-bold tracking-wider uppercase">Projects</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.3 }} className="relative z-10">
            <div className="border-4 border-black bg-white p-2" style={{ boxShadow: '8px 8px 0 #000' }}>
              <img src={heroImg} alt="Developer illustration"
                className="w-72 md:w-80 object-contain block"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="w-72 md:w-80 h-64 bg-[#1D3557] hidden items-center justify-center flex-col gap-3">
                <Code2 size={48} className="text-[#F1C40F]" />
                <span className="font-display text-white text-xl tracking-widest">FULL STACK</span>
              </div>
            </div>
          </motion.div>

          {[
            { label: 'React',  color: 'bg-[#1D3557] text-white', pos: 'absolute bottom-20 left-6',  delay: 0.8 },
            { label: 'Django', color: 'bg-[#2A9D8F] text-white', pos: 'absolute top-24 left-4',     delay: 0.9 },
            { label: 'Web3',   color: 'bg-[#E63946] text-white', pos: 'absolute bottom-8 left-24',  delay: 1.0 },
          ].map((b) => (
            <motion.span key={b.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: b.delay }}
              className={`${b.pos} ${b.color} tag-label z-20`}
              style={{ boxShadow: '3px 3px 0 #000' }}>
              {b.label}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── SCROLL VELOCITY MARQUEE ───────────────── */}
      <div className="bg-black border-y-2 border-[#7cff67]/30 overflow-hidden">
        <ScrollVelocity
          texts={['HTML · TAILWIND CSS · DJANGO · FLASK · BLOCKCHAIN · REACT · VUE · REST APIs · POSTGRESQL']}
          velocity={80}
          className="font-display text-[#F1C40F] tracking-widest text-xl py-3"
        />
      </div>

      {/* ── SKILLS STRIP ─────────────────────────── */}
<section className="px-6 py-20 bg-black relative overflow-hidden">

  {/* Subtle aurora behind skills */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <Aurora
      colorStops={['#7cff67', '#B19EEF', '#5227FF']}
      blend={0.5}
      amplitude={1.5}
      speed={0.3}
    />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Section header */}
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} className="text-center mb-16">
      <span className="tag-label bg-[#E63946] text-white mb-4 inline-block"
        style={{ boxShadow: '3px 3px 0 #7cff67' }}>✦ Tech Stack</span>
      <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-none mt-3">
        TOOLS I{' '}
        <span style={{ color: '#7cff67', textShadow: '2px 2px 0 #5227FF' }}>WORK</span>
        {' '}WITH
      </h2>
    </motion.div>

    {/* 3 category columns */}
    <div className="grid md:grid-cols-3 gap-8">
      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.15 }}
          className="border-2 border-white/10 bg-black/50 backdrop-blur-md"
          style={{ boxShadow: cat.shadow }}
        >
          {/* Category header */}
          <div className={`${cat.color} border-b-2 border-black px-4 py-3 flex items-center gap-2`}
            style={{ boxShadow: cat.headerShadow }}>
            <span className="font-display text-white text-2xl tracking-wider">{cat.title}</span>
            <span className="ml-auto font-body text-[10px] font-bold text-white/60 uppercase tracking-widest">
              {cat.skills.length} items
            </span>
          </div>

          {/* Skills */}
          <div className="p-4 flex flex-wrap gap-2">
            {cat.skills.map((s, i) => {
              const colorClass = Array.isArray(cat.tagColors)
                ? cat.tagColors[i % cat.tagColors.length]
                : cat.tagColors
              return (
                <motion.span
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + i * 0.05 }}
                  whileHover={{ y: -3, rotate: -1 }}
                  className={`tag-label flex items-center gap-1.5 cursor-default select-none ${colorClass}`}
                  style={{ boxShadow: '2px 2px 0 #000' }}
                >
                  {s.icon} {s.label}
                </motion.span>
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ── ABOUT DIVIDER ────────────────────────── */}
      <div className="bg-black border-y-2 border-[#5227FF]/40 overflow-hidden">
        <ScrollVelocity
          texts={['ABOUT ME · WHO I AM · MY STORY · BACKGROUND · ALWIN EMMANUEL']}
          velocity={-60}
          className="font-display text-[#B19EEF] tracking-widest text-xl py-3"
        />
      </div>

      {/* ── ABOUT SECTION ────────────────────────── */}
      <section className="relative bg-black" id="about">

        {/* Aurora — your new colors */}
        <div className="absolute inset-0 z-0 opacity-90">
          <Aurora
            colorStops={['#7cff67', '#B19EEF', '#5227FF']}
            blend={0.9}
            amplitude={2.8}
            speed={0.5}
          />
        </div>

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 z-[1] bg-black/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

          {/* About header */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-16">
            <span className="tag-label bg-[#5227FF] text-white mb-4 inline-block"
              style={{ boxShadow: '3px 3px 0 #7cff67' }}>✦ About Me</span>
            <h2 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-white"
              style={{ textShadow: '3px 3px 0 #000' }}>
              BUILDING THE<br />
              <span style={{ color: '#7cff67', textShadow: '4px 4px 0 #5227FF' }}>WEB'S</span> FUTURE
            </h2>
          </motion.div>

          {/* Bio + Stats */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">

            {/* Bio */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="flex flex-col gap-5">
              {[
                { text: "I'm Alwin Emmanuel, a beginner level Full Stack Developer specializing in building fast, accessible, and brutally honest web experiences. I work across the entire stack — from pixel-perfect UIs to scalable backend systems.", border: 'border-[#7cff67]' },
                { text: "My expertise spans React, Flask, Django, and blockchain technology. I have a passion for crafting seamless user experiences and writing clean, efficient code.", border: 'border-[#B19EEF]' },
                { text: "Based in India. Always open to exciting opportunities, internships and challenging problems worth solving.", border: 'border-[#5227FF]' },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.border} pl-4 bg-black/50 backdrop-blur-md p-3 border border-white/10`}>
                  <p className="font-body text-sm leading-relaxed text-white/80">{item.text}</p>
                </div>
              ))}
              <div className="mt-2">
                <Link to="/about">
                  <ClickSpark sparkColor="#7cff67" sparkSize={8} sparkRadius={20} sparkCount={8}>
                    <button className="btn-brutal bg-[#7cff67] text-black flex items-center gap-2"
                      style={{ boxShadow: '4px 4px 0 #5227FF' }}>
                      Full Story <ArrowRight size={16} />
                    </button>
                  </ClickSpark>
                </Link>
              </div>
            </motion.div>

            {/* Stats with CountUp */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-4">
              {[
                { from: 0, to: 10, suffix: '+', label: 'Projects Built',      icon: <Code2 size={20} />,        color: 'bg-[#E63946]',  text: 'text-white', isNum: true },
                { display: 'B.Tech',             label: 'Computer Science',    icon: <GraduationCap size={20}/>, color: 'bg-[#F1C40F]',  text: 'text-black', isNum: false },
                { from: 0, to: 10, suffix: '+', label: 'Hackathons Attended', icon: <Trophy size={20} />,       color: 'bg-[#5227FF]',  text: 'text-white', isNum: true },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ x: 4 }}
                  className={`${s.color} ${s.text} border-2 border-black flex items-center gap-5 p-5`}
                  style={{ boxShadow: i === 2 ? '5px 5px 0 #7cff67' : '5px 5px 0 #000' }}>
                  <div className="opacity-60">{s.icon}</div>
                  <div>
                    <span className="font-display text-3xl leading-none block">
                      {s.isNum ? (
                        <CountUp from={s.from} to={s.to} suffix={s.suffix} duration={2} className="font-display text-3xl" />
                      ) : s.display}
                    </span>
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest opacity-70">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h3 className="font-display text-5xl tracking-wider text-white mb-8"
              style={{ textShadow: '2px 2px 0 #5227FF' }}>EXPERIENCE</h3>
            <div className="flex flex-col gap-4">
              {experience.map((e, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="border-2 border-white/20 bg-black/60 backdrop-blur-md flex items-center gap-6 p-5 group transition-all duration-150"
                  style={{ boxShadow: '5px 5px 0 #5227FF' }}>
                  <div className={`${e.color} border-2 border-black w-16 h-16 flex flex-col items-center justify-center flex-shrink-0`}
                    style={{ boxShadow: '3px 3px 0 #7cff67' }}>
                    {e.icon}
                    <span className={`font-display text-base leading-tight mt-1 ${e.color.includes('F1C40F') ? 'text-black' : 'text-white'}`}>
                      {e.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-bold text-sm text-white">{e.role}</p>
                    <p className="font-body text-xs text-white/50 mt-1">{e.company}</p>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────── */}
      <section className="border-t-2 border-b-2 border-[#5227FF]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { from: 0, to: 15, suffix: '+', label: 'Projects',   color: 'bg-[#E63946]',  text: 'text-white', isNum: true },
            { display: 'B.Tech',             label: 'Degree',     color: 'bg-[#F1C40F]',  text: 'text-black', isNum: false },
            { from: 0, to: 10, suffix: '+', label: 'Hackathons', color: 'bg-[#5227FF]',  text: 'text-white', isNum: true },
            { display: '∞',                  label: 'Curiosity',  color: 'bg-[#7cff67]',  text: 'text-black', isNum: false },
          ].map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`${s.color} ${s.text} flex flex-col items-center justify-center py-10 border-r-2 last:border-r-0 border-black`}>
              <span className="font-display text-5xl leading-none">
                {s.isNum ? (
                  <CountUp from={s.from} to={s.to} suffix={s.suffix} duration={2} className="font-display text-5xl" />
                ) : s.display}
              </span>
              <span className="font-body text-[10px] font-bold uppercase tracking-widest mt-2 opacity-70">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}