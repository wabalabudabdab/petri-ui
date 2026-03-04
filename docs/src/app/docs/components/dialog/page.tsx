'use client';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Dialog" description="Модальное окно." badge="Radix · Compound">
<DocSection title="Пример"><ComponentPreview code={`<Dialog>\n  <DialogTrigger asChild><Button>Открыть</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Заголовок</DialogTitle><DialogDescription>Описание</DialogDescription></DialogHeader>\n  </DialogContent>\n</Dialog>`}><Dialog><DialogTrigger asChild><Button>Открыть Dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Модальное окно</DialogTitle><DialogDescription>Пример использования Dialog.</DialogDescription></DialogHeader></DialogContent></Dialog></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
