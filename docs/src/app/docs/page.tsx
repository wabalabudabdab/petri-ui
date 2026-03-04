import { CodeBlock } from '@/components/code-block';

export default function IntroPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Введение</h1>
        <p className="mt-2 text-lg text-muted-foreground">GenLab UI — библиотека переиспользуемых React-компонентов для проектов GenLab.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Стек</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>React 19</strong> — UI runtime</li>
          <li><strong>Radix UI</strong> — headless accessibility primitives</li>
          <li><strong>Tailwind CSS v4</strong> — utility-first стили</li>
          <li><strong>CVA</strong> — type-safe варианты компонентов</li>
          <li><strong>TypeScript</strong> — полная типизация</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Быстрый старт</h2>
        <CodeBlock code={`bun add @wabalabudabdab/genlab-ui`} filename="Terminal" />
        <CodeBlock code={`import { Button, Card, Dialog } from '@wabalabudabdab/genlab-ui';`} filename="App.tsx" />
      </div>
    </div>
  );
}
