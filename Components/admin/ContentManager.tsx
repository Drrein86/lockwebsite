import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus, Trash2, Edit, FileText } from 'lucide-react';

export default function ContentManager() {
    const [contents, setContents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentContent, setCurrentContent] = useState(null);

    useEffect(() => {
        fetchContents();
    }, []);

    const fetchContents = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call - כרגע נתונים סטטיים
            const contentList = [
                {
                    id: 1,
                    key: 'home-hero',
                    title: 'לוקרים חכמים אוטומטיים',
                    subtitle: 'פתרון מושלם לאחסון בטוח',
                    content: 'גישה מהירה ובטוחה עם הסמארטפון שלך. מערכת חכמה ופשוטה לשימוש.',
                    buttonText: 'קבל הצעת מחיר',
                    buttonLink: '/contact',
                    isActive: true
                },
                {
                    id: 2,
                    key: 'about-mission',
                    title: 'המשימה שלנו',
                    subtitle: 'חדשנות באחסון חכם',
                    content: 'אנחנו מספקים פתרונות לוקרים חכמים מתקדמים לעסקים וארגונים בכל הארץ. המערכות שלנו מאפשרות גישה נוחה, בטוחה ויעילה לאחסון חפצים.',
                    buttonText: 'למד עוד',
                    buttonLink: '/about',
                    isActive: true
                },
                {
                    id: 3,
                    key: 'contact-cta',
                    title: 'מעוניינים בלוקרים חכמים?',
                    subtitle: 'צרו קשר עכשיו',
                    content: 'השאירו פרטים ונחזור אליכם בהקדם עם הצעת מחיר מותאמת אישית.',
                    buttonText: 'צור קשר',
                    buttonLink: '/contact',
                    isActive: true
                }
            ];
            setContents(contentList);
        } catch (error) {
            console.error("Error fetching contents:", error);
        }
        setIsLoading(false);
    };

    const handleEdit = (content) => {
        setCurrentContent(content);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('האם אתה בטוח שברצונך למחוק את בלוק התוכן?')) {
            try {
                console.log('Delete content:', id);
                fetchContents();
            } catch (error) {
                console.error("Error deleting content:", error);
            }
        }
    };

    const handleNew = () => {
        setCurrentContent({ 
            key: '', 
            title: '', 
            subtitle: '',
            content: '', 
            buttonText: '',
            buttonLink: '',
            isActive: true 
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentContent(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentContent.id) {
                console.log('Update content:', currentContent.id, currentContent);
            } else {
                console.log('Create content:', currentContent);
            }
            fetchContents();
            handleCancel();
        } catch (error) {
            console.error("Error saving content:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentContent(prev => ({ ...prev, [name]: value }));
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
                    {currentContent.id ? '✏️ עריכת בלוק תוכן' : '➕ בלוק תוכן חדש'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                        <p className="text-sm text-blue-300">
                            <strong>💡 טיפ:</strong> השתמש ב-Key ייחודי כמו <code className="bg-gray-800 px-2 py-1 rounded">home-hero</code>, <code className="bg-gray-800 px-2 py-1 rounded">about-mission</code> וכו' כדי לזהות תוכן בדפים.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Key (מזהה ייחודי) *</label>
                            <Input 
                                name="key" 
                                value={currentContent.key} 
                                onChange={handleChange} 
                                placeholder="home-hero או about-mission" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white font-mono"
                            />
                            <p className="text-xs text-gray-500 mt-1">השתמש במקפים לחיבור מילים (לדוגמה: contact-cta)</p>
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">כותרת</label>
                            <Input 
                                name="title" 
                                value={currentContent.title} 
                                onChange={handleChange} 
                                placeholder="כותרת ראשית" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">כותרת משנה</label>
                            <Input 
                                name="subtitle" 
                                value={currentContent.subtitle} 
                                onChange={handleChange} 
                                placeholder="כותרת משנית (אופציונלי)" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תוכן *</label>
                        <Textarea 
                            name="content" 
                            value={currentContent.content} 
                            onChange={handleChange} 
                            placeholder="התוכן המלא (תומך HTML)..." 
                            required 
                            rows={8}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">טקסט כפתור</label>
                            <Input 
                                name="buttonText" 
                                value={currentContent.buttonText} 
                                onChange={handleChange} 
                                placeholder="לחץ כאן" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">קישור כפתור</label>
                            <Input 
                                name="buttonLink" 
                                value={currentContent.buttonLink} 
                                onChange={handleChange} 
                                placeholder="/contact או https://..." 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <input 
                            type="checkbox" 
                            id="isActiveContent" 
                            name="isActive" 
                            checked={currentContent.isActive} 
                            onChange={(e) => setCurrentContent(c => ({...c, isActive: e.target.checked}))} 
                            className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                        />
                        <label htmlFor="isActiveContent" className="text-white font-medium cursor-pointer">
                            הצג תוכן זה באתר (פעיל)
                        </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold"
                        >
                            💾 שמור תוכן
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">📄 ניהול תוכן</h2>
                    <p className="text-sm text-gray-400 mt-1">ערוך את התוכן בדפים השונים באתר</p>
                </div>
                <Button 
                    onClick={handleNew}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold shadow-lg"
                >
                    <Plus className="ml-2 h-5 w-5" /> בלוק תוכן חדש
                </Button>
            </div>
            
            {contents.length === 0 ? (
                <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
                    <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">אין בלוקי תוכן עדיין</p>
                    <Button onClick={handleNew} variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                        <Plus className="ml-2 h-4 w-4" /> צור בלוק תוכן ראשון
                    </Button>
                </div>
            ) : (
                <div className="space-y-3">
                    {contents.map(content => (
                        <div 
                            key={content.id} 
                            className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <code className="text-xs bg-gray-900 text-cyan-400 px-2 py-1 rounded">{content.key}</code>
                                </div>
                                {content.title && <h3 className="text-lg font-bold text-white mb-1">{content.title}</h3>}
                                {content.subtitle && <p className="text-sm text-gray-400 mb-1">{content.subtitle}</p>}
                                <p className="text-sm text-gray-500 line-clamp-1">{content.content}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => handleEdit(content)}
                                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                                >
                                    <Edit className="h-4 w-4 ml-1" /> ערוך
                                </Button>
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    onClick={() => handleDelete(content.id)}
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
