import type {
    Project,
    ArtPiece,
    Playlist,
    JourneyItem,
    FoodItem,
} from "../types";

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
            "A more polished iteration of a tool I built during my university days. That was when i first started using Spotify and ended up dumping songs into a single playlist regardless of their genre or mood. Wanting to organize that huge playlist I utilized Spotify's web API to split songs based on their genres.",
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
        thumbnail:
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771499742/offshoot-thumbnail_oa5hjn.png",
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
        title: "For My Raccoon",
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

// Food & Cooking
export const foodItems: FoodItem[] = [
    {
        id: "3",
        title: "Prawn Bisque",
        cuisine: "French",
        date: "2025-11",
        description:
            "Practiced my French cooking by making this rich, delicious and hearty soup. Garnished with leeks and toasted walnuts and served with sliced and toasted baguette.",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491287/WhatsApp_Image_2026-02-19_at_9.43.18_AM_4_gbpevj.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491287/WhatsApp_Image_2026-02-19_at_9.43.18_AM_3_jd92ql.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491287/WhatsApp_Image_2026-02-19_at_9.43.19_AM_1_oqzayp.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491288/WhatsApp_Image_2026-02-19_at_9.43.19_AM_inasqm.jpg",
        ],
        link: "https://www.youtube.com/watch?v=ZEtX3ztkg8M",
    },
    {
        id: "2",
        title: "Panna Cotta",
        cuisine: "Italian",
        date: "2025-10",
        description:
            "After trying a Panna Cotta for the first time in Sicily, I immediately fell in love with its creamy goodness and sweet and tangy topping. The version I made used Agar Agar and was topped with a Blackberry Coulis.",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771497256/WhatsApp_Image_2026-02-19_at_9.43.22_AM_hpuukh.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771497223/WhatsApp_Image_2026-02-19_at_9.43.19_AM_2_yrbrpt.jpg",
        ],
        link: "https://www.youtube.com/watch?v=p5mSdmO6kEc",
    },
    {
        id: "1",
        title: "Chocolate Fudge",
        cuisine: "American",
        date: "2021-09",
        description:
            "One of the more challenging recipes I followed, it involed careful timings, risk of over cooking and chances of the fudge not being set properly. Luckily, it turned out rich, smooth, velvety and it melted in your mouth. I topped it with a Hazelnut Praline.",
        images: [
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491496/WhatsApp_Image_2026-02-19_at_9.43.40_AM_sx6l75.jpg",
            "https://res.cloudinary.com/dcmewemzs/image/upload/v1771491491/WhatsApp_Image_2026-02-19_at_9.43.39_AM_3_roqcw3.jpg",
        ],
        link: "https://www.youtube.com/watch?v=MDh68qACyw8",
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
        description:
            "I studied Computer Engineering at Bilkent University on a full academic scholarship. The program gave me a strong foundation in software development, algorithms, and system design. During my time there, I won awards at the CS Fair for visual design and innovation, which showed me early on that I cared as much about how software looks and feels as how it works technically. That experience steered me toward building practical products people actually use.",
        location: "Ankara, Turkey",
    },
    {
        id: "2",
        type: "work",
        title: "Software Engineer",
        institution: "Cubicl",
        startDate: "2021-01",
        endDate: "2021-03",
        description:
            "I joined Cubicl part-time while finishing university to help build their mobile app. I worked on the user interface and collaborated with the team using their DevOps tools. It was my first professional software development role and introduced me to working in a structured engineering environment.",
        location: "Ankara, Turkey",
    },
    {
        id: "3",
        type: "work",
        title: "Full Stack Developer",
        institution: "Everva",
        startDate: "2021-04",
        endDate: "2021-06",
        description:
            "I worked as a freelance developer for Everva building a hospital management system. I created the web interface that staff would use and integrated the payment processing that made the system functional. It was a short project but gave me experience working independently and delivering complete features end to end.",
        location: "Ankara, Turkey",
    },
    {
        id: "4",
        type: "work",
        title: "Software Developer",
        institution: "Erstream",
        startDate: "2021-06",
        endDate: "2022-06",
        description:
            "I spent a year at Erstream building the user-facing parts of their web and mobile applications, one of them being a Netflix like platform called Dramax which served Turkish content to Arabic and Spanish audience. I translated design mockups into working interfaces that people could actually use, creating reusable components that made the development process faster and more consistent. It was my first full-time role after university and taught me how to work on real products with real deadlines.",
        location: "Ankara, Turkey",
    },
    {
        id: "5",
        type: "work",
        title: "Founding Engineer",
        institution: "Stacksync",
        startDate: "2022-06",
        endDate: undefined,
        description:
            "I joined Stacksync as their founding engineer when it was just an idea and built the entire platform from scratch, growing it to serve over 100 paying customers. I made the early decisions about how the product would work, built the systems that power it, and created the infrastructure that allowed the team to scale. This startup experience taught me to make decisions quickly, take full responsibility for outcomes, and continuously iterate based on real user needs. I grew to care deeply about building things that work well in practice, not just in theory, and I take pride in seeing projects through end to end",
        location: "San Francisco, USA",
    },
];
