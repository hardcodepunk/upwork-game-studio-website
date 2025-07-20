// Styles
import { SectionWrapper, TextBlock, StyledImage } from "./Splash.styles"

// MUI
import { Box, Typography } from "@mui/material"

// Components
import Logo from "@/components/molecules/Logo/Logo"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

// Theme
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
            <Logo /> isn’t here to blend in. We’re redefining the online game scene, one mechanic at a time. Players
            first. Innovation always. And giveaways that slap.
          </Typography>
          <ButtonCustom
            imgSrc={"/icon/icon__discord.svg"}
            altText="Discord"
            imgHeight={41}
            imgWidth={37}
            label="Join the fun"
          />
        </Box>
      </TextBlock>
      <StyledImage src="/img/figure.png" alt="Illustration of a game character." width={600} height={800} />
    </SectionWrapper>
  )
}

export default SplashSection
