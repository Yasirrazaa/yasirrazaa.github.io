export interface Project {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  metrics?: string[];
  href?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  note: string;
}

export interface Credential {
  title: string;
  issuer: string;
  year: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: string;
  popular: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const profile = {
  name: "Yasir Raza",
  shortName: "YR",
  role: "Anthropic-Certified Claude Developer · AI Engineer · LLM Training & Agents · MCP Tooling · Voice AI",
  headline: "Building the systems layer between LLMs, voice, retrieval, and real deployment.",
  summary: "I build AI agents, LLM training and evaluation systems, and voice infrastructure that actually ship — from RL-trained math models and adversarial security frameworks to PyPI packages with 10K+ downloads and serverless GPU deployments.",
  location: "Islamabad, Pakistan",
  email: "yasirabdali6@gmail.com",
  phone: "+92 314 5363379",
  github: "https://github.com/Yasirrazaa",
  linkedin: "https://www.linkedin.com/in/yasir-raza/",
  kaggle: "https://www.kaggle.com/yasirabdaali/",
  pypi: "https://pypi.org/user/yasirabdali6/",
  upwork: "https://www.upwork.com/freelancers/~0136d3079a657bfcbb",
  fiverr: "https://www.fiverr.com/sellers/yasirrazaa",
};

export const stats: Stat[] = [
  { value: "10.7K+", label: "PyPI Downloads", detail: "Across notebookllm and notebookllm-mcp packages" },
  { value: "7,275", label: "Tests Written", detail: "Across Kausal and the Archon 2.0 platform" },
  { value: "4.5×", label: "TTS Speedup", detail: "bfloat16 + CUDA Graphs — RTF 0.59 → 0.13" },
  { value: "13th", label: "AgentBeats Ranking", detail: "/100+ overall · 49.7% avg · 85.1% defense" },
  { value: "2×", label: "Kaggle Expert", detail: "Datasets & Notebooks · 13 medals" },
  { value: "45", label: "Projects Shipped", detail: "Open-source, client, and private platform work" },
];

export const projects: Project[] = [
  {
    title: "Kausal",
    description: "Production AI agent platform (private): extended the ii-agent framework in pure Python (no LangGraph) with custom RAG, layered memory, full OpenTelemetry observability, realtime voice/video via LiveKit, LiteLLM multi-model routing, agent skills, and S3 storage.",
    impact: "7,275-test safety net across 16 test categories; architecture-level observability with self-hosted SigNoz.",
    stack: ["Python", "FastAPI", "OpenTelemetry", "LiveKit", "LiteLLM", "S3", "PostgreSQL"],
    metrics: ["7,275 tests", "OTel tracing + metrics", "LiveKit voice/video", "LiteLLM routing"],
    href: "https://github.com/Yasirrazaa/ii-agent",
    featured: true,
  },
  {
    title: "NotebookLLM",
    description: "Open-source Python package + MCP server that makes Jupyter notebooks efficient for LLM workflows — agent-optimized text output, token budgeting, streaming for 10MB+ notebooks, and cell execution across 8+ notebook formats.",
    impact: "10.7K+ PyPI downloads. Used by Claude Desktop, Cursor, and VS Code workflows via MCP.",
    stack: ["Python", "PyPI", "MCP", "Click", "tiktoken", "asyncio"],
    metrics: ["10.7K+ PyPI downloads", "8+ notebook formats", "Up to 80% token reduction", "MCP server built in"],
    href: "https://github.com/Yasirrazaa/notebookllm",
    featured: true,
  },
  {
    title: "Math2Code",
    description: "A math LLM translating LaTeX into executable, verified SymPy code — trained with rule-based RLVR (GRPO on TRL), judged by a competition-faithful execution harness with a SHA-256 frozen split and sandboxed end-to-end.",
    impact: "Rebuilt a data-leaked capstone into a measurement-first system on a <$100 budget.",
    stack: ["PyTorch", "TRL / GRPO", "SymPy", "Docker", "HuggingFace"],
    metrics: ["397/397 gold solutions verified", "Sandbox pool: 389 exec/s", "22,796 deduplicated samples", "<$100 total budget"],
    href: "https://github.com/Yasirrazaa/Math2Code",
    featured: true,
  },
  {
    title: "Cerberus",
    description: "Stealth browser infrastructure for AI agents — a self-hostable control plane pairing a source-level stealth Chromium with token-efficient orchestration, a multi-agent isolation gateway, and persistent session memory.",
    impact: "Twelve build phases verified end-to-end with committed evidence files.",
    stack: ["Python", "MCP", "Chromium", "Docker", "Node.js"],
    metrics: ["60-tool MCP bridge", "86 automated verification checks", "Multi-agent isolation gateway"],
    href: "https://github.com/Yasirrazaa/Cerberus",
    featured: true,
  },
  {
    title: "Forge",
    description: "The API compiler for the agentic era — one OpenAPI 3.x spec in, production-grade SDKs in 10 languages, CLIs, MCP servers, Agent Skills, Terraform providers, and docs out. Open-source (MIT) and air-gapped.",
    impact: "TypeScript SDKs compile strict on Stripe (~3K files) and Cloudflare (~14K files) real specs; 13 compile gates in CI.",
    stack: ["TypeScript", "Python", "Rust", "Go", "OpenAPI"],
    metrics: ["17 output types", "10 SDK languages", "Byte-stable output", "Breaking-change gate"],
    href: "https://github.com/Yasirrazaa/forge",
    featured: true,
  },
  {
    title: "Archon 2.0",
    description: "The agent-security platform evolved from Archon's 13th-place (49.7%) AgentBeats run — the only open platform where an adaptive attacker and a measurable defense fight in the same loop: 8-layer defense pipeline, 222-probe corpus across 10 attack packs, runtime defense proxy (OpenAI-compatible), MCP security scanning, and full OWASP Agentic Top-10 (ASI01–ASI10) coverage.",
    impact: "Competition-proven lineage (13th/100+, 85.1% defense) now a production platform: 2,295 tests, 93% coverage gate, AgentDojo v1 benchmark published, Homebrew + npm distribution.",
    stack: ["Python", "A2A Protocol", "Google ADK", "OpenTelemetry", "Postgres"],
    metrics: ["From 13th/100+ AgentBeats agent", "2,295 tests", "222 probes · 10 packs", "OWASP ASI01–10 full"],
    href: "https://github.com/Yasirrazaa/archon/tree/hackathon-v2",
    featured: false,
  },
  {
    title: "Chatterbox-Optimized",
    description: "The most optimized fork of Resemble AI's Chatterbox TTS — bucketed CUDA Graphs for autoregressive inference, a zero-hallucination pipeline selecting lowest-WER audio via in-memory Faster-Whisper, and long-text chunking.",
    impact: "Production serverless engine deployed to RunPod with reproducible benchmarks.",
    stack: ["PyTorch", "CUDA Graphs", "Faster-Whisper", "RunPod", "Docker"],
    metrics: ["4.5× faster · RTF 0.59 → 0.13", "Whisper WER validation", "Serverless-ready"],
    href: "https://github.com/Yasirrazaa/chatterbox-optimized",
    featured: false,
  },
  {
    title: "Archon",
    description: "Adversarial AI agent security framework built for the Lambda × Berkeley RDI AgentBeats Security Arena — GOAT-style adaptive attackers battle 7-layer defense gateways across prompt injection, exfiltration, and jailbreak scenarios.",
    impact: "13th / 100+ overall (49.7% avg win rate); the scenario-agnostic attacker/defender architecture generalized to unseen private-leaderboard scenarios.",
    stack: ["Python", "A2A Protocol", "Google ADK", "Red-teaming"],
    metrics: ["13th / 100+ overall · 49.7%", "6th Defense (Blue Team) · 85.1%", "18th Attack · 14.4%"],
    href: "https://github.com/Yasirrazaa/Archon",
    featured: false,
  },
  {
    title: "PRISM-Bench",
    description: "Cultural intelligence benchmark for AI systems exploring pluralistic reasoning and identity-specific modeling.",
    impact: "Adds evaluation and benchmark literacy to a portfolio heavy on shipping systems.",
    stack: ["Python", "Benchmarking", "Evaluation", "Research"],
    metrics: ["Cultural Intelligence (CQ) benchmark"],
    href: "https://github.com/Yasirrazaa/PRISM-Bench",
    featured: false,
  }
];

export const experience: Experience[] = [
  {
    role: "Junior Data Scientist",
    org: "Teamlift · US Remote",
    period: "Jan 2024 — Dec 2024",
    note: "Scraped thousands of AI tools from public tool directories; built an automated verification pipeline (HTTP status checks, screenshot capture, freshness validation) powering Teamo, Teamlift's recommendation engine; preprocessed and normalized thousands of tool records into model-ready features.",
  },
  {
    role: "Data Science Intern",
    org: "Teamlift · US Remote",
    period: "Jul 2023 — Dec 2023",
    note: "Built an automated pipeline collecting thousands of job postings from dice.com with deduplication; extracted skill-demand signals and trained time-series models to forecast skill demand from job descriptions.",
  },
];

export const credentials: Credential[] = [
  { title: "B.Sc. Software Engineering", issuer: "NUML, Islamabad", year: "Aug 2026" },
  { title: "Claude Certified Developer – Foundations", issuer: "Anthropic", year: "2026" },
  { title: "Aspire Leaders Program — Cohort 4 2026", issuer: "Aspire Institute (founded at Harvard)", year: "2026 (in progress)" },
  { title: "McKinsey.org Forward Program — Core Skills", issuer: "McKinsey.org", year: "2026 (in progress)" },
  { title: "Advanced LLM Bootcamp", issuer: "NUST & Sky Electric", year: "2024" },
  { title: "Generative AI · Responsible AI · LLMs", issuer: "Google", year: "2024" },
  { title: "Data Scientist Track · Kaggle 2× Expert (Datasets · Notebooks)", issuer: "DataCamp · Kaggle", year: "Ongoing" },
];

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  href?: string;
  image?: string;
  kind: "track" | "badge" | "bootcamp" | "cert";
}

export const certificates: CertificateItem[] = [
  {
    title: "Claude Certified Developer – Foundations",
    issuer: "Anthropic",
    year: "2026",
    href: "https://www.credly.com/badges/e1626d6b-ec45-4509-8e37-d931495bacee/public_url",
    kind: "cert",
  },
  {
    title: "Associate Data Scientist in Python",
    issuer: "DataCamp — Career Track",
    year: "2025",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f72f4c25c93c559fdd249f9ffd13e765f0fc15d0",
    kind: "track",
  },
  {
    title: "Data Analyst with Python",
    issuer: "DataCamp — Career Track",
    year: "2025",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/c6b1d1febfeb725807880758f13886c55fd08817",
    kind: "track",
  },
  {
    title: "Datasets Expert · Notebooks Expert (13 medals)",
    issuer: "Kaggle — Datasets rank 731/11,277 · Notebooks rank 5,008/61,219",
    year: "2024 - 2026",
    href: "https://www.kaggle.com/yasirabdaali",
    kind: "badge",
  },
  {
    title: "Python",
    issuer: "Kaggle Learn",
    year: "2025",
    href: "https://www.kaggle.com/learn/certification/yasirabdaali/python",
    image: "/certificates/kaggle-python.png",
    kind: "cert",
  },
  {
    title: "Intro to Programming",
    issuer: "Kaggle Learn",
    year: "2025",
    href: "https://www.kaggle.com/learn/certification/yasirabdaali/intro-to-programming",
    image: "/certificates/kaggle-intro-to-programming.png",
    kind: "cert",
  },
  {
    title: "Advanced LLM Bootcamp",
    issuer: "NUST & Sky Electric",
    year: "2024",
    image: "/certificates/nust-llm.jpeg",
    kind: "bootcamp",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud Skill Badge",
    year: "2023",
    href: "https://www.skills.google/public_profiles/1b62a9e6-f968-4984-a130-78aa6cc8f975/badges/4653131",
    kind: "badge",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skill Badge",
    year: "2023",
    href: "https://www.skills.google/public_profiles/1b62a9e6-f968-4984-a130-78aa6cc8f975/badges/4027552",
    kind: "badge",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skill Badge",
    year: "2023",
    href: "https://www.skills.google/public_profiles/1b62a9e6-f968-4984-a130-78aa6cc8f975/badges/4026665",
    kind: "badge",
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skill Badge",
    year: "2023",
    href: "https://www.skills.google/public_profiles/1b62a9e6-f968-4984-a130-78aa6cc8f975/badges/4652937",
    kind: "badge",
  },
];

export interface ResumeVariant {
  slug: string;
  label: string;
  blurb: string;
  icon: string;
}

export const resumeVariants: ResumeVariant[] = [
  {
    slug: "ai-engineer",
    label: "AI Engineer",
    blurb: "Agents, MCP tooling, voice AI, fine-tuning, production LLM systems.",
    icon: "fa-solid fa-robot",
  },
  {
    slug: "ml-engineer",
    label: "ML Engineer",
    blurb: "Pipelines, training, rigorous evaluation, GPU deployment, MLOps.",
    icon: "fa-solid fa-diagram-project",
  },
  {
    slug: "research-engineer",
    label: "Research Engineer",
    blurb: "GRPO/RLVR, reward design, benchmarks, adversarial robustness.",
    icon: "fa-solid fa-flask",
  },
  {
    slug: "python-developer",
    label: "Python Developer",
    blurb: "Packaging, CLI tooling, testing culture, open-source maintenance.",
    icon: "fa-brands fa-python",
  },
  {
    slug: "python-backend-engineer",
    label: "Python Backend Engineer",
    blurb: "FastAPI, WebSocket services, serverless workers, async PostgreSQL.",
    icon: "fa-solid fa-server",
  },
];

export const services: Service[] = [
  {
    id: "agents",
    icon: "robot",
    title: "Agentic AI Development",
    subtitle: "Autonomous agents that do real work",
    description: "Custom autonomous agents using LangGraph & LangChain. Multimodal inputs (voice, text, image), tool-use, memory, and complex task decomposition for real-world automation.",
    features: [
      "Multi-agent orchestration with LangGraph",
      "Tool-use and function calling integration",
      "Memory-augmented conversational agents",
      "Browser automation & web research",
      "MCP server integration & development",
      "Production deployment on serverless infra",
    ],
    pricing: "Starting at $3,000",
    popular: true,
  },
  {
    id: "finetuning",
    icon: "microchip",
    title: "LLM Fine-Tuning & Adaptation",
    subtitle: "Domain-specific model optimization",
    description: "Fine-tune open-source LLMs on your proprietary data using PEFT, LoRA, and QLoRA via Unsloth. Specialize models without breaking the bank on compute.",
    features: [
      "LoRA/QLoRA fine-tuning with Unsloth",
      "Synthetic data generation & augmentation",
      "Evaluation harness & benchmark reporting",
      "Model quantization & optimization",
      "Serving with vLLM or serverless endpoints",
      "Documentation & deployment runbook",
    ],
    pricing: "Starting at $2,000",
    popular: false,
  },
  {
    id: "rag",
    icon: "database",
    title: "RAG & Data Pipelines",
    subtitle: "Ground LLMs in your data",
    description: "Production-grade Retrieval Augmented Generation with semantic chunking, hybrid retrieval, and vector search — keeping LLMs grounded in your enterprise knowledge.",
    features: [
      "Document processing & semantic chunking",
      "Hybrid retrieval (dense + sparse)",
      "Vector store setup (Chroma, Pinecone, etc.)",
      "Query expansion & re-ranking",
      "Citation-grounded responses",
      "Monitoring & evaluation dashboard",
    ],
    pricing: "Starting at $2,500",
    popular: false,
  },
  {
    id: "voice",
    icon: "microphone",
    title: "Voice & Multimodal Agents",
    subtitle: "Voice-first AI interactions",
    description: "Real-time voice/video assistants with cloned voice, emotional TTS, and multimodal understanding. Built for accessibility, content creation, and personalized UX.",
    features: [
      "Real-time speech-to-text & understanding",
      "Voice cloning & emotional TTS",
      "Multimodal (text + voice + image) agents",
      "Telegram/WhatsApp voice bot integration",
      "Serverless voice inference on RunPod",
      "Latency & quality evaluation",
    ],
    pricing: "Starting at $3,500",
    popular: false,
  },
  {
    id: "nlp",
    icon: "magnifying-glass",
    title: "NLP & Data Extraction",
    subtitle: "Structured intelligence from text",
    description: "Large-scale Named Entity Recognition, classification, and information extraction pipelines. Transform messy unstructured data into structured, actionable insights.",
    features: [
      "Custom NER model training",
      "Document classification & routing",
      "Information extraction pipelines",
      "Human-in-the-loop annotation design",
      "100K+ document scale processing",
      "API-ready extraction endpoints",
    ],
    pricing: "Starting at $2,000",
    popular: false,
  },
  {
    id: "mlops",
    icon: "server",
    title: "MLOps & Deployment",
    subtitle: "Ship models that stay shipped",
    description: "Dockerized, CI/CD-driven deployment pipelines for ML systems. From FastAPI wrappers to serverless endpoints, I make sure your models stay reliable in production.",
    features: [
      "Docker containerization & CI/CD",
      "FastAPI/Gradio inference endpoints",
      "Serverless deployment (RunPod, AWS)",
      "Monitoring & observability setup",
      "Cost optimization & auto-scaling",
      "Deployment runbook & documentation",
    ],
    pricing: "Starting at $1,500",
    popular: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Yasir's MCP server is the most practical notebook-to-LLM tool I've used. The token budgeting alone saves us 40% on API costs.",
    author: "Alex Chen",
    role: "ML Engineer",
    company: "AI Startup",
    metric: "40% cost reduction",
  },
  {
    quote: "The voice agent pipeline he built went from idea to demo in 2 weeks. The cloned voice quality is indistinguishable from the original.",
    author: "Sarah Khan",
    role: "Product Lead",
    company: "VoiceTech Co.",
    metric: "2-week delivery",
  },
  {
    quote: "His NER pipeline processed our entire document corpus (100K+ docs) with 94% accuracy. The human-in-the-loop design made validation seamless.",
    author: "James Rodriguez",
    role: "Data Engineering Lead",
    company: "Teamlift",
    metric: "94% accuracy",
  },
  {
    quote: "Working with Yasir is like having a senior AI engineer who can go from research paper to production code in days. His fine-tuning work on our domain model was exceptional.",
    author: "Maya Patel",
    role: "CTO",
    company: "DataFlow Systems",
    metric: "Production in days",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What AI/ML services do you offer?",
    answer: "I offer custom AI agent development, LLM fine-tuning, RAG system architecture, voice/multimodal agents, NLP pipelines, and MLOps/deployment. Every solution is tailored to your specific business needs and designed for production deployment.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A focused prototype or MVP typically takes 2-4 weeks, a full-featured agent system 4-8 weeks, and complex fine-tuning or multimodal systems 8-12+ weeks. I provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "I work with both. For startups, I focus on building MVPs and scalable foundations. For enterprises, I focus on AI integration, system optimization, and complex architecture challenges. My pricing scales accordingly.",
  },
  {
    question: "What makes your approach different?",
    answer: "Most AI freelancers deliver demos. I deliver production systems. My unique combination of fine-tuning expertise, agent architecture, voice AI experience, and full-stack deployment skills means I can design and build end-to-end AI systems that actually work outside the lab.",
  },
  {
    question: "What stack do you typically use?",
    answer: "Core stack: Python, PyTorch, LangGraph/LangChain for agents, Unsloth/PEFT for fine-tuning, FastAPI for serving, Docker for containerization, and RunPod/AWS for deployment. I choose the best tools for each specific project rather than forcing a one-size-fits-all approach.",
  },
];
