// Mock data for development
import { BlogPost, Location, Product, Service } from '../types/entities';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'מדוע לוקרים חכמים הם העתיד של אחסון עסקי?',
    subtitle: 'מהפכה דיגיטלית בעולם האחסון',
    excerpt: 'גלו כיצד לוקרים חכמים משנים את פני התעשייה ומספקים פתרונות חדשניים לעסקים מכל הסוגים',
    content: '<h2>מבוא</h2><p>לוקרים חכמים הם הפתרון המושלם לעסקים המחפשים דרך יעילה ובטוחה לאחסן חפצים ומוצרים...</p>',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    author: 'צוות Lockey24',
    tags: ['לוקרים חכמים', 'טכנולוגיה', 'חדשנות'],
    keywords: 'לוקרים חכמים, smart lockers, אחסון דיגיטלי',
    isActive: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'איך לבחור לוקר חכם מתאים לעסק שלך?',
    subtitle: 'מדריך מקיף לבחירת הלוקר המושלם',
    excerpt: 'כל מה שצריך לדעת לפני בחירת לוקר חכם - גדלים, מחירים, תכונות ועוד',
    content: '<h2>שיקולים בבחירת לוקר</h2><p>בעת בחירת לוקר חכם, יש לקחת בחשבון מספר גורמים חשובים...</p>',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    author: 'צוות Lockey24',
    tags: ['מדריך', 'לוקרים', 'עסקים'],
    keywords: 'בחירת לוקר, לוקר לעסק, smart locker',
    isActive: true,
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '3',
    title: '5 דרכים בהן לוקרים חכמים חוסכים כסף לעסק שלכם',
    subtitle: 'חיסכון בזמן ובכסף',
    excerpt: 'גלו כיצד לוקרים אוטומטיים יכולים להפחית עלויות תפעול ולהגדיל רווחיות',
    content: '<h2>חיסכון בכוח אדם</h2><p>לוקרים חכמים מפחיתים את הצורך בצוות לניהול אחסון...</p>',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    author: 'צוות Lockey24',
    tags: ['חיסכון', 'עלויות', 'יעילות'],
    keywords: 'חיסכון בעלויות, לוקר חסכוני, ROI',
    isActive: true,
    createdAt: new Date('2024-03-05'),
  },
];

export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'סניף תל אביב - דיזנגוף',
    address: 'דיזנגוף 123, תל אביב',
    latitude: 32.0853,
    longitude: 34.7818,
    description: 'לוקרים חכמים במרכז תל אביב, זמינים 24/7',
  },
  {
    id: '2',
    name: 'סניף רמת גן',
    address: 'ביאליק 45, רמת גן',
    latitude: 32.0719,
    longitude: 34.8237,
    description: 'מתקן לוקרים מתקדם באזור העסקים',
  },
  {
    id: '3',
    name: 'סניף ירושלים',
    address: 'יפו 50, ירושלים',
    latitude: 31.7683,
    longitude: 35.2137,
    description: 'לוקרים במרכז ירושלים, גישה נוחה',
  },
  {
    id: '4',
    name: 'סניף חיפה',
    address: 'הרצל 88, חיפה',
    latitude: 32.8191,
    longitude: 34.9983,
    description: 'מיקום אסטרטגי במרכז חיפה',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'לוקר חכם בסיסי',
    description: 'לוקר אוטומטי עם פתיחה דרך אפליקציה או קוד',
    price: 599,
    image_url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600',
    features: [
      'פתיחה מהסלולרי',
      'קוד אישי',
      'תחזוקה חודשית',
      '24/7 תמיכה טכנית',
    ],
    is_active: true,
  },
  {
    id: '2',
    name: 'לוקר חכם לעסקים',
    description: 'מערכת לוקרים מתקדמת למשרדים וחדרי כושר',
    price: 899,
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
    features: [
      'פתיחה מרחוק',
      'ניהול מרכזי',
      'דוחות שימוש',
      'אינטגרציה עם מערכות',
      'תמיכה 24/7',
    ],
    is_active: true,
  },
  {
    id: '3',
    name: 'לוקר פרימיום',
    description: 'לוקר חכם עם תכונות מתקדמות ואבטחה מרבית',
    price: 1299,
    image_url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
    features: [
      'זיהוי פנים',
      'התראות בזמן אמת',
      'קירור/חימום',
      'מצלמה פנימית',
      'ניהול משתמשים',
      'SLA מובטח',
    ],
    is_active: true,
  },
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'השכרת לוקרים חכמים',
    description: 'השכרה חודשית של לוקרים אוטומטיים עם תחזוקה מלאה',
    price: 599,
    features: [
      'תחזוקה שוטפת',
      'התקנה מקצועית',
      'אפליקציה ייעודית',
      'תמיכה טכנית',
    ],
    is_active: true,
  },
  {
    id: '2',
    name: 'רכישת לוקרים',
    description: 'רכישה חד-פעמית עם אחריות מלאה',
    features: [
      'אחריות 3 שנים',
      'התקנה והדרכה',
      'עדכונים חינם',
    ],
    is_active: true,
  },
];

// API simulation functions
export const mockAPI = {
  // Blog Posts
  async getBlogPost(id: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return mockBlogPosts.find(post => post.id === id) || null;
  },

  async listBlogPosts(): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockBlogPosts.filter(post => post.isActive);
  },

  // Locations
  async getLocation(id: string): Promise<Location | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockLocations.find(loc => loc.id === id) || null;
  },

  async listLocations(): Promise<Location[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockLocations;
  },

  // Products
  async getProduct(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts.find(prod => prod.id === id) || null;
  },

  async listProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts.filter(prod => prod.is_active);
  },

  // Services
  async listServices(): Promise<Service[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockServices.filter(service => service.is_active);
  },

  // Contact
  async createContactLead(data: any): Promise<{ success: boolean; message: string }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact lead created:', data);
    return { success: true, message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.' };
  },
};

