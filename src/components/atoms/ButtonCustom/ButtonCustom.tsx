// Next
import Image from "next/image"

// Props
import { IButtonCustom } from "./ButtonCustom.props"

// Styles
import { StyledButton } from "./ButtonCustom.styles"

const CustomButton = ({ label, imgSrc, altText, imgWidth, imgHeight }: IButtonCustom) => {
  return (
    <StyledButton>
      <Image src={imgSrc} alt={altText} width={imgWidth} height={imgHeight} />
      {label}
    </StyledButton>
  )
}

export default CustomButton
