import Image from "next/image"
import { SectionWrapper, TextBlock, ButcherImage, JoinButton } from "./Splash.styles"
import { Typography } from "@mui/material"

const SplashSection = () => {
  return (
    <SectionWrapper>
      <TextBlock>
        <Typography variant="h1">FULL CLIP</Typography>
        <Typography variant="h2">Design disrupt repeat</Typography>
        <Typography variant="body1">
          FULL — CLIP isn’t here to blend in. We’re redefining the online slots game, one mechanic at a time. Players
          first. Innovation always. And giveaways that slap.
        </Typography>
        <JoinButton>
          <Image src="/icon__discord.svg" alt="Discord" width={37} height={41} />
          Join the fun
        </JoinButton>
      </TextBlock>

      <ButcherImage src="/img/butcher.png" alt="Illustration of the butcher" width={637} height={646.86} />
    </SectionWrapper>
  )
}

export default SplashSection
