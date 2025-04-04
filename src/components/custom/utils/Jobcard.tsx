import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// Job listings data
const jobListings = [
  {
    id: 1,
    company: "Facebook",
    companyLogo: FaFacebookF,
    title: "Social Media Manager",
    category: "Marketing",
    jobType: "Full Time",
    postedDate: "April 7, 2021",
    isFeatured: true,
  },
  {
    id: 2,
    company: "LinkedIn",
    companyLogo: FaLinkedinIn,
    title: "Software Engineer",
    category: "Engineering",
    jobType: "Remote",
    postedDate: "March 15, 2022",
    isFeatured: false,
  },
  {
    id: 3,
    company: "Instagram",
    companyLogo: FaInstagram,
    title: "Graphic Designer",
    category: "Design",
    jobType: "Part Time",
    postedDate: "June 10, 2023",
    isFeatured: true,
  },
  {
    id: 4,
    company: "Google",
    companyLogo: FcGoogle,
    title: "AI Research Scientist",
    category: "Artificial Intelligence",
    jobType: "Full Time",
    postedDate: "January 5, 2024",
    isFeatured: true,
  },
];

const Jobcard = () => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {jobListings.map((job) => {
        const Logo = job.companyLogo;
        return (
          <Card key={job.id} className="shadow-md border border-gray-100">
            <CardContent className="px-6 flex items-start gap-4">
              {/* Company Logo */}
              <div className="text-blue-500 text-3xl">
                <Logo />
              </div>

              {/* Job Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {job.category} • {job.jobType}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Posted: {job.postedDate}
                </p>
              </div>

              {/* Featured Badge */}
              {job.isFeatured && (
                <div className="ml-auto">
                  <span className="bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Jobcard;
