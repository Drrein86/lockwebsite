import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Layers, Clock } from 'lucide-react';

// Features Section - טעינה איטית
export default function Features() {
    const features = [
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "שליטה מלאה מהנייד",
            description: "פתיחה מרחוק, קבלת קוד חד-פעמי ב-SMS או ניהול הרשאות דרך אפליקציה ייעודית וקלה לשימוש.",
            color: "from-primary-400 to-secondary-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "אבטחה ללא פשרות",
            description: "נעילה דיגיטלית חכמה, מעקב בזמן אמת, ואופציה למצלמות אבטחה. הפריטים שלכם בטוחים תמיד.",
            color: "from-green-400 to-emerald-500"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "פתרון מודולרי לעסקים",
            description: "התאמה אישית לגודל ולצורך: לוקרים למשלוחים, לחדרי כושר, למשרדים ולחנויות.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "זמינות 24/7 ללא מגע",
            description: "שירות עצמי מהיר ונוח שפועל מסביב לשעון, ומאפשר גישה בטוחה בכל זמן ובכל שעה.",
            color: "from-primary-400 to-secondary-500"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-black to-gray-900" id="features">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        טכנולוגיה
                        <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                            מהעתיד
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        כל פיצ'ר תוכנן בקפידה כדי להעניק לכם חוויה מושלמת ובטוחה
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 h-full backdrop-blur-sm hover:border-gray-700 transition-all duration-500">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                            
                            {/* Hover glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
