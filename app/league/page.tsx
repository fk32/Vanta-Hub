const leagues = [
  { name: "Vanta Italia", tier: "TIER S", teams: 12, status: "Attiva", emoji: "🇮🇹" },
  { name: "Vanta Europe", tier: "TIER A", teams: 16, status: "Prossimamente", emoji: "🇪🇺" },
  { name: "Vanta World Cup", tier: "TIER S+", teams: 32, status: "Stagionale", emoji: "🌍" },
]

export default function Leagues() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-zinc-400 text-sm">← Torna alla Home</a>
        <h1 className="text-4xl font-black mt-4">LEAGUES <span className="text-[#D4AF37]">🏆</span></h1>
        <p className="text-zinc-400 mt-2">Scegli la tua lega VRFS</p>

        <div className="grid gap-4 mt-8">
          {leagues.map((l) => (
            <div key={l.name} className="bg-[#121212] border border-[#D4AF37]/20 rounded-2xl p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{l.emoji}</span>
                <div>
                  <h2 className="font-bold text-lg">{l.name}</h2>
                  <p className="text-zinc-500 text-sm">{l.tier} • {l.teams} squadre</p>
                </div>
              </div>
              <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1.5 rounded-full">{l.status}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
