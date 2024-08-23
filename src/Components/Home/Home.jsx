import React from 'react'
// import Banner from '../Banner/Banner'
import ServiceHome from '../ServiceHome/ServiceHome'
import AboutHome from '../AboutHome/AboutHome'
import DonateHome from '../DonateHome/DonateHome'
import CTAHome from '../CTAHome/CTAHome'
// import TestimonialArea from '../TesstimonialHome/TesstimonialHome'
import HelpingHand from '../HelpingHand/HelpingHand'
import Hero from '../Hero/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <ServiceHome />
      <AboutHome />
      <DonateHome />
      <CTAHome />
      {/* <TestimonialArea /> */}
      <HelpingHand />
    </div>
  )
}

export default Home
