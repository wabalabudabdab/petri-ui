'use client';
import { PasswordInput, Label } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Password Input" description="Поле пароля с кнопкой показать/скрыть.">
<DocSection title="Пример"><ComponentPreview code={`<PasswordInput placeholder="Введите пароль" />`}><div className="space-y-2 w-full max-w-sm"><Label>Пароль</Label><PasswordInput placeholder="Введите пароль" /></div></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { PasswordInput } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
