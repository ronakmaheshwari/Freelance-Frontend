import Techjobs from "@/components/custom/Landing/Techjobs"
import Hero from "../components/custom/Landing/Hero"
import Navbar from "../components/custom/utils/Navbar"
import Testimonial from "@/components/custom/Landing/Testimonial"
import JobBoardSection from "@/components/custom/Landing/JobBoardSelection"


const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Techjobs/>
        <JobBoardSection/>
        <Testimonial/>
    </div>
  )
}

export default Landing