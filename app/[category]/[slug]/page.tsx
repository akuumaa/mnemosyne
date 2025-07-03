import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CheatsheetSection } from '@/components/CheatsheetSection';
import { CodeBlock } from '@/components/CodeBlock';
import {CheatsheetBlock} from "@/components/CheatsheetBlock";
import {Topic} from "@/components/Topic";
import {Block} from "@/components/Block";
import {LinkItem, LinkBox} from "@/components/Link";

interface PageProps {
    params: {
        category: string;
        slug: string;
    };
}

async function unwrapParams(params: PageProps['params'] | Promise<PageProps['params']>) {
    return await params;
}

export default async function CheatsheetPage(props: PageProps) {
    const { category, slug } = await unwrapParams(props.params);
    const filePath = path.join(process.cwd(), 'content', category, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(source);

    return (
        <main className="w-full px-4">
            <div className="flex items-center gap-4 mb-4">
                {data.icon && (
                    <Image src={data.icon} alt={data.title} width={40} height={40} />
                )}
                <h1 className="text-3xl font-bold">{data.title}</h1>
            </div>

            {data.updated && (
                <p className="text-sm text-accent-2 mb-2">
                    Zuletzt aktualisiert: {new Date(data.updated).toLocaleDateString('de-DE')}
                </p>
            )}

            {data.tags && Array.isArray(data.tags) && (
                <p className="text-sm text-accent-1 mb-6">
                    {data.tags.map((tag: string) => (
                        <span key={tag} className="mr-2 inline-block bg-accent-2 text-text text-xs px-2 py-1 rounded">
              {tag}
            </span>
                    ))}
                </p>
            )}

            <article className="prose prose-invert max-w-none">
                <MDXRemote
                    source={content}
                    components={{
                        Topic,
                        Block,
                        LinkItem,
                        LinkBox
                    }}
                />
            </article>
        </main>
    );
}
