import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { userData } from '../data';

const Education = () => {
    return (
        <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        My <span className="text-blue-600 dark:text-blue-400">Education</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My academic journey and qualifications.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {userData.education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl shrink-0">
                                <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    {edu.institute}
                                </p>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg shrink-0">
                                <Calendar size={18} className="mr-2" />
                                {edu.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
