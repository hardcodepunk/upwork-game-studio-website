import { styled } from "@mui/material/styles"
import Image from "next/image"

export const StyledFeatureItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: theme.palette.common.white,
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "14px",
}))

export const StyledIcon = styled(Image)({
  width: 24,
  height: 24,
})

export const StyledText = styled("span")({})
