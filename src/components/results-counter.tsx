interface ResultsCounterProps {
  filteredCount: number;
  totalCount: number;
  label?: string;
}

const ResultsCounter: React.FC<ResultsCounterProps> = ({
  filteredCount,
  totalCount,
  label,
}) => {
  if (filteredCount === 0) return null;

  return (
    <div className="text-center text-sm text-muted-foreground">
      Показано {filteredCount} из {totalCount} {label}
    </div>
  );
};

export { ResultsCounter };
