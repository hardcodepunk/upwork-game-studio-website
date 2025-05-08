// Next
import Image from "next/image"

// MUI
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const SectionWrapper = styled(Box)(() => ({
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  "@media (max-width:950px)": {
    height: "auto",
    padding: "70px 0",
  },
}))

export const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
}))

export const StyledImage = styled(Image)({
  flex: 1,
  maxWidth: "100%",
  height: "auto",
  [`@media (max-width:1100px)`]: {
    display: "none",
  },
})
