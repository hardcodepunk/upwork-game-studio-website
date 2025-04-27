"use client"

import MainNav from "@/components/organisms/MainNav/MainNav"
import SplashSection from "@/components/organisms/SplashSection/Splash"
import Footer from "@/components/organisms/Footer/Footer"
import CommunitySection from "@/components/organisms/CommunitySection/CommunitySection"

export default function Home() {
  return (
    <>
      <MainNav />
      <SplashSection />
      <CommunitySection />
      <Footer />
    </>
  )
}
