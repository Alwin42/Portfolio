import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const socials = [
  { label: 'Email',    value: 'alwin@dev.com',    color: 'bg-[#E63946] text-white' },
  { label: 'GitHub',   value: '@alwinemmanuel',   color: 'bg-[#1D3557] text-white' },
  { label: 'LinkedIn', value: '/in/alwinemmanuel', color: 'bg-[#457B9D] text-white' },
  { label: 'Twitter',  value: '@alwin_dev',        color: 'bg-[#2A9D8F] text-white' },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',   // ← replace from emailjs.com
        'YOUR_TEMPLATE_ID',  // ← replace from emailjs.com
        formRef.current,
        'YOUR_PUBLIC_KEY'    // ← replace from emailjs.com
      )
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="tag-label bg-[#2A9D8F] text-white shadow-brutal mb-4 inline-block">
          ✦ Get In Touch
        </span>
        <h1 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-navy">
          LET'S BUILD<br />
          <span className="text-[#E63946]">TOGETHER</span>
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-body text-sm leading-relaxed text-navy/80 mb-10 border-l-4 border-[#E63946] pl-4">
            Got a project in mind? Want to collaborate or just say hi? I respond within 24 hours. Let's make something unforgettable.
          </p>

          <div className="flex flex-col gap-3">
            {socials.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="card-brutal flex items-center"
              >
                <div className={`${s.color} border-r-2 border-black px-4 py-4 w-28 flex-shrink-0`}>
                  <p className="font-body font-bold text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
                <p className="font-body text-xs px-4 text-navy">{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Available badge */}
          <div className="mt-8 bg-[#F1C40F] border-2 border-black shadow-brutal p-4 inline-block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2A9D8F] border border-black animate-pulse" />
              <p className="font-body font-bold text-xs uppercase tracking-widest">Available for freelance work</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-navy/60 block mb-1.5">
                Your Name
              </label>
              <input
                name="user_name"
                required
                placeholder="Alwin Emmanuel"
                className="w-full border-2 border-black px-4 py-3 font-body text-sm bg-white shadow-brutal focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
              />
            </div>

            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-navy/60 block mb-1.5">
                Email Address
              </label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-2 border-black px-4 py-3 font-body text-sm bg-white shadow-brutal focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
              />
            </div>

            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-navy/60 block mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full border-2 border-black px-4 py-3 font-body text-sm bg-white shadow-brutal focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-brutal bg-[#E63946] text-white self-start disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'sent' && (
              <p className="font-body font-bold text-xs text-[#2A9D8F] border-l-4 border-[#2A9D8F] pl-3">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="font-body font-bold text-xs text-[#E63946] border-l-4 border-[#E63946] pl-3">
                ✗ Something went wrong. Email me directly instead.
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </main>
  )
}