import React from 'react'

import { useForm } from 'react-hook-form'
import { ErrorMessage, Form, Input } from './components'
import PrimaryButton from '../Button/PrimaryButton'

// @todo: @darkmana9 тавтология, импорт будет ContactForm/ContactForm, логично сделать index.js и импорт просто ContactForm

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Your name
        <Input type="text"
               name="first name"
               placeholder="First name"
               {...register('firstName', {
                 required: true,
                 pattern: /[a-z]/,
               })}/>
      </label>
      <label>
        Your surname
        <Input type="text"
               name="last name"
               placeholder="Last name"
               {...register('lastName', {
                 pattern: /[a-z]/,
               })}/>
      </label>
      <label>
        Your email
        <Input type="text"
               name="email"
               placeholder="Email"
               {...register('email', {
                 required: true,
                 pattern: /^[a-z0-9._%+-]+@[a-z0-9.=]+\.[a-z]{2,4}$/,
               })}/>
      </label>
      <label>
        Subject
        <Input type="text"
               name="text"
               placeholder="Write something"
               {...register('text', {
                 required: true,
               })}/>
      </label>
      <PrimaryButton type="submit">Send</PrimaryButton>
      {errors?.firstName &&
      <ErrorMessage>Please, enter your name</ErrorMessage>}
      {errors?.email &&
      <ErrorMessage>Please, enter a valid email</ErrorMessage>}
      {errors?.text &&
      <ErrorMessage>Please, enter a subject</ErrorMessage>}
    </Form>
  )
}

export default ContactForm