import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xbyoga.com'
  const lastModified = new Date()
  
  return [
      { url: 'https://xbyoga.com' },
          { url: 'https://xbyoga.com/courses/ashtanga' },
          { url: 'https://xbyoga.com/courses/sanskrit' },
          { url: 'https://xbyoga.com/Practice Guide' },
          { url: 'https://xbyoga.com/moon-calendar' },
      {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/courses/ashtanga`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/sanskrit`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Practice Guide`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Practice Guide/asanas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/mantras`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/practice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/pranayama`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/sanskritalphabet`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/yogaphilosophy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Practice Guide/yogasutras`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/moon-calendar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
