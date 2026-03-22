import { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion, AnimatePresence } from 'framer-motion'

const letters = ['A', 'L', 'W', 'I', 'N']
const loadingPhrases = [
  'Brewing coffee...',
  'Writing clean code...',
  'Pushing to GitHub...',
  'Deploying to Vercel...',
  'Portfolio is ready!',
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % loadingPhrases.length)
    }, 600)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(phraseTimer)
          setPhraseIndex(loadingPhrases.length - 1)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 700)
          }, 400)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => {
      clearInterval(interval)
      clearInterval(phraseTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] overflow-hidden"
        >
          {/* Split background — top red / bottom yellow */}
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1 bg-[#E63946]" />
            <div className="flex-1 bg-[#F1C40F]" />
          </div>

          {/* Horizontal divider line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-black z-10" />

          {/* Dot texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] z-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* ── TOP HALF ── */}
          <div className="absolute top-0 left-0 right-0 h-1/2 flex flex-col items-center justify-end pb-6 z-20">

            {/* Staggered name letters */}
            <div className="flex items-end gap-1 mb-4">
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 12 }}
                  className="font-display text-white leading-none select-none"
                  style={{
                    fontSize: 'clamp(56px, 10vw, 96px)',
                    textShadow: '4px 4px 0 #000',
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>

            {/* Subtitle badge */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-black text-[#F1C40F] px-4 py-1"
              style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}
            >
              <span className="font-body text-[10px] font-bold uppercase tracking-[4px]">
                Full Stack Developer
              </span>
            </motion.div>
          </div>

          {/* ── BOTTOM HALF ── */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-start pt-6 z-20">

            {/* Lottie animation in brutalist frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
              className="mb-5"
            >
              <div
                className="border-[3px] border-black bg-white p-1"
                style={{ boxShadow: '5px 5px 0 #000' }}
              >
                
              </div>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-xs px-6"
            >
              {/* Phrase + percentage */}
              <div className="flex items-center justify-between mb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                    className="font-body text-[10px] font-bold uppercase tracking-widest text-[#1D3557]"
                  >
                    {loadingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="font-display text-2xl text-[#E63946] leading-none ml-2">
                  {progress}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="h-5 bg-white border-2 border-black overflow-hidden"
                style={{ boxShadow: '4px 4px 0 #000' }}
              >
                <motion.div
                  className="h-full bg-[#E63946] relative"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.06 }}
                >
                  {/* Diagonal stripe inside bar */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, #000 0px, #000 4px, transparent 4px, transparent 12px)',
                    }}
                  />
                </motion.div>
              </div>

              {/* Step dots */}
              <div className="flex justify-between mt-2">
                {[0, 25, 50, 75, 100].map(step => (
                  <div
                    key={step}
                    className={`w-2 h-2 border border-black transition-colors duration-300
                      ${progress >= step ? 'bg-[#1D3557]' : 'bg-white'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner ✦ decorations */}
          <span className="absolute top-4 left-4 font-display text-4xl text-black/10 select-none z-20">✦</span>
          <span className="absolute top-4 right-4 font-display text-3xl text-black/10 select-none z-20">✦</span>
          <span className="absolute bottom-4 left-4 font-display text-3xl text-white/20 select-none z-20">✦</span>
          <span className="absolute bottom-4 right-4 font-display text-4xl text-white/20 select-none z-20">✦</span>

          {/* © stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="absolute bottom-6 right-6 bg-[#1D3557] border-2 border-black w-12 h-12 flex items-center justify-center z-20"
            style={{ boxShadow: '3px 3px 0 #000' }}
          >
            <span className="font-display text-[#F1C40F] text-lg leading-none">©</span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}