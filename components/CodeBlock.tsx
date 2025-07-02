'use client'
import { useState } from 'react'

export function CodeBlock({ children }: { children: React.ReactNode }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(String(children));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
      <pre className="overflow-auto bg-zinc-800 p-3 rounded-lg">
        <code>{children}</code>
      </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-700 hover:bg-zinc-600 text-white px-2 py-1 rounded"
            >
                {copied ? '✓' : 'Copy'}
            </button>
        </div>
    );
}
