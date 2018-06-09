import React from 'react'
import styled from 'styled-components'

const FormGroup = styled.div`
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

const FieldText = ({ id, label, ...props }) => (
  <FormGroup>
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


const RsvpForm = ({ selected, onChange }) => (
  <form
    name="rsvp"
    method="post"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input hidden id="form-name" value="rsvp" name="form-name" />
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
    {['one', 'two', 'three', 'four', 'five'].map(label => (
      <FieldText
        key={label}
        id={`guest-${label}`}
        name={`guest-${label}`}
        label={`Guest ${label[0].toUpperCase()}${label.substring(1)}`}
        placeholder="Guest"
      />
    ))}
    <button className="btn btn-primary">Submit</button>
  </form>
)

export default RsvpForm
