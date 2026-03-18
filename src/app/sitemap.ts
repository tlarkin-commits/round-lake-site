import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.roundlakecommunity.com'
  return [
    { url: base,                                   lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/availability`,                 lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/#features`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#gallery`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#contact`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/utility`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/utility/information`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/utility/billing`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/utility/annual-report`,        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/utility/maintenance`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
  ]
}
