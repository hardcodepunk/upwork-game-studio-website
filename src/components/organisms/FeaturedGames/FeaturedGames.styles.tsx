// MUI
import { styled } from "@mui/material/styles"
import { Box, IconButton } from "@mui/material"

export const StyledWrapper = styled("section")({
  color: "#fff",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  margin: "10vh 0",
})

export const StyledHeader = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-bebas), Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "normal",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.common.white,
  marginBottom: "1rem",
}))

export const StyledScroll = styled(Box)({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  overflowY: "hidden",
  gap: "1.5rem",
  paddingBottom: "0.5rem",
  scrollBehavior: "smooth",
  cursor: "grab",

  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
})

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}))
