import { BadgeCheck, Headphones, Zap } from 'lucide-react';

const loyaltyStamps = [true, true, true, true, true, true, true, false, false, false];

const vibeToggles = [
  {
    label: 'Lo-fi playlist',
    detail: 'Stream the cafe mix',
    active: true
  },
  {
    label: 'Quiet hours',
    detail: 'Lower lights + softer audio',
    active: false
  }
];

export function Perks() {
  return (
    <section id="perks" className="relative py-20 px-4">
      <div className="absolute inset-0 perks-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-[color:var(--cafe-ink)]/70">Perks</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
            Limited drops, loyalty glow, and the vibe dial
          </h2>
          <p className="mt-4 text-[color:var(--cafe-ink)]/70 max-w-2xl mx-auto">
            Keep the experience fresh with rotating drops, rewards that feel fun, and sound settings for every mood.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 card-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-orange)]">Today&apos;s drop</p>
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Matcha Citrus Tonic
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cafe-orange)]/20 text-[color:var(--cafe-orange)]">
                <Zap className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-3 text-sm text-[color:var(--cafe-ink)]/70">
              Limited-time drop with yuzu fizz, white peach, and matcha foam.
            </p>

            <div className="mt-5 rounded-2xl bg-[color:var(--cafe-cream)] px-4 py-3 text-sm text-[color:var(--cafe-ink)]">
              Next drop in 05:12:44
            </div>

            <button className="mt-5 w-full rounded-full bg-[color:var(--cafe-ink)] px-6 py-3 text-white hover:bg-[color:var(--cafe-orange)] transition-colors">
              Add to order
            </button>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 card-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-mint)]">Loyalty glow</p>
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  7 of 10 stamps
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cafe-mint)]/20 text-[color:var(--cafe-mint)]">
                <BadgeCheck className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-3 text-sm text-[color:var(--cafe-ink)]/70">
              Earn a free pastry at 10 stamps and unlock secret menu upgrades.
            </p>

            <div className="mt-5 grid grid-cols-5 gap-3">
              {loyaltyStamps.map((filled, index) => (
                <span
                  key={`stamp-${index}`}
                  className={`h-10 rounded-2xl border border-black/10 ${filled ? 'bg-[color:var(--cafe-mint)]/30' : 'bg-white'}`}
                ></span>
              ))}
            </div>

            <button className="mt-5 w-full rounded-full border border-[color:var(--cafe-mint)] text-[color:var(--cafe-ink)] px-6 py-3 hover:bg-[color:var(--cafe-mint)]/20 transition-colors">
              View rewards
            </button>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 card-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-blue)]">Sound + vibe</p>
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Dial the atmosphere
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cafe-blue)]/20 text-[color:var(--cafe-blue)]">
                <Headphones className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-3 text-sm text-[color:var(--cafe-ink)]/70">
              Pick a playlist, choose quiet hours, and keep the space comfy for everyone.
            </p>

            <div className="mt-5 space-y-3">
              {vibeToggles.map((toggle) => (
                <button
                  key={toggle.label}
                  type="button"
                  aria-pressed={toggle.active}
                  className={`w-full rounded-2xl border border-black/10 px-4 py-3 text-left transition-colors ${
                    toggle.active ? 'bg-[color:var(--cafe-blue)]/15' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[color:var(--cafe-ink)]">{toggle.label}</p>
                      <p className="text-xs text-[color:var(--cafe-ink)]/60">{toggle.detail}</p>
                    </div>
                    <span
                      className={`h-6 w-10 rounded-full border border-black/10 ${
                        toggle.active ? 'bg-[color:var(--cafe-blue)]' : 'bg-black/10'
                      }`}
                    >
                      <span
                        className={`block h-5 w-5 rounded-full bg-white transition-transform ${
                          toggle.active ? 'translate-x-4' : 'translate-x-1'
                        }`}
                      ></span>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <button className="mt-5 w-full rounded-full bg-[color:var(--cafe-ink)] px-6 py-3 text-white hover:bg-[color:var(--cafe-blue)] transition-colors">
              Save vibe settings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
