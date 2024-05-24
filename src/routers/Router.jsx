import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import NotFount from "../pages/NotFount";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/blog/:slug",
        element: <Blog />
    },
    {
        path: "/team",
        element: <Team />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "*",
        element: <NotFount />
    }
]);

export default router;