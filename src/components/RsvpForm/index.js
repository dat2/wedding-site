import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'

const Label = styled.label`
  display: ${props => (props.hidden ? 'none' : 'block')};
`

const Text = styled.input.attrs({
  type: 'text',
})`
  display: inline-block;
`

const Email = styled.input.attrs({
  type: 'email',
})`
  display: inline-block;
`

const Radio = styled.input.attrs({
  type: 'radio',
})`
  display: inline-block;
`

const FieldText = ({ hidden, label, ...props }) => (
  <Label hidden={hidden}>
    {label}
    <Text {...props} />
  </Label>
)

const FieldEmail = ({ label, ...props }) => (
  <Label>
    {label}
    <Email {...props} />
  </Label>
)

const FieldRadio = ({ label, ...props }) => (
  <Label>
    <Radio {...props} />
    {label}
  </Label>
)

const range = (min, max) => Array.from(new Array(max - min), (_, i) => i + min)

const enhance = compose(
  withState('selected', 'setSelected', 0),
  withHandlers({
    onChange: props => event => {
      props.setSelected(parseInt(event.target.value, 10))
    },
  })
)

const RsvpForm = ({ selected, onChange }) => (
  <form
    name="rsvp"
    method="POST"
    data-netlify
    data-netlify-honeypot="bot-field"
  >
    <FieldText name="name" required={true} label="Name" />
    <FieldEmail name="email" required={true} label="Email Address" />
    <FieldRadio
      name="coming"
      required={true}
      value="true"
      label="Yes, I'll be there"
    />
    <FieldRadio
      name="coming"
      required={true}
      value="false"
      label="Sorry, can't make it"
    />
    <Label>
      How many guests will you be bringing?
      <select value={selected} onChange={onChange}>
        {range(0, 6).map(index => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
    </Label>
    <FieldText
      type="text"
      name="guest-one"
      label="Guest One"
      hidden={selected < 1}
    />
    <FieldText
      type="text"
      name="guest-two"
      label="Guest Two"
      hidden={selected < 2}
    />
    <FieldText
      type="text"
      name="guest-three"
      label="Guest Three"
      hidden={selected < 3}
    />
    <FieldText
      type="text"
      name="guest-four"
      label="Guest Four"
      hidden={selected < 4}
    />
    <FieldText
      type="text"
      name="guest-five"
      label="Guest Five"
      hidden={selected < 5}
    />
    <button>Submit</button>
  </form>
)

export default enhance(RsvpForm)
