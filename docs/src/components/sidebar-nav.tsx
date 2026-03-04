'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  { title: 'Начало', items: [
    { name: 'Введение', href: '/docs' },
    { name: 'Установка', href: '/docs/installation' },
    { name: 'Темизация', href: '/docs/theming' },
  ]},
  { title: 'Формы', items: [
    { name: 'Button', href: '/docs/components/button' },
    { name: 'Input', href: '/docs/components/input' },
    { name: 'Textarea', href: '/docs/components/textarea' },
    { name: 'Label', href: '/docs/components/label' },
    { name: 'Checkbox', href: '/docs/components/checkbox' },
    { name: 'Switch', href: '/docs/components/switch' },
    { name: 'Radio Group', href: '/docs/components/radio-group' },
    { name: 'Select', href: '/docs/components/select' },
    { name: 'Password Input', href: '/docs/components/password-input' },
    { name: 'Autocomplete', href: '/docs/components/autocomplete-input' },
  ]},
  { title: 'Данные', items: [
    { name: 'Card', href: '/docs/components/card' },
    { name: 'Badge', href: '/docs/components/badge' },
    { name: 'Table', href: '/docs/components/table' },
    { name: 'Avatar', href: '/docs/components/avatar' },
    { name: 'Skeleton', href: '/docs/components/skeleton' },
    { name: 'Separator', href: '/docs/components/separator' },
  ]},
  { title: 'Оверлеи', items: [
    { name: 'Dialog', href: '/docs/components/dialog' },
    { name: 'Alert Dialog', href: '/docs/components/alert-dialog' },
    { name: 'Confirm Dialog', href: '/docs/components/confirm-dialog' },
    { name: 'Sheet', href: '/docs/components/sheet' },
    { name: 'Popover', href: '/docs/components/popover' },
    { name: 'Tooltip', href: '/docs/components/tooltip' },
  ]},
  { title: 'Навигация', items: [
    { name: 'Tabs', href: '/docs/components/tabs' },
    { name: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
    { name: 'Command', href: '/docs/components/command' },
    { name: 'Collapsible', href: '/docs/components/collapsible' },
  ]},
  { title: 'Обратная связь', items: [
    { name: 'Alert', href: '/docs/components/alert' },
  ]},
  { title: 'Прикладные', items: [
    { name: 'Stat Card', href: '/docs/components/stat-card' },
    { name: 'Search Bar', href: '/docs/components/search-bar' },
    { name: 'Loading State', href: '/docs/components/loading-state' },
    { name: 'Empty State', href: '/docs/components/empty-state' },
    { name: 'Page Title', href: '/docs/components/page-title' },
    { name: 'Highlight Text', href: '/docs/components/highlight-text' },
  ]},
];

export function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-6">
      {sections.map((s) => (
        <div key={s.title}>
          <h4 className="mb-2 text-sm font-semibold text-foreground">{s.title}</h4>
          <ul className="space-y-1">
            {s.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`block rounded-md px-3 py-1.5 text-sm ${pathname === item.href ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
