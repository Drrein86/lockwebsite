import React, { useState, useEffect } from 'react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Loader2, Plus, Trash2, Edit, Truck } from 'lucide-react';

export default function ServicesManager() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call
            const serviceList = [
                {
                    id: 1,
                    name: 'השכרת לוקרים חכמים',
                    description: 'השכרת לוקרים חכמים לטווח קצר או ארוך. מושלם לאירועים, כנסים ותערוכות.',
                    icon: '📦',
                    features: 'התקנה מהירה, תמיכה טכנית 24/7, גמישות בתנאי השכרה',
                    price: '₪150/חודש',
                    isActive: true
                },
                {
                    id: 2,
                    name: 'מכירת לוקרים חכמים',
                    description: 'מגוון לוקרים חכמים למכירה עם אחריות מלאה. מתאים לעסקים קטנים ובינוניים.',
                    icon: '🛒',
                    features: 'אחריות שנתיים, התקנה חינם, הדרכה צוות',
                    price: 'החל מ-₪2,500',
                    isActive: true
                },
                {
                    id: 3,
                    name: 'תחזוקה ותמיכה',
                    description: 'שירותי תחזוקה שוטפים ותמיכה טכנית מקצועית למערכות לוקרים קיימות.',
                    icon: '🔧',
                    features: 'תגובה מהירה, עדכוני תוכנה, תיקונים באתר',
                    price: '₪500/חודש',
                    isActive: true
                }
            ];
            setServices(serviceList);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
        setIsLoading(false);
    };

    const handleEdit = (service) => {
        setCurrentService(service);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('האם אתה בטוח שברצונך למחוק את השירות?')) {
            try {
                console.log('Delete service:', id);
                fetchServices();
            } catch (error) {
                console.error("Error deleting service:", error);
            }
        }
    };

    const handleNew = () => {
        setCurrentService({ 
            name: '', 
            description: '', 
            price: '', 
            features: '', 
            icon: '',
            isActive: true 
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentService(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const featuresArray = currentService.features.split('\n').filter(Boolean);
        const serviceData = { ...currentService, features: featuresArray };

        try {
            if (currentService.id) {
                console.log('Update service:', currentService.id, serviceData);
            } else {
                console.log('Create service:', serviceData);
            }
            fetchServices();
            handleCancel();
        } catch (error) {
            console.error("Error saving service:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentService(prev => ({ ...prev, [name]: value }));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
            </div>
        );
    }

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                    {currentService.id ? '✏️ עריכת שירות' : '➕ שירות חדש'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">שם השירות *</label>
                            <Input 
                                name="name" 
                                value={currentService.name} 
                                onChange={handleChange} 
                                placeholder="השכרת לוקרים חכמים" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">מחיר</label>
                            <Input 
                                name="price" 
                                value={currentService.price} 
                                onChange={handleChange} 
                                placeholder="599₪/חודש" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">אייקון (emoji)</label>
                            <Input 
                                name="icon" 
                                value={currentService.icon} 
                                onChange={handleChange} 
                                placeholder="🔐 או 📦" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תיאור *</label>
                        <Textarea 
                            name="description" 
                            value={currentService.description} 
                            onChange={handleChange} 
                            placeholder="תיאור מפורט של השירות..." 
                            required 
                            rows={4}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תכונות (שורה אחת לכל תכונה)</label>
                        <Textarea 
                            name="features" 
                            value={currentService.features} 
                            onChange={handleChange} 
                            placeholder="התקנה מקצועית&#10;תחזוקה שוטפת&#10;אפליקציה ייעודית&#10;תמיכה 24/7" 
                            rows={6}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <input 
                            type="checkbox" 
                            id="isActiveService" 
                            name="isActive" 
                            checked={currentService.isActive} 
                            onChange={(e) => setCurrentService(s => ({...s, isActive: e.target.checked}))} 
                            className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                        />
                        <label htmlFor="isActiveService" className="text-white font-medium cursor-pointer">
                            הצג שירות זה באתר (פעיל)
                        </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-bold"
                        >
                            💾 שמור שירות
                        </Button>
                        <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handleCancel}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                        >
                            ביטול
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">🚛 ניהול שירותים</h2>
                    <p className="text-sm text-gray-400 mt-1">צור, ערוך ומחק שירותים</p>
                </div>
                <Button 
                    onClick={handleNew}
                    className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-bold shadow-lg"
                >
                    <Plus className="ml-2 h-5 w-5" /> שירות חדש
                </Button>
            </div>
            
            {services.length === 0 ? (
                <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
                    <Truck className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">אין שירותים עדיין</p>
                    <Button onClick={handleNew} variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                        <Plus className="ml-2 h-4 w-4" /> צור שירות ראשון
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                        <div 
                            key={service.id} 
                            className="p-5 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    {service.icon && <span className="text-3xl">{service.icon}</span>}
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                                        {service.price && <p className="text-sm text-purple-400">{service.price}</p>}
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                            
                            <div className="flex justify-end gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => handleEdit(service)}
                                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                                >
                                    <Edit className="h-4 w-4 ml-1" /> ערוך
                                </Button>
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    onClick={() => handleDelete(service.id)}
                                    className="bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                                >
                                    <Trash2 className="h-4 w-4 ml-1" /> מחק
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
