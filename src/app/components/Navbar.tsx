import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl text-[color:var(--cafe-ink)] border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-[color:var(--cafe-ink)] text-white flex items-center justify-center text-lg font-semibold">
              NB
            </div>
            <div className="leading-tight">
              <div className="text-lg tracking-[0.3em]" style={{ fontFamily: 'var(--font-heading)' }}>NEON</div>
              <div className="text-sm text-[color:var(--cafe-pink)]" style={{ fontFamily: 'var(--font-body)' }}>BEANS CAFE</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-[color:var(--cafe-pink)] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[color:var(--cafe-pink)] transition-colors">Menu</a>
            <a href="#order" className="hover:text-[color:var(--cafe-pink)] transition-colors">Order</a>
            <a href="#experience" className="hover:text-[color:var(--cafe-pink)] transition-colors">Experience</a>
            <a href="#perks" className="hover:text-[color:var(--cafe-pink)] transition-colors">Perks</a>
            <a href="#contact" className="hover:text-[color:var(--cafe-pink)] transition-colors">Contact</a>
            <a
              href="#order"
              className="px-6 py-2 rounded-full bg-[color:var(--cafe-ink)] text-white hover:bg-[color:var(--cafe-pink)] transition-colors"
            >
              Start Order
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            <div className="flex flex-col gap-4">
              <a href="#home" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Home</a>
              <a href="#menu" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Menu</a>
              <a href="#order" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Order</a>
              <a href="#experience" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Experience</a>
              <a href="#perks" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Perks</a>
              <a href="#contact" className="py-2 hover:text-[color:var(--cafe-pink)] transition-colors">Contact</a>
              <a
                href="#order"
                className="px-6 py-2 rounded-full bg-[color:var(--cafe-ink)] text-white hover:bg-[color:var(--cafe-pink)] transition-colors text-left"
              >
                Start Order
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
