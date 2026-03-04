'use client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Select" description="Выпадающий список." badge="Radix · Compound">
<DocSection title="Пример"><ComponentPreview code={`<Select>\n  <SelectTrigger><SelectValue placeholder="Выберите..." /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="a">Вариант A</SelectItem>\n    <SelectItem value="b">Вариант B</SelectItem>\n  </SelectContent>\n</Select>`}><Select><SelectTrigger className="w-[200px]"><SelectValue placeholder="Выберите..." /></SelectTrigger><SelectContent><SelectItem value="a">Вариант A</SelectItem><SelectItem value="b">Вариант B</SelectItem><SelectItem value="c">Вариант C</SelectItem></SelectContent></Select></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
