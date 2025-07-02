'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const categories = ['language', 'framework', 'tool'];

export function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-background2 text-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-accent-1">SheetsWeb</Link>

                <div className="relative" ref={menuRef}>
                    <span
                        onClick={() => setOpen(!open)}
                        className="cursor-pointer text-sm text-text hover:text-accent-1 transition"
                    >
                        Sheets
                    </span>

                    {open && (
                        <div
                            className="
                                  absolute left-1/2 transform -translate-x-1/2 mt-2 transition duration-200
                                  w-64 rounded-xl border border-accent-2 z-50
                                  bg-zinc-800/80 backdrop-blur-md shadow-2xl
                                ">
                            {categories.map((cat) => (
                                <Link
                                    key={cat}
                                    href={`/category/${cat}`}
                                    className="block px-4 py-2 text-sm text-text text-center hover:bg-white/10 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}