'use client';
import { Skeleton } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Skeleton" description="Плейсхолдер загрузки.">
<DocSection title="Пример"><ComponentPreview code={`<Skeleton className="h-4 w-[250px]" />\n<Skeleton className="h-4 w-[200px]" />\n<Skeleton className="h-12 w-12 rounded-full" />`}><div className="space-y-3"><Skeleton className="h-4 w-[250px]" /><Skeleton className="h-4 w-[200px]" /><div className="flex gap-3"><Skeleton className="h-12 w-12 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-[150px]" /><Skeleton className="h-4 w-[100px]" /></div></div></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Skeleton } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
