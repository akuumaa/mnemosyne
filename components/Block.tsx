'use client'
import { useState } from 'react'

export function Block({
                          description,
                          code,
                      }: {
    description: string
    code: string
}) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="border border-border rounded-lg p-4 bg-transparent">
            {description && (
                <p className="text-sm text-accent-2 mb-2">{description}</p>
            )}

            <div className="relative group">
        <pre className="overflow-auto bg-zinc-900 p-3 rounded-md whitespace-pre-wrap">
          <code className="text-sm text-zinc-300 font-mono font-light">
            {code}
          </code>
        </pre>

                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-700 hover:bg-zinc-600 text-white px-2 py-1 rounded"
                >
                    {copied ? '✓' : 'Copy'}
                </button>
            </div>
        </div>
    )
}
