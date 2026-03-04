// Утилиты
export { cn } from './lib/utils';

// Хуки
export { useIsMobile } from './hooks/use-mobile';
export { useMounted } from './hooks/use-mounted';

// --- Компоненты ---

// Формы
export { Button, buttonVariants } from './components/button';
export { Input } from './components/input';
export { Textarea } from './components/textarea';
export { Label } from './components/label';
export { Checkbox } from './components/checkbox';
export { Switch } from './components/switch';
export { RadioGroup, RadioGroupItem } from './components/radio-group';
export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent,
  SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton,
} from './components/select';
export { PasswordInput } from './components/password-input';
export { AutocompleteInput } from './components/autocomplete-input';

// Данные
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/card';
export { Badge, badgeVariants } from './components/badge';
export { BooleanBadge } from './components/boolean-badge';
export {
  Table, TableHeader, TableBody, TableFooter, TableHead,
  TableRow, TableCell, TableCaption,
} from './components/table';
export { Avatar, AvatarImage, AvatarFallback } from './components/avatar';
export { Skeleton } from './components/skeleton';
export { Separator } from './components/separator';

// Оверлеи
export {
  Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
} from './components/dialog';
export {
  AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger,
  AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle,
  AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from './components/alert-dialog';
export { ConfirmDialog } from './components/confirm-dialog';
export {
  Sheet, SheetTrigger, SheetClose,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
} from './components/sheet';
export { Popover, PopoverTrigger, PopoverContent } from './components/popover';
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './components/tooltip';

// Навигация
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/tabs';
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup,
  DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './components/dropdown-menu';
export {
  Command, CommandDialog, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut, CommandSeparator,
} from './components/command';
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/collapsible';

// Обратная связь
export { Alert, AlertTitle, AlertDescription } from './components/alert';

// Прикладные
export { StatCard } from './components/stat-card';
export { StatsGrid } from './components/stats-grid';
export { SearchBar } from './components/search-bar';
export { ResultsCounter } from './components/results-counter';
export { LoadingState } from './components/loading-state';
export { EmptyState } from './components/empty-state';
export { PageTitle } from './components/page-title';
export { HighlightText } from './components/highlight-text';

// Sonner (toast)
export { Toaster } from './components/sonner';

// Form (react-hook-form)
export {
  useFormField, Form, FormItem, FormLabel, FormControl,
  FormDescription, FormMessage, FormField,
} from './components/form';

// Calendar (react-day-picker)
export { Calendar, CalendarDayButton } from './components/calendar';

// Sidebar
export {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction,
  SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput,
  SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge,
  SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub,
  SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail,
  SidebarSeparator, SidebarTrigger, useSidebar,
} from './components/sidebar';
