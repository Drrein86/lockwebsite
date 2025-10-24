import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Users, ArrowRight, Shield } from 'lucide-react';

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="bg-gradient-to-r from-purple-500/10 to-violet-600/10 border border-purple-500/30 rounded-xl p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-purple-500/20 rounded-xl">
            <Users className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">ניהול משתמשים</h2>
            <p className="text-gray-400 mt-1">מערכת ניהול משתמשים מתקדמת</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">
          מערכת ניהול המשתמשים מאפשרת לך לנהל את כל המשתמשים בפלטפורמה, להוסיף משתמשים חדשים, לערוך הרשאות ולנהל את פרטי המשתמשים.
        </p>

        <Link 
          to={createPageUrl('UserManagement')}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
        >
          <span>מעבר לדף ניהול משתמשים</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">הרשאות</h3>
          </div>
          <p className="text-gray-400 text-sm">
            ניהול הרשאות מתקדם עם בקרת גישה מלאה
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-violet-400" />
            <h3 className="text-lg font-bold text-white">משתמשים</h3>
          </div>
          <p className="text-gray-400 text-sm">
            צפייה ועריכה של כל המשתמשים במערכת
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-bold text-white">אבטחה</h3>
          </div>
          <p className="text-gray-400 text-sm">
            הגדרות אבטחה מתקדמות למערכת
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

