'use client';
import { RadioGroup, RadioGroupItem, Label } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Radio Group" description="Группа радиокнопок." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<RadioGroup defaultValue="b">\n  <div className="flex items-center gap-2"><RadioGroupItem value="a" id="a" /><Label htmlFor="a">Вариант A</Label></div>\n  <div className="flex items-center gap-2"><RadioGroupItem value="b" id="b" /><Label htmlFor="b">Вариант B</Label></div>\n</RadioGroup>`}><RadioGroup defaultValue="b"><div className="flex items-center gap-2"><RadioGroupItem value="a" id="a" /><Label htmlFor="a">По умолчанию</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="b" id="b" /><Label htmlFor="b">Комфортный</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="c" id="c" /><Label htmlFor="c">Компактный</Label></div></RadioGroup></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { RadioGroup, RadioGroupItem } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
