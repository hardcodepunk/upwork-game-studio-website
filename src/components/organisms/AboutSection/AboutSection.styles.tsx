import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Image from "next/image"

export const SectionWrapper = styled(Box)(() => ({
  width: "100%",
  position: "relative",
  height: "80vh",
  "@media (max-width:950px)": {
    height: "auto",
    padding: "0 0 100px",
  },
}))

export const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
}))

export const StyledButton = styled(Button)(() => ({
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
  display: "inline-flex",
  alignSelf: "flex-start",
  "@media (max-width:950px)": {
    gap: "0.25rem",
    padding: "0.25rem 0.75rem",
    fontSize: "16px",
    border: "3px solid #FFFFFF",
    marginTop: "40px",
    img: {
      width: 20,
      height: "auto",
    },
  },
}))

export const StyledFeaturesWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "30%",
  [`@media (max-width:950px)`]: {
    paddingLeft: "0",
  },
}))

export const StyledFeaturesGrid = styled("ul")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.5rem 1rem",
  marginTop: "2rem",
  [`@media (max-width:950px)`]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}))

export const StyledImage = styled(Image)(() => ({
  position: "absolute",
  width: "90%",
  height: "auto",
  bottom: 0,
  [`@media (max-width:950px)`]: {
    transform: "scaleX(-1)",
  },
}))
