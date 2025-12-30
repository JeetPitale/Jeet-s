import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Freelancing = () => {
    return (
        <section id="freelancing" className="section-padding bg-gray-50 dark:bg-gray-800/50 min-h-[50vh] flex items-center justify-center">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center"
                >
                    <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-8 relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                        <Rocket size={48} className="text-blue-600 dark:text-blue-400" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Freelancing <span className="text-blue-600 dark:text-blue-400">Services</span>
                    </h2>

                    <div className="glass-card px-8 py-4 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 backdrop-blur-sm">
                        <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Feature Coming Soon
                        </p>
                    </div>

                    <p className="mt-8 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                        I'm currently structuring my freelancing packages to provide the best value. Stay tuned for exciting updates!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Freelancing;
