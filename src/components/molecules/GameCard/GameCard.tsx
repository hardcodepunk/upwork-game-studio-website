import { StyledCardWrapper, StyledCardBorder, StyledCardTitle } from "./GameCard.styles"

interface GameCardProps {
  title: string
  active?: boolean
}

const GameCard = ({ title, active = false }: GameCardProps) => {
  return (
    <StyledCardWrapper>
      <StyledCardBorder active={active} />
      <StyledCardTitle active={active}>{title}</StyledCardTitle>
    </StyledCardWrapper>
  )
}

export default GameCard
