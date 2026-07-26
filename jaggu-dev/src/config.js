const config = {
  name: "Jagadeesh",
  nickname: "jaggu",
  tagline: "I build backends that AI can talk to.",
  bio: "Final-year CS student at St. Martin's Engineering College, Hyderabad. I build backends with Django & PostgreSQL, deploy on AWS EC2 + S3, and develop autonomous AI coding agents and full-stack projects.",
  location: "Hyderabad, India",
  openToWork: true,

  email: "jagadeeshsagar40@gmail.com",
  github: "https://github.com/jagadeesh-sagar",
  linkedin: "https://www.linkedin.com/in/jagadeesh-gobburi-31b10b311",
  resumeUrl: "https://drive.google.com/file/d/1HYmzP33burHPZaZRmuW6-b_8HTISqDjg/view",
  avatar: "/avatar.jpeg",

  skills: [
    "Python", "Django", "PostgreSQL", "Docker", "AWS EC2", "AWS S3",
    "AWS SQS", "AWS SNS", "AWS Lambda", "Nginx", "JWT/RBAC", "FastMCP",
    "AI Agents", "SQLite", "Tool Calling", "REST APIs", "Celery", "n8n", "HTML5", "CSS3", "JavaScript", "React",
  ],

  skillCategories: [
    {
      label: "Backend & APIs",
      skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Celery", "JWT/RBAC", "FastMCP", "REST APIs"],
    },
    {
      label: "AI & Autonomous Agents",
      skills: ["AI Agents", "Tool Calling", "SQLite", "CLI Tools", "FastMCP", "LLM Integration"],
    },
    {
      label: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS S3", "AWS SQS", "AWS SNS", "AWS Lambda", "IAM", "Docker", "Nginx", "n8n", "Linux"],
    },
    {
      label: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
  ],

  // LinkedIn posts — sorted newest first (largest post ID = most recent)
  linkedinPosts: [
    {
      title: "🚀 How I Reduced AWS Costs by Running Multiple Services on a Single EC2 Instance",
      excerpt:
        "Instead of paying for separate EC2 instances, I used Docker Compose + Nginx as a gateway to run Django REST Framework and n8n on one instance. Nginx routes /api/ → DRF and /n8n/ → workflows. Stop the instance when idle, one command brings everything back up.",
      tags: ["AWS EC2", "Docker", "Nginx", "Django", "DevOps"],
      url: "https://www.linkedin.com/posts/jagadeesh-gobburi-31b10b311_document-to-follow-what-i-have-done-ugcPost-7413635118982168577-_7GU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE83aAcBOm9gE-G2xnOksdNh-Kg1U3KHMdM",
      date: "2026-01-15",
    },
    {
      title: "Python 3.14: Upcoming Big Updates",
      excerpt:
        "A breakdown of the most impactful changes coming in Python 3.14 — new syntax, performance improvements, and what it means for Django and backend developers.",
      tags: ["Python", "Backend"],
      url: "https://www.linkedin.com/posts/jagadeesh-gobburi-31b10b311_python-314-upcoming-big-updates-ugcPost-7377707179673534465-RFS2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE83aAcBOm9gE-G2xnOksdNh-Kg1U3KHMdM",
      date: "2025-07-20",
    },
    {
      title: "AWS S3 in Django REST Framework",
      excerpt:
        "How I integrated AWS S3 presigned URLs into my Django REST API for media uploads — so the frontend uploads directly to S3 without touching the backend server.",
      tags: ["Django", "AWS S3", "DRF"],
      url: "https://www.linkedin.com/posts/jagadeesh-gobburi-31b10b311_aws-s3-in-django-rest-framework-ugcPost-7366171893780860929-02ev?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE83aAcBOm9gE-G2xnOksdNh-Kg1U3KHMdM",
      date: "2025-05-10",
    },
    {
      title: "AWS S3 for Data Engineering",
      excerpt:
        "Why S3 is the backbone of most data pipelines — covering buckets, IAM roles, partitioning strategies, and how to wire it up efficiently for large-scale data storage.",
      tags: ["AWS S3", "Data Engineering", "Cloud"],
      url: "https://www.linkedin.com/posts/jagadeesh-gobburi-31b10b311_aws-s3-dataengineering-share-7353876445640683520-m5Lh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE83aAcBOm9gE-G2xnOksdNh-Kg1U3KHMdM",
      date: "2025-01-15",
    },
    {
      title: "C++ is Powerful but Lowkey Risky — Memory",
      excerpt:
        "Manual memory management in C++ gives you full control, but one missed delete or dangling pointer can silently corrupt your program. Here's what I learned the hard way.",
      tags: ["C++", "Memory", "Systems"],
      url: "https://www.linkedin.com/posts/jagadeesh-gobburi-31b10b311_cc-is-powerful-but-lowkey-risky-memory-ugcPost-7352337898957881344-vzwd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE83aAcBOm9gE-G2xnOksdNh-Kg1U3KHMdM",
      date: "2024-12-20",
    },
  ],

  projects: [
    {
      name: "CLI Autonomous AI Coding Agent",
      desc: "A modular, CLI-based autonomous AI coding assistant with bash tool execution, file editing, persistent SQLite session memory, and pluggable LLM provider support (Anthropic, Groq, DeepSeek, Sarvam, OpenAI).",
      tags: ["Python", "AI Agents", "SQLite", "CLI", "Tool Calling", "LLMs"],
      github: "https://github.com/jagadeesh-sagar/cli_agent",
      live: "",
    },
    {
      name: "Chatram E-Commerce Backend",
      desc: "A production-grade REST API for a full-featured e-commerce platform with real-time chat and AWS S3 integration.",
      tags: ["Django", "DRF", "Celery", "Channels", "PostgreSQL", "AWS S3"],
      github: "https://github.com/jagadeesh-sagar/django-ecommerce-app",
      live: "https://ecommerce.chatram.in/",
    },
    {
      name: "MCP E-Commerce Backend",
      desc: "31 AI-callable endpoints on Django REST API. Products, orders, reviews — all tool-callable by AI agents.",
      tags: ["Django", "FastMCP", "PostgreSQL", "Docker", "AI Agents"],
      github: "https://github.com/jagadeesh-sagar/django-ecommerce-app",
      live: "",
    },
    {
      name: "StudyBud REST API",
      desc: "Django REST API for a Discord-style study platform. Rooms, topics, real-time messages, and participant management with JWT auth.",
      tags: ["Django", "DRF", "JWT", "PostgreSQL"],
      github: "https://github.com/jagadeesh-sagar/StudyBud-REST-API",
      live: "",
    },
    {
      name: "Food Delivery Landing Page",
      desc: "Fully responsive landing page built with zero CSS frameworks — pure HTML5 and CSS3 using Flexbox, Grid, and mobile-first media queries.",
      tags: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive"],
      github:
        "https://github.com/jagadeesh-sagar/Food-delivery-landing-page-vanilla-CSS",
      live: "https://food-delivery-jagadeesh.netlify.app/",
    },
    {
      name: "Rice Disease Detector",
      desc: "CNN-based image classifier for automatic diagnosis of rice crop diseases.",
      tags: ["Python", "CNN", "OpenCV"],
      github: "https://github.com/yourusername/repo3",
      live: "",
    },
  ],
};

export default config;
