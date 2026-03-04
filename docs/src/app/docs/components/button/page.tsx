'use client';
import { Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { PropsTable } from '@/components/props-table';
import { CodeBlock } from '@/components/code-block';

export default function Page() {
  return (
    <DocPage title="Button" description="Кнопка с вариантами, размерами и состояниями." badge="CVA">
      <DocSection title="Варианты">
        <ComponentPreview code={`<Button>Default</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>\n<Button variant="destructive">Destructive</Button>`}>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </ComponentPreview>
      </DocSection>
      <DocSection title="Размеры">
        <ComponentPreview code={`<Button size="sm">Small</Button>\n<Button size="default">Default</Button>\n<Button size="lg">Large</Button>\n<Button size="icon">★</Button>`}>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">★</Button>
        </ComponentPreview>
      </DocSection>
      <DocSection title="API">
        <PropsTable props={[
          { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: 'Визуальный стиль' },
          { name: 'size', type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: 'Размер' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'Рендерить как дочерний элемент (Slot)' },
        ]} />
      </DocSection>
      <DocSection title="Импорт">
        <CodeBlock code={`import { Button } from '@wabalabudabdab/genlab-ui';`} />
      </DocSection>
    </DocPage>
  );
}
