import React, { useState } from 'react';
import { Button } from '../Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card';
import { Package, Users, FileText, Map, Mail, BookOpen, Truck } from 'lucide-react';
import LeadsViewer from '../Components/admin/LeadsViewer';
import ProductsManager from '../Components/admin/ProductsManager';
import LocationsManager from '../Components/admin/LocationsManager';
import ContentManager from '../Components/admin/ContentManager';
import BlogPostsManager from '../Components/admin/BlogPostsManager';
import ServicesManager from '../Components/admin/ServicesManager';
import UserManagement from './UserManagement';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('leads');

    const tabs = [
        { id: 'leads', label: 'לידים', icon: Mail, component: <LeadsViewer /> },
        { id: 'products', label: 'מוצרים', icon: Package, component: <ProductsManager /> },
        { id: 'services', label: 'שירותים', icon: Truck, component: <ServicesManager /> },
        { id: 'blog', label: 'בלוג', icon: BookOpen, component: <BlogPostsManager /> },
        { id: 'locations', label: 'מיקומים', icon: Map, component: <LocationsManager /> },
        { id: 'content', label: 'תוכן האתר', icon: FileText, component: <ContentManager /> },
        { id: 'users', label: 'ניהול משתמשים', icon: Users, component: <UserManagement /> },
    ];

    const renderContent = () => {
        const activeComponent = tabs.find(tab => tab.id === activeTab);
        return activeComponent ? activeComponent.component : null;
    };

    return (
        <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6 lg:p-8">
            <header className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    פאנל ניהול
                </h1>
                <p className="text-sm sm:text-base text-gray-400 mt-2">ניהול כל חלקי האתר במקום אחד</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* Sidebar - רספונסיבי */}
                <aside className="lg:w-1/4">
                    <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-lg sm:text-xl text-cyan-400">ניווט</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* במובייל - Grid של 2 עמודות, בדסקטופ - רשימה */}
                            <nav className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                                {tabs.map(tab => (
                                    <Button
                                        key={tab.id}
                                        variant={activeTab === tab.id ? 'default' : 'ghost'}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`justify-start gap-2 text-sm sm:text-base transition-all duration-300 ${
                                            activeTab === tab.id 
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 font-bold' 
                                                : 'hover:bg-gray-700 text-gray-300'
                                        }`}
                                    >
                                        <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="hidden sm:inline">{tab.label}</span>
                                        <span className="sm:hidden text-xs">{tab.label}</span>
                                    </Button>
                                ))}
                            </nav>
                        </CardContent>
                    </Card>
                </aside>
                
                {/* Main content */}
                <main className="flex-1 min-w-0">
                    <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 shadow-xl">
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            {renderContent()}
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;
