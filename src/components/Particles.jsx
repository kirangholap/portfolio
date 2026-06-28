import { motion } from 'framer-motion';

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 2 + (index % 4),
  duration: 8 + (index % 7),
  delay: (index % 8) * 0.45,
}));

export default function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-sky/45"
          style={{ left: particle.left, top: particle.top, height: particle.size, width: particle.size }}
          animate={{ y: [-16, 16, -16], opacity: [0.18, 0.72, 0.18] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
