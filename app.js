/**
 * Harsh (Hanamanthagouda Policepatil) - Portfolio Application Logic
 * Minimalist, Fast, Monochromatic, Pure Vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCopyEmail();
  initProjectFilters();
  initCommandPalette();
  initMobileNav();
  initFooterYear();
  initSmoothScrollTracking();
});

/* ==========================================================================
   1. THEME MANAGEMENT (Black & White Modes)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const iconMoon = themeToggleBtn ? themeToggleBtn.querySelector(".icon-moon") : null;
  const iconSun = themeToggleBtn ? themeToggleBtn.querySelector(".icon-sun") : null;

  // Determine initial theme
  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  // Global keyboard shortcut: 'T' toggles theme
  window.addEventListener("keydown", (e) => {
    // Don't trigger if user is typing in an input or textarea
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key === "t" || e.key === "T") {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    }
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      if (iconMoon) iconMoon.style.display = "none";
      if (iconSun) iconSun.style.display = "block";
    } else {
      if (iconMoon) iconMoon.style.display = "block";
      if (iconSun) iconSun.style.display = "none";
    }
  }
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

/* ==========================================================================
   2. COPY EMAIL TO CLIPBOARD
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-email") || "23110126@iitgn.ac.in";
    try {
      await navigator.clipboard.writeText(email);
      showToast("Copied " + email + " to clipboard");
    } catch (err) {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Copied " + email + " to clipboard");
    }
  });
}

/* ==========================================================================
   3. PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   4. COMMAND PALETTE (CMD+K / CTRL+K)
   ========================================================================== */
function initCommandPalette() {
  const cmdPaletteBtn = document.getElementById("cmdPaletteBtn");
  const paletteOverlay = document.getElementById("paletteOverlay");
  const paletteInput = document.getElementById("paletteInput");
  const paletteResults = document.getElementById("paletteResults");

  if (!paletteOverlay || !paletteInput || !paletteResults) return;

  const commands = [
    // Navigation
    { title: "Go to About", category: "Navigation", icon: "👤", action: () => scrollToSection("about") },
    { title: "Go to Education", category: "Navigation", icon: "🎓", action: () => scrollToSection("education") },
    { title: "Go to Experience", category: "Navigation", icon: "💼", action: () => scrollToSection("experience") },
    { title: "Go to Publications & Research", category: "Navigation", icon: "📄", action: () => scrollToSection("publications") },
    { title: "Go to Projects", category: "Navigation", icon: "🚀", action: () => scrollToSection("projects") },
    { title: "Open Blog & Writing (Coming Soon)", category: "Navigation", icon: "✍️", action: () => window.location.href = "./blog/index.html" },
    { title: "Go to Skills", category: "Navigation", icon: "⚡", action: () => scrollToSection("skills") },
    { title: "Go to Contact", category: "Navigation", icon: "✉️", action: () => scrollToSection("contact") },

    // Resumes & Downloads
    {
      title: "Download Research CV (PDF)",
      category: "Resumes",
      icon: "📥",
      action: () => window.open("./Research_CV.pdf", "_blank")
    },
    {
      title: "Download Industry Resume (PDF)",
      category: "Resumes",
      icon: "📥",
      action: () => window.open("./Industry_CV.pdf", "_blank")
    },

    // Actions
    {
      title: "Toggle Dark / Light Theme",
      category: "Actions",
      icon: "🌓",
      shortcut: "T",
      action: () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        const iconMoon = document.querySelector(".icon-moon");
        const iconSun = document.querySelector(".icon-sun");
        if (newTheme === "light") {
          if (iconMoon) iconMoon.style.display = "none";
          if (iconSun) iconSun.style.display = "block";
        } else {
          if (iconMoon) iconMoon.style.display = "block";
          if (iconSun) iconSun.style.display = "none";
        }
      }
    },
    {
      title: "Copy Email Address",
      category: "Actions",
      icon: "📋",
      action: () => {
        navigator.clipboard.writeText("23110126@iitgn.ac.in");
        showToast("Copied 23110126@iitgn.ac.in to clipboard");
      }
    },
    {
      title: "Print Portfolio / Resume",
      category: "Actions",
      icon: "🖨️",
      action: () => window.print()
    },

    // External Profiles & Research
    {
      title: "GitHub Profile (@harshu0117)",
      category: "Links",
      icon: "🐙",
      action: () => window.open("https://github.com/harshu0117", "_blank")
    },
    {
      title: "LinkedIn Profile",
      category: "Links",
      icon: "🔗",
      action: () => window.open("https://www.linkedin.com/in/hanamanthagouda-policepatil-1701h/", "_blank")
    },
    {
      title: "SSRN Author Research Profile",
      category: "Links",
      icon: "📚",
      action: () => window.open("https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=12337549", "_blank")
    },
    {
      title: "Paper: Cricket Win Probability (Kalman Filter)",
      category: "Research",
      icon: "🏏",
      action: () => window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7104878", "_blank")
    },
    {
      title: "Paper: AI Investment & Computational Capital",
      category: "Research",
      icon: "💡",
      action: () => window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7389579", "_blank")
    },
    {
      title: "Paper: The Crowding Toll on Rented Cognition",
      category: "Research",
      icon: "📊",
      action: () => window.open("https://docs.google.com/document/d/1dSqhKvSe_O2G_LEIMBGbB883poNFkDRGZbn9akO1TEY/edit?usp=sharing", "_blank")
    }
  ];

  let selectedIndex = 0;
  let currentFiltered = [...commands];

  function openPalette() {
    paletteOverlay.classList.add("active");
    paletteInput.value = "";
    selectedIndex = 0;
    filterCommands("");
    setTimeout(() => paletteInput.focus(), 50);
  }

  function closePalette() {
    paletteOverlay.classList.remove("active");
    paletteInput.value = "";
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function filterCommands(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      currentFiltered = [...commands];
    } else {
      currentFiltered = commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(q) ||
          cmd.category.toLowerCase().includes(q)
      );
    }
    selectedIndex = 0;
    renderResults();
  }

  function renderResults() {
    if (currentFiltered.length === 0) {
      paletteResults.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.88rem;">
          No matching commands or pages found.
        </div>
      `;
      return;
    }

    // Group by category
    const groups = {};
    currentFiltered.forEach((cmd, idx) => {
      if (!groups[cmd.category]) groups[cmd.category] = [];
      groups[cmd.category].push({ ...cmd, globalIndex: idx });
    });

    let html = "";
    Object.keys(groups).forEach((cat) => {
      html += `<div class="palette-group-title">${cat}</div>`;
      groups[cat].forEach((item) => {
        const isSelected = item.globalIndex === selectedIndex;
        html += `
          <div class="palette-item ${isSelected ? "selected" : ""}" data-index="${item.globalIndex}">
            <div class="palette-item-left">
              <span>${item.icon}</span>
              <span>${escapeHTML(item.title)}</span>
            </div>
            ${item.shortcut ? `<span class="palette-item-hint"><kbd>${item.shortcut}</kbd></span>` : ""}
          </div>
        `;
      });
    });

    paletteResults.innerHTML = html;

    paletteResults.querySelectorAll(".palette-item").forEach((item) => {
      item.addEventListener("click", () => {
        const idx = parseInt(item.getAttribute("data-index"), 10);
        executeCommand(idx);
      });
    });
  }

  function executeCommand(index) {
    if (currentFiltered[index]) {
      closePalette();
      currentFiltered[index].action();
    }
  }

  // Key event listeners
  if (cmdPaletteBtn) {
    cmdPaletteBtn.addEventListener("click", openPalette);
  }

  paletteOverlay.addEventListener("click", (e) => {
    if (e.target === paletteOverlay) {
      closePalette();
    }
  });

  paletteInput.addEventListener("input", (e) => {
    filterCommands(e.target.value);
  });

  paletteInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % currentFiltered.length;
      renderResults();
      scrollSelectedIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + currentFiltered.length) % currentFiltered.length;
      renderResults();
      scrollSelectedIntoView();
    } else if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(selectedIndex);
    } else if (e.key === "Escape") {
      closePalette();
    }
  });

  function scrollSelectedIntoView() {
    const selectedEl = paletteResults.querySelector(".palette-item.selected");
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: "nearest" });
    }
  }

  // Global Ctrl+K / Cmd+K listener
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (paletteOverlay.classList.contains("active")) {
        closePalette();
      } else {
        openPalette();
      }
    }
    if (e.key === "Escape" && paletteOverlay.classList.contains("active")) {
      closePalette();
    }
  });
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   5. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const siteNav = document.getElementById("siteNav");
  if (!toggleBtn || !siteNav) return;

  toggleBtn.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

/* ==========================================================================
   6. FOOTER YEAR
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById("footerYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   7. ACTIVE NAV LINK TRACKING ON SCROLL
   ========================================================================== */
function initSmoothScrollTracking() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        link.classList.remove("active");
        if (href === `#${current}`) {
          link.classList.add("active");
        }
      }
    });
  });
}
