import React from 'react'
import styled from 'styled-components'
import { compose, lifecycle, withState } from 'recompose'
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
} from 'date-fns'

const Text = styled.div`
  font-family: 'Cinzel';
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const CenteredVertically = Centered.extend`
  flex-direction: column;
`

const Time = styled.div`
  font-size: 48px;
`

const Label = styled.div`
  margin-top: 10px;
`

const TimeBlock = ({ time, label }) => (
  <Text>
    <CenteredVertically>
      <Time>{time}</Time>
      <Label>
        {label}
        {time > 1 ? 's' : ''}
      </Label>
    </CenteredVertically>
  </Text>
)

const Spacer = Text.extend`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 48px;
`

const IndexPage = ({
  remaining: { months, weeks, days, hours, minutes, seconds },
}) => (
  <Centered>
    <TimeBlock time={months} label="month" />
    <Spacer>:</Spacer>
    <TimeBlock time={weeks} label="week" />
    <Spacer>:</Spacer>
    <TimeBlock time={days} label="day" />
    <Spacer>:</Spacer>
    <TimeBlock time={hours} label="hour" />
    <Spacer>:</Spacer>
    <TimeBlock time={minutes} label="minute" />
    <Spacer>:</Spacer>
    <TimeBlock time={seconds} label="second" />
  </Centered>
)

function calculateTimeRemaining(end = new Date(2018, 6, 15)) {
  const now = new Date()
  const monthsLeft = differenceInMonths(end, now)

  const nowPlusMonths = addMonths(now, monthsLeft)
  const weeksLeft = differenceInWeeks(end, nowPlusMonths)

  const nowPlusMonthsPlusWeeks = addWeeks(nowPlusMonths, weeksLeft)
  const daysLeft = differenceInDays(end, nowPlusMonthsPlusWeeks)

  const nowPlusMonthsPlusWeeksPlusDays = addDays(
    nowPlusMonthsPlusWeeks,
    daysLeft
  )
  const hoursLeft = differenceInHours(end, nowPlusMonthsPlusWeeksPlusDays)

  const nowPlusMonthsPlusWeeksPlusDaysPlusHours = addHours(
    nowPlusMonthsPlusWeeksPlusDays,
    hoursLeft
  )
  const minutesLeft = differenceInMinutes(
    end,
    nowPlusMonthsPlusWeeksPlusDaysPlusHours
  )

  const nowPlusMonthsPlusWeeksPlusDaysPlusHoursPlusMinutes = addMinutes(
    nowPlusMonthsPlusWeeksPlusDaysPlusHours,
    minutesLeft
  )
  const secondsLeft = differenceInSeconds(
    end,
    nowPlusMonthsPlusWeeksPlusDaysPlusHoursPlusMinutes
  )

  return {
    months: monthsLeft,
    weeks: weeksLeft,
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft,
    seconds: secondsLeft,
  }
}

const enhance = compose(
  withState('remaining', 'setRemaining', calculateTimeRemaining()),
  lifecycle({
    componentDidMount() {
      this.interval = setInterval(() => {
        this.props.setRemaining(calculateTimeRemaining())
      }, 1000)
    },
    componentWillUnmount() {
      clearInterval(this.interval)
    },
  })
)

export default enhance(IndexPage)
