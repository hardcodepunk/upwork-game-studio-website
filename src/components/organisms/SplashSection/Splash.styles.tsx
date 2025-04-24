import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Image from "next/image"

export const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  padding: "4rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
}))

export const TextBlock = styled("div")(({ theme }) => ({
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  "& h1": {
    fontSize: "64px",
    lineHeight: 1,
    fontWeight: 800,
    fontFamily: '"Protest Guerrilla", Arial, sans-serif',
  },
  "& h2": {
    fontSize: "32px",
    color: theme.palette.error.main,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  "& h3": {
    fontSize: "16px",
    lineHeight: 1.6,
    fontWeight: 400,
  },
}))

export const ButcherImage = styled(Image)({
  maxWidth: "100%",
  height: "auto",
})

export const JoinButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  border: "2px solid white",
  borderRadius: "9999px",
  backgroundColor: "transparent",
  color: "white",
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "14px",
  "& img": {
    width: "20px",
    height: "20px",
  },
}))
