import Image from "next/image"
import { SectionWrapper, TextBlock, ButcherImage, StyledButton } from "./CommunitySection.styles"
import { Box, Typography } from "@mui/material"

import Logo from "@/components/molecules/Logo/Logo"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import theme from "@/theme"

const CommunitySection = () => {
  return (
    <SectionWrapper>
      <TextBlock>
        <Typography variant="h3">
          FIRST RULE OF FULL <ColoredElement color={theme.palette.secondary.main} content={"—"} /> CLIP,<br></br>
          DON’T TALK ABOUT FULL <ColoredElement color={theme.palette.secondary.main} content={"—"} /> CLIP
        </Typography>
        <Box>
          <Typography variant="body1">
            We’re not just building games <ColoredElement color={theme.palette.secondary.main} content={"—"} /> we’re
            building a movement. <br></br>Monthly giveaways. No{" "}
            <ColoredElement color={theme.palette.secondary.main} content={"—"} /> limit madness. Real people. Real
            prizes.
          </Typography>
          <StyledButton>
            <Image src="/icon/icon__discord.svg" alt="Discord" width={37} height={41} />
            Get in.
            <ColoredElement
              font={theme.typography.fontFamily}
              color={theme.palette.secondary.main}
              content={"Get Loud."}
            />
            Win BIG.
          </StyledButton>
        </Box>
      </TextBlock>
      <ButcherImage src="/img/butcher.png" alt="Illustration of the butcher" width={637} height={646.86} />
    </SectionWrapper>
  )
}

export default CommunitySection
