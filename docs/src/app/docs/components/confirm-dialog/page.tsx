'use client';
import { useState } from 'react';
import { ConfirmDialog, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { const [open, setOpen] = useState(false); return (
<DocPage title="Confirm Dialog" description="Упрощённый диалог подтверждения — обёртка AlertDialog.">
<DocSection title="Пример"><ComponentPreview code={`<ConfirmDialog\n  open={open}\n  onOpenChange={setOpen}\n  title="Удалить запись?"\n  description="Действие нельзя отменить."\n  onConfirm={() => console.log('confirmed')}\n/>`}><Button variant="destructive" onClick={() => setOpen(true)}>Удалить</Button><ConfirmDialog open={open} onOpenChange={setOpen} title="Удалить запись?" description="Это действие нельзя отменить." onConfirm={() => setOpen(false)} /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { ConfirmDialog } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
