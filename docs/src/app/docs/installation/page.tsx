import { CodeBlock } from '@/components/code-block';

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Установка</h1>
        <p className="mt-2 text-lg text-muted-foreground">Как подключить GenLab UI к проекту.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">1. Настройте registry</h2>
        <CodeBlock code={`# .npmrc\n@wabalabudabdab:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`} filename=".npmrc" />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">2. Установите пакет</h2>
        <CodeBlock code={`bun add @wabalabudabdab/genlab-ui\n# или\nnpm install @wabalabudabdab/genlab-ui`} filename="Terminal" />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">3. Подключите CSS-переменные</h2>
        <p className="text-muted-foreground">Скопируйте CSS-переменные из раздела <a href="/docs/theming" className="underline text-primary">Темизация</a> в ваш globals.css.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">4. Используйте</h2>
        <CodeBlock code={`import { Button } from '@wabalabudabdab/genlab-ui';\n\nexport default function App() {\n  return <Button variant="outline">Привет!</Button>;\n}`} filename="App.tsx" />
      </div>
    </div>
  );
}
