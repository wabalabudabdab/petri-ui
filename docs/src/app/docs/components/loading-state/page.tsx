'use client';
import { LoadingState } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Loading State" description="Индикатор загрузки страницы.">
<DocSection title="Пример"><ComponentPreview code={`<LoadingState message="Загрузка..." />`}><LoadingState message="Загрузка данных..." /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { LoadingState } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
