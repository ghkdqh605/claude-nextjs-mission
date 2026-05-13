import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface ActivityItem {
  id: string
  user: {
    name: string
    initials: string
  }
  action: string
  target: string
  time: string
  type: 'create' | 'update' | 'delete' | 'comment'
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    user: { name: '김철수', initials: 'KC' },
    action: '생성함',
    target: '새로운 프로젝트',
    time: '2시간 전',
    type: 'create',
  },
  {
    id: '2',
    user: { name: '이영희', initials: 'LY' },
    action: '수정함',
    target: 'Dashboard',
    time: '4시간 전',
    type: 'update',
  },
  {
    id: '3',
    user: { name: '박민준', initials: 'PM' },
    action: '삭제함',
    target: '구 설정파일',
    time: '1일 전',
    type: 'delete',
  },
  {
    id: '4',
    user: { name: '최수현', initials: 'CS' },
    action: '댓글',
    target: 'Issue #42',
    time: '2일 전',
    type: 'comment',
  },
]

function getBadgeVariant(type: ActivityItem['type']) {
  switch (type) {
    case 'create':
      return 'default'
    case 'update':
      return 'secondary'
    case 'delete':
      return 'destructive'
    case 'comment':
      return 'outline'
    default:
      return 'default'
  }
}

function getActionLabel(type: ActivityItem['type']) {
  switch (type) {
    case 'create':
      return '생성'
    case 'update':
      return '수정'
    case 'delete':
      return '삭제'
    case 'comment':
      return '댓글'
    default:
      return '활동'
  }
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="mt-1">
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">
                  {activity.user.name}{' '}
                  <span className="text-muted-foreground font-normal">
                    {activity.action}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.target}
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                    {getActionLabel(activity.type)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
