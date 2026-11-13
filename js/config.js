/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ==============================================================================
 * Welcome to your portfolio configuration file!
 * You can customize and personalize your entire website by editing this file.
 * All changes made here automatically reflect across the entire website.
 *
 * INSTRUCTIONS:
 * 1. Replace placeholder text (e.g. "[Your Full Name]") with your real information.
 * 2. To change your profile picture, place your image into `assets/images/` and
 *    update the `avatar` property below.
 * 3. To connect the contact form to your email, create a free form at
 *    https://formspree.io and paste your endpoint into `formspreeEndpoint`.
 * 4. To update your resume, put your PDF in `assets/resume/` and update `resumeUrl`.
 * ==============================================================================
 */

const PORTFOLIO_CONFIG = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL & HERO SECTION DETAILS
  // ----------------------------------------------------------------------------
  personal: {
    fullName: "Marupilli yerni chandra mouli", // e.g. "Alex Morgan" or your full name
    headlinePrefix: "Hello, I'm",
    headlineSubtitle: "Engineering Student | Aspiring Software Developer",
    heroDescription:
      "Hello! I'm Mouli, an engineering student and aspiring software developer passionate about technology, programming, and building innovative digital solutions. I enjoy learning new technologies, solving problems, and developing practical projects. I am continuously improving my skills in software development, web technologies, and database management.",
    
    // Animated typewriter roles that loop in the Hero section
    typingRoles: [
      "Aspiring Software Developer",
      "Engineering Student",
      "Web Developer",
      "Programmer"
      
    ],

    // Profile photo & Resume
    avatar: "assets/images/my-photo.jpg.jpeg", // Replace with your image, e.g. "assets/images/profile.jpg"
    resumeUrl: "assets/resume", // Path to your resume PDF
    
    // Status & Location
    location: "Visakhapatnam, Andhra Pradesh, India",
    availabilityBadge: "Currently Learning",
    
    // Social Profiles & Quick Contact Links
    email: "mouli456859@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/legend-mouli-44996544a/",
    twitter: "https://x.com/mouli1729" // Optional
  },

  // ----------------------------------------------------------------------------
    // 2. ABOUT ME SECTION
    // ----------------------------------------------------------------------------
    about: {
  sectionTitle: "About Me",
  sectionSubtitle: "My journey as a Computer Science Engineering student.",
  greeting: "Curious learner, aspiring developer and technology enthusiast.",

  bioParagraphs: [
    "Hello! I am a B.Tech Computer Science and Engineering student at Gayatri Vidya Parishad College of Engineering. I am passionate about technology, programming and learning how software works.",
    
    "I am currently exploring Python, C++, MySQL, web development and computer networking. I enjoy learning new concepts and improving my problem-solving skills through practice.",
    
    "My goal is to become a skilled software developer, build useful applications and continuously improve my technical knowledge."
  ],

  quickCards: [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Education",
      description: "B.Tech Computer Science Engineering – GVPT"
    },
    {
      icon: "fa-solid fa-code",
      title: "Current Focus",
      description: "Python, C++, MySQL and Web Development"
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "My Goal",
      description: "Become a skilled software developer"
    },
    {
      icon: "fa-solid fa-heart",
      title: "My Interests",
      description: "Technology, programming and cybersecurity learning"
    }
  ]
},

  // ----------------------------------------------------------------------------
  // 3. TECHNICAL SKILLS SECTION
  // ----------------------------------------------------------------------------
  // Note: Only displaying skills you have learned. All items are easily editable.
  skills: {
  sectionTitle: "Technical Skills",
  sectionSubtitle: "Programming languages, database concepts, and tools I am learning.",

  categories: [
    {
      name: "Programming",
      icon: "fa-solid fa-code",
      color: "#6366f1",
      items: [
        {
          name: "Python",
          icon: "fa-brands fa-python",
          level: "Foundational",
          description: "Data types, operators, conditional statements, loops and functions"
        },
        {
          name: "C++",
          icon: "fa-solid fa-microchip",
          level: "Foundational",
          description: "Learning programming fundamentals and object-oriented concepts"
        }
      ]
    },
    {
      name: "Database",
      icon: "fa-solid fa-database",
      color: "#06b6d4",
      items: [
        {
          name: "MySQL",
          icon: "fa-solid fa-server",
          level: "Foundational",
          description: "Database creation, SQL queries and basic data manipulation"
        }
      ]
    },
    {
      name: "Tools & Utilities",
      icon: "fa-solid fa-toolbox",
      color: "#10b981",
      items: [
        {
          name: "VS Code",
          icon: "fa-solid fa-laptop-code",
          level: "Beginner",
          description: "Writing and managing code using Visual Studio Code"
        },
        {
          name: "Wireshark",
          icon: "fa-solid fa-network-wired",
          level: "Beginner",
          description: "Learning packet inspection and basic network protocols"
        }
      ]
    }
  ]
},

  // ----------------------------------------------------------------------------
  // 4. PROJECTS / PORTFOLIO SHOWCASE
  // ----------------------------------------------------------------------------
  // Sample placeholder projects covering each requested category.
  // Replace with your actual project details whenever you are ready!
  projects: {
    sectionTitle: "Featured Projects",
    sectionSubtitle: "A curated selection of technical projects and experimental builds.",
    categories: ["All", "Web Development", "Programming", "Cybersecurity", "Other Projects"],
    list: [
      {
        id: "proj-1",
        title: "Modern Personal Portfolio Website",
        category: "Web Development",
        image: "assets/images/projects/web-portfolio.svg",
        description: "A fast, fully responsive personal website built with semantic HTML5, modern CSS3, and modular vanilla JavaScript. Features dark/light mode, dynamic filtering, and contact form handling.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        demoUrl: "#", // Replace with live URL or keep '#'
        githubUrl: "https://github.com/yourusername/portfolio-website",
        featured: true
      },
      {
        id: "proj-2",
        title: "Network Packet Analyzer & Inspector",
        category: "Cybersecurity",
        image: "assets/images/projects/packet-analyzer.svg",
        description: "A Python-based network analysis tool inspired by Wireshark to capture, dissect, and inspect TCP/UDP/IP packet headers, detecting anomalous traffic patterns in local network streams.",
        technologies: ["Python", "Wireshark", "Networking", "TCP/IP"],
        demoUrl: "#",
        githubUrl: "https://github.com/yourusername/network-packet-analyzer",
        featured: true
      },
      {
        id: "proj-3",
        title: "Algorithm & Data Structures Toolkit",
        category: "Programming",
        image: "assets/images/projects/algorithm-visualizer.svg",
        description: "An optimized algorithmic toolkit built in C++ utilizing the Standard Template Library (STL). Features implementations of sorting algorithms, AVL tree rebalancing, and graph traversals.",
        technologies: ["C++", "STL", "Data Structures", "Algorithms"],
        demoUrl: "#",
        githubUrl: "https://github.com/yourusername/cpp-algorithm-toolkit",
        featured: true
      },
      {
        id: "proj-4",
        title: "Student Database & Records Manager",
        category: "Web Development",
        image: "assets/images/projects/db-management.svg",
        description: "A full-featured relational records management application with a normalized MySQL database schema, handling student enrollment, course records, and real-time query filtering.",
        technologies: ["MySQL", "JavaScript", "CSS3", "HTML5"],
        demoUrl: "#",
        githubUrl: "https://github.com/yourusername/student-database-system",
        featured: false
      },
      {
        id: "proj-5",
        title: "TaskMaster CLI System Utility",
        category: "Programming",
        image: "assets/images/projects/cli-system.svg",
        description: "A lightweight terminal-based process and task manager written in pure C. Demonstrates dynamic heap allocation, linked lists, file persistence, and Unix system signals.",
        technologies: ["C", "GCC", "Memory Management", "CLI"],
        demoUrl: "#",
        githubUrl: "https://github.com/yourusername/c-taskmaster-cli",
        featured: false
      },
      {
        id: "proj-6",
        title: "SecureAuth Protocol & Session Prototype",
        category: "Cybersecurity",
        image: "assets/images/projects/security-prototype.svg",
        description: "A cybersecurity laboratory prototype focusing on secure password hashing, CSRF token validation, input sanitization, and protection against SQL injection vulnerabilities.",
        technologies: ["Cybersecurity", "Python", "MySQL", "Web Security"],
        demoUrl: "#",
        githubUrl: "https://github.com/yourusername/secure-auth-prototype",
        featured: false
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 5. MY FAVOURITE THINGS (10 ITEMS)
  // ----------------------------------------------------------------------------
  // Represents your personality and personal interests.
  // Use editable placeholders as specified (do not invent unknown preferences).
  favourites: {
  sectionTitle: "My Favourite Things",
  sectionSubtitle: "A glimpse into my personality, interests, and inspirations.",

  items: [
    {
      id: "fav-colour",
      title: "Favourite Colour",
      icon: "fa-solid fa-palette",
      accent: "#6366f1",
      selection: "Blue",
      description: "A colour that represents calmness, confidence, and creativity."
    },
    {
      id: "fav-movie",
      title: "Favourite Movie",
      icon: "fa-solid fa-film",
      accent: "#ec4899",
      selection: "James Bond – GoldenEye",
      description: "An exciting spy adventure filled with action, mystery, and suspense."
    },
    {
      id: "fav-series",
      title: "Favourite Web Series",
      icon: "fa-solid fa-tv",
      accent: "#8b5cf6",
      selection: "Game of Thrones & Breaking Bad",
      description: "Two fascinating series known for their storytelling and unforgettable characters."
    },
    {
      id: "fav-music",
      title: "Favourite Music",
      icon: "fa-solid fa-headphones",
      accent: "#06b6d4",
      selection: "Baby Calm Down",
      description: "Music that I enjoy listening to during my free time."
    },
    {
      id: "fav-food",
      title: "Favourite Food",
      icon: "fa-solid fa-utensils",
      accent: "#f59e0b",
      selection: "Chicken Biryani",
      description: "A delicious favourite that always brings happiness."
    },
    {
      id: "fav-place",
      title: "Favourite Place",
      icon: "fa-solid fa-location-dot",
      accent: "#10b981",
      selection: "Switzerland",
      description: "A beautiful destination known for its mountains, lakes, and breathtaking scenery."
    },
    {
      id: "fav-hobby",
      title: "Favourite Hobby",
      icon: "fa-solid fa-gamepad",
      accent: "#3b82f6",
      selection: "Watching TV",
      description: "Enjoying movies, television shows, and entertainment during my free time."
    },
    {
      id: "fav-tech",
      title: "Favourite Technology",
      icon: "fa-solid fa-microchip",
      accent: "#14b8a6",
      selection: "Artificial Intelligence & Robotics",
      description: "Fascinated by intelligent machines, automation, and future technologies."
    },
    {
      id: "fav-sport",
      title: "Favourite Sport",
      icon: "fa-solid fa-medal",
      accent: "#ef4444",
      selection: "Cricket",
      description: "A sport that combines teamwork, strategy, and excitement."
    },
    {
      id: "fav-quote",
      title: "Favourite Quote",
      icon: "fa-solid fa-quote-left",
      accent: "#f97316",
      selection: "Dream big, start small, and keep moving forward.",
      description: "A reminder that every great achievement begins with a small step."
    }
  ]
},
  // ----------------------------------------------------------------------------
  // 6. MY JOURNEY (VERTICAL TIMELINE)
  // ----------------------------------------------------------------------------
  journey: {
    sectionTitle: "My Journey",
    sectionSubtitle: "The path of my education, technical milestones, and personal development.",
    milestones: [
      {
        period: "2024 - Present",
        title: "Advanced Computer Science & Systems Learning",
        organization: "University / Self-Directed Study",
        type: "Education & Specialization",
        icon: "fa-solid fa-graduation-cap",
        description:
          "Diving deep into advanced data structures, algorithmic problem solving in C++, and network packet diagnostics with Wireshark. Focusing on building scalable, reliable software.",
        tags: ["C++", "Algorithms", "Wireshark", "System Design"]
      },
      {
        period: "2023 - 2024",
        title: "Full-Stack Web Foundations & Database Design",
        organization: "Practical Project Development",
        type: "Technical Learning",
        icon: "fa-solid fa-code-branch",
        description:
          "Mastered responsive web design with HTML5, CSS3, and ES6+ JavaScript. Designed relational database schemas in MySQL, developing dynamic data-driven applications.",
        tags: ["JavaScript", "HTML5/CSS3", "MySQL", "Git"]
      },
      {
        period: "2022 - 2023",
        title: "Programming Fundamentals & Logic Building",
        organization: "Academic Coursework & Labs",
        type: "Milestone",
        icon: "fa-solid fa-laptop-code",
        description:
          "Began coding in C and Python. Learned core programming concepts including memory management, pointers, modular code architecture, and algorithm complexity.",
        tags: ["C", "Python", "Problem Solving", "VS Code"]
      },
      {
        period: "2021 - 2022",
        title: "First Steps into Technology & Curiosity",
        organization: "Initial Exploration",
        type: "Discovery",
        icon: "fa-solid fa-compass",
        description:
          "Discovered the transformative power of coding and open-source software. Wrote my very first scripts and laid the foundation for a lifelong passion in technology.",
        tags: ["Curiosity", "First Code", "Exploration"]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 7. CERTIFICATIONS & ACHIEVEMENTS
  // ----------------------------------------------------------------------------
  // Editable cards for your certificates, technical workshops, and accomplishments.
 certifications: {
  sectionTitle: "Certifications & Achievements",
  sectionSubtitle: "Courses and learning achievements completed along my journey.",
  list: [
    {
      title: "Infosys Springboard Livelihood – ITES Training",
      issuer: "Infosys Foundation & Nirmaan Organization",
      date: "Not specified",
      credentialId: "Not provided",
      image: "assets/images/certs/infosys-ites-certificate.jpeg.jpeg",
      skills: ["ITES Training"],
      pdfLink: "assets/images/certs/infosys-ites-certificate.jpeg.jpeg",
      type: "Course Completion"
    }
  ]
},
  // ----------------------------------------------------------------------------
  // 8. CURRENTLY LEARNING
  // ----------------------------------------------------------------------------
  // Demonstrates proactive growth and learning status.
  currentlyLearning: {
    sectionTitle: "Currently Learning",
    sectionSubtitle: "Technologies and concepts I am actively researching and building with right now.",
    items: [
      {
        name: "Advanced Data Structures & System Design",
        icon: "fa-solid fa-diagram-project",
        badge: "In Progress",
        badgeColor: "progress",
        description: "Mastering graph traversal algorithms, dynamic programming, and scalable architectural patterns in C++."
      },
      {
        name: "Network Forensics & Packet Security",
        icon: "fa-solid fa-shield-halved",
        badge: "Exploring",
        badgeColor: "exploring",
        description: "Deepening practical packet analysis using Wireshark, dissecting TLS handshakes and anomalous traffic."
      },
      {
        name: "Modern Frontend Frameworks (React)",
        icon: "fa-brands fa-react",
        badge: "Next Step",
        badgeColor: "upcoming",
        description: "Applying strong vanilla JS fundamentals toward declarative component architecture and state management."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9. CONTACT & LEAD GENERATION SETTINGS
  // ----------------------------------------------------------------------------
  contact: {
  sectionTitle: "Get In Touch",
  sectionSubtitle: "Have an opportunity, project, or question? Send me a message!",

  // Formspree integration
  formspreeEndpoint: "",

  enquiryOptions: [
    { value: "job", label: "Job Opportunities" },
    { value: "freelance", label: "Freelance Projects" },
    { value: "collaboration", label: "Collaboration" },
    { value: "general", label: "General Enquiry" }
  ],

  infoCards: [
    {
      icon: "fa-solid fa-envelope",
      title: "Email Address",
      value: "YOUR_EMAIL_ADDRESS",
      link: "mailto:YOUR_EMAIL_ADDRESS"
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone Number",
      value: "YOUR_PHONE_NUMBER",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: "fa-brands fa-linkedin",
      title: "LinkedIn Profile",
      value: "Connect on LinkedIn",
      link: "YOUR_LINKEDIN_URL"
    },
    {
      icon: "fa-brands fa-github",
      title: "GitHub Profile",
      value: "Visit my GitHub",
      link: "YOUR_GITHUB_URL"
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location & Status",
      value: "Available for Opportunities",
      link: "#contact"
    }
  ]
},

  // ----------------------------------------------------------------------------
  // 10. FOOTER CONFIGURATION
  // ----------------------------------------------------------------------------
  footer: {
    tagline: "Building thoughtful, resilient software with passion, curiosity, and code.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Favourites", href: "#favourites" },
      { label: "Journey", href: "#journey" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

// Make available in browser environment
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
