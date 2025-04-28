import Image from "next/image"
import {
  SectionWrapper,
  TextBlock,
  StyledButton,
  StyledFeaturesWrapper,
  StyledFeaturesGrid,
  StyledImage,
} from "./AboutSection.styles"
import { Box, Typography } from "@mui/material"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import theme from "@/theme"
import FeatureItem from "@/components/molecules/FeatureItem/FeatureItem"

const AboutSection = () => {
  return (
    <SectionWrapper>
      <StyledImage src="/img/table.png" alt="About illustration" width={1000} height={1000} />
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
            Get Notified
          </StyledButton>
        </Box>
      </TextBlock>
    </SectionWrapper>
  )
}

export default AboutSection
