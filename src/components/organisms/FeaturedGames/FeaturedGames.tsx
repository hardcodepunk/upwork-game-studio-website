import { useRef } from "react"
import GameCard from "@/components/molecules/GameCard/GameCard"
import { StyledWrapper, StyledHeader, StyledScroll, ArrowButton } from "./FeaturedGames.styles"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const FeaturedGames = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const card = scrollRef.current.querySelector("div")
    const cardWidth = card?.clientWidth || 160
    const gap = 24
    const totalScroll = cardWidth + gap

    scrollRef.current.scrollBy({
      left: direction === "left" ? -totalScroll : totalScroll,
      behavior: "smooth",
    })
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        FEATURED GAMES
        <div>
          <ArrowButton onClick={() => scrollByCard("left")}>
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton onClick={() => scrollByCard("right")}>
            <ChevronRight />
          </ArrowButton>
        </div>
      </StyledHeader>

      <StyledScroll ref={scrollRef}>
        <GameCard title="Title" />
        <GameCard title="Title" active />
        <GameCard title="Title" />
        <GameCard title="Title" />
        <GameCard title="Title" />
        <GameCard title="Title" />
        <GameCard title="Title" />
      </StyledScroll>
    </StyledWrapper>
  )
}

export default FeaturedGames
