import { StyledFeatureItem, StyledIcon, StyledText } from "./FeatureItem.styles"

const FeatureItem = ({ text }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <StyledIcon src="/icon/icon_placeholder.svg" alt="Feature Icon" width={32} height={32} />
      <StyledText>{text}</StyledText>
    </StyledFeatureItem>
  )
}

export default FeatureItem
