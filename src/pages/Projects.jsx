import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, CheckCircle2, Clock, Lightbulb, Trophy, BookOpen, GraduationCap, Flame } from 'lucide-react'
import { hundredProjects, hackathonProjects, collegeProjects, projectStats } from '../data/projects'

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
  return 'bg-white text-black'
}

const statusIcon = {
  completed:   <CheckCircle2 size={10} className="text-[#2A9D8F]" />,
  'in-progress': <Clock size={10} className="text-[#F3722C]" />,
  planned:     <Lightbulb size={10} className="text-[#F1C40F]" />,
}

const statusBg = {
  completed:   'bg-[#2A9D8F] text-white',
  'in-progress': 'bg-[#F3722C] text-white',
  planned:     'bg-[#F1C40F] text-black',
}

// ── Sub-components ────────────────────────────

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      whileHover={{ y: -5 }}
      className="border-2 border-black bg-white flex flex-col group transition-all duration-150"
      style={{ boxShadow: '6px 6px 0 #000' }}
    >
      <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
        <span className="absolute right-3 top-0 font-display text-6xl text-black/10 select-none leading-none">
          {p.num}
        </span>
        <span className={`tag-label text-[9px] flex items-center gap-1 w-fit mb-3 ${statusBg[p.status]}`}
          style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
          {statusIcon[p.status]}
          {p.status === 'in-progress' ? 'In Progress' : p.status.charAt(0).toUpperCase() + p.status.slice(1)}
        </span>
        <h2 className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`}
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}>
          {p.title}
        </h2>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>
          ))}
        </div>
        <p className="font-body text-xs leading-relaxed text-[#1D3557]/70 flex-1 mb-5">{p.desc}</p>
        <div className="flex gap-2 mt-auto">
          <a href={p.github} target="_blank" rel="noreferrer"
            className="btn-brutal bg-black text-[#F1C40F] text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <Github size={12} /> GitHub
          </a>
          <a href={p.live} target="_blank" rel="noreferrer"
            className="btn-brutal bg-white text-black text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <ExternalLink size={12} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function HackathonCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -5 }}
      className="border-2 border-black bg-white flex flex-col"
      style={{ boxShadow: '6px 6px 0 #000' }}
    >
      <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
        {p.award && (
          <span className="absolute top-3 right-3 tag-label bg-[#F1C40F] text-black text-[9px] flex items-center gap-1"
            style={{ boxShadow: '2px 2px 0 #000' }}>
            <Trophy size={9} /> {p.award}
          </span>
        )}
        <p className={`font-body text-[9px] font-bold uppercase tracking-widest mb-2 ${p.textColor} opacity-70`}>
          {p.event}
        </p>
        <h2 className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`}>
          {p.title}
        </h2>
      </div>
      <div className="p-5 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex gap-3 mb-4">
          <span className="tag-label bg-[#1D3557] text-white text-[9px]">⏱ {p.duration}</span>
          <span className="tag-label bg-[#F3722C] text-white text-[9px]">👥 {p.team}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>
          ))}
        </div>
        <p className="font-body text-xs leading-relaxed text-[#1D3557]/70 flex-1 mb-5">{p.desc}</p>
        <div className="flex gap-2 mt-auto">
          <a href={p.github} target="_blank" rel="noreferrer"
            className="btn-brutal bg-black text-[#F1C40F] text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <Github size={12} /> GitHub
          </a>
          <a href={p.live} target="_blank" rel="noreferrer"
            className="btn-brutal bg-white text-black text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <ExternalLink size={12} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CollegeCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -5 }}
      className="border-2 border-black bg-white flex flex-col"
      style={{ boxShadow: '6px 6px 0 #000' }}
    >
      <div className={`${p.color} border-b-2 border-black p-5 relative overflow-hidden`}>
        <span className={`tag-label text-[9px] mb-3 inline-flex items-center gap-1 w-fit
          ${p.type === 'major' ? 'bg-[#F1C40F] text-black' : 'bg-white text-black'}`}
          style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
          <GraduationCap size={9} />
          {p.type === 'major' ? 'Major Project' : 'Mini Project'}
        </span>
        <h2 className={`font-display text-3xl tracking-wider leading-none ${p.textColor}`}>
          {p.title}
        </h2>
        <p className={`font-body text-[9px] mt-1 ${p.textColor} opacity-60`}>{p.subtitle}</p>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex gap-2 mb-4">
          <span className="tag-label bg-[#1D3557] text-white text-[9px]">📅 {p.year}</span>
          <span className="tag-label bg-[#2A9D8F] text-white text-[9px]">👨‍🏫 {p.guide}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className={`tag-label text-[9px] ${tagColor(t)}`}>{t}</span>
          ))}
        </div>
        <p className="font-body text-xs leading-relaxed text-[#1D3557]/70 flex-1 mb-5">{p.desc}</p>
        <div className="flex gap-2 mt-auto">
          <a href={p.github} target="_blank" rel="noreferrer"
            className="btn-brutal bg-black text-[#F1C40F] text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <Github size={12} /> GitHub
          </a>
          <a href={p.live} target="_blank" rel="noreferrer"
            className="btn-brutal bg-white text-black text-[10px] flex items-center gap-1.5 flex-1 justify-center"
            style={{ padding: '8px 12px' }}>
            <ExternalLink size={12} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ── Progress bar ──────────────────────────────
function ProgressBar() {
  const pct = Math.round((projectStats.completed / projectStats.total) * 100)
  return (
    <div className="bg-white border-2 border-black p-6" style={{ boxShadow: '5px 5px 0 #000' }}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-display text-4xl text-[#1D3557]">{projectStats.completed} / {projectStats.total}</span>
        <span className="tag-label bg-[#E63946] text-white">{pct}% Done</span>
      </div>
      <div className="h-5 bg-[#F1FAEE] border-2 border-black overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-[#E63946]"
          style={{ boxShadow: 'inset -3px 0 0 rgba(0,0,0,0.2)' }}
        />
      </div>
      <p className="font-body text-[10px] text-[#1D3557]/50 mt-2 uppercase tracking-widest">
        100 Projects Challenge — {projectStats.total - projectStats.completed} left to go
      </p>
    </div>
  )
}

// ── Tab config ────────────────────────────────
const TABS = [
  { id: 'hundred',   label: '100 Projects',  icon: <Flame size={14} />,         count: hundredProjects.length },
  { id: 'hackathon', label: 'Hackathons',     icon: <Trophy size={14} />,        count: hackathonProjects.length },
  { id: 'college',   label: 'College',        icon: <BookOpen size={14} />,      count: collegeProjects.length },
]

// ── Main Page ─────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('hundred')

  return (
    <main>

      {/* ── HEADER ─────────────────────────────── */}
      <div className="bg-[#E63946] border-b-2 border-black px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag-label bg-black text-[#F1C40F] mb-4 inline-flex items-center gap-2"
              style={{ boxShadow: '3px 3px 0 #000' }}>
              <Flame size={12} /> 100 Projects Challenge
            </span>
            <h1 className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(52px, 9vw, 120px)', textShadow: '5px 5px 0 #000' }}>
              ALL MY<br /><span className="text-[#F1C40F]">WORK</span>
            </h1>
            <ProgressBar />
          </motion.div>
        </div>
      </div>

      {/* ── TABS ───────────────────────────────── */}
      <div className="border-b-2 border-black bg-white sticky top-[65px] z-40">
        <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-body font-bold text-xs uppercase tracking-widest border-r-2 border-black whitespace-nowrap transition-all
                ${activeTab === tab.id
                  ? 'bg-black text-[#F1C40F]'
                  : 'bg-white text-black hover:bg-[#F1FAEE]'}`}
            >
              {tab.icon}
              {tab.label}
              <span className={`text-[9px] px-1.5 py-0.5 border font-bold
                ${activeTab === tab.id ? 'border-[#F1C40F] text-[#F1C40F]' : 'border-black text-black'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">

          {/* 100 Projects Tab */}
          {activeTab === 'hundred' && (
            <motion.div key="hundred"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-5xl text-[#1D3557]">100 PROJECTS</h2>
                  <p className="font-body text-xs text-[#1D3557]/50 mt-1">
                    {hundredProjects.filter(p => p.status === 'completed').length} completed ·{' '}
                    {hundredProjects.filter(p => p.status === 'in-progress').length} in progress ·{' '}
                    {hundredProjects.filter(p => p.status === 'planned').length} planned
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hundredProjects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
              </div>
            </motion.div>
          )}

          {/* Hackathons Tab */}
          {activeTab === 'hackathon' && (
            <motion.div key="hackathon"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="mb-8">
                <h2 className="font-display text-5xl text-[#1D3557]">HACKATHON PROJECTS</h2>
                <p className="font-body text-xs text-[#1D3557]/50 mt-1">
                  Built under pressure — {hackathonProjects.length} hackathon{hackathonProjects.length !== 1 ? 's' : ''} participated
                </p>
              </div>

              {hackathonProjects.length === 0 ? (
                <div className="border-2 border-black bg-[#F1FAEE] p-12 text-center"
                  style={{ boxShadow: '5px 5px 0 #000' }}>
                  <Trophy size={40} className="text-[#F1C40F] mx-auto mb-4" />
                  <p className="font-display text-3xl text-[#1D3557] mb-2">COMING SOON</p>
                  <p className="font-body text-xs text-[#1D3557]/50">
                    Add your hackathon projects to <code className="bg-black text-[#F1C40F] px-1">src/data/projects.js</code>
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hackathonProjects.map((p, i) => <HackathonCard key={p.id} p={p} i={i} />)}
                </div>
              )}
            </motion.div>
          )}

          {/* College Tab */}
          {activeTab === 'college' && (
            <motion.div key="college"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="mb-8">
                <h2 className="font-display text-5xl text-[#1D3557]">COLLEGE PROJECTS</h2>
                <p className="font-body text-xs text-[#1D3557]/50 mt-1">
                  Mini projects and major projects from B.Tech CSE
                </p>
              </div>

              {/* Split: Major vs Mini */}
              {['major', 'mini'].map(type => {
                const filtered = collegeProjects.filter(p => p.type === type)
                if (filtered.length === 0) return null
                return (
                  <div key={type} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`tag-label flex items-center gap-1
                        ${type === 'major' ? 'bg-[#1D3557] text-white' : 'bg-[#457B9D] text-white'}`}
                        style={{ boxShadow: '3px 3px 0 #000' }}>
                        <GraduationCap size={12} />
                        {type === 'major' ? 'Major Project' : 'Mini Projects'}
                      </span>
                      <div className="flex-1 h-0.5 bg-black/10" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filtered.map((p, i) => <CollegeCard key={p.id} p={p} i={i} />)}
                    </div>
                  </div>
                )
              })}

              {collegeProjects.length === 0 && (
                <div className="border-2 border-black bg-[#F1FAEE] p-12 text-center"
                  style={{ boxShadow: '5px 5px 0 #000' }}>
                  <BookOpen size={40} className="text-[#457B9D] mx-auto mb-4" />
                  <p className="font-display text-3xl text-[#1D3557] mb-2">COMING SOON</p>
                  <p className="font-body text-xs text-[#1D3557]/50">
                    Add your college projects to <code className="bg-black text-[#F1C40F] px-1">src/data/projects.js</code>
                  </p>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── CTA ────────────────────────────────── */}
      <section className="border-t-2 border-black bg-[#F1C40F] py-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] text-[#1D3557] leading-none mb-4"
            style={{ textShadow: '3px 3px 0 #000' }}>
            GOT A PROJECT<br />IN MIND?
          </h2>
          <a href="/contact"
            className="btn-brutal bg-[#E63946] text-white inline-flex items-center gap-2">
            Let's Talk <ExternalLink size={14} />
          </a>
        </motion.div>
      </section>

    </main>
  )
}