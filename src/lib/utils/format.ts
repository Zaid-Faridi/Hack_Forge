/**
 * Format a date to a human-readable string
 */
export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
}

/**
 * Format a date range
 */
export function formatDateRange(start: string | Date, end: string | Date): string {
    const s = new Date(start);
    const e = new Date(end);
    const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();

    if (sameMonth) {
        return `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(s)} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
    }
    return `${formatDate(s)} – ${formatDate(e)}`;
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format a large number with abbreviation
 */
export function formatNumber(num: number): string {
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num.toString();
}

/**
 * Calculate days remaining from now
 */
export function daysRemaining(date: string | Date): number {
    const diff = new Date(date).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Pluralize a word
 */
export function pluralize(count: number, singular: string, plural?: string): string {
    return count === 1 ? singular : (plural || `${singular}s`);
}
