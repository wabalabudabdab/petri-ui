import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const components = [
  'Button','Input','Textarea','Card','Badge','Dialog','Sheet','Select','Table',
  'Tabs','Checkbox','Switch','Avatar','Skeleton','Alert','Tooltip','Popover',
  'Dropdown Menu','Command','Collapsible','Radio Group','Password Input',
  'Autocomplete','Stat Card','Search Bar','Loading State','Empty State',
  'Page Title','Highlight Text','Separator','Alert Dialog','Confirm Dialog','Label',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold">Petri UI</Link>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Документация</Link>
            <a href="https://github.com/wabalabudabdab/petri-ui" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Petri UI</h1>
          <p className="text-xl text-muted-foreground">30+ React-компонентов на базе Radix UI и Tailwind CSS v4. Типизированные, доступные, кастомизируемые.</p>
          <div className="rounded-lg bg-muted p-4 font-mono text-sm">bun add @wabalabudabdab/petri-ui</div>
          <div className="flex justify-center gap-4">
            <Link href="/docs" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Документация</Link>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold mb-8">Компоненты</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {components.map((c) => (
              <Link key={c} href={`/docs/components/${c.toLowerCase().replace(/ /g, '-')}`} className="rounded-lg border p-3 text-sm text-center hover:bg-accent transition-colors">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
