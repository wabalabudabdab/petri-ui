'use client';

import * as React from 'react';

import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from './command';
import { Input } from './input';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from './popover';
import { cn } from '../lib/utils';

type AutocompleteInputProps = Omit<
  React.ComponentProps<typeof Input>,
  'value' | 'onChange'
> & {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  onQueryChange?: (query: string) => void;
  emptyText?: string;
};

export function AutocompleteInput({
  value,
  onValueChange,
  options,
  onQueryChange,
  emptyText = 'Ничего не найдено',
  className,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}: AutocompleteInputProps) {
  const [open, setOpen] = React.useState(false);
  const closeTimerRef = React.useRef<number | null>(null);

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 120);
  }, [clearCloseTimer]);

  React.useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  const handleSelect = React.useCallback(
    (next: string) => {
      onValueChange(next);
      onQueryChange?.(next);
      setOpen(false);
    },
    [onQueryChange, onValueChange],
  );

  const showDropdown = open && options.length > 0;

  return (
    <Popover open={showDropdown} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div>
          <Input
            {...props}
            value={value}
            className={cn(className)}
            onChange={(e) => {
              const next = e.target.value;
              onValueChange(next);
              onQueryChange?.(next);
              setOpen(true);
            }}
            onFocus={(e) => {
              clearCloseTimer();
              setOpen(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              scheduleClose();
              onBlur?.(e);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setOpen(false);
              }
              onKeyDown?.(e);
            }}
          />
        </div>
      </PopoverAnchor>

      <PopoverContent
        align="start"
        className="w-(--radix-popover-trigger-width) p-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command>
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {options.map((opt) => (
              <CommandItem
                key={opt}
                value={opt}
                onMouseDown={(e) => e.preventDefault()}
                onSelect={() => handleSelect(opt)}
              >
                <span className="font-mono text-sm truncate">{opt}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
