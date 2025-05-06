import { styled } from "@mui/material/styles"
import { Box, TextField, Typography } from "@mui/material"

export const StyledContactWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  color: theme.palette.common.white,
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontWeight: 800,
  fontSize: "24px",
  marginBottom: "1rem",
  color: theme.palette.common.white,
}))

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const StyledInput = styled(TextField)(() => ({
  backgroundColor: "#1a1a1a",
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#555",
    },
    "&:hover fieldset": {
      borderColor: "#777",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#aaa",
    },
  },
}))

export const StyledTextArea = styled(StyledInput)({
  textarea: {
    color: "#fff",
  },
})

// File Upload Styling
export const StyledFileInputWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const HiddenFileInput = styled("input")({
  display: "none",
})

export const FileLabel = styled("label")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  alignItems: "center",
  backgroundColor: "#141414",
  color: "white",
  textTransform: "uppercase",
  border: "4px solid #FFFFFF",
  borderRadius: "10px",
  margin: "40px 0 20px",
  display: "inline-flex",
  alignSelf: "flex-start",
  cursor: "pointer",
  transition: "border-color 0.3s ease",
  padding: "1rem 1.5rem",
  fontSize: "16px",
  "&:hover": {
    border: `4px solid ${theme.palette.secondary.main}`,
  },
  "@media (max-width:950px)": {
    gap: "0.25rem",
    padding: "0.25rem 0.75rem",
    fontSize: "16px",
    border: "2px solid #FFFFFF",
    "&:hover": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

export const FileError = styled(Typography)({
  color: "#f44336",
  fontSize: "14px",
})

export const FileName = styled(Typography)({
  color: "#ccc",
  fontSize: "14px",
})
