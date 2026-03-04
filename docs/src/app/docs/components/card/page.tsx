'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() {
  return (
    <DocPage title="Card" description="Контейнер-карточка." badge="Compound">
      <DocSection title="Пример">
        <ComponentPreview code={`<Card>\n  <CardHeader><CardTitle>Заголовок</CardTitle></CardHeader>\n  <CardContent>Контент</CardContent>\n  <CardFooter><Button>OK</Button></CardFooter>\n</Card>`}>
          <Card className="w-full max-w-sm"><CardHeader><CardTitle>Заголовок</CardTitle><CardDescription>Описание</CardDescription></CardHeader><CardContent><p>Контент карточки.</p></CardContent><CardFooter><Button>OK</Button></CardFooter></Card>
        </ComponentPreview>
      </DocSection>
      <DocSection title="Импорт"><CodeBlock code={`import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
    </DocPage>
  );
}
