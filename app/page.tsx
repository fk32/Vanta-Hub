export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* HEADER */}
      <header className="border-b border-[#1A1A1A] py-5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-widest text-[#D4AF37]">VANTA</h1>
          <a href="/leagues" className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-bold text-sm">Leagues</a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-black tracking-tight">VANTA <span className="text-[#D4AF37]">HUB</span></h2>
        <p className="text-zinc-400 mt-3">VRFS Match Centre • Leagues • Stats • Live</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">
          <a href="/leagues" className="bg-[#121212] border border-[#D4AF37]/30 rounded-2xl p-6">
            <p className="text-3xl">🏆</p>
            <h3 className="font-bold text-lg mt-2">Leagues</h3>
            <p className="text-zinc-500 text-sm">Vanta Italia • Tier S</p>
          </a>
          <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6">
            <p className="text-3xl">⚽</p>
            <h3 className="font-bold text-lg mt-2">Match Centre</h3>
            <p className="text-zinc-500 text-sm">Live & Prossime partite</p>
          </div>
          <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6">
            <p className="text-3xl">📊</p>
            <h3 className="font-bold text-lg mt-2">Stats</h3>
            <p className="text-zinc-500 text-sm">Classifica • Marcatori • Assist</p>
          </div>
        </div>
      </section>
    </main>
  )
}
