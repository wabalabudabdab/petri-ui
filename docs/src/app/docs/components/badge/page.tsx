'use client';
import { Badge } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Badge" description="Метка-бейдж с вариантами." badge="CVA">
<DocSection title="Варианты"><ComponentPreview code={`<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="outline">Outline</Badge>\n<Badge variant="destructive">Destructive</Badge>`}><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="destructive">Destructive</Badge></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Badge } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
