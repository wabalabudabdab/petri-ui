'use client';
import { useState } from 'react';
import { CodeBlock } from './code-block';

export function ComponentPreview({ children, code }: { children: React.ReactNode; code: string }) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  return (
    <div className="rounded-lg border">
      <div className="flex border-b">
        <button onClick={() => setTab('preview')} className={`px-4 py-2 text-sm font-medium ${tab === 'preview' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}>Preview</button>
        <button onClick={() => setTab('code')} className={`px-4 py-2 text-sm font-medium ${tab === 'code' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}>Code</button>
      </div>
      {tab === 'preview' ? (
        <div className="flex min-h-[200px] items-center justify-center gap-4 p-6 flex-wrap">{children}</div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  );
}
