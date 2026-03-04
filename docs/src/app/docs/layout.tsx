import Link from 'next/link';
import { SidebarNav } from '@/components/sidebar-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold">Petri UI</Link>
          <div className="flex items-center gap-4">
            <a href="https://github.com/wabalabudabdab/petri-ui" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="container mx-auto flex gap-8 px-6 py-8">
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20"><SidebarNav /></div>
        </aside>
        <main className="flex-1 min-w-0 max-w-3xl">{children}</main>
      </div>
    </div>
  );
}
