export function LinkBox({
                            title,
                            children,
                        }: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="pl-3 border-l border-zinc-700">
            <h3 className="text-accent-1 text-sm font-semibold mb-2 uppercase tracking-wide">{title}</h3>
            <ul className="space-y-2">{children}</ul>
        </div>
    )
}

export function LinkItem({
                             href,
                             label,
                         }: {
    href: string
    label: string
}) {
    return (
        <li>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-2 hover:text-accent-1 underline text-sm"
            >
                {label}
            </a>
        </li>
    )
}