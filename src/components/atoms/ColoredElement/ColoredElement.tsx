// Styles
import { StyledColoredElement } from "./ColoredElement.styles"

// Interfaces
import { IColoredElement } from "./ColoredElement.props"

const ColoredElement = ({ color, content, fontSize, font }: IColoredElement) => {
  return (
    <StyledColoredElement font={font} color={color} fontSize={fontSize}>
      {content}
    </StyledColoredElement>
  )
}

export default ColoredElement
