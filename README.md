# 🔐 Lockey24 - לוקרים חכמים בישראל

אתר מקצועי לשיווק ומכירת לוקרים חכמים עם אפליקציה לפתיחה מרחוק.

## 🚀 הפעלת האתר

### דרישות מקדימות
- Node.js (גרסה 18 ומעלה)
- npm או yarn

### התקנה והפעלה

1. **התקנת תלויות:**
```bash
npm install
```

2. **הפעלת שרת פיתוח:**
```bash
npm run dev
```

האתר יפתח אוטומטית בכתובת: `http://localhost:3000`

3. **בניית הפרויקט לפרודקשן:**
```bash
npm run build
```

4. **תצוגה מקדימה של הבילד:**
```bash
npm run preview
```

## 📁 מבנה הפרויקט

```
lockerwebsite/
├── src/                    # קבצי מקור ראשיים
│   ├── main.tsx           # נקודת כניסה לאפליקציה
│   ├── App.tsx            # קומפוננטת ה-App הראשית
│   └── index.css          # סגנונות גלובליים
├── pages/                  # דפי האתר
│   ├── home.tsx           # דף הבית
│   ├── About.tsx          # דף אודות
│   ├── Products.tsx       # דף מוצרים
│   ├── Services.tsx       # דף שירותים
│   ├── Blog.tsx           # דף בלוג
│   ├── Contact.tsx        # דף יצירת קשר
│   ├── Map.tsx            # מפת לוקרים
│   └── Admin.tsx          # פאנל ניהול
├── Components/             # קומפוננטות נשנות
│   ├── home/              # קומפוננטות דף הבית
│   ├── admin/             # קומפוננטות פאנל ניהול
│   ├── ui/                # קומפוננטות UI בסיסיות
│   └── AccessibilityMenu.tsx  # תפריט נגישות
├── Entities/               # אנטיטיז/מודלים
├── Layout.js              # Layout ראשי (Header + Footer)
├── utils.ts               # פונקציות עזר
└── index.html             # HTML ראשי

```

## 🎨 טכנולוגיות

- **React 18** - ספריית UI
- **TypeScript** - שפת התכנות
- **Vite** - Build Tool מהיר
- **TailwindCSS** - סגנונות
- **Framer Motion** - אנימציות
- **React Router** - ניווט בין עמודים
- **Lucide React** - אייקונים

## 🔧 פיצ'רים

- ✅ עיצוב מודרני ומותאם למובייל
- ✅ תפריט נגישות מלא
- ✅ SEO אופטימלי
- ✅ אנימציות מרהיבות
- ✅ מפת לוקרים אינטראקטיבית
- ✅ פאנל ניהול מלא
- ✅ בלוג מקצועי
- ✅ טופס יצירת קשר

## ⚙️ הגדרות

### מצב תחזוקה

ניתן להפעיל מצב תחזוקה על ידי שינוי הערך ב-`Layout.js`:

```javascript
const MAINTENANCE_MODE = true; // true = מצב תחזוקה, false = האתר פעיל
```

כרגע מצב התחזוקה **כבוי** והאתר פעיל.

### SEO

כל דף מכיל מטא-טאגים אופטימליים ל-SEO:
- Title tags
- Meta descriptions
- Open Graph tags
- Schema.org structured data
- Canonical URLs

### נגישות

האתר כולל תפריט נגישות עם:
- שינוי גודל טקסט
- ניגודיות גבוהה
- הדגשת קישורים
- ניווט מקלדת

## 📝 פקודות נוספות

```bash
# בדיקת קוד (Linting)
npm run lint

# ניקוי node_modules
rm -rf node_modules package-lock.json
npm install
```

## 🌐 SEO & Marketing

האתר מותאם למנועי חיפוש עם:
- מילות מפתח: לוקרים חכמים, smart lockers, אחסון אוטומטי
- Sitemap.xml
- Robots.txt
- Google Analytics
- Structured Data (Schema.org)

## 📧 יצירת קשר

לשאלות או תמיכה, צרו קשר דרך טופס יצירת הקשר באתר.

## 📜 רישיון

© 2024 Lockey24. כל הזכויות שמורות.

---

**פותח עם ❤️ בישראל**

