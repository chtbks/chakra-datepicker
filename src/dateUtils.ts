import dayjs from 'dayjs'

import { CalendarDate } from './types'

export function isSameDay(date1: CalendarDate, date2: CalendarDate) {
  return dayjs(date1).isSame(date2, 'day')
}

export function isBefore(date1: CalendarDate, date2: CalendarDate) {
  return dayjs(date1).isBefore(date2)
}

export function isAfter(date1: CalendarDate, date2: CalendarDate) {
  return dayjs(date1).isAfter(date2)
}

export function startOfMonth(date: CalendarDate) {
  return dayjs(date).startOf('month').toDate()
}

export function endOfMonth(date: CalendarDate) {
  return dayjs(date).endOf('month').toDate()
}

export function isWeekend(date: CalendarDate) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6
}

export function eachDayOfInterval({
  start,
  end,
}: {
  start: CalendarDate
  end: CalendarDate
}) {
  const dayDiff = dayjs(end).diff(dayjs(start), 'day')
  return Array.from({ length: Math.abs(dayDiff) + 1 }, (_, i) =>
    dayjs(end).isAfter(start)
      ? dayjs(start).add(i, 'day').toDate()
      : dayjs(start).subtract(i, 'day').toDate()
  )
}

export function addMonths(date: CalendarDate, amount: number) {
  return dayjs(date).add(amount, 'month').toDate()
}

export function subMonths(date: CalendarDate, amount: number) {
  return dayjs(date).subtract(amount, 'month').toDate()
}

export function endOfWeek(date: CalendarDate) {
  return dayjs(date).endOf('week').toDate()
}

export function startOfWeek(date: CalendarDate) {
  return dayjs(date).startOf('week').toDate()
}

export function isSameMonth(date1: CalendarDate, date2: CalendarDate) {
  return dayjs(date1).isSame(date2, 'month')
}

export function isValid(date?: CalendarDate) {
  if (!date) return false
  return dayjs(date).isValid()
}

export function format(date: CalendarDate, formatString: string) {
  return dayjs(date).format(formatString)
}

export function addDays(date: CalendarDate, amount: number) {
  return dayjs(date).add(amount, 'day').toDate()
}

export function subDays(date: CalendarDate, amount: number) {
  return dayjs(date).subtract(amount, 'day').toDate()
}
