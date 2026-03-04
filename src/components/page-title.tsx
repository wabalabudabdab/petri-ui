import { cn } from '../lib/utils';

const PageTitle = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export { PageTitle };
