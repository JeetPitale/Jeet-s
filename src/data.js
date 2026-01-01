import { Github, Linkedin, Mail, Code, Terminal, Cpu, Globe, BookOpen, PenTool, Edit, FileText } from 'lucide-react';

export const userData = {
    name: "Jeet Pitale",
    role: "Full-Stack Developer | AI & Automation Enthusiast",
    tagline: "I specialize in combining creativity, automation, and AI to create impactful digital solutions.",
    email: "jeetdipakpitale1107@gmail.com",
    social: {
        github: "https://github.com/JeetPitale",
        linkedin: "https://www.linkedin.com/in/jeet-pitale",
        instagram: "https://www.instagram.com/sketchingcode/",
    },
    about: {
        imgUrl: "/profile.jpg",
        summary: "I’m Jeet Pitale, a full-stack developer and cybersecurity enthusiast with a passion for building tech that solves real-world problems. Currently pursuing my Integrated MCA at SVGU, I specialize in combining creativity, automation, and AI to create impactful digital solutions.\n\nAs the founder of GreenGo Crop Helper, I’m leading the development of an AgriTech platform that empowers farmers with tools for crop planning, soil health management, and real-time weather and market alerts.",
        interests: [
            { label: "Full-Stack Development", icon: Code },
            { label: "AgriTech Innovation", icon: Globe },
            { label: "AI & Automation", icon: Cpu },
            { label: "Cybersecurity", icon: Terminal },
        ]
    },
    skills: [
        { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Figma"] },
        { category: "Backend", items: ["Node.js", "Python", "Core Java", "SQL", "PHP", "PhpMyAdmin"] },
        { category: "Soft Skills", items: ["Strategic Planning", "Problem Solving", "Creative Thinking", "Adaptability"] },
        { category: "Tools", items: ["Git", "VS Code", "AI Tools"] },
    ],
    experience: [
        {
            id: 1,
            role: "Founder & Developer",
            company: "GreenGo Crop Helper",
            period: "Present",
            description: "Leading the development of an AgriTech platform that empowers farmers with tools for crop planning, soil health management, and real-time weather and market alerts."
        },
        {
            id: 2,
            role: "Developer",
            company: "University LMS Project",
            period: "2026",
            description: "Contributing to the development of a university-level Learning Management System (LMS) designed to support structured, scalable, and user-friendly digital learning."
        },
        {
            id: 3,
            role: "Full-Stack Developer",
            company: "Educater’s (Learniverse)",
            period: "2025",
            description: "Developed an academic blogging website enabling the HOD to publish and manage study-related content efficiently."
        },
        {
            id: 4,
            role: "Cyber Security Job Simulation",
            company: "Deloitte Australia (Forage)",
            period: "2025",
            description: "Analyzed web activity logs to identify suspicious user behavior and supported a simulated client during a cybersecurity breach investigation."
        },
        {
            id: 5,
            role: "Tech Content Creator",
            company: "@sketchingcode",
            period: "Present",
            description: "Building a creative tech brand on Instagram, sharing insights on coding and design."
        }
    ],
    education: [
        {
            id: 1,
            degree: "BCA",
            institute: "Sardar Vallabhbhai Global University | Ahmedabad",
            year: "Present"
        },
        {
            id: 2,
            degree: "H.S.C",
            institute: "Shree Damubhai Shukla Madhyamik Shala | Ahmedabad",
            year: "2022-2023"
        },
        {
            id: 3,
            degree: "S.S.C",
            institute: "Shree Damubhai Shukla Madhyamik Shala | Ahmedabad",
            year: "2020-2021"
        }
    ],
    achievements: [
        {
            id: 1,
            title: "Finalist of Hackovate",
            organization: "Lok Jagruti University | Ahmedabad, Gujarat",
            year: "2025"
        },
        {
            id: 2,
            title: "3rd Rank in Front-End Fantasia Hackathon",
            organization: "Continental Institute for International Studies",
            year: "2025"
        },
        {
            id: 3,
            title: "Spark Quest Organiser",
            organization: "Sardar Vallabhbhai Global University | Ahmedabad, Gujarat",
            year: "2025"
        },
        {
            id: 4,
            title: "Merit Scholarship Holder",
            organization: "Sardar Vallabhbhai Global University | Ahmedabad, Gujarat",
            year: "2025"
        },
        {
            id: 5,
            title: "Top 5 in VCET Hackathon’24",
            organization: "Vcet | Vasai, Mumbai",
            year: "2024"
        },
        {
            id: 6,
            title: "University Rank 2",
            organization: "Sardar Vallabhbhai Global University | Ahmedabad, Gujarat",
            year: "2024"
        }
    ],
    projects: [
        {
            id: 1,
            title: "Learniverse (HOD Project)",
            description: "A modern educational platform built with React and PHP featuring dynamic content management and community engagement.",
            tech: ["React", "PHP", "MySQL"],
            github: "https://github.com/JeetPitale/HOD_Project",
            demo: "https://vishaldahiya.cs.in/"
        },
        {
            id: 2,
            title: "ClassFlow LMS",
            description: "A comprehensive Learning Management System streamlining education with course management, real-time analytics, and secure authentication.",
            tech: ["React", "PHP", "MySQL", "Tailwind CSS"],
            github: "https://github.com/JeetPitale/ClassFlow",
            demo: "https://class-flow-two.vercel.app/"
        },
        {
            id: 3,
            title: "Karvaan",
            description: "AI-powered travel agent that creates personalized, budget-optimized itineraries for hassle-free trips across India.",
            tech: ["AI", "Travel Tech"],
            github: "https://github.com/JeetPitale/Karvaan",
            demo: "https://karvaan-weld.vercel.app/"
        },
    ],
    freelancing: [
        {
            id: 1,
            title: "Assignment Writing",
            description: "High-quality, well-researched, and plagiarism-free assignments tailored to your academic needs.",
            priceUsd: "Starting at $20",
            priceInr: "Starting at ₹1,500",
            features: ["Research-Backed", "Plagiarism-Free", "Timely Delivery", "APA/MLA Formatting"],
            icon: BookOpen
        },
        {
            id: 2,
            title: "Web Development",
            description: "Custom websites built with modern technologies like React, Next.js, and Tailwind CSS. Fully responsive and performance optimized.",
            priceUsd: "Starting at $200",
            priceInr: "Starting at ₹15,000",
            features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Source Code Included"],
            icon: Code
        },
        {
            id: 3,
            title: "Copywriting",
            description: "Persuasive and engaging copy for websites, ads, and emails that drives conversions and sales.",
            priceUsd: "Starting at $50",
            priceInr: "Starting at ₹4,000",
            features: ["SEO Friendly", "Sales Psychology", "Brand Voice Alignment", "Conversion Focused"],
            icon: Edit
        },
        {
            id: 4,
            title: "Content Writing",
            description: "Engaging blog posts, articles, and technical content that informs and entertains your audience.",
            priceUsd: "Starting at $30",
            priceInr: "Starting at ₹2,500",
            features: ["Keyword Research", "Engaging Tone", "Fact-Checked", "Original Content"],
            icon: FileText
        }
    ]
};
