import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        My <span className="text-blue-600 dark:text-blue-400">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

                    {/* Vertical Line for Mobile */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

                    <div className="space-y-12">
                        {userData.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    } items-start md:items-center w-full`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 shadow-lg z-10 top-0 md:top-1/2 md:-mt-2" />

                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div
                                        className={`glass-card p-6 rounded-2xl relative ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                                            }`}
                                    >
                                        <div className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'
                                            }`}>
                                            <Briefcase size={16} />
                                            <span>{exp.company}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">{exp.role}</h3>

                                        <div className={`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'
                                            }`}>
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
