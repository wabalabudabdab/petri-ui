'use client';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { Calculator, Calendar, User, Settings } from 'lucide-react';
export default function Page() { return (
<DocPage title="Command" description="Палитра команд (Cmd+K)." badge="cmdk">
<DocSection title="Пример"><ComponentPreview code={`<Command>\n  <CommandInput placeholder="Поиск..." />\n  <CommandList>\n    <CommandEmpty>Ничего не найдено</CommandEmpty>\n    <CommandGroup heading="Действия">\n      <CommandItem>Календарь</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`}><Command className="rounded-lg border shadow-md w-full max-w-sm"><CommandInput placeholder="Поиск..." /><CommandList><CommandEmpty>Ничего не найдено.</CommandEmpty><CommandGroup heading="Действия"><CommandItem><Calendar className="size-4" /> Календарь</CommandItem><CommandItem><Calculator className="size-4" /> Калькулятор</CommandItem></CommandGroup><CommandSeparator /><CommandGroup heading="Настройки"><CommandItem><User className="size-4" /> Профиль</CommandItem><CommandItem><Settings className="size-4" /> Настройки</CommandItem></CommandGroup></CommandList></Command></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
