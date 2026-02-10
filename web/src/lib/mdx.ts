import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags?: string[];
    image?: string;
}

export async function getPostBySlug(slug: string, type: "thinking" | "where-next" = "thinking"): Promise<Post | null> {
    const fullPath = path.join(contentDir, type, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags,
        image: data.image,
        content,
    };
}

export async function getAllPosts(type: "thinking" | "where-next" = "thinking"): Promise<Post[]> {
    const dir = path.join(contentDir, type);
    if (!fs.existsSync(dir)) {
        return [];
    }

    const files = fs.readdirSync(dir);
    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const fullPath = path.join(dir, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                tags: data.tags,
                image: data.image,
                content,
            };
        })
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return posts;
}
