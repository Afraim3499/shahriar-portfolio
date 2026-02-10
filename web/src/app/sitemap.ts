import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://shahriar-kabir.com'

    // Fetch all thinking posts to index them automatically
    const thinkingPosts = await getAllPosts("thinking");
    const thinkingRoutes = thinkingPosts.map((post) => ({
        url: `${baseUrl}/thinking/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Static core routes
    const coreRoutes = [
        '',
        '/dossier',
        '/career',
        '/thinking',
        '/life-motion',
        '/privacy',
        '/terms'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...coreRoutes, ...thinkingRoutes]
}
