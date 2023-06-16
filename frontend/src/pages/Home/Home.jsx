import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailBox from '../../components/MailBox/MailBox'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <FeaturedProperties/>
      <Featured/>
      <PropertyList/>
      <MailBox/>
      <Footer/>
    </div>
  )
}

export default Home
