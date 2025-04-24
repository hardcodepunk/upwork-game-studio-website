"use client"

// Components
import Logo from "@/components/atoms/Logo/Logo"

// Styles
import { StyledMainNav, StyledWrapper } from "./MainNav.styles"

function MainNav() {
  return (
    <StyledMainNav>
      <StyledWrapper>
        <Logo />
      </StyledWrapper>
    </StyledMainNav>
  )
}

export default MainNav
