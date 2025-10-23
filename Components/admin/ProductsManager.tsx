import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus, Trash2, Edit, Package } from 'lucide-react';

export default function ProductsManager() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call when backend is ready
            const productList = [
                {
                    id: 1,
                    name: 'לוקר חכם - דגם S',
                    description: 'לוקר חכם קטן מושלם לחדרי כושר, משרדים ומרכזי קניות. פתיחה באפליקציה או קוד אישי.',
                    price: 199,
                    category: 'לוקרים קטנים',
                    image: 'https://via.placeholder.com/400x300?text=Locker+S',
                    features: 'פתיחה באפליקציה, התראות SMS, סוללה נטענת, עמיד במים',
                    stock: 50,
                    isAvailable: true
                },
                {
                    id: 2,
                    name: 'לוקר חכם - דגם M',
                    description: 'לוקר בינוני מתאים לעסקים, בתי ספר ובתי חולים. תומך בכרטיסים מגנטיים.',
                    price: 349,
                    category: 'לוקרים בינוניים',
                    image: 'https://via.placeholder.com/400x300?text=Locker+M',
                    features: 'כרטיסים מגנטיים, אפליקציה, מערכת ניהול מרכזית, גיבוי חשמלי',
                    stock: 30,
                    isAvailable: true
                },
                {
                    id: 3,
                    name: 'לוקר חכם - דגם L',
                    description: 'לוקר גדול לאחסון ציוד, חבילות וכלים. מושלם למחסנים ומרכזי לוגיסטיקה.',
                    price: 599,
                    category: 'לוקרים גדולים',
                    image: 'https://via.placeholder.com/400x300?text=Locker+L',
                    features: 'נעילה אלקטרונית מתקדמת, חיישני תנועה, מצלמת אבטחה, WiFi מובנה',
                    stock: 15,
                    isAvailable: true
                }
            ];
            setProducts(productList);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setIsLoading(false);
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('האם אתה בטוח שברצונך למחוק את המוצר?')) {
            try {
                // TODO: Replace with actual API call
                console.log('Delete product:', id);
                fetchProducts();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };

    const handleNew = () => {
        setCurrentProduct({ 
            name: '', 
            description: '', 
            price: '', 
            priceMonthly: '', 
            features: '', 
            imageUrl: '', 
            category: '',
            isActive: true 
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentProduct(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const featuresArray = currentProduct.features.split('\n').filter(Boolean);
        const productData = { ...currentProduct, features: featuresArray };

        try {
            if (currentProduct.id) {
                console.log('Update product:', currentProduct.id, productData);
            } else {
                console.log('Create product:', productData);
            }
            fetchProducts();
            handleCancel();
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct(prev => ({ ...prev, [name]: value }));
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
                    {currentProduct.id ? '✏️ עריכת מוצר' : '➕ מוצר חדש'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">שם המוצר *</label>
                            <Input 
                                name="name" 
                                value={currentProduct.name} 
                                onChange={handleChange} 
                                placeholder="לוקר חכם 12 תאים" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">מחיר רכישה (₪)</label>
                            <Input 
                                name="price" 
                                type="number" 
                                value={currentProduct.price} 
                                onChange={handleChange} 
                                placeholder="15000" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">מחיר חודשי (₪/חודש)</label>
                            <Input 
                                name="priceMonthly" 
                                type="number" 
                                value={currentProduct.priceMonthly} 
                                onChange={handleChange} 
                                placeholder="599" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">קטגוריה</label>
                            <Input 
                                name="category" 
                                value={currentProduct.category} 
                                onChange={handleChange} 
                                placeholder="לוקרים / תיבות דואר / אביזרים" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תיאור *</label>
                        <Textarea 
                            name="description" 
                            value={currentProduct.description} 
                            onChange={handleChange} 
                            placeholder="תיאור מפורט של המוצר..." 
                            required 
                            rows={4}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תכונות (שורה אחת לכל תכונה)</label>
                        <Textarea 
                            name="features" 
                            value={currentProduct.features} 
                            onChange={handleChange} 
                            placeholder="12 תאים חכמים&#10;פתיחה מהנייד&#10;מערכת נעילה דיגיטלית&#10;אפליקציה ייעודית" 
                            rows={6}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">קישור לתמונה</label>
                        <Input 
                            name="imageUrl" 
                            value={currentProduct.imageUrl} 
                            onChange={handleChange} 
                            placeholder="https://example.com/locker.jpg" 
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <input 
                            type="checkbox" 
                            id="isActiveProduct" 
                            name="isActive" 
                            checked={currentProduct.isActive} 
                            onChange={(e) => setCurrentProduct(p => ({...p, isActive: e.target.checked}))} 
                            className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                        />
                        <label htmlFor="isActiveProduct" className="text-white font-medium cursor-pointer">
                            הצג מוצר זה באתר (פעיל)
                        </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
                        >
                            💾 שמור מוצר
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">📦 ניהול מוצרים</h2>
                    <p className="text-sm text-gray-400 mt-1">צור, ערוך ומחק מוצרים בקטלוג</p>
                </div>
                <Button 
                    onClick={handleNew}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold shadow-lg"
                >
                    <Plus className="ml-2 h-5 w-5" /> מוצר חדש
                </Button>
            </div>
            
            {products.length === 0 ? (
                <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
                    <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">אין מוצרים עדיין</p>
                    <Button onClick={handleNew} variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                        <Plus className="ml-2 h-4 w-4" /> צור מוצר ראשון
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                                    {product.category && <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">{product.category}</span>}
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                            
                            <div className="flex justify-between items-center">
                                <div className="text-sm">
                                    {product.price && <div className="text-cyan-400 font-bold">₪{product.price}</div>}
                                    {product.priceMonthly && <div className="text-gray-500">או ₪{product.priceMonthly}/חודש</div>}
                                </div>
                                <div className="flex gap-2">
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => handleEdit(product)}
                                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                        variant="destructive" 
                                        size="sm" 
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
