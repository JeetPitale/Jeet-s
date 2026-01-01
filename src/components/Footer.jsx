import React from 'react';
import { userData } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    © 2025 {userData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
