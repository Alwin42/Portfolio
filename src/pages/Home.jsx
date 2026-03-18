import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const skills = ['React', 'Node.js', 'Django', 'Blockchain', 'TypeScript', 'MongoDB', 'PostgreSQL', 'REST APIs']

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[calc(100vh-65px)]">

        {/* Left — Red */}
        <div className="bg-[#E63946] flex flex-col justify-center px-10 md:px-16 py-20 border-r-2 border-black">

          <motion.div {...fadeUp(0)}>
            <span className="tag-label bg-black text-yellow mb-6 inline-block shadow-brutal-sm">
              ✦ Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
          >
            HY I'M<br />
            <span className="text-yellow">ALWIN</span><br />
            EMMANUEL
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-white/90 text-sm leading-relaxed mb-4 max-w-sm">
            "Building innovative Websites, dApps management systems, and responsive UIs with Django, React, Node.js, and blockchain tech."
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="text-white text-sm font-bold mb-10">
            Let's turn ideas into{' '}
            <span className="text-yellow underline decoration-2">code.</span>
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
            <Link to="/projects">
              <button className="btn-brutal bg-yellow text-black">
                View Work →
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-brutal bg-white text-black">
                Hire Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right — Yellow */}
        <div className="bg-[#F1C40F] relative flex items-center justify-center p-10 overflow-hidden">

          {/* Decorative stars */}
          <span className="absolute top-10 left-8 font-display text-black/30 text-5xl select-none">✦</span>
          <span className="absolute top-20 right-16 font-display text-black/20 text-3xl select-none">✦</span>
          <span className="absolute bottom-32 left-12 font-display text-black/25 text-4xl select-none">✦</span>
          <span className="absolute bottom-10 right-10 font-display text-black/30 text-2xl select-none">✦</span>

          {/* Mockup cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-48 bg-white border-2 border-black shadow-brutal rounded-none overflow-hidden"
          >
            <div className="bg-navy px-3 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red" />
              <div className="w-2 h-2 rounded-full bg-yellow" />
              <div className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-white text-[9px] ml-1 font-bold">#Project-unicorn</span>
            </div>
            {[
              { name: 'Mrs. Unicorn', msg: 'Guys, We ready for Launch!' },
              { name: 'Lucas', msg: 'What a Fantastic Team!' },
              { name: 'Mr. Bob', msg: "Here's the magic on the show." },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-2 px-3 py-2 border-b border-black/10">
                <div className="w-6 h-6 rounded-full bg-steel flex-shrink-0 flex items-center justify-center text-white text-[8px] font-bold">
                  {m.name[0]}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-navy">{m.name}</p>
                  <p className="text-[8px] text-black/60">{m.msg}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main mockup - browser window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-64 bg-white border-2 border-black shadow-brutal-lg ml-20"
          >
            <div className="bg-black px-3 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red" />
              <div className="w-2 h-2 rounded-full bg-yellow" />
              <div className="w-2 h-2 rounded-full bg-teal" />
              <div className="flex-1 bg-white/10 rounded-sm ml-2 h-3 text-white/60 text-[7px] flex items-center px-2">
                alwin.dev/projects
              </div>
            </div>
            <div className="p-3">
              <div className="bg-mist border border-black/20 p-2 mb-2">
                <p className="text-[9px] font-bold text-navy mb-1">📢 Announcements</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-steel rounded-sm flex items-center justify-center text-white text-[8px] font-bold">L</div>
                  <div>
                    <p className="text-[9px] font-bold">Lucas</p>
                    <p className="text-[8px] text-black/50">What a Fantastic Team! Sharing few Highlights...</p>
                  </div>
                </div>
              </div>
              <div className="bg-sky/20 border border-sky/40 p-2 mb-2 aspect-video flex items-center justify-center">
                <span className="text-[9px] text-steel font-bold">[ Project Preview ]</span>
              </div>
              <div className="flex gap-1">
                {['React', 'Node', 'AWS'].map(t => (
                  <span key={t} className="text-[7px] bg-yellow border border-black px-1.5 py-0.5 font-bold">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating decorative person illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-32 h-40 flex flex-col items-center justify-end pb-2"
          >
            <div className="w-20 h-20 border-2 border-black bg-[#F3722C] rounded-full flex items-center justify-center text-3xl">
              👩‍💻
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────── */}
      <div className="bg-black text-yellow border-y-2 border-black py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-display tracking-widest text-xl mx-8">
              ✦ REACT &nbsp;&nbsp; ✦ NODE.JS &nbsp;&nbsp; ✦ DJANGO &nbsp;&nbsp; ✦ BLOCKCHAIN &nbsp;&nbsp; ✦ TYPESCRIPT &nbsp;&nbsp; ✦ MONGODB &nbsp;&nbsp; ✦ OPEN TO WORK &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── SKILLS STRIP ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className={`
                tag-label shadow-brutal cursor-default select-none
                ${i % 5 === 0 ? 'bg-[#E63946] text-white' :
                  i % 5 === 1 ? 'bg-[#F1C40F] text-black' :
                  i % 5 === 2 ? 'bg-[#2A9D8F] text-white' :
                  i % 5 === 3 ? 'bg-[#1D3557] text-white' :
                                'bg-[#F3722C] text-white'}
              `}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

    </main>
  )
}