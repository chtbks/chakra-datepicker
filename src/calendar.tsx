import { Box, Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { isAfter } from 'date-fns'
import type { CalendarDate } from './useCalendar'
import { Month } from './month'
import { useCalendar } from './useCalendar'
import { Controls } from './control'

export type CalendarValues = {
  start?: CalendarDate
  end?: CalendarDate
}

export type Calendar = {
  values: CalendarValues
  onSelectStartDate: (date: CalendarDate) => void
  onSelectEndDate: (date: CalendarDate) => void
}

export function Calendar({
  values,
  onSelectStartDate,
  onSelectEndDate,
}: Calendar) {
  const {
    startDateDays,
    endDateDays,
    startDate,
    endDate,
    nextMonth,
    prevMonth,
  } = useCalendar({
    start: values?.start || new Date(),
  })

  const styles = useMultiStyleConfig('Calendar', {})

  const selectDateHandler = (date: CalendarDate) => {
    if (values.start && isAfter(date, values.start)) {
      return onSelectEndDate(date)
    }

    return onSelectStartDate(date)
  }

  return (
    <Box sx={styles.calendar}>
      <Controls prevMonth={prevMonth} nextMonth={nextMonth} />

      <Grid sx={styles.months}>
        <Month
          startSelectedDate={values?.start}
          endSelectedDate={values?.end}
          values={values}
          date={startDate}
          days={startDateDays}
          onSelectDate={selectDateHandler}
        />
        <Month
          startSelectedDate={values?.start}
          endSelectedDate={values?.end}
          values={values}
          date={endDate}
          days={endDateDays}
          onSelectDate={selectDateHandler}
        />
      </Grid>
    </Box>
  )
}
