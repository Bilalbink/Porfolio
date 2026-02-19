export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    thumbnail: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface ArtPiece {
    id: string;
    title: string;
    medium: string;
    date: string;
    description: string;
    images: string[];
    link?: string;
}

export interface Playlist {
    id: string;
    name: string;
    platform: "spotify" | "youtube" | "other";
    coverArt: string;
    url: string;
    description?: string;
}

export interface JourneyItem {
    id: string;
    type: "education" | "work";
    title: string;
    institution: string;
    startDate: string;
    endDate?: string;
    description: string;
    location?: string;
}

export interface FoodItem {
    id: string;
    title: string;
    cuisine: string;
    date: string;
    description: string;
    images: string[];
    link?: string;
}
