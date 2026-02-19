import { foodItems } from "../../data/content";
import FoodCard from "./components/FoodCard";

const Food = () => {
    return (
        <div className="min-h-screen bg-base-200 py-16 px-4">
            <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
                Cooking & Baking
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodItems.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Food;
