export function DocPage({ title, description, badge, children }: { title: string; description: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          {badge && <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{badge}</span>}
        </div>
        <p className="mt-2 text-muted-foreground text-lg">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2">{title}</h2>
      {children}
    </section>
  );
}
