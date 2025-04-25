"use client"

// Components
import Logo from "@/components/atoms/Logo/Logo"

// Styles
import { StyledFooter, StyledWrapper } from "./Footer.styles"

function MainNav() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Logo />
      </StyledWrapper>
    </StyledFooter>
  )
}

export default MainNav
