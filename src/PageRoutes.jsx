import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Love from "./Love";
import Projects from "./Projects";
import Work from "./Work";
import Research from "./Research";
import Blog from "./Blog";

function PageRoutes() {
    const location = useLocation();
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/love" element={<Love />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/research" element={<Research />} />
        </Routes>
    );
}

export default PageRoutes;