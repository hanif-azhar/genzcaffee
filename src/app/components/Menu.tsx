import { ImageWithFallback } from './figma/ImageWithFallback';

const menuSections = [
  {
    id: 'espresso',
    title: 'Espresso Based',
    description: 'Short, creamy, and dialed-in shots with playful flavor twists.',
    tag: 'Bold shots',
    accent: 'var(--cafe-pink)',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
    items: [
      {
        name: 'Sunset Latte',
        description: 'Double espresso, vanilla, and orange peel foam.',
        price: '$5.5'
      },
      {
        name: 'Miso Caramel Macchiato',
        description: 'Salted miso caramel with steamed oat milk.',
        price: '$6.0'
      },
      {
        name: 'Cloud Cappuccino',
        description: 'Microfoam cap with cocoa dust and brown sugar.',
        price: '$5.0'
      }
    ]
  },
  {
    id: 'cold-brew',
    title: 'Cold Brew',
    description: 'Smooth, slow-steeped brews built for long hangs and playlists.',
    tag: 'Chill',
    accent: 'var(--cafe-blue)',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
    items: [
      {
        name: 'Cherry Cola Cold Brew',
        description: 'Cold brew, cherry syrup, citrus fizz.',
        price: '$5.5'
      },
      {
        name: 'Nitro Oat',
        description: 'Silky nitro pour with oat milk and sea salt.',
        price: '$6.0'
      },
      {
        name: 'Coconut Cream Float',
        description: 'Cold brew with coconut cream cloud.',
        price: '$6.5'
      }
    ]
  },
  {
    id: 'light-bites',
    title: 'Light Bites',
    description: 'Snacky plates that pair perfectly with espresso or spritzes.',
    tag: 'Small plates',
    accent: 'var(--cafe-mint)',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    items: [
      {
        name: 'Avocado Crunch Toast',
        description: 'Smashed avo, chili crunch, lemon.',
        price: '$8.0'
      },
      {
        name: 'Feta Watermelon Bowl',
        description: 'Mint, chili, and lime vinaigrette.',
        price: '$7.5'
      },
      {
        name: 'Crispy Halloumi Bites',
        description: 'Hot honey drizzle and sesame.',
        price: '$9.0'
      }
    ]
  },
  {
    id: 'pastries',
    title: 'Pastries',
    description: 'Buttery bakes and sweet bites made fresh every morning.',
    tag: 'Fresh bake',
    accent: 'var(--cafe-orange)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    items: [
      {
        name: 'Matcha Croissant',
        description: 'Flaky layers with matcha cream.',
        price: '$4.5'
      },
      {
        name: 'Salted Caramel Muffin',
        description: 'Soft crumb with salted caramel top.',
        price: '$4.0'
      },
      {
        name: 'Berry Danish',
        description: 'Blueberry jam and vanilla glaze.',
        price: '$4.5'
      }
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    description: 'Comfort bowls with spicy, creamy, and herb-heavy options.',
    tag: 'Main bowl',
    accent: 'var(--cafe-lime)',
    image: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8e8d?auto=format&fit=crop&w=1200&q=80',
    items: [
      {
        name: 'Lemon Chili Linguine',
        description: 'Garlic oil, lemon zest, crispy chili.',
        price: '$12.0'
      },
      {
        name: 'Truffle Mushroom Rigatoni',
        description: 'Creamy mushroom sauce with truffle dust.',
        price: '$13.5'
      },
      {
        name: 'Gochujang Alfredo',
        description: 'Spicy-sweet cream sauce with chicken.',
        price: '$14.0'
      }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="relative py-20 px-4">
      <div className="absolute inset-0 menu-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[color:var(--cafe-ink)] text-sm uppercase tracking-[0.4em]" style={{ fontFamily: 'var(--font-body)' }}>
              Menu
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
            The all-day cafe lineup
          </h2>
          <p className="text-[color:var(--cafe-ink)]/70 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
            Vibrant sips and bites designed for QR ordering, table hangs, and late-night pasta cravings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {menuSections.map((section, index) => (
            <div
              key={section.id}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 card-glow animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute -top-12 -right-10 h-32 w-32 rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: section.accent }}
                aria-hidden="true"
              ></div>

              <div className="flex items-center justify-between">
                <h3 className="text-2xl text-[color:var(--cafe-ink)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: section.accent }}>
                  {section.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-[color:var(--cafe-ink)]/70">{section.description}</p>

              <div className="mt-5 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={section.image}
                  alt={section.title}
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-4 border-b border-black/10 pb-3 last:border-b-0 last:pb-0">
                    <div>
                      <h4 className="text-lg text-[color:var(--cafe-ink)]">{item.name}</h4>
                      <p className="text-sm text-[color:var(--cafe-ink)]/70">{item.description}</p>
                    </div>
                    <span className="text-[color:var(--cafe-ink)] font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#order"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[color:var(--cafe-ink)] text-white hover:bg-[color:var(--cafe-pink)] transition-colors"
          >
            Start an order
          </a>
        </div>
      </div>
    </section>
  );
}
