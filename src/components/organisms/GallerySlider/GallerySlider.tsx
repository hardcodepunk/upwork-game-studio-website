"use client"

// React
import { useEffect, useRef, useState } from "react"

// MUI
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Typography } from "@mui/material"

// Styles
import {
  StyledSliderWrapper,
  StyledImageContainer,
  StyledImage,
  ChevronButton,
  ChevronOverlay,
  StyledImageSlide,
  StyledSlideContent,
} from "./GallerySlider.styles"

// Styles
import { StyledButton } from "@/components/atoms/ButtonCustom/ButtonCustom.styles"

const slides = [
  {
    image: "/img/gallery/placeholder.jpg",
    title: "Slide One",
    description: "This is the future of slots. Tap into the next-gen.",
    cta: "Play Now",
  },
  {
    image: "/img/gallery/placeholder.jpg",
    title: "Slide Two",
    description: "Fully on-chain, truly player-first. Let's go.",
    cta: "Join the Waitlist",
  },
  {
    image: "/img/gallery/placeholder.jpg",
    title: "Slide Three",
    description: "No more boring spins. Everything's changing.",
    cta: "Discover Games",
  },
]

const GallerySlider = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setIndex(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex(prev => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [index])

  return (
    <StyledSliderWrapper>
      <StyledImageContainer style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <StyledImageSlide key={i}>
            <StyledImage src={slide.image} alt={slide.title} />
            <StyledSlideContent>
              <Typography variant="h2">{slide.title}</Typography>
              <Typography variant="body1">{slide.description}</Typography>
              <StyledButton>{slide.cta}</StyledButton>
            </StyledSlideContent>
          </StyledImageSlide>
        ))}
      </StyledImageContainer>

      <ChevronOverlay>
        <ChevronButton onClick={prevSlide}>
          <ChevronLeft />
        </ChevronButton>
        <ChevronButton onClick={nextSlide}>
          <ChevronRight />
        </ChevronButton>
      </ChevronOverlay>
    </StyledSliderWrapper>
  )
}

export default GallerySlider
