import React, { useEffect } from 'react';

export default function RobotsPage() {
    useEffect(() => {
        const robotsContent = `User-agent: *
Allow: /
Disallow: /Admin
Disallow: /admin

# מפת האתר המעודכנת - 🚀 CRITICAL לאינדוקס
Sitemap: https://automated-locker.com/SitemapXML

# הגדרות זחילה מותאמות
Crawl-delay: 1

# הגדרות ספציפיות למנועי חיפוש
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /

# חסימת בוטים זדוניים
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

# מידע נוסף
# אתר: לוקרים חכמים אוטומטיים - Lockey24
# עדכון אחרון: ${new Date().toISOString().split('T')[0]}
# URL עיקרי: https://automated-locker.com/`;

        document.open('text/plain', 'replace');
        document.write(robotsContent);
        document.close();
    }, []);

    return (
        <div style={{ fontFamily: 'monospace', whiteSpace: 'pre', padding: '20px' }}>
            {`User-agent: *
Allow: /
Disallow: /Admin

Sitemap: https://automated-locker.com/SitemapXML

Crawl-delay: 1

# לוקרים חכמים אוטומטיים - Lockey24`}
        </div>
    );
}