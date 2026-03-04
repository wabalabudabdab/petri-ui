# Архитектура фронтенда Petri Office App

Документация по чтению и пониманию фронтенд-кода.

## Стек технологий

| Технология | Роль | Зачем |
|-----------|------|-------|
| **Next.js 16** | Фреймворк | App Router, SSR/SSG, middleware |
| **React 19** | UI runtime | Компоненты, хуки, Server Components |
| **TypeScript 5** | Типизация | Безопасность типов на всём стеке |
| **Tailwind CSS v4** | Стили | Utility-first, CSS-переменные oklch() |
| **Radix UI** | Примитивы | Headless accessible компоненты |
| **CVA** | Варианты | Type-safe стилевые варианты |
| **Zustand** | Глобальный стейт | Лёгкий стор (auth, user tables) |
| **TanStack Query v5** | Серверный стейт | Кэширование, дедупликация запросов |
| **React Hook Form** | Формы | Валидация, производительность |
| **Zod** | Валидация | Runtime type checking |
| **Axios** | HTTP | Interceptors, auto-refresh токенов |
| **Nuqs** | URL-стейт | Пагинация, сортировка в URL |

## Структура проекта

```
apps/frontend/src/
├── app/                    ← Next.js App Router (страницы)
│   ├── [locale]/           ← i18n маршруты
│   │   ├── (app)/          ← защищённые маршруты (layout с сайдбаром)
│   │   │   ├── dashboard/
│   │   │   ├── admin/      ← только ADMIN/ROOT
│   │   │   │   ├── users/
│   │   │   │   ├── roles/
│   │   │   │   └── databases/
│   │   │   ├── databases/  ← браузер внешних БД
│   │   │   │   └── [database_id]/tables/[table_name]/
│   │   │   ├── profile/
│   │   │   └── change-password/
│   │   └── login/
│   └── layout.tsx          ← корневой layout (providers)
├── components/             ← React компоненты
│   ├── ui/                 ← базовые UI (button, input, dialog...)
│   ├── shared/             ← переиспользуемые (search-bar, loading-state)
│   ├── admin/              ← админка
│   ├── auth/               ← авторизация
│   ├── databases/          ← браузер БД
│   ├── dashboard/          ← дашборд
│   └── profile/            ← профиль
├── features/               ← сложные фичи
│   ├── table-component/    ← компонент таблицы (TanStack Table)
│   └── users-table/        ← таблица пользователей
├── hooks/                  ← кастомные хуки
├── lib/                    ← утилиты и API клиенты
│   ├── api/                ← Axios клиенты + endpoints
│   └── utils.ts            ← cn() и прочие утилиты
├── store/                  ← Zustand сторы
├── types/                  ← TypeScript типы
├── providers/              ← React context providers
├── i18n/                   ← интернационализация
└── middleware.ts            ← защита маршрутов + refresh токенов
```

## Как читать код: ключевые паттерны

### 1. Маршрутизация (App Router)

Next.js App Router использует файловую систему:
- `page.tsx` = страница
- `layout.tsx` = обёртка для вложенных страниц
- `(группа)/` = группировка без влияния на URL
- `[param]/` = динамический сегмент

```
app/[locale]/(app)/admin/users/page.tsx  →  /ru/admin/users
app/[locale]/(app)/databases/[database_id]/tables/[table_name]/page.tsx
  →  /ru/databases/abc123/tables/users
```

### 2. Компоненты: Compound Pattern

Большинство UI компонентов используют **Compound Components** — один импорт, несколько подкомпонентов:

```tsx
// Один модуль экспортирует семейство
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Заголовок</CardTitle>
  </CardHeader>
  <CardContent>Контент</CardContent>
</Card>
```

Это паттерн Radix UI — каждый подкомпонент стилизован через `cn()` и `forwardRef`.

### 3. Стилизация: CVA + cn()

```tsx
// CVA определяет варианты
const buttonVariants = cva('base-classes', {
  variants: {
    variant: { default: '...', outline: '...', ghost: '...' },
    size: { default: '...', sm: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

// cn() мержит Tailwind классы без конфликтов
<div className={cn(buttonVariants({ variant, size }), className)} />
```

### 4. Стейт-менеджмент

**Три уровня стейта:**

```
Zustand (глобальный)     → useAuthStore, useUserTablesStore
TanStack Query (сервер)  → useDatabases(), useTableData()
URL State (Nuqs)         → пагинация, сортировка, фильтры
```

**Zustand стор:**
```tsx
// store/auth.store.ts
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

**TanStack Query:**
```tsx
// hooks/use-databases.ts
export function useDatabases() {
  return useQuery({
    queryKey: ['databases'],
    queryFn: () => api.get('/external-databases').then(r => r.data),
  });
}
```

### 5. Аутентификация

**Поток:**
1. `middleware.ts` перехватывает каждый запрос
2. Проверяет JWT в cookie через `/auth/profile`
3. При 401 — пытается refresh через `/auth/refresh`
4. При неудаче — редирект на `/login`
5. Проверяет роль пользователя для admin-маршрутов

**Два API клиента:**
```tsx
// lib/api/client.ts — для браузера (с interceptors)
export const client_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,  // cookies
});

// lib/api/server.ts — для middleware/SSR
export const server_api = axios.create({
  baseURL: process.env.API_URL,  // внутренний URL
});
```

### 6. Защита маршрутов

```tsx
// middleware.ts
const adminRoutes = ['/admin'];
const authRoutes = ['/dashboard', '/databases', '/profile'];

// Проверка: получить профиль → проверить роль → пропустить или редирект
```

### 7. Внешние базы данных

Ключевая фича — просмотр и редактирование таблиц из внешних PostgreSQL:

```
Страница → useTableData(dbId, tableName) → API → Knex.js → External PostgreSQL
                                              ↓
                                    Проверка permissions по роли
```

Маршрут: `/databases/[database_id]/tables/[table_name]/`

Компоненты: `features/table-component/` — виртуализированная таблица TanStack Table.

### 8. RBAC (Role-Based Access Control)

```
User ←→ Role ←→ TablePermission
                   ├── databaseId
                   ├── tableName
                   ├── canView
                   ├── canEdit
                   └── canDelete
```

- **ROOT** — полный доступ
- **ADMIN** — управление пользователями + полный доступ к данным
- **USER** — только разрешённые таблицы

### 9. i18n (Интернационализация)

Маршруты обёрнуты в `[locale]/`:
```
/ru/dashboard  — русский
/en/dashboard  — английский
```

Переводы в `i18n/` — объекты с ключами.

## Граф зависимостей компонентов

```
Button ← ConfirmDialog, PasswordInput, SearchBar
Input  ← PasswordInput, AutocompleteInput, SearchBar  
Dialog ← ConfirmDialog (через AlertDialog)
Card   ← StatCard, LoadingState
Badge  ← BooleanBadge
Command ← AutocompleteInput
Popover ← AutocompleteInput
cn()   ← ВСЕ компоненты
```

## Как добавить новый компонент

1. Создать `src/components/ui/my-component.tsx`
2. Использовать `cn()` для стилей, `forwardRef` для рефов
3. Экспортировать в `src/index.ts` (если в библиотеке)
4. Добавить страницу в `docs/src/app/docs/components/my-component/page.tsx`
5. Добавить в сайдбар `docs/src/components/sidebar-nav.tsx`

## Как добавить новую страницу

1. Создать `app/[locale]/(app)/my-page/page.tsx`
2. Добавить маршрут в `middleware.ts` (защита)
3. Добавить пункт в сайдбар (`components/shared/sidebar.tsx`)
4. Создать хук для данных в `hooks/`
