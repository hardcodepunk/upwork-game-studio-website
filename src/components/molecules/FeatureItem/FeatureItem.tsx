import { IFeatureItem } from "./FeatureItem.props"
import { StyledFeatureItem, StyledText } from "./FeatureItem.styles"
import Image from "next/image"

const FeatureItem = ({ text }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <Image src="/icon/poker-chip.svg" alt="Feature Icon" width={40} height={40} />
      <StyledText variant={"h5"}>{text}</StyledText>
    </StyledFeatureItem>
  )
}

export default FeatureItem
