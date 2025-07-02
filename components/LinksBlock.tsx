'use client';

import { getCheatsheetBySlug } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function LinksBlock() {
    const content = await getCheatsheetBySlug('meta', 'links');
    return (
        <article className="prose prose-invert max-w-none mt-8">
            <MDXRemote source={content} />
        </article>
    );
}
