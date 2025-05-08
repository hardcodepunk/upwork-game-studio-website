import {
  SectionWrapper,
  TextBlock,
  StyledFeaturesWrapper,
  StyledFeaturesGrid,
  StyledImage,
} from "./AboutSection.styles"
import { Typography } from "@mui/material"
import ColoredElement from "@/components/atoms/ColoredElement/ColoredElement"
import FeatureItem from "@/components/molecules/FeatureItem/FeatureItem"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

const AboutSection = () => {
  return (
    <SectionWrapper>
      <StyledImage src="/img/table.png" alt="About illustration" width={1000} height={1000} />
      <TextBlock>
        <StyledFeaturesWrapper>
          <Typography variant="h4">
            COMING SOON <ColoredElement color={"theme.palette.secondary.main"} content={"—"} /> THE FUTURE OF SLOTS
            AWAITS
          </Typography>
          <StyledFeaturesGrid>
            <FeatureItem text="Mind — Blowing Mechanics" />
            <FeatureItem text="Competitions That Actually Mean Something" />
            <FeatureItem text="Stories That Drag You In and Don't Let Go" />
            <FeatureItem text="Monthly Top 4 Get Paid" />
          </StyledFeaturesGrid>
          <ButtonCustom
            imgSrc={"/icon/icon__discord.svg"}
            altText="Discord"
            imgHeight={41}
            imgWidth={37}
            label="Get Notified"
          />
        </StyledFeaturesWrapper>
      </TextBlock>
    </SectionWrapper>
  )
}

export default AboutSection
