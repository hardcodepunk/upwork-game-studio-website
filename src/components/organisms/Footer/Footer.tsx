"use client"

// Components
import Logo from "@/components/molecules/Logo/Logo"

// Styles
import { StyledFooter, StyledWrapper } from "./Footer.styles"
// import SocialIcons from "@/components/molecules/SocialIcons/SocialIcons"

function MainNav() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Logo />
        {/* <SocialIcons /> */}
      </StyledWrapper>
    </StyledFooter>
  )
}

export default MainNav
