/**
 * ==============================================================================
 * PORTFOLIO DATA RENDERER
 * ==============================================================================
 * Dynamically and securely renders sections from PORTFOLIO_CONFIG into the DOM.
 * This guarantees the user only needs to edit `js/config.js` to update content.
 * ==============================================================================
 */

(function () {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("PORTFOLIO_CONFIG not found. Please ensure config.js is loaded.");
    return;
  }

  // Helper for safe text insertion
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 1. RENDER HERO & PERSONAL DATA
  function renderHero() {
    const { personal } = config;
    if (!personal) return;

    // Page Title
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) {
      pageTitle.textContent = `${personal.fullName} | Portfolio`;
    }

    // Nav Brand
    const navLogoName = document.getElementById("nav-logo-name");
    if (navLogoName) {
      navLogoName.textContent = personal.fullName;
    }

    // Hero Elements
    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = personal.fullName;

    const heroPrefix = document.getElementById("hero-prefix");
    if (heroPrefix) heroPrefix.textContent = personal.headlinePrefix || "Hello, I'm";

    const heroSubtitle = document.getElementById("hero-subtitle");
    if (heroSubtitle) heroSubtitle.textContent = personal.headlineSubtitle || "";

    const heroBio = document.getElementById("hero-bio");
    if (heroBio) heroBio.textContent = personal.heroDescription || "";

    const heroAvatar = document.getElementById("hero-avatar");
    if (heroAvatar) {
      heroAvatar.src = personal.avatar || "assets/images/avatar-placeholder.svg";
      heroAvatar.alt = `${personal.fullName} Profile Photograph`;
    }

    // Resume Links
    const resumeLinks = document.querySelectorAll(".btn-resume-download");
    resumeLinks.forEach((link) => {
      link.href = personal.resumeUrl || "#";
    });

    // Hero Availability Badge
    const availBadge = document.getElementById("hero-availability-badge");
    if (availBadge && personal.availabilityBadge) {
      availBadge.innerHTML = `<span class="status-dot"></span>${escapeHTML(personal.availabilityBadge)}`;
    }

    // Social Links Container in Hero
    const heroSocials = document.getElementById("hero-social-links");
    if (heroSocials) {
      heroSocials.innerHTML = `
        <a href="${escapeHTML(personal.github)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="GitHub Profile">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="${escapeHTML(personal.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn Profile">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:${escapeHTML(personal.email)}" class="social-icon-btn" aria-label="Send Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      `;
    }
  }

  // 2. RENDER ABOUT ME
  function renderAbout() {
    const { about, personal } = config;
    if (!about) return;

    const aboutGreeting = document.getElementById("about-greeting");
    if (aboutGreeting) aboutGreeting.textContent = about.greeting || "";

    const aboutBioContainer = document.getElementById("about-bio-container");
    if (aboutBioContainer && about.bioParagraphs) {
      aboutBioContainer.innerHTML = about.bioParagraphs
        .map((p) => `<p class="about-text">${escapeHTML(p)}</p>`)
        .join("");
    }

    const aboutCardsContainer = document.getElementById("about-quick-cards");
    if (aboutCardsContainer && about.quickCards) {
      aboutCardsContainer.innerHTML = about.quickCards
        .map(
          (card) => `
        <div class="about-quick-card glass-panel">
          <div class="quick-card-icon">
            <i class="${escapeHTML(card.icon)}"></i>
          </div>
          <div class="quick-card-content">
            <h4 class="quick-card-title">${escapeHTML(card.title)}</h4>
            <p class="quick-card-desc">${escapeHTML(card.description)}</p>
          </div>
        </div>
      `
        )
        .join("");
    }
  }

  // 3. RENDER SKILLS
  function renderSkills() {
    const { skills } = config;
    const container = document.getElementById("skills-container");
    if (!container || !skills || !skills.categories) return;

    container.innerHTML = skills.categories
      .map(
        (cat) => `
      <div class="skills-category-card glass-panel" data-category="${escapeHTML(cat.name)}">
        <div class="skills-category-header">
          <div class="category-icon-box" style="--cat-accent: ${cat.color || '#6366f1'}">
            <i class="${escapeHTML(cat.icon)}"></i>
          </div>
          <div>
            <h3 class="category-title">${escapeHTML(cat.name)}</h3>
            <span class="category-count">${cat.items.length} Skills</span>
          </div>
        </div>
        <div class="skills-items-grid">
          ${cat.items
            .map(
              (item) => `
            <div class="skill-item-card">
              <div class="skill-item-top">
                <div class="skill-item-info">
                  <i class="${escapeHTML(item.icon)} skill-item-icon"></i>
                  <span class="skill-name">${escapeHTML(item.name)}</span>
                </div>
                <span class="skill-level-badge">${escapeHTML(item.level)}</span>
              </div>
              <p class="skill-desc">${escapeHTML(item.description)}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // 4. RENDER PROJECTS
  function renderProjects(filterCategory = "All") {
    const { projects } = config;
    const grid = document.getElementById("projects-grid");
    const filtersContainer = document.getElementById("projects-filter-bar");
    if (!grid || !projects || !projects.list) return;

    // Render filter buttons once
    if (filtersContainer && filtersContainer.children.length === 0) {
      filtersContainer.innerHTML = projects.categories
        .map(
          (cat, idx) => `
        <button class="filter-btn ${cat === "All" ? "active" : ""}" data-filter="${escapeHTML(cat)}">
          ${escapeHTML(cat)}
        </button>
      `
        )
        .join("");

      // Filter click events
      filtersContainer.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          filtersContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderProjects(btn.getAttribute("data-filter"));
        });
      });
    }

    // Filter project list
    const filtered =
      filterCategory === "All"
        ? projects.list
        : projects.list.filter(
            (p) => p.category.toLowerCase() === filterCategory.toLowerCase()
          );

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-folder-open"></i>
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (project) => `
      <article class="project-card glass-panel" data-id="${escapeHTML(project.id)}">
        <div class="project-image-wrapper">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" class="project-img" loading="lazy" />
          <span class="project-category-badge">${escapeHTML(project.category)}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-desc">${escapeHTML(project.description)}</p>
          <div class="project-tags">
            ${project.technologies
              .map((tech) => `<span class="tech-tag">${escapeHTML(tech)}</span>`)
              .join("")}
          </div>
          <div class="project-actions">
            <a href="${escapeHTML(project.demoUrl)}" class="btn-project btn-demo ${project.demoUrl === '#' ? 'btn-modal-trigger' : ''}" target="${project.demoUrl === '#' ? '_self' : '_blank'}" rel="noopener noreferrer" data-project-id="${escapeHTML(project.id)}">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> View Project
            </a>
            <a href="${escapeHTML(project.githubUrl)}" class="btn-project btn-code" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    // Attach click listeners for demo modal preview if demoUrl is '#'
    grid.querySelectorAll(".btn-modal-trigger").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const pId = trigger.getAttribute("data-project-id");
        const found = projects.list.find((p) => p.id === pId);
        if (found && window.openProjectModal) {
          window.openProjectModal(found);
        }
      });
    });
  }

  // 5. RENDER FAVOURITE THINGS (10 ITEMS)
  function renderFavourites() {
    const { favourites } = config;
    const container = document.getElementById("favourites-grid");
    if (!container || !favourites || !favourites.items) return;

    container.innerHTML = favourites.items
      .map(
        (fav, index) => `
      <div class="favourite-card glass-panel" style="--fav-accent: ${fav.accent || '#6366f1'};">
        <div class="fav-card-header">
          <div class="fav-icon-box">
            <i class="${escapeHTML(fav.icon)}"></i>
          </div>
          <span class="fav-item-number">#0${index + 1}</span>
        </div>
        <div class="fav-card-body">
          <h4 class="fav-title">${escapeHTML(fav.title)}</h4>
          <div class="fav-selection-pill">
            <span class="fav-selection-text">${escapeHTML(fav.selection)}</span>
          </div>
          <p class="fav-description">${escapeHTML(fav.description)}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  // 6. RENDER JOURNEY (VERTICAL TIMELINE)
  function renderJourney() {
    const { journey } = config;
    const container = document.getElementById("journey-timeline");
    if (!container || !journey || !journey.milestones) return;

    container.innerHTML = journey.milestones
      .map(
        (item, index) => `
      <div class="timeline-item ${index % 2 === 0 ? "left" : "right"}">
        <div class="timeline-dot">
          <i class="${escapeHTML(item.icon)}"></i>
        </div>
        <div class="timeline-card glass-panel">
          <div class="timeline-header">
            <span class="timeline-period"><i class="fa-regular fa-calendar"></i> ${escapeHTML(item.period)}</span>
            <span class="timeline-type">${escapeHTML(item.type)}</span>
          </div>
          <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
          <div class="timeline-org">${escapeHTML(item.organization)}</div>
          <p class="timeline-desc">${escapeHTML(item.description)}</p>
          <div class="timeline-tags">
            ${(item.tags || [])
              .map((tag) => `<span class="timeline-tag">${escapeHTML(tag)}</span>`)
              .join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // 7. RENDER CERTIFICATIONS & ACHIEVEMENTS
  function renderCertifications() {
    const { certifications } = config;
    const container = document.getElementById("certifications-grid");
    if (!container || !certifications || !certifications.list) return;

    container.innerHTML = certifications.list
      .map(
        (cert, index) => `
      <div class="cert-card glass-panel" data-index="${index}">
        <div class="cert-image-frame">
          <img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title)}" class="cert-thumbnail" loading="lazy" />
          <span class="cert-type-pill">${escapeHTML(cert.type)}</span>
        </div>
        <div class="cert-content">
          <div class="cert-meta">
            <span class="cert-issuer"><i class="fa-solid fa-award"></i> ${escapeHTML(cert.issuer)}</span>
            <span class="cert-date">${escapeHTML(cert.date)}</span>
          </div>
          <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
          <div class="cert-skills">
            ${(cert.skills || [])
              .map((s) => `<span class="cert-skill-tag">${escapeHTML(s)}</span>`)
              .join("")}
          </div>
          <div class="cert-footer">
            <span class="cert-id"><i class="fa-solid fa-fingerprint"></i> ${escapeHTML(cert.credentialId)}</span>
            <a href="${escapeHTML(cert.pdfLink)}" class="cert-view-btn" target="_blank" rel="noopener noreferrer" data-cert-index="${index}">
              <i class="fa-regular fa-file-pdf"></i> View Certificate
            </a>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // 8. RENDER CURRENTLY LEARNING
  function renderCurrentlyLearning() {
    const { currentlyLearning } = config;
    const container = document.getElementById("learning-grid");
    if (!container || !currentlyLearning || !currentlyLearning.items) return;

    container.innerHTML = currentlyLearning.items
      .map(
        (item) => `
      <div class="learning-card glass-panel">
        <div class="learning-card-top">
          <div class="learning-icon-box">
            <i class="${escapeHTML(item.icon)}"></i>
          </div>
          <span class="learning-status-badge status-${escapeHTML(item.badgeColor || 'progress')}">
            <span class="pulse-indicator"></span>${escapeHTML(item.badge)}
          </span>
        </div>
        <h4 class="learning-name">${escapeHTML(item.name)}</h4>
        <p class="learning-desc">${escapeHTML(item.description)}</p>
      </div>
    `
      )
      .join("");
  }

  // 9. RENDER CONTACT SECTION
  function renderContact() {
    const { contact, personal } = config;
    if (!contact) return;

    // Populate enquiry options
    const select = document.getElementById("enquiry-type");
    if (select && contact.enquiryOptions) {
      select.innerHTML =
        `<option value="" disabled selected>Select an enquiry type</option>` +
        contact.enquiryOptions
          .map((opt) => `<option value="${escapeHTML(opt.value)}">${escapeHTML(opt.label)}</option>`)
          .join("");
    }

    // Populate contact info cards
    const cardsContainer = document.getElementById("contact-info-cards");
    if (cardsContainer && contact.infoCards) {
      cardsContainer.innerHTML = contact.infoCards
        .map(
          (card) => `
        <a href="${escapeHTML(card.link)}" class="contact-info-card glass-panel" ${card.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <div class="contact-card-icon">
            <i class="${escapeHTML(card.icon)}"></i>
          </div>
          <div class="contact-card-text">
            <span class="contact-card-label">${escapeHTML(card.title)}</span>
            <span class="contact-card-val">${escapeHTML(card.value)}</span>
          </div>
          <i class="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>
        </a>
      `
        )
        .join("");
    }
  }

  // 10. RENDER FOOTER
  function renderFooter() {
    const { footer, personal } = config;
    if (!personal) return;

    const footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = personal.fullName;

    const footerTagline = document.getElementById("footer-tagline");
    if (footerTagline && footer) footerTagline.textContent = footer.tagline;

    const footerYear = document.getElementById("footer-year");
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    const footerLinksContainer = document.getElementById("footer-nav-links");
    if (footerLinksContainer && footer && footer.quickLinks) {
      footerLinksContainer.innerHTML = footer.quickLinks
        .map(
          (link) => `
        <a href="${escapeHTML(link.href)}" class="footer-nav-link">${escapeHTML(link.label)}</a>
      `
        )
        .join("");
    }

    const footerSocials = document.getElementById("footer-social-links");
    if (footerSocials) {
      footerSocials.innerHTML = `
        <a href="${escapeHTML(personal.github)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="${escapeHTML(personal.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:${escapeHTML(personal.email)}" class="social-icon-btn" aria-label="Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      `;
    }
  }

  // INITIALIZE ALL
  function init() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderFavourites();
    renderJourney();
    renderCertifications();
    renderCurrentlyLearning();
    renderContact();
    renderFooter();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
