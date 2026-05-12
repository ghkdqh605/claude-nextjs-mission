'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'

export function SelectControlsForm() {
  const [category, setCategory] = useState<string>('')
  const [hasAgree, setHasAgree] = useState(false)
  const [isNotified, setIsNotified] = useState(true)
  const [volume, setVolume] = useState([50])

  return (
    <Card>
      <CardHeader>
        <CardTitle>선택 요소</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Select */}
          <div className="space-y-2">
            <Label htmlFor="category">카테고리</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="카테고리를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dev">개발</SelectItem>
                <SelectItem value="design">디자인</SelectItem>
                <SelectItem value="marketing">마케팅</SelectItem>
                <SelectItem value="sales">영업</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={hasAgree}
              onCheckedChange={(checked) => setHasAgree(checked as boolean)}
            />
            <Label htmlFor="terms" className="font-normal cursor-pointer">
              약관에 동의합니다
            </Label>
          </div>

          {/* Switch */}
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="font-normal">
              알림 수신
            </Label>
            <Switch
              id="notifications"
              checked={isNotified}
              onCheckedChange={setIsNotified}
            />
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <Label>볼륨: {volume[0]}%</Label>
            <Slider
              value={volume}
              onValueChange={setVolume}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* 상태 표시 */}
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">선택된 값:</p>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>카테고리: {category || '없음'}</li>
              <li>약관 동의: {hasAgree ? '✓' : '✗'}</li>
              <li>알림: {isNotified ? '활성' : '비활성'}</li>
              <li>볼륨: {volume[0]}%</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
