// MUI
import { styled } from "@mui/material"

export const StyledLine = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  textTransform: "uppercase",
  color: theme.palette.secondary.main,
}))
