'use client';
import { Separator } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Separator" description="Разделительная линия." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Separator />`}><div className="w-full max-w-sm space-y-4"><p>Секция 1</p><Separator /><p>Секция 2</p><Separator /><p>Секция 3</p></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Separator } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
