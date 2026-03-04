'use client';
import { Label, Input } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Label" description="Подпись к полю формы." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Label htmlFor="email">Email</Label>\n<Input id="email" />`}><div className="space-y-2 w-full max-w-sm"><Label htmlFor="email">Email</Label><Input id="email" placeholder="user@example.com" /></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Label } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
