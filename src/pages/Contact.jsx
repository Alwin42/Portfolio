import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Mail, Github, Linkedin, Twitter,
  Send, CheckCircle, XCircle, Loader,
  MapPin, Clock, ArrowRight, Zap
} from 'lucide-react'
import ShinyText  from '../components/Shiny-Text'
import ClickSpark from '../components/ClickSpark'
import Aurora     from '../components/Aurora'

const socials = [
  {
    label: 'Email',
    value: 'alwinemmanuel424@gmail.com',
    href:  'mailto:alwinemmanuel424@gmail.com',
    icon:  <Mail size={16} />,
    color: 'bg-[#E63946]',
    shadow: '#E63946',
  },
  {
    label: 'GitHub',
    value: 'github.com/Alwin42',
    href:  'https://github.com/Alwin42',
    icon:  <Github size={16} />,
    color: 'bg-[#1D3557]',
    shadow: '#5227FF',
  },
  {
    label: 'LinkedIn',
    value: 'alwin-emmanuel-sebastian',
    href:  'https://www.linkedin.com/in/alwin-emmanuel-sebastian/',
    icon:  <Linkedin size={16} />,
    color: 'bg-[#457B9D]',
    shadow: '#457B9D',
  },
  {
    label: 'Twitter / X',
    value: '@Alwin_42',
    href:  'https://twitter.com/Alwin_42',
    icon:  <Twitter size={16} />,
    color: 'bg-[#2A9D8F]',
    shadow: '#2A9D8F',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function Contact() {
  const formRef  = useRef()
  const [status, setStatus]   = useState('idle')
  const [focused, setFocused] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputStyle = (field) => ({
    borderColor: focused === field ? '#7cff67' : 'rgba(255,255,255,0.1)',
    boxShadow:   focused === field ? '4px 4px 0 #7cff67' : '4px 4px 0 rgba(255,255,255,0.05)',
  })

  const inputClass = "w-full border-2 px-4 py-3 font-body text-sm bg-[#0a0a0a] text-white placeholder:text-white/20 focus:outline-none transition-all duration-150"

  return (
    <main className="bg-black min-h-screen">

      {/* ── HEADER ─────────────────────────────── */}
      <div className="relative overflow-hidden border-b-4 border-[#7cff67]">

        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={['#7cff67', '#B19EEF', '#5227FF']}
            blend={0.85}
            amplitude={2.5}
            speed={0.4}
          />
        </div>
        <div className="absolute inset-0 bg-black/65 z-[1]" />
        <div className="absolute inset-0 opacity-[0.04] z-[2]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

          <motion.div {...fadeUp(0)}>
            <span className="tag-label bg-black text-[#7cff67] mb-6 inline-flex items-center gap-2"
              style={{ boxShadow: '3px 3px 0 #7cff67', border: '2px solid #7cff67' }}>
              <Zap size={12} /> Get In Touch
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <h1 className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(52px, 9vw, 110px)' }}>
              LET'S BUILD
            </h1>
            <h1 className="font-display leading-none mb-6"
              style={{ fontSize: 'clamp(52px, 9vw, 110px)', color: '#7cff67', textShadow: '6px 6px 0 #5227FF' }}>
              <ShinyText
                text="TOGETHER."
                disabled={false}
                speed={3}
                className="font-display"
                style={{ fontSize: 'inherit', color: '#7cff67' }}
              />
            </h1>
          </motion.div>

          <motion.p {...fadeUp(0.2)}
            className="font-body text-sm text-white/60 max-w-md border-l-4 border-[#7cff67] pl-4">
            Got a project in mind? Want to collaborate or just say hi?
            I typically respond within 24 hours. Let's make something unforgettable.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: <MapPin size={12} />,    text: 'Kerala, India' },
              { icon: <Clock size={12} />,      text: 'IST (UTC+5:30)' },
              { icon: <CheckCircle size={12} />,text: 'Open to Internships' },
            ].map((item, i) => (
              <span key={i}
                className="flex items-center gap-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span className="text-[#7cff67]">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT — Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-4xl text-white mb-8"
            style={{ textShadow: '3px 3px 0 #5227FF' }}>
            FIND ME ON
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center border-2 border-white/10 bg-[#0a0a0a] group transition-all duration-150 overflow-hidden"
                style={{ boxShadow: `4px 4px 0 ${s.shadow}` }}
              >
                <div className={`${s.color} border-r-2 border-black px-5 py-5 flex-shrink-0 flex items-center justify-center`}>
                  <span className="text-white">{s.icon}</span>
                </div>
                <div className="px-5 flex-1 min-w-0">
                  <p className="font-body font-bold text-[9px] uppercase tracking-widest text-white/40 mb-0.5">
                    {s.label}
                  </p>
                  <p className="font-body text-xs text-white truncate">{s.value}</p>
                </div>
                <ArrowRight size={14}
                  className="mr-4 text-white/20 group-hover:text-[#7cff67] transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="border-2 border-black p-5 inline-block"
            style={{ background: '#7cff67', boxShadow: '5px 5px 0 #5227FF' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black animate-pulse" />
              <p className="font-body font-bold text-xs uppercase tracking-widest text-black">
                Available for Freelance &amp; Internships
              </p>
            </div>
          </motion.div>

          {/* Alternate email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 font-body text-[10px] text-white/30 flex items-center gap-2"
          >
            <Mail size={10} className="text-white/20" />
            alt: alwindev1010@gmail.com
          </motion.div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display text-4xl text-white mb-8"
            style={{ textShadow: '3px 3px 0 #E63946' }}>
            SEND A MESSAGE
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                Your Name
              </label>
              <input
                name="user_name"
                required
                placeholder="Your full name"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={inputClass}
                style={inputStyle('name')}
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                Email Address
              </label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={inputClass}
                style={inputStyle('email')}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                Subject
              </label>
              <input
                name="subject"
                required
                placeholder="Project Collaboration / Internship / Just Saying Hi"
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                className={inputClass}
                style={inputStyle('subject')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-body font-bold text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, idea, or opportunity..."
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`${inputClass} resize-none`}
                style={inputStyle('message')}
              />
            </div>

            {/* Submit button */}
            <ClickSpark sparkColor="#7cff67" sparkSize={8} sparkRadius={24} sparkCount={10}>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-brutal flex items-center gap-3 self-start disabled:opacity-60 transition-all"
                style={{
                  background:  status === 'sent' ? '#7cff67' : '#E63946',
                  color:       status === 'sent' ? '#000'    : '#fff',
                  boxShadow:   status === 'sent' ? '5px 5px 0 #5227FF' : '5px 5px 0 #000',
                  border: '2px solid #000',
                  padding: '12px 24px',
                }}
              >
                {status === 'idle'    && <><Send size={15} />    Send Message</>}
                {status === 'sending' && <><Loader size={15} className="animate-spin" /> Sending...</>}
                {status === 'sent'    && <><CheckCircle size={15} /> Message Sent!</>}
                {status === 'error'   && <><XCircle size={15} />  Try Again</>}
              </button>
            </ClickSpark>

            {/* Success message */}
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-[#7cff67] bg-[#7cff67]/10 p-4"
                style={{ boxShadow: '4px 4px 0 #7cff67' }}
              >
                <p className="font-body font-bold text-xs text-[#7cff67]">
                  ✓ Message delivered! I'll respond to alwinemmanuel424@gmail.com within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-[#E63946] bg-[#E63946]/10 p-4"
                style={{ boxShadow: '4px 4px 0 #E63946' }}
              >
                <p className="font-body font-bold text-xs text-[#E63946]">
                  ✗ Something went wrong. Email me directly at alwinemmanuel424@gmail.com
                </p>
              </motion.div>
            )}

          </form>
        </motion.div>
      </div>

      {/* ── FOOTER STRIP ───────────────────────── */}
      <section className="border-t-2 border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl text-white">ALWIN EMMANUEL</p>
            <p className="font-body text-xs text-white/30 uppercase tracking-widest mt-1">
              Full Stack Developer · Kerala, India
            </p>
          </div>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, rotate: -5 }}
                className={`${s.color} border-2 border-black w-10 h-10 flex items-center justify-center text-white`}
                style={{ boxShadow: '3px 3px 0 #000' }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}