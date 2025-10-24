import React, { useState } from 'react';
import { ContactLead } from '../types/entities';
import { mockAPI } from '../lib/mockData';
import { motion } from 'framer-motion';
import { Button } from '../Components/ui/button';
import { Input, Textarea, Label } from '../Components/ui/input';
import { Loader2, Mail, MapPin, Phone, Send, Star, Shield, Clock } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '../Components/ui/alert';

// ContactForm component
function ContactForm() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            // Save to database (mock)
            await mockAPI.createContactLead(formData);
            console.log('טופס נשלח בהצלחה:', formData);
            
            // Success!
            setSuccess(true);
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (err) {
            setError('אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.');
            console.error("שגיאה בשליחת הטופס:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">שם מלא *</Label>
                    <Input 
                        id="name" 
                        placeholder="הכנס את שמך המלא" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="bg-gray-800 border-gray-700 text-white h-12 md:h-14 text-base md:text-lg rounded-xl backdrop-blur-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">טלפון</Label>
                    <Input 
                        id="phone" 
                        placeholder="050-1234567" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="bg-gray-800 border-gray-700 text-white h-12 md:h-14 text-base md:text-lg rounded-xl backdrop-blur-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">כתובת אימייל *</Label>
                <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required  
                    className="bg-gray-800 border-gray-700 text-white h-12 md:h-14 text-base md:text-lg rounded-xl backdrop-blur-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">ספרו לנו על הצרכים שלכם *</Label>
                <Textarea 
                    id="message" 
                    placeholder="איזה סוג לוקר מעניין אותכם? איפה תרצו להתקין? כמה תאים אתם מחפשים? שתפו אותנו בפרטים..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    required  
                    className="bg-gray-800 border-gray-700 text-white text-base md:text-lg rounded-xl backdrop-blur-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300 min-h-[120px] md:min-h-[140px] resize-none"
                    rows={5}
                />
            </div>
            
            {success && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-900/20 border border-green-700 rounded-lg"
                >
                    <Alert variant="success">
                        <AlertTitle>✅ ההודעה נשלחה בהצלחה!</AlertTitle>
                        <AlertDescription>
                            תודה שפנית אלינו. נחזור אליך בהקדם האפשרי.
                        </AlertDescription>
                    </Alert>
                </motion.div>
            )}
            
            {error && (
                <Alert variant="error">
                    <AlertTitle>❌ שגיאה</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

                <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg text-lg"
                >
                    {isSubmitting ? (
                    <>
                        <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                        שולח...
                    </>
                    ) : (
                        <>
                        <Send className="ml-2 h-5 w-5" />
                        שלח הודעה
                        </>
                    )}
                </Button>
        </form>
    );
}

// Main Contact Page
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">
                            צור קשר
                            <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mt-2">
                                נשמח לעזור
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                            מעוניינים בלוקרים חכמים לעסק שלכם? השאירו פרטים ונחזור אליכם בהקדם
                        </p>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                        <ContactForm />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                        <motion.div 
                            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="bg-gradient-to-br from-primary-500/20 to-secondary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-primary-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">טלפון</h3>
                            <p className="text-sm text-gray-400">זמינות 24/7</p>
                        </motion.div>
                        <motion.div 
                            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="bg-gradient-to-br from-primary-500/20 to-secondary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-primary-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">אימייל</h3>
                            <p className="text-sm text-gray-400">מענה תוך 24 שעות</p>
                        </motion.div>
                        <motion.div 
                            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="bg-gradient-to-br from-primary-500/20 to-secondary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-primary-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">מיקום</h3>
                            <p className="text-sm text-gray-400">שירות בכל הארץ</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

