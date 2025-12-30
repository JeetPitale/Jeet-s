import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { userData } from '../data';
import BookingModal from '../components/BookingModal';

const Freelancing = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="freelancing" className="section-padding bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Freelancing <span className="text-blue-600 dark:text-blue-400">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Professional services tailored to your needs. High-quality work delivered with precision and care.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {userData.freelancing.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                    <service.icon size={32} className="text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                                        <Check size={18} className="text-green-500 mr-3 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="block w-full text-center py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                            >
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <BookingModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </section>
    );
};

export default Freelancing;
