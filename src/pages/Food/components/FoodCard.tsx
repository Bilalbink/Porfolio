import { useState } from "react";
import type { FoodItem } from "../../../types";
import { withCloudinaryCrop } from "../../../utils/cloudinary";

// ─── Cuisine badge colors ──────────────────────────────────────────────────────
// Add a new entry here whenever a new cuisine is introduced.
const CUISINE_COLORS: Record<string, string> = {
    Indonesian: "bg-red-700     text-white  border-red-700/40",
    Italian: "bg-green-700   text-white  border-green-700/40",
    Japanese: "bg-rose-700    text-white  border-rose-700/40",
    Mexican: "bg-yellow-600  text-white  border-yellow-600/40",
};

const DEFAULT_CUISINE_COLOR =
    "bg-base-300 text-base-content border-base-content/20";

const cuisineBadgeClass = (cuisine: string) =>
    `badge badge-sm border whitespace-nowrap flex-shrink-0 ${CUISINE_COLORS[cuisine] ?? DEFAULT_CUISINE_COLOR}`;

interface Props {
    item: FoodItem;
}

const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    return new Date(Number(year), Number(month) - 1).toLocaleDateString(
        "en-US",
        { month: "long", year: "numeric" },
    );
};

const FoodCard = ({ item }: Props) => {
    const slides = item.images;
    const [current, setCurrent] = useState(0);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const prev = () =>
        setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <>
            <div className="card bg-base-100 shadow-md flex flex-col h-full">
                {/* Carousel — hidden when no images */}
                {slides.length > 0 && (
                    <div className="relative overflow-hidden rounded-t-2xl h-52">
                        {/* Slide strip — all images side by side, translated to show current */}
                        <div
                            className="flex h-full transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {slides.map((img, i) => (
                                <img
                                    key={i}
                                    src={withCloudinaryCrop(img)}
                                    alt={`${item.title} ${i + 1}`}
                                    className="flex-shrink-0 w-full h-full object-cover cursor-zoom-in"
                                    onClick={() => setModalImage(img)}
                                />
                            ))}
                        </div>

                        {slides.length > 1 && (
                            <>
                                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between pointer-events-none z-10">
                                    <button
                                        className="btn btn-circle btn-sm bg-base-100/70 border-none pointer-events-auto"
                                        onClick={prev}
                                    >
                                        ❮
                                    </button>
                                    <button
                                        className="btn btn-circle btn-sm bg-base-100/70 border-none pointer-events-auto"
                                        onClick={next}
                                    >
                                        ❯
                                    </button>
                                </div>

                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="card-body p-5 flex flex-col flex-1">
                    {/* Title + cuisine badge */}
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="card-title text-base leading-tight">
                            {item.title}
                        </h3>
                        <span className={cuisineBadgeClass(item.cuisine)}>
                            {item.cuisine}
                        </span>
                    </div>

                    <p className="text-xs text-base-content/50 mt-0.5">
                        {formatDate(item.date)}
                    </p>

                    <p className="text-sm text-base-content/70 mt-2">
                        {item.description}
                    </p>

                    {item.link && (
                        <div className="mt-auto pt-4">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline gap-2 btn-neutral"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Recipe
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Full-size image modal */}
            {modalImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setModalImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost text-white"
                        onClick={() => setModalImage(null)}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                    <img
                        src={modalImage}
                        alt="Full size"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default FoodCard;
