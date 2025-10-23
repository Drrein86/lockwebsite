import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

// CTA Section - טעינה איטית
export default function FinalCTA() {
    return (
        <section className="py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden" id="contact-cta">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
                        מוכנים לעתיד?
                    </h2>
                    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
                        הצטרפו לעידן החדש של לוקרים חכמים אוטומטיים והעניקו ללקוחות שלכם חוויה שלא תישכח
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={createPageUrl('Contact')}>
                                <Button 
                                    size="lg" 
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-16 py-8 rounded-2xl text-xl shadow-2xl shadow-cyan-500/25 border-0"
                                    aria-label="בואו נתחיל - קבל הצעת מחיר ללוקרים חכמים"
                                >
                                    בואו נתחיל
                                    <ArrowRight className="mr-3 h-6 w-6" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Contact information */}
                    <motion.div 
                        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="flex items-center justify-center gap-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <div>
                                <div className="text-sm text-gray-500">איזור שירות</div>
                                <span>רמת גן, תל אביב וכל הארץ</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3 text-gray-300">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <div>
                                <div className="text-sm text-gray-500">זמינות</div>
                                <span>24/7 מענה מהיר</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}