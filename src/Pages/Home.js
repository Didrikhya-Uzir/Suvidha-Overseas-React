import React from 'react'
import Header from "../Components/Header/Header"
import Carousel from '../Components/Carousel/Carousel'
import TopUni from '../Components/TopUniversities/TopUni'
import About from '../Components/AboutUs/About'
import Services from '../Components/Services/Services'
import Students from '../Components/Students/Students'
import Enquiry from '../Components/EnquiryForm/Enquiry'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Carousel/>
        <TopUni/>
        <About/>
        <Services/>
        <Students/>
        <Enquiry/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home