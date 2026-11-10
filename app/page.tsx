"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("login");
  const [tab, setTab] = useState("match");
  const [matchFilter, setMatchFilter] = useState("live");
  const [leagueFilter, setLeagueFilter] = useState("All");
  const [rankFilter, setRankFilter] = useState("Goals");
  const [transferFilter, setTransferFilter] = useState("All");
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
              <option>Attacker</option><option>Midfielder</option><option>Defender</option><option>Goalkeeper</option>
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
        <div className="mt-8"><h1 className="text-[32px] leading-[1.1] font-black">Welcome to<br /><span className="text-[#D4AF37]">Vanta.</span></h1><p className="text-gray-400 text-sm mt-2">What are you working on today?</p></div>
        <p className="text-[11px] tracking-[0.2em] text-gray-500 mt-8 mb-2 font-bold">YOUR PROFILE</p>
        <button onClick={() => setView("profile")} className="w-full flex items-center gap-4 bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-[20px] p-4 text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center font-black text-black text-xl">{initial}</div>
          <div className="flex-1"><p className="font-bold text-[17px]">{name}</p><p className="text-xs text-gray-400 mt-0.5">View your profile • {position}</p></div><span className="text-gray-500 text-xl">›</span>
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
        <div className="relative h-24 bg-gradient-to-r from-[#D4AF37] via-[#8a6d1a] to-black">
          <button onClick={() => setView("home")} className="absolute top-4 left-4 bg-black/40 px-3 py-1.5 rounded-full text-xs z-10">Back</button>
          <p className="absolute bottom-3 right-4 text-[10px] tracking-[0.3em] text-white/60 font-bold">VANTA</p>
        </div>
        <div className="px-4 mt-4">
          <div className="bg-[#121212] border border-white/10 rounded-[24px] p-5">
            <div className="flex justify-between items-start gap-3">
              <div className="flex gap-3 min-w-0">
                <div className="w-[68px] h-[68px] shrink-0 rounded-2xl bg-[#D4AF37] flex items-center justify-center font-black text-black text-3xl">{initial}</div>
                <div className="min-w-0"><p className="text-[22px] font-black leading-tight truncate">{name}</p>
                <div className="flex gap-1.5 mt-2 flex-wrap"><span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full font-bold">BRONZE</span><span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full font-bold">YOU</span></div>
                <p className="text-xs text-gray-400 mt-2">{position}</p><p className="text-sm mt-1 text-gray-200 break-words">{bio}</p></div>
              </div>
              <div className="text-right shrink-0"><p className="text-[10px] text-gray-500 font-bold">POINTS</p><p className="text-[28px] font-black text-[#D4AF37] leading-none">0</p><p className="text-[10px] text-gray-500 font-bold mt-3">MARKET VALUE</p><p className="font-bold">£0</p><button onClick={() => setView("login")} className="mt-2 text-[11px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Edit</button></div>
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
            <p className="font-bold text-sm">BY COMPETITION</p>
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
        <h1 className="font-black">Vanta Hub</h1><p className="text-[11px] text-gray-500">Match Centre</p>
      </header>
      <div className="flex gap-2 p-4">
        <button onClick={() => setTab("match")} className={tab === "match" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>MATCH</button>
        <button onClick={() => setTab("leagues")} className={tab === "leagues" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>LEAGUES</button>
        <button onClick={() => setTab("rankings")} className={tab === "rankings" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>RANKINGS</button>
        <button onClick={() => setTab("transfers")} className={tab === "transfers" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 text-gray-300 px-4 py-2 rounded-full text-xs"}>TRANSFERS</button>
      </div>

      {/* MATCH - già migliorato */}
      {tab === "match" && (
        <section className="px-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">LIVE NOW</p><p className="text-xl font-black text-red-400">2</p></div>
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">TONIGHT</p><p className="text-xl font-black">6</p></div>
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">GOALS TODAY</p><p className="text-xl font-black text-[#D4AF37]">14</p></div>
          </div>
          <div className="flex gap-2 mb-4">
            <button onClick={() => setMatchFilter("live")} className={matchFilter === "live" ? "bg-red-500 text-white font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>● LIVE</button>
            <button onClick={() => setMatchFilter("upcoming")} className={matchFilter === "upcoming" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>UPCOMING</button>
            <button onClick={() => setMatchFilter("results")} className={matchFilter === "results" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>RESULTS</button>
          </div>
          {matchFilter === "live" && (
            <div>
              <div className="bg-gradient-to-br from-[#1a1505] to-[#121212] border border-red-500/30 rounded-[20px] p-4 mb-3">
                <div className="flex justify-between"><span className="text-[10px] bg-red-500 text-white px-2.5 py-1 rounded-full font-black animate-pulse">● LIVE • 67&apos;</span><span className="text-[11px] text-gray-400">VFA • Tier A</span></div>
                <div className="flex items-center justify-between mt-4"><div className="flex-1 text-center"><div className="w-11 h-11 mx-auto bg-blue-600 rounded-full flex items-center justify-center font-black">C</div><p className="font-bold text-sm mt-2">Chelsea</p></div><div className="text-center"><p className="text-[34px] font-black">3 - 2</p></div><div className="flex-1 text-center"><div className="w-11 h-11 mx-auto bg-red-600 rounded-full flex items-center justify-center font-black">A</div><p className="font-bold text-sm mt-2">Arsenal</p></div></div>
                <p className="text-[11px] text-gray-400 text-center mt-2">Last goal: zbie.m 64&apos; • Stamford Bridge</p><button className="w-full mt-3 bg-white text-black font-bold text-xs py-2.5 rounded-full">View Match Details →</button>
              </div>
              <div className="bg-[#121212] rounded-[20px] p-4"><div className="flex justify-between"><span className="text-[10px] bg-red-500/20 text-red-400 px-2.5 py-1 rounded-full font-bold">● LIVE • 34&apos;</span><span className="text-[11px] text-gray-400">NAR • Tier A</span></div><div className="flex items-center justify-between mt-4"><div className="flex-1 text-center"><p className="font-bold">PSG</p></div><p className="text-[34px] font-black">1 - 1</p><div className="flex-1 text-center"><p className="font-bold">Real Madrid</p></div></div></div>
            </div>
          )}
          {matchFilter === "upcoming" && (
            <div>
              <div className="bg-[#121212] rounded-2xl p-4 flex justify-between mb-2"><div><p className="font-bold text-sm">Man City vs Liverpool</p><p className="text-xs text-gray-400">Vanta Cup • Semi Final</p></div><p className="font-black text-[#D4AF37]">20:00</p></div>
              <div className="bg-[#121212] rounded-2xl p-4 flex justify-between"><div><p className="font-bold text-sm">Barcelona vs Bayern</p><p className="text-xs text-gray-400">GOAT • Tier B+</p></div><p className="font-black">21:00</p></div>
            </div>
          )}
          {matchFilter === "results" && (
            <div>
              <div className="bg-[#121212] rounded-2xl p-4 flex justify-between mb-2"><div><p className="font-bold text-sm">Chelsea 4 - 1 Man Utd</p><p className="text-xs text-gray-400">VFA • zbie.m hat-trick</p></div><span className="text-[10px] bg-white/10 px-2 py-1 rounded-full font-bold">FT</span></div>
              <div className="bg-[#121212] rounded-2xl p-4 flex justify-between"><div><p className="font-bold text-sm">PSG 2 - 0 Lyon</p><p className="text-xs text-gray-400">NAR • waveyy_-. 2 goals</p></div><span className="text-[10px] bg-white/10 px-2 py-1 rounded-full font-bold">FT</span></div>
            </div>
          )}
        </section>
      )}

      {/* LEAGUES MIGLIORATA */}
      {tab === "leagues" && (
        <section className="px-4">
          <div className="flex justify-between items-end"><div><h2 className="text-[24px] font-black leading-none">Leagues</h2><p className="text-gray-500 text-[13px] mt-1">30 leagues • 1,240 players • 86 clubs</p></div><span className="bg-[#D4AF37]/15 text-[#D4AF37] text-[11px] font-bold px-2.5 py-1 rounded-full">● Season Live</span></div>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
            <button onClick={() => setLeagueFilter("All")} className={leagueFilter === "All" ? "bg-white text-black font-black px-4 py-2 rounded-full text-xs whitespace-nowrap" : "bg-white/5 px-4 py-2 rounded-full text-xs whitespace-nowrap"}>All Tiers</button>
            <button onClick={() => setLeagueFilter("A")} className={leagueFilter === "A" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs whitespace-nowrap" : "bg-white/5 px-4 py-2 rounded-full text-xs whitespace-nowrap"}>Tier A</button>
            <button onClick={() => setLeagueFilter("B+")} className={leagueFilter === "B+" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs whitespace-nowrap" : "bg-white/5 px-4 py-2 rounded-full text-xs whitespace-nowrap"}>Tier B+</button>
            <button onClick={() => setLeagueFilter("B")} className={leagueFilter === "B" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs whitespace-nowrap" : "bg-white/5 px-4 py-2 rounded-full text-xs whitespace-nowrap"}>Tier B</button>
          </div>

          {/* FEATURED LEAGUE */}
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#8a6d1a] rounded-[20px] p-4 mt-4 text-black">
            <div className="flex justify-between"><span className="text-[10px] bg-black/20 px-2 py-1 rounded-full font-black">⭐ FEATURED • TIER A</span><span className="text-[11px] font-bold">Week 12</span></div>
            <h3 className="text-[22px] font-black mt-2">VFA — Vanta Football Alliance</h3>
            <p className="text-[12px] opacity-70">The top flight. Where legends are made.</p>
            <div className="grid grid-cols-3 gap-2 mt-3 text-center"><div className="bg-black/15 rounded-xl p-2"><p className="font-black">12</p><p className="text-[10px]">CLUBS</p></div><div className="bg-black/15 rounded-xl p-2"><p className="font-black">148</p><p className="text-[10px]">PLAYERS</p></div><div className="bg-black/15 rounded-xl p-2"><p className="font-black">1.2K</p><p className="text-[10px]">GOALS</p></div></div>
            <div className="bg-black text-white rounded-xl p-3 mt-3 flex justify-between items-center"><div><p className="text-[10px] text-gray-400">LEADER</p><p className="font-bold text-sm">1. Chelsea • 31 pts</p></div><span>›</span></div>
          </div>

          {/* LISTA LEGHE */}
          <p className="text-[11px] tracking-wider text-gray-500 font-bold mt-5 mb-2">ALL LEAGUES</p>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex gap-3 items-center"><div className="w-12 h-12 bg-yellow-400/20 rounded-2xl flex items-center justify-center font-black text-yellow-300">V</div><div className="flex-1"><div className="flex gap-2 items-center"><p className="font-bold">VFA</p><span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">Tier A</span></div><p className="text-xs text-gray-400 mt-0.5">Leader: Chelsea • Top scorer: zbie.m (222)</p></div><span className="text-gray-500">›</span></div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center font-black text-red-300">N</div><div className="flex-1"><div className="flex gap-2 items-center"><p className="font-bold">NAR</p><span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">Tier A</span></div><p className="text-xs text-gray-400 mt-0.5">Leader: PSG • Top scorer: waveyy_-. (98)</p></div><span className="text-gray-500">›</span></div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center font-black text-purple-300">G</div><div className="flex-1"><div className="flex gap-2 items-center"><p className="font-bold">GOAT</p><span className="text-[10px] bg-purple-400/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">Tier B+</span></div><p className="text-xs text-gray-400 mt-0.5">Leader: Real Madrid • Top scorer: akawawo (157)</p></div><span className="text-gray-500">›</span></div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center font-black text-blue-300">I</div><div className="flex-1"><div className="flex gap-2 items-center"><p className="font-bold">IVSA</p><span className="text-[10px] bg-purple-400/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">Tier B+</span></div><p className="text-xs text-gray-400 mt-0.5">Leader: Inter • Top scorer: soulvrfs (171)</p></div><span className="text-gray-500">›</span></div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center font-black text-emerald-300">V</div><div className="flex-1"><div className="flex gap-2 items-center"><p className="font-bold">VRFB</p><span className="text-[10px] bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Tier B</span></div><p className="text-xs text-gray-400 mt-0.5">Leader: Ajax • 24 pts</p></div><span className="text-gray-500">›</span></div>
        </section>
      )}

      {/* RANKINGS MIGLIORATA */}
      {tab === "rankings" && (
        <section className="px-4">
          <h2 className="text-[24px] font-black">Rankings</h2>
          <p className="text-gray-500 text-[13px]">All-time career totals • Updated live</p>
          <div className="flex gap-2 mt-4">
            <button onClick={() => setRankFilter("Goals")} className={rankFilter === "Goals" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>⚽ Goals</button>
            <button onClick={() => setRankFilter("Assists")} className={rankFilter === "Assists" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>🎯 Assists</button>
            <button onClick={() => setRankFilter("Points")} className={rankFilter === "Points" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>⭐ Points</button>
          </div>

          {/* PODIO */}
          <div className="flex items-end justify-center gap-3 mt-6">
            <div className="flex-1 text-center"><div className="w-12 h-12 mx-auto bg-[#C0C0C0] rounded-full flex items-center justify-center font-black text-black">S</div><p className="text-[11px] font-bold mt-1">soulvrfs</p><p className="text-[10px] text-gray-400">171 goals</p><div className="bg-[#2a2a2a] rounded-t-xl pt-2 pb-3 mt-2"><p className="text-xl font-black text-[#C0C0C0]">2</p></div></div>
            <div className="flex-1 text-center"><div className="text-xl">👑</div><div className="w-14 h-14 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center font-black text-black text-lg border-4 border-[#D4AF37]/30">Z</div><p className="text-[12px] font-bold mt-1">zbie.m</p><p className="text-[10px] text-[#D4AF37]">222 goals • Chelsea</p><div className="bg-[#D4AF37] rounded-t-xl pt-3 pb-4 mt-2 text-black"><p className="text-2xl font-black">1</p></div></div>
            <div className="flex-1 text-center"><div className="w-12 h-12 mx-auto bg-[#CD7F32] rounded-full flex items-center justify-center font-black text-black">A</div><p className="text-[11px] font-bold mt-1">akawawo</p><p className="text-[10px] text-gray-400">157 goals</p><div className="bg-[#2a2a2a] rounded-t-xl pt-2 pb-3 mt-2"><p className="text-xl font-black text-[#CD7F32]">3</p></div></div>
          </div>

          {/* LISTA */}
          <p className="text-[11px] tracking-wider text-gray-500 font-bold mt-4 mb-2">FULL LEADERBOARD</p>
          <div className="bg-[#121212] border border-[#D4AF37]/20 rounded-2xl p-3 flex items-center gap-3"><span className="font-black w-5 text-center text-[#D4AF37]">1</span><div className="w-9 h-9 bg-[#D4AF37] rounded-full flex items-center justify-center font-black text-black text-sm">Z</div><div className="flex-1"><p className="font-bold text-sm">zbie.m <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded-full ml-1">GOLD</span></p><p className="text-[11px] text-gray-400">Chelsea • Attacker</p></div><div className="text-right"><p className="font-black text-[#D4AF37]">222</p><p className="text-[10px] text-gray-500">GOALS</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-3 flex items-center gap-3 mt-2"><span className="font-black w-5 text-center">2</span><div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center font-black text-sm">S</div><div className="flex-1"><p className="font-bold text-sm">soulvrfs</p><p className="text-[11px] text-gray-400">Inter • Attacker</p></div><div className="text-right"><p className="font-black">171</p><p className="text-[10px] text-gray-500">GOALS</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-3 flex items-center gap-3 mt-2"><span className="font-black w-5 text-center">3</span><div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center font-black text-sm">A</div><div className="flex-1"><p className="font-bold text-sm">akawawo</p><p className="text-[11px] text-gray-400">Real Madrid • Attacker</p></div><div className="text-right"><p className="font-black">157</p><p className="text-[10px] text-gray-500">GOALS</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-3 flex items-center gap-3 mt-2"><span className="font-black w-5 text-center text-gray-500">4</span><div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center font-black text-sm">W</div><div className="flex-1"><p className="font-bold text-sm">waveyy_-.</p><p className="text-[11px] text-gray-400">PSG • Midfielder</p></div><div className="text-right"><p className="font-black">98</p><p className="text-[10px] text-gray-500">GOALS</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-3 flex items-center gap-3 mt-2"><span className="font-black w-5 text-center text-gray-500">5</span><div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center font-black text-sm">K</div><div className="flex-1"><p className="font-bold text-sm">kodi</p><p className="text-[11px] text-gray-400">Attacker • You</p></div><div className="text-right"><p className="font-black">82</p><p className="text-[10px] text-gray-500">G+A</p></div></div>
        </section>
      )}

      {/* TRANSFERS MIGLIORATA */}
      {tab === "transfers" && (
        <section className="px-4">
          <h2 className="text-[24px] font-black">Transfer Centre</h2>
          <p className="text-gray-500 text-[13px]">900 moves • £12.4B total spent</p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">TODAY</p><p className="font-black">12</p></div>
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">BIGGEST FEE</p><p className="font-black text-[#D4AF37]">£210M</p></div>
            <div className="bg-[#121212] rounded-2xl p-3 text-center"><p className="text-[10px] text-gray-500 font-bold">FREE AGENTS</p><p className="font-black">84</p></div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => setTransferFilter("All")} className={transferFilter === "All" ? "bg-white text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>All</button>
            <button onClick={() => setTransferFilter("Signings")} className={transferFilter === "Signings" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>Signings</button>
            <button onClick={() => setTransferFilter("Released")} className={transferFilter === "Released" ? "bg-[#D4AF37] text-black font-black px-4 py-2 rounded-full text-xs" : "bg-white/5 px-4 py-2 rounded-full text-xs"}>Released</button>
          </div>

          <p className="text-[11px] tracking-wider text-gray-500 font-bold mt-5 mb-2">🔥 BREAKING • JUST NOW</p>
          <div className="bg-gradient-to-br from-[#1a1505] to-[#121212] border border-[#D4AF37]/30 rounded-[20px] p-4">
            <div className="flex gap-3 items-center"><div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center font-black text-black">W</div><div className="flex-1"><p className="font-black">waveyy_-.</p><p className="text-[11px] text-gray-400">Midfielder • 98 goals • 19 y/o</p></div><span className="text-[10px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full font-bold">SIGNING</span></div>
            <div className="flex items-center justify-between bg-black/30 rounded-xl p-3 mt-3"><div className="text-center flex-1"><div className="w-8 h-8 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-xs font-black">C</div><p className="text-xs font-bold mt-1">Chelsea</p></div><div className="text-center"><p className="text-gray-500 text-lg">→</p><p className="text-[10px] text-gray-400">NAR</p></div><div className="text-center flex-1"><div className="w-8 h-8 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center text-xs font-black text-black">P</div><p className="text-xs font-bold mt-1">PSG</p></div></div>
            <div className="flex justify-between mt-3"><span className="text-[11px] text-gray-400">Fee</span><span className="font-black text-[#D4AF37]">£210M • Record!</span></div>
            <div className="flex justify-between mt-1"><span className="text-[11px] text-gray-400">Contract</span><span className="text-[11px] font-bold">3 seasons • £45M / season</span></div>
          </div>

          <p className="text-[11px] tracking-wider text-gray-500 font-bold mt-5 mb-2">RECENT MOVES</p>
          <div className="bg-[#121212] rounded-2xl p-4 flex gap-3 items-center"><div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-black">H</div><div className="flex-1"><p className="font-bold text-sm">harra333</p><p className="text-xs text-gray-400">ORI → Free Agent</p><p className="text-[10px] text-gray-500 mt-0.5">2 hours ago</p></div><div className="text-right"><span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded-full font-bold">RELEASED</span><p className="text-[11px] font-bold mt-1">Free</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center font-black text-emerald-300">Z</div><div className="flex-1"><p className="font-bold text-sm">zbie.m</p><p className="text-xs text-gray-400">FA → Chelsea</p><p className="text-[10px] text-gray-500 mt-0.5">Yesterday</p></div><div className="text-right"><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full font-bold">SIGNED</span><p className="text-[11px] font-bold mt-1">£185M</p></div></div>
          <div className="bg-[#121212] rounded-2xl p-4 flex gap-3 items-center mt-2"><div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-black">S</div><div className="flex-1"><p className="font-bold text-sm">soulvrfs</p><p className="text-xs text-gray-400">Milan → Inter</p><p className="text-[10px] text-gray-500 mt-0.5">Yesterday</p></div><div className="text-right"><span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full font-bold">LOAN</span><p className="text-[11px] font-bold mt-1">£12M</p></div></div>
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
