import React from 'react';
import { userData } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} {userData.name}. All rights reserved.
                </p>
                <p className="text-gray-400 dark:text-gray-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
