import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import SidebarLayout from "./components/layouts/SidebarLayout";
import Home from "./pages/Home";
import Journey from "./pages/Journey/Journey";
import Projects from "./pages/Projects/Projects";
import Arts from "./pages/Arts/Arts";
// import Music from './pages/Music';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SidebarLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "journey",
                element: <Journey />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "arts-and-craft",
                element: <Arts />,
            },
            // {
            //   path: 'music',
            //   element: <Music />,
            // },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
