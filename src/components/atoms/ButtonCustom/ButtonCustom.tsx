import { IButtonCustom } from "./ButtonCustom.props"
import { StyledButton } from "./ButtonCustom.styles"
import Image from "next/image"

const CustomButton = ({ label, imgSrc, altText, imgWidth, imgHeight }: IButtonCustom) => {
  return (
    <StyledButton>
      <Image src={imgSrc} alt={altText} width={imgWidth} height={imgHeight} />
      {label}
    </StyledButton>
  )
}

export default CustomButton
