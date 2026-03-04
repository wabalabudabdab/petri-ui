'use client';
import { useState } from 'react';
import { AutocompleteInput, Label } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
const countries = ['Россия', 'Беларусь', 'Казахстан', 'Украина', 'Узбекистан'];
export default function Page() { const [v, setV] = useState(''); return (
<DocPage title="Autocomplete Input" description="Поле с автодополнением.">
<DocSection title="Пример"><ComponentPreview code={`<AutocompleteInput value={v} onValueChange={setV} options={filtered} placeholder="Страна..." />`}><div className="space-y-2 w-full max-w-sm"><Label>Страна</Label><AutocompleteInput value={v} onValueChange={setV} options={countries.filter(c=>c.toLowerCase().includes(v.toLowerCase()))} placeholder="Начните вводить..." /></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { AutocompleteInput } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
