"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("login");
  const [tab, setTab] = useState("match");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Attacker");
  const [bio, setBio] = useState("TEST");
  const initial = name ? name.charAt(0).toUpperCase() : "V";

  // 1. LOGIN
  if (view === "login") return (
    <main className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#5865F2]/30 blur-[100px] rounded-full" />
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#8a6d1a] rounded-[22px] flex items-center justify-center text-4xl shadow-[0_0_40px_#D4AF37]/40 rotate-3">👑</div>
        <p className="text-[#D4AF37] text-xs tracking-[0.4em] font-black mt-6">VANTA</p>
        <h1 className="text-5xl font-black mt-1 tracking-tight">Vanta</h1>
        <p className="text-gray-400 text-sm">Player Profiles • Stats • Trophies</p>
        <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[24px] p-6 mt-8 w-full shadow-2xl">
          <h2 className="text-xl font-black text-center">Sign in to Vanta</h2>
          <p className="text-gray-400 text-[13px] mt-2 text-center leading-relaxed">Your profile, stats, trophies, highlights — all in one place. Show the world what you're made of.</p>
          <label className="text-[11px] font-bold tracking-wider text-gray-400 block mt-5">YOUR DISCORD USERNAME</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. kodi" className="w-full mt-1.5 bg-black/50 border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 outline-none transition" />
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div><label className="text-[11px] font-bold tracking-wider text-gray-400">POSITION</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full mt-1.5 bg-black/50 border border-white/10 rounded-xl px-3 py-3.5"><option>Attacker</option><option>Midfielder</option><option>Defender</option><option>Goalkeeper</option></select></div>
            <div><label className="text-[11px] font-bold tracking-wider text-gray-400">BIO</label>
            <input value={bio} onChange={e => setBio(e.target.value)} className="w-full mt-1.5 bg-black/50 border border-white/10 rounded-xl px-3 py-3.5 outline-none" /></div>
          </div>
          <button onClick={() => name && setView("home")} className="w-full mt-5 bg-[#5865F2] hover:bg-[#4752C4] active:scale-[0.98] transition text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#5865F2]/30">🎮 Login with Discord</button>
          <p className="text-[11px] text-gray-500 mt-3 text-center">Only Vanta registered players can sign in.</p>
        </div>
      </div>
    </main>
  );

  // 2. HOME
  if (view === "home") return (
    <main className="min-h-screen bg-[#080808] text-white p-5">
      <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center font-black text-black">V</div><span className="font-black tracking-widest text-sm">VANTA</span></div><div className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center font-black text-black text-sm">{initial}</div></div>
      <div className="mt-8"><h1 className="text-[32px] leading-[1.1] font-black">Welcome to<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF2B0]">Vanta.</span></h1><p className="text-gray-400 text-sm mt-2">What are you working on today?</p></div>
      <div className="mt-8 flex gap-2"><span className="text-xs bg-[#D4AF37]/15 text-[#D4AF37] px-3 py-1.5 rounded-full font-bold">● Season 3 Live</span><span className="text-xs bg-white/5 px-3 py-1.5 rounded-full text-gray-300">30 Leagues</span><span className="text-xs bg-white/5 px-3 py-1.5 rounded-full text-gray-300">900 Transfers</span></div>
      <p className="text-[11px] tracking-[0.2em] text-gray-500 mt-8 mb-2 font-bold">YOUR PROFILE</p>
      <button onClick={() => setView("profile")} className="w-full flex items-center gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-[20px] p-4 text-left shadow-xl transition active:scale-[0.98]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8a6d1a] flex items-center justify-center font-black text-black text-xl shadow-lg shadow-[#D4AF37]/30">{initial}</div>
        <div className="flex-1"><p className="font-bold text-[17px]">{name} <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded-full ml-1">BRONZE</span></p><p className="text-xs text-gray-400 mt-0.5">View your profile • {position}</p><div className="w-full h-1 bg-white/10 rounded-full mt-2"><div className="h-1 bg-[#D4AF37] rounded-full w-[8%]" /></div></div>
        <span className="text-gray-500 text-xl">›</span>
      </button>
      <p className="text-[11px] tracking-[0.2em] text-gray-500 mt-7 mb-2 font-bold">EXPLORE</p>
      <button onClick={() => setView("hub")} className="w-full flex items-center gap-4 bg-[#121212] border border-white/10 hover:border-white/30 rounded-[20px] p-4 text-left transition active:scale-[0.98]">
        <div className="w-14 h-14 rounded-2xl bg-black border border-[#D4AF37]/30 flex items-center justify-center font-black text-[#D4AF37] text-2xl">V</div>
        <div className="flex-1"><p className="font-bold text-[17px]">Vanta Hub</p><p className="text-xs text-gray-400">Match Centre · live scores, standings & transfers</p></div>
        <span className="bg-[#D4AF37] text-black text-[10px] font-black px-2 py-1 rounded-full">LIVE</span>
      </button>
      <div className="grid grid-cols-3 gap-3 mt-5">{[["🏆","Trophies","Coming"],["📈","Rank","Bronze"],["⚡","Points","0"]].map(([e,t,v]) => <div key={t} className="bg-[#121212] border border-white/5 rounded-2xl p-3 text-center"><p className="text-xl">{e}</p><p className="text-[10px] text-gray-500 mt-1">{t}</p><p className="font-bold text-sm">{v}</p></div>)}</div>
    </main>
  );

  // 3. PROFILE
  if (view === "profile") return (
    <main className="min-h-screen bg-[#080808] text-white pb-10">
      <div className="relative h-36 bg-gradient-to-r from-[#D4AF37] via-[#8a6d1a] to-black overflow-hidden"><button onClick={() => setView("home")} className="absolute top-4 left-4 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full text-xs">← Back</button><p className="absolute bottom-3 right-4 text-[10px] tracking-[0.3em] text-white/60 font-bold">VANTA • SEASON 3</p></div>
      <div className="px-4 -mt-10">
        <div className="bg-[#121212] border border-white/10 rounded-[24px] p-5 shadow-2xl">
          <div className="flex justify-between items-start">
            <div className="flex gap-3"><div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8a6d1a] flex items-center justify-center font-black text-black text-3xl border-4 border-[#121212] shadow-lg shadow-[#D4AF37]/20">{initial}</div>
            <div><p className="text-[22px] font-black leading-tight">{name}</p><div className="flex gap-1.5 mt-1.5"><span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full font-bold">BRONZE</span><span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full font-bold">YOU</span></div><p className="text-xs text-gray-400 mt-2">● {position}</p><p className="text-sm mt-1 text-gray-200">{bio}</p></div></div>
            <div className="text-right"><p className="text-[10px] tracking-wider text-gray-500 font-bold">POINTS</p><p className="text-[28px] font-black text-[#D4AF37] leading-none">0</p><p className="text-[10px] tracking-wider text-gray-500 font-bold mt-3">MARKET VALUE</p><p className="font-bold">£0</p><button onClick={() => setView("login")} className="mt-2 text-[11px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">✎ Edit</button></div>
          </div>
          <div className="flex justify-between items-center mt-5"><p className="text-[11px] tracking-[0.2em] text-gray-500 font-bold">RANK PROGRESS</p><p className="text-xs text-[#D4AF37] font-bold">50 pts to Silver</p></div>
          <div className="w-full h-2.5 bg-white/10 rounded-full mt-2 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF2B0] rounded-full" style={{width:"4%"}} /></div>
          <div className="flex justify-between text-[11px] text-gray-500 mt-1.5"><span>0 pts</span><span>50 pts</span></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[["⚽","GOALS","0","0 G+A combined"],["🎯","ASSISTS","0","0 ast/goal ratio"],["🛡️","DEF. CLEAN SHEETS","0","Defensive CS"],["⭐","ALL-TIME PTS","0","Bronze"]].map(([e,t,v,s]) => (
            <div key={t} className="bg-[#121212] border border-white/5 rounded-[18px] p-4"><p className="text-lg">{e}</p><p className="text-[10px] tracking-wider text-gray-500 font-bold mt-1">{t}</p><p className="text-[32px] font-black leading-none mt-1">{v}</p><p className="text-[11px] text-gray-500 mt-1">{s}</p></div>
          ))}
        </div>
        <div className="bg-[#121212] border border-white/5 rounded-[20px] p-4 mt-4">
          <p className="font-bold text-sm">SEASON 3 — BY COMPETITION</p>
          <div className="mt-4"><div className="flex justify-between text-sm"><span className="font-semibold">ESFL PREM</span><span className="text-xs text-gray-400">1 DCS · 82 G+A</span></div><div className="h-2 bg-white/10 rounded-full mt-2"><div className="h-2 bg-[#D4AF37] rounded-full w-full" /></div></div>
          <div className="mt-4"><div className="flex justify-between text-sm"><span className="font-semibold">CHAMPIONSHIP</span><span className="text-xs text-gray-400">0 DCS · 0 G+A</span></div><div className="h-2 bg-white/10 rounded-full mt-2"><div className="h-2 bg-white/20 rounded-full w-[5%]" /></div></div>
          <button className="w-full mt-5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-black py-3.5 rounded-xl">View Full Career →</button>
        </div>
      </div>
    </main>
  );

  // 4. HUB
  return (
    <main className="min-h-screen bg-[#080808] text-white pb-28">
      <header className="sticky top-0 z-10 bg-[#080808]/90 backdrop-blur py-4 text-center border-b border-white/10 relative"><button onClick={() => setView("home")} className="absolute left-4 text-gray-400">←</button><h1 className="font-black tracking-wide">Vanta Hub</h1><p className="text-[11px] text-gray-500">Match Centre • Season 3</p></header>
      <div className="flex gap-2 p-4 overflow-x-auto">{["match","leagues","rankings","transfers"].map(t => <button key={t} onClick={() => setTab(t)} className={tab===t ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs whitespace-nowrap shadow-lg shadow-[#D4AF37]/30" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs whitespace-nowrap"}>{t.toUpperCase()}</button>)}</div>
      {tab === "match" && <section className="px-4"><div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-[20px] p-5"><p className="text-[11px] tracking-widest text-[#D4AF37] font-bold">LIVE NOW</p><h2 className="text-xl font-black mt-1">Match Centre</h2><p className="text-gray-400 text-sm mt-1">No live matches right now. Check upcoming fixtures.</p><button className="mt-4 bg-white text-black font-bold text-xs px-4 py-2.5 rounded-full">View Fixtures</button></div><p className="text-xs text-gray-500 mt-4 font-bold tracking-wider">UPCOMING</p><div className="bg-[#121212] rounded-2xl p-4 mt-2 flex justify-between items-center"><span className="text-sm font-bold">Vanta Cup • Semi Final</span><span className="text-[11px] bg-white/5 px-2 py-1 rounded-full">Tonight 20:00</span></div></section>}
      {tab === "leagues" && <section className="px-4"><h2 className="text-xl font-black">Leagues</h2><p className="text-gray-500 text-sm">30 leagues • Tier A / B+ / B / C / D</p>{[["VFA","Tier A","bg-yellow-400/20 text-yellow-300"],["NAR","Tier A","bg-yellow-400/20 text-yellow-300"],["GOAT","Tier B+","bg-purple-400/20 text-purple-300"],["IVSA","Tier B+","bg-purple-400/20 text-purple-300"],["VRFB","Tier B+","bg-purple-400/20 text-purple-300"]].map(([n,t,c]) => <div key={n} className="bg-[#121212] border border-white/5 p-4 rounded-2xl mt-2 flex justify-between items-center"><span className="font-bold">{n}</span><span className={`text-[11px] px-2.5 py-1 rounded-full font-bold ${c}`}>{t}</span></div>)}</section>}
      {tab === "rankings" && <section className="px-4"><h2 className="text-xl font-black">Rankings</h2><p className="text-sm mt-3 text-[#D4AF37] font-bold">🏆 TOP SCORERS</p>{[["zbie.m","222","🥇"],["soulvrfs","171","🥈"],["akawawo","157","🥉"]].map(([n,g,m]) => <div key={n} className="flex justify-between items-center bg-[#121212] border border-white/5 p-4 rounded-2xl mt-2"><span className="text-sm font-bold">{m} {n}</span><b className="text-[#D4AF37]">{g} goals</b></div>)}<p className="text-xs text-gray-500 text-center mt-4">All-time career totals across every registered player.</p></section>}
      {tab === "transfers" && <section className="px-4"><h2 className="text-xl font-black">Transfer Centre</h2><p className="text-gray-500 text-sm">900 moves • £12.4B total</p><div className="bg-[#121212] border border-white/5 p-4 rounded-2xl mt-3 flex justify-between items-center"><div><p className="font-bold">waveyy_-.</p><p className="text-xs text-gray-400">Chelsea → PSG • NAR</p></div><span className="text-[11px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full font-bold">SIGNING</span></div><div className="bg-[#121212] border border-white/5 p-4 rounded-2xl mt-2 flex justify-between items-center"><div><p className="font-bold">harra333</p><p className="text-xs text-gray-400">ORI → FA</p></div><span className="text-[11px] bg-red-500/20 text-red-300 px-2.5 py-1 rounded-full font-bold">RELEASED</span></div></section>}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur border-t border-white/10 flex justify-around py-3"><div className="w-full max-w-md flex justify-around">{["match","leagues","rankings","transfers"].map(t => <button key={t} onClick={() => setTab(t)} className={tab===t ? "text-[#D4AF37] font-black" : "text-gray-400"}><p className="text-lg">{t==="match"?"⚽":t==="leagues"?"🏆":t==="rankings"?"📈":"🔄"}</p><p className="text-[10px] tracking-wider">{t.toUpperCase()}</p></button>)}</div></nav>
    </main>
  );
}
