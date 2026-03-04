'use client';
import { Alert, AlertTitle, AlertDescription } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Alert" description="Блок уведомления." badge="CVA">
<DocSection title="Варианты"><ComponentPreview code={`<Alert variant="info"><AlertTitle>Инфо</AlertTitle></Alert>\n<Alert variant="success"><AlertTitle>Успех</AlertTitle></Alert>\n<Alert variant="warning"><AlertTitle>Внимание</AlertTitle></Alert>\n<Alert variant="error"><AlertTitle>Ошибка</AlertTitle></Alert>`}><div className="w-full max-w-lg space-y-3"><Alert variant="info"><AlertTitle>Информация</AlertTitle><AlertDescription>Доступно обновление.</AlertDescription></Alert><Alert variant="success"><AlertTitle>Успех</AlertTitle><AlertDescription>Данные сохранены.</AlertDescription></Alert><Alert variant="warning"><AlertTitle>Внимание</AlertTitle><AlertDescription>Пароль истекает.</AlertDescription></Alert><Alert variant="error"><AlertTitle>Ошибка</AlertTitle><AlertDescription>Не удалось загрузить.</AlertDescription></Alert></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Alert, AlertTitle, AlertDescription } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
