import JobListings from "@/components/custom/Jobs/JobListings"
import Sidenav from "@/components/custom/Jobs/Sidenav"
import Footer from "@/components/custom/utils/Footer"
// import Jobcard from "@/components/custom/utils/Jobcard"
import Navbar from "@/components/custom/utils/Navbar"

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        <JobListings/>
        <Footer/>
    </div>
  )
}

export default Jobs