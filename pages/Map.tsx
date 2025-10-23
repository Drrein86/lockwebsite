import React, { useState, useEffect } from 'react';
import { Location } from '../types/entities';
import { mockAPI } from '../lib/mockData';
import { motion } from 'framer-motion';
import { Badge } from '../Components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export default function MapPage() {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const data = await mockAPI.listLocations();
                setLocations(data);
            } catch (error) {
                console.error('Error loading locations:', error);
            }
            setLoading(false);
        };
        loadLocations();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'פעיל': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'בהקמה': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'תחזוקה': return 'bg-red-500/20 text-red-400 border-red-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'תיבת דואר': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'לוקר חכם': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
            case 'עמדת מכירה': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'מחסן חכם': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div dir="rtl" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen relative overflow-hidden">
            {/* Background decorations */}
            <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
                animate={floatingAnimation}
            />
            <motion.div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
            />

            <div className="relative py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.div variants={fadeIn} className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 mb-6">
                                <MapPin className="w-16 h-16 text-cyan-400 mx-auto" />
                            </div>
                        </motion.div>
                        
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                            מפת הלוקרים שלנו
                        </motion.h1>
                        
                        <motion.div variants={fadeIn} className="mb-8">
                            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                        </motion.div>
                        
                        <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            גלו את כל המיקומים שבהם פועלים הלוקרים החכמים שלנו ברחבי הארץ
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Map Section */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 relative"
                            >
                                <div className="aspect-[4/3] w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22742616095!2d34.81099385!3d32.081616949999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0d42cbb!2sIsrael!5e0!3m2!1sen!2sil!4v1640000000000!5m2!1sen!2sil"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'contrast(1.2) brightness(0.8)' }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale-[20%]"
                                    ></iframe>
                                </div>
                                
                                {/* Map overlay with location pins */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {locations.map((location, index) => (
                                        <motion.div
                                            key={location.id}
                                            className="absolute pointer-events-auto"
                                            style={{
                                                left: `${Math.random() * 80 + 10}%`,
                                                top: `${Math.random() * 60 + 20}%`
                                            }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.2 }}
                                            onClick={() => setSelectedLocation(location)}
                                        >
                                            <div className="bg-cyan-500 rounded-full p-2 shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
                                                <MapPin className="w-4 h-4 text-white" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Locations List */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Navigation className="w-8 h-8 text-cyan-400" />
                                    מיקומים פעילים
                                </h2>
                                
                                <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                                    {loading ? (
                                        Array(5).fill(0).map((_, i) => (
                                            <div key={i} className="bg-gray-800/50 rounded-2xl p-6 animate-pulse">
                                                <div className="h-6 bg-gray-700 rounded mb-3"></div>
                                                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                                                <div className="flex gap-2">
                                                    <div className="h-6 bg-gray-700 rounded w-20"></div>
                                                    <div className="h-6 bg-gray-700 rounded w-16"></div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        locations.map((location, index) => (
                                            <motion.div
                                                key={location.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.02 }}
                                                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                                                    selectedLocation?.id === location.id 
                                                        ? 'border-cyan-500/50 bg-cyan-500/10' 
                                                        : 'border-gray-700/50 hover:border-gray-600/50'
                                                }`}
                                                onClick={() => setSelectedLocation(location)}
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                                                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                                </div>
                                                
                                                <p className="text-gray-400 mb-3">{location.address}</p>
                                                <p className="text-gray-500 text-sm mb-4">{location.city}</p>
                                                
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <Badge className={`border ${getTypeColor(location.lockerType)}`}>
                                                        {location.lockerType}
                                                    </Badge>
                                                    <Badge className={`border ${getStatusColor(location.status)}`}>
                                                        {location.status}
                                                    </Badge>
                                                </div>
                                                
                                                {location.description && (
                                                    <p className="text-gray-300 text-sm">{location.description}</p>
                                                )}
                                            </motion.div>
                                        ))
                                    )}
                                </div>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">רוצים לוקר במיקום שלכם?</h3>
                                <div className="space-y-4 text-center">
                                    <div className="flex items-center justify-center gap-3 text-cyan-400">
                                        <Mail className="w-5 h-5" />
                                        <span>Automated.locker@gmail.com</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        צרו קשר ונבדוק אפשרויות התקנה באזור שלכם
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Selected Location Details */}
                    {selectedLocation && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedLocation(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="bg-gray-800 rounded-3xl p-8 max-w-lg w-full border border-gray-700"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-white">{selectedLocation.name}</h3>
                                    <button
                                        onClick={() => setSelectedLocation(null)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">כתובת:</h4>
                                        <p className="text-gray-300">{selectedLocation.address}, {selectedLocation.city}</p>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Badge className={`border ${getTypeColor(selectedLocation.lockerType)}`}>
                                            {selectedLocation.lockerType}
                                        </Badge>
                                        <Badge className={`border ${getStatusColor(selectedLocation.status)}`}>
                                            {selectedLocation.status}
                                        </Badge>
                                    </div>
                                    
                                    {selectedLocation.description && (
                                        <div>
                                            <h4 className="text-white font-semibold mb-2">תיאור:</h4>
                                            <p className="text-gray-300">{selectedLocation.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(6, 182, 212, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(6, 182, 212, 0.7);
                }
            `}</style>
        </div>
    );
}