import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data';

const About = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            About <span className="text-blue-600 dark:text-blue-400">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {userData.about.summary}
                        </p>

                        {/* Interests Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {userData.about.interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-4 rounded-xl flex items-center space-x-3"
                                >
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                        <interest.icon size={20} />
                                    </div>
                                    <span className="font-medium text-sm md:text-base">{interest.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual Placeholder */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden glass border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
                            {userData.about.imgUrl ? (
                                <img
                                    src={userData.about.imgUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center text-center p-6 text-gray-400">
                                    <span className="text-4xl mb-4">👋</span>
                                    <p>Image not found</p>
                                </div>
                            )}
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600/20 rounded-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-dots-pattern opacity-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
