import { styled } from "@mui/material/styles"
import { Box, IconButton } from "@mui/material"

export const StyledSection = styled("section")({
  marginTop: "4rem",
})

export const StyledHeader = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontSize: "24px",
  fontWeight: 800,
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.common.white,
  marginBottom: "1rem",
}))

export const StyledScroll = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: "1.5rem",
  paddingBottom: "0.5rem",
})

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}))
