import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { motion } from 'framer-motion';

const chartData = [
  { name: 'Mon', cv: 2.8 },
  { name: 'Tue', cv: 2.5 },
  { name: 'Wed', cv: 2.2 },
  { name: 'Thu', cv: 2.7 },
  { name: 'Fri', cv: 3.1 },
  { name: 'Sat', cv: 3.4 },
  { name: 'Sun', cv: 3.6 },
];

function JarvisPreview() {
  return (
    <div className="mt-7 rounded-2xl border border-white/10 bg-ink/70 p-4">
      <div className="mb-4 rounded-2xl bg-white/8 p-4 text-sm text-frost">Why did conversion decrease yesterday?</div>
      <div className="rounded-2xl bg-sky/10 p-4">
        <p className="text-sm leading-6 text-muted">
          Conversion declined after mid-funnel friction increased on returning shoppers. Revenue exposure was concentrated in paid traffic,
          while AOV remained stable. The recommended action is to prioritize checkout recovery and monitor today&apos;s returning visitor segment.
        </p>
        <div className="mt-4 h-28">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="conversionGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4FC3FF" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.08} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} />
              <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12 }} />
              <Area type="monotone" dataKey="cv" stroke="#4FC3FF" strokeWidth={2} fill="url(#conversionGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product, index }) {
  const Icon = product.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75 }}
      className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10"
    >
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-sky/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-premium text-ink">
              <Icon size={26} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted">Product 0{index + 1}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-normal text-frost sm:text-4xl">{product.name}</h3>
          <p className="mt-5 text-base leading-8 text-muted">{product.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {product.focus.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-frost">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {product.metrics.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-ink/60 p-4">
                <p className="text-sm font-semibold leading-6 text-frost">{item}</p>
              </div>
            ))}
          </div>
          {product.chat && <JarvisPreview />}
        </div>
      </div>
    </motion.article>
  );
}
