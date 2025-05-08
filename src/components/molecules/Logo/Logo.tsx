// Theme
import theme from "@/theme"

// Styles
import { StyledLogo } from "./Logo.styles"

// Components
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"

const Logo = () => {
  return (
    <StyledLogo>
      Full <ColoredElement color={theme.palette.secondary.main} fontSize={"24px"} content={"—"} />
      Clip
    </StyledLogo>
  )
}

export default Logo
