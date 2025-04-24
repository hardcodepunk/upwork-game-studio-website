// MUI
import { styled, Theme } from "@mui/material/styles"

export const StyledLogo = styled("div")(({ theme }: { theme: Theme }) => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  color: theme.palette.primary.main,
}))
