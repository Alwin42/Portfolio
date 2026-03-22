import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  ExternalLink, Github, CheckCircle2, Clock, Lightbulb,
  Trophy, BookOpen, GraduationCap, Flame, Zap, Star
} from 'lucide-react'
import { hundredProjects, hackathonProjects, collegeProjects, projectStats } from '../data/projects'
import ShinyText  from '../components/Shiny-Text'
import ClickSpark from '../components/ClickSpark'
import CountUp    from '../components/CountUp'
import ScrollVelocity from '../components/Scroll-Velocity'
import Aurora from '../components/Aurora'
import SoftAurora from '../components/SoftAurora' 
// ── SpotlightCard ─────────────────────────────
function SpotlightCard({ children, spotlightColor = 'rgba(124,255,103,0.15)', className = '', style = {} }) {
  const cardRef = useRef(null)
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e) => {
      const r = card.getBoundingClientRect()
      card.style.setProperty('--sx', `${e.clientX - r.left}px`)
      card.style.setProperty('--sy', `${e.clientY - r.top}px`)
      card.style.setProperty('--so', '1')
    }
    const onLeave = () => card.style.setProperty('--so', '0')
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) }
  }, [])
  return (
    <div ref={cardRef} className={`relative overflow-hidden ${className}`}
      style={{ ...style, '--sc': spotlightColor, '--so': 0 }}>
      <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ opacity: 'var(--so)', background: 'radial-gradient(320px circle at var(--sx) var(--sy), var(--sc), transparent 70%)' }} />
      {children}
    </div>
  )
}

// ── Helpers ───────────────────────────────────
const tagColor = (tag) => {
  if (tag.includes('Django'))     return 'bg-[#1D3557] text-white'
  if (tag.includes('Flask'))      return 'bg-[#2A9D8F] text-white'
  if (tag.includes('Vue'))        return 'bg-[#2A9D8F] text-white'
  if (tag.includes('Tailwind'))   return 'bg-[#457B9D] text-white'
  if (tag.includes('JavaScript')) return 'bg-[#F1C40F] text-black'
  if (tag.includes('Bootstrap'))  return 'bg-[#F3722C] text-white'
  if (tag.includes('React'))      return 'bg-[#E63946] text-white'
  if (tag.includes('API'))        return 'bg-[#F9C74F] text-black'
  if (tag.includes('Next'))       return 'bg-[#5227FF] text-white'
  if (tag.includes('p5'))         return 'bg-[#B19EEF] text-black'
  if (tag.includes('GSAP'))       return 'bg-[#7cff67] text-black'
  if (tag.includes('Web3'))       return 'bg-[#E63946] text-white'
  if (tag.includes('Solidity'))   return 'bg-[#5227FF] text-white'
  if (tag.includes('Leaflet'))    return 'bg-[#2A9D8F] text-white'
  return 'bg-white/10 text-white'
}

const statusConfig = {
  completed:     { bg: 'bg-[#7cff67] text-black', label: '✓ Completed',   glow: '#7cff67' },
  'in-progress': { bg: 'bg-[#F3722C] text-white', label: '⏳ In Progress', glow: '#F3722C' },
  planned:       { bg: 'bg-[#F1C40F] text-black', label: '💡 Planned',     glow: '#F1C40F' },
}

// ── Card Buttons ──────────────────────────────
function CardButtons({ github, live }) {
  return (
    <div className="flex gap-2 mt-auto pt-4 border-t border-white/10">
      <ClickSpark sparkColor="#7cff67" sparkSize={6} sparkRadius={16} sparkCount={6}>
        <a href={github} target="_blank" rel="noreferrer"
          className="btn-brutal text-[10px] flex items-center gap-1.5 flex-1 justify-center"
          style={{ padding: '8px 12px', background: '#0f0f0f', color: '#7cff67', boxShadow: '3px 3px 0 #7cff67', border: '2px solid #7cff67' }}>
          <Github size={12} /> Code
        </a>
      </ClickSpark>
      <ClickSpark sparkColor="#B19EEF" sparkSize={6} sparkRadius={16} sparkCount={6}>
        <a href={live} target="_blank" rel="noreferrer"
          className="btn-brutal text-[10px] flex items-center gap-1.5 flex-1 justify-center"
          style={{ padding: '8px 12px', background: '#5227FF', color: '#fff', boxShadow: '3px 3px 0 #B19EEF', border: '2px solid #5227FF' }}>
          <ExternalLink size={12} /> Live
        </a>
      </ClickSpark>
    </div>
  )
}

// ── ProjectCard ───────────────────────────────
function ProjectCard({ p, i }) {
  const st = statusConfig[p.status] || statusConfig.completed
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -6, rotate: 0.5 }}
    >
      <SpotlightCard
        spotlightColor={`${st.glow}22`}
        className="border-2 border-white/10 bg-[#0a0a0a] flex flex-col h-full group cursor-default"
        style={{ boxShadow: `6px 6px 0 ${st.glow}` }}
      >
        {/* Numbered header */}
        <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
          {/* Giant watermark number */}
          <span className="absolute -right-2 -top-2 font-display text-[80px] text-black/10 select-none leading-none">
            {p.num}
          </span>
          {/* Status */}
          <span className={`tag-label text-[9px] flex items-center gap-1 w-fit mb-3 ${st.bg}`}
            style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.4)' }}>
            {st.label}
          </span>
          <ShinyText text={p.title} disabled={false} speed={5}
            className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`} />
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1 relative z-20">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map(t => (
              <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>
            ))}
          </div>
          <p className="font-body text-xs leading-relaxed text-white/50 flex-1 mb-2">{p.desc}</p>
          <CardButtons github={p.github} live={p.live} />
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── HackathonCard ─────────────────────────────
function HackathonCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -6 }}
    >
      <SpotlightCard
        spotlightColor="rgba(230,57,70,0.18)"
        className="border-2 border-white/10 bg-[#0a0a0a] flex flex-col h-full"
        style={{ boxShadow: '6px 6px 0 #E63946' }}
      >
        <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
          {/* Zap icon top-left */}
          <Zap size={48} className="absolute -left-4 -top-4 text-black/10" />
          {p.award && p.award !== '' && (
            <motion.span
              initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
              className="absolute top-3 right-3 tag-label bg-[#F1C40F] text-black text-[9px] flex items-center gap-1"
              style={{ boxShadow: '2px 2px 0 #000' }}>
              <Trophy size={9} /> {p.award}
            </motion.span>
          )}
          <p className={`font-body text-[9px] font-bold uppercase tracking-[3px] mb-2 ${p.textColor} opacity-60`}>
            ⚡ {p.event}
          </p>
          <ShinyText text={p.title} disabled={false} speed={4}
            className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`} />
        </div>
        <div className="p-5 flex flex-col flex-1 relative z-20">
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="tag-label text-[9px]"
              style={{ background: '#1D3557', color: '#fff', border: '1px solid #5227FF', boxShadow: '2px 2px 0 #5227FF' }}>
              ⏱ {p.duration}
            </span>
            <span className="tag-label text-[9px]"
              style={{ background: '#F3722C', color: '#fff', border: '1px solid #000' }}>
              👥 {p.team}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map(t => <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>)}
          </div>
          <p className="font-body text-xs leading-relaxed text-white/50 flex-1 mb-2">{p.desc}</p>
          <CardButtons github={p.github} live={p.live} />
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── CollegeCard ───────────────────────────────
function CollegeCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -6 }}
    >
      <SpotlightCard
        spotlightColor="rgba(177,158,239,0.18)"
        className="border-2 border-white/10 bg-[#0a0a0a] flex flex-col h-full"
        style={{ boxShadow: '6px 6px 0 #B19EEF' }}
      >
        <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
          <Star size={48} className="absolute -right-4 -top-4 text-black/10" />
          <span className={`tag-label text-[9px] mb-3 inline-flex items-center gap-1 w-fit
            ${p.type === 'major' ? 'bg-[#F1C40F] text-black' : 'bg-white text-black'}`}
            style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
            <GraduationCap size={9} />
            {p.type === 'major' ? '★ Major Project' : 'Mini Project'}
          </span>
          <ShinyText text={p.title} disabled={false} speed={4}
            className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`} />
          <p className={`font-body text-[9px] mt-1 ${p.textColor} opacity-50`}>{p.subtitle}</p>
        </div>
        <div className="p-5 flex flex-col flex-1 relative z-20">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="tag-label bg-[#1D3557] text-white text-[9px]">📅 {p.year}</span>
            <span className="tag-label bg-[#2A9D8F] text-white text-[9px]">👨‍🏫 {p.guide}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map(t => <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>)}
          </div>
          <p className="font-body text-xs leading-relaxed text-white/50 flex-1 mb-2">{p.desc}</p>
          <CardButtons github={p.github} live={p.live} />
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// ── Progress Bar ──────────────────────────────
function ProgressBar() {
  const pct = Math.round((projectStats.completed / projectStats.total) * 100)
  return (
    <div className="bg-black/70 border-2 border-white/20 p-6 backdrop-blur-sm"
      style={{ boxShadow: '6px 6px 0 #7cff67' }}>
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="font-display text-5xl text-white leading-none">
            <CountUp from={0} to={projectStats.completed} duration={1.5} className="font-display text-5xl text-[#7cff67]" />
          </span>
          <span className="font-display text-2xl text-white/30"> / {projectStats.total}</span>
          <p className="font-body text-[9px] text-white/30 uppercase tracking-widest mt-1">Projects Completed</p>
        </div>
        <div className="text-right">
          <span className="font-display text-5xl leading-none" style={{ color: '#7cff67', textShadow: '3px 3px 0 #5227FF' }}>
            {pct}%
          </span>
          <p className="font-body text-[9px] text-white/30 uppercase tracking-widest mt-1">Challenge Done</p>
        </div>
      </div>

      {/* Track */}
      <div className="h-6 bg-white/5 border-2 border-white/20 overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="h-full relative"
          style={{ background: 'linear-gradient(90deg, #5227FF, #7cff67)' }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 4px, transparent 4px, transparent 12px)' }} />
          {/* Glowing edge */}
          <div className="absolute right-0 top-0 bottom-0 w-2"
            style={{ background: '#7cff67', boxShadow: '0 0 12px #7cff67' }} />
        </motion.div>
      </div>

      {/* Milestone markers */}
      <div className="flex justify-between">
        {[0, 25, 50, 75, 100].map(m => (
          <div key={m} className="flex flex-col items-center gap-1">
            <div className={`w-2 h-2 border border-white/30 transition-colors duration-500
              ${pct >= m ? 'bg-[#7cff67]' : 'bg-transparent'}`} />
            <span className="font-body text-[8px] text-white/30">{m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Tabs ──────────────────────────────────────
const TABS = [
  { id: 'hundred',   label: '100 Projects', icon: <Flame size={14} />,    count: hundredProjects.length,    activeColor: 'bg-[#7cff67] text-black',  glow: '#7cff67' },
  { id: 'hackathon', label: 'Hackathons',    icon: <Zap size={14} />,      count: hackathonProjects.length,  activeColor: 'bg-[#E63946] text-white',  glow: '#E63946' },
  { id: 'college',   label: 'College',       icon: <BookOpen size={14} />, count: collegeProjects.length,    activeColor: 'bg-[#B19EEF] text-black',  glow: '#B19EEF' },
]

// ── Main ──────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('hundred')
  const activeTabData = TABS.find(t => t.id === activeTab)

  return (
    <main className="bg-black min-h-screen">

      {/* ── HEADER ─────────────────────────────── */}
      <div className="relative overflow-hidden border-b-4 border-[#7cff67]">

        {/* Aurora header background */}
        <div className="absolute inset-0 z-0">
          <SoftAurora
            colorStops={['#7cff67', '#B19EEF', '#5227FF']}
            blend={0.9}
            amplitude={2.5}
            speed={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Dot texture */}
        <div className="absolute inset-0 z-[2] opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>

            <span className="tag-label bg-black text-[#7cff67] mb-6 inline-flex items-center gap-2"
              style={{ boxShadow: '3px 3px 0 #7cff67', border: '2px solid #7cff67' }}>
              <Flame size={12} /> 100 Projects Challenge
            </span>

            <h1 className="font-display text-white leading-none mb-4"
              style={{ fontSize: 'clamp(52px, 9vw, 120px)' }}>
              ALL MY
            </h1>
            <h1 className="font-display leading-none mb-10"
              style={{ fontSize: 'clamp(52px, 9vw, 120px)', color: '#7cff67', textShadow: '6px 6px 0 #5227FF' }}>
              <ShinyText text="WORK." disabled={false} speed={3}
                className="font-display" style={{ fontSize: 'inherit', color: '#7cff67' }} />
            </h1>

            <ProgressBar />
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL VELOCITY between header and tabs */}
      <div className="bg-black border-b-2 border-white/10 overflow-hidden">
        <ScrollVelocity
          texts={['100 PROJECTS · HACKATHONS · COLLEGE PROJECTS · OPEN SOURCE · WEB3 · BLOCKCHAIN · FULL STACK · ']}
          velocity={60}
          className="font-display text-white/20 tracking-widest text-lg py-2"
        />
      </div>

      {/* ── TABS ───────────────────────────────── */}
      <div className="border-b-2 border-white/10 bg-[#050505] sticky top-[65px] z-40">
        <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-6 py-5 font-body font-bold text-xs uppercase tracking-widest border-r-2 border-white/10 whitespace-nowrap transition-all duration-200 relative group"
                style={isActive
                  ? { background: tab.glow, color: tab.id === 'hundred' ? '#000' : tab.id === 'college' ? '#000' : '#fff', boxShadow: `inset 0 -4px 0 rgba(0,0,0,0.3)` }
                  : { background: 'transparent', color: 'rgba(255,255,255,0.4)' }
                }
              >
                {tab.icon}
                {tab.label}
                <span className={`text-[9px] px-1.5 py-0.5 font-bold border`}
                  style={isActive
                    ? { borderColor: 'rgba(0,0,0,0.3)', color: 'inherit' }
                    : { borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.3)' }
                  }>
                  {tab.count}
                </span>
                {/* Active underline glow */}
                {isActive && (
                  <motion.div layoutId="tabGlow"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: '#000', boxShadow: `0 0 8px ${tab.glow}` }} />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── CONTENT ────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">

          {/* 100 Projects */}
          {activeTab === 'hundred' && (
            <motion.div key="hundred"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="font-display text-6xl text-white leading-none"
                    style={{ textShadow: '4px 4px 0 #7cff67' }}>
                    100<br />PROJECTS
                  </h2>
                  <div className="flex gap-4 mt-3">
                    {[
                      { label: `${hundredProjects.filter(p => p.status === 'completed').length} done`,      color: '#7cff67' },
                      { label: `${hundredProjects.filter(p => p.status === 'in-progress').length} active`,  color: '#F3722C' },
                      { label: `${hundredProjects.filter(p => p.status === 'planned').length} planned`,     color: '#F1C40F' },
                    ].map(s => (
                      <span key={s.label} className="font-body text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: s.color }}>{s.label}</span>
                    ))}
                  </div>
                </div>
                {/* Big number accent */}
                <span className="font-display text-[120px] leading-none text-white/5 select-none hidden md:block">
                  {hundredProjects.length}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hundredProjects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
              </div>
            </motion.div>
          )}

          {/* Hackathons */}
          {activeTab === 'hackathon' && (
            <motion.div key="hackathon"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="font-display text-6xl text-white leading-none"
                    style={{ textShadow: '4px 4px 0 #E63946' }}>
                    HACK<br />ATHONS
                  </h2>
                  <p className="font-body text-xs text-white/30 mt-3 uppercase tracking-widest">
                    ⚡ {hackathonProjects.length} hackathons · built under pressure
                  </p>
                </div>
                <span className="font-display text-[120px] leading-none text-white/5 select-none hidden md:block">
                  {hackathonProjects.length}
                </span>
              </div>
              {hackathonProjects.length === 0 ? (
                <div className="border-2 border-white/10 bg-[#0f0f0f] p-16 text-center"
                  style={{ boxShadow: '6px 6px 0 #E63946' }}>
                  <Trophy size={48} className="text-[#F1C40F] mx-auto mb-4" />
                  <p className="font-display text-4xl text-white mb-2">COMING SOON</p>
                  <p className="font-body text-xs text-white/30 mt-2">
                    Add to <code className="text-[#7cff67] border border-white/10 bg-black px-1">src/data/projects.js</code>
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hackathonProjects.map((p, i) => <HackathonCard key={p.id} p={p} i={i} />)}
                </div>
              )}
            </motion.div>
          )}

          {/* College */}
          {activeTab === 'college' && (
            <motion.div key="college"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <div className="mb-10">
                <h2 className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '4px 4px 0 #B19EEF' }}>
                  COLLEGE<br />PROJECTS
                </h2>
                <p className="font-body text-xs text-white/30 mt-3 uppercase tracking-widest">
                  🎓 B.Tech CSE · Mini & Major projects
                </p>
              </div>
              {['major', 'mini'].map(type => {
                const filtered = collegeProjects.filter(p => p.type === type)
                if (!filtered.length) return null
                return (
                  <div key={type} className="mb-14">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`tag-label flex items-center gap-1 text-sm
                        ${type === 'major' ? 'bg-[#5227FF] text-white' : 'bg-[#457B9D] text-white'}`}
                        style={{ boxShadow: '4px 4px 0 #B19EEF' }}>
                        <GraduationCap size={14} />
                        {type === 'major' ? '★ Major Project' : 'Mini Projects'}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filtered.map((p, i) => <CollegeCard key={p.id} p={p} i={i} />)}
                    </div>
                  </div>
                )
              })}
              {!collegeProjects.length && (
                <div className="border-2 border-white/10 bg-[#0f0f0f] p-16 text-center"
                  style={{ boxShadow: '6px 6px 0 #B19EEF' }}>
                  <BookOpen size={48} className="text-[#B19EEF] mx-auto mb-4" />
                  <p className="font-display text-4xl text-white mb-2">COMING SOON</p>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── CTA ────────────────────────────────── */}
      <section className="relative overflow-hidden border-t-4 border-[#5227FF] py-24 px-6 text-center">

        {/* Aurora CTA background */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={['#5227FF', '#B19EEF', '#7cff67']}
            blend={1.0}
            amplitude={3}
            speed={0.4}
          />
        </div>
        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="tag-label bg-[#5227FF] text-white mb-8 inline-block"
            style={{ boxShadow: '3px 3px 0 #7cff67' }}>
            ✦ Open for opportunities
          </span>

          <h2 className="font-display text-white leading-none mb-10"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', textShadow: '5px 5px 0 #5227FF' }}>
            GOT A PROJECT<br />
            <ShinyText text="IN MIND?" disabled={false} speed={3}
              className="font-display"
              style={{ fontSize: 'inherit', color: '#7cff67' }} />
          </h2>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <ClickSpark sparkColor="#7cff67" sparkSize={10} sparkRadius={30} sparkCount={12}>
              <a href="/contact"
                className="btn-brutal inline-flex items-center gap-3 text-sm"
                style={{ background: '#7cff67', color: '#000', boxShadow: '6px 6px 0 #5227FF', border: '3px solid #000', padding: '14px 28px' }}>
                <Zap size={16} /> Let's Build Together
              </a>
            </ClickSpark>
            <ClickSpark sparkColor="#B19EEF" sparkSize={8} sparkRadius={24} sparkCount={8}>
              <a href="https://github.com/Alwin42" target="_blank" rel="noreferrer"
                className="btn-brutal inline-flex items-center gap-3 text-sm"
                style={{ background: 'transparent', color: '#fff', boxShadow: '6px 6px 0 #B19EEF', border: '3px solid #fff', padding: '14px 28px' }}>
                <Github size={16} /> View GitHub
              </a>
            </ClickSpark>
          </div>
        </motion.div>
      </section>

    </main>
  )
}