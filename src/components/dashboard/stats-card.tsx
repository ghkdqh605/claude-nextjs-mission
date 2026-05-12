import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: React.ReactNode
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon,
}: StatsCardProps) {
  const isPositive = change >= 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span
            className={isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}
          >
            {isPositive ? (
              <TrendingUp className="inline size-3 mr-1" />
            ) : (
              <TrendingDown className="inline size-3 mr-1" />
            )}
            {isPositive ? '+' : ''}{change}%
          </span>
          {' '}
          {changeLabel}
        </p>
      </CardContent>
    </Card>
  )
}
