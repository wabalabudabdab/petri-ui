'use client';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, Button } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { User, Settings, LogOut } from 'lucide-react';
export default function Page() { return (
<DocPage title="Dropdown Menu" description="Выпадающее меню." badge="Radix · Compound">
<DocSection title="Пример"><ComponentPreview code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild><Button>Меню</Button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Профиль</DropdownMenuItem>\n    <DropdownMenuItem>Настройки</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}><DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Меню</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem><User className="size-4" /> Профиль</DropdownMenuItem><DropdownMenuItem><Settings className="size-4" /> Настройки</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem><LogOut className="size-4" /> Выйти</DropdownMenuItem></DropdownMenuContent></DropdownMenu></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
