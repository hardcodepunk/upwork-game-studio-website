import { styled } from "@mui/material/styles"
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
