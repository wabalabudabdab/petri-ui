'use client';
import { Textarea } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Textarea" description="Многострочное поле ввода.">
<DocSection title="Пример"><ComponentPreview code={`<Textarea placeholder="Введите текст..." />`}><Textarea placeholder="Введите текст..." className="max-w-sm" /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Textarea } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
