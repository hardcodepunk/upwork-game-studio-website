// MUI
import { Button, styled } from "@mui/material"

export const StyledButton = styled(Button)(({ theme }) => ({
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "transparent",
  color: "white",
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "28px",
  border: "4px solid #FFFFFF",
  borderRadius: "10px",
  margin: "40px 0 20px",
  display: "inline-flex",
  alignSelf: "flex-start",
  background: "#141414",
  ":hover": {
    border: `4px solid ${theme.palette.secondary.main}`,
  },
  "@media (max-width:950px)": {
    gap: "0.25rem",
    padding: "0.25rem 0.75rem",
    fontSize: "16px",
    border: "3px solid #FFFFFF",
    margin: "20px 0 10px",
    img: {
      width: 20,
      height: "auto",
    },
    ":hover": {
      border: `3px solid ${theme.palette.secondary.main}`,
    },
  },
}))
