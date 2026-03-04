'use client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Tabs" description="Вкладки." badge="Radix · Compound">
<DocSection title="Пример"><ComponentPreview code={`<Tabs defaultValue="tab1">\n  <TabsList><TabsTrigger value="tab1">Вкладка 1</TabsTrigger><TabsTrigger value="tab2">Вкладка 2</TabsTrigger></TabsList>\n  <TabsContent value="tab1">Контент 1</TabsContent>\n  <TabsContent value="tab2">Контент 2</TabsContent>\n</Tabs>`}><Tabs defaultValue="tab1" className="w-full max-w-sm"><TabsList><TabsTrigger value="tab1">Аккаунт</TabsTrigger><TabsTrigger value="tab2">Безопасность</TabsTrigger></TabsList><TabsContent value="tab1"><p className="p-4">Настройки аккаунта</p></TabsContent><TabsContent value="tab2"><p className="p-4">Настройки безопасности</p></TabsContent></Tabs></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
