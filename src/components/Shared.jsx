import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Music2, Volume2, VolumeX, ArrowRight, ArrowLeft, Sparkles, Flower2, Menu, X } from 'lucide-react'

export const pageMotion = {
  initial: { opacity: 0, y: 18, filter: 'blur(5px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: .55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: .2 } }
}

export function Page({ children, className = '' }) {
  return <motion.section className={`page ${className}`} variants={pageMotion} initial="initial" animate="animate" exit="exit">{children}</motion.section>
}
export function Eyebrow({ children }) { return <div className="eyebrow"><span />{children}<span /></div> }
export function Title({ children, small = false }) { return <h1 className={`display-title ${small ? 'small' : ''}`}>{children}</h1> }
export function Next({ to, children = 'Continue' }) { return <NavLink className="primary-button" to={to}>{children}<ArrowRight size={17}/></NavLink> }
export function Back({ to }) { return <NavLink className="back-link" to={to}><ArrowLeft size={15}/> Back</NavLink> }

export function Petals() {
  return <div className="petal-field" aria-hidden="true">{Array.from({length:18},(_,i)=><span className="petal" key={i} style={{'--i':i,'--delay':`${(i%7)*-1.7}s`,'--left':`${(i*17)%100}%`}}>✿</span>)}</div>
}

const links = [
  ['/', 'Entrance'], ['/welcome','Welcome'], ['/our-story','Story'], ['/memories','Gallery'],
  ['/love-letter','Letter'], ['/feelings','Feelings'], ['/reasons','Reasons'], ['/dreams','Dreams'],
  ['/surprise','Gift'], ['/special-moment','Moment'], ['/proposal','Proposal'], ['/final-note','Final note'],
  ['/qr','QR'], ['/about','About']
]

export function Shell({ children }) {
  const [music, setMusic] = useState(false)
  const [menu, setMenu] = useState(false)
  const audio = useRef(null)
  const location = useLocation()
  useEffect(() => {
    if (!audio.current) return
    if (music) audio.current.play().catch(() => setMusic(false))
    else audio.current.pause()
  }, [music])
  useEffect(() => { setMenu(false) }, [location.pathname])
  return <div className="app-shell">
    <audio ref={audio} src="/music/romantic.mp3" loop preload="none"/>
    <div className="ambient-glow"/>
    <Petals/>
    <header className="topbar">
      <NavLink to="/" className="brand"><span className="brand-mark"><Heart size={15} fill="currentColor"/></span><span>A little thing for Shreya</span></NavLink>
      <div className="top-actions">
        <button className={`music-toggle ${music?'is-playing':''}`} onClick={()=>setMusic(v=>!v)} aria-label={music?'Pause music':'Play music'}>
          {music?<Volume2 size={16}/>:<Music2 size={16}/>}<span>{music?'Music on':'Play music'}</span>
        </button>
        <button className="menu-toggle" onClick={()=>setMenu(v=>!v)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
      </div>
    </header>
    <nav className={`chapter-nav ${menu?'open':''}`} aria-label="Journey pages">
      {links.map(([path,label])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>`chapter-link ${isActive?'active':''}`}>{label}</NavLink>)}
    </nav>
    <main className="main-content">{children}</main>
    <footer className="footer-note">made with care <Heart size={12} fill="currentColor"/></footer>
  </div>
}
