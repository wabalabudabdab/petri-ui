import { Card, CardContent } from './card';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ message }: LoadingStateProps) => (
  <div className="container mx-auto py-6">
    <Card>
      <CardContent className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

export { LoadingState };
