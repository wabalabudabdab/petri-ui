'use client';
import { PageTitle } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Page Title" description="Заголовок страницы с описанием.">
<DocSection title="Пример"><ComponentPreview code={`<PageTitle title="Пользователи" description="Управление пользователями" />`}><PageTitle title="Пользователи" description="Управление пользователями системы" /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { PageTitle } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
