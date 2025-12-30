import { Github, Linkedin, Mail, Code, Terminal, Cpu, Globe } from 'lucide-react';

export const userData = {
    name: "Jeet Pitale",
    role: "Full-Stack Developer | AI & Automation Enthusiast",
    tagline: "I specialize in combining creativity, automation, and AI to create impactful digital solutions.",
    email: "jeetdipakpitale1107@gmail.com",
    social: {
        github: "https://github.com/JeetPitale",
        linkedin: "https://linkedin.com/in/", // Placeholder
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
        { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
        { category: "Backend", items: ["Node.js", "Python", "SQL", "PHP"] },
        { category: "Tools", items: ["Git", "VS Code", "Figma", "AI Tools"] },
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
            role: "Full-Stack Developer",
            company: "Educater’s (Learniverse)",
            period: "Project",
            description: "Built an affordable learning platform aimed at supporting entrance exam aspirants."
        },
        {
            id: 3,
            role: "Tech Content Creator",
            company: "@sketchingcode",
            period: "Present",
            description: "Building a creative tech brand on Instagram, sharing insights on coding and design."
        }
    ],
    projects: [
        {
            id: 1,
            title: "GreenGo Crop Helper",
            description: "An AgriTech platform empowering farmers with crop planning, soil health management, and real-time alerts.",
            tech: ["AgriTech", "AI", "Full Stack"],
            github: "https://github.com/JeetPitale/GreenGoCropHelper",
            demo: "https://green-go-crop-helper-delta.vercel.app/"
        },
        {
            id: 2,
            title: "Learniverse (HOD Project)",
            description: "A modern educational platform built with React and PHP featuring dynamic content management and community engagement.",
            tech: ["React", "PHP", "MySQL"],
            github: "https://github.com/JeetPitale/HOD_Project",
            demo: "https://vishaldahiya.cs.in/"
        },
        {
            id: 3,
            title: "Karvaan",
            description: "AI-powered travel agent that creates personalized, budget-optimized itineraries for hassle-free trips across India.",
            tech: ["AI", "Travel Tech"],
            github: "https://github.com/JeetPitale/Karvaan",
            demo: "https://karvaan-weld.vercel.app/"
        }
    ]
};
