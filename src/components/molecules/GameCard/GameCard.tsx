import { StyledCardWrapper, StyledCardBorder, StyledCardContent, StyledCardTitle } from "./GameCard.styles"

interface GameCardProps {
  title: string
  active?: boolean
}

const GameCard = ({ title, active = false }: GameCardProps) => {
  return (
    <StyledCardWrapper>
      <StyledCardBorder active={active} />
      <StyledCardContent>
        <StyledCardTitle active={active}>{title}</StyledCardTitle>
      </StyledCardContent>
    </StyledCardWrapper>
  )
}

export default GameCard
