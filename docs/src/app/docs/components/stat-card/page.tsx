'use client';
import { StatCard, StatsGrid } from '@wabalabudabdab/genlab-ui';
import { DocPage, DocSection } from '@/components/doc-page';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { Users, Database, Activity } from 'lucide-react';
export default function Page() { return (
<DocPage title="Stat Card" description="Карточка статистики.">
<DocSection title="Пример"><ComponentPreview code={`<StatsGrid>\n  <StatCard title="Пользователи" value={142} icon={<Users />} />\n  <StatCard title="Базы данных" value={5} icon={<Database />} />\n</StatsGrid>`}><StatsGrid><StatCard title="Пользователи" value={142} icon={<Users className="size-4" />} description="Всего" /><StatCard title="Базы данных" value={5} icon={<Database className="size-4" />} description="Подключено" /><StatCard title="Онлайн" value="12/142" icon={<Activity className="size-4" />} description="В сети" /></StatsGrid></ComponentPreview></DocSection>
<DocSection title="Импорт"><CodeBlock code={`import { StatCard, StatsGrid } from '@wabalabudabdab/genlab-ui';`} /></DocSection>
</DocPage>); }
