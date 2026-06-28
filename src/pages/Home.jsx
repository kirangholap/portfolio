import { ArrowDown, ArrowUpRight, Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroScene from '../components/HeroScene.jsx';
import MetricCard from '../components/MetricCard.jsx';
import Particles from '../components/Particles.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { impactMetrics, products, profile, skills, socialLinks, timeline } from '../data/portfolio.js';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75 },
};

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-aurora pt-32">
      <Particles />
      <HeroScene />
      <div className="section-shell relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-sky backdrop-blur">
            Kiran Gholap | AI Product Portfolio
          </p>
          <h1 className="max-w-5xl text-5xl font-black tracking-normal text-frost sm:text-6xl lg:text-7xl">
            Building AI Products that Understand Customer Behavior & Drive Revenue Growth
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Data Scientist specializing in AI-driven E-commerce Optimization, Experimentation and Customer Behavior Analytics. I build production AI systems that improve digital experiences and create measurable business impact.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#products" className="focus-ring inline-flex items-center gap-2 rounded-full bg-frost px-5 py-3 font-bold text-ink transition hover:bg-sky">
              Explore Products <ArrowDown size={18} />
            </a>
            <a
              id="resume"
              href={`${import.meta.env.BASE_URL}resume.pdf`} download="Kiran_Gholap_DS_2026.pdf"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 font-bold text-frost backdrop-blur transition hover:bg-white/12"
            >
              Download Resume <Download size={18} />
            </a>
            <a href={profile.linkedin} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 font-bold text-frost transition hover:bg-white/8">
              LinkedIn <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.85 }}
          className="glass relative overflow-hidden rounded-3xl p-5 shadow-glow"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-premium" />
          <div className="grid gap-4">
            {['Customer intent rising', 'Incremental value detected', 'Intervention quality protected'].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-3 flex items-center justify-between text-sm text-muted">
                  <span>Signal 0{index + 1}</span>
                  <span className="text-sky">Live</span>
                </div>
                <p className="text-lg font-bold text-frost">{item}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-premium"
                    initial={{ width: '18%' }}
                    animate={{ width: `${72 + index * 8}%` }}
                    transition={{ duration: 1.5, delay: 0.45 + index * 0.18 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeader eyebrow="About" title="Production AI, measured by business outcomes" align="left">
          I build production AI products rather than just ML models.
        </SectionHeader>
        <motion.div {...reveal} className="glass rounded-3xl p-7 sm:p-10">
          <p className="text-xl leading-9 text-frost">
            I design AI products that help e-commerce businesses understand customer behavior, identify growth opportunities, explain business performance, and optimize customer journeys through Machine Learning, Statistics, Experimentation, and Generative AI.
            I turn ambiguous commerce signals into production product experiences that help teams understand what changed, why it matters, and
            where intelligent action can create incremental value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BusinessImpact() {
  return (
    <section id="impact" className="bg-midnight/45 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Business Impact" title="Commerce outcomes that move the scoreboard">
          Animated KPIs from deployed AI product work across enterprise e-commerce teams.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impactMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Flagship AI Products" title="Intelligence systems for modern e-commerce">
          High-level product narratives focused on value, adoption, and customer experience.
        </SectionHeader>
        <div className="grid gap-7">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-midnight/45 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Career Journey" title="From statistical thinking to AI product leadership" />
        <div className="grid gap-4 md:grid-cols-5">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} {...reveal} transition={{ duration: 0.65, delay: index * 0.08 }} className="glass rounded-2xl p-5">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-white/8 text-sky">
                  <Icon size={21} />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted">{item.year}</p>
                <h3 className="mt-3 text-xl font-bold text-frost">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Skills" title="Technical depth with commercial judgment" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(([skill, value], index) => (
            <motion.div key={skill} {...reveal} transition={{ duration: 0.65, delay: index * 0.04 }} className="glass rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="font-bold text-frost">{skill}</h3>
                <span className="text-sm font-semibold text-sky">{value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-premium"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Philosophy() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <motion.div {...reveal} className="glass rounded-3xl p-7 sm:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-sky">Professional Philosophy</p>
          <h2 className="text-3xl font-bold tracking-normal text-frost sm:text-5xl">AI products are only valuable when they change decisions</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
            My focus is not just building accurate models. It is creating AI products that solve meaningful business problems, improve customer experiences, and deliver measurable commercial outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-midnight/45 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-premium" />
      <div className="section-shell">
        <motion.div {...reveal} className="glass overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <FileText className="mx-auto mb-6 text-sky" size={34} />
          <h2 className="gradient-text animate-gradient text-4xl font-black tracking-normal sm:text-6xl">Let&apos;s Build Intelligent Commerce</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Available for AI product leadership, experimentation strategy, consumer behavior analytics, and commerce intelligence collaborations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 font-bold text-frost transition hover:bg-white/12"
                >
                  <Icon size={18} /> {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <Hero />
      <About />
      <BusinessImpact />
      <Products />
      <Journey />
      <Skills />
      <Contact />
    </motion.main>
  );
}



