import Image from "next/image"
import { SectionWrapper, TextBlock, ButcherImage, StyledButton } from "./Splash.styles"
import { Box, Typography } from "@mui/material"

import Logo from "@/components/molecules/Logo/Logo"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import theme from "@/theme"

const SplashSection = () => {
  return (
    <SectionWrapper>
      <TextBlock>
        <Typography variant="h1">FULL CLIP</Typography>
        <Typography variant="h2">
          Design{" "}
          <ColoredElement font={theme.typography.fontFamily} color={theme.palette.secondary.main} content={"disrupt"} />{" "}
          repeat
        </Typography>
        <Box>
          <Typography variant="body1">
            <Logo /> isn’t here to blend in. We’re redefining the online slots game, one mechanic at a time. Players
            first. Innovation always. And giveaways that slap.
          </Typography>
          <StyledButton>
            <Image src="/icon/icon__discord.svg" alt="Discord" width={37} height={41} />
            Join
            <ColoredElement font={theme.typography.fontFamily} color={theme.palette.secondary.main} content={"the"} />
            fun
          </StyledButton>
        </Box>
      </TextBlock>
      <ButcherImage src="/img/butcher.png" alt="Illustration of the butcher" width={637} height={646.86} />
    </SectionWrapper>
  )
}

export default SplashSection
