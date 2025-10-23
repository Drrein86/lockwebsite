// Utility functions for the website

/**
 * Creates a page URL based on the page name
 * @param pageName - The name of the page
 * @returns The URL path for the page
 */
export function createPageUrl(pageName: string): string {
  const pageMap: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Admin': '/admin',
    'Blog': '/blog',
    'Contact': '/contact',
    'Map': '/map',
    'Products': '/products',
    'Services': '/services',
    'UserManagement': '/user-management',
  };

  return pageMap[pageName] || `/${pageName.toLowerCase()}`;
}

/**
 * Formats a date string to Hebrew locale
 * @param date - The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncates text to a specified length
 * @param text - The text to truncate
 * @param maxLength - Maximum length of the text
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Scrolls to the top of the page smoothly
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Generates a random ID
 * @returns A random ID string
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

