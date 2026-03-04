# @wabalabudabdab/petri-ui

Библиотека переиспользуемых React UI-компонентов для проектов.

- **30+ компонентов** — кнопки, формы, диалоги, таблицы, карточки, навигация
- **Radix UI** — headless accessibility primitives
- **Tailwind CSS v4** — стили через CSS-переменные (oklch)
- **CVA** — type-safe варианты компонентов
- **TypeScript** — полная типизация, tree-shakable ESM
- **React 18/19** — совместимость с обоими версиями

## Установка

```bash
# 1. Настройте registry (.npmrc)
@wabalabudabdab:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

# 2. Установите
bun add @wabalabudabdab/petri-ui
# или
npm install @wabalabudabdab/petri-ui
```

### Peer-зависимости

```bash
bun add react react-dom tailwindcss
```

## Использование

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@wabalabudabdab/petri-ui';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Привет</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Нажми</Button>
      </CardContent>
    </Card>
  );
}
```

## CSS-переменные

Компоненты требуют CSS-переменные темы. Добавьте в `globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.3 0 0);
  --input: oklch(0.3 0 0);
  --ring: oklch(0.556 0 0);
}
```

## Каталог компонентов

### Формы
| Компонент | Описание |
|-----------|----------|
| `Button` | Кнопка с 6 вариантами и 4 размерами (CVA) |
| `Input` | Текстовое поле ввода |
| `Textarea` | Многострочное поле |
| `Label` | Подпись к полю (Radix) |
| `Checkbox` | Чекбокс (Radix) |
| `Switch` | Переключатель (Radix) |
| `RadioGroup` | Группа радиокнопок (Radix) |
| `Select` | Выпадающий список (Radix) |
| `PasswordInput` | Поле пароля с показать/скрыть |
| `AutocompleteInput` | Поле с автодополнением |

### Данные
| Компонент | Описание |
|-----------|----------|
| `Card` | Контейнер-карточка (Header, Title, Content, Footer) |
| `Badge` | Метка-бейдж с вариантами (CVA) |
| `BooleanBadge` | Бейдж true/false |
| `Table` | HTML-таблица со стилями (Header, Body, Row, Cell) |
| `Avatar` | Аватар с фоллбэком (Radix) |
| `Skeleton` | Плейсхолдер загрузки |
| `Separator` | Разделительная линия (Radix) |

### Оверлеи
| Компонент | Описание |
|-----------|----------|
| `Dialog` | Модальное окно (Radix) |
| `AlertDialog` | Диалог подтверждения (Radix) |
| `ConfirmDialog` | Упрощённый диалог подтверждения |
| `Sheet` | Боковая панель/drawer (Radix) |
| `Popover` | Всплывающее окно (Radix) |
| `Tooltip` | Подсказка при наведении (Radix) |

### Навигация
| Компонент | Описание |
|-----------|----------|
| `Tabs` | Вкладки (Radix) |
| `DropdownMenu` | Выпадающее меню (Radix) |
| `Command` | Палитра команд Cmd+K (cmdk) |
| `Collapsible` | Сворачиваемая секция (Radix) |

### Обратная связь
| Компонент | Описание |
|-----------|----------|
| `Alert` | Блок уведомления с 5 вариантами (CVA) |

### Прикладные
| Компонент | Описание |
|-----------|----------|
| `StatCard` | Карточка статистики (иконка + число + описание) |
| `StatsGrid` | Сетка для StatCard |
| `SearchBar` | Поле поиска с иконкой |
| `ResultsCounter` | Счётчик результатов |
| `LoadingState` | Состояние загрузки страницы |
| `EmptyState` | Состояние «нет данных» |
| `PageTitle` | Заголовок страницы |
| `HighlightText` | Подсветка совпадений поиска |

### Хуки
| Хук | Описание |
|-----|----------|
| `useIsMobile` | Определение мобильного устройства |
| `useMounted` | Флаг монтирования компонента |

### Утилиты
| Функция | Описание |
|---------|----------|
| `cn()` | Merge Tailwind классов (clsx + tailwind-merge) |

## Документация

Полная документация с live preview доступна:

```bash
cd docs && bun install && bun run dev
# → http://localhost:3333
```

## Структура

```
packages/ui/
├── src/                    ← исходники библиотеки
│   ├── components/         ← 36 компонентов
│   ├── hooks/              ← 2 хука
│   ├── lib/utils.ts        ← cn()
│   └── index.ts            ← единая точка экспорта
├── dist/                   ← собранный ESM + .d.ts
├── docs/                   ← сайт документации (Next.js)
│   └── src/app/docs/
│       └── components/     ← 33 страницы с live preview
├── package.json
├── tsup.config.ts
├── tsconfig.json
├── .npmrc
└── .gitignore
```

## Сборка

```bash
bun run build        # собрать библиотеку (tsup → dist/)
bun run dev          # watch-режим
bun run dev:docs     # документация на localhost:3333
bun run build:docs   # статический билд документации
```

## Публикация

```bash
git tag v0.3.0
git push origin v0.3.0   # → GitHub Actions опубликует в GitHub Packages
```

## Лицензия

MIT
