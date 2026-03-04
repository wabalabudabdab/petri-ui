import { Card, CardContent, CardHeader, CardTitle } from './card';

interface StatCardProps {
  title: string;
  value: number | string;
  description?: string;
  icon: React.ReactNode;
  variant?: 'default' | 'warning' | 'success';
  valueClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  variant = 'default',
  valueClassName,
}) => {
  const iconColorClass = {
    default: 'text-muted-foreground',
    warning: 'text-warning',
    success: 'text-success',
  }[variant];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-bold">{title}</CardTitle>
        <div className={`h-4 w-4 ${iconColorClass}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        {variant === 'success' ? (
          <>
            <div className={`flex items-center ${valueClassName || ''}`}>
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              <span className="text-sm font-medium">{value}</span>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </>
        ) : (
          <>
            <div className={`text-2xl font-bold ${valueClassName || ''}`}>
              {value}
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export { StatCard };
