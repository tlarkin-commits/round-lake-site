import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ranchocorridopark.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/casino-workers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/travel-nurses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tradesmen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ag-workers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/families`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/retirees`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/thank-you`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ]
}
