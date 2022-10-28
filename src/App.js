import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";

export default function App() {
    const isDark = localStorage.getItem("isDark")
    const [isDarkMode, setIsDarkMode] = useState(isDark === "true" ? true : false);

    function toggleIsDarkMode() {
        localStorage.setItem("isDark", !isDarkMode)
        setIsDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={isDarkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <NavBar isDark={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
                <div className="main">
                    <Pages isDarkMode={isDarkMode} />
                </div>
                <Footer isDarkMode={isDarkMode} />
            </BrowserRouter>
        </div>
    )
}