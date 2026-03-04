interface HighlightTextProps {
  text: string | number | null | undefined;
  query: string;
  className?: string;
}

export function HighlightText({ text, query, className }: HighlightTextProps) {
  const value = text === null || text === undefined ? '' : String(text);
  const q = query.toLowerCase().trim();

  if (!q) {
    return <span className={className}>{value}</span>;
  }

  const lower = value.toLowerCase();
  if (!lower.includes(q)) {
    return <span className={className}>{value}</span>;
  }

  const parts: React.ReactNode[] = [];
  let currentIndex = 0;

  while (currentIndex < value.length) {
    const matchIndex = lower.indexOf(q, currentIndex);

    if (matchIndex === -1) {
      parts.push(value.slice(currentIndex));
      break;
    }

    if (matchIndex > currentIndex) {
      parts.push(value.slice(currentIndex, matchIndex));
    }

    const match = value.slice(matchIndex, matchIndex + q.length);
    parts.push(
      <span key={matchIndex} className="bg-yellow-200/70 px-0.5 rounded-sm">
        {match}
      </span>,
    );

    currentIndex = matchIndex + q.length;
  }

  return <span className={className}>{parts}</span>;
}
