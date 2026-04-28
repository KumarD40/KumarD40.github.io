/* ═══════════════════════════════════════════════════════════════
   DILIP KUMAR — PORTFOLIO SCRIPT
   All content data is stored in objects below.
   ✏️  EDIT the data objects to update skills, projects, experience.
   ═══════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════
   ✏️  DATA — EDIT THIS SECTION TO CUSTOMISE YOUR PORTFOLIO
══════════════════════════════════════════════════════════════ */

/**
 * SKILLS
 * Add/remove categories or individual skills freely.
 * icon: Phosphor icon class name (https://phosphoricons.com)
 */
const skills = [
  {
    category: "Core Infrastructure",
    icon: "ph ph-hard-drives",
    items: ["Linux (RHEL)", "Linux (SUSE)", "OpenVMS", "VMware vSphere", "Bare Metal Admin"]
  },
  {
    category: "Cloud Platforms",
    icon: "ph ph-cloud",
    items: ["AWS (EC2, S3, VPC)", "Microsoft Azure", "Cloud Migration", "IAM & Security"]
  },
  {
    category: "DevOps & Automation",
    icon: "ph ph-gear-six",
    items: ["Ansible", "Terraform", "CI/CD Pipelines", "Infrastructure as Code"]
  },
  {
    category: "Containers & Orchestration",
    icon: "ph ph-package",
    items: ["Docker", "Kubernetes", "Container Registry", "Helm Charts"]
  },
  {
    category: "Scripting & Programming",
    icon: "ph ph-code",
    items: ["DCL Scripting", "Shell / Bash", "Python", "Java"]
  },
  {
    category: "AI & Modern Skills",
    icon: "ph ph-robot",
    items: ["Prompt Engineering", "AI-assisted Dev", "LLM Tooling"]
  },
  {
    category: "Networking & DNS",
    icon: "ph ph-wifi-high",
    items: ["TCP/IP", "DNS (BIND)", "VPN", "Firewall Rules"]
  },
  {
    category: "Soft Skills",
    icon: "ph ph-users-three",
    items: ["Incident Management", "Production Support", "DR Planning", "Client Communication"]
  }
];

/**
 * EXPERIENCE
 * Add new entries at the top to show most recent first.
 * period: Human-readable date range
 * achievements: array of bullet points
 */
const experience = [
  {
    company: "NTT Data",
    role: "Systems Administrator — OpenVMS & Linux",
    period: "2022 – Present",
    achievements: [
      "Manage enterprise OpenVMS and Linux (RHEL/CentOS) infrastructure for key clients including Sylvamo.",
      "Lead DNS resolver migration from legacy PTC DNS servers to Azure-hosted resolvers across production OpenVMS clusters.",
      "Author and execute change management runbooks for planned maintenance on multi-node clusters with zero unplanned downtime.",
      "Developed automated DCL scripts for UAF account reporting and health checks, reducing manual effort by 60%.",
      "Support VMware virtualisation and disaster recovery operations including LUN presentation and DR failover testing."
    ]
  },
  {
    company: "TCS",
    role: "Senior System Administrator",
    period: "2019 – 2022",
    achievements: [
      "Managed large-scale Linux server estate across RHEL and CentOS for enterprise banking and manufacturing clients.",
      "Implemented Ansible playbooks for automated patch management, reducing monthly patching effort by 40%.",
      "Supported high-availability clustering and load-balancing configurations, maintaining 99.95% uptime SLAs.",
      "Coordinated multi-team incident response for P1 production outages, consistently achieving RTO under 30 minutes."
    ]
  },
  {
    company: "Capgemini",
    role: "Infrastructure Engineer",
    period: "2017 – 2019",
    achievements: [
      "Administered Linux and Windows server infrastructure for European automotive and retail clients.",
      "Designed and documented DR runbooks for critical application recovery across geographically distributed data centres.",
      "Performed capacity planning and performance tuning for database and application servers under peak load.",
      "Collaborated with cloud architects on early-stage AWS workload migrations from on-premises data centres."
    ]
  },
  {
    company: "IBM",
    role: "System Engineer",
    period: "2015 – 2017",
    achievements: [
      "Provided Level 2 and Level 3 support for Linux infrastructure across global enterprise accounts.",
      "Managed storage systems, backup policies, and data lifecycle management using IBM Spectrum Protect.",
      "Automated routine monitoring and alerting tasks using shell scripts and cron jobs, reducing ops overhead.",
      "Maintained compliance with ITIL service management processes including change, incident, and problem management."
    ]
  },
  {
    company: "ISRO",
    role: "Systems Support Engineer",
    period: "2013 – 2015",
    achievements: [
      "Supported mission-critical Linux and Unix infrastructure within ISRO's Space Science Data Centre.",
      "Maintained high-availability server environments for scientific data processing and telemetry applications.",
      "Monitored system performance and ensured resource availability during active satellite mission windows.",
      "Contributed to infrastructure documentation and internal knowledge-base articles for operations continuity."
    ]
  }
];

/**
 * PROJECTS
 * Add or remove project entries here.
 * github: Replace '#' with your actual GitHub repo URL.
 * stack: Technologies used (displayed as tags).
 */
const projects = [
  {
    title: "Enterprise Automation with Ansible & Terraform",
    description:
      "Designed and implemented end-to-end infrastructure automation covering server provisioning, configuration management, and compliance enforcement across 200+ Linux nodes. Reduced provisioning time from days to under an hour.",
    stack: ["Ansible", "Terraform", "Linux", "RHEL", "GitLab CI"],
    // ✏️ EDIT: Replace with your actual GitHub repo link
    github: "https://github.com/dilipkumar/ansible-terraform-automation"
  },
  {
    title: "AWS & Azure Cloud Infrastructure Setup",
    description:
      "Built hybrid cloud infrastructure spanning AWS (EC2, VPC, S3, IAM) and Azure (VMs, VNET, Azure DNS) for a mid-size enterprise migration. Established network peering, security baselines, and cost governance policies.",
    stack: ["AWS", "Azure", "Terraform", "VPC", "IAM", "DNS"],
    github: "https://github.com/dilipkumar/cloud-infrastructure"
  },
  {
    title: "Kubernetes-based Application Deployment",
    description:
      "Containerised a multi-service application and deployed it on a self-managed Kubernetes cluster. Implemented HPA, rolling deployments, Ingress routing, and namespace-based RBAC for team isolation.",
    stack: ["Kubernetes", "Docker", "Helm", "NGINX Ingress", "YAML"],
    github: "https://github.com/dilipkumar/k8s-deployment"
  },
  {
    title: "AI-powered Infrastructure Automation",
    description:
      "Leveraged prompt engineering and LLM APIs to generate Ansible playbooks, troubleshooting runbooks, and change management scripts from natural language inputs. Cut runbook authoring time by 70%.",
    stack: ["Python", "OpenAI API", "Ansible", "Prompt Engineering", "Jinja2"],
    github: "https://github.com/dilipkumar/ai-infra-automation"
  }
];

/**
 * CLIENTS / COMPANIES
 * Add or remove companies here.
 * sector: One-line industry description.
 */
const clients = [
  { name: "ISRO",      icon: "ph ph-rocket-launch",    sector: "Space & Research" },
  { name: "IBM",       icon: "ph ph-monitor",           sector: "Global Technology" },
  { name: "Capgemini", icon: "ph ph-buildings",         sector: "IT Consulting" },
  { name: "TCS",       icon: "ph ph-briefcase",         sector: "IT Services" },
  { name: "NTT Data",  icon: "ph ph-network",           sector: "Managed Services" }
];

/* ══════════════════════════════════════════════════════════════
   HERO — rotating titles
══════════════════════════════════════════════════════════════ */
const heroTitles = [
  "Senior Linux Administrator",
  "Site Reliability Engineer",
  "DevOps Engineer",
  "Cloud Infrastructure Engineer",
  "OpenVMS Specialist"
];

/* ══════════════════════════════════════════════════════════════
   RENDER FUNCTIONS
══════════════════════════════════════════════════════════════ */

/** Render skills grid */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = skills.map((group, i) => `
    <div class="skill-group reveal" style="transition-delay: ${i * 60}ms">
      <div class="skill-group-icon"><i class="${group.icon}"></i></div>
      <p class="skill-group-name">${group.category}</p>
      <div class="skill-tags">
        ${group.items.map(s => `<span class="skill-tag">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/** Render experience timeline */
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline) return;

  timeline.innerHTML = experience.map((job, i) => `
    <div class="timeline-item" style="transition-delay: ${i * 80}ms">
      <div class="timeline-dot"></div>
      <div class="exp-card">
        <div class="exp-header">
          <p class="exp-company">${job.company}</p>
          <span class="exp-period">${job.period}</span>
        </div>
        <p class="exp-role">${job.role}</p>
        <ul class="exp-achievements">
          ${job.achievements.map(a => `<li>${a}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/** Render projects grid */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((proj, i) => `
    <div class="project-card" style="transition-delay: ${i * 80}ms">
      <p class="project-num">// project_${String(i + 1).padStart(2, "0")}</p>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.description}</p>
      <div class="project-stack">
        ${proj.stack.map(t => `<span class="stack-tag">${t}</span>`).join("")}
      </div>
      <a href="${proj.github}" target="_blank" class="project-link">
        <i class="ph ph-github-logo"></i> View on GitHub <i class="ph ph-arrow-right"></i>
      </a>
    </div>
  `).join("");
}

/** Render clients grid */
function renderClients() {
  const grid = document.getElementById("clientsGrid");
  if (!grid) return;

  grid.innerHTML = clients.map((c, i) => `
    <div class="client-card" style="transition-delay: ${i * 80}ms">
      <i class="${c.icon} client-icon"></i>
      <p class="client-name">${c.name}</p>
      <p class="client-sector">${c.sector}</p>
    </div>
  `).join("");
}

/* ══════════════════════════════════════════════════════════════
   HERO TITLE TYPEWRITER
══════════════════════════════════════════════════════════════ */
function initTitleRotator() {
  const el = document.getElementById("heroTitle");
  if (!el) return;
  let idx = 0;

  function next() {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => {
      idx = (idx + 1) % heroTitles.length;
      el.textContent = heroTitles[idx];
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400);
  }

  el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  setInterval(next, 3000);
}

/* ══════════════════════════════════════════════════════════════
   TERMINAL BADGE TYPEWRITER
══════════════════════════════════════════════════════════════ */
function initTerminalTypewriter() {
  const el = document.getElementById("terminalText");
  if (!el) return;
  const messages = [
    "whoami",
    "echo 'Senior Infrastructure Engineer'",
    "uptime --since 2013",
    "grep -r 'SRE' career/*.log"
  ];
  let msgIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let paused = false;

  function type() {
    const current = messages[msgIdx];
    if (paused) { paused = false; setTimeout(type, 1200); return; }

    if (!deleting && charIdx <= current.length) {
      el.textContent = current.slice(0, charIdx++);
      setTimeout(type, charIdx > current.length ? 0 : 70);
      if (charIdx > current.length) { paused = true; deleting = true; setTimeout(type, 1500); }
    } else if (deleting && charIdx >= 0) {
      el.textContent = current.slice(0, charIdx--);
      if (charIdx < 0) {
        deleting = false;
        charIdx = 0;
        msgIdx = (msgIdx + 1) % messages.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, 35);
      }
    }
  }
  type();
}

/* ══════════════════════════════════════════════════════════════
   NAVBAR: scroll + active section + hamburger
══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll(".nav-link");

  // Scroll class
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // Active section highlight
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
}

/* ══════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — reveal animations
══════════════════════════════════════════════════════════════ */
function initRevealObserver() {
  const targets = document.querySelectorAll(".reveal, .timeline-item, .project-card, .client-card, .skill-group");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════════════ */
function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top  = mouseY + "px";
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top  = ringY + "px";
    requestAnimationFrame(animateRing);
  })();

  // Enlarge ring on hover
  document.querySelectorAll("a, button, .skill-group, .project-card, .client-card, .exp-card").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
  });
}

/* ══════════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    note.textContent = "✓ Message sent! I'll get back to you soon.";
    note.style.color = "var(--green)";
    form.reset();
    setTimeout(() => { note.textContent = ""; }, 5000);
  });
}

/* ══════════════════════════════════════════════════════════════
   FOOTER YEAR
══════════════════════════════════════════════════════════════ */
function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ══════════════════════════════════════════════════════════════
   RESUME BUTTON — placeholder alert
══════════════════════════════════════════════════════════════ */
function initResumeBtn() {
  const btn = document.getElementById("resumeBtn");
  if (!btn) return;
  btn.addEventListener("click", e => {
    e.preventDefault();
    // ✏️ EDIT: Replace href below with your actual resume PDF path or URL
    // Example: window.open('resume/dilipkumar-resume.pdf', '_blank');
    alert("✏️ Add your resume PDF to the repo and update the link in script.js → initResumeBtn()");
  });
}

/* ══════════════════════════════════════════════════════════════
   INIT — runs when DOM is ready
══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render dynamic content from data objects
  renderSkills();
  renderExperience();
  renderProjects();
  renderClients();

  // 2. Re-observe newly rendered elements
  initRevealObserver();

  // 3. UI behaviours
  initNavbar();
  initCursor();
  initTitleRotator();
  initTerminalTypewriter();
  initContactForm();
  initFooterYear();
  initResumeBtn();
});
