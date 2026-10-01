/* ==========================================================================
   MUHAMMAD HAMZA - ENGINEERING & AI PORTFOLIO ENGINE
   Institute of Space Technology (IST) | Google AI Seekho Top 12 Finalist
   DevTech Labs | Google Play Store Published App Developer
   ========================================================================== */

// --- 1. PROJECTS DATABASE WITH ALL 25+ PROJECTS & DIRECT LIVE LINKS ---
const PROJECTS_DATA = [
  {
    id: "balloon-pop-deluxe-play",
    title: "🎈 Balloon Pop Deluxe (Google Play Store)",
    category: "games",
    categoryLabel: "📱 Published Play Store App",
    status: "🚀 Published on Google Play (DevTech Labs)",
    image: "assets/balloon_pop_store_1.png",
    summary: "Published Google Play arcade puzzle adventure with Prism Peaks world map, Lumi Fox companion, Thunder Slash boosters, and Play Achievements.",
    description: "Balloon Pop Deluxe is a published mobile Android arcade game on the Google Play Store under DevTech Labs. Features Prism Peaks crystalline caverns level progression, Lumi Fox companion, 120x Thunder Slash score boosters, Google Play Achievements, and coin economy.",
    tech: ["Android SDK", "HTML5 Canvas Engine", "Web Audio API", "Google Play Games Services", "Vite", "JavaScript ES6+"],
    architecture: "Entity Component System (ECS) with persistent level save state, Play Games leaderboard API, and touch-optimized input listeners.",
    features: [
      "Published on Google Play Store under DevTech Labs (Rated 3+)",
      "Prism Peaks & Crystalline Caverns multi-stage world map",
      "Lumi Fox companion & 120x Thunder Lightning Slash boosters",
      "Google Play Achievements integration & heart energy system"
    ],
    github: "https://github.com/hamza0312615",
    liveUrl: "https://play.google.com/store/apps/details?id=com.devtechlabs.balloonpopdeluxe",
    localPath: "d:/data from drive f/ALL projects/games/balloon-pop-web"
  },
  {
    id: "visiondx-mega",
    title: "VisionDX Mega (AI Diagnostics Platform)",
    category: "ai-health",
    categoryLabel: "AI & HealthTech",
    status: "🏆 Top 12 Google AI Seekho | Top 10 GDG IST",
    image: "assets/vdx_hero.png",
    summary: "Offline-first AI health diagnostics platform with 12 AI modules, 71-gesture PSL sign language translation, and VoiceDoc interface.",
    description: "VisionDX Mega is an offline-first AI healthcare ecosystem designed for underserved communities in Pakistan. Built with 12 AI modules including skin/eye/hair analysis, audio cough detection, lab report parser, 71-gesture Pakistan Sign Language translator, and automated WhatsApp triage backend.",
    tech: ["React", "Python", "Groq LLM", "TensorFlow", "MediaPipe", "OpenPose", "WhatsApp API", "Vite"],
    architecture: "Offline-first local inference engine with Groq LLM fallback, WebSocket real-time frame processing, and Community Health Worker dispatch mode.",
    features: [
      "12 AI diagnostic modules (skin, eye, hair, cough & lab reports)",
      "71-gesture Pakistan Sign Language (PSL) real-time translator",
      "Hands-free VoiceDoc patient symptom interface",
      "Offline-first Community Health Worker mode & WhatsApp alerts"
    ],
    github: "https://github.com/hamza0312615/visiondxmega",
    liveUrl: "https://visiondxmega.vercel.app",
    localPath: "d:/data from drive f/ALL projects/VisionDX-Mega"
  },
  {
    id: "resqnet-disaster",
    title: "🚨 ResQNet (AI Disaster Response Platform)",
    category: "ai-health",
    categoryLabel: "AI & Disaster Tech",
    status: "Live Deployed System",
    image: "assets/resqnet_dashboard.png",
    summary: "AI-powered disaster response and fleet management platform featuring Claude 3.5 Sonnet damage analyzer, live tactical map, and instant SOS alerts.",
    description: "ResQNet is an intelligent disaster mitigation platform coordinating rescue fleets, tracking active incidents, evaluating damage from aerial photography, and broadcasting multilingual early warnings.",
    tech: ["React", "Claude 3.5 Sonnet AI", "Leaflet Maps", "Node.js", "TailwindCSS", "GitHub Pages"],
    architecture: "Real-time incident stream with Claude vision API damage classification and spatial rescue team dispatch routing.",
    features: [
      "Claude 3.5 Sonnet visual AI damage analyzer",
      "Tactical rescue team fleet deployment & evacuation metrics",
      "Urdu & English bilingual early warning system",
      "One-tap emergency SOS broadcast trigger"
    ],
    github: "https://github.com/hamza0312615/ResQNet",
    liveUrl: "https://hamza0312615.github.io/ResQNet/",
    localPath: "d:/data from drive f/ALL projects/disaster-manag2-feat-resqnet-dashboard-15552565467352973265"
  },
  {
    id: "studylens-ai",
    title: "📚 Study Lens AI Scanner",
    category: "fullstack",
    categoryLabel: "Full-Stack & Mobile App",
    status: "Active Mobile App",
    image: "assets/studylens_home.png",
    summary: "Mobile textbook OCR scanner & AI study companion generating instant concept breakdowns, quiz flashcards, and subject libraries.",
    description: "Study Lens AI transforms physical textbook notes into digital learning assets. Captures pages via mobile camera, applies OCR for formula extraction, and organizes notes into subject folders with streak rewards.",
    tech: ["React Native / Android", "Python", "Tesseract OCR", "Gemini API", "TailwindCSS"],
    architecture: "Mobile camera viewfinder with edge detection OCR and Gemini LLM prompt chains producing structured study notes.",
    features: [
      "Mobile camera document scanner with guide overlay",
      "Auto-categorized Subject Library (Math, Physics, CS)",
      "Instant quiz generator with 92%+ score tracking",
      "5-day learning streak & time-saved metrics"
    ],
    github: "https://github.com/hamza0312615/study-lens",
    liveUrl: "https://github.com/hamza0312615/study-lens",
    localPath: "d:/data from drive f/ALL projects/study-lens"
  },
  {
    id: "aquora-water",
    title: "💧 AQUORA / EQUORA (Water Watch)",
    category: "fullstack",
    categoryLabel: "Full-Stack & Satellite",
    status: "Indus Basin Remote Sensing",
    image: "assets/aquora_satellite.png",
    summary: "Hyperlocal water intelligence platform mapping canal depletion, flow rates, and silt anomalies across the Indus Basin using satellite imagery & AI.",
    description: "A native hybrid Android & Web platform mapping water flow, canal depletion, and algae risks across the Indus Basin. Integrates NDWI remote sensing from Sentinel & Landsat satellites and Gemini LLM alerts via WhatsApp.",
    tech: ["React", "Kotlin", "Vite", "Gemini LLM", "Sentinel / Landsat API", "Python", "TailwindCSS"],
    architecture: "Remote sensing satellite API ingestion with satellite accountability models flagging blockages, water theft, and algae risks.",
    features: [
      "NDWI Remote Sensing via Sentinel & Landsat imagery",
      "Indus Basin flow-rate auditing & blockage detection",
      "Gemini LLM plain-language localized WhatsApp alerts",
      "Native hybrid Android & Web operational dashboard"
    ],
    github: "https://github.com/hamza0312615/AQUORA",
    liveUrl: "https://github.com/hamza0312615/AQUORA",
    localPath: "d:/data from drive f/ALL projects/AQUORA"
  },
  {
    id: "psl-translator",
    title: "🤟 PSL Sign Language Real-Time AI Translator",
    category: "vision-ml",
    categoryLabel: "Computer Vision & ML",
    status: "71 Gestures Active",
    image: "assets/psl_sign_language_ai_1790828069103.png",
    summary: "71-gesture Pakistan Sign Language translator converting skeletal pose tracking into instant text and synthetic spoken audio.",
    description: "An assistive technology system bridging communication barriers for deaf and mute individuals. Uses OpenPose and MediaPipe 3D joint tracking to classify continuous Pakistan Sign Language gestures into natural Urdu/English speech.",
    tech: ["Python", "OpenPose", "MediaPipe", "OpenCV", "TensorFlow", "Text-To-Speech Engine"],
    architecture: "3D hand & body skeletal tracking running frame-by-frame LSTM gesture classification with real-time audio synthesis.",
    features: [
      "71-gesture Pakistan Sign Language continuous translation",
      "Sub-100ms skeletal joint estimation pipeline",
      "Instant Text-to-Speech (TTS) audio output",
      "Integrated into VisionDX Mega accessibility suite"
    ],
    github: "https://github.com/hamza0312615/paksigntranslation",
    liveUrl: "https://github.com/hamza0312615/paksigntranslation",
    localPath: "d:/data from drive f/ALL projects/paksigntranslation"
  },
  {
    id: "wifi-heartbeat",
    title: "📡 WiFi Vitals Detection (Contactless Sensing)",
    category: "ai-health",
    categoryLabel: "AI & HealthTech",
    status: "Biomedical Signal Processing",
    image: "assets/user_project_1.png",
    summary: "Experimental system detecting human micro-movements (breathing & heartbeats) through ambient WiFi signal variance (RSSI/CSI).",
    description: "Contactless biomedical monitoring system extracting cardiac frequencies and respiratory rhythms by processing subtle RF signal amplitude and phase fluctuations using Fast Fourier Transform (FFT).",
    tech: ["Flask", "Python", "Vite", "React", "SciPy", "FFT Signal Processing"],
    architecture: "FFT frequency spectrum analysis filtering cardiac rhythm harmonics from raw ambient WiFi RSSI telemetry.",
    features: [
      "Zero-hardware wearable contactless heart & breathing monitor",
      "Real-time streaming React telemetry dashboard",
      "Human presence & room occupancy detection",
      "Sleep apnea & cardiac anomaly warning flags"
    ],
    github: "https://github.com/hamza0312615/sleep-sense-",
    liveUrl: "https://github.com/hamza0312615/sleep-sense-",
    localPath: "d:/data from drive f/ALL projects/wifi-heartbeat-sensing-main"
  },
  {
    id: "smarthire-ai",
    title: "💼 SmartHire AI Recruitment Pipeline",
    category: "fullstack",
    categoryLabel: "Full-Stack & SaaS",
    status: "Gemini LLM Driven",
    image: "assets/user_project_2.png",
    summary: "AI-powered recruitment pipeline leveraging Gemini API to streamline candidate screening, parse resumes, and eliminate hiring bias.",
    description: "Automated candidate evaluation platform that ingests CVs, parses skill sets against job descriptions, computes match confidence scores, and generates structured interview questions.",
    tech: ["React", "Node.js", "Gemini API", "Express", "TailwindCSS"],
    architecture: "Gemini LLM prompt chain performing semantic resume parsing and candidate ranking based on job competency matrices.",
    features: [
      "Automated PDF resume parsing & skill extraction",
      "AI candidate suitability scoring & ranking",
      "Unbiased screening with anonymous evaluation mode",
      "Custom interview question generator"
    ],
    github: "https://github.com/hamza0312615",
    liveUrl: "https://github.com/hamza0312615"
  },
  {
    id: "mediconnect-ai",
    title: "🏥 MediConnect AI Tele-Health",
    category: "ai-health",
    categoryLabel: "AI & HealthTech",
    status: "Mind to Machine Finalist",
    image: "assets/user_project_3.png",
    summary: "AI-assisted telemedicine system featuring automated symptom evaluation, virtual waiting rooms, and electronic prescriptions.",
    description: "Integrated clinical platform providing instant AI symptom analysis to route patients to appropriate specialists, schedule video calls, and securely store EHR records.",
    tech: ["React", "Node.js", "WebRTC", "Express", "TailwindCSS", "MongoDB"],
    architecture: "WebRTC peer-to-peer video streaming with encrypted socket signaling and microservice symptom checker backend.",
    features: [
      "AI symptom assessment bot with clinical decision support",
      "HD peer-to-peer video consultation",
      "E-Prescription generator with QR verification",
      "Multi-doctor appointment calendar"
    ],
    github: "https://github.com/hamza0312615",
    liveUrl: "https://github.com/hamza0312615",
    localPath: "d:/data from drive f/ALL projects/mediconnect-ai"
  },
  {
    id: "voicedoc-scribe",
    title: "🗣️ VoiceDoc Hands-Free Scribe",
    category: "ai-health",
    categoryLabel: "AI & HealthTech",
    status: "Clinical AI Dictation",
    image: "assets/vdx_dashboard.png",
    summary: "Hands-free AI voice assistant that transcribes physician consultations into structured SOAP clinical notes in real time.",
    description: "Eliminates documentation burnout for doctors by listening to patient-doctor dialogue, recognizing complex medical terminology, and auto-filling EHR charts.",
    tech: ["Python", "Whisper AI", "NLP", "FastAPI", "React", "TailwindCSS"],
    architecture: "Streaming audio WebSockets to Whisper AI transformer models with custom medical vocabulary fine-tuning.",
    features: [
      "Real-time audio streaming transcription",
      "SOAP note extraction (Subjective, Objective, Assessment, Plan)",
      "Medical entity recognition (ICD-10 code suggestions)",
      "Export directly to standard EHR formats"
    ],
    github: "https://github.com/hamza0312615",
    liveUrl: "https://github.com/hamza0312615",
    localPath: "d:/data from drive f/ALL projects/voicedoc"
  },
  {
    id: "civic-ai",
    title: "🏙️ Civic AI Urban Issue Solver",
    category: "fullstack",
    categoryLabel: "Full-Stack & SaaS",
    status: "Community Reporting System",
    image: "assets/user_project_4.png",
    summary: "Community reporting application allowing citizens to report urban infrastructure issues with automatic AI categorization and geo-tagging.",
    description: "Empowers citizens to capture municipal problems (potholes, water leaks, waste accumulation) and routes categorized reports directly to local government departments.",
    tech: ["React", "Node.js", "Express", "Leaflet Maps", "PostgreSQL", "TailwindCSS"],
    architecture: "Geo-spatial query engine mapping user reports with vision classification of urban damage severity.",
    features: [
      "Camera integration with automatic GPS location tagging",
      "AI vision classification of road & water infrastructure damage",
      "Real-time municipal issue resolution tracker map",
      "Public voting & upvoting priority system"
    ],
    github: "https://github.com/hamza0312615/civic-ai",
    liveUrl: "https://github.com/hamza0312615/civic-ai",
    localPath: "d:/data from drive f/ALL projects/civic-ai"
  },
  {
    id: "world-weather-3d",
    title: "🌍 World Weather 3D Explorer",
    category: "fullstack",
    categoryLabel: "Full-Stack & Visualization",
    status: "Interactive 3D Dashboard",
    image: "assets/user_project_5.png",
    summary: "Interactive global weather visualization dashboard featuring 3D climate projections, live wind vector overlays, and radar forecasts.",
    description: "Immersive WebGL meteorological platform rendering global atmospheric currents, sea temperatures, and severe weather warnings on an interactive 3D globe.",
    tech: ["JavaScript", "Three.js", "OpenWeather API", "Leaflet", "CSS Glassmorphism"],
    architecture: "Three.js particle shaders animating atmospheric wind vectors on spherical 3D canvas.",
    features: [
      "Interactive 3D rotating globe with zoom and pan physics",
      "Live precipitation, temperature & wind vector particle layers",
      "7-day hyper-local weather forecast search",
      "Severe storm & hurricane trajectory warning tracker"
    ],
    github: "https://github.com/hamza0312615/world-weather-explorer",
    liveUrl: "https://github.com/hamza0312615/world-weather-explorer",
    localPath: "d:/data from drive f/ALL projects/world-weather-explorer"
  },
  {
    id: "woundcare-vision",
    title: "🩺 WoundCare AI Computer Vision",
    category: "vision-ml",
    categoryLabel: "Computer Vision & ML",
    status: "Clinical Image Segmentation",
    image: "assets/vdx_modules.png",
    summary: "Computer vision application for automatic wound boundary detection, tissue classification, and surface area measurement.",
    description: "Clinical decision support software utilizing UNet image segmentation to track wound healing progression and detect signs of surgical site infection.",
    tech: ["Python", "OpenCV", "TensorFlow", "U-Net Architecture", "React"],
    architecture: "Convolutional neural network performing pixel-level tissue segmentation (granulation vs necrotic tissue).",
    features: [
      "Automated wound surface area (cm²) measurement",
      "Tissue color breakdown (Red, Yellow, Black percentage)",
      "Healing velocity timeline tracking over time",
      "High-risk infection alert flags"
    ],
    github: "https://github.com/hamza0312615/woundcare-main",
    liveUrl: "https://github.com/hamza0312615/woundcare-main",
    localPath: "d:/data from drive f/ALL projects/woundcare-main"
  },
  {
    id: "vdx-whatsapp-bot",
    title: "💬 VisionDX WhatsApp Health Backend",
    category: "ai-health",
    categoryLabel: "AI & HealthTech",
    status: "Rural Health Triage Bot",
    image: "assets/user_project_6.png",
    summary: "Microservice backend enabling remote communities to access AI health triage and consulting directly through WhatsApp.",
    description: "Scalable WhatsApp bot microservice connecting rural patients without smartphone apps to VisionDX AI diagnostics via voice notes and text messages.",
    tech: ["Python", "FastAPI", "WhatsApp Business API", "Groq LLM", "Node.js"],
    architecture: "Twilio/WhatsApp webhook receiver converting voice notes to text and routing queries through Groq Llama 3.3.",
    features: [
      "Multilingual Urdu/English voice note symptom triage",
      "Low-bandwidth text interface for non-smartphone users",
      "Automated appointment routing to nearest health worker",
      "100% private local storage queue"
    ],
    github: "https://github.com/hamza0312615/visiondx-whatsapp-backend",
    liveUrl: "https://github.com/hamza0312615/visiondx-whatsapp-backend",
    localPath: "d:/data from drive f/ALL projects/visiondx-whatsapp-backend"
  },
  {
    id: "neon-circuit",
    title: "⚡ Neon Circuit Cyber Arcade",
    category: "games",
    categoryLabel: "Web & Mobile Games",
    status: "Playable Web Game",
    image: "assets/neon_circuit_game_1790828143558.png",
    summary: "High-speed cyberpunk rhythm and reflex game engine built from scratch with neon particle FX, dynamic soundtrack, and score leaderboards.",
    description: "An ultra-responsive 60fps HTML5 Canvas game featuring custom vector physics, procedural level generation, dynamic audio synching, and retro synthwave aesthetic.",
    tech: ["HTML5 Canvas", "Vanilla JavaScript", "Web Audio API", "CSS Glassmorphism", "Vite"],
    architecture: "Custom delta-time game loop with spatial partitioning collision detection and Web Audio procedural synthesis.",
    features: [
      "Zero-dependency custom 2D rendering engine",
      "Procedural obstacle placement and speed multiplier physics",
      "High-score persistence via Web Storage & local encryption",
      "Touch & Keyboard responsive steering controls"
    ],
    github: "https://github.com/hamza0312615",
    liveUrl: "#arcade",
    localPath: "d:/data from drive f/ALL projects/games/neon-circuit",
    playable: true
  },
  {
    id: "ist-gym-system",
    title: "🏋️ IST Gym Management System",
    category: "fullstack",
    categoryLabel: "Full-Stack & Web Apps",
    status: "IST Campus Management",
    image: "assets/user_project_7.png",
    summary: "Comprehensive fitness center management web application built for the Institute of Space Technology (IST) student community.",
    description: "Full-stack management dashboard managing gym memberships, trainer schedules, workout session tracking, and attendance analytics for IST students and faculty.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    architecture: "JWT authenticated REST API with role-based access control (Admin, Student, Trainer).",
    features: [
      "QR code digital membership check-in pass",
      "Trainer slot booking & workout plan generator",
      "Student attendance & peak hour density analytics",
      "Role-based authorization (Admin / Member)"
    ],
    github: "https://github.com/hamza0312615/ist-gym-management-system",
    liveUrl: "https://github.com/hamza0312615/ist-gym-management-system",
    localPath: "d:/data from drive f/ALL projects/ist-gym-management-system"
  },
  {
    id: "student-mgmt-system",
    title: "🎓 IST Student Management System",
    category: "fullstack",
    categoryLabel: "Full-Stack & Web Apps",
    status: "Academic Administration",
    image: "assets/user_project_8.png",
    summary: "Academic administration portal handling course enrollments, grade calculations, transcript exports, and faculty messaging.",
    description: "Robust administrative portal streamlining university operations, student GPA calculations, course syllabus access, and department notices.",
    tech: ["Java / C++", "React", "Node.js", "SQL Database", "Bootstrap"],
    architecture: "Relational database schema with transactional integrity for course registration and GPA calculation.",
    features: [
      "Automated SGPA / CGPA calculator engine",
      "Interactive semester course registration grid",
      "PDF transcript generator",
      "Department announcement notice board"
    ],
    github: "https://github.com/hamza0312615/StudentManagementSystem",
    liveUrl: "https://github.com/hamza0312615/StudentManagementSystem",
    localPath: "d:/data from drive f/ALL projects/StudentManagementSystem"
  },
  {
    id: "velora-ecommerce",
    title: "🛍️ Velora E-Commerce AI Store",
    category: "fullstack",
    categoryLabel: "Full-Stack & SaaS",
    status: "AI Recommendation Engine",
    image: "assets/user_project_9.png",
    summary: "Modern web shopping store with personalized AI product recommendations, instant search filters, and checkout cart engine.",
    description: "High-performance e-commerce platform featuring sleek visual layout, smart category filtering, cart state management, and Stripe payment gateway simulation.",
    tech: ["React", "Vite", "Node.js", "TailwindCSS", "Redux Toolkit"],
    architecture: "Redux store managing cart state with local storage persistence and mock payment gateway.",
    features: [
      "Instant product search with price and rating sliders",
      "AI visual product recommendation carousel",
      "Responsive sliding side-cart checkout drawer",
      "Order status tracking & receipt generator"
    ],
    github: "https://github.com/hamza0312615/velora",
    liveUrl: "https://github.com/hamza0312615/velora",
    localPath: "d:/data from drive f/ALL projects/velora"
  },
  {
    id: "forge-ai-gen",
    title: "⚡ Forge AI Code & Asset Generator",
    category: "ai-health",
    categoryLabel: "AI & Developer Tools",
    status: "Developer Productivity Tool",
    image: "assets/user_project_10.png",
    summary: "AI development workbench automating code scaffolding, unit test generation, and API schema mocking using Gemini LLM.",
    description: "Developer utility suite that speeds up project creation by auto-generating boilerplate code, database schemas, and documentation from natural language prompts.",
    tech: ["Python", "Gemini API", "React", "Node.js", "TailwindCSS"],
    architecture: "Prompt engineering pipeline generating syntax-validated code snippets and automated unit test suites.",
    features: [
      "Multi-language code scaffolding (React, Python, Kotlin, Java)",
      "Instant unit test & mock data generator",
      "Swagger API documentation builder",
      "Code refactoring & lint suggestion engine"
    ],
    github: "https://github.com/hamza0312615/forge-ai",
    liveUrl: "https://github.com/hamza0312615/forge-ai",
    localPath: "d:/data from drive f/ALL projects/forge ai"
  }
];

// --- 2. PARTICLE CONSTELLATION CANVAS WITH LIGHT THEME SUPPORT ---
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 18), 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#6366f1' : '#a855f7'
    });
  }

  let mouseX = -1000, mouseY = -1000;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.body.classList.contains('light-theme');

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse magnetic reaction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 0.8;
        p.y -= (dy / dist) * 0.8;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? (i % 2 === 0 ? 'rgba(2,132,199,0.5)' : 'rgba(126,34,206,0.5)') : p.color;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = 0.2 * (1 - dist2 / 130);
          ctx.strokeStyle = isLight ? `rgba(67, 56, 202, ${alpha * 0.6})` : `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// --- 3. DYNAMIC PROJECTS GALLERY RENDERER ---
let currentCategory = 'all';
let searchQuery = '';

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesCat = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">No projects found matching "${searchQuery}"</p>
        <p>Try searching for technologies like "React", "Python", "Gemini", "OpenPose", or "Kotlin".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="glass-card project-card">
      <div class="project-thumb-container">
        <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" onError="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'><rect width=\'400\' height=\'200\' fill=\'%230f172a\'/><text x=\'200\' y=\'100\' fill=\'%2306b6d4\' text-anchor=\'middle\'>${encodeURIComponent(p.title)}</text></svg>'">
        <span class="project-badge-top">${p.categoryLabel}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.summary}</p>
        <div class="tech-stack-pills">
          ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <button class="btn-card-action" onclick="openProjectModal('${p.id}')">
            Specs & Details →
          </button>
          <a href="${p.liveUrl || p.github}" target="_blank" class="btn-card-action" style="color: var(--accent-cyan);">
            🌐 Live Project Link
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// --- 4. INNOVATION DROP RADAR ENGINE ---
let currentDropIndex = 0;

function dropNextInnovation() {
  currentDropIndex = (currentDropIndex + 1) % PROJECTS_DATA.length;
  const p = PROJECTS_DATA[currentDropIndex];
  
  const display = document.getElementById('innovation-drop-display');
  if (!display) return;

  display.style.opacity = '0';
  display.style.transform = 'translateY(-15px)';

  setTimeout(() => {
    display.innerHTML = `
      <span class="drop-pulse-badge">🟢 Live Radar Spot #${currentDropIndex + 1}</span>
      <div style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">
        ${p.categoryLabel} • ${p.status}
      </div>
      <h3 style="font-size: 1.6rem; margin-bottom: 0.75rem;" class="gradient-text">${p.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.6;">${p.description}</p>
      
      <div class="tech-stack-pills" style="margin-bottom: 1.5rem;">
        ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${p.liveUrl || p.github}" target="_blank" class="btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
          🚀 Open Live Project Link
        </a>
        <button onclick="openProjectModal('${p.id}')" class="btn-secondary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
          Inspect System Architecture
        </button>
      </div>
    `;

    display.style.opacity = '1';
    display.style.transform = 'translateY(0)';
  }, 200);

  showToast(`⚡ Innovation spotlight: ${p.title}`);
}

// --- 5. MODAL DIALOG CONTROLLER ---
function openProjectModal(id) {
  const p = PROJECTS_DATA.find(item => item.id === id);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-content');
  if (!overlay || !container) return;

  container.innerHTML = `
    <div class="banner-tag">${p.categoryLabel} • ${p.status}</div>
    <h2 style="font-size: 2.2rem; margin-bottom: 1rem;" class="gradient-text">${p.title}</h2>
    
    <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Overview</h4>
      <p style="color: var(--text-secondary); line-height: 1.7;">${p.description}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-purple); margin-bottom: 0.5rem;">Key Innovations & Features</h4>
      <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.8;">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-indigo); margin-bottom: 0.5rem;">System Architecture</h4>
      <p style="color: var(--text-secondary); font-family: var(--font-code); font-size: 0.9rem; background: rgba(0,0,0,0.15); padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.08);">
        ${p.architecture}
      </p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Technologies Used</h4>
      <div class="tech-stack-pills">
        ${p.tech.map(t => `<span class="tech-pill" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${p.github}" target="_blank" class="btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.4rem;">
        📂 GitHub Repository / Live Code
      </a>
      ${p.localPath ? `
        <a href="file:///${p.localPath}" target="_blank" class="btn-secondary" style="font-size: 0.9rem; padding: 0.6rem 1.4rem;">
          📁 Local Workspace Folder
        </a>
      ` : ''}
      ${p.privacyUrl && p.privacyUrl !== '#' ? `
        <a href="file:///${p.privacyUrl}" target="_blank" class="btn-secondary" style="font-size: 0.9rem; padding: 0.6rem 1.4rem;">
          📜 Privacy Policy
        </a>
      ` : ''}
      ${p.playable ? `
        <button onclick="closeModal(); scrollToArcade('${p.id}');" class="btn-primary" style="background: var(--accent-purple); font-size: 0.9rem; padding: 0.6rem 1.4rem;">
          🎮 Play Game Now
        </button>
      ` : ''}
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function scrollToArcade(gameId) {
  const arcade = document.getElementById('arcade');
  if (arcade) {
    arcade.scrollIntoView({ behavior: 'smooth' });
    if (gameId === 'neon-circuit') switchArcadeGame('neon');
    else if (gameId === 'balloon-pop-web') switchArcadeGame('balloon');
    else if (gameId === 'mob-control-evolution') switchArcadeGame('mob');
  }
}

// --- 6. BUILT-IN HTML5 PLAYABLE ARCADE ENGINE (DYNAMIC CANVAS SCALING) ---
let activeArcadeGame = 'neon';
let arcadeAnimId = null;

function switchArcadeGame(game) {
  activeArcadeGame = game;
  document.querySelectorAll('.arcade-tab').forEach(t => t.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-${game}`);
  if (activeBtn) activeBtn.classList.add('active');
  initArcadeGame();
}

function initArcadeGame() {
  if (arcadeAnimId) cancelAnimationFrame(arcadeAnimId);

  const canvas = document.getElementById('arcade-canvas');
  if (!canvas) return;
  const stage = canvas.parentElement;

  // Full-stage dynamic width scaling fix
  const width = (canvas.width = stage.clientWidth || 800);
  const height = (canvas.height = stage.clientHeight || 480);

  const ctx = canvas.getContext('2d');

  if (activeArcadeGame === 'neon') {
    runNeonCircuitGame(ctx, width, height);
  } else if (activeArcadeGame === 'balloon') {
    runBalloonPopGame(ctx, width, height);
  } else if (activeArcadeGame === 'mob') {
    runMobControlGame(ctx, width, height);
  }
}

// Window resize listener to scale canvas dynamically
window.addEventListener('resize', () => {
  const canvas = document.getElementById('arcade-canvas');
  if (canvas && canvas.parentElement) {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
});

// Cyber Project Defender Engine - AI Auto-Targeting & Touch Responsive Arcade
function runNeonCircuitGame(ctx, width, height) {
  let playerX = width / 2;
  let score = 0;
  let multiplier = 1;
  let lasers = [];
  let projectTargets = [];
  let particles = [];
  let floatTexts = [];
  let frameCount = 0;

  let userActive = false;
  let userActiveTimeout = null;

  const projectItems = [
    { name: '⚡ VisionDX Mega', color: '#06b6d4' },
    { name: '🚨 ResQNet AI', color: '#ec4899' },
    { name: '🛰️ AQUORA Water', color: '#38bdf8' },
    { name: '📚 Study Lens AI', color: '#8b5cf6' },
    { name: '📱 Balloon Pop Deluxe', color: '#f59e0b' },
    { name: '🤟 PSL Sign AI', color: '#10b981' },
    { name: '🗣️ VoiceDoc Scribe', color: '#a855f7' },
    { name: '📖 Historical Novel', color: '#f43f5e' }
  ];

  const canvasEl = document.getElementById('arcade-canvas');

  const triggerUserActive = () => {
    userActive = true;
    if (userActiveTimeout) clearTimeout(userActiveTimeout);
    userActiveTimeout = setTimeout(() => { userActive = false; }, 3000);
  };

  // Desktop Mouse Movement
  const handleMouseMove = (e) => {
    triggerUserActive();
    const rect = canvasEl.getBoundingClientRect();
    playerX = Math.max(30, Math.min(width - 30, e.clientX - rect.left));
  };

  // Mobile Touch Dragging
  const handleTouchMove = (e) => {
    triggerUserActive();
    if (e.touches && e.touches[0]) {
      const rect = canvasEl.getBoundingClientRect();
      playerX = Math.max(30, Math.min(width - 30, e.touches[0].clientX - rect.left));
    }
  };

  canvasEl.addEventListener('mousemove', handleMouseMove);
  canvasEl.addEventListener('touchmove', handleTouchMove, { passive: true });
  canvasEl.addEventListener('touchstart', handleTouchMove, { passive: true });

  window.onkeydown = (e) => {
    triggerUserActive();
    if (e.key === 'ArrowLeft' || e.key === 'a') playerX = Math.max(30, playerX - 30);
    if (e.key === 'ArrowRight' || e.key === 'd') playerX = Math.min(width - 30, playerX + 30);
  };

  function spawnProjectTarget() {
    if (Math.random() < 0.038) {
      const item = projectItems[Math.floor(Math.random() * projectItems.length)];
      projectTargets.push({
        x: Math.random() * (width - 160) + 80,
        y: -40,
        name: item.name,
        color: item.color,
        speed: Math.random() * 1.5 + 2,
        width: 140,
        height: 32,
        hp: 2
      });
    }
  }

  function loop() {
    frameCount++;

    // AI Auto-Pilot Tracking when user is not manually steering
    if (!userActive && projectTargets.length > 0) {
      let nearestTarget = null;
      let maxY = -999;
      for (let i = 0; i < projectTargets.length; i++) {
        const t = projectTargets[i];
        if (t.y > maxY && t.y < height - 60) {
          maxY = t.y;
          nearestTarget = t;
        }
      }
      if (nearestTarget) {
        playerX += (nearestTarget.x - playerX) * 0.12;
      }
    }

    ctx.fillStyle = '#060911';
    ctx.fillRect(0, 0, width, height);

    // Cyber background grid lines
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = (frameCount * 2) % 40; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Auto-fire dual plasma lasers continuously
    if (frameCount % 8 === 0) {
      lasers.push({ x: playerX - 12, y: height - 60, vy: -12 });
      lasers.push({ x: playerX + 12, y: height - 60, vy: -12 });
    }

    spawnProjectTarget();

    // Render & Update Lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      const l = lasers[i];
      l.y += l.vy;

      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;
      ctx.fillRect(l.x - 2, l.y, 4, 14);
      ctx.shadowBlur = 0;

      if (l.y < -20) lasers.splice(i, 1);
    }

    // Render & Update Descending Project Targets
    for (let i = projectTargets.length - 1; i >= 0; i--) {
      const target = projectTargets[i];
      target.y += target.speed;

      // Draw glowing project card node
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = target.color;
      ctx.lineWidth = 2;
      ctx.shadowColor = target.color;
      ctx.shadowBlur = 12;

      ctx.beginPath();
      ctx.roundRect(target.x - target.width / 2, target.y - target.height / 2, target.width, target.height, 8);
      ctx.fill();
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(target.name, target.x, target.y + 4);

      // Check collision with dual lasers
      for (let j = lasers.length - 1; j >= 0; j--) {
        const l = lasers[j];
        if (Math.abs(l.x - target.x) < target.width / 2 && Math.abs(l.y - target.y) < target.height / 2) {
          lasers.splice(j, 1);
          target.hp--;

          // Spark particles
          for (let p = 0; p < 5; p++) {
            particles.push({
              x: l.x,
              y: l.y,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              color: target.color,
              life: 20
            });
          }

          if (target.hp <= 0) {
            score += 50 * multiplier;
            floatTexts.push({ x: target.x, y: target.y, text: `+${50 * multiplier} XP`, color: target.color, life: 30 });

            // Explosion particle cluster
            for (let p = 0; p < 15; p++) {
              particles.push({
                x: target.x,
                y: target.y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                color: target.color,
                life: 30
              });
            }

            projectTargets.splice(i, 1);
            break;
          }
        }
      }

      // Reached baseline shield line
      if (target && target.y > height - 40) {
        projectTargets.splice(i, 1);
        multiplier = 1;
        score = Math.max(0, score - 20);
      }
    }

    // Render & Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(1, p.life / 6), 0, Math.PI * 2);
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    }

    // Render Floating Score Text
    for (let i = floatTexts.length - 1; i >= 0; i--) {
      const ft = floatTexts[i];
      ft.y -= 1.2;
      ft.life--;

      ctx.fillStyle = ft.color;
      ctx.font = 'bold 14px Outfit';
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);

      if (ft.life <= 0) floatTexts.splice(i, 1);
    }

    // Render Baseline Cyber Shield
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(0, height - 30);
    ctx.lineTo(width, height - 30);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Render Player Cyber Defender Ship
    ctx.fillStyle = '#06b6d4';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(playerX, height - 55);
    ctx.lineTo(playerX - 22, height - 15);
    ctx.lineTo(playerX + 22, height - 15);
    ctx.closePath();
    ctx.fill();

    // Core glow cockpit
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(playerX, height - 35, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // HUD Display Text
    document.getElementById('arcade-score-text').innerText = userActive 
      ? `DEFENDER SCORE: ${score} XP | MANUAL STEERING ACTIVE (Touch / Mouse / Arrow)` 
      : `DEFENDER SCORE: ${score} XP | 🤖 AI AUTO-TARGETING ACTIVE (Touch or move mouse to steer)`;

    arcadeAnimId = requestAnimationFrame(loop);
  }

  loop();
}

// Project Balloon Pop Engine - Interactive Project Bubble Popping Game
function runBalloonPopGame(ctx, width, height) {
  let score = 0;
  let balloons = [];
  let particles = [];
  let floatTexts = [];
  let frameCount = 0;

  let userActive = false;
  let userActiveTimeout = null;

  const projectItems = [
    { name: '⚡ VisionDX Mega', color: '#06b6d4' },
    { name: '🚨 ResQNet AI', color: '#ec4899' },
    { name: '🛰️ AQUORA Water', color: '#38bdf8' },
    { name: '📚 Study Lens AI', color: '#8b5cf6' },
    { name: '📱 Balloon Pop Deluxe', color: '#f59e0b' },
    { name: '🤟 PSL Sign AI', color: '#10b981' },
    { name: '🗣️ VoiceDoc Scribe', color: '#a855f7' },
    { name: '📖 Historical Novel', color: '#f43f5e' }
  ];

  const triggerUserActive = () => {
    userActive = true;
    if (userActiveTimeout) clearTimeout(userActiveTimeout);
    userActiveTimeout = setTimeout(() => { userActive = false; }, 4000);
  };

  // Web Audio API Synthesizer Pop Sound
  function playPopSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {}
  }

  function spawnBalloon() {
    if (Math.random() < 0.045) {
      const item = projectItems[Math.floor(Math.random() * projectItems.length)];
      balloons.push({
        x: Math.random() * (width - 120) + 60,
        y: height + 50,
        radius: Math.random() * 10 + 26,
        name: item.name,
        color: item.color,
        speed: Math.random() * 1.5 + 1.8,
        wobble: Math.random() * Math.PI * 2
      });
    }
  }

  function popBalloon(index, isAuto = false) {
    const b = balloons[index];
    if (!b) return;

    playPopSound();
    score += 50;

    floatTexts.push({
      x: b.x,
      y: b.y,
      text: isAuto ? `🤖 AUTO-POP! +50 XP` : `💥 POP! +50 XP`,
      color: b.color,
      life: 35
    });

    // Particle Burst
    for (let p = 0; p < 18; p++) {
      particles.push({
        x: b.x,
        y: b.y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        color: b.color,
        life: 25
      });
    }

    balloons.splice(index, 1);
  }

  const canvasEl = document.getElementById('arcade-canvas');

  const handlePointerPop = (clientX, clientY) => {
    triggerUserActive();
    const rect = canvasEl.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    for (let i = balloons.length - 1; i >= 0; i--) {
      const b = balloons[i];
      const dist = Math.hypot(clickX - b.x, clickY - b.y);
      if (dist < b.radius + 20) {
        popBalloon(i, false);
        break;
      }
    }
  };

  canvasEl.onclick = (e) => handlePointerPop(e.clientX, e.clientY);
  canvasEl.ontouchstart = (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerPop(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  function loop() {
    frameCount++;
    ctx.fillStyle = '#080c16';
    ctx.fillRect(0, 0, width, height);

    // Floating background bubbles
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
    ctx.lineWidth = 1;
    for (let y = (frameCount * 0.5) % 60; y < height; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    spawnBalloon();

    // AI Auto-Pop Showcase when user is idle
    if (!userActive && frameCount % 45 === 0 && balloons.length > 0) {
      const randomIndex = Math.floor(Math.random() * balloons.length);
      popBalloon(randomIndex, true);
    }

    // Render & Update Balloons
    for (let i = balloons.length - 1; i >= 0; i--) {
      const b = balloons[i];
      b.y -= b.speed;
      b.wobble += 0.04;
      b.x += Math.sin(b.wobble) * 0.8;

      // Draw Balloon Sphere
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Specular highlight reflection
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.25, 0, Math.PI * 2);
      ctx.fill();

      // Balloon string
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + b.radius);
      ctx.lineTo(b.x + Math.sin(b.wobble) * 4, b.y + b.radius + 20);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Project Badge Label below balloon
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = b.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(b.x - 65, b.y + b.radius + 22, 130, 22, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(b.name, b.x, b.y + b.radius + 37);

      if (b.y < -70) balloons.splice(i, 1);
    }

    // Render & Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(1, p.life / 5), 0, Math.PI * 2);
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    }

    // Render Floating Text
    for (let i = floatTexts.length - 1; i >= 0; i--) {
      const ft = floatTexts[i];
      ft.y -= 1.2;
      ft.life--;

      ctx.fillStyle = ft.color;
      ctx.font = 'bold 14px Outfit';
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);

      if (ft.life <= 0) floatTexts.splice(i, 1);
    }

    // HUD Text Display
    document.getElementById('arcade-score-text').innerText = userActive 
      ? `PROJECT BUBBLES POPPED SCORE: ${score} XP | MANUAL BUBBLE POPPING (Click/Touch)` 
      : `PROJECT BUBBLES POPPED SCORE: ${score} XP | 🎈 AI AUTO-POP SHOWCASE (Click/Touch balloons to pop!)`;

    arcadeAnimId = requestAnimationFrame(loop);
  }

  loop();
}

// --- 7. RESUME GENERATOR / MODAL FOR MUHAMMAD HAMZA ---
function openResumeModal() {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-content');
  if (!overlay || !container) return;

  container.innerHTML = `
    <div style="text-align:center; margin-bottom: 1.5rem;">
      <img src="assets/hamza_avatar.png" alt="Muhammad Hamza" style="width: 90px; height: 90px; border-radius: 50%; border: 3px solid var(--accent-cyan); box-shadow: var(--shadow-neon-cyan); object-fit: cover; margin-bottom: 0.75rem;">
      <h2 style="font-size: 2.2rem;" class="gradient-text">Muhammad Hamza</h2>
      <p style="color: var(--accent-amber); font-weight:700; margin-top:0.25rem;">🏆 Top 12 Finalist @ Google AI Seekho Builders Day • Top 10 Finalist @ GDG IST</p>
      <p style="color: var(--accent-cyan); font-weight:600; margin-top:0.25rem;">Computer Science Student @ Institute of Space Technology (IST)</p>
      <p style="color: var(--text-secondary); font-size: 0.9rem; font-style: italic; margin-top:0.25rem;">"Turning ideas into impact from satellite-based water monitoring to community-driven projects."</p>
    </div>

    <div style="background: rgba(0,0,0,0.15); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
      <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Professional Summary</h3>
      <p style="color: var(--text-secondary); line-height: 1.7;">
        Passionate Computer Science student at the <strong>Institute of Space Technology (IST)</strong>, <strong>Google AI Seekho Builders Day Top 12 Finalist</strong>, <strong>GDG IST Challenge Top 10 Finalist</strong>, and published author (pen name HAMANNAN). Experienced in building offline-first AI healthcare diagnostics (VisionDX Mega), remote-sensing water monitoring platforms (AQUORA Water Watch), sign language translation pipelines, and custom HTML5 web games.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(0,0,0,0.15); padding: 1.25rem; border-radius: var(--radius-md);">
        <h4 style="color: var(--accent-indigo); margin-bottom: 0.5rem;">Specialized Skills</h4>
        <ul style="color: var(--text-secondary); padding-left: 1rem; font-size: 0.9rem; line-height: 1.7;">
          <li>Gemini API, Groq LLM, MediaPipe, OpenCV, OpenPose</li>
          <li>React, Vite, Kotlin, Python, Flask, Node.js, TailwindCSS</li>
          <li>Satellite Remote Sensing (NDWI / Sentinel / Landsat)</li>
          <li>HTML5 Canvas Engine, 2D Physics & Web Audio</li>
        </ul>
      </div>

      <div style="background: rgba(0,0,0,0.15); padding: 1.25rem; border-radius: var(--radius-md);">
        <h4 style="color: var(--accent-purple); margin-bottom: 0.5rem;">Honors & Achievements</h4>
        <ul style="color: var(--text-secondary); padding-left: 1rem; font-size: 0.9rem; line-height: 1.7;">
          <li>🏆 <strong>Google AI Seekho Builders Day Top 12 Finalist</strong></li>
          <li>🏆 <strong>GDG IST Challenge Top 10 Finalist</strong> (VisionDX Mega)</li>
          <li>⚙️ <strong>Mind to Machine (MTM) Competition Finalist</strong></li>
          <li>📖 Published Novelist (<em>The Vase Beneath the Ashes</em>)</li>
        </ul>
      </div>
    </div>

    <div style="display: flex; justify-content: center; gap: 1rem;">
      <button onclick="downloadResumePDF()" class="btn-primary">
        📥 Download Muhammad Hamza's CV
      </button>
      <button onclick="closeModal()" class="btn-secondary">
        Close Window
      </button>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function downloadResumePDF() {
  const content = `
MUHAMMAD HAMZA - CV & PROFILE
=============================
Education: Computer Science Student @ Institute of Space Technology (IST)
Contact: hamza302616@gmail.com
LinkedIn: https://www.linkedin.com/in/muhammad-hamza-55368a3b4/
GitHub: https://github.com/hamza0312615

HONORS & ACHIEVEMENTS:
- Top 12 Finalist, Google AI Seekho Builders Day 2026
- Top 10 Finalist, GDG IST Challenge (VisionDX Mega)
- Finalist, Mind to Machine (MTM) Competition
- Published Author: "The Vase Beneath the Ashes" (Historical Fiction Novel under pen name HAMANNAN)
- Philanthropy: Khairul Nas (خير الناس) Aid Channel

SUMMARY:
"Turning ideas into impact from satellite-based water monitoring to community-driven projects."
Computer Science student at IST building AI-powered diagnostic tools, remote sensing water platforms, and assistive technologies for underserved communities.
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Muhammad_Hamza_Resume.txt';
  a.click();
  showToast('📄 Muhammad Hamza\'s Resume downloaded successfully!');
}

// --- 8. TOAST NOTIFICATION & CONTACT FORM ---
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>🟢</span> <div>${message}</div>`;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3500);
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  showToast(`Thank you, ${name}! Your message has been sent to Muhammad Hamza.`);
  e.target.reset();
}

// --- 9. INITIALIZATION ON DOM READY & MOBILE MENU TOGGLE ---
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  renderProjects();
  initArcadeGame();
  dropNextInnovation(); // Initialize first innovation drop

  // Mobile navigation drawer toggle
  const mobileBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // Category filter tabs
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Search input filter
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      themeBtn.innerText = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
    });
  }

  // Modal overlay click outside
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
});
