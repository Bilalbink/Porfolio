import type { JourneyItem as JourneyItemType } from "../../../types";

interface Props {
    item: JourneyItemType;
    index: number;
}

const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const d = new Date(Number(year), Number(month) - 1);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const JourneyItem = ({ item, index }: Props) => {
    const isLeft = index % 2 === 0;

    const card = (
        <div className="card bg-base-100 shadow-md w-full">
            <div className="card-body p-5">
                <div className="flex items-center gap-2 mb-1">
                    <span
                        className={`badge badge-sm ${item.type === "education" ? "badge-success" : "badge-neutral"}`}
                    >
                        {item.type === "education" ? "Education" : "Work"}
                    </span>
                    <span className="text-xs text-base-content">
                        {formatDate(item.startDate)} —{" "}
                        {item.endDate ? formatDate(item.endDate) : "Present"}
                    </span>
                </div>
                <h3 className="card-title text-base leading-tight">
                    {item.title}
                </h3>
                <p className="text-sm font-medium text-base-content/70">
                    {item.institution}
                </p>
                {item.location && (
                    <p className="text-xs text-base-content/50">
                        {item.location}
                    </p>
                )}
                <p className="text-sm text-base-content/80 mt-1">
                    {item.description}
                </p>
            </div>
        </div>
    );

    const dot = (
        <div
            className={`relative z-10 w-4 h-4 rounded-full border-4 border-base-200 ${item.type === "education" ? "bg-success" : "bg-neutral"}`}
        />
    );

    return (
        <>
            {/* Mobile: dot on left, card fills the rest */}
            <div className="flex items-center w-full lg:hidden">
                <div className="w-10 flex-shrink-0 flex justify-center relative">
                    <div className="absolute left-1/2 right-0 border-t-2 border-dashed border-accent" />
                    {dot}
                </div>
                <div className="flex-1 pl-3">{card}</div>
            </div>

            {/* Desktop: alternating left/right */}
            <div className="hidden lg:flex items-center w-full">
                <div className="w-5/12">{isLeft && card}</div>
                <div className="w-2/12 flex items-center justify-center relative">
                    {isLeft && (
                        <div className="absolute right-1/2 left-0 border-t-2 border-dashed border-accent" />
                    )}
                    {dot}
                    {!isLeft && (
                        <div className="absolute left-1/2 right-0 border-t-2 border-dashed border-accent" />
                    )}
                </div>
                <div className="w-5/12">{!isLeft && card}</div>
            </div>
        </>
    );
};

export default JourneyItem;
