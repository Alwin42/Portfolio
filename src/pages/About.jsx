import { motion } from 'framer-motion'

const stats = [
  { num: '50+', label: 'Projects Shipped' },
  { num: '5YRS', label: 'Experience' },
  { num: '10+', label: 'Happy Clients' },
  { num: '3', label: 'Open Source' },
]

const experience = [
  { year: '2024', role: 'Senior Full Stack Developer', company: 'Freelance', color: 'bg-[#E63946]' },
  { year: '2022', role: 'Full Stack Developer', company: 'Tech Startup', color: 'bg-[#F1C40F]' },
  { year: '2020', role: 'Frontend Developer', company: 'Digital Agency', color: 'bg-[#2A9D8F]' },
]

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="tag-label bg-[#E63946] text-white shadow-brutal mb-4 inline-block">
          ✦ About Me
        </span>
        <h1 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-navy">
          BUILDING THE<br />
          <span className="text-[#E63946]">WEB'S</span> FUTURE
        </h1>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-body text-sm leading-relaxed text-navy/80 mb-6 border-l-4 border-[#E63946] pl-4">
            I'm Alwin Emmanuel, a Full Stack Developer specializing in building fast, accessible, and brutally honest web experiences. I work across the entire stack — from pixel-perfect UIs to scalable backend systems.
          </p>
          <p className="font-body text-sm leading-relaxed text-navy/80 mb-6 border-l-4 border-[#F1C40F] pl-4">
            My expertise spans React, Node.js, Django, and blockchain technology. I've shipped products used by thousands of users and built dApps on Ethereum and Solana.
          </p>
          <p className="font-body text-sm leading-relaxed text-navy/80 border-l-4 border-[#2A9D8F] pl-4">
            Based in India. Always open to exciting opportunities and challenging problems worth solving.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`
                border-2 border-black shadow-brutal p-6 flex flex-col items-start
                ${i === 0 ? 'bg-[#E63946]' : i === 1 ? 'bg-[#F1C40F]' : i === 2 ? 'bg-[#2A9D8F]' : 'bg-[#1D3557]'}
              `}
            >
              <span className={`font-display text-5xl leading-none mb-2 ${i === 1 ? 'text-black' : 'text-white'}`}>
                {s.num}
              </span>
              <span className={`font-body text-[10px] font-bold uppercase tracking-widest ${i === 1 ? 'text-black/70' : 'text-white/70'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <div>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="flex flex-col gap-4">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-brutal p-6 flex items-center gap-6 group"
            >
              <div className={`${e.color} border-2 border-black w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-brutal-sm`}>
                <span className="font-display text-white text-lg">{e.year}</span>
              </div>
              <div>
                <p className="font-body font-bold text-sm text-navy">{e.role}</p>
                <p className="font-body text-xs text-navy/60 mt-1">{e.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  )
}