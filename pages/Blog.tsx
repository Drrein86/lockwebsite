
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card';
import { Button } from '../Components/ui/button';
import { Calendar, User, ArrowRight, Tag, Loader2 } from 'lucide-react';
import { BlogPost } from '../types/entities';
import { mockAPI } from '../lib/mockData';

function PostDetail({ postId, onBack }) {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
            const fetchedPost = await mockAPI.getBlogPost(postId);
            setPost(fetchedPost);
            setIsLoading(false);
        };
        fetchPost();
    }, [postId]);

    if (isLoading) {
        return <div className="flex justify-center items-center py-20"><Loader2 className="h-8 w-8 animate-spin text-cyan-400" /></div>;
    }

    if (!post) {
        return <div className="text-center py-20">מאמר לא נמצא.</div>;
    }

    return (
        <div className="container mx-auto px-6 py-20">
            <Button
                onClick={onBack}
                variant="outline"
                className="mb-8 border-gray-600 text-white hover:bg-gray-800"
                aria-label="חזור לרשימת המאמרים"
            >
                ← חזור לבלוג
            </Button>

            <article className="max-w-4xl mx-auto" role="article">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    {post.subtitle && (
                        <h2 className="text-xl text-cyan-400 mb-6 font-semibold">
                            {post.subtitle}
                        </h2>
                    )}

                    <div className="flex items-center gap-6 text-gray-400 mb-8" role="contentinfo">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <time dateTime={post.created_date}>
                                {new Date(post.created_date).toLocaleDateString('he-IL')}
                            </time>
                        </div>
                        {post.author && (
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" aria-hidden="true" />
                                <span>{post.author}</span>
                            </div>
                        )}
                    </div>

                    {post.imageUrl && (
                        <img 
                            src={post.imageUrl} 
                            alt={`תמונת המאמר: ${post.title}`}
                            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
                            loading="eager"
                            decoding="async"
                        />
                    )}
                </header>

                <div
                    className="blog-content max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className="mt-12 pt-8 border-t border-gray-800">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="תגיות המאמר">
                            {post.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"
                                    role="listitem"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            רוצים לדעת עוד?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            צרו קשר עם המומחים שלנו לייעוץ חינם ולהצעת מחיר מותאמת אישית.
                        </p>
                        <Link to={createPageUrl('Contact')}>
                            <Button 
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold"
                                aria-label="צור קשר לייעוץ נוסף"
                            >
                                צור קשר עכשיו
                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                            </Button>
                        </Link>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default function BlogPage() {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const postList = await mockAPI.listBlogPosts();
            setPosts(postList);
            setIsLoading(false);
        };
        fetchPosts();
    }, []);

    if (selectedPostId) {
        return <PostDetail postId={selectedPostId} onBack={() => setSelectedPostId(null)} />;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900" role="banner">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        בלוג לוקרים חכמים
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            מדריכים ועדכונים
                        </span>
                    </h1>
                    <h2 className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        מאמרים מקצועיים, מדריכים מפורטים וכל מה שצריך לדעת על עולם הלוקרים החכמים והאוטומציה בישראל.
                    </h2>
                </div>
            </section>

            <section className="py-16 bg-black" role="main">
                <div className="container mx-auto px-6">
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    ) : (
                        <div 
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            role="region"
                            aria-label="רשימת מאמרים בבלוג"
                        >
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    onClick={() => setSelectedPostId(post.id)}
                                    role="article"
                                    aria-labelledby={`post-title-${post.id}`}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedPostId(post.id);
                                        }
                                    }}
                                >
                                    <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                                        {post.imageUrl && (
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img 
                                                    src={post.imageUrl} 
                                                    alt={`תמונת המאמר: ${post.title}`}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        )}
                                        <CardHeader className="flex-grow">
                                            <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                                    <time dateTime={post.created_date}>
                                                        {new Date(post.created_date).toLocaleDateString('he-IL')}
                                                    </time>
                                                </div>
                                                {post.author && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-4 h-4" aria-hidden="true" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <CardTitle 
                                                id={`post-title-${post.id}`}
                                                className="text-white text-xl mb-3 line-clamp-2"
                                            >
                                                {post.title}
                                            </CardTitle>
                                            <p className="text-gray-400 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            <Button 
                                                variant="outline" 
                                                className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                                                aria-label={`קרא את המאמר: ${post.title}`}
                                            >
                                                קרא עוד
                                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-cyan-900 to-blue-900" role="complementary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        הישארו מעודכנים
                    </h2>
                    <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                        קבלו עדכונים על מאמרים חדשים, טיפים מקצועיים וחידושים בעולם הלוקרים החכמים
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button 
                            size="lg" 
                            className="bg-white text-cyan-900 font-bold hover:bg-gray-100"
                            aria-label="הרשמו לקבלת עדכונים"
                        >
                            הרשמו לעדכונים
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
