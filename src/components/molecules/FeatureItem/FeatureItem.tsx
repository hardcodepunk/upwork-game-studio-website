// Next
// import Image from "next/image"

// Properties
import { IFeatureItem } from "./FeatureItem.props"

// Styles
import { StyledFeatureItem, StyledText } from "./FeatureItem.styles"

const FeatureItem = ({ text }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      {/* <Image src="/icon/poker-chip.svg" alt="Feature Icon" width={40} height={40} /> */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "4px solid red",
        }}
      />
      <StyledText variant={"h5"}>{text}</StyledText>
    </StyledFeatureItem>
  )
}

export default FeatureItem
