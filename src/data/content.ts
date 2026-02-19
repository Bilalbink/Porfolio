import type { Project, ArtPiece, Playlist, JourneyItem } from "../types";
import OffshootThumbnail from "../assets/offshoot-thumbnail.png";

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
        title: "Offshoot",
        description:
            "Breathe new life into your Spotify playlists with powerful tools that transform how you discover, organize, and experience your music!",
        longDescription:
            "Offshoot helps you get more out of your Spotify account with three powerful features. Split large playlists into smaller, organized collections based on song count, genres, or moods. View detailed monthly statistics about your listening habits, including top songs, artists, and genres. Discover new music with personalized recommendations tailored to your unique taste and listening history.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "Tailwind CSS",
            "AppWrite",
            "Spotify Web API",
        ],
        thumbnail: OffshootThumbnail,
        githubUrl: "https://github.com/Bilalbink/offshoot",
        liveUrl: "https://offshoot.fly.dev",
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
        id: "4",
        type: "work",
        title: "Software Developer",
        institution: "Erstream",
        startDate: "2021-06",
        endDate: "2022-06",
        description: "",
        location: "Ankara, Turkey",
    },
    {
        id: "5",
        type: "work",
        title: "Founding Engineer",
        institution: "Stacksync",
        startDate: "2022-06",
        endDate: undefined,
        description: "",
        location: "San Francisco, USA",
    },
];
