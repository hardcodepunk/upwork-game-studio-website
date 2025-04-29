import GameCard from "@/components/molecules/GameCard/GameCard"
import { StyledSection, StyledHeader, StyledScroll, ArrowButton } from "./FeaturedGames.styles"

import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const FeaturedGames = () => {
  return (
    <StyledSection>
      <StyledHeader>
        FEATURED GAMES
        <div>
          <ArrowButton>
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton>
            <ChevronRight />
          </ArrowButton>
        </div>
      </StyledHeader>

      <StyledScroll>
        <GameCard title="Title" />
        <GameCard title="Title" active />
        <GameCard title="Title" />
        <GameCard title="Title" />
        <GameCard title="Title" />
      </StyledScroll>
    </StyledSection>
  )
}

export default FeaturedGames
