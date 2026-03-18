import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'SHOPBLAST',
    desc: 'High-performance e-commerce platform with real-time inventory, sub-100ms loads, and a complete design system built from scratch.',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'Live',
    color: 'bg-[#E63946]',
    link: '#',
  },
  {
    id: 2,
    title: 'DATAVAULT',
    desc: 'Analytics dashboard with live charts, CSV imports, and AI-powered anomaly detection for startup metrics.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    status: 'Live',
    color: 'bg-[#F1C40F]',
    link: '#',
  },
  {
    id: 3,
    title: 'CHAINVOTE',
    desc: 'Decentralized voting dApp on Ethereum. Transparent, tamper-proof elections with MetaMask authentication.',
    tags: ['Solidity', 'React', 'Web3.js'],
    status: 'Open Source',
    color: 'bg-[#2A9D8F]',
    link: '#',
  },
  {
    id: 4,
    title: 'DEVKIT CLI',
    desc: 'Open-source scaffolding tool with 3k+ GitHub stars. Spin up full-stack projects in under 30 seconds.',
    tags: ['Node.js', 'CLI', 'OSS'],
    status: 'Open Source',
    color: 'bg-[#1D3557]',
    link: '#',
  },
  {
    id: 5,
    title: 'PROMPTLAB',
    desc: 'Prompt engineering playground with version control, team sharing, and token cost estimator for LLM workflows.',
    tags: ['Next.js', 'OpenAI', 'Prisma'],
    status: 'Beta',
    color: 'bg-[#F3722C]',
    link: '#',
  },
  {
    id: 6,
    title: 'TASKFLOW',
    desc: 'Django-powered project management tool with real-time updates, file attachments, and team collaboration.',
    tags: ['Django', 'React', 'Redis'],
    status: 'Live',
    color: 'bg-[#457B9D]',
    link: '#',
  },
]

const statusColor = {
  'Live':        'bg-[#2A9D8F] text-white',
  'Open Source': 'bg-[#F1C40F] text-black',
  'Beta':        'bg-[#F3722C] text-white',
}

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="tag-label bg-[#F1C40F] text-black shadow-brutal mb-4 inline-block">
          ✦ My Work
        </span>
        <h1 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-navy">
          SELECTED<br />
          <span className="text-[#E63946]">PROJECTS</span>
        </h1>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="card-brutal flex flex-col"
          >
            {/* Color header */}
            <div className={`${p.color} border-b-2 border-black p-6 h-28 flex items-end`}>
              <h2 className="font-display text-white text-3xl tracking-wider leading-none">{p.title}</h2>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className={`tag-label text-[9px] ${statusColor[p.status]}`}>{p.status}</span>
                {p.tags.map(t => (
                  <span key={t} className="tag-label text-[9px] bg-white text-black border-black/30">{t}</span>
                ))}
              </div>
              <p className="font-body text-xs leading-relaxed text-navy/70 flex-1 mb-4">{p.desc}</p>
              <a
                href={p.link}
                className="btn-brutal bg-black text-yellow text-[10px] inline-block text-center"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  )
}