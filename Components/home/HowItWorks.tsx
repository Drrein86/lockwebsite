import React from 'react';
import { motion } from 'framer-motion';

// How It Works Section - טעינה איטית
export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "הזמינו לוקר בקלות",
            description: "הזמינו לוקר לאחסון זמני או הגדירו אותו כנקודת איסוף חבילות דרך האפליקציה."
        },
        {
            number: "02", 
            title: "קבלו קוד לנייד",
            description: "קבלו קוד פתיחה, לינק או QR מאובטח ישירות לטלפון הנייד שלכם או של הלקוח."
        },
        {
            number: "03",
            title: "פתחו בלחיצת כפתור",
            description: "פתחו את הלוקר ללא מפתח וללא מגע. פשוט, מהיר ובטוח, 24/7."
        }
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden" id="how-it-works">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        איך זה
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            עובד?
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-12 mb-16 last:mb-0 relative"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-black text-white">
                                    {step.number}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-xl text-gray-400 leading-relaxed">{step.description}</p>
                            </div>
                            
                            {/* Connection line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-12 mt-24 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}