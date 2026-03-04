'use client';
import { Checkbox, Label } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Checkbox" description="Чекбокс." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<div className="flex items-center gap-2">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Принимаю условия</Label>\n</div>`}><div className="flex items-center gap-2"><Checkbox id="terms" /><Label htmlFor="terms">Принимаю условия</Label></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Checkbox } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
