'use client';
import { useState } from 'react';
import { SearchBar } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { const [s, setS] = useState(''); return (
<DocPage title="Search Bar" description="Поле поиска с иконкой.">
<DocSection title="Пример"><ComponentPreview code={`<SearchBar value={s} onChange={setS} placeholder="Поиск..." />`}><SearchBar value={s} onChange={setS} placeholder="Поиск пользователей..." /></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { SearchBar } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
