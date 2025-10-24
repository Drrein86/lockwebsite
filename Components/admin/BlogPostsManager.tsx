import React, { useState, useEffect } from 'react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Loader2, Plus, Trash2, Edit } from 'lucide-react';

export default function BlogPostsManager() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call when backend is ready
            const postList = [
                {
                    id: 1,
                    title: 'מדריך: בחירת לוקר חכם מתאים לעסק שלך',
                    slug: 'choosing-smart-locker',
                    excerpt: 'כל מה שצריך לדעת לפני בחירת מערכת לוקרים חכמים לעסק',
                    content: 'בחירת לוקר חכם נכון היא החלטה קריטית לכל עסק. במאמר זה נסקור את הגורמים החשובים ביותר...',
                    author: 'צוות Lockey24',
                    publishDate: '2024-01-15',
                    tags: ['מדריך', 'לוקרים חכמים', 'עסקים'],
                    featuredImage: 'https://via.placeholder.com/800x400?text=Blog+Post+1',
                    isPublished: true
                },
                {
                    id: 2,
                    title: 'יתרונות מערכת לוקרים חכמים במשרד',
                    slug: 'benefits-smart-lockers-office',
                    excerpt: 'איך לוקרים חכמים משפרים את יעילות המשרד ומגבירים את שביעות הרצון של העובדים',
                    content: 'לוקרים חכמים במשרד מביאים תועלת רבה - החל מחיסכון בזמן ועד שיפור האבטחה...',
                    author: 'מנהל המוצר',
                    publishDate: '2024-01-20',
                    tags: ['משרדים', 'פרודוקטיביות', 'טכנולוגיה'],
                    featuredImage: 'https://via.placeholder.com/800x400?text=Blog+Post+2',
                    isPublished: true
                },
                {
                    id: 3,
                    title: 'טרנדים בעולם הלוקרים החכמים לשנת 2024',
                    slug: 'smart-lockers-trends-2024',
                    excerpt: 'הטכנולוגיות החדשות והטרנדים המובילים בתעשיית הלוקרים החכמים',
                    content: 'עולם הלוקרים החכמים מתפתח במהירות. ב-2024 נראה התקדמות משמעותית בתחומי AI, IoT ועוד...',
                    author: 'צוות המחקר',
                    publishDate: '2024-02-01',
                    tags: ['טכנולוגיה', 'חדשנות', '2024'],
                    featuredImage: 'https://via.placeholder.com/800x400?text=Blog+Post+3',
                    isPublished: true
                }
            ];
            setPosts(postList);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
        setIsLoading(false);
    };

    const handleEdit = (post) => {
        // Convert tags array back to string for editing
        const postToEdit = { ...post, tags: post.tags ? post.tags.join(', ') : '' };
        setCurrentPost(postToEdit);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('האם אתה בטוח שברצונך למחוק את המאמר?')) {
            try {
                // TODO: Replace with actual API call when backend is ready
                console.log('Delete post:', id);
                fetchPosts();
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

    const handleNew = () => {
        setCurrentPost({ title: '', subtitle: '', excerpt: '', content: '', imageUrl: '', author: '', tags: '', keywords: '', isActive: true });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentPost(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convert tags string to array
        const tagsArray = currentPost.tags.split(',').map(tag => tag.trim()).filter(Boolean);
        const postData = { ...currentPost, tags: tagsArray };

        try {
            // TODO: Replace with actual API call when backend is ready
            if (currentPost.id) {
                console.log('Update post:', currentPost.id, postData);
            } else {
                console.log('Create post:', postData);
            }
            fetchPosts();
            handleCancel();
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPost(prev => ({ ...prev, [name]: value }));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary-400" />
            </div>
        );
    }

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                    {currentPost.id ? '✏️ עריכת מאמר' : '➕ מאמר חדש'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">כותרת *</label>
                            <Input 
                                name="title" 
                                value={currentPost.title} 
                                onChange={handleChange} 
                                placeholder="כותרת המאמר" 
                                required 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">כותרת משנה</label>
                            <Input 
                                name="subtitle" 
                                value={currentPost.subtitle} 
                                onChange={handleChange} 
                                placeholder="כותרת משנה (אופציונלי)" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">כותב</label>
                            <Input 
                                name="author" 
                                value={currentPost.author} 
                                onChange={handleChange} 
                                placeholder="שם הכותב" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">קישור לתמונה</label>
                            <Input 
                                name="imageUrl" 
                                value={currentPost.imageUrl} 
                                onChange={handleChange} 
                                placeholder="https://example.com/image.jpg" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תקציר *</label>
                        <Textarea 
                            name="excerpt" 
                            value={currentPost.excerpt} 
                            onChange={handleChange} 
                            placeholder="תקציר קצר של המאמר" 
                            required 
                            rows={3}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תוכן מלא * (תומך HTML)</label>
                        <Textarea 
                            name="content" 
                            value={currentPost.content} 
                            onChange={handleChange} 
                            placeholder="התוכן המלא של המאמר..." 
                            rows={12} 
                            required 
                            className="bg-gray-800 border-gray-700 text-white font-mono text-sm"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">תגיות</label>
                            <Input 
                                name="tags" 
                                value={currentPost.tags} 
                                onChange={handleChange} 
                                placeholder="טכנולוגיה, חדשנות, לוקרים (מופרד בפסיק)" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">מילות מפתח (SEO)</label>
                            <Input 
                                name="keywords" 
                                value={currentPost.keywords} 
                                onChange={handleChange} 
                                placeholder="לוקרים חכמים, אוטומציה, Smart Lockers" 
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <input 
                            type="checkbox" 
                            id="isActivePost" 
                            name="isActive" 
                            checked={currentPost.isActive} 
                            onChange={(e) => setCurrentPost(p => ({...p, isActive: e.target.checked}))} 
                            className="w-5 h-5 text-primary-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                        />
                        <label htmlFor="isActivePost" className="text-white font-medium cursor-pointer">
                            פרסם מאמר זה באתר (פעיל)
                        </label>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white font-bold"
                        >
                            💾 שמור מאמר
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">📝 ניהול מאמרים</h2>
                    <p className="text-sm text-gray-400 mt-1">צור, ערוך ומחק מאמרים בבלוג</p>
                </div>
                <Button 
                    onClick={handleNew}
                    className="bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white font-bold shadow-lg"
                >
                    <Plus className="ml-2 h-5 w-5" /> מאמר חדש
                </Button>
            </div>
            
            {posts.length === 0 ? (
                <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
                    <p className="text-gray-400 mb-4">אין מאמרים עדיין</p>
                    <Button onClick={handleNew} variant="outline" className="border-primary-500/50 text-primary-400 hover:bg-cyan-500/10">
                        <Plus className="ml-2 h-4 w-4" /> צור מאמר ראשון
                    </Button>
                </div>
            ) : (
                <div className="space-y-3">
                    {posts.map(post => (
                        <div 
                            key={post.id} 
                            className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-primary-500/50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">{post.title}</h3>
                                {post.subtitle && <p className="text-sm text-gray-400">{post.subtitle}</p>}
                                {post.author && <p className="text-xs text-gray-500 mt-1">✍️ {post.author}</p>}
                            </div>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => handleEdit(post)}
                                    className="border-primary-500/50 text-primary-400 hover:bg-cyan-500/10"
                                >
                                    <Edit className="h-4 w-4 ml-1" /> ערוך
                                </Button>
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    onClick={() => handleDelete(post.id)}
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