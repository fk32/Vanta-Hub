"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("login");
  const [tab, setTab] = useState("match");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Defender");
  const [bio, setBio] = useState("Yo");

  const initial = name ? name.charAt(0).toUpperCase() : "V";

  // 1. LOGIN - SET YOUR PROFILE
  if (view === "login") return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-5 text-center">
      <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-3xl">👑</div>
      <p className="text-[#D4AF37] text-xs tracking-[0.3em] font-bold mt-6">VANTA</p>
      <h1 className="text-4xl font-black mt-2">Vanta</h1>
      <p className="text-gray-400 text-sm">Player Profiles</p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8 max-w-sm w-full text-left">
        <h2 className="text-xl font-black text-center">Sign in to Vanta</h2>
        <p className="text-gray-400 text-sm mt-2 text-center">Your profile, stats, trophies, highlights — all in one place. Show the world what you're made of.</p>
        <label className="text-xs text-gray-400 block mt-5">YOUR DISCORD USERNAME</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. kodivrfs" className="w-full mt-1 bg-[#121212] border border-white/10 rounded-xl px-3 py-3 outline-none" />
        <label className="text-xs text-gray-400 block mt-3">POSITION</label>
        <select value={position} onChange={e => setPosition(e.target.value)} className="w-full mt-1 bg-[#121212] border border-white/10 rounded-xl px-3 py-3">
          <option>Defender</option><option>Midfielder</option><option>Attacker</option><option>Goalkeeper</option>
        </select>
        <label className="text-xs text-gray-400 block mt-3">BIO</label>
        <input value={bio} onChange={e => setBio(e.target.value)} placeholder="Yo" className="w-full mt-1 bg-[#121212] border border-white/10 rounded-xl px-3 py-3 outline-none" />
        <button onClick={() => name && setView("home")} className="w-full mt-5 bg-[#5865F2] text-white font-bold py-3 rounded-xl">🎮 Login with Discord</button>
        <p className="text-xs text-gray-500 mt-3 text-center">Only Vanta registered players can sign in.</p>
      </div>
    </main>
  );

  // 2. HOME MENU - NO LATE NIGHT
  if (view === "home") return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-5">
      <div className="text-center mt-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl font-black text-black">{initial}</div>
        <h1 className="text-3xl font-black mt-4">Welcome to <span className="text-[#D4AF37]">Vanta</span></h1>
        <p className="text-gray-400 text-sm">What are you working on today?</p>
      </div>
      <p className="text-xs tracking-widest text-gray-500 mt-10 mb-2">YOUR PROFILE</p>
      <button onClick={() => setView("profile")} className="w-full flex items-center gap-3 bg-[#121212] border border-[#D4AF37]/40 rounded-2xl p-4 text-left">
        <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center font-black text-black">{initial}</div>
        <div className="flex-1"><p className="font-bold">{name}</p><p className="text-xs text-gray-400">View your profile</p></div>
        <span>›</span>
      </button>
      <p className="text-xs tracking-widest text-gray-500 mt-8 mb-2">EXPLORE</p>
      <button onClick={() => setView("hub")} className="w-full flex items-center gap-3 bg-[#121212] border border-white/10 rounded-2xl p-4 text-left">
        <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center font-black text-[#D4AF37]">V</div>
        <div className="flex-1"><p className="font-bold">Vanta Hub</p><p className="text-xs text-gray-400">Match Centre · live scores, standings & transfers</p></div>
        <span>›</span>
      </button>
    </main>
  );

  // 3. PROFILE - YOUR NAME, NOT kodivrfs
  if (view === "profile") return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4 pb-20">
      <button onClick={() => setView("home")} className="text-gray-400 text-sm">← Back</button>
      <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-2xl p-5 mt-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-xl bg-[#D4AF37] flex items-center justify-center font-black text-black text-2xl">{initial}</div>
            <div>
              <p className="text-xl font-black">{name} <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full">Bronze</span> <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">You</span></p>
              <p className="text-xs text-gray-400 mt-1">● {position} &nbsp; 👁 0 views</p>
              <p className="text-sm mt-1">{bio}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500">POINTS</p><p className="text-2xl font-black text-[#D4AF37]">0</p>
            <p className="text-[10px] text-gray-500 mt-2">MARKET VALUE</p><p className="font-bold">0</p>
            <button onClick={() => setView("login")} className="mt-2 text-xs border border-white/20 px-2 py-1 rounded-lg">✎ Edit Profile</button>
          </div>
        </div>
        <p className="text-xs tracking-widest text-gray-500 mt-5">RANK PROGRESS</p>
        <div className="w-full h-2 bg-gray-800 rounded-full mt-2"><div className="h-2 bg-[#D4AF37] rounded-full" style={{width:"0%"}} /></div>
        <div className="flex justify-between text-xs text-gray-500 mt-1"><span>0 pts</span><span className="text-[#D4AF37]">50 pts to Silver</span></div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {[["GOALS","0","0 G+A combined"],["ASSISTS","0","0 ast/goal ratio"],["DEF. CLEAN SHEETS","0","Defensive CS"],["ALL-TIME PTS","0","Bronze"]].map(([t,v,s]) => (
          <div key={t} className="bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-4"><p className="text-[11px] text-gray-400">{t}</p><p className="text-3xl font-black">{v}</p><p className="text-xs text-gray-500">{s}</p></div>
        ))}
      </div>
      <div className="bg-[#121212] rounded-2xl p-4 mt-4">
        <p className="font-bold text-sm">| SEASON 3 — BY COMPETITION</p>
        <div className="mt-4"><div className="flex justify-between text-sm"><span>ESFL PREM (Unranked)</span><span className="text-xs text-gray-400">1 DCS &nbsp; 82 G+A</span></div><div className="h-1.5 bg-[#D4AF37] rounded-full mt-1" /></div>
        <div className="mt-4"><div className="flex justify-between text-sm"><span>CHAMPIONSHIP (Unr...</span><span className="text-xs text-gray-400">0 DCS &nbsp; 0 G+A</span></div><div className="h-1.5 bg-gray-800 rounded-full mt-1" /></div>
        <button className="w-full mt-4 bg-[#D4AF37]/20 text-[#D4AF37] font-bold py-3 rounded-xl">View Full Career →</button>
      </div>
    </main>
  );

  // 4. VANTA HUB - ALL ENGLISH
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pb-24">
      <header className="py-4 text-center border-b border-white/10 relative">
        <button onClick={() => setView("home")} className="absolute left-4 text-gray-400">←</button>
        <h1 className="font-black">Vanta Hub</h1><p className="text-[11px] text-gray-500">Match Centre</p>
      </header>
      {tab === "match" && <section className="p-4"><h2 className="text-xl font-bold">MATCH CENTRE</h2><p className="text-gray-500 text-sm">Live & Upcoming</p><div className="mt-6 bg-[#121212] rounded-xl p-6 text-center text-gray-400">No active matches.</div></section>}
      {tab === "leagues" && <section className="p-4"><h2 className="text-xl font-bold">LEAGUES</h2><p className="text-gray-500 text-sm">30 leagues • Tier A / B+ / B / C / D</p>{["VFA - Tier A","NAR - Tier A","GOAT - Tier B+","IVSA - Tier B+","VRFB - Tier B+"].map(l => <div key={l} className="bg-[#121212] p-4 rounded-xl mt-2 font-bold">{l}</div>)}</section>}
      {tab === "rankings" && <section className="p-4"><h2 className="text-xl font-bold">RANKINGS</h2><p className="text-sm mt-3 text-[#D4AF37] font-bold">TOP SCORERS</p>{[["zbie.m","222"],["soulvrfs","171"],["akawawo","157"]].map(([n,g],i) => <div key={n} className="flex justify-between bg-[#121212] p-3 rounded-lg mt-1 text-sm"><span>{i+1}. {n}</span><b>{g}</b></div>)}<p className="text-xs text-gray-500 text-center mt-4">All-time career totals across every registered player.</p></section>}
      {tab === "transfers" && <section className="p-4"><h2 className="text-xl font-bold">TRANSFER CENTRE</h2><p className="text-gray-500 text-sm">Confirmed moves across All ranked leagues</p><p className="text-sm mt-2">900 moves • £12.4B total</p><div className="bg-[#121212] p-4 rounded-xl mt-3 flex justify-between"><div><p className="font-bold">waveyy_-.</p><p className="text-xs text-gray-400">Chelsea → PSG • NAR</p></div><span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded h-fit">SIGNING</span></div><div className="bg-[#121212] p-4 rounded-xl mt-2 flex justify-between"><div><p className="font-bold">harra333</p><p className="text-xs text-gray-400">ORI → FA</p></div><span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded h-fit">RELEASED</span></div></section>}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 flex justify-around py-3 text-[11px] font-bold">
        {["match","leagues","rankings","transfers"].map(t => <button key={t} onClick={() => setTab(t)} className={tab===t ? "text-[#D4AF37]" : "text-gray-400"}>{t.toUpperCase()}</button>)}
      </nav>
    </main>
  );
}
