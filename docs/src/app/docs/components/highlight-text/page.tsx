'use client';
import { useState } from 'react';
import { HighlightText, Input, Label } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { const [q, setQ] = useState('react'); return (
<DocPage title="Highlight Text" description="Подсветка совпадений текста.">
<DocSection title="Пример"><ComponentPreview code={`<HighlightText text="React + Radix UI" query="react" />`}><div className="space-y-4 w-full max-w-md"><div className="space-y-2"><Label>Запрос</Label><Input value={q} onChange={e=>setQ(e.target.value)} /></div><div className="space-y-1 text-sm"><HighlightText text="React компоненты на базе Radix UI" query={q} /><br/><HighlightText text="TypeScript, React 19, Next.js 16" query={q} /></div></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { HighlightText } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
