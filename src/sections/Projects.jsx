import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section-padding overflow-hidden relative">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        A selection of my recent work and side projects.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userData.projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image Decor / Placeholder */}
                            <div className="relative h-48 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <Folder size={48} className="text-blue-200 dark:text-gray-700 group-hover:text-blue-500 transition-colors duration-500 transform group-hover:scale-110" />

                                {/* Tech Chips */}
                                <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                                    {project.tech.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs font-mono bg-white/50 dark:bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/20 dark:border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col relative">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold font-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Github size={18} className="mr-2" /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <ExternalLink size={18} className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href={userData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Github size={20} />
                        Explore More on GitHub
                    </a>
                </motion.div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />
            </div>
        </section>
    );
};

export default Projects;
