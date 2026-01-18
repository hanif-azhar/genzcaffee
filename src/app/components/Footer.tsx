import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[color:var(--cafe-ink)]"></div>
      <div className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-[color:var(--cafe-pink)]/30 blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>NEON BEANS</h3>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              A vibrant Gen Z cafe for espresso drops, cold brew hangs, and table-side QR ordering.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[color:var(--cafe-pink)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[color:var(--cafe-pink)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[color:var(--cafe-pink)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Order</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex gap-3">
                <QrCode className="w-5 h-5 shrink-0 mt-1" />
                <div>
                  <p>Scan the QR at your table.</p>
                  <p className="text-sm">Reorder favorites in one tap.</p>
                </div>
              </div>
              <a
                href="#order"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[color:var(--cafe-pink)] text-white hover:bg-[color:var(--cafe-orange)] transition-colors"
              >
                Start order
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p>88 Neon Street<br />Downtown, LA 90012</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <p>(555) 246-8842</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <p>hello@neonbeans.cafe</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Hours</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-1" />
                <div>
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 11:00 PM</p>
                  <p className="mt-2">Saturday - Sunday</p>
                  <p>9:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2026 Neon Beans Cafe. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
