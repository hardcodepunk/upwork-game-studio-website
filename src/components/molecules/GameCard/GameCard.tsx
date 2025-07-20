// Styles
import {
  StyledCardWrapper,
  StyledCardBorder,
  StyledCardContent,
  StyledCardTitle,
  StyledComingSoon,
  StyledOverlay,
} from "./GameCard.styles"

interface GameCardProps {
  title: string
  active?: boolean
  backgroundImage?: string
  comingSoon?: boolean
}

const GameCard = ({ title, active = false, backgroundImage, comingSoon = false }: GameCardProps) => {
  return (
    <StyledCardWrapper backgroundImage={backgroundImage}>
      <StyledCardBorder active={active} />
      <StyledOverlay />

      <StyledCardContent>
        <StyledCardTitle active={active}>{title}</StyledCardTitle>
        {comingSoon && <StyledComingSoon>Coming soon</StyledComingSoon>}
      </StyledCardContent>
    </StyledCardWrapper>
  )
}

export default GameCard
