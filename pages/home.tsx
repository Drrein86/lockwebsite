import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '../Components/ui/button';
import { 
    ArrowRight, 
    Zap, 
    Shield, 
    Smartphone, 
    Clock, 
    Star, 
    CheckCircle, 
    Play,
    Box,
    Layers,
    Wifi,
    Lock,
    Bell,
    TrendingUp,
    Award,
    Users,
    Quote,
    MapPin,
    Phone,
    Mail,
    ChevronRight
} from 'lucide-react';

// 🚀 LAZY LOAD NON-CRITICAL COMPONENTS
const Features = lazy(() => import('../Components/home/Features'));
const HowItWorks = lazy(() => import('../Components/home/HowItWorks'));
const Testimonials = lazy(() => import('../Components/home/Testimonials'));
const Pricing = lazy(() => import('../Components/home/Pricing'));
const FinalCTA = lazy(() => import('../Components/home/FinalCTA'));

const SectionLoader = () => (
    <div className="w-full h-96 flex items-center justify-center">
        <div className="loading-skeleton w-full h-full rounded-3xl"></div>
    </div>
);

function LockerCube() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
    
    return (
        <div ref={ref} className="relative w-80 h-80 mx-auto perspective-1000 gpu-accelerate" role="img" aria-label="אנימציית לוקר חכם תלת מימדי">
            <motion.div
                className="w-full h-full preserve-3d"
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 border border-primary-400/30 rounded-3xl backdrop-blur-sm transform-gpu" 
                     style={{ transform: 'translateZ(40px)' }}>
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <Lock className="w-16 h-16 mb-4 text-primary-400" aria-hidden="true" />
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" aria-label="סטטוס פעיל"></div>
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 border border-purple-400/30 rounded-3xl backdrop-blur-sm transform-gpu"
                     style={{ transform: 'translateZ(-40px) rotateY(180deg)' }}>
                    <div className="flex items-center justify-center h-full">
                        <Wifi className="w-16 h-16 text-purple-400" aria-hidden="true" />
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-400/30 rounded-3xl backdrop-blur-sm transform-gpu"
                     style={{ transform: 'rotateY(90deg) translateZ(40px)' }}>
                    <div className="flex items-center justify-center h-full">
                        <Bell className="w-16 h-16 text-green-400" aria-hidden="true" />
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 border border-orange-400/30 rounded-3xl backdrop-blur-sm transform-gpu"
                     style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}>
                    <div className="flex items-center justify-center h-full">
                        <Smartphone className="w-16 h-16 text-orange-400" aria-hidden="true" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function Hero({ content }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };

    return (
        <section 
            className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden critical-path"
            onMouseMove={handleMouseMove}
            role="banner"
            aria-label="אזור ראשי - לוקרים חכמים אוטומטיים"
        >
            <div className="absolute inset-0 gpu-accelerate">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <motion.div 
                    className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl gpu-accelerate"
                    animate={{
                        x: mousePosition.x * 100,
                        y: mousePosition.y * 100
                    }}
                    style={{
                        left: '20%',
                        top: '20%'
                    }}
                />
                <motion.div 
                    className="absolute w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl gpu-accelerate"
                    animate={{
                        x: mousePosition.x * -50,
                        y: mousePosition.y * -50
                    }}
                    style={{
                        right: '20%',
                        bottom: '20%'
                    }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.02]" 
                 style={{
                     backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                     backgroundSize: '50px 50px'
                 }}>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12"
                >
                    <LockerCube />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="space-y-8 max-w-4xl mx-auto"
                    role="main"
                >
                    <h1 className="relative text-6xl md:text-8xl font-black leading-none tracking-tighter">
                        {/* Main Text */}
                        <span className="relative block text-white">
                            לוקרים חכמים בישראל
                        </span>
                        
                        {/* Animated Gradient Brand Name */}
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
                                backgroundImage: 'linear-gradient(90deg, #9333ea 0%, #c026d3 20%, #e879f9 40%, #f0abfc 60%, #c026d3 80%, #9333ea 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Lockey24 ⚡
                        </motion.span>
                    </h1>
                    
                    <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                        <h2 className="sr-only">מה אנחנו מציעים - פתרונות לוקרים חכמים ואוטומטיים</h2>
                        <p className="mb-4">
                            ברוכים הבאים ל־<strong className="text-primary-400">Lockey24</strong> – החברה המובילה בישראל לפתרונות אחסון חכמים. 
                            אנו מתמחים בהתקנה ופיתוח של <strong className="text-white">לוקרים חכמים (Smart Lockers)</strong> ו<strong className="text-white">לוקרים אוטומטיים</strong> לעסקים, מוסדות, קניונים, אוניברסיטאות וארגונים בכל רחבי הארץ.
                        </p>
                        <p className="mb-4">
                            הלוקרים שלנו מאפשרים פתיחה וניהול באמצעות אפליקציה ייעודית או קוד אישי, ומציעים חוויית שימוש מתקדמת ובטוחה.
                        </p>
                        <p>
                            בין אם אתם מחפשים <strong className="text-primary-400">פתרון לוקר לעובדים</strong>, אחסון זמני ללקוחות, או <strong className="text-primary-400">מערכת לוקרים אוטומטיים לניהול חבילות</strong> – אצלנו תמצאו את המענה המושלם.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={createPageUrl('Products')}>
                                <Button 
                                    size="lg" 
                                    className="bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white font-semibold px-12 py-6 rounded-2xl text-lg shadow-2xl shadow-primary-500/25 border-0"
                                    aria-label="התחל עכשיו - קבל הצעת מחיר ללוקרים חכמים"
                                >
                                    התחל עכשיו
                                    <ArrowRight className="mr-2 h-5 w-5" aria-hidden="true" />
                                </Button>
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={createPageUrl('Contact')}>
                                <Button 
                                    variant="outline" 
                                    size="lg"
                                    className="border-2 border-gray-600 hover:border-gray-500 text-white hover:text-white bg-transparent hover:bg-gray-800/50 font-semibold px-12 py-6 rounded-2xl text-lg backdrop-blur-sm"
                                    aria-label="צפה בהדגמה - ראה איך עובדים הלוקרים החכמים"
                                >
                                    <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                                    צפה בהדגמה
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-800/50 below-fold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        role="region"
                        aria-label="סטטיסטיקות החברה"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                            <div className="text-gray-500 text-sm">זמינות מערכת</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                            <div className="text-gray-500 text-sm">תמיכה טכנית</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-400 mb-2">100+</div>
                            <div className="text-gray-500 text-sm">לקוחות מרוצים</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 deferred-animation"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="גלול למטה"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <motion.div 
                        className="w-1 h-3 bg-gradient-to-b from-primary-400 to-secondary-600 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

function FAQ() {
    const faqItems = [
        {
            question: "מה ההבדל בין לוקר חכם ללוקר אוטומטי?",
            answer: "<strong>לוקר חכם</strong> הוא תא אחסון הנפתח באמצעי דיגיטלי (אפליקציה, קוד, QR) ומנוהל מרחוק. <strong>לוקר אוטומטי</strong> הוא לרוב מערך של לוקרים חכמים המשמש לתהליכים אוטומטיים כמו מסירת חבילות (Click & Collect) או השכרה לטווח קצר, ומצמצם את הצורך בכוח אדם."
        },
        {
            question: "כמה עולה להשכיר לוקרים חכמים?",
            answer: "המחיר מתחיל ב-599 ₪ לחודש ליחידה בסיסית ומשתנה בהתאם לכמות הלוקרים, רמת ההתאמה האישית והפיצ'רים הנדרשים. אנו מציעים חבילות גמישות לעסקים בכל גודל. צרו קשר לקבלת הצעת מחיר מותאמת אישית."
        },
        {
            question: "האם הלוקרים האוטומטיים שלכם מאובטחים?",
            answer: "בהחלט. האבטחה היא בראש סדר העדיפויות שלנו. כל לוקר חכם מצויד במנגנון נעילה דיגיטלי מתקדם, המערכת כולה מגובה בשרתים מאובטחים, ויש אפשרות להוסיף מצלמות אבטחה ורישום כניסות מפורט."
        },
        {
            question: "באילו אזורים אתם מספקים שירותי התקנה?",
            answer: "אנו מספקים שירותי התקנה, תחזוקה ותמיכה עבור לוקרים אוטומטיים בכל רחבי הארץ, עם דגש על אזור המרכז, תל אביב, רמת גן והסביבה."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.replace(/<[^>]*>?/gm, '')
            }
        }))
    };

    return (
        <section className="py-32 bg-black" id="faq" aria-labelledby="faq-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 id="faq-title" className="text-5xl md:text-6xl font-black text-white mb-6">
                        שאלות נפוצות על
                        <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                            לוקרים חכמים
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        כל מה שרציתם לדעת על לוקרים אוטומטיים במקום אחד.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
                        >
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                    {item.question}
                                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90" />
                                </summary>
                                <div className="mt-4 text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </details>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const pageContent = {};

    return (
        <div className="bg-black text-white overflow-hidden">
            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .transform-gpu {
                    transform: translateZ(0); 
                }
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                }
            `}</style>
            
            <Hero content={pageContent['home-hero']} />
            
            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <Features />
                </div>
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <HowItWorks />
                </div>
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <Testimonials />
                </div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <FAQ />
                </div>
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <Pricing />
                </div>
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <div className="below-fold">
                    <FinalCTA />
                </div>
            </Suspense>
        </div>
    );
}
