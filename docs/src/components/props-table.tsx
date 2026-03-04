interface Prop { name: string; type: string; default?: string; description: string }

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Prop</th>
            <th className="px-4 py-2 text-left font-medium">Тип</th>
            <th className="px-4 py-2 text-left font-medium">Default</th>
            <th className="px-4 py-2 text-left font-medium">Описание</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-t">
              <td className="px-4 py-2 font-mono text-xs text-primary">{p.name}</td>
              <td className="px-4 py-2 font-mono text-xs">{p.type}</td>
              <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{p.default ?? '—'}</td>
              <td className="px-4 py-2">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
