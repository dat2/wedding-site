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

const IndexPage = ({ remaining: { days, hours, minutes, seconds } }) => (
  <Centered>
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
  const daysLeft = differenceInDays(end, now)

  const nowPlusDays = addDays(now, daysLeft)
  const hoursLeft = differenceInHours(end, nowPlusDays)

  const nowPlusDaysPlusHours = addHours(nowPlusDays, hoursLeft)
  const minutesLeft = differenceInMinutes(end, nowPlusDaysPlusHours)

  const nowPlusDaysPlusHoursPlusMinutes = addMinutes(
    nowPlusDaysPlusHours,
    minutesLeft
  )
  const secondsLeft = differenceInSeconds(end, nowPlusDaysPlusHoursPlusMinutes)

  return {
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
