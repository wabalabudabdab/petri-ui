'use client';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Button } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Alert Dialog" description="Диалог подтверждения действия." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<AlertDialog>\n  <AlertDialogTrigger asChild><Button variant="destructive">Удалить</Button></AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader><AlertDialogTitle>Вы уверены?</AlertDialogTitle><AlertDialogDescription>Это действие нельзя отменить.</AlertDialogDescription></AlertDialogHeader>\n    <AlertDialogFooter><AlertDialogCancel>Отмена</AlertDialogCancel><AlertDialogAction>Удалить</AlertDialogAction></AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`}><AlertDialog><AlertDialogTrigger asChild><Button variant="destructive">Удалить</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Вы уверены?</AlertDialogTitle><AlertDialogDescription>Это действие нельзя отменить.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Отмена</AlertDialogCancel><AlertDialogAction>Удалить</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
