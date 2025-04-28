import Image from "next/image"
import {
  SectionWrapper,
  TextBlock,
  StyledButton,
  StyledFeaturesWrapper,
  StyledFeaturesGrid,
} from "./AboutSection.styles"
import { Box, Typography } from "@mui/material"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import theme from "@/theme"
import FeatureItem from "@/components/molecules/FeatureItem/FeatureItem"

const AboutSection = () => {
  return (
    <SectionWrapper>
      <TextBlock>
        <Typography variant="h4">
          COMING SOON <ColoredElement color={theme.palette.secondary.main} content={"—"} /> THE FUTURE OF SLOTS AWAITS
        </Typography>
        <Box>
          <StyledFeaturesWrapper>
            <StyledFeaturesGrid>
              <FeatureItem text="Mind — Blowing Mechanics" />
              <FeatureItem text="Competitions That Actually Mean Something" />
              <FeatureItem text="Stories That Drag You In and Don't Let Go" />
              <FeatureItem text="Monthly Top 4 Get Paid" />
            </StyledFeaturesGrid>
          </StyledFeaturesWrapper>
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
    </SectionWrapper>
  )
}

export default AboutSection
