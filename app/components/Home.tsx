"use client"
import Collections from "./Home/Collections"
import Feature from "./Home/Feature"
import About from "./Home/About"
import Contact from "./Home/Contact"
import Footer from "./Home/Footer"


const Home = ()=>{

  return (
    <div className="min-h-screen">
      <Collections/>
      <Feature/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

 export default Home;
