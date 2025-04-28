import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledFeatureItem = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
}))

export const StyledText = styled(Typography)({})
