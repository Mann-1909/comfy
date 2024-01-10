import React from 'react'
import HeroPage from '../../components/hero-page/HeroPage'
import Navbar from '../../components/common/Navbar'
import About from '../../components/aboutus/About'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroPage></HeroPage>
      <About></About>
      <Contact></Contact>
      <Footer></Footer> 

    </div>
  )
}
