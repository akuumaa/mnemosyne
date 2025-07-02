'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { CheatsheetMeta } from '@/lib/content';

type Props = CheatsheetMeta

export function CheatsheetCard({ title, slug, category, icon, tags }: Props) {
    return (
        <Link
            href={`/${category}/${slug}`}
            className="block"
        >
            <div className="group relative flex flex-col justify-between h-28 p-4 bg-background-card rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                    {icon && (
                        <Image
                            src={icon}
                            alt={title}
                            width={40}
                            height={40}
                            className="rounded"
                        />
                    )}
                    <h2 className="font-semibold text-lg text-accent-1">{title}</h2>
                </div>
                <div className="group flex flex-col justify-between h-48 p-4">
                    <p className="absolute bottom-3 right-4 text-xs text-text/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        {tags?.join(', ')}
                    </p>
                </div>
            </div>
        </Link>
    );
}
