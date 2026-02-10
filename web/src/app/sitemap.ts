import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shahriar-kabir.com'

    const routes = [
        '',
        '/dossier',
        '/career',
        '/thinking',
        '/life-motion',
        '/thinking/bangladesh-hub',
        '/thinking/billing-models',
        '/thinking/bpo-cx-strategy',
        '/thinking/payment-success',
        '/thinking/mobile-auto-repair-ai',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
