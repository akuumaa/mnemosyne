import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CheatsheetMeta {
    slug: string;
    category: string;
    title: string;
    tags?: string[];
    icon?: string;
    updated?: string;
}

export function getAllCheatsheets(): CheatsheetMeta[] {
    const basePath = path.join(process.cwd(), 'content');
    const categories = fs.readdirSync(basePath);

    return categories.flatMap((category) => {
        const folder = path.join(basePath, category);
        const files = fs.readdirSync(folder);

        return files.map((file) => {
            const fullPath = path.join(folder, file);
            const content = fs.readFileSync(fullPath, 'utf8');
            const {data} = matter(content);

            return {
                slug: file.replace(/\.mdx$/, ''),
                category,
                title: data.title || 'Untitled',
                tags: data.tags || [],
                icon: data.icon || '',
                updated: data.updated || '',
            };
        });
    });
}

export async function getCheatsheetBySlug(category: string, slug: string): Promise<string> {
    const filePath = path.join(process.cwd(), 'content', category, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Cheatsheet not found: ${category}/${slug}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);

    return content;
}
