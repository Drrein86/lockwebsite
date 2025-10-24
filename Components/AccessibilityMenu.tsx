import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, X, Plus, Minus, Eye, Link as LinkIcon, RotateCcw } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
}

interface AccessibilityMenuProps {
  settings: AccessibilitySettings;
  onSettingChange: (setting: string, value: any) => void;
}

const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({ settings, onSettingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const increaseFontSize = () => {
    if (settings.fontSize < 150) {
      onSettingChange('fontSize', settings.fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      onSettingChange('fontSize', settings.fontSize - 10);
    }
  };

  const toggleHighContrast = () => {
    onSettingChange('highContrast', !settings.highContrast);
  };

  const toggleHighlightLinks = () => {
    onSettingChange('highlightLinks', !settings.highlightLinks);
  };

  const resetSettings = () => {
    onSettingChange('reset', null);
  };

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed left-4 bottom-4 z-50 p-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="תפריט נגישות"
        title="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-24 z-50 w-80 bg-gray-900 border-2 border-purple-500 rounded-2xl shadow-2xl p-6"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Accessibility className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">תפריט נגישות</h3>
              </div>
              <button
                onClick={toggleMenu}
                className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="סגור תפריט"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Font Size Control */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-300 mb-2 block">גודל טקסט</label>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={decreaseFontSize}
                  disabled={settings.fontSize <= 80}
                  className="p-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                  aria-label="הקטן טקסט"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>
                <span className="text-white font-semibold text-lg">{settings.fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  disabled={settings.fontSize >= 150}
                  className="p-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                  aria-label="הגדל טקסט"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-6">
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  settings.highContrast
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="ניגודיות גבוהה"
              >
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">ניגודיות גבוהה</span>
                </div>
                <div
                  className={`w-5 h-5 rounded ${
                    settings.highContrast ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              </button>
            </div>

            {/* Highlight Links Toggle */}
            <div className="mb-6">
              <button
                onClick={toggleHighlightLinks}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  settings.highlightLinks
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="הדגשת קישורים"
              >
                <div className="flex items-center gap-3">
                  <LinkIcon className="w-5 h-5" />
                  <span className="font-semibold">הדגשת קישורים</span>
                </div>
                <div
                  className={`w-5 h-5 rounded ${
                    settings.highlightLinks ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all"
              aria-label="איפוס הגדרות"
            >
              <RotateCcw className="w-5 h-5" />
              <span>איפוס הגדרות</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityMenu;

