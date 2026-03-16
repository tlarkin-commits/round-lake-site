export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export function trackEvent(action: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params)
  }
}
