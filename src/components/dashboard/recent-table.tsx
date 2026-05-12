import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface TableRowData {
  id: string
  name: string
  status: 'active' | 'pending' | 'inactive'
  category: string
  date: string
  progress: number
}

const TABLE_DATA: TableRowData[] = [
  {
    id: '1',
    name: '웹사이트 개선',
    status: 'active',
    category: '개발',
    date: '2025-05-10',
    progress: 75,
  },
  {
    id: '2',
    name: '모바일 앱 출시',
    status: 'pending',
    category: '마케팅',
    date: '2025-05-08',
    progress: 40,
  },
  {
    id: '3',
    name: '데이터베이스 최적화',
    status: 'active',
    category: '인프라',
    date: '2025-05-05',
    progress: 90,
  },
  {
    id: '4',
    name: '레거시 시스템 통합',
    status: 'inactive',
    category: '개발',
    date: '2025-04-28',
    progress: 25,
  },
]

function getStatusBadge(status: TableRowData['status']) {
  const variants: Record<string, 'default' | 'secondary' | 'outline'> = {
    active: 'default',
    pending: 'secondary',
    inactive: 'outline',
  }

  const labels: Record<string, string> = {
    active: '진행 중',
    pending: '대기 중',
    inactive: '완료',
  }

  return (
    <Badge variant={variants[status]}>
      {labels[status]}
    </Badge>
  )
}

export function RecentTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 프로젝트</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>프로젝트</TableHead>
              <TableHead>분류</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>진행도</TableHead>
              <TableHead className="text-right">생성일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TABLE_DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{getStatusBadge(row.status)}</TableCell>
                <TableCell className="w-24">
                  <Progress value={row.progress} className="h-2" />
                </TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
