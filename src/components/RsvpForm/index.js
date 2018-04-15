import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'

const FormGroup = styled.div`
  display: ${props => (props.hidden ? 'none' : 'block')};
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  line-height: 1.5em;
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
`

const Radio = styled.input.attrs({
  type: 'radio',
})`
  display: inline-block;
  margin-right: 8px;
`

const FieldText = ({ hidden, id, label, ...props }) => (
  <FormGroup hidden={hidden}>
    <Label htmlFor={id}>{label}</Label>
    <Input type="text" id={id} {...props} />
  </FormGroup>
)

const FieldEmail = ({ id, label, ...props }) => (
  <FormGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input type="email" id={id} {...props} />
  </FormGroup>
)

const FieldRadio = ({ id, label, ...props }) => (
  <FormGroup>
    <Radio id={id} {...props} />
    <label htmlFor={id}>{label}</label>
  </FormGroup>
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
    <FieldText
      id="name"
      name="name"
      required={true}
      label="Name"
      placeholder="Your name"
    />
    <FieldEmail
      id="email"
      name="email"
      required={true}
      label="Email Address"
      placeholder="example@example.com"
    />
    <FormGroup>
      <Label>Will you be coming?</Label>
    </FormGroup>
    <FieldRadio
      id="coming-true"
      name="coming"
      required={true}
      value="true"
      label="Yes, I'll be there"
    />
    <FieldRadio
      id="coming-false"
      name="coming"
      required={true}
      value="false"
      label="Sorry, can't make it"
    />
    <FormGroup>
      <Label>How many guests will you be bringing?</Label>
      <select value={selected} onChange={onChange}>
        {range(0, 6).map(index => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
    </FormGroup>
    {['one', 'two', 'three', 'four', 'five'].map((label, index) => (
      <FieldText
        key={label}
        id={`guest-${label}`}
        name={`guest-${label}`}
        label={`Guest ${label[0].toUpperCase()}${label.substring(1)}`}
        placeholder="Guest"
        hidden={selected < index + 1}
      />
    ))}
    <button className="btn btn-primary">Submit</button>
  </form>
)

export default enhance(RsvpForm)
