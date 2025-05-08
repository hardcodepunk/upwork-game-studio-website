// React
import { useRef, useState } from "react"

// MUI
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

// Components
import GameCard from "@/components/molecules/GameCard/GameCard"

// Styles
import { StyledWrapper, StyledHeader, StyledScroll, ArrowButton } from "./FeaturedGames.styles"

const FeaturedGames = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const pos = useRef({ left: 0, x: 0 })

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

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsGrabbing(true)
    scrollRef.current.style.cursor = "grabbing"
    pos.current = {
      left: scrollRef.current.scrollLeft,
      x: e.clientX,
    }
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current || !isGrabbing) return
    const dx = e.clientX - pos.current.x
    scrollRef.current.scrollLeft = pos.current.left - dx
  }

  const onMouseUp = () => {
    if (!scrollRef.current) return
    setIsGrabbing(false)
    scrollRef.current.style.cursor = "grab"
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

      <StyledScroll
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
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
