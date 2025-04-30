import GameCard from "@/components/molecules/GameCard/GameCard"
import { StyledWrapper, StyledHeader, StyledScroll, ArrowButton } from "./FeaturedGames.styles"

import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const FeaturedGames = () => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  )
}

export default FeaturedGames
