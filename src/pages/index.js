import React from 'react'
import styled from 'styled-components'
import { formatDistance } from 'date-fns'

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Text = styled.div`
  font-family: 'Cinzel';
`

const IndexPage = () => (
  <Centered>
    <Text>
      <span>Time Remaining: </span>
      <span>{formatDistance(new Date(), new Date(2018, 6, 15))}</span>
    </Text>
  </Centered>
)

export default IndexPage
