
import React, { useState, useEffect } from 'react';
import { User } from '../types/entities';
import { Button } from '../Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../Components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Components/ui/select';
import { Skeleton } from '../Components/ui/skeleton';
import { Shield, User as UserIcon, ArrowLeft, Users, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function UserManagementPage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call when backend is ready
            // For now, using empty array
            const userList = [];
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users:", error);
            alert('אירעה שגיאה בטעינת המשתמשים.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, newRole) => {
        try {
            // TODO: Replace with actual API call when backend is ready
            console.log('Update user role:', userId, newRole);
            fetchUsers();
        } catch (error) {
            console.error("Error updating user role:", error);
            alert('אירעה שגיאה בעדכון ההרשאה.');
        }
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen" dir="rtl">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <Users className="w-8 h-8 text-primary" />
                        ניהול משתמשים
                    </h1>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" onClick={fetchUsers} disabled={isLoading}>
                            <RefreshCw className={`h-4 w-4 ml-2 ${isLoading ? 'animate-spin' : ''}`} />
                            רענן רשימה
                        </Button>
                        <Link to={createPageUrl("Admin")}>
                            <Button variant="outline">
                                 חזור לניהול אתר
                                 <ArrowLeft className="mr-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>רשימת משתמשים רשומים</CardTitle>
                        <CardDescription>כאן ניתן לראות את כל המשתמשים הרשומים במערכת ולשנות את ההרשאות שלהם.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>שם מלא</TableHead>
                                        <TableHead>כתובת אימייל</TableHead>
                                        <TableHead className="w-[150px]">תפקיד / הרשאה</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {isLoading ? (
                                        Array(3).fill(0).map((_, i) => (
                                            <TableRow key={i}>
                                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                                <TableCell><Skeleton className="h-10 w-32" /></TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        users.map(user => (
                                            <TableRow key={user.id}>
                                                <TableCell className="font-medium">{user.full_name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>
                                                    <Select
                                                        value={user.role}
                                                        onValueChange={(newRole) => handleRoleChange(user.id, newRole)}
                                                    >
                                                        <SelectTrigger className="w-[130px]">
                                                            <SelectValue placeholder="בחר תפקיד" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="admin">
                                                                <div className="flex items-center gap-2">
                                                                    <Shield className="w-4 h-4 text-violet-600" />
                                                                    מנהל
                                                                </div>
                                                            </SelectItem>
                                                            <SelectItem value="user">
                                                                <div className="flex items-center gap-2">
                                                                    <UserIcon className="w-4 h-4" />
                                                                    משתמש
                                                                </div>
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="mt-8 bg-violet-50 border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-blue-800">איך מוסיפים מנהל חדש?</CardTitle>
                        <CardDescription className="text-blue-700">
                            כדי להוסיף מנהל חדש למערכת, יש לבקש ממנו לבצע הרשמה רגילה לאתר.
                            לאחר שהמשתמש יירשם ויאשר את חשבונו, הוא יופיע אוטומטית ברשימה זו.
                            לאחר מכן, תוכל לשנות את הרשאתו מ'משתמש' ל'מנהל'.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
