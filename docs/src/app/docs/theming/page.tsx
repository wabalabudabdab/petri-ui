import { CodeBlock } from '@/components/code-block';

const tokens = [
  { var: '--background', description: 'Фон страницы' },
  { var: '--foreground', description: 'Основной текст' },
  { var: '--primary', description: 'Основной акцент' },
  { var: '--secondary', description: 'Вторичный фон' },
  { var: '--muted', description: 'Приглушённый фон' },
  { var: '--accent', description: 'Акцентный фон (hover)' },
  { var: '--destructive', description: 'Деструктивные действия' },
  { var: '--border', description: 'Границы' },
  { var: '--ring', description: 'Фокус-кольцо' },
  { var: '--success', description: 'Успех' },
  { var: '--warning', description: 'Предупреждение' },
  { var: '--info', description: 'Информация' },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Темизация</h1>
        <p className="mt-2 text-lg text-muted-foreground">Компоненты используют CSS-переменные oklch(). Переопределите их для своей темы.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Токены</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {tokens.map((t) => (
            <div key={t.var} className="flex items-center gap-3 rounded-lg border p-3">
              <div className="size-8 rounded-md border" style={{ background: `var(${t.var})` }} />
              <div>
                <code className="text-xs font-mono">{t.var}</code>
                <p className="text-xs text-muted-foreground">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Пример кастомизации</h2>
        <CodeBlock code={`:root {\n  --primary: oklch(0.6 0.25 260);\n  --radius: 0.75rem;\n}`} filename="globals.css" />
      </div>
    </div>
  );
}
