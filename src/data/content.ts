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
        id: "3",
        title: "The Dragon Fly Codex",
        medium: "Book Binding",
        date: "2025-11",
        description:
            "My first attempt at book binding. I used 130 GSM papers with a yellowish tint for the pages, red thread for the stitching and 300 GSM paper for the cover.",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491233/WhatsApp_Image_2026-02-19_at_9.43.34_AM_1_bg5mvq.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491232/WhatsApp_Image_2026-02-19_at_9.43.33_AM_d0ope6.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491232/WhatsApp_Image_2026-02-19_at_9.43.34_AM_owzlbp.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491232/WhatsApp_Image_2026-02-19_at_9.43.34_AM_2_dpbww4.jpg",
        ],
        link: "https://www.youtube.com/watch?v=mrL8GesGgoU&t=1s",
    },
    {
        id: "2",
        title: "Origami Playlist Art",
        medium: "Digital Art",
        date: "2025-04",
        description:
            "Digital art I made for my spotify playlists. Each art reflects the genre/mood of the playlist. Created using Adobe Illustrator and Photoshop.",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494441/origmai_racoon_pw6pft.png",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494372/3b782f102665091.603af44819825_pq72gk.png",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494419/c31ac7102665091.60589f874fa37_bxufvg.png",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494373/9701ff102665091.6058a664aa35c_hr4z4s.png",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494374/bceb69102665091.5f3c09fdcdece_vpee4g.png",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771494443/Origami_Cloud_v1_ymsayt.png",
        ],
    },
    {
        id: "1",
        title: "Raccoon Heart",
        medium: "Origami",
        date: "2024-06",
        description: "A gift for a very special someone ;)",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491235/WhatsApp_Image_2026-02-19_at_9.43.45_AM_1_twxhfy.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491233/WhatsApp_Image_2026-02-19_at_9.43.43_AM_1_boapzv.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491234/WhatsApp_Image_2026-02-19_at_9.43.44_AM_kjxe3u.jpg",
        ],
        link: "https://www.youtube.com/watch?v=X2FYuvt-U80",
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
