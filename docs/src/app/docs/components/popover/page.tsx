'use client';
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Label } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Popover" description="Всплывающее окно." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Popover>\n  <PopoverTrigger asChild><Button>Настройки</Button></PopoverTrigger>\n  <PopoverContent><Label>Ширина</Label><Input defaultValue="100%" /></PopoverContent>\n</Popover>`}><Popover><PopoverTrigger asChild><Button variant="outline">Открыть</Button></PopoverTrigger><PopoverContent className="w-72"><div className="space-y-3"><h4 className="font-medium text-sm">Размеры</h4><div className="space-y-2"><Label>Ширина</Label><Input defaultValue="100%" /></div></div></PopoverContent></Popover></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Popover, PopoverTrigger, PopoverContent } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
