'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Avatar" description="Аватар пользователя с фоллбэком." badge="Radix">
<DocSection title="Пример"><ComponentPreview code={`<Avatar><AvatarImage src="..." /><AvatarFallback>АН</AvatarFallback></Avatar>`}><Avatar><AvatarFallback>АН</AvatarFallback></Avatar><Avatar><AvatarFallback>БК</AvatarFallback></Avatar></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Avatar, AvatarImage, AvatarFallback } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
