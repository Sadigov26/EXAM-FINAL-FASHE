import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Fashion from '../../Components/Fashion/Fashion'
import Products from '../../Components/Products/Products'
import Banner from '../../Components/Banner/Banner'
import Blog from '../../Components/Blog/Blog'
import BlogTwo from '../../Components/BlogTwo/BlogTwo'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Fashion/>
      <Products/>
      <Banner/>
      <Blog/>
      <BlogTwo/>
      <Footer/>
    </div>
  )
}

export default Home
