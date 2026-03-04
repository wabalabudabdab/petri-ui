import { cn } from '../lib/utils';

export function BooleanBadge({ value }: { value: boolean }) {
  return (
    <span
      className={cn(
        'rounded-[6px] px-1 py-0.5 font-semibold',
        value ? 'bg-green-500' : 'bg-red-500',
      )}
    >
      {value ? 'TRUE' : 'FALSE'}
    </span>
  );
}
