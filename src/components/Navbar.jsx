import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' });
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav ref={navRef} className="section-shell glass flex h-16 items-center justify-between rounded-full px-4">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-premium text-sm font-black text-ink">AI</span>
          <span className="hidden text-sm font-semibold tracking-wide text-frost sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-frost"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-frost px-4 py-2 text-sm font-bold text-ink transition hover:bg-sky md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-frost lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-shell glass mt-3 grid rounded-2xl p-3 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-frost"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

