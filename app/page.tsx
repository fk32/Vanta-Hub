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
  if (view === "login") {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center p-5 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#5865F2]/30 blur-[100px] rounded-full" />
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#8a6d1a] rounded-[22px] flex items-center justify-center text-4xl shadow-lg">👑</div>
          <p className="text-[#D4AF37] text-xs tracking-[0.4em] font-black mt-6">VANTA</p>
          <h1 className="text-5xl font-black mt-1">Vanta</h1>
          <p className="text-gray-400 text-sm">Player Profiles • Stats • Trophies</p>
          <div className="bg-white/[0.06] border border-white/10 rounded-[24px] p-6 mt-8 w-full">
            <h2 className="text-xl font-black text-center">Sign in to Vanta</h2>
            <p className="text-gray-400 text-[13px] mt-2 text-center">Your profile, stats, trophies, highlights — all in one place.</p>
            <label className="text-[11px] font-bold text-gray-400 block mt-5">YOUR DISCORD USERNAME</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. kodi" className="w-full mt-1.5 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none" />
            <label className="text-[11px] font-bold text-gray-400 block mt-3">POSITION</label>
            <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full mt-1.5 bg-black/50 border border-white/10 rounded-xl px-3 py-3">
              <option>Attacker</option>
              <option>Midfielder</option>
              <option>Defender</option>
              <option>Goalkeeper</option>
            </select>
            <label className="text-[11px] font-bold text-gray-400 block mt-3">BIO</label>
            <input value={bio} onChange={(e) => setBio(e.target.value)} className="w-full mt-1.5 bg-black/50 border border-white/10 rounded-xl px-3 py-3 outline-none" />
            <button onClick={() => { if (name) setView("home"); }} className="w-full mt-5 bg-[#5865F2] text-white font-bold py-3.5 rounded-xl">Login with Discord</button>
            <p className="text-[11px] text-gray-500 mt-3 text-center">Only Vanta registered players can sign in.</p>
          </div>
        </div>
      </main>
    );
  }

  // 2. HOME
  if (view === "home") {
    return (
      <main className="min-h-screen bg-[#080808] text-white p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2"><div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center font-black text-black">V</div><span className="font-black tracking-widest text-sm">VANTA</span></div>
          <div className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center font-black text-black text-sm">{initial}</div>
        </div>
        <div className="mt-8">
          <h1 className="text-[32px] leading-[1.1] font-black">Welcome to<br /><span className="text-[#D4AF37]">Vanta.</span></h1>
          <p className="text-gray-400 text-sm mt-2">What are you working on today?</p>
        </div>
        <p className="text-[11px] tracking-[0.2em] text-gray-500 mt-8 mb-2 font-bold">YOUR PROFILE</p>
        <button onClick={() => setView("profile")} className="w-full flex items-center gap-4 bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-[20px] p-4 text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center font-black text-black text-xl">{initial}</div>
          <div className="flex-1"><p className="font-bold text-[17px]">{name}</p><p className="text-xs text-gray-400 mt-0.5">View your profile • {position}</p></div>
          <span className="text-gray-500 text-xl">›</span>
        </button>
        <p className="text-[11px] tracking-[0.2em] text-gray-500 mt-7 mb-2 font-bold">EXPLORE</p>
        <button onClick={() => setView("hub")} className="w-full flex items-center gap-4 bg-[#121212] border border-white/10 rounded-[20px] p-4 text-left">
          <div className="w-14 h-14 rounded-2xl bg-black border border-[#D4AF37]/30 flex items-center justify-center font-black text-[#D4AF37] text-2xl">V</div>
          <div className="flex-1"><p className="font-bold text-[17px]">Vanta Hub</p><p className="text-xs text-gray-400">Match Centre · live scores, standings &amp; transfers</p></div>
          <span className="bg-[#D4AF37] text-black text-[10px] font-black px-2 py-1 rounded-full">LIVE</span>
        </button>
      </main>
    );
  }

  // 3. PROFILE
  if (view === "profile") {
    return (
      <main className="min-h-screen bg-[#080808] text-white pb-10">
        <div className="relative h-36 bg-gradient-to-r from-[#D4AF37] via-[#8a6d1a] to-black">
          <button onClick={() => setView("home")} className="absolute top-4 left-4 bg-black/40 px-3 py-1.5 rounded-full text-xs">Back</button>
          <p className="absolute bottom-3 right-4 text-[10px] tracking-[0.3em] text-white/60 font-bold">VANTA • SEASON 3</p>
        </div>
        <div className="px-4 -mt-10">
          <div className="bg-[#121212] border border-white/10 rounded-[24px] p-5">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-[72px] h-[72px] rounded-2xl bg-[#D4AF37] flex items-center justify-center font-black text-black text-3xl border-4 border-[#121212]">{initial}</div>
                <div>
                  <p className="text-[22px] font-black leading-tight">{name}</p>
                  <div className="flex gap-1.5 mt-1.5"><span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full font-bold">BRONZE</span><span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full font-bold">YOU</span></div>
                  <p className="text-xs text-gray-400 mt-2">{position}</p>
                  <p className="text-sm mt-1 text-gray-200">{bio}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-bold">POINTS</p><p className="text-[28px] font-black text-[#D4AF37] leading-none">0</p>
                <p className="text-[10px] text-gray-500 font-bold mt-3">MARKET VALUE</p><p className="font-bold">£0</p>
                <button onClick={() => setView("login")} className="mt-2 text-[11px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Edit</button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5"><p className="text-[11px] text-gray-500 font-bold">RANK PROGRESS</p><p className="text-xs text-[#D4AF37] font-bold">50 pts to Silver</p></div>
            <div className="w-full h-2.5 bg-white/10 rounded-full mt-2"><div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "4%" }} /></div>
            <div className="flex justify-between text-[11px] text-gray-500 mt-1.5"><span>0 pts</span><span>50 pts</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-[#121212] rounded-[18px] p-4"><p className="text-[10px] text-gray-500 font-bold">GOALS</p><p className="text-[32px] font-black">0</p><p className="text-[11px] text-gray-500">0 G+A combined</p></div>
            <div className="bg-[#121212] rounded-[18px] p-4"><p className="text-[10px] text-gray-500 font-bold">ASSISTS</p><p className="text-[32px] font-black">0</p><p className="text-[11px] text-gray-500">0 ast/goal ratio</p></div>
            <div className="bg-[#121212] rounded-[18px] p-4"><p className="text-[10px] text-gray-500 font-bold">DEF. CLEAN SHEETS</p><p className="text-[32px] font-black">0</p><p className="text-[11px] text-gray-500">Defensive CS</p></div>
            <div className="bg-[#121212] rounded-[18px] p-4"><p className="text-[10px] text-gray-500 font-bold">ALL-TIME PTS</p><p className="text-[32px] font-black">0</p><p className="text-[11px] text-gray-500">Bronze</p></div>
          </div>

          <div className="bg-[#121212] rounded-[20px] p-4 mt-4">
            <p className="font-bold text-sm">SEASON 3 — BY COMPETITION</p>
            <div className="mt-4"><div className="flex justify-between text-sm"><span className="font-semibold">ESFL PREM</span><span className="text-xs text-gray-400">1 DCS · 82 G+A</span></div><div className="h-2 bg-white/10 rounded-full mt-2"><div className="h-2 bg-[#D4AF37] rounded-full w-full" /></div></div>
            <div className="mt-4"><div className="flex justify-between text-sm"><span className="font-semibold">CHAMPIONSHIP</span><span className="text-xs text-gray-400">0 DCS · 0 G+A</span></div><div className="h-2 bg-white/10 rounded-full mt-2"><div className="h-2 bg-white/20 rounded-full" style={{ width: "5%" }} /></div></div>
            <button className="w-full mt-5 bg-[#D4AF37] text-black font-black py-3.5 rounded-xl">View Full Career</button>
          </div>
        </div>
      </main>
    );
  }

  // 4. HUB
  return (
    <main className="min-h-screen bg-[#080808] text-white pb-28">
      <header className="py-4 text-center border-b border-white/10 relative">
        <button onClick={() => setView("home")} className="absolute left-4 text-gray-400">Back</button>
        <h1 className="font-black">Vanta Hub</h1><p className="text-[11px] text-gray-500">Match Centre • Season 3</p>
      </header>
      <div className="flex gap-2 p-4">
        <button onClick={() => setTab("match")} className={tab === "match" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>MATCH</button>
        <button onClick={() => setTab("leagues")} className={tab === "leagues" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>LEAGUES</button>
        <button onClick={() => setTab("rankings")} className={tab === "rankings" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>RANKINGS</button>
        <button onClick={() => setTab("transfers")} className={tab === "transfers" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>TRANSFERS</button>
      </div>

      {tab === "match" && (
        <section className="px-4"><div className="bg-[#1a1a1a] border border-white/10 rounded-[20px] p-5"><p className="text-[11px] text-[#D4AF37] font-bold">LIVE NOW</p><h2 className="text-xl font-black mt-1">Match Centre</h2><p className="text-gray-400 text-sm mt-1">No live matches right now.</p></div></section>
      )}
      {tab === "leagues" && (
        <section className="px-4"><h2 className="text-xl font-black">Leagues</h2><p className="text-gray-500 text-sm">30 leagues • Tier A / B+ / B / C / D</p>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="font-bold">VFA</span><span className="text-[11px] bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full font-bold">Tier A</span></div>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="font-bold">NAR</span><span className="text-[11px] bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full font-bold">Tier A</span></div>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="font-bold">GOAT</span><span className="text-[11px] bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full font-bold">Tier B+</span></div>
        </section>
      )}
      {tab === "rankings" && (
        <section className="px-4"><h2 className="text-xl font-black">Rankings</h2><p className="text-sm mt-3 text-[#D4AF37] font-bold">TOP SCORERS</p>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="text-sm font-bold">1. zbie.m</span><b className="text-[#D4AF37]">222 goals</b></div>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="text-sm font-bold">2. soulvrfs</span><b className="text-[#D4AF37]">171 goals</b></div>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><span className="text-sm font-bold">3. akawawo</span><b className="text-[#D4AF37]">157 goals</b></div>
        </section>
      )}
      {tab === "transfers" && (
        <section className="px-4"><h2 className="text-xl font-black">Transfer Centre</h2><p className="text-gray-500 text-sm">900 moves • £12.4B total</p>
          <div className="bg-[#121212] p-4 rounded-2xl mt-3 flex justify-between"><div><p className="font-bold">waveyy_-.</p><p className="text-xs text-gray-400">Chelsea to PSG • NAR</p></div><span className="text-[11px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full font-bold">SIGNING</span></div>
          <div className="bg-[#121212] p-4 rounded-2xl mt-2 flex justify-between"><div><p className="font-bold">harra333</p><p className="text-xs text-gray-400">ORI to FA</p></div><span className="text-[11px] bg-red-500/20 text-red-300 px-2 py-1 rounded-full font-bold">RELEASED</span></div>
        </section>
      )}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-white/10 flex justify-around py-3">
        <button onClick={() => setTab("match")} className={tab === "match" ? "text-[#D4AF37] font-black text-xs" : "text-gray-400 text-xs"}>MATCH</button>
        <button onClick={() => setTab("leagues")} className={tab === "leagues" ? "text-[#D4AF37] font-black text-xs" : "text-gray-400 text-xs"}>LEAGUES</button>
        <button onClick={() => setTab("rankings")} className={tab === "rankings" ? "text-[#D4AF37] font-black text-xs" : "text-gray-400 text-xs"}>RANKINGS</button>
        <button onClick={() => setTab("transfers")} className={tab === "transfers" ? "text-[#D4AF37] font-black text-xs" : "text-gray-400 text-xs"}>TRANSFERS</button>
      </nav>
    </main>
  );
}
