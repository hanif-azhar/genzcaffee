import { QrCode, Smartphone, Sparkles, Table } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const orderSteps = [
  {
    title: 'Scan the QR',
    description: 'Auto-detects your table or opens the menu instantly.',
    icon: QrCode
  },
  {
    title: 'Drop your table',
    description: 'Manual table number entry is always available.',
    icon: Table
  },
  {
    title: 'Track the queue',
    description: 'Live status updates straight to your phone.',
    icon: Smartphone
  },
  {
    title: 'Reorder favorites',
    description: 'One tap to repeat your usual.',
    icon: Sparkles
  }
];

export function About() {
  return (
    <section id="order" className="relative py-20 px-4 text-white">
      <div className="absolute inset-0 order-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-2">
              <span className="text-sm uppercase tracking-[0.4em] text-[color:var(--cafe-yellow)]" style={{ fontFamily: 'var(--font-body)' }}>
                Order flow
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              QR-first cafe for fast orders and long hangs
            </h2>

            <p className="text-white/70 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
              We keep the queue visible, the menu bold, and the table number simple. Scan once, reorder forever, and let
              the baristas handle the rest.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {orderSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 animate-float-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[color:var(--cafe-ink)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#menu"
                className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Explore the menu
              </a>
              <a
                href="#home"
                className="px-7 py-3 rounded-full bg-[color:var(--cafe-pink)] text-white hover:bg-[color:var(--cafe-orange)] transition-colors"
              >
                Start ordering
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                alt="Cafe interior with neon lights"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white text-[color:var(--cafe-ink)] p-4 card-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--cafe-pink)]">Table A12</p>
                  <p className="text-lg font-medium">Order ready in 7 min</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-[color:var(--cafe-mint)]/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[color:var(--cafe-mint)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
