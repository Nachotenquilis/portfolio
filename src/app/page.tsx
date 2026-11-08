'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  TerminalWindow,
  Cpu,
  Database,
  ChartBar,
  Lightning,
  DownloadSimple,
  ArrowUpRight,
  Copy,
  Check,
  GraduationCap,
  ShieldCheck,
  SlidersHorizontal,
  Broadcast,
  EnvelopeSimple,
  PhoneCall,
  LinkedinLogo,
  GitBranch,
  Cube,
  List,
  X,
  Play,
  ArrowsClockwise,
  Sparkle,
  PaperPlaneRight,
  WarningCircle,
  CheckCircle,
  Compass,
  HardDrives,
} from '@phosphor-icons/react';

import LiquidChrome from '@/components/LiquidChrome';
import DitherVeil from '@/components/DitherVeil';
import DecryptedText from '@/components/DecryptedText';
import ScrollVelocity from '@/components/ScrollVelocity';
import SpotlightCard from '@/components/SpotlightCard';
import Magnet from '@/components/Magnet';
import Dock from '@/components/Dock';

// ============================================================================
// VERIFIED CV DATA (Ignacio Ten - Industrial Engineer & Data Analyst)
// ============================================================================

type DitherPattern = 'floyd' | 'bayer' | 'lines' | 'atkinson';

interface AgentNode {
  id: string;
  code: string;
  name: string;
  role: string;
  latency: string;
  status: string;
  output: string;
}

const AGENT_NODES: AgentNode[] = [
  {
    id: 'planner',
    code: 'AGT-01 // SCHEDULER',
    name: 'Maintenance Schedule Optimizer',
    role: 'Evaluates preventive & corrective work orders across high-pressure gas compression assets.',
    latency: '142 ms',
    status: 'OPTIMAL',
    output: 'Re-sequenced 48 preventive maintenance windows with zero grid downtime conflict.',
  },
  {
    id: 'diagnostics',
    code: 'AGT-02 // DIAGNOSTIC',
    name: 'Fault Pattern & Telemetry Agent',
    role: 'Cross-references historical plant failure logs in Dataverse against live sensor anomalies.',
    latency: '198 ms',
    status: 'ACTIVE',
    output: 'Flagged compressor valve wear signature 14 days ahead of scheduled inspection.',
  },
  {
    id: 'governance',
    code: 'AGT-03 // VALIDATOR',
    name: 'Data Lineage & QA Gatekeeper',
    role: 'Enforces schema integrity across Power Automate ingestion flows before semantic model refresh.',
    latency: '64 ms',
    status: 'VERIFIED',
    output: '100% validation pass across 12,400 daily field maintenance records.',
  },
];

interface PipelineStep {
  id: string;
  step: string;
  tool: string;
  title: string;
  detail: string;
  metric: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 'capture',
    step: 'STAGE 01',
    tool: 'Power Apps',
    title: 'Field Telemetry Capture',
    detail: 'Structured mobile & desktop interfaces for plant operators with instant schema validation at entry.',
    metric: 'Zero malformed rows',
  },
  {
    id: 'transform',
    step: 'STAGE 02',
    tool: 'Power Automate',
    title: 'Automated Cloud ETL',
    detail: 'Event-driven cloud flows orchestrating data normalization, deduplication, and alert routing.',
    metric: 'Automated 24/7 sync',
  },
  {
    id: 'validate',
    step: 'STAGE 03',
    tool: 'Dataverse',
    title: 'Governed Relational Store',
    detail: 'Centralized relational repository with strict role-based security and full lineage tracking.',
    metric: 'Single source of truth',
  },
  {
    id: 'consume',
    step: 'STAGE 04',
    tool: 'Power BI + Copilot',
    title: 'Executive & Plant Intelligence',
    detail: 'Star-schema semantic models serving both technical field crews and C-level decision dashboards.',
    metric: '-98% capacity load',
  },
];

interface ExperienceEntry {
  id: string;
  code: string;
  company: string;
  role: string;
  period: string;
  division: string;
  location: string;
  summary: string;
  keyMetricValue: string;
  keyMetricLabel: string;
  secondaryMetricValue: string;
  secondaryMetricLabel: string;
  highlights: {
    title: string;
    detail: string;
    tag: string;
  }[];
  stack: string[];
}

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'enagas-transporte',
    code: 'CART-01 // ENG-TRN',
    company: 'Enagás Transporte',
    role: 'Data Analyst',
    period: '2026 - Present',
    division: 'Industrial Maintenance & Agentic AI Systems',
    location: 'Spain',
    summary:
      'Architecting multi-agent AI systems, extreme-efficiency Power BI semantic models, and end-to-end Power Platform automations for national energy infrastructure maintenance.',
    keyMetricValue: '-98%',
    keyMetricLabel: 'Power BI Capacity Time & Cost',
    secondaryMetricValue: 'Multi-Agent',
    secondaryMetricLabel: 'Maintenance AI Topology',
    highlights: [
      {
        title: 'Agentic AI for Industrial Maintenance',
        detail:
          'Developed agentic AI solutions applied directly to industrial maintenance operations, optimizing preventive and corrective maintenance schedules and plans.',
        tag: 'AGENTIC AI',
      },
      {
        title: 'Specialized Multi-Agent Architectures',
        detail:
          'Designed modular multi-agent topologies capable of decomposing complex maintenance planning queries across specialized domain agents.',
        tag: 'COPILOT STUDIO',
      },
      {
        title: '98% Semantic Model Capacity Optimization',
        detail:
          'Re-engineered Power BI semantic models and DAX calculations, reducing Fabric/Premium capacity consumption by up to 98% in both execution time and compute cost.',
        tag: 'POWER BI / DAX',
      },
      {
        title: 'C-Level & Technical Maintenance Dashboards',
        detail:
          'Built and evolved dual-layer maintenance management dashboards tailored simultaneously for field engineering teams and C-level executives.',
        tag: 'EXECUTIVE BI',
      },
      {
        title: 'Full-Cycle Power Platform Automation',
        detail:
          'Automated data capture, transformation, validation, and operational utilization using Power Automate, Power Apps, and Dataverse backed by scalable star/snowflake schemas.',
        tag: 'POWER PLATFORM',
      },
    ],
    stack: [
      'Multi-Agent AI',
      'Copilot Studio',
      'Power BI',
      'Advanced DAX',
      'Power Automate',
      'Power Apps',
      'Dataverse',
      'Star Schema Modeling',
    ],
  },
  {
    id: 'enagas-gts',
    code: 'CART-02 // ENG-GTS',
    company: 'Enagás GTS',
    role: 'Data Analyst',
    period: '2025 - 2026',
    division: 'Technical System Management & Hydrogen Grid Allocation',
    location: 'Spain',
    summary:
      'Coordinated the national hydrogen injection capacity allocation process across the Spanish gas grid while deploying low-code automation and AI operational workflows.',
    keyMetricValue: '100%',
    keyMetricLabel: 'Regulatory Grid Compliance',
    secondaryMetricValue: 'National H2',
    secondaryMetricLabel: 'Injection Capacity Process',
    highlights: [
      {
        title: 'National Hydrogen Injection Capacity Allocation',
        detail:
          'Coordinated and executed the annual hydrogen injection capacity allocation process across the national gas grid, guaranteeing strict compliance with regulatory frameworks.',
        tag: 'H2 GRID OPS',
      },
      {
        title: 'Low-Code Process Automation',
        detail:
          'Designed and implemented resilient low-code solutions to replace manual spreadsheet bottlenecks with auditable, automated operational workflows.',
        tag: 'AUTOMATION',
      },
      {
        title: 'Applied Operational AI Innovation',
        detail:
          'Integrated AI tools into technical system management workflows to accelerate document analysis, anomaly review, and continuous operational improvement.',
        tag: 'APPLIED AI',
      },
    ],
    stack: [
      'Hydrogen Grid Allocation',
      'Regulatory Compliance',
      'Low-Code Automation',
      'Power Platform',
      'Applied AI',
      'Process Engineering',
    ],
  },
];

interface EducationEntry {
  code: string;
  degree: string;
  institution: string;
  period: string;
  focus: string;
  badge: string;
}

const EDUCATION: EducationEntry[] = [
  {
    code: 'ROM-EDU // 01',
    degree: "Qualifying Master's Degree in Industrial Engineering",
    institution: 'Universitat Politècnica de València (UPV)',
    period: '2024 - Present',
    focus: 'Industrial Systems Engineering, Operations Management, and Energy Infrastructure.',
    badge: 'M.Sc. Qualifying',
  },
  {
    code: 'ROM-EDU // 02',
    degree: "Master's in Artificial Intelligence & Innovation",
    institution: 'Founderz',
    period: '2024',
    focus: 'Applied Generative AI, Multi-Agent Workflows, Enterprise Automation, and AI Governance.',
    badge: 'AI Specialization',
  },
  {
    code: 'ROM-EDU // 03',
    degree: "Bachelor's Degree in Industrial Technologies Engineering",
    institution: 'Universitat Politècnica de València (UPV)',
    period: '2020 - 2024',
    focus: 'Foundations of Industrial Automation, Process Control, Thermodynamics, and Quantitative Analysis.',
    badge: 'B.Sc. Honors Track',
  },
];

type SkillCategory = 'all' | 'ai-bi' | 'automation' | 'architecture';

interface SkillModule {
  id: string;
  code: string;
  name: string;
  category: Exclude<SkillCategory, 'all'>;
  categoryLabel: string;
  detail: string;
  proof: string;
}

const SKILL_MODULES: SkillModule[] = [
  {
    id: 'multi-agent',
    code: 'MOD-01',
    name: 'Agentic AI & Multi-Agent Topologies',
    category: 'ai-bi',
    categoryLabel: 'Agentic AI & BI',
    detail: 'Orchestration of specialized domain agents for industrial maintenance scheduling and planning.',
    proof: 'Production deployment at Enagás Transporte',
  },
  {
    id: 'copilot-studio',
    code: 'MOD-02',
    name: 'Microsoft Copilot Studio',
    category: 'ai-bi',
    categoryLabel: 'Agentic AI & BI',
    detail: 'Custom enterprise agent design connected to Dataverse, Power Automate actions, and internal knowledge bases.',
    proof: 'Enterprise multi-agent workflows',
  },
  {
    id: 'power-bi',
    code: 'MOD-03',
    name: 'Power BI & Advanced DAX Optimization',
    category: 'ai-bi',
    categoryLabel: 'Agentic AI & BI',
    detail: 'Semantic model tuning, VertiPaq compression, and Fabric/Premium capacity optimization.',
    proof: '-98% capacity time & cost reduction',
  },
  {
    id: 'star-schema',
    code: 'MOD-04',
    name: 'Analytical Data Modeling (Star & Snowflake)',
    category: 'architecture',
    categoryLabel: 'Architecture',
    detail: 'Dimensional modeling engineered for high-concurrency executive reporting and low-latency DAX evaluation.',
    proof: 'Scalable analytics-ready schemas',
  },
  {
    id: 'power-automate',
    code: 'MOD-05',
    name: 'Power Automate Cloud Flows',
    category: 'automation',
    categoryLabel: 'Automation & ETL',
    detail: 'Event-driven ETL orchestration, automated validation gates, and cross-system notifications.',
    proof: 'End-to-end maintenance pipeline automation',
  },
  {
    id: 'power-apps',
    code: 'MOD-06',
    name: 'Power Apps Operational Interfaces',
    category: 'automation',
    categoryLabel: 'Automation & ETL',
    detail: 'Low-code applications enabling field engineers to capture and validate maintenance records at the source.',
    proof: 'Plant-to-cloud data capture',
  },
  {
    id: 'dataverse',
    code: 'MOD-07',
    name: 'Microsoft Dataverse & Data Governance',
    category: 'automation',
    categoryLabel: 'Automation & ETL',
    detail: 'Relational data architecture, end-to-end data lineage, security roles, and audit compliance.',
    proof: 'Governed industrial data backbone',
  },
  {
    id: 'plant-translation',
    code: 'MOD-08',
    name: 'Plant-to-Architecture Technical Translation',
    category: 'architecture',
    categoryLabel: 'Architecture',
    detail: 'Bridging physical industrial engineering constraints and executive KPIs into scalable software architectures.',
    proof: 'C-level & technical team alignment',
  },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function PortfolioPage() {
  // Interactive state for Hero DitherVeil Bio-Card
  const [ditherPattern, setDitherPattern] = useState<DitherPattern>('floyd');
  const [ditherPixelSize, setDitherPixelSize] = useState<number>(2);

  // Interactive state for Bento Cell 1 (Multi-Agent Simulator)
  const [selectedAgentId, setSelectedAgentId] = useState<string>('planner');
  const [isSimulatingAgent, setIsSimulatingAgent] = useState<boolean>(false);

  // Interactive state for Bento Cell 2 (Power BI -98% Telemetry Toggle)
  const [biMode, setBiMode] = useState<'optimized' | 'legacy'>('optimized');

  // Interactive state for Bento Cell 4 (Power Platform Pipeline Stage)
  const [activeStageId, setActiveStageId] = useState<string>('capture');

  // Interactive state for Bento Cell 5 (Executive vs Technical Telemetry lens)
  const [dashboardLens, setDashboardLens] = useState<'executive' | 'technical'>('executive');

  // Interactive state for Experience Cartridge Selector
  const [activeExperienceId, setActiveExperienceId] = useState<string>('enagas-transporte');

  // Interactive state for Skill Matrix Filter
  const [skillFilter, setSkillFilter] = useState<SkillCategory>('all');

  // Interactive state for Contact Console
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    organization: '',
    subject: 'Agentic AI & Maintenance Architecture',
    message: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');

  // Mobile Menu & Live Clock State
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [utcClock, setUtcClock] = useState<string>('2026 // SYNC');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setUtcClock(`${hh}:${mm}:${ss} CET`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('nachotenquilis@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = 'mailto:nachotenquilis@gmail.com';
    }
  }, []);

  const handleCopyPhone = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('+34 625 99 80 20');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    } catch {
      window.location.href = 'tel:+34625998020';
    }
  }, []);

  const triggerAgentSimulation = useCallback((id: string) => {
    setSelectedAgentId(id);
    setIsSimulatingAgent(true);
    setTimeout(() => {
      setIsSimulatingAgent(false);
    }, 450);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (formData.senderName.trim().length < 2) {
      setFormError('Please enter your name or operator callsign.');
      return;
    }
    if (!formData.senderEmail.includes('@') || !formData.senderEmail.includes('.')) {
      setFormError('Please provide a valid return email address.');
      return;
    }
    if (formData.message.trim().length < 10) {
      setFormError('Please include a brief project scope or inquiry message (min 10 chars).');
      return;
    }

    setFormStatus('transmitting');
    setTimeout(() => {
      setFormStatus('sent');
      const mailtoSubject = encodeURIComponent(`[NEO-Y2K PORTFOLIO] ${formData.subject} - ${formData.senderName}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.senderName}\nOrganization: ${formData.organization || 'N/A'}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:nachotenquilis@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_self');
    }, 900);
  };

  const selectedAgent = AGENT_NODES.find(a => a.id === selectedAgentId) ?? AGENT_NODES[0];
  const activeStage = PIPELINE_STEPS.find(s => s.id === activeStageId) ?? PIPELINE_STEPS[0];
  const activeExperience = EXPERIENCES.find(e => e.id === activeExperienceId) ?? EXPERIENCES[0];
  const filteredSkills =
    skillFilter === 'all' ? SKILL_MODULES : SKILL_MODULES.filter(skill => skill.category === skillFilter);

  const dockItems = [
    {
      icon: <TerminalWindow size={20} weight="duotone" />,
      label: 'Console Top',
      onClick: () => scrollToSection('hero'),
    },
    {
      icon: <Cpu size={20} weight="duotone" />,
      label: 'Systems Bento',
      onClick: () => scrollToSection('systems'),
    },
    {
      icon: <Database size={20} weight="duotone" />,
      label: 'Career Log',
      onClick: () => scrollToSection('experience'),
    },
    {
      icon: <GraduationCap size={20} weight="duotone" />,
      label: 'Credentials',
      onClick: () => scrollToSection('credentials'),
    },
    {
      icon: <Broadcast size={20} weight="duotone" />,
      label: 'Open Comms',
      onClick: () => scrollToSection('contact'),
    },
  ];

  return (
    <div className="relative min-h-[100dvh] bg-[#090B10] text-[#EAEFF7] selection:bg-[#B8E62E] selection:text-[#090B10]">
      {/* Fixed Subtle Y2K CRT Scanline & Grid Texture */}
      <div className="y2k-scanline-overlay" aria-hidden="true" />

      {/* =====================================================================
          STICKY TOP NEO-Y2K HARDWARE CONTROL BAR (h-16)
      ====================================================================== */}
      <header className="sticky top-0 z-40 h-16 w-full border-b border-[#EAEFF7]/14 bg-[#090B10]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1380px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Brand Hardware Signature */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-label="Ignacio Ten Neo-Y2K System Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#B8E62E]/50 bg-[#B8E62E]/10 text-[#B8E62E] transition-transform duration-150 group-hover:scale-105">
              <Cpu size={18} weight="duotone" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-wider text-[#EAEFF7] uppercase">
                IGNACIO.TEN <span className="text-[#B8E62E]">//</span> OS.2K6
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                IND.ENG &amp; AGENTIC AI
              </span>
            </div>
          </a>

          {/* Center Single-Line Desktop Navigation */}
          <nav aria-label="Primary section navigation" className="hidden items-center gap-1 md:flex">
            {[
              { id: 'systems', label: 'Architecture' },
              { id: 'experience', label: 'Experience' },
              { id: 'credentials', label: 'Credentials' },
              { id: 'contact', label: 'Comms' },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-sm px-3.5 py-1.5 font-mono text-xs font-medium tracking-wider whitespace-nowrap text-[#94A3B8] uppercase transition-colors duration-150 hover:bg-[#EAEFF7]/6 hover:text-[#EAEFF7]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Live Telemetry Clock + Single Action Button */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 rounded-sm border border-[#EAEFF7]/12 bg-[#10141D]/90 px-2.5 py-1">
              <span className="y2k-led" aria-hidden="true" />
              <span className="font-mono text-[11px] text-[#94A3B8] tabular-nums">{utcClock}</span>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="y2k-btn-primary rounded-sm px-3.5 py-1.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
            >
              <span>Open Comms</span>
              <ArrowUpRight size={14} weight="bold" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#EAEFF7]/16 bg-[#10141D] text-[#EAEFF7] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>

        {/* Mobile Hardware Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="border-b border-[#EAEFF7]/16 bg-[#090B10]/96 px-4 pt-3 pb-5 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {[
                  { id: 'systems', label: 'Architecture & Impact' },
                  { id: 'experience', label: 'Operational Career Log' },
                  { id: 'credentials', label: 'Credentials & Stack' },
                  { id: 'contact', label: 'Comms Terminal' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between rounded-sm border border-[#EAEFF7]/10 bg-[#10141D] px-3.5 py-2.5 text-left font-mono text-xs tracking-wider text-[#EAEFF7] uppercase"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-[#B8E62E]" />
                  </button>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href="/CV_Ignacio_Ten_ENG.pdf"
                    download="CV_Ignacio_Ten_ENG.pdf"
                    className="y2k-btn-primary flex-1 justify-center rounded-sm py-2.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                  >
                    <DownloadSimple size={15} weight="bold" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" className="relative z-10 pb-28">
        {/* ===================================================================
            SECTION 1: ASYMMETRIC 7/5 SPLIT HERO (min-h-[100dvh])
            Max 4 distinct text elements in left column + interactive DitherVeil
            portrait cartridge in right column.
        ==================================================================== */}
        <section
          id="hero"
          className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden border-b border-[#EAEFF7]/12 pt-10 pb-16 lg:py-20"
        >
          {/* Ambient WebGL LiquidChrome Background Layer */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-24" aria-hidden="true">
            <LiquidChrome
              baseColor={[0.06, 0.08, 0.12]}
              speed={0.14}
              amplitude={0.32}
              frequencyX={2.5}
              frequencyY={2.0}
              interactive={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#090B10]/65 via-[#090B10]/82 to-[#090B10]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* LEFT COLUMN (7 Cols): Strictly 4 text/action groups */}
              <div className="flex flex-col items-start lg:col-span-7">
                {/* Element 1: Status Pill */}
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-sm border border-[#B8E62E]/40 bg-[#10141D]/90 px-3 py-1.5">
                  <span className="y2k-led" aria-hidden="true" />
                  <span className="font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase">
                    <DecryptedText
                      text="ENAGÁS TRANSPORTE // DATA ANALYST & INDUSTRIAL AI"
                      speed={35}
                      maxIterations={10}
                      animateOn="view"
                    />
                  </span>
                </div>

                {/* Element 2: Display Headline (Chakra Petch + italic chrome accent) */}
                <h1 className="font-display pb-1 text-[clamp(2.5rem,5.2vw+0.8rem,4.65rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#EAEFF7] uppercase">
                  Industrial <span className="font-semibold text-[#B8E62E] italic">Agentic AI</span> &amp; High-Density
                  Grid Telemetry.
                </h1>

                {/* Element 3: 19-word value proposition subtext */}
                <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                  Ignacio Ten engineers multi-agent maintenance systems, Power Platform automations, and semantic models
                  cutting capacity load by 98%.
                </p>

                {/* Element 4: Primary & Secondary CTA Row */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Magnet padding={40} magnetStrength={3.5}>
                    <a
                      href="/CV_Ignacio_Ten_ENG.pdf"
                      download="CV_Ignacio_Ten_ENG.pdf"
                      className="y2k-btn-primary rounded-sm px-6 py-3.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                    >
                      <DownloadSimple size={17} weight="bold" />
                      <span>Download CV</span>
                    </a>
                  </Magnet>

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="y2k-btn-secondary rounded-sm px-6 py-3.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                  >
                    <Broadcast size={17} weight="duotone" className="text-[#B8E62E]" />
                    <span>Open Comms</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN (5 Cols): Neo-Y2K Operator Bio-Card with Interactive DitherVeil */}
              <div className="lg:col-span-5">
                <div className="y2k-window y2k-crosshair rounded-md p-1">
                  {/* Window Title Bar */}
                  <div className="y2k-titlebar rounded-t-sm">
                    <div className="flex items-center gap-2">
                      <span className="y2k-led" aria-hidden="true" />
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                        OP.ID // IGNACIO_TEN.DITHER
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                      VALENCIA / MADRID ES
                    </span>
                  </div>

                  {/* Interactive WebGL DitherVeil Portrait Viewport */}
                  <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#090B10]">
                    <DitherVeil
                      src="/assets/portrait_1.jpg"
                      fit="cover"
                      pattern={ditherPattern}
                      pixelSize={ditherPixelSize}
                      levels={3}
                      palette="duotone"
                      inkColor="#090B10"
                      paperColor="#EAEFF7"
                      rimColor="#B8E62E"
                      rim={0.62}
                      contrast={1.18}
                      revealRadius={175}
                      softness={0.55}
                      linger={1.1}
                      wander={true}
                      clickBurst={true}
                    />

                    {/* Subtle Corner HUD Overlay */}
                    <div className="pointer-events-none absolute top-3 left-3 rounded-sm border border-[#EAEFF7]/15 bg-[#090B10]/80 px-2.5 py-1 backdrop-blur-md">
                      <span className="font-mono text-[10px] tracking-wider text-[#B8E62E] uppercase">
                        HOVER / CLICK TO PULSE
                      </span>
                    </div>

                    <div className="pointer-events-none absolute right-3 bottom-3 rounded-sm border border-[#EAEFF7]/15 bg-[#090B10]/80 px-2.5 py-1 backdrop-blur-md">
                      <span className="font-mono text-[10px] tracking-wider text-[#EAEFF7] uppercase tabular-nums">
                        KERNEL: {ditherPattern.toUpperCase()} // {ditherPixelSize}PX
                      </span>
                    </div>
                  </div>

                  {/* Interactive Shader Control Strip */}
                  <div className="border-t border-[#EAEFF7]/12 bg-[#0D1119] p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5" role="group" aria-label="Dither algorithm selector">
                        <SlidersHorizontal size={14} className="mr-1 text-[#B8E62E]" />
                        {(['floyd', 'bayer', 'lines', 'atkinson'] as DitherPattern[]).map(mode => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setDitherPattern(mode)}
                            className={`rounded-sm px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                              ditherPattern === mode
                                ? 'border border-[#B8E62E] bg-[#B8E62E] text-[#090B10]'
                                : 'border border-[#EAEFF7]/12 bg-[#10141D] text-[#94A3B8] hover:text-[#EAEFF7]'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-1" role="group" aria-label="Pixel density selector">
                        {[2, 3, 4].map(px => (
                          <button
                            key={px}
                            type="button"
                            onClick={() => setDitherPixelSize(px)}
                            className={`rounded-sm px-2 py-1 font-mono text-[10px] whitespace-nowrap tabular-nums transition-colors duration-150 ${
                              ditherPixelSize === px
                                ? 'border border-[#38BDF8] bg-[#38BDF8]/15 text-[#38BDF8]'
                                : 'border border-[#EAEFF7]/10 bg-[#10141D] text-[#94A3B8] hover:text-[#EAEFF7]'
                            }`}
                          >
                            {px}px
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            INTERLUDE: SINGLE VECTORHEART KINETIC TELEMETRY TICKER
        ==================================================================== */}
        <div className="border-b border-[#EAEFF7]/12 bg-[#0D1017] py-3.5">
          <ScrollVelocity
            texts={[
              'AGENTIC AI MAINTENANCE // POWER BI -98% CAPACITY LOAD // NATIONAL HYDROGEN GRID ALLOCATION // COPILOT STUDIO // STAR SCHEMA TELEMETRY //',
            ]}
            velocity={42}
            numCopies={4}
            className="font-display text-xs font-bold tracking-[0.18em] text-[#94A3B8] uppercase"
          />
        </div>

        {/* ===================================================================
            SECTION 2 (#systems): 5-CELL ASYMMETRIC BENTO GRID
            Layout family: 12-column asymmetric hardware bento (7+5 top, 4+4+4 bottom).
            No eyebrow tag above h2 per craft-floor restraint.
        ==================================================================== */}
        <section id="systems" className="mx-auto max-w-[1380px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="font-display pb-1 text-[clamp(1.85rem,3.4vw+0.5rem,3rem)] leading-[1.1] font-bold tracking-[-0.025em] text-[#EAEFF7] uppercase">
              Production Systems &amp; Quantified Telemetry
            </h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-[#94A3B8]">
              Interactive architectural modules deployed at Enagás Transporte and Enagás GTS across industrial
              maintenance intelligence, semantic model optimization, and national energy grid allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* ---------------------------------------------------------------
                CELL 1 (7 Cols): Multi-Agent Maintenance Orchestrator
            ---------------------------------------------------------------- */}
            <SpotlightCard
              className="y2k-window flex flex-col justify-between rounded-md lg:col-span-7"
              spotlightColor="rgba(184, 230, 46, 0.14)"
            >
              <div className="y2k-titlebar">
                <div className="flex items-center gap-2">
                  <Cpu size={15} className="text-[#B8E62E]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    SYS.01 // MULTI-AGENT MAINTENANCE ORCHESTRATOR
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#B8E62E] uppercase">
                  ENAGÁS TRANSPORTE
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-12">
                {/* Left Column inside Cell 1: Custom 3D Neo-Y2K Chrome Turbine Plate */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] p-4 md:col-span-5">
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src="/assets/y2k-chrome-core.jpg"
                      alt="Neo-Y2K Liquid Chrome Turbine Core representing multi-agent maintenance orchestration"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-sm border border-[#EAEFF7]/15 bg-[#090B10]/85 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="font-mono text-[10px] tracking-wider text-[#EAEFF7] uppercase">
                        COPILOT STUDIO
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-[#B8E62E] tabular-nums">
                        3 AGENTS LIVE
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[#EAEFF7]/10 pt-3">
                    <p className="font-mono text-[11px] leading-relaxed text-[#94A3B8]">
                      Select an agent node to inspect how maintenance schedules and plans are autonomously optimized.
                    </p>
                  </div>
                </div>

                {/* Right Column inside Cell 1: Interactive Multi-Agent Node Simulator */}
                <div className="flex flex-col justify-between md:col-span-7">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#EAEFF7] uppercase">
                      Agentic Industrial Maintenance Topology
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                      Specialized multi-agent architecture coordinating preventive schedules, diagnostic telemetry, and
                      governed Dataverse work-order validation.
                    </p>

                    {/* Agent Selector Buttons */}
                    <div className="mt-4 flex flex-col gap-2" role="tablist" aria-label="Multi-agent node selector">
                      {AGENT_NODES.map(agent => {
                        const isSelected = agent.id === selectedAgentId;
                        return (
                          <button
                            key={agent.id}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => triggerAgentSimulation(agent.id)}
                            className={`flex items-center justify-between rounded-sm border px-3.5 py-2.5 text-left transition-colors duration-150 ${
                              isSelected
                                ? 'border-[#B8E62E] bg-[#B8E62E]/10 text-[#EAEFF7]'
                                : 'border-[#EAEFF7]/12 bg-[#090B10]/70 text-[#94A3B8] hover:border-[#EAEFF7]/30 hover:text-[#EAEFF7]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Play
                                size={13}
                                weight="fill"
                                className={isSelected ? 'text-[#B8E62E]' : 'text-[#94A3B8]'}
                              />
                              <div>
                                <div className="font-mono text-[10px] tracking-wider text-[#B8E62E] uppercase">
                                  {agent.code}
                                </div>
                                <div className="text-xs font-semibold text-[#EAEFF7]">{agent.name}</div>
                              </div>
                            </div>
                            <span className="rounded-sm border border-[#EAEFF7]/15 bg-[#090B10] px-2 py-0.5 font-mono text-[10px] text-[#EAEFF7] tabular-nums">
                              {agent.latency}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Agent Execution Output Readout */}
                  <div className="mt-4 rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] p-3.5">
                    <div className="flex items-center justify-between border-b border-[#EAEFF7]/10 pb-2">
                      <span className="font-mono text-[10px] tracking-wider text-[#94A3B8] uppercase">
                        AGENT TELEMETRY LOG
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-[#10B981] uppercase">
                        STATUS // {isSimulatingAgent ? 'EXECUTING...' : selectedAgent.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{selectedAgent.role}</p>
                    <div className="mt-2.5 flex items-center gap-2 rounded-sm bg-[#10141D] px-2.5 py-2 font-mono text-[11px] text-[#B8E62E]">
                      <Sparkle size={14} weight="fill" className="shrink-0" />
                      <span>{selectedAgent.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* ---------------------------------------------------------------
                CELL 2 (5 Cols): Power BI -98% Capacity Optimization Console
            ---------------------------------------------------------------- */}
            <SpotlightCard
              className="y2k-window flex flex-col justify-between rounded-md lg:col-span-5"
              spotlightColor="rgba(56, 189, 248, 0.14)"
            >
              <div className="y2k-titlebar">
                <div className="flex items-center gap-2">
                  <ChartBar size={15} className="text-[#38BDF8]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    SYS.02 // SEMANTIC MODEL ENGINE
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#10B981] uppercase">
                  VERIFIED BENCHMARK
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-5xl font-bold tracking-tight text-[#B8E62E] tabular-nums sm:text-6xl">
                      -98%
                    </span>
                    <div className="flex rounded-sm border border-[#EAEFF7]/15 bg-[#090B10] p-0.5">
                      <button
                        type="button"
                        onClick={() => setBiMode('optimized')}
                        className={`rounded-sm px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                          biMode === 'optimized'
                            ? 'bg-[#B8E62E] text-[#090B10]'
                            : 'text-[#94A3B8] hover:text-[#EAEFF7]'
                        }`}
                      >
                        Optimized Star
                      </button>
                      <button
                        type="button"
                        onClick={() => setBiMode('legacy')}
                        className={`rounded-sm px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                          biMode === 'legacy'
                            ? 'bg-[#F59E0B] text-[#090B10]'
                            : 'text-[#94A3B8] hover:text-[#EAEFF7]'
                        }`}
                      >
                        Legacy Model
                      </button>
                    </div>
                  </div>

                  <h3 className="font-display mt-3 text-xl font-bold text-[#EAEFF7] uppercase">
                    Power BI Capacity &amp; DAX Refactoring
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                    Re-architected semantic models and DAX measures at Enagás Transporte, slashing Premium/Fabric
                    capacity consumption in both refresh duration and compute cost.
                  </p>
                </div>

                {/* Telemetry Comparison Bars */}
                <div className="mt-6 space-y-3 rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-4">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] tabular-nums">
                      <span className="text-[#94A3B8] uppercase">CAPACITY CU UTILIZATION</span>
                      <span className={biMode === 'optimized' ? 'text-[#B8E62E]' : 'text-[#F59E0B]'}>
                        {biMode === 'optimized' ? '2.0% LOAD (OPTIMIZED)' : '100.0%PEAK (LEGACY)'}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-sm bg-[#161C28]">
                      <motion.div
                        initial={false}
                        animate={{
                          width: biMode === 'optimized' ? '4%' : '100%',
                          backgroundColor: biMode === 'optimized' ? '#B8E62E' : '#F59E0B',
                        }}
                        transition={{ duration: 0.35 }}
                        className="h-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] tabular-nums">
                      <span className="text-[#94A3B8] uppercase">DAX EVALUATION &amp; REFRESH TIME</span>
                      <span className={biMode === 'optimized' ? 'text-[#38BDF8]' : 'text-[#F59E0B]'}>
                        {biMode === 'optimized' ? '-98% EXECUTION TIME' : 'BASELINE BOTTLENECK'}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-sm bg-[#161C28]">
                      <motion.div
                        initial={false}
                        animate={{
                          width: biMode === 'optimized' ? '6%' : '96%',
                          backgroundColor: biMode === 'optimized' ? '#38BDF8' : '#F59E0B',
                        }}
                        transition={{ duration: 0.35 }}
                        className="h-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-[11px] tabular-nums">
                    <div className="rounded-sm border border-[#EAEFF7]/10 bg-[#10141D] p-2">
                      <span className="block text-[10px] text-[#94A3B8]">SCHEMA TOPOLOGY</span>
                      <span className="font-semibold text-[#EAEFF7]">
                        {biMode === 'optimized' ? 'Governed Star Schema' : 'Unindexed Flat Tables'}
                      </span>
                    </div>
                    <div className="rounded-sm border border-[#EAEFF7]/10 bg-[#10141D] p-2">
                      <span className="block text-[10px] text-[#94A3B8]">COST IMPACT</span>
                      <span className="font-semibold text-[#B8E62E]">
                        {biMode === 'optimized' ? 'Up to 98% Saved' : 'High Compute Drain'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* ---------------------------------------------------------------
                CELL 3 (4 Cols): National Hydrogen Grid Capacity Allocation
            ---------------------------------------------------------------- */}
            <SpotlightCard
              className="y2k-window flex flex-col justify-between rounded-md lg:col-span-4"
              spotlightColor="rgba(184, 230, 46, 0.12)"
            >
              <div className="y2k-titlebar">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#B8E62E]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    SYS.03 // H2 GRID ALLOCATION
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">ENAGÁS GTS</span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#EAEFF7]/14 bg-[#090B10]">
                    <Image
                      src="/assets/y2k-pipeline-matrix.jpg"
                      alt="3D Isometric Hydrogen Grid Topology and Pipeline Matrix"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 flex items-center gap-2 rounded-sm border border-[#B8E62E]/40 bg-[#090B10]/85 px-2.5 py-1 backdrop-blur-md">
                      <span className="y2k-led" aria-hidden="true" />
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                        NATIONAL GAS GRID // H2
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#EAEFF7] uppercase">
                    Annual Hydrogen Injection Capacity Allocation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                    Coordinated and executed the annual hydrogen injection capacity allocation process across the
                    national gas grid at Enagás GTS, ensuring 100% compliance with regulatory frameworks.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#EAEFF7]/12 pt-3 font-mono text-xs tabular-nums">
                  <span className="text-[#94A3B8] uppercase">REGULATORY AUDIT</span>
                  <span className="font-semibold text-[#10B981]">100% COMPLIANT</span>
                </div>
              </div>
            </SpotlightCard>

            {/* ---------------------------------------------------------------
                CELL 4 (4 Cols): Power Platform & Dataverse Automation Engine
            ---------------------------------------------------------------- */}
            <SpotlightCard
              className="y2k-window flex flex-col justify-between rounded-md lg:col-span-4"
              spotlightColor="rgba(56, 189, 248, 0.12)"
            >
              <div className="y2k-titlebar">
                <div className="flex items-center gap-2">
                  <Lightning size={15} className="text-[#38BDF8]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    SYS.04 // LOW-CODE ETL PIPELINE
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#38BDF8] uppercase">POWER PLATFORM</span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#EAEFF7] uppercase">
                    End-to-End Maintenance Data Lifecycle
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                    Automated capture, transformation, validation, and consumption of maintenance telemetry across Power
                    Apps, Power Automate, and Dataverse.
                  </p>

                  {/* Interactive 4-Stage Pipeline Selector */}
                  <div className="mt-4 grid grid-cols-2 gap-2" role="tablist" aria-label="Pipeline stage selector">
                    {PIPELINE_STEPS.map(stage => {
                      const active = stage.id === activeStageId;
                      return (
                        <button
                          key={stage.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setActiveStageId(stage.id)}
                          className={`rounded-sm border p-2.5 text-left transition-colors duration-150 ${
                            active
                              ? 'border-[#38BDF8] bg-[#38BDF8]/12 text-[#EAEFF7]'
                              : 'border-[#EAEFF7]/12 bg-[#090B10]/80 text-[#94A3B8] hover:border-[#EAEFF7]/25 hover:text-[#EAEFF7]'
                          }`}
                        >
                          <div className="font-mono text-[10px] text-[#38BDF8] uppercase">{stage.step}</div>
                          <div className="mt-0.5 font-mono text-xs font-semibold text-[#EAEFF7]">{stage.tool}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Stage Detail Readout */}
                <div className="mt-4 rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#EAEFF7]">{activeStage.title}</span>
                    <span className="font-mono text-[10px] text-[#B8E62E] uppercase">{activeStage.metric}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">{activeStage.detail}</p>
                </div>
              </div>
            </SpotlightCard>

            {/* ---------------------------------------------------------------
                CELL 5 (4 Cols): C-Level Executive vs Plant Technical Telemetry
            ---------------------------------------------------------------- */}
            <SpotlightCard
              className="y2k-window flex flex-col justify-between rounded-md lg:col-span-4"
              spotlightColor="rgba(184, 230, 46, 0.12)"
            >
              <div className="y2k-titlebar">
                <div className="flex items-center gap-2">
                  <GitBranch size={15} className="text-[#B8E62E]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    SYS.05 // DUAL-LAYER TELEMETRY
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">STAR / SNOWFLAKE</span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-[#EAEFF7] uppercase">
                      C-Level &amp; Field Dashboards
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                    Translating physical plant engineering constraints into governed semantic models serving both
                    boardroom KPIs and field work orders.
                  </p>

                  {/* Lens Switcher */}
                  <div className="mt-4 flex rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] p-1">
                    <button
                      type="button"
                      onClick={() => setDashboardLens('executive')}
                      className={`flex-1 rounded-sm py-1.5 font-mono text-[11px] font-semibold tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                        dashboardLens === 'executive'
                          ? 'bg-[#B8E62E] text-[#090B10]'
                          : 'text-[#94A3B8] hover:text-[#EAEFF7]'
                      }`}
                    >
                      C-Level View
                    </button>
                    <button
                      type="button"
                      onClick={() => setDashboardLens('technical')}
                      className={`flex-1 rounded-sm py-1.5 font-mono text-[11px] font-semibold tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                        dashboardLens === 'technical'
                          ? 'bg-[#B8E62E] text-[#090B10]'
                          : 'text-[#94A3B8] hover:text-[#EAEFF7]'
                      }`}
                    >
                      Plant Crew View
                    </button>
                  </div>
                </div>

                {/* Lens Output Box */}
                <div className="mt-4 rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-4">
                  {dashboardLens === 'executive' ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-[#B8E62E] uppercase">BOARDROOM KPI LAYER</span>
                        <span className="text-[#EAEFF7] tabular-nums">SLA: 99.8%</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#94A3B8]">
                        Strategic OPEX/CAPEX maintenance tracking, national infrastructure availability, and multi-year
                        budget adherence indicators.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-[#38BDF8] uppercase">PLANT ENGINEERING LAYER</span>
                        <span className="text-[#EAEFF7] tabular-nums">MTBF / MTTR</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#94A3B8]">
                        Granular asset work-order queues, preventive scheduling conflicts, spare-part criticality, and
                        component failure lineage.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 (#experience): INTERACTIVE 2-COLUMN MASTER-DETAIL CAREER LOG
            Distinct layout family: Left hardware cartridge selector + Right
            high-craft telemetry inspection window.
        ==================================================================== */}
        <section
          id="experience"
          className="border-t border-[#EAEFF7]/12 bg-[#0B0E15] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-3">
              <h2 className="font-display pb-1 text-[clamp(1.85rem,3.4vw+0.5rem,3rem)] leading-[1.1] font-bold tracking-[-0.025em] text-[#EAEFF7] uppercase">
                Operational Career Log
              </h2>
              <p className="max-w-[65ch] text-base leading-relaxed text-[#94A3B8]">
                Verified data engineering, agentic AI, and national gas infrastructure assignments across Enagás
                Transporte and Enagás GTS.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* LEFT COLUMN (4 Cols): Hardware Cartridge Selector */}
              <div className="flex flex-col gap-4 lg:col-span-4" role="tablist" aria-label="Career history cartridges">
                {EXPERIENCES.map(exp => {
                  const isSelected = exp.id === activeExperienceId;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveExperienceId(exp.id)}
                      className={`group relative overflow-hidden rounded-md border p-5 text-left transition-colors duration-150 ${
                        isSelected
                          ? 'border-[#B8E62E] bg-[#10141D] shadow-[0_0_28px_rgba(184,230,46,0.12)]'
                          : 'border-[#EAEFF7]/14 bg-[#090B10] hover:border-[#EAEFF7]/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-[#B8E62E] uppercase">
                          {exp.code}
                        </span>
                        <span className="rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] px-2 py-0.5 font-mono text-[11px] text-[#EAEFF7] tabular-nums">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="font-display mt-3 text-xl font-bold text-[#EAEFF7] uppercase">{exp.company}</h3>
                      <p className="mt-0.5 font-mono text-xs text-[#38BDF8] uppercase">{exp.role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{exp.division}</p>

                      <div className="mt-4 flex items-center justify-between border-t border-[#EAEFF7]/10 pt-3 font-mono text-[11px]">
                        <span className="text-[#94A3B8] uppercase">KEY TELEMETRY</span>
                        <span className="font-bold text-[#B8E62E] tabular-nums">
                          {exp.keyMetricValue} {exp.keyMetricLabel}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Quick CV Download Cartridge */}
                <div className="rounded-md border border-[#EAEFF7]/12 bg-[#090B10] p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#94A3B8] uppercase">FULL ARCHIVE DOSSIER</span>
                    <HardDrives size={16} className="text-[#B8E62E]" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    Download the signed PDF curriculum vitae with full academic and industrial engineering credentials.
                  </p>
                  <a
                    href="/CV_Ignacio_Ten_ENG.pdf"
                    download="CV_Ignacio_Ten_ENG.pdf"
                    className="y2k-btn-secondary mt-4 w-full justify-center rounded-sm py-2.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                  >
                    <DownloadSimple size={15} weight="bold" className="text-[#B8E62E]" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN (8 Cols): Active Cartridge Inspection Terminal */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="y2k-window rounded-md"
                  >
                    <div className="y2k-titlebar">
                      <div className="flex items-center gap-2">
                        <span className="y2k-led" aria-hidden="true" />
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                          INSPECTING // {activeExperience.company.toUpperCase()} ({activeExperience.period})
                        </span>
                      </div>
                      <span className="font-mono text-[10px] tracking-widest text-[#B8E62E] uppercase">
                        VERIFIED RECORD
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      {/* Header & Dual KPI Readout */}
                      <div className="flex flex-col justify-between gap-6 border-b border-[#EAEFF7]/12 pb-6 md:flex-row md:items-center">
                        <div>
                          <div className="font-mono text-xs tracking-wider text-[#38BDF8] uppercase">
                            {activeExperience.division}
                          </div>
                          <h3 className="font-display mt-1 text-2xl font-bold text-[#EAEFF7] uppercase sm:text-3xl">
                            {activeExperience.role} @ {activeExperience.company}
                          </h3>
                          <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-[#94A3B8]">
                            {activeExperience.summary}
                          </p>
                        </div>

                        <div className="flex shrink-0 gap-3">
                          <div className="rounded-sm border border-[#B8E62E]/40 bg-[#090B10] px-4 py-3 text-right">
                            <div className="font-display text-2xl font-bold text-[#B8E62E] tabular-nums">
                              {activeExperience.keyMetricValue}
                            </div>
                            <div className="font-mono text-[10px] text-[#94A3B8] uppercase">
                              {activeExperience.keyMetricLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Execution Items */}
                      <div className="mt-6 space-y-4">
                        {activeExperience.highlights.map((item, idx) => (
                          <div
                            key={item.title}
                            className="rounded-sm border border-[#EAEFF7]/10 bg-[#090B10]/90 p-4 transition-colors duration-150 hover:border-[#EAEFF7]/25"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-xs font-bold text-[#B8E62E] tabular-nums">
                                  0{idx + 1}
                                </span>
                                <h4 className="font-display text-base font-bold text-[#EAEFF7] uppercase">
                                  {item.title}
                                </h4>
                              </div>
                              <span className="rounded-sm border border-[#EAEFF7]/15 bg-[#10141D] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-[#38BDF8] uppercase">
                                {item.tag}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{item.detail}</p>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Stack Strip */}
                      <div className="mt-6 border-t border-[#EAEFF7]/12 pt-5">
                        <div className="mb-2.5 font-mono text-[11px] tracking-wider text-[#94A3B8] uppercase">
                          DEPLOYED ARCHITECTURE &amp; TOOLING
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeExperience.stack.map(tech => (
                            <span
                              key={tech}
                              className="rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3 py-1 font-mono text-xs text-[#EAEFF7]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4 (#credentials): ACADEMIC BLUEPRINTS & CAPABILITY FILTER MATRIX
            Distinct layout family: 5-col Academic ROM Stack + 7-col Interactive
            Category Filter Matrix.
        ==================================================================== */}
        <section id="credentials" className="mx-auto max-w-[1380px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="font-display pb-1 text-[clamp(1.85rem,3.4vw+0.5rem,3rem)] leading-[1.1] font-bold tracking-[-0.025em] text-[#EAEFF7] uppercase">
              Academic Foundation &amp; Technical Matrix
            </h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-[#94A3B8]">
              Rigorous Industrial Engineering training at Universitat Politècnica de València (UPV) combined with
              specialized Master&apos;s credentials in Artificial Intelligence &amp; Innovation at Founderz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT COLUMN (5 Cols): Academic Hardware ROM Blueprints + Languages */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div className="space-y-4">
                {EDUCATION.map(edu => (
                  <div
                    key={edu.code}
                    className="y2k-window rounded-md p-5 transition-colors duration-150 hover:border-[#EAEFF7]/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-[#B8E62E] uppercase">
                        {edu.code}
                      </span>
                      <span className="rounded-sm border border-[#EAEFF7]/15 bg-[#090B10] px-2.5 py-0.5 font-mono text-[11px] text-[#EAEFF7] tabular-nums">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="font-display mt-2.5 text-lg font-bold text-[#EAEFF7] uppercase">{edu.degree}</h3>
                    <div className="mt-1 font-mono text-xs text-[#38BDF8]">{edu.institution}</div>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#94A3B8]">{edu.focus}</p>
                  </div>
                ))}
              </div>

              {/* Language & Core Engineering Rigor Spec Box */}
              <div className="y2k-window rounded-md p-5">
                <div className="mb-3 flex items-center justify-between border-b border-[#EAEFF7]/12 pb-2.5">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#EAEFF7] uppercase">
                    COMMUNICATION &amp; OPERATIONAL PROTOCOLS
                  </span>
                  <Compass size={16} className="text-[#B8E62E]" />
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-3">
                    <span className="block text-[10px] text-[#94A3B8] uppercase">SPANISH / CASTELLANO</span>
                    <span className="mt-1 block font-bold text-[#EAEFF7]">Native Speaker</span>
                  </div>
                  <div className="rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-3">
                    <span className="block text-[10px] text-[#94A3B8] uppercase">ENGLISH</span>
                    <span className="mt-1 block font-bold text-[#B8E62E]">Advanced Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (7 Cols): Interactive Filterable Capability Matrix */}
            <div className="lg:col-span-7">
              <div className="y2k-window rounded-md p-6">
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAEFF7]/12 pb-4">
                  <div className="flex items-center gap-2">
                    <Cube size={16} className="text-[#B8E62E]" />
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#EAEFF7] uppercase">
                      CAPABILITY MODULES ({filteredSkills.length})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter technical capabilities">
                    {(
                      [
                        { id: 'all', label: 'All Modules' },
                        { id: 'ai-bi', label: 'Agentic AI & BI' },
                        { id: 'automation', label: 'Automation & ETL' },
                        { id: 'architecture', label: 'Architecture' },
                      ] as { id: SkillCategory; label: string }[]
                    ).map(tab => (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={skillFilter === tab.id}
                        onClick={() => setSkillFilter(tab.id)}
                        className={`rounded-sm px-3 py-1.5 font-mono text-[11px] font-medium tracking-wider whitespace-nowrap uppercase transition-colors duration-150 ${
                          skillFilter === tab.id
                            ? 'bg-[#B8E62E] text-[#090B10]'
                            : 'border border-[#EAEFF7]/12 bg-[#090B10] text-[#94A3B8] hover:text-[#EAEFF7]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Module Cards Grid */}
                <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {filteredSkills.map(skill => (
                    <motion.div
                      key={skill.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col justify-between rounded-sm border border-[#EAEFF7]/12 bg-[#090B10] p-4 transition-colors duration-150 hover:border-[#B8E62E]/50"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-semibold text-[#B8E62E] uppercase">
                            {skill.code}
                          </span>
                          <span className="font-mono text-[10px] text-[#38BDF8] uppercase">{skill.categoryLabel}</span>
                        </div>
                        <h3 className="font-display mt-2 text-base font-bold text-[#EAEFF7] uppercase">{skill.name}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">{skill.detail}</p>
                      </div>

                      <div className="mt-4 border-t border-[#EAEFF7]/10 pt-2.5 font-mono text-[10px] text-[#EAEFF7]">
                        VERIFIED // <span className="text-[#94A3B8]">{skill.proof}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5 (#contact): DIRECT COMMS CONSOLE & MULTI-STATE FORM
            Includes explicit <label> above every input, validation error state,
            skeletal transmitting state, and verified transmission confirmation.
        ==================================================================== */}
        <section
          id="contact"
          className="border-t border-[#EAEFF7]/12 bg-[#0B0E15] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-3">
              <h2 className="font-display pb-1 text-[clamp(1.85rem,3.4vw+0.5rem,3rem)] leading-[1.1] font-bold tracking-[-0.025em] text-[#EAEFF7] uppercase">
                Direct Comms &amp; Transmission Terminal
              </h2>
              <p className="max-w-[65ch] text-base leading-relaxed text-[#94A3B8]">
                Available for discussions on industrial multi-agent AI, Power BI semantic architecture optimization, and
                enterprise automation systems.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* LEFT COLUMN (5 Cols): Verified Channels & One-Click Copy */}
              <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                <div className="y2k-window rounded-md p-6">
                  <div className="mb-5 flex items-center justify-between border-b border-[#EAEFF7]/12 pb-3">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#EAEFF7] uppercase">
                      VERIFIED OPERATOR ENDPOINTS
                    </span>
                    <span className="y2k-led" aria-hidden="true" />
                  </div>

                  <div className="space-y-4">
                    {/* Email Endpoint Card */}
                    <div className="rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-wider text-[#94A3B8] uppercase">
                          PRIMARY ELECTRONIC MAIL
                        </span>
                        <EnvelopeSimple size={15} className="text-[#B8E62E]" />
                      </div>
                      <div className="mt-1.5 font-mono text-sm font-semibold break-all text-[#EAEFF7]">
                        nachotenquilis@gmail.com
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="y2k-btn-secondary flex-1 justify-center rounded-sm py-2 font-mono text-[11px] tracking-wider whitespace-nowrap uppercase"
                        >
                          {copiedEmail ? (
                            <>
                              <Check size={14} className="text-[#10B981]" />
                              <span className="text-[#10B981]">Copied Address</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy Email</span>
                            </>
                          )}
                        </button>
                        <a
                          href="mailto:nachotenquilis@gmail.com"
                          className="y2k-btn-primary rounded-sm px-3.5 py-2 font-mono text-[11px] tracking-wider whitespace-nowrap uppercase"
                        >
                          <span>Mailto</span>
                          <ArrowUpRight size={13} weight="bold" />
                        </a>
                      </div>
                    </div>

                    {/* Direct Phone Endpoint Card */}
                    <div className="rounded-sm border border-[#EAEFF7]/14 bg-[#090B10] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-wider text-[#94A3B8] uppercase">
                          DIRECT VOICE / WHATSAPP LINE
                        </span>
                        <PhoneCall size={15} className="text-[#38BDF8]" />
                      </div>
                      <div className="mt-1.5 font-mono text-sm font-semibold text-[#EAEFF7] tabular-nums">
                        +34 625 99 80 20
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="y2k-btn-secondary flex-1 justify-center rounded-sm py-2 font-mono text-[11px] tracking-wider whitespace-nowrap uppercase"
                        >
                          {copiedPhone ? (
                            <>
                              <Check size={14} className="text-[#10B981]" />
                              <span className="text-[#10B981]">Copied Number</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy Phone</span>
                            </>
                          )}
                        </button>
                        <a
                          href="tel:+34625998020"
                          className="y2k-btn-secondary rounded-sm px-3.5 py-2 font-mono text-[11px] tracking-wider whitespace-nowrap uppercase"
                        >
                          <span>Call</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn & CV Row */}
                    <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                      <a
                        href="https://www.linkedin.com/search/results/all/?keywords=Ignacio%20Ten%20Enagas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="y2k-btn-secondary justify-center rounded-sm py-3 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                      >
                        <LinkedinLogo size={16} className="text-[#38BDF8]" weight="duotone" />
                        <span>LinkedIn Profile</span>
                      </a>
                      <a
                        href="/CV_Ignacio_Ten_ENG.pdf"
                        download="CV_Ignacio_Ten_ENG.pdf"
                        className="y2k-btn-primary justify-center rounded-sm py-3 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                      >
                        <DownloadSimple size={16} weight="bold" />
                        <span>Download CV</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (7 Cols): Multi-State Y2K Comms Transmission Form */}
              <div className="lg:col-span-7">
                <div className="y2k-window rounded-md">
                  <div className="y2k-titlebar">
                    <div className="flex items-center gap-2">
                      <Broadcast size={15} className="text-[#B8E62E]" />
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAEFF7] uppercase">
                        TX.CONSOLE // DIRECT MESSAGE DISPATCH
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                      TLS // ENCRYPTED
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    {formStatus === 'sent' ? (
                      <div className="rounded-sm border border-[#10B981]/50 bg-[#090B10] p-6">
                        <div className="flex items-center gap-3 text-[#10B981]">
                          <CheckCircle size={26} weight="duotone" />
                          <div>
                            <h3 className="font-display text-lg font-bold text-[#EAEFF7] uppercase">
                              Transmission Packet Prepared
                            </h3>
                            <p className="font-mono text-xs text-[#10B981]">
                              STATUS // DISPATCHED TO NACHOTENQUILIS@GMAIL.COM
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                          Your mail client has been opened with the structured payload addressed to Ignacio Ten. You can
                          also copy the email address directly on the left panel.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setFormStatus('idle');
                            setFormData({
                              senderName: '',
                              senderEmail: '',
                              organization: '',
                              subject: 'Agentic AI & Maintenance Architecture',
                              message: '',
                            });
                          }}
                          className="y2k-btn-secondary mt-5 rounded-sm px-4 py-2 font-mono text-xs tracking-wider uppercase"
                        >
                          <ArrowsClockwise size={15} />
                          <span>New Transmission</span>
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                        {formError && (
                          <div
                            role="alert"
                            className="flex items-center gap-2.5 rounded-sm border border-[#EF4444]/60 bg-[#EF4444]/10 px-3.5 py-2.5 font-mono text-xs text-[#EF4444]"
                          >
                            <WarningCircle size={16} weight="bold" className="shrink-0" />
                            <span>{formError}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="senderName"
                              className="mb-1.5 block font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase"
                            >
                              Your Name / Callsign *
                            </label>
                            <input
                              id="senderName"
                              name="senderName"
                              type="text"
                              required
                              value={formData.senderName}
                              onChange={e => setFormData(prev => ({ ...prev, senderName: e.target.value }))}
                              placeholder="e.g. Elena Rostova"
                              className="w-full rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3.5 py-2.5 text-sm text-[#EAEFF7] placeholder:text-[#94A3B8]/50 focus:border-[#B8E62E] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="senderEmail"
                              className="mb-1.5 block font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase"
                            >
                              Return Email Address *
                            </label>
                            <input
                              id="senderEmail"
                              name="senderEmail"
                              type="email"
                              required
                              value={formData.senderEmail}
                              onChange={e => setFormData(prev => ({ ...prev, senderEmail: e.target.value }))}
                              placeholder="name@company.com"
                              className="w-full rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3.5 py-2.5 text-sm text-[#EAEFF7] placeholder:text-[#94A3B8]/50 focus:border-[#B8E62E] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="organization"
                              className="mb-1.5 block font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase"
                            >
                              Organization / Team
                            </label>
                            <input
                              id="organization"
                              name="organization"
                              type="text"
                              value={formData.organization}
                              onChange={e => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                              placeholder="Energy / Industrial / Tech"
                              className="w-full rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3.5 py-2.5 text-sm text-[#EAEFF7] placeholder:text-[#94A3B8]/50 focus:border-[#B8E62E] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="mb-1.5 block font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase"
                            >
                              Inquiry Protocol
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                              className="w-full rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3.5 py-2.5 text-sm text-[#EAEFF7] focus:border-[#B8E62E] focus:outline-none"
                            >
                              <option value="Agentic AI & Maintenance Architecture">
                                Agentic AI &amp; Maintenance Architecture
                              </option>
                              <option value="Power BI Semantic Model Optimization">
                                Power BI Semantic Model Optimization
                              </option>
                              <option value="Power Platform & Dataverse Automation">
                                Power Platform &amp; Dataverse Automation
                              </option>
                              <option value="Engineering Role / Advisory Inquiry">
                                Engineering Role / Advisory Inquiry
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="mb-1.5 block font-mono text-xs font-medium tracking-wider text-[#EAEFF7] uppercase"
                          >
                            Transmission Payload *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Describe your industrial data architecture, multi-agent workflow, or engineering opportunity..."
                            className="w-full rounded-sm border border-[#EAEFF7]/16 bg-[#090B10] px-3.5 py-2.5 text-sm text-[#EAEFF7] placeholder:text-[#94A3B8]/50 focus:border-[#B8E62E] focus:outline-none"
                          />
                        </div>

                        {formStatus === 'transmitting' ? (
                          <div className="space-y-2 rounded-sm border border-[#B8E62E]/40 bg-[#090B10] p-3.5">
                            <div className="font-mono text-xs text-[#B8E62E] uppercase">
                              ENCRYPTING &amp; ROUTING PACKET...
                            </div>
                            <div className="h-2 w-full animate-pulse rounded-sm bg-[#B8E62E]/30" />
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                            <span className="font-mono text-[11px] text-[#94A3B8]">
                              Direct recipient: <strong className="text-[#EAEFF7]">nachotenquilis@gmail.com</strong>
                            </span>
                            <button
                              type="submit"
                              className="y2k-btn-primary rounded-sm px-6 py-3 font-mono text-xs tracking-wider whitespace-nowrap uppercase"
                            >
                              <PaperPlaneRight size={16} weight="bold" />
                              <span>Transmit Message</span>
                            </button>
                          </div>
                        )}
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER TELEMETRY BAR
      ====================================================================== */}
      <footer className="border-t border-[#EAEFF7]/12 bg-[#090B10] pb-24 pt-8">
        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-4 px-4 font-mono text-xs text-[#94A3B8] sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="y2k-led" aria-hidden="true" />
            <span>IGNACIO TEN // INDUSTRIAL ENGINEER &amp; DATA ANALYST</span>
          </div>
          <div className="tabular-nums">NEO-Y2K TELEMETRY OS // ALL METRICS VERIFIED</div>
        </div>
      </footer>

      {/* =====================================================================
          FLOATING BOTTOM NEO-Y2K HARDWARE DOCK (Desktop & Tablet)
      ====================================================================== */}
      <div className="pointer-events-none fixed right-0 bottom-3 left-0 z-50 hidden justify-center sm:flex">
        <div className="pointer-events-auto">
          <Dock
            items={dockItems}
            panelHeight={60}
            baseItemSize={44}
            magnification={62}
            distance={150}
          />
        </div>
      </div>
    </div>
  );
}
