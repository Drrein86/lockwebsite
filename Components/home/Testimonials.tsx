import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Testimonials Section - טעינה איטית
export default function Testimonials() {
    const testimonials = [
        {
            name: "דוד כהן",
            role: "מנהל נכסים - חברת נדל\"ן מובילה",
            content: "המערכת פשוט מהפכנית! חסכה לנו שעות עבודה וגרמה לדיירים להיות מרוצים יותר. השקעה שמחזירה את עצמה.",
            rating: 5
        },
        {
            name: "שרה לוי",
            role: "בעלת רשת חדרי כושר",
            content: "הלוקרים החכמים הפכו את החוויה של המתרגלים למשהו מיוחד. טכנולוגיה ברמה אחרת שמקנה בטחון מלא.",
            rating: 5
        },
        {
            name: "מיכאל ברק",
            role: "מנהל מלון 5 כוכבים",
            content: "האורחים שלנו בהלם מהטכנולוגיה המתקדמת. זה באמת מעלה את רמת השירות למקום אחר לגמרי.",
            rating: 5
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-gray-900 to-black" id="testimonials">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        מה אומרים
                        <span className="block bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                            הלקוחות
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-purple-400 mb-4" />
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                {testimonial.content}
                            </p>
                            <div className="border-t border-gray-800 pt-4">
                                <div className="font-semibold text-white">{testimonial.name}</div>
                                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
