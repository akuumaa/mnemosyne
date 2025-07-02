import React from 'react';

interface CheatsheetSectionProps {
    title: string;
    description?: string;
    tags?: string[];
    children: React.ReactNode;
}

export function CheatsheetSection({ title, description, tags, children }: CheatsheetSectionProps) {
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-accent-1">{title}</h2>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-muted px-2 py-0.5 rounded-full"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}
            </div>
            {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {children}
            </div>
        </section>
    );
}
