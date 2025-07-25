// Next
import Image from "next/image"

// MUI
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const SectionWrapper = styled(Box)(() => ({
  width: "100%",
  position: "relative",
  height: "80vh",
  button: {
    alignSelf: "flex-end",
  },
  "@media (max-width:950px)": {
    height: "auto",
    padding: "0 0 250px",
    button: {
      alignSelf: "flex-start",
    },
  },
}))

export const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
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
  width: "60%",
  height: "auto",
  bottom: 0,
  transform: "scaleX(-1)",
  [`@media (max-width:950px)`]: {
    transform: "scaleX(1)",
    right: 0,
    width: "100%",
  },
}))
