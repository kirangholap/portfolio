import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Radar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react';

export const profile = {
  name: 'Kiran Gholap',
  title: 'AI Product Portfolio',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  email: 'mailto:hello@example.com',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Products', href: '#products' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const impactMetrics = [
  { value: 23, suffix: '%', label: 'Conversion Rate Lift', icon: TrendingUp },
  { value: 30, suffix: '%', label: 'Revenue Per Session Lift', icon: BarChart3 },
  { value: 500, prefix: '$', suffix: 'K+', label: 'Average Monthly Incremental Revenue Across 85+ Clients', icon: Zap },
  { value: 90, suffix: '%', label: 'Client Success Rate', icon: Sparkles },
  { value: 80, suffix: '+', label: 'Enterprise Deployments', icon: BriefcaseBusiness },
];

export const products = [
  {
    name: 'Frustrated Shopper Intelligence Engine',
    icon: BrainCircuit,
    description:
      'AI-powered behavioral decision engine that continuously evaluates shopper intent and behavioral signals throughout the customer journey. It identifies when a personalized intervention is most likely to create incremental business value and delivers contextual nudges before abandonment.',
    focus: ['Behavioral Intelligence', 'Real-time Decision Engine', 'Customer Intent Analysis', 'Friction Identification', 'Personalized Interventions', 'Business Impact'],
    metrics: ['23% Conversion Lift', '30% Revenue Per Session Lift', '$500K+ Average Monthly Incremental Revenue', '90% Client Success'],
  },
  {
    name: 'Commerce Health Intelligence',
    icon: Radar,
    description:
      'Intelligent commerce analytics platform that detects meaningful behavioral changes, explains why performance shifted, estimates missed revenue opportunities, forecasts future trends, and recommends optimization actions through interactive visualizations.',
    focus: ['Behavior Change Detection', 'Root Cause Narratives', 'Revenue Opportunity', 'Seasonality', 'Forecasting', 'Executive Dashboards'],
    metrics: ['Continuous Monitoring', 'Business Impact Narratives', 'Missed Revenue Detection'],
  },
  {
    name: 'E-commerce Jarvis',
    icon: Bot,
    description:
      'Enterprise AI assistant that unifies analytics, customer journey metrics, historical business context, and organizational knowledge into a conversational decision-support platform.',
    focus: ['Natural Language Analytics', 'Business Insights', 'Trend Analysis', 'Recommendations', 'Knowledge Assistant', 'Historical Context'],
    metrics: ['Conversational BI', 'Executive-ready Answers', 'Historical Context'],
    chat: true,
  },
  {
    name: 'Customer Journey Protection Engine',
    icon: ShieldCheck,
    description:
      'AI solution that protects customer journeys from malicious URLs, suspicious scripts, and customer hijacking attempts to minimize shopper distraction, preserve trust, improve experience, and protect conversion performance.',
    focus: ['Threat Detection', 'Script Monitoring', 'Customer Journey Protection', 'Website Health', 'Risk Intelligence'],
    metrics: ['Protected Journeys', 'Cleaner Experiences', 'Trust Preservation'],
  },
];

export const timeline = [
  { year: '2018', title: 'BSc Statistics', icon: GraduationCap },
  { year: 'Next', title: 'MBA Operations', icon: Workflow },
  { year: 'Brandlock', title: 'Commerce Intelligence', icon: BriefcaseBusiness },
  { year: 'AI Products', title: 'Production Systems', icon: BrainCircuit },
  { year: 'Today', title: 'Intelligent Commerce', icon: Sparkles },
];

export const skills = [
  ['Machine Learning', 92],
  ['Statistics', 94],
  ['Experimentation', 91],
  ['Generative AI', 88],
  ['NLP', 86],
  ['AWS', 82],
  ['Consumer Behavior Analytics', 95],
  ['Python', 93],
  ['SQL', 90],
];

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'Email', href: profile.email, icon: Mail },
];
