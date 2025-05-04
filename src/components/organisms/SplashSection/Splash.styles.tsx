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
  [`@media (max-width:1100px)`]: {
    marginRight: "30vw",
  },
  [`@media (max-width:800px)`]: {
    alignItems: "flex-start",
    paddingTop: "15vh",
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
  [`@media (max-width:1100px)`]: {
    right: "-40vw",
    bottom: "15vh",
  },
  [`@media (max-width:800px)`]: {
    height: "350px",
  },
  [`@media (max-width:600px)`]: {
    height: "300px",
    bottom: "10vh",
  },
  [`@media (max-width:500px)`]: {
    height: "240px",
  },
})

export const StyledButton = styled(Button)(({ theme }) => ({
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
  ":hover": {
    border: `4px solid ${theme.palette.secondary.main}`,
  },
}))
