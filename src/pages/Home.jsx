import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Globe, Database, Cpu,
  Github, Linkedin, Mail, Download, Sparkles,
  ExternalLink, ChevronDown, Briefcase, GraduationCap, Trophy ,MonitorCog ,GitBranch,
} from 'lucide-react'
import heroImg from '../assets/hero-illustration.png'
import codeImg    from '../assets/code.png'
import code2Img   from '../assets/code2.png'
import meetingImg from '../assets/meeting.png'
import scaleImg   from '../assets/scale.png'
import scriptsImg from '../assets/scripts.png'
import webImg     from '../assets/web.png'
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
  { icon: <Github size={18} />,   href: 'https://github.com/Alwin42',   label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/alwin-emmanuel-sebastian/', label: 'LinkedIn' },
  { icon: <Mail size={18} />,     href: 'mailto:alwinemmanuel424@gmail.com', label: 'Email' },
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
        <div className="bg-[#8A2BE2] flex flex-col justify-center px-10 md:px-16 py-20 border-r-2 border-black relative overflow-hidden">
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

        {/* RIGHT — panel */}
        {/* RIGHT — panel */}
<div className="bg-[#00BFFF] relative flex items-center justify-center overflow-hidden min-h-[500px] md:min-h-[calc(100vh-65px)]">

  {/* Grid background */}
  <div className="absolute inset-0 opacity-10"
    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

  {/* Dot texture */}
  <div className="absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

  {/* ── 10+ badge — always visible ── */}
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: -5 }}
    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
    className="absolute top-4 right-4 bg-[#E63946] border-2 border-black flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 z-30"
    style={{ boxShadow: '4px 4px 0 #000' }}>
    <span className="font-display text-white text-xl md:text-2xl leading-none">10+</span>
    <span className="text-white/80 text-[7px] md:text-[8px] font-bold tracking-wider uppercase">Projects</span>
  </motion.div>

  {/* ══════════════════════════════════════
      MOBILE — clean 3-column image grid
      Hidden on md+ screens
      ══════════════════════════════════════ */}
  <div className="md:hidden w-full px-6 py-12">
    <div className="grid grid-cols-3 gap-3 mb-4">
      {[
        { src: meetingImg, label: 'Collab',  rot: '-3deg' },
        { src: codeImg,    label: 'Code',    rot: '2deg'  },
        { src: scriptsImg, label: 'Scripts', rot: '-2deg' },
      ].map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          style={{ transform: `rotate(${img.rot})` }}
        >
          <img src={img.src} alt={img.label}
            className="w-full object-contain drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]" />
        </motion.div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { src: webImg,   label: 'Web',   rot: '3deg'  },
        { src: code2Img, label: 'Build', rot: '-2deg' },
        { src: scaleImg, label: 'Scale', rot: '2deg'  },
      ].map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          style={{ transform: `rotate(${img.rot})` }}
        >
          <img src={img.src} alt={img.label}
            className="w-full object-contain drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]" />
        </motion.div>
      ))}
    </div>

    {/* Mobile tech badges */}
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      {[
        { label: '⚛ React',  style: { background: '#1D3557', color: '#fff' } },
        { label: '🐍 Django', style: { background: '#2A9D8F', color: '#fff' } },
        { label: '⛓ Web3',   style: { background: '#E63946', color: '#fff' } },
        { label: '🚀 Flask',  style: { background: '#5227FF', color: '#fff' } },
      ].map((b, i) => (
        <motion.span
          key={b.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.08, type: 'spring' }}
          className="tag-label text-[9px]"
          style={{ boxShadow: '2px 2px 0 #000', ...b.style }}>
          {b.label}
        </motion.span>
      ))}
    </div>
  </div>

  {/* ══════════════════════════════════════
      DESKTOP — floating collage
      Hidden on mobile, shown on md+
      ══════════════════════════════════════ */}
  <div className="hidden md:block w-full h-full relative" style={{ minHeight: '500px' }}>

    {/* ✦ Animated stars */}
    {[
      { pos: 'top-5 left-8',     size: 'text-4xl', dur: 3.2, delay: 0 },
      { pos: 'top-12 right-6',   size: 'text-2xl', dur: 4.1, delay: 0.5 },
      { pos: 'bottom-16 left-5', size: 'text-3xl', dur: 3.8, delay: 1 },
      { pos: 'bottom-5 right-12',size: 'text-xl',  dur: 5.0, delay: 1.5 },
    ].map((s, i) => (
      <motion.span key={i}
        className={`absolute ${s.pos} ${s.size} font-display text-black/20 select-none z-[1]`}
        animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
        transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}>
        ✦
      </motion.span>
    ))}

    {/* 1. code.png — top left */}
    <motion.div
      initial={{ opacity: 0, x: -60, y: -40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
      className="absolute top-12 left-4 z-20"
      style={{ rotate: '-8deg' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-8, -5, -8] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={codeImg} alt="Code"
          className="w-32 lg:w-36 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* 2. scripts.png — top right */}
    <motion.div
      initial={{ opacity: 0, x: 60, y: -40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45, type: 'spring', stiffness: 100 }}
      className="absolute top-10 right-20 z-20"
      style={{ rotate: '7deg' }}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [7, 9, 7] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <img src={scriptsImg} alt="Scripts"
          className="w-28 lg:w-32 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* 3. code2.png — top centre */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55, type: 'spring', stiffness: 100 }}
      className="absolute top-4 left-1/2 -translate-x-8 z-[8]"
      style={{ rotate: '4deg' }}
    >
      <motion.div
        animate={{ y: [0, -7, 0], rotate: [4, 2, 4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <img src={code2Img} alt="Code2"
          className="w-24 lg:w-28 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* 4. web.png — mid left */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 100 }}
      className="absolute left-2 top-1/2 -translate-y-16 z-[6]"
      style={{ rotate: '-5deg' }}
    >
      <motion.div
        animate={{ y: [0, -9, 0], rotate: [-5, -3, -5] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        <img src={webImg} alt="Web"
          className="w-28 lg:w-32 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* 5. CENTRE — meeting.png — biggest */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 80 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ rotate: '-2deg' }}
    >
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, -1, -2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={meetingImg} alt="Developer"
          className="w-56 lg:w-72 object-contain drop-shadow-[8px_8px_0px_rgba(0,0,0,0.6)]" />
      </motion.div>
    </motion.div>

    {/* 6. heroImg — bottom left */}
    <motion.div
      initial={{ opacity: 0, x: -40, y: 60 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 100 }}
      className="absolute bottom-8 left-4 z-20"
      style={{ rotate: '6deg' }}
    >
      <motion.div
        animate={{ y: [0, -11, 0], rotate: [6, 4, 6] }}
        transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
      >
        <img src={heroImg} alt="Hero"
          className="w-28 lg:w-36 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* 7. scale.png — bottom right */}
    <motion.div
      initial={{ opacity: 0, x: 40, y: 60 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 100 }}
      className="absolute bottom-6 right-3 z-20"
      style={{ rotate: '-7deg' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-7, -5, -7] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      >
        <img src={scaleImg} alt="Scale"
          className="w-28 lg:w-32 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>

    {/* SVG dashed connecting lines */}
    <svg className="absolute inset-0 w-full h-full z-[2] pointer-events-none" style={{ opacity: 0.07 }}>
      <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="80%" y1="75%" x2="50%" y2="50%" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>

    {/* Tech badges */}
    {[
      { label: '⚛ React',  style: { background: '#1D3557', color: '#fff' }, pos: 'bottom-28 right-3',  delay: 1.0 },
      { label: '🐍 Django', style: { background: '#2A9D8F', color: '#fff' }, pos: 'top-40 right-3',     delay: 1.1 },
      { label: '⛓ Web3',   style: { background: '#E63946', color: '#fff' }, pos: 'bottom-24 left-32',  delay: 1.2 },
      { label: '🚀 Flask',  style: { background: '#5227FF', color: '#fff' }, pos: 'top-1/2 right-2',    delay: 1.3 },
    ].map((b) => (
      <motion.span key={b.label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: b.delay, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -3 }}
        className={`absolute ${b.pos} tag-label z-30 text-[9px] cursor-default`}
        style={{ boxShadow: '3px 3px 0 #000', ...b.style }}>
        {b.label}
      </motion.span>
    ))}
  </div>

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