import React from 'react'
import Link from 'gatsby-link'
import { Field, FieldArray, Form, Formik } from 'formik'
import styled from 'styled-components'
import { withHandlers } from 'recompose'
import yup from 'yup'

const Label = styled.label`
  display: block;
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

const FieldText = ({ field, form, label, ...props }) => (
  <Label>
    {label}
    <Text {...field} {...props} />
  </Label>
)

const FieldEmail = ({ field, form, label, ...props }) => (
  <Label>
    {label}
    <Email {...field} {...props} />
  </Label>
)

const FieldRadio = ({
  field: { value, ...rest },
  form,
  label,
  valueId,
  ...props
}) => (
  <Label>
    <Radio checked={value === valueId} value={valueId} {...rest} {...props} />
    {label}
  </Label>
)

const range = (min, max) => Array.from(new Array(max - min), (_, i) => i + min)

const UnwrappedFieldGuests = ({ onSelectChange, name, form: { values } }) => (
  <div>
    <p>How many guests will you be bringing?</p>
    <select onChange={onSelectChange}>
      {range(0, 6).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
    {values[name].map((guest, i) => (
      <Field
        key={i}
        name={`${name}.${i}`}
        component={FieldText}
        label="Guest"
      />
    ))}
  </div>
)

const enhance = withHandlers({
  onSelectChange: props => event => {
    const oldGuests = props.form.values[props.name]
    const newNumGuests = event.target.value
    if (oldGuests.length < newNumGuests) {
      const newGuests = range(oldGuests.length, newNumGuests).fill('')
      props.form.setFieldValue(props.name, oldGuests.concat(newGuests))
    } else {
      props.form.setFieldValue(props.name, oldGuests.slice(0, newNumGuests))
    }
  },
})

const FieldGuests = enhance(UnwrappedFieldGuests)

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  coming: yup.boolean().required(),
  guests: yup
    .array()
    .of(yup.string())
    .min(0)
    .max(5),
})

const formEncode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const onSubmit = async (values, { setSubmitting, setErrors }) => {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formEncode({ 'form-name': 'rsvp', ...values }),
    })
  } catch (e) {
    console.error(e)
    setErrors({})
  }
  setSubmitting(false)
}

const RsvpForm = initialValues => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    render={({ isValid, errors, touched, isSubmitting }) => (
      <Form
        name="rsvp"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Field name="name" required={true} component={FieldText} label="Name" />
        <Field
          name="email"
          required={true}
          component={FieldEmail}
          label="Email Address"
        />
        <Field
          name="coming"
          required={true}
          component={FieldRadio}
          label="Yes, I'll be there"
          valueId="true"
        />
        <Field
          name="coming"
          required={true}
          component={FieldRadio}
          label="Sorry, can't make it"
          valueId="false"
        />
        <FieldArray name="guests" component={FieldGuests} />
        <button disabled={isSubmitting}>Submit</button>
      </Form>
    )}
  />
)

const IndexPage = () => (
  <div>
    <p>hello world</p>
    <p>nick is wedding pirave on july 15, 2018</p>
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TuAfPvT1IkRR2qwJvcxUpQ&key=AIzaSyByKiSswQhQtBA-amrIC7Oqvv2vJuUeMy4"
      allowFullScreen
    />
    <RsvpForm name="" email="" coming={false} guests={[]} />
  </div>
)

export default IndexPage
