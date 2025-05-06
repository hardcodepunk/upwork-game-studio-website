import { SectionWrapper, TextBlock, StyledImage } from "./CommunitySection.styles"
import { Box, Typography } from "@mui/material"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import theme from "@/theme"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

const CommunitySection = () => {
  return (
    <SectionWrapper>
      <TextBlock>
        <Typography variant="h3">
          FIRST RULE OF FULL <ColoredElement color={theme.palette.secondary.light} content={"—"} /> CLIP,<br></br>
          DON’T TALK ABOUT FULL <ColoredElement color={theme.palette.secondary.light} content={"—"} /> CLIP
        </Typography>
        <Box>
          <Typography variant="body1">
            We’re not just building games <ColoredElement color={theme.palette.secondary.light} content={"—"} /> we’re
            building a movement. <br></br>Monthly giveaways. No{" "}
            <ColoredElement color={theme.palette.secondary.light} content={"—"} /> limit madness. Real people. Real
            prizes.
          </Typography>
          <ButtonCustom
            imgSrc={"/icon/icon__discord.svg"}
            altText="Discord"
            imgHeight={41}
            imgWidth={37}
            label="Get in. Get loud. Win big."
          />
        </Box>
      </TextBlock>
      <StyledImage src="/img/community.svg" alt="Community illustration" width={314} height={314} />
    </SectionWrapper>
  )
}

export default CommunitySection
