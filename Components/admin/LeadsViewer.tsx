import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/Components/ui/card';
import { Skeleton } from '@/Components/ui/skeleton';
import { Button } from '@/Components/ui/button';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function LeadsViewer() {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLeads = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // TODO: Replace with actual API call when backend is ready
            // For now, using empty array
            const leadList = [];
            setLeads(leadList);
        } catch (error) {
            console.error("Error fetching leads:", error);
            setError('שגיאה בטעינת הפניות. אנא נסה שוב.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    if (error) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="text-center">
                        <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">שגיאה בטעינת הנתונים</h3>
                        <p className="text-gray-500 mb-4">{error}</p>
                        <Button onClick={fetchLeads}>נסה שוב</Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">פניות שהתקבלו</h2>
                    <p className="text-sm text-gray-400">כל הפניות מטופס יצירת הקשר באתר.</p>
                </div>
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={fetchLeads} 
                    disabled={isLoading}
                    className="bg-cyan-500/20 border-cyan-500/50 hover:bg-cyan-500/30 text-cyan-400"
                >
                    <RefreshCw className={`h-4 w-4 ml-2 ${isLoading ? 'animate-spin' : ''}`} />
                    רענן
                </Button>
            </div>

            <div className="border border-gray-700 rounded-xl overflow-hidden bg-gray-900/50">
                {/* במובייל - תצוגת כרטיסים, בדסקטופ - טבלה */}
                <div className="hidden md:block overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-gray-700 hover:bg-gray-800/50">
                                <TableHead className="text-cyan-400">תאריך</TableHead>
                                <TableHead className="text-cyan-400">שם</TableHead>
                                <TableHead className="text-cyan-400">אימייל</TableHead>
                                <TableHead className="text-cyan-400">טלפון</TableHead>
                                <TableHead className="text-cyan-400">הודעה</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <TableRow key={i} className="border-gray-700">
                                        <TableCell><Skeleton className="h-5 w-24 bg-gray-700" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-24 bg-gray-700" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-40 bg-gray-700" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-28 bg-gray-700" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-48 bg-gray-700" /></TableCell>
                                    </TableRow>
                                ))
                            ) : leads.length > 0 ? (
                                leads.map(lead => (
                                    <TableRow key={lead.id} className="border-gray-700 hover:bg-gray-800/50">
                                        <TableCell className="text-gray-300">{format(new Date(lead.created_date), 'dd/MM/yyyy HH:mm')}</TableCell>
                                        <TableCell className="font-medium text-white">{lead.name}</TableCell>
                                        <TableCell className="text-gray-300">{lead.email}</TableCell>
                                        <TableCell className="text-gray-300">{lead.phone || 'לא צוין'}</TableCell>
                                        <TableCell className="max-w-xs truncate text-gray-300">{lead.message}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow className="border-gray-700">
                                    <TableCell colSpan={5} className="text-center py-12">
                                        <div className="text-gray-500">
                                            <p className="text-lg mb-2">לא נמצאו פניות עדיין.</p>
                                            <p className="text-sm">פניות חדשות יופיעו כאן כשיגיעו.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile View - Cards */}
                <div className="md:hidden p-4 space-y-4">
                    {isLoading ? (
                        Array(3).fill(0).map((_, i) => (
                            <div key={i} className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                                <Skeleton className="h-5 w-32 bg-gray-700" />
                                <Skeleton className="h-4 w-full bg-gray-700" />
                                <Skeleton className="h-4 w-3/4 bg-gray-700" />
                            </div>
                        ))
                    ) : leads.length > 0 ? (
                        leads.map(lead => (
                            <div key={lead.id} className="bg-gray-800/50 rounded-lg p-4 space-y-3 border border-gray-700">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-white">{lead.name}</h3>
                                    <span className="text-xs text-gray-400">{format(new Date(lead.created_date), 'dd/MM/yyyy')}</span>
                                </div>
                                <p className="text-sm text-gray-400">{lead.email}</p>
                                {lead.phone && <p className="text-sm text-gray-400">{lead.phone}</p>}
                                <p className="text-sm text-gray-300 bg-gray-900/50 p-3 rounded">{lead.message}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-2">לא נמצאו פניות עדיין.</p>
                            <p className="text-sm text-gray-600">פניות חדשות יופיעו כאן כשיגיעו.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}