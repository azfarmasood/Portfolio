import Hero from "@/components/Page/Home_Page/Hero"
import Header from "@/components/layout/Header"
import About_Us from "@/components/Page/Home_Page/About_Us"
import Projects from "@/components/Page/Home_Page/Projects"
import Contact_Us from "@/components/Page/Home_Page/Contact_Us"
import Footer from "@/components/layout/Footer"
import Achivements from "@/components/Page/Home_Page/Achivements"
const Home = () => {
  return (
    <main className="bg-primary">
      <Header/>
      <Hero/>
      <Achivements/>
      <About_Us/>
      <Projects/>
      <Contact_Us/>
      <Footer/>
    </main>
  )
}
export default Home