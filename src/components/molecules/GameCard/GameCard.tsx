// Styles
import { StyledCardWrapper, StyledCardBorder, StyledCardContent, StyledCardTitle } from "./GameCard.styles"

interface GameCardProps {
  title: string
  active?: boolean
  backgroundImage?: string
}

const GameCard = ({ title, active = false, backgroundImage }: GameCardProps) => {
  return (
    <StyledCardWrapper backgroundImage={backgroundImage}>
      <StyledCardBorder active={active} />
      <StyledCardContent>
        <StyledCardTitle active={active}>{title}</StyledCardTitle>
      </StyledCardContent>
    </StyledCardWrapper>
  )
}

export default GameCard
