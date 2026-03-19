import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Globe, Database, Cpu,
  Github, Linkedin, Mail, Download, Sparkles,
  ExternalLink, ChevronDown, Briefcase, GraduationCap, Trophy
} from 'lucide-react'
import heroImg from '../assets/hero-illustration.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const skills = [
  { label: 'HTML',         icon: <Code2 size={14} /> },
  { label: 'Tailwind CSS', icon: <Sparkles size={14} /> },
  { label: 'Django',       icon: <Globe size={14} /> },
  { label: 'Flask',        icon: <Database size={14} /> },
  { label: 'Blockchain',   icon: <Cpu size={14} /> },
  { label: 'React',        icon: <Code2 size={14} /> },
  { label: 'Vue',          icon: <Sparkles size={14} /> },
  { label: 'PostgreSQL',   icon: <Database size={14} /> },
  { label: 'REST APIs',    icon: <Globe size={14} /> },
]

const socials = [
  { icon: <Github size={18} />,   href: 'https://github.com',   label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Mail size={18} />,     href: 'mailto:alwin@dev.com', label: 'Email' },
]

const marqueeItems = [
  'HTML', 'TAILWIND CSS', 'DJANGO', 'FLASK',
  'BLOCKCHAIN', 'REACT', 'VUE', 'REST APIs', 'POSTGRESQL',
]

const stats = [
  { num: '10+',    label: 'Projects Built',        icon: <Code2 size={20} />,       color: 'bg-[#E63946]', text: 'text-white' },
  { num: 'B.Tech', label: 'Computer Science',       icon: <GraduationCap size={20}/>, color: 'bg-[#F1C40F]', text: 'text-black' },
  { num: '10+',    label: 'Hackathons Attended',    icon: <Trophy size={20} />,       color: 'bg-[#2A9D8F]', text: 'text-white' },
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

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[calc(100vh-65px)]">

        {/* LEFT — Red panel */}
        <div className="bg-[#E63946] flex flex-col justify-center px-10 md:px-16 py-20 border-r-2 border-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          <motion.div {...fadeUp(0)} className="mb-6 relative">
            <span className="tag-label bg-black text-[#F1C40F] flex items-center gap-2 w-fit"
              style={{ boxShadow: '3px 3px 0 #000' }}>
              <span className="w-2 h-2 rounded-full bg-[#2A9D8F] inline-block animate-pulse" />
              ✦ Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)}
            className="font-display text-white leading-[0.9] mb-6 relative"
            style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}>
            HY I'M<br />
            <span className="text-[#F1C40F] [text-shadow:4px_4px_0_#000]">ALWIN</span><br />
            EMMANUEL
          </motion.h1>

          <motion.p {...fadeUp(0.2)}
            className="text-white/90 text-sm leading-relaxed mb-4 max-w-sm relative border-l-4 border-white/30 pl-4">
            Building innovative Websites, dApps, and responsive UIs with Django, React, Vue and blockchain tech.
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="text-white text-sm font-bold mb-8 relative">
            Let's turn ideas into{' '}
            <span className="text-[#F1C40F] underline decoration-2">code.</span>
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-8 relative">
            <Link to="/projects">
              <button className="btn-brutal bg-[#F1C40F] text-black flex items-center gap-2">
                View Work <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-brutal bg-white text-black flex items-center gap-2">
                Hire Me <ExternalLink size={14} />
              </button>
            </Link>
          </motion.div>

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

      {/* ── MARQUEE ──────────────────────────────── */}
      <div className="bg-black text-[#F1C40F] border-y-2 border-black py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-display tracking-widest text-xl">
              {marqueeItems.map(item => <span key={item} className="mx-6">✦ {item}</span>)}
            </span>
          ))}
        </div>
      </div>

      {/* ── SKILLS STRIP ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12">
          <span className="tag-label bg-[#E63946] text-white mb-4 inline-block"
            style={{ boxShadow: '3px 3px 0 #000' }}>✦ Tech Stack</span>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-[#1D3557] leading-none mt-3">
            TOOLS I WORK WITH
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s, i) => (
            <motion.span key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, rotate: -1 }}
              className={`tag-label flex items-center gap-2 cursor-default select-none
                ${i % 5 === 0 ? 'bg-[#E63946] text-white' :
                  i % 5 === 1 ? 'bg-[#F1C40F] text-black' :
                  i % 5 === 2 ? 'bg-[#2A9D8F] text-white' :
                  i % 5 === 3 ? 'bg-[#1D3557] text-white' :
                                'bg-[#F3722C] text-white'}`}
              style={{ boxShadow: '3px 3px 0 #000' }}>
              {s.icon} {s.label}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* ── ABOUT SECTION (inline) ───────────────── */}
      {/* ══════════════════════════════════════════ */}

      {/* Section divider */}
      <div className="bg-black text-[#F1C40F] border-y-2 border-black py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_25s_linear_infinite_reverse]">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display tracking-widest text-xl">
              {['ABOUT ME', 'WHO I AM', 'MY STORY', 'BACKGROUND'].map(t => (
                <span key={t} className="mx-8">✦ {t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20" id="#about">

        {/* About header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <span className="tag-label bg-[#E63946] text-white mb-4 inline-block"
            style={{ boxShadow: '3px 3px 0 #000' }}>✦ About Me</span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-[#1D3557]">
            BUILDING THE<br />
            <span className="text-[#E63946]">WEB'S</span> FUTURE
          </h2>
        </motion.div>

        {/* Bio + Stats grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex flex-col gap-5">
            <p className="font-body text-sm leading-relaxed text-[#1D3557]/80 border-l-4 border-[#E63946] pl-4">
              I'm Alwin Emmanuel, a beginner level Full Stack Developer specializing in building fast, accessible, and brutally honest web experiences. I work across the entire stack — from pixel-perfect UIs to scalable backend systems.
            </p>
            <p className="font-body text-sm leading-relaxed text-[#1D3557]/80 border-l-4 border-[#F1C40F] pl-4">
              My expertise spans React, Flask, Django, and blockchain technology. I have a passion for crafting seamless user experiences and writing clean, efficient code.
            </p>
            <p className="font-body text-sm leading-relaxed text-[#1D3557]/80 border-l-4 border-[#2A9D8F] pl-4">
              Based in India. Always open to exciting opportunities, internships and challenging problems worth solving.
            </p>

            <div className="mt-4">
              <Link to="/about">
                <button className="btn-brutal bg-[#E63946] text-white flex items-center gap-2">
                  Full Story <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <motion.div key={i}
                whileHover={{ x: 4 }}
                className={`${s.color} ${s.text} border-2 border-black flex items-center gap-5 p-5`}
                style={{ boxShadow: '5px 5px 0 #000' }}>
                <div className="opacity-60">{s.icon}</div>
                <div>
                  <span className="font-display text-3xl leading-none block">{s.num}</span>
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest opacity-70">{s.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h3 className="font-display text-5xl tracking-wider text-[#1D3557] mb-8">EXPERIENCE</h3>
          <div className="flex flex-col gap-4">
            {experience.map((e, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="border-2 border-black bg-white flex items-center gap-6 p-5 group transition-all duration-150"
                style={{ boxShadow: '5px 5px 0 #000' }}>

                {/* Year badge */}
                <div className={`${e.color} border-2 border-black w-16 h-16 flex flex-col items-center justify-center flex-shrink-0`}
                  style={{ boxShadow: '3px 3px 0 #000' }}>
                  {e.icon}
                  <span className={`font-display text-base leading-tight mt-1 ${e.color.includes('F1C40F') ? 'text-black' : 'text-white'}`}>
                    {e.year}
                  </span>
                </div>

                {/* Role info */}
                <div className="flex-1">
                  <p className="font-body font-bold text-sm text-[#1D3557]">{e.role}</p>
                  <p className="font-body text-xs text-[#1D3557]/60 mt-1">{e.company}</p>
                </div>

                {/* Arrow on hover */}
                <ArrowRight size={18} className="text-[#1D3557]/20 group-hover:text-[#E63946] transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ──────────────────────────── */}
      <section className="border-t-2 border-b-2 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '10+',    label: 'Projects',    color: 'bg-[#E63946]', text: 'text-white' },
            { num: 'B.Tech', label: 'Degree',      color: 'bg-[#F1C40F]', text: 'text-black' },
            { num: '10+',    label: 'Hackathons',  color: 'bg-[#2A9D8F]', text: 'text-white' },
            { num: '∞',      label: 'Curiosity',   color: 'bg-[#1D3557]', text: 'text-white' },
          ].map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`${s.color} ${s.text} flex flex-col items-center justify-center py-10 border-r-2 last:border-r-0 border-black`}>
              <span className="font-display text-5xl leading-none">{s.num}</span>
              <span className="font-body text-[10px] font-bold uppercase tracking-widest mt-2 opacity-70">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}