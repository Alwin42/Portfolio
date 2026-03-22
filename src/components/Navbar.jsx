import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { path: '/',         label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-black border-b-2 font-body transition-all duration-200"
        style={{
          borderColor: scrolled ? '#7cff67' : 'rgba(255,255,255,0.1)',
          boxShadow:   scrolled ? '0 4px 0 #7cff67' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-7 h-7 bg-[#7cff67] border-2 border-black flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '2px 2px 0 #5227FF' }}>
              <Zap size={14} className="text-black" />
            </div>
            <span className="font-display text-xl tracking-widest text-white group-hover:text-[#7cff67] transition-colors">
              ALWIN.DEV
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ path, label }) => {
              const active = pathname === path
              return (
                <li key={path}>
                  <Link to={path}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-all duration-100"
                    style={{
                      background:  active ? '#7cff67' : 'transparent',
                      color:       active ? '#000'    : 'rgba(255,255,255,0.6)',
                      borderColor: active ? '#7cff67' : 'transparent',
                      boxShadow:   active ? '3px 3px 0 #5227FF' : 'none',
                    }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' } }}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'transparent' } }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 border-2 transition-all duration-150 flex-shrink-0"
            style={{
              borderColor: menuOpen ? '#7cff67' : 'rgba(255,255,255,0.2)',
              background:  menuOpen ? '#7cff67' : 'transparent',
              boxShadow:   menuOpen ? '3px 3px 0 #5227FF' : '3px 3px 0 rgba(255,255,255,0.1)',
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90,  opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <X size={18} className="text-black" />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate:   0, opacity: 1 }}
                  exit={{   rotate: -90,  opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <Menu size={18} className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-xs z-50 md:hidden flex flex-col"
              style={{ background: '#050505', borderLeft: '3px solid #7cff67' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b-2"
                style={{ borderColor: 'rgba(124,255,103,0.2)' }}>
                <span className="font-display text-xl tracking-widest text-white">MENU</span>
                <button onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 border-2 border-[#7cff67] flex items-center justify-center"
                  style={{ boxShadow: '2px 2px 0 #5227FF' }}>
                  <X size={16} className="text-[#7cff67]" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col py-6 px-4 gap-2 overflow-y-auto">
                {links.map(({ path, label }, i) => {
                  const active = pathname === path
                  return (
                    <motion.div key={label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 + 0.1 }}
                    >
                      <Link to={path} onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-4 border-2 font-body font-bold text-sm uppercase tracking-widest transition-all"
                        style={{
                          background:  active ? '#7cff67' : 'transparent',
                          color:       active ? '#000'    : 'rgba(255,255,255,0.7)',
                          borderColor: active ? '#7cff67' : 'rgba(255,255,255,0.08)',
                          boxShadow:   active ? '4px 4px 0 #5227FF' : 'none',
                        }}
                      >
                        {label}
                        {active
                          ? <span className="font-display text-black text-xs">✦</span>
                          : <span style={{ color: 'rgba(255,255,255,0.2)' }}>→</span>
                        }
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Drawer footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-4 pb-8 pt-4 border-t-2"
                style={{ borderColor: 'rgba(124,255,103,0.15)' }}
              >
                {/* Socials row */}
                <div className="flex gap-2 justify-center">
                  {[
                    { href: 'https://github.com/Alwin42',                              label: 'Github' },
                    { href: 'https://www.linkedin.com/in/alwin-emmanuel-sebastian/',   label: 'LinkedIn' },
                    { href: 'https://twitter.com/Alwin_42',                            label: 'X'  },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="flex-1 py-2 text-center font-body font-bold text-[10px] uppercase tracking-widest border border-white/10 text-white/40 hover:border-[#7cff67] hover:text-[#7cff67] transition-all">
                      {s.label}
                    </a>
                  ))}
                </div>

                <p className="font-body text-[9px] text-white/20 text-center mt-4 uppercase tracking-widest">
                  alwin.dev · Kerala, India
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}