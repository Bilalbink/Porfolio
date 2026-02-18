import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Journey", to: "/journey" },
    { label: "Projects", to: "/projects" },
    { label: "Arts and Craft", to: "/arts-and-craft" },
    { label: "Cooking", to: "/cooking" },
    { label: "Music", to: "/music" },
];

const SidebarLayout = () => {
    const location = useLocation();

    return (
        <div className="bg-base-200">
            {/* Desktop: floating text sidebar */}
            <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-5 z-50">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`text-sm font-medium hover:text-secondary transition-colors ${location.pathname == link.to && "text-neutral"}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile: FAB with arc speed dial */}
            <div className="fab md:hidden">
                {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-lg btn-circle btn-neutral"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>

                {/* buttons that show up when FAB is open */}
                {navLinks.map((link) => (
                    <button key={link.to} className="btn btn-ghost">
                        <Link
                            to={link.to}
                            className="text-sm font-medium hover:text-base-content transition-colors"
                        >
                            {link.label}
                        </Link>
                    </button>
                ))}
            </div>

            <main className="">
                <Outlet />
            </main>
        </div>
    );
};

export default SidebarLayout;
