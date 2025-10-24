
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Button } from '../Components/ui/button';
import { Box, Clock, Shield, Smartphone, Star, Calendar, Award, Users, Target, Lightbulb, Zap, Loader2 } from 'lucide-react';

const iconMap = {
    Target,
    Lightbulb,
    Shield,
    Users,
    Award,
    Smartphone,
    Clock,
    Star,
    Zap,
    Box,
};

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

function Hero({ content }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };
    
    if (!content) return null;
    
    return (
        <div 
            dir="rtl" 
            className="relative min-h-[calc(80vh)] flex items-center justify-center text-center text-white overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <motion.div 
                    className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" 
                 style={{
                     backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                     backgroundSize: '50px 50px'
                 }}>
            </div>

            <motion.div 
                className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="mb-8">
                    <motion.div 
                        className="inline-block p-6 rounded-2xl mb-8 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-cyan-400/30 backdrop-blur-sm"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Box className="w-16 h-16 text-primary-400" />
                    </motion.div>
                </motion.div>

                <motion.h1 
                    variants={fadeIn} 
                    className="relative text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none"
                >
                    {/* Main Title */}
                    <span className="relative block text-white drop-shadow-2xl" style={{
                        textShadow: '0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(192, 38, 211, 0.3)'
                    }}>
                        חברת Lockey24
                    </span>
                    
                    {/* Animated Subtitle */}
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
                        לוקרים חכמים בישראל 🏆
                    </motion.span>
                    
                    {/* Sparkles */}
                    <motion.div
                        className="absolute -top-4 right-1/4 w-3 h-3 bg-primary-400 rounded-full"
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
                        className="absolute top-1/2 -left-6 w-2.5 h-2.5 bg-secondary-400 rounded-full"
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
                </motion.h1>
                
                <motion.div variants={fadeIn} className="mb-8">
                    <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 mx-auto rounded-full"></div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                    <p className="mb-4">
                        <strong className="text-primary-400">Lockey24</strong> היא חברה ישראלית המתמחה ב<strong className="text-white">לוקרים חכמים</strong> ו<strong className="text-white">פתרונות אחסון אוטומטיים</strong>. 
                        מטרתנו היא לספק לעסקים, מוסדות וארגונים מערכות לוקר מתקדמות, נוחות ובטוחות לשימוש.
                    </p>
                    <p>
                        הפתרונות שלנו כוללים <strong className="text-primary-400">לוקרים אוטומטיים עם פתיחה דיגיטלית</strong>, לוקרים לעובדים וללקוחות, וארונות אחסון חכמים המותאמים לעולם המודרני.
                    </p>
                </motion.div>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to={createPageUrl(content.buttonLink)}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl border-0">
                                <Calendar className="ml-3 h-6 w-6" />
                                {content.buttonText}
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

function Mission({ content }) {
    if (!content) return null;
    
    // The imageUrl variable is kept as per the outline, although the image rendering block is removed.
    const imageUrl = content.imageUrl;

    return (
        <section dir="rtl" className="py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">{content.title}</h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-8 font-light">
                                אנו מובילים את מהפכת האחסון החכם בישראל עם פתרונות טכנולוגיים חדשניים. המשימה שלנו היא להפוך כל אינטראקציה עם אחסון לחוויה פשוטה, בטוחה ויעילה, ללא צורך במפתחות או במגע פיזי.
                            </p>
                            <p className="text-gray-400 text-xl leading-relaxed font-light">
                                {content.content}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <motion.div 
                                className="text-center bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-xl rounded-2xl p-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-5xl font-black text-primary-400 mb-2">24/7</div>
                                <div className="text-gray-400 font-medium">שירות זמין</div>
                            </motion.div>
                            <motion.div 
                                className="text-center bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-xl rounded-2xl p-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-5xl font-black text-primary-400 mb-2">100%</div>
                                <div className="text-gray-400 font-medium">אוטומטי</div>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* The image block for imageUrl has been removed */}
                </div>
            </div>
        </section>
    );
}

function Values({ content }) {
    if(!content || !content.items) return null;
    
    return (
        <section dir="rtl" className="py-32 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {content.title}
                    </motion.h2>
                    <motion.div variants={fadeIn} className="w-32 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 mx-auto rounded-full"></motion.div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {content.items.map((value, index) => {
                        const IconComponent = iconMap[value.icon];
                        if (!IconComponent) return null;
                        return (
                            <motion.div 
                                key={index}
                                variants={fadeIn}
                                whileHover={{ 
                                    y: -15, 
                                    scale: 1.02,
                                    boxShadow: '0 25px 50px rgba(6, 182, 212, 0.15)'
                                }}
                                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-xl rounded-3xl p-8 text-center group"
                                transition={{ duration: 0.6 }}
                            >
                                <div className="mb-8">
                                    <div className="inline-block p-6 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-2xl">
                                        <IconComponent className="w-8 h-8 text-black" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors duration-300">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{value.text}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function WhyChooseUs({ content }) {
    if (!content || !content.items) return null;
    
    // The imageUrl variable is kept as per the outline, although the image rendering block is removed.
    const imageUrl = content.imageUrl;
    
    return (
        <section dir="rtl" className="py-32 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* The image block for imageUrl has been removed */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">{content.title}</h2>
                            <p className="text-gray-400 text-xl leading-relaxed font-light">
                               {content.content}
                            </p>
                        </div>

                        <motion.div 
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {content.items.map((benefit, index) => {
                                const IconComponent = iconMap[benefit.icon];
                                if (!IconComponent) return null;
                                return (
                                <motion.div 
                                    key={index}
                                    variants={fadeIn}
                                    className="flex items-center gap-6 bg-gradient-to-r from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm p-6 rounded-2xl hover:border-cyan-400/30 transition-all duration-300"
                                    whileHover={{ scale: 1.02, x: 10 }}
                                >
                                    <div className="p-3 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl">
                                        <IconComponent className="w-6 h-6 text-black" />
                                    </div>
                                    <span className="text-white font-medium text-lg">{benefit.text}</span>
                                </motion.div>
                            )})}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CTA({ content }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };

    if (!content) return null;
    
    return (
        <section 
            dir="rtl" 
            className="relative py-32 bg-black text-white overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 100,
                        y: mousePosition.y * 100
                    }}
                    style={{
                        left: '10%',
                        top: '10%'
                    }}
                />
                <motion.div 
                    className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -50,
                        y: mousePosition.y * -50
                    }}
                    style={{
                        right: '10%',
                        bottom: '10%'
                    }}
                />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {content.title}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        {content.content}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to={createPageUrl(content.buttonLink)}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-black font-bold text-xl px-16 py-8 rounded-2xl shadow-2xl border-0">
                                    <Calendar className="ml-3 h-6 w-6" />
                                    {content.buttonText}
                                </Button>
                            </motion.div>
                        </Link>
                        
                        <div className="text-gray-300 text-lg font-medium flex items-center gap-3">
                            <Shield className="w-6 h-6 text-primary-400" />
                            <span>ללא התחייבות</span>
                        </div>
                    </div>
                    
                    <motion.div 
                        className="mt-16 pt-8 border-t border-gray-800"
                    >
                        <p className="text-gray-500 text-lg">
                            רמת גן, תל אביב, ישראל • 
                            <a href="mailto:Automated.locker@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors font-medium ml-2">
                                Automated.locker@gmail.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function AboutPage() {
    const [pageContent, setPageContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); 

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            // TODO: Replace with actual API call when backend is ready
            // For now, using empty content
            const contentMap = {};
            setPageContent(contentMap);
            setLoading(false);
        };
        fetchContent();
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <Loader2 className="w-16 h-16 animate-spin text-primary-400" />
            </div>
        );
    }
    
    return (
        <div className="bg-black text-white overflow-hidden" onMouseMove={handleMouseMove}>
            <Hero content={pageContent['about-hero']} />
            <Mission content={pageContent['about-mission']} />
            <Values content={pageContent['about-values']} />
            <WhyChooseUs content={pageContent['about-why-us']} />
            <CTA content={pageContent['about-cta']} />
        </div>
    );
}
