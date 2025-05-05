"use client"

import { useState } from "react"
import { StyledContactWrapper, StyledForm, StyledInput, StyledTextArea, StyledTitle } from "./ContactSection.styles"
import { StyledButton } from "@/components/atoms/ButtonCustom/ButtonCustom.styles"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // to do — still need to connect
    console.log("Send message:", form)
    alert("Message sent (not really, this is just a demo)")
  }

  return (
    <StyledContactWrapper>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput label="Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
        <StyledInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <StyledTextArea
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={5}
          fullWidth
          required
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledContactWrapper>
  )
}

export default ContactSection
