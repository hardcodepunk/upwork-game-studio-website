// Styles
import theme from "@/theme"
import { StyledLogo } from "./Logo.styles"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"

const Logo = () => {
  return (
    <StyledLogo>
      Full <ColoredElement color={theme.palette.secondary.light} fontSize={"24px"} content={"—"} />
      Clip
    </StyledLogo>
  )
}

export default Logo
