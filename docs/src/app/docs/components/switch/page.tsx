'use client';
import { Switch, Label } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Switch" description="Переключатель." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Switch id="mode" />\n<Label htmlFor="mode">Тёмная тема</Label>`}><div className="flex items-center gap-2"><Switch id="mode" /><Label htmlFor="mode">Тёмная тема</Label></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Switch } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
