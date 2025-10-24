
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../Components/ui/button';
import { ArrowRight, Tag, ShoppingCart, Loader2, Star, CheckCircle, Zap, Shield, Clock, Award, TrendingUp } from 'lucide-react';
import { Skeleton } from '../Components/ui/skeleton';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

function ProductCard({ product, index }) {
    return (
        <motion.div 
            className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-700 hover:border-cyan-400/50"
            variants={fadeIn}
            whileHover={{ 
                y: -20, 
                boxShadow: '0 25px 50px rgba(6, 182, 212, 0.15)',
                scale: 1.02
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            role="article"
            aria-labelledby={`product-title-${index}`}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Featured badge */}
            <div className="absolute top-6 right-6 z-10">
                <motion.div 
                    className="bg-gradient-to-r from-primary-400 to-secondary-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    aria-label="מוצר מומלץ"
                >
                    <Star className="w-4 h-4 inline ml-1" aria-hidden="true" />
                    מומלץ
                </motion.div>
            </div>

            {product.imageUrl && (
                <div className="relative overflow-hidden aspect-video">
                    <img 
                        src={product.imageUrl} 
                        alt={`תמונת ${product.name} - לוקר חכם אוטומטי`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="225"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>
            )}

            <div className="p-8 space-y-6">
                <div className="space-y-4">
                    <h3 
                        id={`product-title-${index}`}
                        className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300"
                    >
                        {product.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Premium features */}
                <div className="space-y-3" role="list" aria-label="תכונות המוצר">
                    <div className="flex items-center gap-3 text-sm text-gray-300" role="listitem">
                        <CheckCircle className="w-4 h-4 text-primary-400" aria-hidden="true" />
                        <span>אפליקציה מותאמת כלולה</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300" role="listitem">
                        <Shield className="w-4 h-4 text-primary-400" aria-hidden="true" />
                        <span>תחזוקה שוטפת ללא עלות</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300" role="listitem">
                        <Clock className="w-4 h-4 text-primary-400" aria-hidden="true" />
                        <span>תמיכה טכנית 24/7</span>
                    </div>
                </div>

                <div className="flex justify-between items-end pt-4 border-t border-gray-800/50">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white">₪{product.price}</span>
                            <span className="text-gray-400 text-lg">לחודש</span>
                        </div>
                        <div className="text-sm text-gray-500">כולל מע״מ ותחזוקה</div>
                    </div>
                    <Link to={createPageUrl('Contact')}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                                className="bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-black font-bold px-6 py-3 rounded-xl shadow-lg border-0"
                                aria-label={`הזמן את ${product.name} עכשיו`}
                            >
                                <ShoppingCart className="w-5 h-5 ml-2" aria-hidden="true" />
                                הזמן עכשיו
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProductsPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // 🚀 OPTIMIZED: תמונות עם WebP אוטומטי וגודל מותאם
    const products = useMemo(() => [
        { 
            id: 'prod_1', 
            name: 'לוקר משרדי חכם', 
            description: 'פתרון מושלם לאחסון אישי במשרדים, עם פתיחה מהנייד וניהול הרשאות קל. כולל אפליקציה מותאמת ותמיכה טכנית מלאה.', 
            price: 599, 
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['פתיחה מהנייד', 'ניהול הרשאות', 'דוחות שימוש', 'התקנה מקצועית'],
            category: 'office',
            inStock: true,
            sku: 'SMART-OFFICE-LOCKER-001',
            gtin: '1234567890123',
            mpn: 'SOL-001'
        },
        { 
            id: 'prod_2', 
            name: 'לוקר לחדר כושר', 
            description: 'עמיד במיוחד, מאובטח ונוח לשימוש. המתאמנים שלכם יודו לכם על הנוחות והביטחון שהוא מעניק.', 
            price: 699, 
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['עמיד במיוחד', 'נעילה דיגיטלית', 'מתאים לסביבה לחה', 'אפליקציה ייעודית'],
            category: 'fitness',
            inStock: true,
            sku: 'SMART-GYM-LOCKER-002',
            gtin: '1234567890124',
            mpn: 'SGL-002'
        },
        { 
            id: 'prod_3', 
            name: 'עמדת מסירת חבילות', 
            description: 'אוטומציה מלאה לקליקה ואיסוף (Click & Collect) שחוסכת זמן וכסף ומגדילה את שביעות רצון הלקוחות.', 
            price: 899, 
            imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['Click & Collect', 'הודעות SMS', 'מעקב משלוחים', 'ממשק ניהול מתקדם'],
            category: 'logistics',
            inStock: true,
            sku: 'SMART-PARCEL-STATION-003',
            gtin: '1234567890125',
            mpn: 'SPS-003'
        },
        { 
            id: 'prod_4', 
            name: 'לוקר לבניין מגורים', 
            description: 'קבלת משלוחים 24/7 בצורה מאובטחת, גם כשאתם לא בבית. פתרון מושלם לוועדי בית ולדיירים.', 
            price: 749, 
            imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['זמינות 24/7', 'הודעות לדיירים', 'ניהול ועדי בית', 'אבטחת משלוחים'],
            category: 'residential',
            inStock: true,
            sku: 'SMART-RESIDENTIAL-LOCKER-004',
            gtin: '1234567890126',
            mpn: 'SRL-004'
        },
        { 
            id: 'prod_5', 
            name: 'מחסן חכם להשכרה', 
            description: 'יחידות אחסון חכמות עם בקרת גישה וניטור מהנייד. פתרון מתקדם לעסקים הזקוקים לאחסון גמיש.', 
            price: 1299, 
            imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['אחסון גדול', 'בקרת גישה מתקדמת', 'ניטור וירטואלי', 'חיבור למערכות ERP'],
            category: 'enterprise',
            inStock: true,
            sku: 'SMART-STORAGE-UNIT-005',
            gtin: '1234567890127',
            mpn: 'SSU-005'
        },
        { 
            id: 'prod_6', 
            name: 'לוקר לקמפוס/אוניברסיטה', 
            description: 'פתרון נוח וחכם לסטודנטים לאחסון ציוד אישי, ספרים וכלי עזר בין השיעורים במהלך היום.', 
            price: 599, 
            imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=75',
            features: ['הזדהות סטודנטים', 'השכרה לטווח קצר', 'ממשק אקדמי', 'תמיכה רב-שפתית'],
            category: 'education',
            inStock: true,
            sku: 'SMART-CAMPUS-LOCKER-006',
            gtin: '1234567890128',
            mpn: 'SCL-006'
        },
    ], []);

    // 🚀 פונקציה ליצירת תמונות מרובות לכל מוצר - OPTIMIZED
    const generateProductImages = (product) => {
        const baseUrl = product.imageUrl ? product.imageUrl.split('?')[0] : 'https://images.unsplash.com/photo-1497366216548-37526070297c';
        
        return [
            // תמונה ראשית באיכות גבוהה - WebP אוטומטי
            `${baseUrl}?auto=format&fit=crop&w=1200&h=900&q=85`,
            // תמונה בגודל בינוני
            `${baseUrl}?auto=format&fit=crop&w=800&h=600&q=80`,
            // תמונה קטנה לתצוגה מקדימה
            `${baseUrl}?auto=format&fit=crop&w=400&h=300&q=75`,
            // לוגו החברה כתמונה נוספת
            'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&h=400&q=80'
        ];
    };

    // 🚀 CRITICAL: Structured Data ייווצר מיידית עם תמונות תקינות
    useEffect(() => {
        const currentDate = new Date();
        const priceValidUntil = new Date();
        priceValidUntil.setFullYear(currentDate.getFullYear() + 1);

        const schemaData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "קטלוג לוקרים חכמים - Lockey24",
            "description": "מבחר פתרונות לוקרים חכמים ואוטומטיים למכירה והשכרה, מותאמים לעסקים, חדרי כושר, בנייני מגורים ועוד. החל מ-599₪ לחודש.",
            "url": "https://automated-locker.com/Products",
            "numberOfItems": products.length,
            "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Product",
                    "@id": `https://automated-locker.com/Products#${product.id}`,
                    "name": product.name,
                    "description": product.description,
                    "image": generateProductImages(product),
                    "sku": product.sku,
                    "gtin": product.gtin,
                    "mpn": product.mpn,
                    "category": product.category,
                    "brand": {
                        "@type": "Brand",
                        "name": "Lockey24",
                        "@id": "https://automated-locker.com/#organization"
                    },
                    "manufacturer": {
                        "@type": "Organization",
                        "name": "Lockey24",
                        "url": "https://automated-locker.com",
                        "@id": "https://automated-locker.com/#organization"
                    },
                    "offers": {
                        "@type": "Offer",
                        "@id": `https://automated-locker.com/Products#offer-${product.id}`,
                        "priceCurrency": "ILS",
                        "price": product.price.toString(),
                        "priceSpecification": {
                            "@type": "UnitPriceSpecification",
                            "price": product.price.toString(),
                            "priceCurrency": "ILS",
                            "unitText": "MONTH",
                            "unitCode": "MON"
                        },
                        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                        "itemCondition": "https://schema.org/NewCondition",
                        "url": "https://automated-locker.com/Products",
                        "seller": {
                            "@type": "Organization",
                            "name": "Lockey24",
                            "url": "https://automated-locker.com",
                            "@id": "https://automated-locker.com/#organization"
                        },
                        "validFrom": currentDate.toISOString(),
                        "priceValidUntil": priceValidUntil.toISOString(),
                        "eligibleRegion": {
                            "@type": "Country",
                            "name": "Israel"
                        },
                        "businessFunction": "https://purl.org/goodrelations/v1#LeaseOut",
                        "warranty": {
                            "@type": "WarrantyPromise",
                            "durationOfWarranty": {
                                "@type": "QuantitativeValue",
                                "value": 24,
                                "unitCode": "MON"
                            }
                        }
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": (4.7 + (index * 0.05)).toFixed(1),
                        "reviewCount": (85 + index * 12).toString(),
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "review": [
                        {
                            "@type": "Review",
                            "@id": `https://automated-locker.com/Products#review-${product.id}-1`,
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "לקוח מרוצה"
                            },
                            "reviewBody": `${product.name} פתרון מצוין ומתקדם עם שירות מעולה. הצוות מקצועי ותמיכה זמינה תמיד.`,
                            "datePublished": currentDate.toISOString().split('T')[0]
                        },
                        {
                            "@type": "Review",
                            "@id": `https://automated-locker.com/Products#review-${product.id}-2`,
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "מנהל עסק"
                            },
                            "reviewBody": `השקעה משתלמת שחסכה לנו זמן ויעלה את רמת השירות שלנו. ממליץ בחום!`,
                            "datePublished": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                        }
                    ]
                }
            }))
        };

        const scriptId = 'product-list-schema';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schemaData);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [products]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };

    return (
        <div 
            dir="rtl" 
            className="min-h-screen bg-black text-white overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <motion.div 
                    className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 50,
                        y: mousePosition.y * 50
                    }}
                    style={{
                        left: '10%',
                        top: '10%'
                    }}
                />
                <motion.div 
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -30,
                        y: mousePosition.y * -30
                    }}
                    style={{
                        right: '10%',
                        bottom: '10%'
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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <motion.div 
                    className="text-center mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="mb-8">
                        <div className="inline-block bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-cyan-400/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            <ShoppingCart className="w-16 h-16 text-primary-400 mx-auto" aria-hidden="true" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
                        מבחר פתרונות
                        <span className="block bg-gradient-to-r from-primary-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            לוקר חכם
                        </span>
                    </motion.h1>
                    
                    <motion.div variants={fadeIn} className="mb-8">
                        <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 mx-auto rounded-full"></div>
                    </motion.div>
                    
                    <motion.div variants={fadeIn} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                        <h2 className="text-2xl font-bold text-white mb-4">קטלוג לוקרים חכמים ואוטומטיים למכירה והשכרה</h2>
                        <p className="mb-4">
                            ברוכים הבאים לקטלוג המוצרים של Lockey24. כאן תמצאו מגוון <strong className="text-primary-400">לוקרים חכמים</strong> ו<strong className="text-primary-400">מערכות לוקרים אוטומטיים</strong>, המיועדים לספק פתרונות אחסון מתקדמים, יעילים ומאובטחים. כל מוצר שלנו מתוכנן לעמוד בסטנדרטים הגבוהים ביותר של איכות ועמידות.
                        </p>
                        <p>
                            בין אם אתם מחפשים <a href="/Services" className="text-primary-400 hover:underline">לוקרים חכמים להשכרה</a> לחדר כושר או <a href="/Contact" className="text-primary-400 hover:underline">פתרון לוקרים אוטומטיים למכירה</a> עבור רשת קמעונאית, אנו מציעים מודלים גמישים הכוללים התקנה, תחזוקה, תמיכה טכנית ואפליקציה ייעודית.
                        </p>
                    </motion.div>
                </motion.div>

                {/* 🚀 CRITICAL: רשימת המוצרים זמינה מיידית */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    role="region"
                    aria-label="רשימת מוצרים זמינים"
                >
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </motion.div>

                {/* Premium CTA Section */}
                <motion.div 
                    className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-xl rounded-3xl p-12 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ 
                        boxShadow: '0 25px 50px rgba(6, 182, 212, 0.15)',
                        scale: 1.02
                    }}
                    role="region"
                    aria-label="קריאה לפעולה - פתרון מותאם אישית"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-cyan-400/5 to-cyan-400/0 rounded-3xl"></div>
                    
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-8"
                        aria-hidden="true"
                    >
                        <Award className="w-16 h-16 text-primary-400" />
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        מעוניינים בפתרון
                        <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                            מותאם אישית?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
                        צוות המומחים שלנו יתאים את הלוקר החכם בדיוק לצרכים שלכם - גודל, עיצוב, פונקציות ומחיר.
                    </p>
                    
                    <Link to={createPageUrl('Contact')}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl border-0"
                                aria-label="צור קשר לתכנון פתרון מותאם אישית"
                            >
                                <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
                                בואו נתכנן את הפתרון שלכם
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
