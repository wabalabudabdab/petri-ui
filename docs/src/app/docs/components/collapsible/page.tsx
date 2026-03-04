'use client';
import { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { ChevronsUpDown } from 'lucide-react';
export default function Page() { const [open, setOpen] = useState(false); return (
<DocPage title="Collapsible" description="Сворачиваемая секция." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Collapsible>\n  <CollapsibleTrigger asChild><Button variant="ghost">Показать</Button></CollapsibleTrigger>\n  <CollapsibleContent>Скрытый контент</CollapsibleContent>\n</Collapsible>`}><Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2"><div className="flex items-center justify-between"><h4 className="text-sm font-semibold">3 репозитория</h4><CollapsibleTrigger asChild><Button variant="ghost" size="sm"><ChevronsUpDown className="size-4" /></Button></CollapsibleTrigger></div><div className="rounded-md border px-4 py-2 text-sm">@wabalabudabdab/genlab-ui</div><CollapsibleContent className="space-y-2"><div className="rounded-md border px-4 py-2 text-sm">@wabalabudabdab/genlab-docs</div><div className="rounded-md border px-4 py-2 text-sm">@wabalabudabdab/genlab-cli</div></CollapsibleContent></Collapsible></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
