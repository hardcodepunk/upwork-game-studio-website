import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Image from "next/image"

export const SectionWrapper = styled(Box)(() => ({
  width: "100%",
  position: "relative",
}))

export const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
}))

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

export const StyledFeaturesWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
}))

export const StyledFeaturesGrid = styled("ul")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem 2rem",
  marginTop: "2rem",
}))

export const StyledImage = styled(Image)(() => ({
  position: "absolute",
  width: "90%",
  height: "auto",
  bottom: 0,
}))
