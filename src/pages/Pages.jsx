import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Mail, Camera, Gift, Stars, Sparkles, ArrowLeft, ArrowRight, RotateCcw, Download, Copy, Printer, Flower2, Moon, Music2 } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import { senderName, recipientName, story, photos, loveLetter, feelings, reasons, dreams, proposalMessage } from '../data'
import { Page, Eyebrow, Title, Next, Back } from '../components/Shared'

export function Home() {
  return <Page className="home-page">
    <div className="hero-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-heart"><Heart size={43} fill="currentColor"/></div><span className="orbit-star star-a">✦</span><span className="orbit-star star-b">✧</span></div>
    <Eyebrow>Some surprises are worth waiting for</Eyebrow>
    <Title>Hey, <em>{recipientName}.</em></Title>
    <p className="lead">I have created something special just for you.<br/>A little journey, made with care.</p>
    <Next to="/welcome">Enter my little world</Next>
    <p className="microcopy">best experienced with a little quiet time <Heart size={11} fill="currentColor"/></p>
  </Page>
}
export function Welcome() {
  return <Page className="center-page">
    <div className="flower-scene"><Flower2 size={76} strokeWidth={1}/><span>✦</span></div>
    <Eyebrow>A little world made just for you</Eyebrow>
    <Title small>Welcome, <em>beautiful {recipientName}.</em></Title>
    <p className="lead">Take your time. There is no rush — just a few thoughts, memories and a surprise waiting ahead.</p>
    <Next to="/our-story">Discover your surprise</Next>
  </Page>
}
export function OurStory() {
  const [active,setActive]=useState(-1)
  return <Page className="content-page">
    <Eyebrow>Chapter 02 · the story</Eyebrow><Title small>Our little <em>story.</em></Title>
    <p className="lead narrow">Some moments look small while they're happening. Later, they become the ones we remember.</p>
    <div className="timeline">{story.map((item,i)=><motion.button className={`timeline-item ${active===i?'selected':''}`} key={item.title} onClick={()=>setActive(active===i?-1:i)} initial={{opacity:0,x:i%2?20:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
      <span className="timeline-dot"><Heart size={13} fill="currentColor"/></span><span className="timeline-card"><small>{item.date}</small><strong>{item.title}</strong><span>{active===i?item.text:'Tap to read this little chapter'}</span></span>
    </motion.button>)}</div>
    <Next to="/memories">Visit the memory gallery</Next>
  </Page>
}
export function Memories() {
  const [index,setIndex]=useState(0)
  const [zoom,setZoom]=useState(false)
  const item=photos[index]
  return <Page className="content-page">
    <Eyebrow>Chapter 03 · keepsakes</Eyebrow><Title small>A gallery of <em>moments.</em></Title>
    <p className="lead narrow">Add your own photographs to make this chapter truly yours.</p>
    <button className={`memory-photo ${zoom?'zoomed':''}`} onClick={()=>setZoom(v=>!v)} aria-label="Enlarge photo">
      <img src={item.src} alt={item.caption} onError={e=>{e.currentTarget.style.display='none'}}/>
      <div className="photo-placeholder"><Camera size={34}/><strong>Add your photo</strong><small>{item.src}</small></div>
      <span className="photo-caption">{item.caption}</span>
    </button>
    <div className="gallery-controls"><button className="round-control" onClick={()=>{setIndex((index+photos.length-1)%photos.length);setZoom(false)}}><ArrowLeft/></button><span>{index+1} / {photos.length}</span><button className="round-control" onClick={()=>{setIndex((index+1)%photos.length);setZoom(false)}}><ArrowRight/></button></div>
    <Next to="/love-letter">A letter from my heart</Next>
  </Page>
}
export function LoveLetter() {
  const [open,setOpen]=useState(false)
  return <Page className="center-page">
    <Eyebrow>Chapter 04 · from my heart</Eyebrow><Title small>A few words, <em>for you.</em></Title>
    {!open?<button className="letter-envelope" onClick={()=>setOpen(true)}><span className="letter-seal"><Heart fill="currentColor"/></span><strong>Tap to open your letter</strong><small>with love · {senderName}</small></button>:
      <motion.article className="letter-paper" initial={{opacity:0,scale:.9,rotateX:12}} animate={{opacity:1,scale:1,rotateX:0}}><div className="letter-top">A letter for {recipientName} <Heart size={15} fill="currentColor"/></div><p>{loveLetter}</p><div className="letter-bottom">with warmth <span>♡</span></div></motion.article>}
    <Next to="/feelings">There's more I want to tell you</Next>
  </Page>
}
export function Feelings() {
  const [index,setIndex]=useState(0)
  return <Page className="center-page">
    <Eyebrow>Chapter 05 · little truths</Eyebrow><Title small>What you <em>mean to me.</em></Title>
    <div className="feeling-card"><span className="big-quote">“</span><AnimatePresence mode="wait"><motion.p key={index} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{feelings[index]}</motion.p></AnimatePresence><span className="feeling-count">{index+1} / {feelings.length}</span></div>
    <button className="secondary-button" onClick={()=>setIndex((index+1)%feelings.length)}>Reveal another thought <Sparkles size={15}/></button>
    <Next to="/reasons">A few more reasons</Next>
  </Page>
}
export function Reasons() {
  const [flipped,setFlipped]=useState([])
  const toggle=i=>setFlipped(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])
  return <Page className="content-page">
    <Eyebrow>Chapter 06 · things I appreciate</Eyebrow><Title small>Reasons you're <em>special.</em></Title>
    <p className="lead narrow">Tap each card to reveal a little note.</p>
    <div className="reason-grid">{reasons.map((r,i)=><button key={r.title} className={`reason-card ${flipped.includes(i)?'flipped':''}`} onClick={()=>toggle(i)}><span className="reason-icon"><Heart fill="currentColor"/></span><strong>{flipped.includes(i)?r.title:r.title}</strong><span>{flipped.includes(i)?r.text:'Tap to reveal'}</span></button>)}</div>
    <Next to="/dreams">Imagine the little things</Next>
  </Page>
}
export function Dreams() {
  const [active,setActive]=useState(-1)
  return <Page className="content-page dream-page">
    <div className="dream-moon"><Moon size={72}/></div><Eyebrow>Chapter 07 · hopeful little ideas</Eyebrow><Title small>Beautiful things <em>ahead.</em></Title>
    <p className="lead narrow">Not promises or expectations — just gentle dreams worth imagining.</p>
    <div className="dream-grid">{dreams.map((d,i)=><button className="dream-card" key={d.title} onClick={()=>setActive(active===i?-1:i)}><Stars/><strong>{d.title}</strong><span>{active===i?d.text:'Tap to imagine'}</span></button>)}</div>
    <Next to="/surprise">There's a little surprise</Next>
  </Page>
}
export function Surprise() {
  const [open,setOpen]=useState(false)
  return <Page className="center-page">
    <Eyebrow>Chapter 08 · just because</Eyebrow><Title small>A little something <em>for you.</em></Title>
    <button className={`gift-button ${open?'gift-open':''}`} onClick={()=>setOpen(true)} aria-label="Open gift"><Gift size={82}/><span>✦</span></button>
    {open?<motion.div className="gift-message" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}}><h2>A small reminder</h2><p>You deserve kindness, respect and all the little things that make you smile.</p><div className="rose-line">❧ ❀ ❧</div></motion.div>:<p className="lead">Tap the gift to discover what's inside.</p>}
    <Next to="/special-moment">Open the final chapter</Next>
  </Page>
}
export function SpecialMoment() {
  return <Page className="special-page">
    <div className="special-moon"/><div className="rose-ornament">❧ ❀ ❧</div>
    <Eyebrow>Chapter 09 · before the question</Eyebrow><Title small>One thing I've been wanting <em>to ask...</em></Title>
    <p className="lead">Shreya, there is one thing I have been wanting to ask you. I wanted to make this moment thoughtful, and entirely yours to answer.</p>
    <Next to="/proposal">Take me to the question</Next>
  </Page>
}
export function Proposal() {
  const [answer,setAnswer]=useState('')
  const [moment,setMoment]=useState(false)
  return <Page className="proposal-page">
    <div className="proposal-moon"/><div className="proposal-roses">❧ ❀ ❧</div>
    <Eyebrow>The most important chapter · from {senderName}</Eyebrow>
    <h1 className="proposal-name">{recipientName}<span>❤️</span></h1>
    <p className="proposal-copy">{proposalMessage}</p>
    {!answer?<><div className="ring-box"><div className="ring-glow"/><div className="ring">◇</div></div><h2 className="proposal-question">Will you be mine?</h2>
      <div className="proposal-actions"><button className="yes-button" onClick={()=>setAnswer('yes')}>Yes, with all my heart <Heart size={17} fill="currentColor"/></button><button className="soft-button" onClick={()=>setMoment(true)}>I need a moment</button></div>
      {moment&&<p className="gentle-note">Of course, Shreya. Take all the time you need. Your feelings matter. ❤️</p>}
    </>:<motion.div className="celebration" initial={{opacity:0,scale:.75}} animate={{opacity:1,scale:1}}><div className="celebration-heart"><Heart size={58} fill="currentColor"/></div><h2>This moment means so much. ❤️</h2><p>Thank you for sharing this moment with me, Shreya. Here's to kindness, honesty and beautiful memories ahead.</p><div className="confetti">{Array.from({length:30},(_,i)=><span key={i} style={{'--i':i}}>♥</span>)}</div><Next to="/final-note">One last little note</Next></motion.div>}
  </Page>
}
export function FinalNote() {
  return <Page className="center-page">
    <div className="final-heart"><Heart size={58} fill="currentColor"/></div><Eyebrow>The end of this little journey</Eyebrow>
    <Title small>Every story deserves <em>beautiful memories.</em></Title>
    <p className="lead">Thank you for being a special part of my story, {recipientName}. Whatever tomorrow brings, I hope it brings you happiness.</p>
    <p className="signature">With love, {senderName}</p>
    <div className="stacked-links"><Next to="/">Replay the experience</Next><Next to="/qr">Create your QR keepsake</Next></div>
  </Page>
}
export function QRGenerator() {
  const url=window.location.origin
  const local=['localhost','127.0.0.1'].includes(window.location.hostname)
  const download=()=>{const canvas=document.querySelector('#journey-qr canvas');if(!canvas)return;const a=document.createElement('a');a.download='shreya-proposal-qr.png';a.href=canvas.toDataURL('image/png');a.click()}
  const copy=async()=>{try{await navigator.clipboard.writeText(url);window.alert('Website link copied!')}catch{window.prompt('Copy your website link:',url)}}
  return <Page className="center-page qr-page">
    <Eyebrow>A little surprise to share</Eyebrow><Title small>A scan away from <em>a story.</em></Title>
    <p className="lead narrow">Scan this code and enter a world made just for you.</p>
    <div className="qr-card"><div id="journey-qr"><QRCodeCanvas value={url} size={250} level="H" includeMargin bgColor="#fffaf7" fgColor="#481327"/></div><div className="qr-caption"><Heart size={13} fill="currentColor"/> made with love for {recipientName}</div></div>
    {local&&<p className="warning-note">Deploy your website first to generate a shareable QR code. This local address will not work on another phone.</p>}
    <div className="qr-actions"><button className="primary-button" onClick={download} disabled={local}><Download size={16}/> Download PNG</button><button className="secondary-button" onClick={copy}><Copy size={16}/> Copy link</button><button className="secondary-button" onClick={()=>window.print()}><Printer size={16}/> Print</button></div>
    <p className="microcopy">Test the QR code with another phone before printing.</p>
  </Page>
}
export function About() {
  return <Page className="center-page">
    <div className="final-heart"><Flower2 size={62}/></div><Eyebrow>A little note about this surprise</Eyebrow>
    <Title small>Made with care, <em>especially for you.</em></Title>
    <p className="lead">Created with love, patience and a little creativity. Made by {senderName}, especially for {recipientName}.</p>
    <Next to="/">Return to the beginning</Next>
  </Page>
}
