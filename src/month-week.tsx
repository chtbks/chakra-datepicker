import * as React from 'react'
import { Grid, Text, useMultiStyleConfig } from '@chakra-ui/react'
import { addDays, format, startOfWeek } from './dateUtils'
import { CalendarContext } from './context'
import { CalendarMonthStyles } from './types'

type Weekdays = {
  weekdayFormat?: string
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

function weekdays({ weekdayFormat = 'dd' }: Weekdays) {
  const start = startOfWeek(new Date())
  return [...Array(7).keys()].map(i => format(addDays(start, i), weekdayFormat))
}

export function CalendarWeek() {
  const styles = useMultiStyleConfig('CalendarMonth', {}) as CalendarMonthStyles
  const { weekdayFormat } = React.useContext(CalendarContext)
  const week = weekdays({ weekdayFormat })

  return (
    <Grid sx={styles.week}>
      {week.map(weekday => (
        <Text key={weekday} sx={styles.weekday}>
          {weekday}
        </Text>
      ))}
    </Grid>
  )
}
