import { Clock, Share2, SlidersHorizontal, Users } from 'lucide-react';

const timelineSteps = [
  {
    time: '0:00',
    title: 'Order received',
    detail: 'Payment confirmed and queued.',
    status: 'done'
  },
  {
    time: '0:03',
    title: 'Brewing espresso',
    detail: 'Grinding, pulling, and steaming.',
    status: 'active'
  },
  {
    time: '0:07',
    title: 'Plating & packing',
    detail: 'Finishing touches and staging.',
    status: 'upcoming'
  },
  {
    time: '0:12',
    title: 'Ready for pickup',
    detail: 'We will ping your phone.',
    status: 'upcoming'
  }
];

const groupMembers = [
  { name: 'Aya', initials: 'A' },
  { name: 'Kai', initials: 'K' },
  { name: 'Juno', initials: 'J' },
  { name: 'Mina', initials: 'M' }
];

const customizationGroups = [
  {
    title: 'Milk',
    options: ['Oat', 'Almond', 'Whole']
  },
  {
    title: 'Sweetness',
    options: ['0%', '50%', '100%']
  },
  {
    title: 'Ice',
    options: ['No ice', 'Regular', 'Extra']
  },
  {
    title: 'Add-ons',
    options: ['Vanilla', 'Brown sugar', 'Citrus']
  }
];

const statusStyles: Record<string, string> = {
  done: 'bg-[color:var(--cafe-mint)]',
  active: 'bg-[color:var(--cafe-yellow)] animate-glow',
  upcoming: 'bg-white/30'
};

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="absolute inset-0 experience-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-[color:var(--cafe-ink)]/70">Experience</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
            Live order flow, group hangs, and custom drinks
          </h2>
          <p className="mt-4 text-[color:var(--cafe-ink)]/70 max-w-2xl mx-auto">
            Every order is trackable, shareable, and totally tweakable. Keep the vibe while the baristas work.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 card-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-blue)]">Order timeline</p>
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Live progress tracking
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cafe-blue)]/15 text-[color:var(--cafe-blue)]">
                <Clock className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`h-3 w-3 rounded-full ${statusStyles[step.status]}`}></span>
                    {index < timelineSteps.length - 1 && <span className="w-px flex-1 bg-black/10"></span>}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--cafe-ink)]/50">{step.time}</p>
                    <h4 className="text-lg text-[color:var(--cafe-ink)]">{step.title}</h4>
                    <p className="text-sm text-[color:var(--cafe-ink)]/60">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[color:var(--cafe-cream)] px-4 py-3 text-sm text-[color:var(--cafe-ink)]">
              Estimated ready time: 12 minutes.
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 card-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-pink)]">Group order</p>
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Share a table session
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cafe-pink)]/15 text-[color:var(--cafe-pink)]">
                <Users className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-3 text-sm text-[color:var(--cafe-ink)]/70">
              Friends can add items from their phones and the receipt stays split by person.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {groupMembers.map((member) => (
                <div
                  key={member.name}
                  className="h-10 w-10 rounded-full bg-[color:var(--cafe-ink)] text-white text-sm flex items-center justify-center"
                >
                  {member.initials}
                </div>
              ))}
              <div className="text-xs text-[color:var(--cafe-ink)]/60">+2 more</div>
            </div>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--cafe-ink)] flex items-center justify-between">
              neonbeans.cafe/session/A12
              <Share2 className="h-4 w-4 text-[color:var(--cafe-ink)]/60" />
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[color:var(--cafe-mint)]/15 px-4 py-3 text-sm text-[color:var(--cafe-ink)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--cafe-mint)] text-white">
                <SlidersHorizontal className="h-4 w-4" />
              </span>
              Auto-split totals with individual add-ons.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 card-glow">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-mint)]">Personalize</p>
              <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                Build your usual in seconds
              </h3>
            </div>
            <button className="rounded-full bg-[color:var(--cafe-ink)] px-6 py-2 text-white hover:bg-[color:var(--cafe-pink)] transition-colors">
              Save as My Usual
            </button>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {customizationGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--cafe-ink)]/60">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.options.map((option, index) => (
                    <span
                      key={option}
                      className={`rounded-full px-3 py-1 text-sm ${
                        index === 0
                          ? 'bg-[color:var(--cafe-ink)] text-white'
                          : 'border border-black/10 text-[color:var(--cafe-ink)]'
                      }`}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
