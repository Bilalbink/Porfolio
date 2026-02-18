import { journeyItems } from "../../data/content";
import JourneyItem from "./components/JourneyItem";

const Journey = () => {
    return (
        <div className="min-h-screen bg-base-200 py-16 px-4">
            <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
                My Journey
            </h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical line — left-aligned on mobile, centered on desktop */}
                <div className="lg:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-accent" />
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent" />

                <div className="flex flex-col gap-10 py-4">
                    {journeyItems.map((item, i) => (
                        <JourneyItem key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journey;
