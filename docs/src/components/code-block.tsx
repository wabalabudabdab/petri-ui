'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({ code, filename }: { code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative rounded-lg border bg-muted/50 overflow-hidden">
      {filename && <div className="border-b px-4 py-2 text-xs text-muted-foreground font-mono">{filename}</div>}
      <pre className="p-4 overflow-x-auto text-sm"><code>{code}</code></pre>
      <button onClick={copy} className="absolute top-2 right-2 rounded-md p-1.5 hover:bg-accent text-muted-foreground">
        {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
