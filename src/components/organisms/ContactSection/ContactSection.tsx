"use client"

import { useState } from "react"
import {
  StyledContactWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledTitle,
  StyledFileInputWrapper,
  HiddenFileInput,
  FileLabel,
  FileError,
  FileName,
} from "./ContactSection.styles"
import { StyledButton } from "@/components/atoms/ButtonCustom/ButtonCustom.styles"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    cv: null as File | null,
  })

  const [selectedFileName, setSelectedFileName] = useState("")
  const [fileError, setFileError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Hook up to backend/mail service
    console.log("Send message:", form)
    alert("Message sent (demo)")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const isPdf = file.type === "application/pdf"
      const maxSize = 5 * 1024 * 1024

      if (!isPdf) {
        setFileError("Only PDF files are allowed.")
        setSelectedFileName("")
        setForm(prev => ({ ...prev, cv: null }))
      } else if (file.size > maxSize) {
        setFileError("File size must be under 5MB.")
        setSelectedFileName("")
        setForm(prev => ({ ...prev, cv: null }))
      } else {
        setFileError("")
        setSelectedFileName(file.name)
        setForm(prev => ({ ...prev, cv: file }))
      }
    }
  }

  return (
    <StyledContactWrapper>
      <StyledTitle>Contact Us / Spontaneous Candidacy</StyledTitle>
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

        <StyledFileInputWrapper>
          <HiddenFileInput id="cv-upload" type="file" accept="application/pdf" onChange={handleFileChange} />
          <FileLabel htmlFor="cv-upload">Upload CV (PDF only)</FileLabel>
          {selectedFileName && <FileName>{selectedFileName}</FileName>}
          {fileError && <FileError>{fileError}</FileError>}
        </StyledFileInputWrapper>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledContactWrapper>
  )
}

export default ContactSection
