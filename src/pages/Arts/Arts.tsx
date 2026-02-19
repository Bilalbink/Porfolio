import { artPieces } from "../../data/content";
import ArtCard from "./components/ArtCard";

const Arts = () => {
    return (
        <div className="min-h-screen bg-base-200 py-16 px-4">
            <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
                Arts & Crafts
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artPieces.map((piece) => (
                    <ArtCard key={piece.id} piece={piece} />
                ))}
            </div>
        </div>
    );
};

export default Arts;
