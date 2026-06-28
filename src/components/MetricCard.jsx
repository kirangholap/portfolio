import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function MetricCard({ metric, delay = 0 }) {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.65 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6"
    >
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white/8 text-sky">
        <Icon size={22} />
      </div>
      <div className="text-4xl font-black tracking-normal text-frost sm:text-5xl">
        {metric.prefix}
        <CountUp end={metric.value} duration={2.3} enableScrollSpy scrollSpyOnce />
        {metric.suffix}
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{metric.label}</p>
    </motion.div>
  );
}
