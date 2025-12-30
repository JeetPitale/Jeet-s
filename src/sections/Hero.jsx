import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { userData } from '../data';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Decor - Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white dark:from-blue-950 dark:via-gray-950 dark:to-gray-950 -z-20 transition-colors duration-500" />

            {/* Animated Blobs */}
            <div className="absolute top-20 -left-10 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-purple-900/40" />
            <div className="absolute top-20 -right-10 w-96 h-96 bg-yellow-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-yellow-900/40" />
            <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-900/40 transform -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6 relative"
                    >
                        <span className="relative inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase backdrop-blur-sm">
                            Available for hire
                            <span className="absolute flex h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white animate-fade-in group">
                        {userData.name}
                    </h1>

                    <div className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8 h-[60px] md:h-auto flex items-center justify-center gap-2">
                        <span>I am a</span>
                        <TypeAnimation
                            sequence={[
                                userData.role,
                                2000,
                                'Problem Solver',
                                2000,
                                'Creative Thinker',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
                        {userData.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                        >
                            View Work
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href={userData.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Resume
                            <Download className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-600 rounded-full flex justify-center p-1 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
