import React from "react";
import Navbar from "../../../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import digitalMarketingImg from "/digitalMarketing.jpg";
import reactImg from "/reactImg.png";
import figmaImg from "/figma.jpg";
import graphicImgImg from "/graphic.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { RxTable } from "react-icons/rx";
function EmployeeCourseRequestApproval() {
  const themeColor = useSelector((state) => state.theme.color);
  const courses = [
    {
      id: 1,
      image: digitalMarketingImg,
      priceLevel: "paid",
      skillLevel: "beginner",
      title: "Digital Marketing",
      instructor: "Anil Sharma",
      rating: "4.0 ★★★★,",
      reviews: 67788,
      price: "₹ 13000",
      language: "Hindi",
      duration: "42 Days",
      lectures: "30 lectures",
    },
    {
      id: 2,
      image: reactImg,
      priceLevel: "paid",
      skillLevel: "Advanced",
      title: "React Native",
      instructor: "Vivek Kumar",
      rating: "4.0 ★★★★,",
      reviews: 68788,
      price: "₹ 5000",
      language: "English",
      duration: "15 Days",
      lectures: 15,
    },
    {
      id: 3,
      image: figmaImg,
      priceLevel: "Free",
      skillLevel: "All Level",
      title: "Figma Design",
      instructor: "Sunil More",
      rating: "4.0 ★★★★,",
      reviews: 6788,
      price: "Free",
      language: "English",
      duration: "12 Days",
      lectures: 7,
    },
    {
      id: 4,
      image: reactImg,
      priceLevel: "paid",
      skillLevel: "Advanced",
      title: "Java and Spring Boot",
      instructor: "Max David",
      rating: "5.0 ★★★★★,",
      reviews: 67788,
      price: "₹ 25000",
      language: "English",
      duration: "2 Months",
      lectures: 30,
    },
    {
      id: 5,
      image: graphicImgImg,
      priceLevel: "Free",
      skillLevel: "Intermediate",
      title: "PhotoGraphy",
      instructor: "Ajay Singh",
      rating: "4.7 ★★★★",
      reviews: 67788,
      price: "₹ 25000",
      language: "Hindi",
      duration: "10 Days",
      lectures: 10,
    },
    {
      id: 6,
      image: reactImg,
      priceLevel: "paid",
      skillLevel: "Advanced",
      title: "Mysql",
      instructor: "Niharika Singh",
      rating: "4.5 ★★★★",
      reviews: 47788,
      price: "₹ 10000",
      language: "Hindi",
      duration: "20 Days",
      lectures: 12,
    },
    {
      id: 7,
      image: graphicImgImg,
      priceLevel: "paid",
      skillLevel: "beginner",
      title: "VFX And Gaming",
      instructor: "Vinay Kumar",
      rating: "4.5 ★★★★",
      reviews: 66788,
      price: "₹ 19000",
      language: "Hindi",
      duration: "30 Days",
      lectures: 15,
    },
    {
      id: 8,
      image: digitalMarketingImg,
      priceLevel: "Free",
      skillLevel: "beginner",
      title: "Accounting Courses",
      instructor: "Maya Kishan",
      rating: "4.4 ★★★★",
      reviews: 67708,
      price: "₹ 19000",
      language: "Hindi",
      duration: "14 Days",
      lectures: 10,
    },
    {
      id: 9,
      image: figmaImg,
      priceLevel: "Free",
      skillLevel: "All Level",
      title: "finance",
      instructor: "Vijay Sharma",
      rating: "4.0 ★★★★",
      reviews: 67889,
      price: "₹ 19000",
      language: "Hindi",
      duration: "14 Days",
      lectures: 12,
    },
  ];
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-center my-2 w-full">
          <div
            className="sm:flex flex-wrap grid grid-cols-2 sm:flex-row text-sm font-medium p-2 rounded-md text-white"
            style={{ background: themeColor }}
          >
            <NavLink
              to={"/employee/certificate/course"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Certificate
            </NavLink>
            <NavLink
              to={"/employee/certificate/rr-certificate"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              RR Certificate
            </NavLink>
            <NavLink
              to={"/employee/certificate/course-request-approval"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Course Request & Approval
            </NavLink>
            <NavLink
              to={"/employee/certificate/project-request-approval/request"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Request & Approval
            </NavLink>
            <NavLink
              to={"/employee/certificate/project-tracking"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Tracking
            </NavLink>
            <NavLink
              to={"/employee/certificate/project-repository"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Repository
            </NavLink>
            <NavLink
              to={"/employee/certificate/knowledge-base"}
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Knowledge Base
            </NavLink>
          </div>
        </div>
        <div className="md:mx-8 mx-5 lg:mx-14">
          <div className="xl:grid grid-cols-4 gap-5">
            <div className="col-span-3 mb-5">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:my-5">
                {courses.map((course, index) => (
                  <div
                    className="shadow-custom-all-sides rounded-md"
                    key={index}
                  >
                    <Link to={"/employee/certificate/course-details"}>
                      <div className="">
                        <div>
                          <img
                            src={course.image}
                            className="rounded-md h-48 w-full"
                          ></img>
                        </div>
                        <div className="px-3 pt-2">
                          <div className="flex justify-between pb-1">
                            <div className="bg-violet-100 text-violet-500 px-3 p-1 text-sm font-semibold rounded-md">
                              {course.skillLevel}
                            </div>
                            <div className="bg-green-100 text-green-500 p-1 px-3 text-sm font-semibold rounded-md">
                              {course.priceLevel}
                            </div>
                          </div>
                          <h2 className="text-2xl font-semibold">
                            {course.title}
                          </h2>
                          <p className="mt-1">{course.instructor}</p>
                          <p className="mt-1">
                            {course.rating} ({course.reviews})
                          </p>
                          <p className="mt-1"> {course.price}</p>
                          <p>{course.language}</p>
                          <div className="flex justify-between border-t border-gray-300 my-2 py-2">
                            <p className="flex gap-1">
                              <IoTimeOutline
                                className="text-red-500"
                                size={20}
                              />
                              <span className="text-gray-700 text-sm font-semibold">
                                {course.duration}
                              </span>
                            </p>
                            <p className="flex gap-1">
                              <RxTable className="text-blue-500" size={20} />
                              <span className="text-gray-700 text-sm font-semibold">
                                {course.lectures}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 md:my-5">
              <div className="shadow-custom-all-sides rounded-md py-5 px-5">
                <h2 className="text-lg font-semibold">Category</h2>
                <div className="mt-3">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        All
                      </label>
                    </div>
                    <p>9</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        Development
                      </label>
                    </div>
                    <p>3</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        Design
                      </label>
                    </div>
                    <p>2</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        Accounting
                      </label>
                    </div>
                    <p>1</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        finance
                      </label>
                    </div>
                    <p>1</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        PhotoGraphy
                      </label>
                    </div>
                    <p>1</p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="checkbox" className="text-gray-700">
                        other
                      </label>
                    </div>
                    <p>1</p>
                  </div>
                </div>
              </div>
              <div className="shadow-custom-all-sides rounded-md py-5 px-5 my-5">
                <h2 className="text-lg font-semibold">Price Level</h2>
                <div className="flex flex-wrap gap-5 my-3">
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    All
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Free
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Complimentry
                  </button>
                </div>
              </div>
              <div className="shadow-custom-all-sides rounded-md py-5 px-5 my-5">
                <h2 className="text-lg font-semibold">Skill Level</h2>
                <div className="flex flex-wrap gap-5 my-3">
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    All Level
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Beginner
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Intermediate
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Advanced
                  </button>
                </div>
              </div>
              <div className="shadow-custom-all-sides rounded-md py-5 px-5 my-5">
                <h2 className="text-lg font-semibold">Language</h2>
                <div className="flex flex-wrap gap-5 my-3">
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    English
                  </button>
                  <button
                    type="submit"
                    className="border-2 border-gray-400 rounded-md px-4 p-1"
                  >
                    Hindi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmployeeCourseRequestApproval;
