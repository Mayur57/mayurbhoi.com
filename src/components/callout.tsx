import React from 'react'
import { AlertCircle, AlertTriangle, BookOpen, Info } from 'lucide-react'

type CalloutType = 'info' | 'alert' | 'warning' | 'comment'

type ColorScheme = {
  bg: string
  border: string
  text: string
  icon: string
}

type VariantColors = {
  light: ColorScheme
  dark: ColorScheme
}

type Variant = {
  icon: React.ElementType
  colors: VariantColors
}

type Variants = {
  [K in CalloutType]: Variant
}

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const variants: Variants = {
  info: {
    icon: Info,
    colors: {
      light: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-900/80',
        icon: 'text-indigo-500',
      },
      dark: {
        bg: 'dark:bg-indigo-950/40',
        border: 'dark:border-indigo-800/60',
        text: 'dark:text-indigo-100/60',
        icon: 'dark:text-indigo-400',
      },
    },
  },
  alert: {
    icon: AlertCircle,
    colors: {
      light: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-900/80',
        icon: 'text-red-500',
      },
      dark: {
        bg: 'dark:bg-red-950/40',
        border: 'dark:border-red-400/30',
        text: 'dark:text-red-100/60',
        icon: 'dark:text-red-400',
      },
    },
  },
  warning: {
    icon: AlertTriangle,
    colors: {
      light: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-900/80',
        icon: 'text-orange-500',
      },
      dark: {
        bg: 'dark:bg-orange-950/40',
        border: 'dark:border-orange-800/60',
        text: 'dark:text-orange-100/60',
        icon: 'dark:text-orange-400',
      },
    },
  },
  comment: {
    icon: BookOpen,
    colors: {
      light: {
        bg: 'bg-neutral-200/60',
        border: 'border-neutral-500/30',
        text: 'text-neutral-900/80',
        icon: 'text-neutral-500',
      },
      dark: {
        bg: 'dark:bg-neutral-800',
        border: 'dark:border-neutral-700',
        text: 'dark:text-neutral-100/60',
        icon: 'dark:text-neutral-400',
      },
    },
  },
}

function Callout({ type = 'info', title, children }: CalloutProps) {
  const variant = variants[type]
  const Icon = variant.icon
  const colors = variant.colors

  return (
    <div
      className={`
      not-prose px-4 py-3 rounded-lg mb-8
      ${colors.light.bg} ${colors.dark.bg}
      ${colors.light.border} ${colors.dark.border}
      border mt-4
    `}>
      <div className='flex flex-row items-center justify-start gap-2'>
        <Icon size={14} className={`${colors.light.icon} ${colors.dark.icon}`} />
          {title && (
              <div className={`font-medium text-sm ${colors.light.text} ${colors.dark.text}`}>{title}</div>
            )}
            </div>
          <div className={`text-sm ${colors.light.text} ${colors.dark.text}`}>{children}</div>
    </div>
  )
}

export default Callout
