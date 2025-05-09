"use client"

// Components
import MainNav from "@/components/organisms/MainNav/MainNav"
import SplashSection from "@/components/organisms/SplashSection/Splash"
import Footer from "@/components/organisms/Footer/Footer"
import CommunitySection from "@/components/organisms/CommunitySection/CommunitySection"
import AboutSection from "@/components/organisms/AboutSection/AboutSection"

// MUI
import { styled } from "@mui/material"

import FeaturedGames from "@/components/organisms/FeaturedGames/FeaturedGames"
import ContactSection from "@/components/organisms/ContactSection/ContactSection"
import GallerySlider from "@/components/organisms/GallerySlider/GallerySlider"

const StyledContainer = styled("div")(() => ({
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  padding: "0 5%",
  margin: "0 auto",
  position: "relative",
  flexDirection: "column",
}))

export default function Home() {
  return (
    <>
      <StyledContainer>
        <MainNav />
        <SplashSection />
      </StyledContainer>
      <GallerySlider />
      <StyledContainer>
        <AboutSection />
        <CommunitySection />
        <FeaturedGames />
        <ContactSection />
        <Footer />
      </StyledContainer>
    </>
  )
}
