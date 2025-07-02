import {CheatsheetMeta, getAllCheatsheets} from '@/lib/content';
import {CheatsheetCard} from "@/components/CheatsheetCard";

export default function Home() {
    const cheatsheets: CheatsheetMeta[] = getAllCheatsheets();

    return (
        <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cheatsheets.map((sheet) => (
                    <CheatsheetCard key={sheet.slug} {...sheet} />
                ))}
            </div>
        </main>
    );
}
