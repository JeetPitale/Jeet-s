import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { userData } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Initial Theme Check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Freelancing', to: 'freelancing' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold font-heading tracking-tighter cursor-pointer hover:text-blue-600 transition-colors"
                >
                    {userData.name.split(' ')[0]}.
                </ScrollLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-blue-600 font-semibold"
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            {link.name}
                        </ScrollLink>
                    ))}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
                    </button>

                    <a
                        href={userData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu & Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 h-full w-[250px] z-50 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-20 px-6 space-y-6">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
