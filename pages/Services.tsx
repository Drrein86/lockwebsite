import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Button } from '../Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card';
import { 
    ArrowRight, 
    Check,
    Loader2
} from 'lucide-react';
import { Service } from '../types/entities';
import { mockAPI } from '../lib/mockData';

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
            const serviceList = await mockAPI.listServices();
            setServices(serviceList);
            if (serviceList.length > 0) {
                setSelectedServiceId(serviceList[0].id);
            }
            setIsLoading(false);
        };
        fetchServices();
    }, []);

    const currentService = services.find(s => s.id === selectedServiceId);

    return (
        <div className="min-h-screen bg-black text-white">
            <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="relative text-5xl md:text-7xl font-black mb-6 leading-tight">
                            {/* Main Text */}
                            <span className="relative block text-white drop-shadow-2xl" style={{
                                textShadow: '0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(192, 38, 211, 0.3)'
                            }}>
                                פתרונות לוקרים חכמים
                            </span>
                            
                            {/* Animated Gradient Subtitle */}
                            <motion.span 
                                className="relative block mt-2"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #9333ea 0%, #c026d3 25%, #e879f9 50%, #c026d3 75%, #9333ea 100%)',
                                    backgroundSize: '200% 100%',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))',
                                }}
                            >
                                לכל עסק ומטרה 💎
                            </motion.span>
                            
                            {/* Sparkle Effects */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-3 h-3 bg-primary-400 rounded-full"
                                animate={{
                                    scale: [0, 1.5, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.div
                                className="absolute bottom-0 left-1/4 w-2.5 h-2.5 bg-secondary-400 rounded-full"
                                animate={{
                                    scale: [0, 1.5, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                            מערכות אחסון אוטומטיות מתקדמות להשכרה ולרכישה. בטיחות מקסימלית, נוחות מלאה וחיסכון משמעותי בעלויות תפעול.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="bg-green-600 text-white px-6 py-3 rounded-full font-bold">
                                ✓ זמינות 24/7
                            </div>
                            <div className="bg-violet-600 text-white px-6 py-3 rounded-full font-bold">
                                ✓ פתיחה מהסלולרי
                            </div>
                            <div className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">
                                ✓ אבטחה מתקדמת
                            </div>
                        </div>

                        <Link to={createPageUrl('Contact')}>
                            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-600 text-black font-bold text-xl px-12 py-6 rounded-2xl">
                                <ArrowRight className="ml-3 h-6 w-6" />
                                קבל הצעת מחיר עכשיו
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {isLoading ? (
                <div className="py-12 flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
            ) : (
                <section className="py-12 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-4">
                            {services.map(service => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedServiceId(service.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                        selectedServiceId === service.id
                                            ? 'bg-purple-500 text-black'
                                            : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    {isLoading ? (
                         <div className="py-12 flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
                    ) : currentService ? (
                        <motion.div
                            key={selectedServiceId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    {currentService.title}
                                </h2>
                                <h3 className="text-xl text-purple-400 mb-6 font-semibold">
                                    {currentService.subtitle}
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    {currentService.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-2xl font-bold text-white mb-4">יתרונות מרכזיים:</h4>
                                    <ul className="space-y-3">
                                        {currentService.benefits && currentService.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                                <span className="text-gray-300">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/20 mb-8">
                                    <div className="text-3xl font-black text-purple-400 mb-2">
                                        {currentService.price}
                                    </div>
                                    <p className="text-gray-400">כולל התקנה, תחזוקה ותמיכה טכנית</p>
                                </div>

                                <Link to={createPageUrl('Contact')}>
                                    <Button className="bg-gradient-to-r from-purple-500 to-violet-600 text-black font-bold px-8 py-4 rounded-xl text-lg">
                                        בקש הצעת מחיר מותאמת
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ) : (
                        <p className="text-center text-gray-400">בחר שירות להצגת פרטים.</p>
                    )}

                     {currentService && currentService.targetAudience && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-16 text-center"
                        >
                            <h4 className="text-2xl font-bold text-white mb-6">מתאים במיוחד עבור:</h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                {currentService.targetAudience.map((audience, index) => (
                                    <div key={index} className="bg-gray-800 px-6 py-3 rounded-full text-purple-400 font-semibold">
                                        {audience}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        מוכנים להתחיל?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        קבלו ייעוץ חינם ללא התחייבות והצעת מחיר מותאמת אישית לצרכים שלכם
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={createPageUrl('Contact')}>
                            <Button size="lg" className="bg-white text-purple-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100">
                                צור קשר עכשיו
                            </Button>
                        </Link>
                        <Link to={createPageUrl('Products')}>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl">
                                צפה במוצרים
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}