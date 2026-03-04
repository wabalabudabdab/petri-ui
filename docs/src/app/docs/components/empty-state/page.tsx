'use client';
import { EmptyState } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { Inbox } from 'lucide-react';
export default function Page() { return (
<DocPage title="Empty State" description="Состояние «нет данных».">
<DocSection title="Пример"><ComponentPreview code={`<EmptyState icon={<Inbox />} title="Нет данных" description="Добавьте первую запись." />`}><EmptyState icon={<Inbox className="size-12" />} title="Нет данных" description="Добавьте первую запись, чтобы начать." /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { EmptyState } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
