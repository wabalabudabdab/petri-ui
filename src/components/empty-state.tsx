interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center py-8 text-muted-foreground">
      <div className="h-12 w-12 mx-auto mb-4 opacity-50 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm">{title}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export { EmptyState };
