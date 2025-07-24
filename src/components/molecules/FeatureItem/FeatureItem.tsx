// Next
import Image from "next/image"

// Properties
import { IFeatureItem } from "./FeatureItem.props"

// Styles
import { StyledFeatureItem, StyledText } from "./FeatureItem.styles"

const FeatureItem = ({ text }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <Image src="/icon/skull.png" alt="Feature Icon" width={32} height={40} />

      <StyledText variant={"h5"}>{text}</StyledText>
    </StyledFeatureItem>
  )
}

export default FeatureItem
