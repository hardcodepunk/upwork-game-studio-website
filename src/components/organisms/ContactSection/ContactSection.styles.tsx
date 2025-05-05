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
  label: {
    color: "#fff",
  },
})
