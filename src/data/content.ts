import type { Project, ArtPiece, Playlist, JourneyItem } from "../types";

// Home page content
export const homeContent = {
    name: "Your Name",
    tagline: "Creative Developer & Artist",
    intro: "I'm a passionate developer and artist who loves bringing ideas to life through code and creativity. I specialize in building beautiful, functional web applications while exploring various forms of artistic expression. Welcome to my digital portfolio where technology meets art!",
};

// Tech Projects
export const projects: Project[] = [
    {
        id: "1",
        title: "E-commerce Platform",
        description:
            "A full-featured online store with cart, checkout, and payment integration",
        longDescription:
            "Built a complete e-commerce solution with React, Node.js, and Stripe. Features include user authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing, and an admin dashboard for inventory management. The platform handles thousands of products and supports multiple payment methods.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe",
            "Tailwind CSS",
        ],
        thumbnail:
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://demo-ecommerce.example.com",
    },
    {
        id: "2",
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates",
        longDescription:
            "Developed a Trello-like task management application featuring drag-and-drop boards, real-time collaboration using WebSockets, team management, task assignments, and progress tracking. The app includes notifications, file attachments, and activity logs to keep teams synchronized.",
        technologies: [
            "TypeScript",
            "React",
            "Firebase",
            "Socket.io",
            "React Beautiful DnD",
        ],
        thumbnail:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://taskapp.example.com",
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description:
            "Beautiful weather app with forecasts and interactive maps",
        longDescription:
            "Created an elegant weather dashboard that displays current conditions, 7-day forecasts, and interactive weather maps. Features include location search, geolocation support, weather alerts, and historical data visualization. The UI adapts beautifully to different weather conditions with dynamic backgrounds and animations.",
        technologies: [
            "React",
            "OpenWeather API",
            "Chart.js",
            "Leaflet",
            "CSS3",
        ],
        thumbnail:
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
        githubUrl: "https://github.com/yourusername/weather-dashboard",
    },
];

// Art & Craft pieces
export const artPieces: ArtPiece[] = [
    {
        id: "1",
        title: "Abstract Sunset",
        medium: "Acrylic on Canvas",
        date: "2024-01",
        description:
            "An exploration of vibrant colors and fluid forms inspired by desert sunsets. This piece captures the ephemeral beauty of the golden hour through bold strokes and layered textures.",
        thumbnail:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        ],
    },
    {
        id: "2",
        title: "Urban Geometry",
        medium: "Digital Art",
        date: "2024-02",
        description:
            "A digital composition exploring the intersection of architecture and abstract geometry. Created using Procreate and inspired by modern cityscapes.",
        thumbnail:
            "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&h=600&fit=crop",
        ],
    },
    {
        id: "3",
        title: "Handcrafted Ceramics",
        medium: "Pottery",
        date: "2023-12",
        description:
            "A collection of hand-thrown pottery pieces featuring organic shapes and natural glazes. Each piece is unique and reflects the meditative process of working with clay.",
        thumbnail:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
        ],
    },
];

// Music Playlists
export const playlists: Playlist[] = [
    {
        id: "1",
        name: "Coding Flow",
        platform: "spotify",
        coverArt:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
        url: "https://open.spotify.com/playlist/example1",
        description: "Perfect background music for deep focus coding sessions",
    },
    {
        id: "2",
        name: "Creative Energy",
        platform: "spotify",
        coverArt:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
        url: "https://open.spotify.com/playlist/example2",
        description: "Upbeat tracks to fuel creativity and artistic projects",
    },
    {
        id: "3",
        name: "Chill Vibes",
        platform: "youtube",
        coverArt:
            "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        url: "https://youtube.com/playlist?list=example3",
        description: "Relaxing lo-fi and ambient music for unwinding",
    },
];

// Journey Timeline
export const journeyItems: JourneyItem[] = [
    {
        id: "1",
        type: "education",
        title: "Bachelor of Computer Science",
        institution: "Bilkent University",
        startDate: "2017-09",
        endDate: "2021-06",
        description: "",
        location: "Ankara, Turkey",
    },
    {
        id: "2",
        type: "work",
        title: "Software Engineer",
        institution: "Cubicl",
        startDate: "2021-01",
        endDate: "2021-03",
        description: "",
        location: "Ankara, Turkey",
    },
    {
        id: "3",
        type: "work",
        title: "Full Stack Developer",
        institution: "Everva",
        startDate: "2021-04",
        endDate: "2021-06",
        description: "",
        location: "Ankara, Turkey",
    },
    {
        id: "3",
        type: "work",
        title: "Software Developer",
        institution: "Erstream",
        startDate: "2021-06",
        endDate: "2022-06",
        description: "",
        location: "Ankara, Turkey",
    },
    {
        id: "3",
        type: "work",
        title: "Founding Engineer",
        institution: "Stacksync",
        startDate: "2022-06",
        endDate: undefined,
        description: "",
        location: "San Francisco, USA",
    },
];
