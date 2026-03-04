'use client';
import { Input } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() {
  return (
    <DocPage title="Input" description="Текстовое поле ввода.">
      <DocSection title="Примеры">
        <ComponentPreview code={`<Input placeholder="Email" />\n<Input disabled placeholder="Заблокировано" />`}>
          <div className="space-y-3 w-full max-w-sm"><Input placeholder="Email" /><Input type="password" placeholder="Пароль" /><Input disabled placeholder="Заблокировано" /></div>
        </ComponentPreview>
      </DocSection>
      <DocSection title="Импорт"><CodeBlock code={`import { Input } from '@wabalabudabdab/petri-ui';`} /></DocSection>
    </DocPage>
  );
}
