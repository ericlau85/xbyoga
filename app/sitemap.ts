export default function sitemap() {
  return [
    {
      url: 'https://xbyoga.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://xbyoga.com/courses/ashtanga',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // 添加所有页面...
  ]
}
