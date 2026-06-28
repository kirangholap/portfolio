import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, children, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-sky">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-normal text-frost sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{children}</p>}
    </motion.div>
  );
}
