import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Image from "next/image"

export const SectionWrapper = styled(Box)(() => ({
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  marginRight: "20vw",
  maxWidth: "100%",
  position: "relative",
  [`@media (max-width:950px)`]: {
    marginRight: "30vw",
  },
}))

export const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
}))

export const StyledImage = styled(Image)({
  position: "absolute",
  bottom: "10vh",
  right: "-25vw",
  height: "500px",
  width: "auto",
  [`@media (max-width:950px)`]: {
    right: "-40vw",
    bottom: "15vh",
  },
  [`@media (max-width:600px)`]: {
    height: "300px",
  },
})

export const StyledButton = styled(Button)(() => ({
  display: "flex",
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
  marginTop: "80px",
}))
