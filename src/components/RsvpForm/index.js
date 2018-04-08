import React from 'react'
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

const transform = ({ guests, ...fields }) => ({
  ...fields,
  ...guests.reduce(
    (acc, guest, index) => Object.assign(acc, { [`guest.${index}`]: guest }),
    {}
  ),
})

const formEncode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const onSubmit = (values, { setSubmitting, setErrors }) =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formEncode({ 'form-name': 'rsvp', ...transform(values) }),
  })
    .then(() => {
      setSubmitting(false)
    })
    .catch(e => {
      console.error(e)
      setSubmitting(false)
      setErrors({})
    })

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

RsvpForm.defaultProps = {
  name: '',
  email: '',
  coming: false,
  guests: [],
}

export default RsvpForm
