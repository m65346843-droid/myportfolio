/**
 * ==============================================================================
 * MAIN PORTFOLIO CONTROLLER
 * ==============================================================================
 * Handles interactive features: Theme toggle, Mobile Drawer, Typewriter,
 * Scroll Spy, Smooth Scroll, Back to Top, Modal system, Form Validation,
 * and Scroll Reveal animations.
 * ==============================================================================
 */

(function () {
  "use strict";

  // ----------------------------------------------------------------------------
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  // ----------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile-btn");
  const htmlElement = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  }

  function applyTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);

    const isDark = theme === "dark";
    const iconClass = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";

    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector("i");
      if (icon) icon.className = iconClass;
      themeToggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    if (themeToggleMobileBtn) {
      const icon = themeToggleMobileBtn.querySelector("i");
      if (icon) icon.className = iconClass;
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener("click", toggleTheme);

  // ----------------------------------------------------------------------------
  // 2. TYPEWRITER EFFECT
  // ----------------------------------------------------------------------------
  function initTypewriter() {
    const typewriterElem = document.getElementById("hero-typewriter");
    if (!typewriterElem) return;

    const config = window.PORTFOLIO_CONFIG;
    const words =
      config && config.personal && config.personal.typingRoles && config.personal.typingRoles.length
        ? config.personal.typingRoles
        : ["Developer", "Technology Enthusiast", "Creative Thinker", "Lifelong Learner"];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 45;
    const pauseDelay = 1800;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        typewriterElem.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        typewriterElem.textContent = currentWord.substring(0, charIndex);
      }

      let timeoutDuration = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        timeoutDuration = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutDuration = 400;
      }

      setTimeout(type, timeoutDuration);
    }

    type();
  }

  // ----------------------------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & SCROLL SPY
  // ----------------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("back-to-top-btn");

  function handleWindowScroll() {
    const scrollPos = window.scrollY;

    // Header shadow & blur on scroll
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 380) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // Scroll spy highlighting
    updateActiveNavLink();
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        mobileNavLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", handleWindowScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ----------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION DRAWER
  // ----------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileDrawerBackdrop = document.getElementById("mobile-drawer-backdrop");
  const mobileDrawerClose = document.getElementById("mobile-drawer-close");

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("open");
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add("open");
    if (mobileMenuToggle) mobileMenuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("open");
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove("open");
    if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      if (mobileDrawer && mobileDrawer.classList.contains("open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeMobileMenu);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener("click", closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // ----------------------------------------------------------------------------
  // 5. PROJECT & PREVIEW MODAL
  // ----------------------------------------------------------------------------
  const modal = document.getElementById("detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalBadge = document.getElementById("modal-badge");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  const modalTags = document.getElementById("modal-tags");
  const modalDemoBtn = document.getElementById("modal-demo-btn");
  const modalGithubBtn = document.getElementById("modal-github-btn");

  window.openProjectModal = function (project) {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalBadge) modalBadge.textContent = project.category;
    if (modalImg) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
    }
    if (modalDesc) modalDesc.textContent = project.description;

    if (modalTags && project.technologies) {
      modalTags.innerHTML = project.technologies
        .map((t) => `<span class="tech-tag">${t}</span>`)
        .join("");
    }

    if (modalDemoBtn) {
      modalDemoBtn.href = project.demoUrl || "#";
      if (project.demoUrl === "#") {
        modalDemoBtn.style.display = "none";
      } else {
        modalDemoBtn.style.display = "inline-flex";
      }
    }

    if (modalGithubBtn) {
      modalGithubBtn.href = project.githubUrl || "#";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeMobileMenu();
    }
  });

  // ----------------------------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & SUBMISSION
  // ----------------------------------------------------------------------------
  function initContactForm() {
    const contactForm = document.getElementById("portfolio-contact-form");
    if (!contactForm) return;

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const enquirySelect = document.getElementById("enquiry-type");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("contact-submit-btn");
    const formFeedback = document.getElementById("form-feedback");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setFieldError(input, errorMsg) {
      const parent = input.closest(".form-group");
      if (!parent) return;
      parent.classList.add("has-error");
      let errorElem = parent.querySelector(".field-error-msg");
      if (!errorElem) {
        errorElem = document.createElement("span");
        errorElem.className = "field-error-msg";
        parent.appendChild(errorElem);
      }
      errorElem.textContent = errorMsg;
    }

    function clearFieldError(input) {
      const parent = input.closest(".form-group");
      if (!parent) return;
      parent.classList.remove("has-error");
      const errorElem = parent.querySelector(".field-error-msg");
      if (errorElem) errorElem.remove();
    }

    [nameInput, emailInput, enquirySelect, subjectInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("input", () => clearFieldError(input));
      input.addEventListener("change", () => clearFieldError(input));
    });

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Name validation
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setFieldError(nameInput, "Please enter your full name (at least 2 characters).");
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // 2. Email validation
      if (!emailInput.value.trim()) {
        setFieldError(emailInput, "Email address is required.");
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, "Please enter a valid email address (e.g. name@domain.com).");
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      // 3. Enquiry type validation
      if (!enquirySelect.value) {
        setFieldError(enquirySelect, "Please select an enquiry category.");
        isValid = false;
      } else {
        clearFieldError(enquirySelect);
      }

      // 4. Subject validation
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        setFieldError(subjectInput, "Subject must be at least 3 characters.");
        isValid = false;
      } else {
        clearFieldError(subjectInput);
      }

      // 5. Message validation
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setFieldError(messageInput, "Please write a message of at least 10 characters.");
        isValid = false;
      } else {
        clearFieldError(messageInput);
      }

      if (!isValid) {
        if (formFeedback) {
          formFeedback.className = "form-feedback error visible";
          formFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Please correct the highlighted errors before submitting.`;
        }
        return;
      }

      // Check Formspree Configuration
      const config = window.PORTFOLIO_CONFIG;
      const endpoint =
        config && config.contact && config.contact.formspreeEndpoint
          ? config.contact.formspreeEndpoint.trim()
          : "";

      // Submission payload
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        enquiryType: enquirySelect.value,
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Set button loading state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending message...`;

      if (endpoint && endpoint.startsWith("http")) {
        // Real Formspree or custom backend submission
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(formData)
          });

          if (response.ok) {
            formFeedback.className = "form-feedback success visible";
            formFeedback.innerHTML = `
              <i class="fa-solid fa-circle-check"></i>
              <strong>Thank you, ${escapeSpecial(formData.name)}!</strong> Your message has been sent successfully. I will get back to you shortly.
            `;
            contactForm.reset();
          } else {
            const data = await response.json();
            throw new Error(data.error || "Failed to submit message");
          }
        } catch (err) {
          formFeedback.className = "form-feedback error visible";
          formFeedback.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            <strong>Submission error:</strong> ${err.message || "Could not reach form endpoint. Please try emailing me directly."}
          `;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      } else {
        // Safe Demo Mode:
        // Demonstrates successful validation and guides the user on connecting their Formspree URL in config.js!
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;

          formFeedback.className = "form-feedback success visible";
          formFeedback.innerHTML = `
            <div class="demo-feedback-box">
              <p><i class="fa-solid fa-circle-check"></i> <strong>Form Validation Passed!</strong></p>
              <p>Hello <strong>${escapeSpecial(formData.name)}</strong>, your form has been fully validated.</p>
              <div class="demo-notice">
                <i class="fa-solid fa-circle-info"></i>
                <span><strong>Setup Notice:</strong> To deliver real emails straight to your inbox, paste your free endpoint from <a href="https://formspree.io" target="_blank" rel="noopener">Formspree.io</a> into <code>js/config.js</code> at <code>contact.formspreeEndpoint</code>.</span>
              </div>
            </div>
          `;
          contactForm.reset();
        }, 600);
      }
    });

    function escapeSpecial(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  }

  // ----------------------------------------------------------------------------
  // 7. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ----------------------------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal, .reveal-up");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // ----------------------------------------------------------------------------
  // INITIALIZE ALL INTERACTIVE MODULES ON DOM READY
  // ----------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initTypewriter();
    initContactForm();
    initScrollReveal();
  });
})();
