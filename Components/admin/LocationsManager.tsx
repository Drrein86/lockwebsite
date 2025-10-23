import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus, Trash2, Edit, MapPin } from 'lucide-react';

export default function LocationsManager() {
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call
            const locationList = [
                {
                    id: 1,
                    name: 'סניף תל אביב - דיזנגוף',
                    address: 'דיזנגוף 123, תל אביב',
                    city: 'תל אביב',
                    phone: '03-1234567',
                    email: 'tlv@lockey24.com',
                    coordinates: { lat: 32.0853, lng: 34.7818 },
                    hours: 'א׳-ה׳: 09:00-18:00, ו׳: 09:00-13:00',
                    description: 'סניף ראשי עם מרכז תצוגה ומלאי מלא של כל דגמי הלוקרים',
                    isActive: true
                },
                {
                    id: 2,
                    name: 'סניף ירושלים - מלחה',
                    address: 'דרך מנחם בגין 180, ירושלים',
                    city: 'ירושלים',
                    phone: '02-6543210',
                    email: 'jlm@lockey24.com',
                    coordinates: { lat: 31.7683, lng: 35.2137 },
                    hours: 'א׳-ה׳: 09:00-17:00',
                    description: 'סניף שירות עם תמיכה טכנית וחלפים',
                    isActive: true
                },
                {
                    id: 3,
                    name: 'סניף חיפה - מרכז מסחרי',
                    address: 'שדרות הנשיא 45, חיפה',
                    city: 'חיפה',
                    phone: '04-8765432',
                    email: 'haifa@lockey24.com',
                    coordinates: { lat: 32.7940, lng: 34.9896 },
                    hours: 'א׳-ה׳: 10:00-18:00, ו׳: 10:00-14:00',
                    description: 'נקודת מכירה ותצוגה באזור הצפון',
                    isActive: true
                }
            ];
            setLocations(locationList);
        } catch (error) {
            console.error("Error fetching locations:", error);
        }
        setIsLoading(false);
    };

    const handleEdit = (location) => {
        setCurrentLocation(location);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('האם אתה בטוח שברצונך למחוק את המיקום?')) {
            try {
                console.log('Delete location:', id);
                fetchLocations();
            } catch (error) {
                console.error("Error deleting location:", error);
            }
        }
    };

    const handleNew = () => {
        setCurrentLocation({ 
            name: '', 
            address: '', 
            city: '',
            lat: '', 
            lng: '', 
            description: '',
            isActive: true 
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentLocation(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentLocation.id) {
                console.log('Update location:', currentLocation.id, currentLocation);
            } else {
                console.log('Create location:', currentLocation);
            }
            fetchLocations();
            handleCancel();
        } catch (error) {
            console.error("Error saving location:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentLocation(prev => ({ ...prev, [name]: value }));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
            </div>
        );
    }

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                    {currentLocation.id ? '✏️ עריכת מיקום' : '➕ מיקום חדש'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">שם המיקום *</label>
                            <Input 
                                name="name" 
                                value={currentLocation.name} 
                                onChange={handleChange} 
                                placeholder="לוקרים חכמים - תל אביב מרכז" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">כתובת מלאה *</label>
                            <Input 
                                name="address" 
                                value={currentLocation.address} 
                                onChange={handleChange} 
                                placeholder="דיזנגוף 50, תל אביב" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">עיר *</label>
                            <Input 
                                name="city" 
                                value={currentLocation.city} 
                                onChange={handleChange} 
                                placeholder="תל אביב" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">קוד אזור</label>
                            <Input 
                                name="zipCode" 
                                value={currentLocation.zipCode || ''} 
                                onChange={handleChange} 
                                placeholder="6473409" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">קו רוחב (Latitude) *</label>
                            <Input 
                                name="lat" 
                                type="number" 
                                step="any"
                                value={currentLocation.lat} 
                                onChange={handleChange} 
                                placeholder="32.0853" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">קו אורך (Longitude) *</label>
                            <Input 
                                name="lng" 
                                type="number" 
                                step="any"
                                value={currentLocation.lng} 
                                onChange={handleChange} 
                                placeholder="34.7818" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תיאור</label>
                        <Textarea 
                            name="description" 
                            value={currentLocation.description} 
                            onChange={handleChange} 
                            placeholder="פרטים נוספים על המיקום, שעות פעילות וכו'..." 
                            rows={4}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <input 
                            type="checkbox" 
                            id="isActiveLocation" 
                            name="isActive" 
                            checked={currentLocation.isActive} 
                            onChange={(e) => setCurrentLocation(l => ({...l, isActive: e.target.checked}))} 
                            className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                        />
                        <label htmlFor="isActiveLocation" className="text-white font-medium cursor-pointer">
                            הצג מיקום זה במפה (פעיל)
                        </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
                        >
                            💾 שמור מיקום
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">📍 ניהול מיקומים</h2>
                    <p className="text-sm text-gray-400 mt-1">צור, ערוך ומחק מיקומים במפה</p>
                </div>
                <Button 
                    onClick={handleNew}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold shadow-lg"
                >
                    <Plus className="ml-2 h-5 w-5" /> מיקום חדש
                </Button>
            </div>
            
            {locations.length === 0 ? (
                <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
                    <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">אין מיקומים עדיין</p>
                    <Button onClick={handleNew} variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                        <Plus className="ml-2 h-4 w-4" /> צור מיקום ראשון
                    </Button>
                </div>
            ) : (
                <div className="space-y-3">
                    {locations.map(location => (
                        <div 
                            key={location.id} 
                            className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                    <h3 className="text-lg font-bold text-white">{location.name}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-1">{location.address}, {location.city}</p>
                                <p className="text-xs text-gray-500">📍 {location.lat}, {location.lng}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => handleEdit(location)}
                                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                                >
                                    <Edit className="h-4 w-4 ml-1" /> ערוך
                                </Button>
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    onClick={() => handleDelete(location.id)}
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
