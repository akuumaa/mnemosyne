'use client';
import { useState } from 'react';

export function CheatsheetBlock({
                                    children,
                                    description,
                                }: {
    children: React.ReactNode;
    description?: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(String(children));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group bg-muted p-3 rounded-xl shadow hover:shadow-md transition">
            {description && (
                <p className="text-xs text-muted-foreground mb-2">{description}</p>
            )}
            <pre className="overflow-auto bg-background-card p-3 rounded-lg text-sm text-white">
        <code>{children}</code>
      </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-accent-2 hover:accent-hover text-white px-2 py-1 rounded"
            >
                {copied ? '✓' : 'Copy'}
            </button>
        </div>
    );
}
