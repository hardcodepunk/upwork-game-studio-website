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
  StyledButtonWrapper,
} from "./ContactSection.styles"

import { StyledButton } from "@/components/atoms/ButtonCustom/ButtonCustom.styles"
import { Typography } from "@mui/material"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
    cv: null as File | null,
  })

  const [selectedFileName, setSelectedFileName] = useState("")
  const [fileError, setFileError] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const isPdfMime = file.type === "application/pdf"
      const isPdfExt = file.name.toLowerCase().endsWith(".pdf")
      const maxSize = 5 * 1024 * 1024

      if (!isPdfMime || !isPdfExt) {
        setFileError("Only PDF files with a .pdf extension are allowed.")
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

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!form.name || form.name.trim().length < 2) newErrors.name = "Name is required."
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email."
    if (!form.message || form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters."

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFeedback(null)

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (form.website.trim() !== "") {
      return setFeedback({ type: "error", message: "Bot detected." })
    }

    setIsSubmitting(true)

    const data = new FormData()
    data.append("name", form.name)
    data.append("email", form.email)
    data.append("message", form.message)
    if (!form.cv) data.append("cv", new File([], ""))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      })

      if (!res.ok) throw new Error("Submission failed")
      setFeedback({ type: "success", message: "Message sent successfully!" })
      setForm({ name: "", email: "", message: "", website: "", cv: null })
      setSelectedFileName("")
    } catch (err) {
      setFeedback({ type: "error", message: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <StyledContactWrapper>
      <StyledTitle>Contact Us / Spontaneous Candidacy</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name}
        />

        <StyledInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.message}
          helperText={errors.message}
        />

        <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <StyledButtonWrapper>
          <StyledFileInputWrapper>
            <HiddenFileInput id="cv-upload" type="file" accept="application/pdf" onChange={handleFileChange} />
            <FileLabel htmlFor="cv-upload">Upload CV (PDF only)</FileLabel>
            {selectedFileName && <FileName>{selectedFileName}</FileName>}
            {fileError && <FileError>{fileError}</FileError>}
          </StyledFileInputWrapper>

          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </StyledButton>
        </StyledButtonWrapper>

        {feedback && (
          <Typography
            sx={{
              color: feedback.type === "success" ? "green" : "#f44336",
              fontSize: "14px",
              marginTop: "0.5rem",
            }}
          >
            {feedback.message}
          </Typography>
        )}
      </StyledForm>
    </StyledContactWrapper>
  )
}

export default ContactSection
