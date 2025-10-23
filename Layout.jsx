
import React, { useState, Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
    Menu,
    X,
    Box,
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    ChevronRight,
    Star,
    Shield,
    Clock,
    CheckCircle,
    Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AccessibilityMenu from './Components/AccessibilityMenu';

const navLinks = [
    { title: 'ראשי', url: createPageUrl('Home'), seoTitle: 'לוקרים חכמים אוטומטיים - פתיחה מהנייד' },
    { title: 'שירותים', url: createPageUrl('Services'), seoTitle: 'שירותי לוקרים חכמים - השכרה ורכישה' },
    { title: 'המוצרים שלנו', url: createPageUrl('Products'), seoTitle: 'לוקרים למכירה והשכרה - עם אפליקציה' },
    { title: 'בלוג', url: createPageUrl('Blog'), seoTitle: 'בלוג לוקרים חכמים - מדריכים וטיפים' },
    { title: 'מפת לוקרים', url: createPageUrl('Map'), seoTitle: 'מפת לוקרים חכמים - מיקומים בישראל' },
    { title: 'אודות', url: createPageUrl('About'), seoTitle: 'אודות - פתרונות אחסון חכמים' },
    { title: 'צור קשר', url: createPageUrl('Contact'), seoTitle: 'צור קשר - הצעת מחיר ללוקר' },
    { title: 'פאנל ניהול', url: createPageUrl('Admin'), seoTitle: 'פאנל ניהול - מערכת ניהול האתר', icon: Settings },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <header dir="rtl" className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-xl">
            <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* LEFT - Logo */}
                    <div className="flex-shrink-0">
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300" title="לוקרים חכמים אוטומטיים - דף הבית">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
                                <Box className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-white leading-none">Lockey24</span>
                                <span className="text-xs text-cyan-400 font-medium hidden sm:block">לוקרים חכמים</span>
                            </div>
                        </Link>
                    </div>

                    {/* CENTER - Categories */}
                    <div className="hidden md:block flex-1">
                        <div className="flex items-center justify-center gap-1 lg:gap-2 min-w-0 lg:min-w-max overflow-x-auto lg:overflow-visible scrollbar-hide">
                            {navLinks.filter(link => link.title !== 'פאנל ניהול').map((link) => {
                                const isActive = location.pathname === link.url || (link.url !== '/' && location.pathname.startsWith(link.url));
                                return (
                                    <Link
                                        key={link.title}
                                        to={link.url}
                                        title={link.seoTitle}
                                        className={`relative px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-lg whitespace-nowrap ${
                                            isActive
                                                ? 'text-white bg-cyan-500/20'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                        }`}
                                    >
                                        {link.title}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                                        )}
                                    </Link>
                                );
                            })}

                            {/* Admin link */}
                            <Link
                                to={createPageUrl('Admin')}
                                title="פאנל ניהול - מערכת ניהול האתר"
                                className={`relative px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-lg flex items-center gap-1 lg:gap-2 whitespace-nowrap ${
                                    location.pathname === createPageUrl('Admin')
                                        ? 'text-white bg-cyan-500/20'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                            >
                                <Settings className="w-3 lg:w-4 h-3 lg:h-4" />
                                <span>ניהול</span>
                                {location.pathname === createPageUrl('Admin') && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT - Contact Button / Hamburger */}
                    <div className="flex-shrink-0">
                        {/* Desktop CTA Button */}
                        <Link to={createPageUrl('Contact')} title="קבל הצעת מחיר ללוקר חכם" className="hidden md:block">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 lg:px-6 py-2 lg:py-2.5 rounded-xl text-xs lg:text-base font-bold hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 shadow-lg transform hover:scale-105 whitespace-nowrap">
                                קבל הצעת מחיר
                            </button>
                        </Link>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-3 rounded-xl text-white bg-gradient-to-br from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-500/30 transition-all duration-300 shadow-lg"
                            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - תפריט נייד */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden border-t border-gray-800/50 bg-gradient-to-b from-black/98 to-gray-900/98 backdrop-blur-xl overflow-hidden shadow-2xl"
                        >
                            <div className="py-6 space-y-1 px-2">
                                {navLinks.map((link, index) => {
                                    const isActive = location.pathname === link.url || (link.url !== '/' && location.pathname.startsWith(link.url));
                                    const isAdminLink = link.title === 'פאנל ניהול';
                                    
                                    return (
                                        <motion.div
                                            key={link.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                to={link.url}
                                                title={link.seoTitle}
                                                onClick={closeMenu}
                                                className={`block px-5 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                                                    isActive
                                                        ? 'text-white bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/20'
                                                        : isAdminLink
                                                            ? 'text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 hover:border-r-4 hover:border-orange-400'
                                                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-r-4 hover:border-gray-600'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        {link.icon && <link.icon className="w-5 h-5" />}
                                                        <span>{link.title}</span>
                                                    </div>
                                                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-cyan-400' : ''}`} />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                <motion.div 
                                    className="px-3 pt-6 border-t border-gray-800/50 mt-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                                >
                                    <Link to={createPageUrl('Contact')} onClick={closeMenu} title="קבל הצעת מחיר ללוקר חכם">
                                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-[1.02]">
                                            📞 קבל הצעת מחיר
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer dir="rtl" className="bg-gradient-to-b from-gray-900 to-black text-gray-200 border-t border-gray-800">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
                                <Box className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-black text-white">Lockey24</span>
                                <div className="text-sm text-cyan-400">לוקרים חכמים אוטומטיים לעתיד</div>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed mb-6 max-w-lg text-gray-300">
                            פתרונות לוקרים חכמים ואוטומטיים בהתאמה אישית. חיסכון בכח אדם, יעילות מקסימלית והכנסה נוספת מהשטח הפנוי בעסק. מחיר קבוע של 599₪ לחודש כולל מע"מ ותחזוקה.
                        </p>

                        {/* SEO Keywords in Footer */}
                        <div className="text-sm text-gray-500 mb-4">
                            <strong>מילות מפתח:</strong> לוקרים חכמים, Smart Lockers, אחסון אוטומטי, לוקרים להשכרה,
                            Parcel Lockers, לוקרים למשלוחים, אוטומציה לעסקים, לוקרים לחדרי כושר, לוקרים למשרדים,
                            לוקרים עם אפליקציה, לוקר חכם תל אביב, נעילה דיגיטלית, אחסון בטוח 24/7
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <div className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                                ✓ אפליקציה כלולה
                            </div>
                            <div className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                                ✓ תחזוקה שוטפת
                            </div>
                            <div className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                                ✓ התקנה מקצועית
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6">קישורים מהירים</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        to={link.url}
                                        title={link.seoTitle}
                                        className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400"
                                    >
                                        <ChevronRight className="w-4 h-4 text-cyan-500" />
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                             <li>
                                <Link
                                    to={createPageUrl('Admin')}
                                    title="מערכת ניהול לוקרים חכמים"
                                    className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400"
                                >
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    מערכת ניהול
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6">שירותים ומוצרים</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to={createPageUrl('Services')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    לוקרים חכמים להשכרה
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('Products')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    לוקרים אוטומטיים למכירה
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('Services')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    תיבות דואר אוטומטיות
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('Blog')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    מדריכים ובלוג
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('Map')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    מפת לוקרים בישראל
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('About')} className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-gray-400">
                                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                                    אודות החברה
                                </Link>
                            </li>
                        </ul>

                        <h4 className="text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            צרו קשר
                        </h4>
                        <ul className="space-y-4">
                            {/* Removed Email from Footer */}
                            <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">איזור השירות</div>
                                    <span className="text-sm text-gray-300 font-medium">רמת גן, תל אביב וכל הארץ</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors">
                                    <Phone className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">זמינות</div>
                                    <span className="text-sm text-gray-300 font-medium">24/7 דרך טופס יצירת הקשר</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
                        <p className="text-center md:text-right text-sm">
                            &copy; {new Date().getFullYear()} <span className="font-bold text-white">Lockey24</span>. כל הזכויות שמורות.
                            <span className="block mt-2 text-xs text-gray-500">לוקרים חכמים אוטומטיים למכירה והשכרה בישראל 🇮🇱</span>
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                            <Link to={createPageUrl('Contact')} className="hover:text-cyan-400 transition-colors font-medium">
                                קבע פגישת ייעוץ
                            </Link>
                            <span className="text-gray-700">|</span>
                            <Link to={createPageUrl('Products')} className="hover:text-cyan-400 transition-colors font-medium">
                                קטלוג מוצרים
                            </Link>
                            <span className="text-gray-700">|</span>
                            <Link to={createPageUrl('Services')} className="hover:text-cyan-400 transition-colors font-medium">
                                שירותים
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// SEO Head Component עם אופטימיזציה מתקדמת + noscript
function SEOHead({ title, description, keywords, canonical, ogImage, schemaData, pageName }) {
    useEffect(() => {
        const baseKeywords = 'לוקרים אוטומטיים, לוקר חכם, לוקרים עם פתיחה מרחוק, לוקר עם אפליקציה, לוקר עם קוד, לוקרים לחנויות, לוקרים למשלוחים, לוקרים לחדרי כושר, לוקרים למשרדים, לוקרים בתל אביב, לוקר לאיסוף חבילות, לוקר 24/7, נעילה דיגיטלית, automated locker, smart locker solutions, parcel locker rental';

        // 🚀 FIX: מיפוי עקבי של עמודים ל-URLs קנוניים
        const getCanonicalPath = (currentPage) => {
            const pathMapping = {
                'Home': '',
                'Products': 'products',
                'Services': 'services',
                'Blog': 'blog',
                'Contact': 'contact',
                'About': 'about',
                'Map': 'map',
                'Admin': 'admin'
            };
            return pathMapping[currentPage] || currentPage.toLowerCase();
        };

        // Title אופטימלי לפי עמוד
        const getOptimizedTitle = (currentPage) => {
            switch(currentPage) {
                case 'Home':
                    return 'לוקרים חכמים בישראל – פתיחה מהנייד | Lockey24';
                case 'Products':
                    return 'לוקרים חכמים למכירה והשכרה | פתרונות לעסקים | לוקר עם אפליקציה';
                case 'Services':
                    return 'שירותי לוקרים חכמים - השכרה, רכישה ותחזוקה | Smart Locker Solutions';
                case 'Blog':
                    return 'בלוג לוקרים חכמים - מדריכים וטיפים מקצועיים | Lockey24';
                case 'Contact':
                    return 'צור קשר - הצעת מחיר ללוקר חכם | Lockey24';
                case 'About':
                    return 'אודותינו - פתרונות אחסון חדשניים | לוקרים אוטומטיים';
                case 'Map':
                    return 'מפת לוקרים חכמים בישראל | תל אביב, ירושלים ועוד';
                default:
                    return title || 'לוקרים חכמים אוטומטיים | Lockey24';
            }
        };

        // Description אופטימלי לפי עמוד
        const getOptimizedDescription = (currentPage) => {
            switch(currentPage) {
                case 'Home':
                    return 'פתרון לוקרים אוטומטיים לעסקים, חדרי כושר ונקודות איסוף. לוקר חכם עם פתיחה מהנייד, קוד או QR. בטוח, נוח וזמין 24/7. השכרת לוקרים חכמים החל מ-599₪.';
                case 'Products':
                    return 'מגוון לוקרים חכמים למכירה והשכרה. פתרונות מותאמים אישית לחדרי כושר, משרדים, חנויות ונקודות איסוף חבילות. שליטה מלאה מהסלולרי ואבטחה מתקדמת.';
                case 'Services':
                    return 'שירותי לוקרים חכמים מקיפים: השכרה, רכישה, תחזוקה והתקנה. פתרונות אוטומטיים לחדרי כושר, משלוחים, משרדים ועסקים. ייעוץ מקצועי חינם.';
                case 'Blog':
                    return 'מדריכים מקצועיים ומאמרים על לוקרים חכמים, אוטומציה עסקית ופתרונות אחסון מתקדמים. טיפים לבחירת לוקר מתאים ושיפור היעילות העסקית.';
                case 'Contact':
                    return 'קבלו הצעת מחיר משתלמת ללוקרים אוטומטיים. ייעוץ חינם ללא התחייבות להתאמת פתרון אחסון חכם לעסק שלכם. זמינות 24/7.';
                case 'About':
                    return 'החברה המובילה בישראל לפתרונות לוקרים חכמים. אנו מספקים טכנולוגיה מהפכנית, אבטחה ללא פשרות ושירות לקוחות מקצועי.';
                case 'Map':
                    return 'מצאו את הלוקר האוטומטי הקרוב אליכם. מפת מיקומים של לוקרים חכמים בתל אביב, ירושלים, חיפה וכל אזור המרכז.';
                default:
                    return description || 'פתרונות לוקרים חכמים מתקדמים לעסקים וחברות';
            }
        };

        const currentTitle = getOptimizedTitle(pageName);
        const currentDescription = getOptimizedDescription(pageName);
        const currentKeywords = keywords || baseKeywords; 
        const canonicalPath = getCanonicalPath(pageName);
        
        // 🚀 CRITICAL FIX: בניית canonical URL עקבי
        const canonicalUrl = canonical || `https://automated-locker.com/${canonicalPath}`;

        document.title = currentTitle;

        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', currentDescription);
        if (!document.querySelector('meta[name="description"]')) {
            document.head.appendChild(metaDescription);
        }

        // Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', currentKeywords);
        if (!document.querySelector('meta[name="keywords"]')) {
            document.head.appendChild(metaKeywords);
        }

        // 🚀 CRITICAL FIX: Canonical URL מדויק ועקבי
        const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        if (!document.querySelector('link[rel="canonical"]')) {
            document.head.appendChild(canonicalLink);
        }

        // Open Graph tags
        const ogTags = {
            'og:title': currentTitle,
            'og:description': currentDescription,
            'og:image': ogImage || 'https://automated-locker.com/og-image.jpg',
            // 🚀 FIX: שימוש באותו canonical
            'og:url': canonicalUrl,
            'og:type': 'website',
            'og:site_name': 'Lockey24'
        };

        Object.entries(ogTags).forEach(([property, content]) => {
            const metaTag = document.querySelector(`meta[property="${property}"]`) || document.createElement('meta');
            metaTag.setAttribute('property', property);
            metaTag.setAttribute('content', content);
            if (!document.querySelector(`meta[property="${property}"]`)) {
                document.head.appendChild(metaTag);
            }
        });

        // Twitter Cards
        const twitterTags = {
            'twitter:card': 'summary_large_image',
            'twitter:title': currentTitle,
            'twitter:description': currentDescription,
            'twitter:image': ogImage || 'https://automated-locker.com/og-image.jpg'
        };

        Object.entries(twitterTags).forEach(([name, content]) => {
            const metaTag = document.querySelector(`meta[name="${name}"]`) || document.createElement('meta');
            metaTag.setAttribute('name', name);
            metaTag.setAttribute('content', content);
            if (!document.querySelector(`meta[name="${name}"]`)) {
                document.head.appendChild(metaTag);
            }
        });

        // HOF: Add noscript content dynamically
        const addNoscriptContent = (pageName) => {
            document.querySelectorAll('noscript.seo-content').forEach(el => el.remove());

            const noscript = document.createElement('noscript');
            noscript.className = 'seo-content';

            let noscriptHTML = '';
            switch(pageName) {
                case 'Home':
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <header style="text-align: center; margin-bottom: 40px;">
                                <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">לוקרים חכמים בישראל – Lockey24</h1>
                                <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">פתרון לוקרים אוטומטיים לעסקים, חדרי כושר ונקודות איסוף. לוקר חכם עם פתיחה מהנייד, קוד או QR. בטוח, נוח וזמין 24/7. השכרת לוקרים חכמים החל מ-599₪.</p>
                            </header>
                            <main>
                                <section style="margin-bottom: 40px;">
                                    <h2 style="color: #1f2937; font-size: 1.8rem; margin-bottom: 20px;">מה אנחנו מציעים?</h2>
                                    <ul style="list-style: none; padding: 0;">
                                        <li style="margin-bottom: 10px; padding: 10px; background: #f3f4f6; border-right: 4px solid #0891b2;">✓ לוקרים חכמים עם פתיחה מהסלולרי</li>
                                        <li style="margin-bottom: 10px; padding: 10px; background: #f3f4f6; border-right: 4px solid #0891b2;">✓ מערכות אחסון אוטומטיות לעסקים</li>
                                        <li style="margin-bottom: 10px; padding: 10px; background: #f3f4f6; border-right: 4px solid #0891b2;">✓ לוקרים לחדרי כושר ומשרדים</li>
                                        <li style="margin-bottom: 10px; padding: 10px; background: #f3f4f6; border-right: 4px solid #0891b2;">✓ פתרונות לניהול חבילות ומשלוחים</li>
                                    </ul>
                                </section>
                                <section style="margin-bottom: 40px;">
                                    <h2 style="color: #1f2937; font-size: 1.8rem; margin-bottom: 20px;">צור קשר</h2>
                                    <p>שירות: כל הארץ - רמת גן, תל אביב ואזור המרכז</p>
                                    <p>מחיר: החל מ-599₪ לחודש כולל מע"מ ותחזוקה</p>
                                </section>
                            </main>
                        </div>
                    `;
                    break;
                case 'Products':
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">מבחר פתרונות לוקר חכם</h1>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">מגוון לוקרים חכמים למכירה והשכרה. פתרונות מותאמים אישית לחדרי כושר, משרדים, חנויות ונקודות איסוף חבילות.</p>
                            <h2 style="color: #1f2937;">המוצרים שלנו:</h2>
                            <ul style="list-style: disc; margin-right: 20px;">
                                <li>לוקר חכם עם פתיחה בסלולרי - 599₪ לחודש</li>
                                <li>לוקרים אוטומטיים לעסקים - 699₪ לחודש</li>
                                <li>מערכות אחסון לחדרי כושר - 749₪ לחודש</li>
                                <li>לוקרים לניהול חבילות - 899₪ לחודש</li>
                                <li>מחסן חכם להשכרה - 1299₪ לחודש</li>
                                <li>לוקר לקמפוס/אוניברסיטה - 599₪ לחודש</li>
                            </ul>
                            <p style="margin-top: 20px;">קבל הצעת מחיר דרך טופס יצירת הקשר באתר</p>
                        </div>
                    `;
                    break;
                case 'Services':
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">שירותי לוקרים חכמים לעסקים ולמוסדות</h1>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">שירותי לוקרים חכמים מקיפים: השכרה, רכישה, תחזוקה והתקנה. פתרונות אוטומטיים לחדרי כושר, משלוחים, משרדים ועסקים.</p>
                            <h2 style="color: #1f2937;">השירותים שלנו:</h2>
                            <ul style="list-style: disc; margin-right: 20px;">
                                <li>פתרונות לוקר חכם לעסקים</li>
                                <li>לוקרים חכמים לאוניברסיטאות ובתי ספר</li>
                                <li>לוקרים לוגיסטיים ומרכזי חבילות</li>
                                <li>תחזוקה ותמיכה טכנית 24/7</li>
                            </ul>
                        </div>
                    `;
                    break;
                case 'Contact':
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">צרו קשר לקבלת הצעת מחיר ללוקרים חכמים</h1>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">מחפשים לוקר חכם לעסק, מוסד או ארגון? אנחנו כאן בשבילכם. הצוות שלנו מתמחה בהתקנת לוקרים אוטומטיים בכל רחבי הארץ.</p>
                            <div style="margin-top: 30px;">
                                <h2 style="color: #1f2937;">פרטי התקשרות:</h2>
                                <p><strong>אזור שירות:</strong> כל הארץ - רמת גן, תל אביב ואזור המרכז</p>
                                <p><strong>זמני מענה:</strong> 24/7 דרך טופס יצירת הקשר באתר</p>
                                <p><strong>מחיר:</strong> החל מ-599₪ לחודש כולל מע"מ ותחזוקה</p>
                            </div>
                        </div>
                    `;
                    break;
                case 'About':
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">חברת Lockey24 – לוקרים חכמים בישראל</h1>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">Lockey24 היא חברה ישראלית המתמחה בלוקרים חכמים ופתרונות אחסון אוטומטיים. מטרתנו היא לספק לעסקים, מוסדות וארגונים מערכות לוקר מתקדמות, נוחות ובטוחות לשימוש.</p>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">הפתרונות שלנו כוללים לוקרים אוטומטיים עם פתיחה דיגיטלית, לוקרים לעובדים וללקוחות, וארונות אחסון חכמים המותאמים לעולם המודרני.</p>
                        </div>
                    `;
                    break;
                default:
                    noscriptHTML = `
                        <div dir="rtl" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                            <h1 style="font-size: 2.5rem; color: #0891b2; margin-bottom: 16px;">לוקרים חכמים אוטומטיים | Lockey24</h1>
                            <p style="font-size: 1.2rem; color: #374151; line-height: 1.6;">פתרונות לוקרים חכמים מתקדמים לעסקים וחברות. השכרה ורכישה של לוקרים אוטומטיים עם פתיחה מהסלולרי.</p>
                        </div>
                    `;
            }

            noscript.innerHTML = noscriptHTML;
            document.body.insertBefore(noscript, document.body.firstChild);
        };

        // Structured Data Schema
        const addStructuredData = (pageName) => {
            document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

            let schemaData = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Lockey24 - לוקרים חכמים אוטומטיים",
                "description": "השכרה ומכירה של לוקרים חכמים עם פתיחה מהנייד. פתרונות אחסון מאובטחים 24/7 לעסקים, חדרי כושר, משרדים וחנויות.",
                "url": "https://automated-locker.com",
                "logo": "https://automated-locker.com/logo.png",
                // "email": "Automated.locker@gmail.com", // Removed email from schema
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "רמת גן, תל אביב",
                    "addressLocality": "אזור המרכז",
                    "addressCountry": "IL"
                },
                "serviceType": [
                    "לוקרים אוטומטיים",
                    "לוקרים חכמים",
                    "לוקרים למשלוחים",
                    "לוקרים לחדרי כושר",
                    "לוקרים למשרדים",
                    "אחסון חכם"
                ],
                "priceRange": "₪599-₪1999",
                "openingHours": "Mo-Su 00:00-23:59"
            };

            // Adding specific schema for certain pages
            if (pageName === 'Services') { 
                schemaData = {
                    ...schemaData,
                    "@type": "Service",
                    "name": "שירותי לוקרים חכמים",
                    "description": "שירותי לוקרים חכמים מקיפים: השכרה, רכישה, תחזוקה והתקנה. פתרונות אוטומטיים לחדרי כושר, משלוחים, משרדים ועסקים. ייעוץ מקצועי חינם.",
                    "serviceType": "Smart Locker Installation and Rental",
                    "provider": {
                        "@type": "Organization",
                        "name": "Lockey24"
                    },
                    "areaServed": {
                        "@type": "AdministrativeArea",
                        "name": "Israel"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Smart Locker Solutions",
                        "itemListElement": [
                            {
                                "@type": "OfferCatalog",
                                "name": "Smart Locker Rental",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "לוקרים חכמים להשכרה"
                                        }
                                    }
                                ]
                            },
                            {
                                "@type": "OfferCatalog",
                                "name": "Smart Locker Purchase",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "רכישת לוקרים חכמים"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                };
            }

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schemaData);
            document.head.appendChild(script);
        };

        // Call the new functions
        addNoscriptContent(pageName);
        addStructuredData(pageName);

        // Additional SEO meta tags
        const additionalTags = {
            'robots': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            'author': 'Lockey24',
            'viewport': 'width=device-width, initial-scale=1',
            'language': 'he-IL',
            'geo.region': 'IL',
            'geo.placename': 'Israel',
            'rating': 'general'
        };

        Object.entries(additionalTags).forEach(([name, content]) => {
            const metaTag = document.querySelector(`meta[name="${name}"]`) || document.createElement('meta');
            metaTag.setAttribute('name', name);
            metaTag.setAttribute('content', content);
            if (!document.querySelector(`meta[name="${name}"]`)) {
                document.head.appendChild(metaTag);
            }
        });

        // 🚀 FIXED: Google Analytics with TRUE defer - only after complete page load
        if (!document.getElementById('gtag-script')) {
            const loadAnalytics = () => {
                // Only load if the page is completely ready and user has interacted
                const gtagScript = document.createElement('script');
                gtagScript.id = 'gtag-script';
                gtagScript.async = true;
                gtagScript.defer = true; // Add defer attribute
                gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-X7N8KEHGR1';
                document.head.appendChild(gtagScript);

                const gtagInitScript = document.createElement('script');
                gtagInitScript.id = 'gtag-init-script';
                gtagInitScript.defer = true; // Add defer attribute
                gtagInitScript.innerHTML = `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-X7N8KEHGR1');
                `;
                document.head.appendChild(gtagInitScript);
            };

            // 🚀 CRITICAL FIX: Load Analytics ONLY after complete page load + user interaction
            let analyticsLoaded = false;
            const triggerAnalytics = () => {
                if (!analyticsLoaded) {
                    loadAnalytics();
                    analyticsLoaded = true;
                }
            };

            // Define event listeners for user interaction
            const events = ['scroll', 'click', 'mousemove', 'touchstart'];
            const loadOnFirstInteraction = () => {
                triggerAnalytics();
                events.forEach(event => document.removeEventListener(event, loadOnFirstInteraction));
            };

            // Load after complete page load AND first user interaction
            if (document.readyState === 'complete') {
                // Page already loaded - wait for user interaction
                events.forEach(event => document.addEventListener(event, loadOnFirstInteraction, { passive: true }));
            } else {
                // Page still loading - wait for complete load then user interaction
                window.addEventListener('load', () => {
                    events.forEach(event => document.addEventListener(event, loadOnFirstInteraction, { passive: true }));
                });
            }
        }

        // 🚀 PERFORMANCE: Preload critical resources (replaces old logic)
        const preloadCriticalResources = () => {
            // Remove any old font preloads created by JS to avoid duplication
            document.querySelectorAll('link[data-font-preload]').forEach(el => el.remove());

            // Preconnect to font domains
            const preconnectDomains = [
                { href: 'https://fonts.googleapis.com' },
                { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
            ];
            preconnectDomains.forEach(domain => {
                if (!document.querySelector(`link[rel="preconnect"][href="${domain.href}"]`)) { // Check for existing preconnect link
                    const link = document.createElement('link');
                    link.rel = 'preconnect';
                    link.href = domain.href;
                    if (domain.crossOrigin) {
                        link.setAttribute('crossorigin', domain.crossOrigin);
                    }
                    document.head.appendChild(link);
                }
            });

            // Preload and load font stylesheet asynchronously
            const fontUrl = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;900&display=swap';
            if (!document.querySelector(`link[href="${fontUrl}"]`)) { // Check for existing font stylesheet
                const fontLink = document.createElement('link');
                fontLink.rel = 'stylesheet';
                fontLink.href = fontUrl;
                fontLink.media = 'print'; // Initially load as print media to prevent render-blocking
                fontLink.onload = function() { this.media = 'all' }; // Change to all when loaded
                document.head.appendChild(fontLink);

                // Add noscript fallback for users with JS disabled
                const noscript = document.createElement('noscript');
                const noscriptLink = document.createElement('link');
                noscriptLink.rel = 'stylesheet';
                noscriptLink.href = fontUrl;
                noscript.appendChild(noscriptLink);
                document.head.appendChild(noscript);
            }
        };

        preloadCriticalResources();

    }, [title, description, keywords, canonical, ogImage, schemaData, pageName]);

    return null;
}

// 🚧 קומפוננטת דף התחזוקה
function MaintenancePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ left: '10%', top: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ right: '10%', bottom: '10%' }}
                />
            </div>

            <div className="relative z-10 max-w-2xl text-center">
                {/* Animated icons */}
                <motion.div
                    className="flex justify-center gap-8 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-500/30"
                    >
                        <Settings className="w-16 h-16 text-cyan-400" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/30"
                    >
                        <Clock className="w-16 h-16 text-blue-400" />
                    </motion.div>
                </motion.div>

                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        האתר סגור זמנית
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                            לשיפוצים
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                        אנחנו עובדים קשה כדי להביא לכם חוויה משופרת ומתקדמת יותר.
                        <br />
                        נשוב בקרוב עם פתרונות לוקרים חכמים טובים יותר מתמיד!
                    </p>

                    {/* Animated clock */}
                    <motion.div
                        className="inline-flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700 mb-8"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">נחזור בקרוב...</span>
                    </motion.div>

                    {/* Company branding */}
                    <div className="pt-8 border-t border-gray-800">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-white">
                                <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black text-white">Lockey24</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            לוקרים חכמים אוטומטיים לעתיד
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function Layout({ children }) {
    const location = useLocation();
    const pageName = location.pathname.split('/').filter(Boolean).pop()?.charAt(0).toUpperCase() + location.pathname.split('/').filter(Boolean).pop()?.slice(1) || 'Home';
    
    // 🚀 Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);
    
    // 🚧 מצב תחזוקה - כל הדפים חוץ מAdmin
    const MAINTENANCE_MODE = false; // Set to true to enable maintenance mode for all non-admin pages
    const isAdminPage = pageName === 'Admin' || pageName === 'UserManagement'; // Add other admin-related page names if necessary
    const showMaintenance = MAINTENANCE_MODE && !isAdminPage;
    
    const initialSettings = {
        fontSize: 100,
        highContrast: false,
        highlightLinks: false,
    };

    const [accessibilitySettings, setAccessibilitySettings] = useState(initialSettings);

    const handleAccessibilityChange = (setting, value) => {
        if (setting === 'reset') {
            setAccessibilitySettings(initialSettings);
            return;
        }
        setAccessibilitySettings(prev => ({ ...prev, [setting]: value }));
    };

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        html.style.fontSize = `${accessibilitySettings.fontSize}%`;

        if (accessibilitySettings.highContrast) {
            body.classList.add('high-contrast');
        } else {
            body.classList.remove('high-contrast');
        }

        if (accessibilitySettings.highlightLinks) {
            body.classList.add('highlight-links');
        } else {
            body.classList.remove('highlight-links');
        }

    }, [accessibilitySettings]);

    // 🚧 אם במצב תחזוקה - הצג דף תחזוקה לכל הדפים חוץ מAdmin
    if (showMaintenance) {
        return (
            <div dir="rtl" className="relative text-white min-h-screen flex flex-col font-['Heebo']">
                <SEOHead pageName={pageName} />
                <MaintenancePage />
            </div>
        );
    }

    // מצב רגיל - הצג הכל (רק עבור Admin או כשמצב תחזוקה כבוי)
    return (
        <div dir="rtl" className="relative text-white min-h-screen flex flex-col font-['Heebo']">
            <SEOHead pageName={pageName} />
            <Header />
            <main className="relative flex-grow pt-16" role="main">{children}</main>
            <Footer />
            <AccessibilityMenu settings={accessibilitySettings} onSettingChange={handleAccessibilityChange} />
        </div>
    );
}
