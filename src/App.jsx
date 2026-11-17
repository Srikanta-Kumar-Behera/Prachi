import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Shell } from './components/Shared'
import * as P from './pages/Pages'

function Loading(){return <div className="loading-screen"><span>✿</span><p>Preparing a little surprise…</p></div>}
export default function App(){
  const location=useLocation()
  return <Shell><Suspense fallback={<Loading/>}><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}>
    <Route path="/" element={<P.Home/>}/>
    <Route path="/welcome" element={<P.Welcome/>}/>
    <Route path="/our-story" element={<P.OurStory/>}/>
    <Route path="/memories" element={<P.Memories/>}/>
    <Route path="/love-letter" element={<P.LoveLetter/>}/>
    <Route path="/feelings" element={<P.Feelings/>}/>
    <Route path="/reasons" element={<P.Reasons/>}/>
    <Route path="/dreams" element={<P.Dreams/>}/>
    <Route path="/surprise" element={<P.Surprise/>}/>
    <Route path="/special-moment" element={<P.SpecialMoment/>}/>
    <Route path="/proposal" element={<P.Proposal/>}/>
    <Route path="/final-note" element={<P.FinalNote/>}/>
    <Route path="/qr" element={<P.QRGenerator/>}/>
    <Route path="/about" element={<P.About/>}/>
    <Route path="*" element={<P.Home/>}/>
  </Routes></AnimatePresence></Suspense></Shell>
}