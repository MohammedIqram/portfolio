import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ activeSection, PRIMARY_TEXT_GRADIENT }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = ["home", "skills", "projects", "journey", "contact"];

    return (
        <nav className="sticky top-0 bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Name */}
                <h2 className={`text-xl font-bold tracking-wide ${PRIMARY_TEXT_GRADIENT}`}>
                    Mohammed Sameer Inamdar
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-300">
                    {menuItems.map((sec) => (
                        <li key={sec}>
                            <a
                                href={`#${sec}`}
                                className={`transition font-medium ${activeSection === sec
                                        ? "text-[#00ddff] border-b-2 border-[#00ddff] pb-1"
                                        : "hover:text-[#00ddff]"
                                    }`}
                            >
                                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Icon */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/90 border-t border-gray-700">
                    <ul className="flex flex-col items-center py-4 gap-4">
                        {menuItems.map((sec) => (
                            <li key={sec}>
                                <a
                                    href={`#${sec}`}
                                    className={`block text-lg ${activeSection === sec
                                            ? "text-[#00ddff]"
                                            : "text-gray-300 hover:text-[#00ddff]"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
