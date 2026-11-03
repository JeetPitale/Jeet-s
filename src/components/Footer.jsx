import React from 'react';
import { userData } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <a href="https://studio.youtube.com/channel/UC5vfVota-OkDqkmM63zeo5A/content?d=ud">© 2025 {userData.name}. All rights reserved.</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
