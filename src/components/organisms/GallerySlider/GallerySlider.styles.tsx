// MUI
import { styled } from "@mui/material/styles"
import { Box, IconButton } from "@mui/material"

export const StyledSliderWrapper = styled(Box)({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  aspectRatio: "16 / 6",
  margin: "0 auto 100px",
  maxWidth: "1440px",
  "@media (max-width:950px)": {
    aspectRatio: "16 / 9",
  },
})

export const StyledImageContainer = styled("div")({
  display: "flex",
  transition: "transform 1s ease-in-out",
  height: "100%",
  width: "100%",
})

export const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "bottom",
  flexShrink: 0,
  opacity: 0.5,
})

export const ChevronOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "none",
})

export const ChevronButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.4)",
  margin: "0 1rem",
  pointerEvents: "auto",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#000",
  },
}))

export const StyledImageSlide = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  flexShrink: 0,
})

export const StyledSlideContent = styled(Box)(() => ({
  position: "absolute",
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  color: "#fff",
  maxWidth: "80%",
  zIndex: 2,
}))
