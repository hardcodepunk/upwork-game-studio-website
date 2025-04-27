import { styled } from "@mui/material/styles"
import { IColoredElement } from "./ColoredElement.props"

export const StyledColoredElement = styled("span")<IColoredElement>(({ fontSize, color, font }) => ({
  fontFamily: font || "var(--font-protest), Arial, sans-serif",
  fontSize: fontSize,
  fontWeight: 800,
  textTransform: "uppercase",
  color: color,
}))
