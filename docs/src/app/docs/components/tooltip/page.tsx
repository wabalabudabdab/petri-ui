'use client';
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Tooltip" description="Подсказка при наведении." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Tooltip>\n  <TooltipTrigger asChild><Button variant="outline">Наведи</Button></TooltipTrigger>\n  <TooltipContent>Подсказка</TooltipContent>\n</Tooltip>`}><Tooltip><TooltipTrigger asChild><Button variant="outline">Наведи на меня</Button></TooltipTrigger><TooltipContent>Это подсказка!</TooltipContent></Tooltip></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Tooltip, TooltipTrigger, TooltipContent } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
