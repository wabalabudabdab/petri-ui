'use client';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@wabalabudabdab/petri-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
export default function Page() { return (
<DocPage title="Table" description="HTML-таблица со стилями." badge="Compound">
<DocSection title="Пример"><ComponentPreview code={`<Table>\n  <TableHeader><TableRow><TableHead>Имя</TableHead><TableHead>Email</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Анна</TableCell><TableCell>anna@mail.ru</TableCell></TableRow></TableBody>\n</Table>`}><Table><TableHeader><TableRow><TableHead>Имя</TableHead><TableHead>Email</TableHead><TableHead>Роль</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Анна</TableCell><TableCell>anna@mail.ru</TableCell><TableCell>Admin</TableCell></TableRow><TableRow><TableCell>Борис</TableCell><TableCell>boris@mail.ru</TableCell><TableCell>User</TableCell></TableRow></TableBody></Table></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@wabalabudabdab/petri-ui';`} /></DocSection>
</DocPage>); }
