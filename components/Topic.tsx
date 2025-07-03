export function Topic({
                          title,
                          description,
                          children,
                      }: {
    title: string
    description?: string
    children: React.ReactNode
}) {
    return (
        <section className="w-full max-w-screen-xl mx-auto border p-6 mb-12 bg-zinc-800/30 backdrop-blur-sm">
        <div className="mb-4">
                <h2 className="text-xl font-semibold text-text">{title}</h2>
                {description && (
                    <p className="text-accent-2 text-sm mt-1">{description}</p>
                )}
            </div>
            <div className="grid gap-4 md:grid-cols-2">{children}</div>
        </section>
    )
}