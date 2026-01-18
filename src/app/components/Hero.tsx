import { ImageWithFallback } from './figma/ImageWithFallback';

const qrBlocks = [
  1, 1, 1, 0, 1,
  1, 0, 1, 0, 0,
  1, 1, 0, 1, 1,
  0, 1, 1, 0, 1,
  1, 0, 1, 1, 0
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div
        className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[color:var(--cafe-pink)]/30 blur-3xl animate-float-slow"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-10 left-6 h-72 w-72 rounded-full bg-[color:var(--cafe-blue)]/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-3 rounded-full bg-white/70 px-5 py-2 text-xs uppercase tracking-[0.32em] text-[color:var(--cafe-ink)] shadow-sm animate-float-in"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Gen Z cafe / QR-first
          </div>

          <div className="space-y-4">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-[color:var(--cafe-ink)] animate-float-in"
              style={{ fontFamily: 'var(--font-heading)', animationDelay: '0.05s' }}
            >
              NEON <span className="text-[color:var(--cafe-pink)]">BEANS</span>
            </h1>
            <p
              className="text-lg md:text-xl text-[color:var(--cafe-ink)]/80 max-w-xl animate-float-in"
              style={{ fontFamily: 'var(--font-body)', animationDelay: '0.1s' }}
            >
              Espresso, cold brew, light bites, pastries, and pasta. Order by QR or table number, track live, and keep
              the vibe going.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-float-in" style={{ animationDelay: '0.2s' }}>
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-[color:var(--cafe-ink)] shadow-sm">
              Espresso shots
            </span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-[color:var(--cafe-ink)] shadow-sm">
              Cold brew
            </span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-[color:var(--cafe-ink)] shadow-sm">
              Light bites
            </span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-[color:var(--cafe-ink)] shadow-sm">
              Pasta + pastries
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-float-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#order"
              className="px-8 py-4 rounded-full bg-[color:var(--cafe-pink)] text-white font-medium shadow-[0_18px_40px_rgba(255,77,141,0.35)] hover:translate-y-0.5 transition"
            >
              Order by QR
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full border border-[color:var(--cafe-ink)]/20 bg-white/80 text-[color:var(--cafe-ink)] hover:border-[color:var(--cafe-ink)] transition"
            >
              See the menu
            </a>
          </div>
        </div>

        <div className="relative animate-float-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel card-glow rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                Order in 2 taps
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--cafe-blue)]">Live queue</span>
            </div>

            <div className="mt-6 grid sm:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="rounded-2xl bg-white p-4 border border-black/10">
                <div className="grid grid-cols-5 gap-1">
                  {qrBlocks.map((fill, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-sm ${fill ? 'bg-[color:var(--cafe-ink)]' : 'bg-[color:var(--cafe-ink)] opacity-10'}`}
                    ></span>
                  ))}
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[color:var(--cafe-ink)]/60">Scan QR</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-[color:var(--cafe-ink)]/60">Table number</label>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      className="w-full rounded-full border border-black/10 bg-white px-4 py-2 text-[color:var(--cafe-ink)] placeholder:text-[color:var(--cafe-ink)]/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--cafe-blue)]/40"
                      placeholder="A12"
                      aria-label="Table number"
                    />
                    <button className="rounded-full bg-[color:var(--cafe-ink)] px-5 py-2 text-white hover:bg-[color:var(--cafe-blue)] transition-colors">
                      Go
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-[color:var(--cafe-cream)] px-4 py-3 text-sm text-[color:var(--cafe-ink)]">
                  <span className="h-3 w-3 rounded-full bg-[color:var(--cafe-mint)] animate-glow"></span>
                  Barista queue: 8-12 min
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                alt="Iced coffee on a cafe counter"
                className="h-44 w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[color:var(--cafe-blue)] text-white px-5 py-3 text-sm shadow-lg animate-float-slow">
            Tap to reorder your last drink
          </div>
        </div>
      </div>
    </section>
  );
}
