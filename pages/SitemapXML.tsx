import React, { useEffect } from 'react';

export default function SitemapPage() {
    useEffect(() => {
        // 🚀 יצירת sitemap XML מלא ומעודכן
        const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        
        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<!-- דף הבית - עדיפות גבוהה -->
<url>
    <loc>https://automated-locker.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
</url>

<!-- עמוד המוצרים - קריטי לעסק -->
<url>
    <loc>https://automated-locker.com/Products</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
</url>

<!-- עמוד השירותים -->
<url>
    <loc>https://automated-locker.com/Services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>

<!-- עמוד יצירת קשר -->
<url>
    <loc>https://automated-locker.com/Contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>

<!-- עמוד אודות -->
<url>
    <loc>https://automated-locker.com/About</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>

<!-- מפת לוקרים -->
<url>
    <loc>https://automated-locker.com/Map</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
</url>

<!-- בלוג -->
<url>
    <loc>https://automated-locker.com/Blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
</url>

<!-- robots.txt -->
<url>
    <loc>https://automated-locker.com/robots.txt</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.1</priority>
</url>

</urlset>`;

        // 🚀 הגדרת תוכן עם Content-Type מתאים
        document.open('application/xml', 'replace');
        document.write(sitemapContent);
        document.close();
    }, []);

    // Return עבור מקרים שבהם JavaScript לא פועל
    return (
        <div style={{ fontFamily: 'monospace', whiteSpace: 'pre', padding: '20px' }}>
            {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>https://automated-locker.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
</url>
<url>
    <loc>https://automated-locker.com/Products</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
</url>
<url>
    <loc>https://automated-locker.com/Services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://automated-locker.com/Contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://automated-locker.com/About</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>
<url>
    <loc>https://automated-locker.com/Map</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
</url>
<url>
    <loc>https://automated-locker.com/Blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
</url>
</urlset>`}
        </div>
    );
}