import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';

// Pricing Section - טעינה איטית
export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "599",
            period: "לחודש",
            description: "מושלם לעסקים קטנים ובינוניים",
            features: [
                "עד 10 לוקרים חכמים",
                "אפליקציה בסיסית כלולה",
                "תמיכה טכנית יומית",
                "דוחות ניהול חודשיים",
                "התקנה מקצועית"
            ],
            popular: false
        },
        {
            name: "Pro",
            price: "999",
            period: "לחודש", 
            description: "הבחירה המושלמת לעסקים בינוניים וגדולים",
            features: [
                "עד 50 לוקרים חכמים",
                "אפליקציה מתקדמת מותאמת",
                "תמיכה טכנית 24/7",
                "דוחות ניתוח בזמן אמת",
                "אינטגרציות API מתקדמות",
                "ניתוח נתונים ותובנות עסקיות"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "מותאם",
            period: "אישית",
            description: "פתרון מקצועי לארגונים גדולים ורשתות",
            features: [
                "לוקרים ללא הגבלה",
                "התאמה אישית מלאה",
                "מנהל חשבון ייעודי",
                "SLA מובטח 99.9%",
                "הדרכות והטמעה מקצועית",
                "פיתוח תכונות מותאמות"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-32 bg-black" id="pricing">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        בחרו את
                        <span className="block bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                            התוכנית שלכם
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        מחירים שקופים וגלויים, ללא עלויות נסתרות או הפתעות
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-3xl p-8 border backdrop-blur-sm ${
                                plan.popular 
                                    ? 'border-purple-400 bg-gradient-to-b from-purple-500/10 to-violet-600/10' 
                                    : 'border-gray-800 bg-gray-900/50'
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        הכי פופולרי ומומלץ
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-5xl font-black text-white">₪{plan.price}</span>
                                    <span className="text-gray-400 mr-2">{plan.period}</span>
                                </div>
                                <p className="text-gray-400">{plan.description}</p>
                            </div>

                            <Link to={createPageUrl('Contact')}>
                                <Button 
                                    className={`w-full py-4 rounded-2xl font-semibold text-lg ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-2xl shadow-purple-500/25'
                                            : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                                    }`}
                                    aria-label={`בחר תוכנית ${plan.name} - ${plan.price}₪ ${plan.period}`}
                                >
                                    {plan.price === 'מותאם' ? 'צור קשר לייעוץ' : 'התחל עכשיו'}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
