'use client';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Sheet" description="Боковая панель (drawer)." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Sheet>\n  <SheetTrigger asChild><Button>Открыть</Button></SheetTrigger>\n  <SheetContent>\n    <SheetHeader><SheetTitle>Панель</SheetTitle></SheetHeader>\n  </SheetContent>\n</Sheet>`}><Sheet><SheetTrigger asChild><Button variant="outline">Открыть Sheet</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Боковая панель</SheetTitle><SheetDescription>Пример Sheet.</SheetDescription></SheetHeader></SheetContent></Sheet></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
