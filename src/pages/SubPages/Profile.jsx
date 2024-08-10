import React, { useEffect, useRef, useState } from 'react'
import Navbar from "../../components/Navbar"
import interview from "/01.jpg";
import pic1 from "/profile1.jpg";
import { IoCamera } from 'react-icons/io5';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { FaComment } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import ForumCommentsModal from '../../containers/modals/ForumCommentModal';
import { BsThreeDots } from 'react-icons/bs';
import image from "/profile.png";
import ProfileGrow from './ProfileGrow';
import ProfileCatchUp from './ProfileCatchup';
import { getItemInLocalStorage } from '../../utils/localStorage';
import image2 from "/profile4.jpg"
function Profile() {
    const [page, setPage] = useState("grow");
    const employee = {
      fullName: 'sanjana',
      email: 'sanjanae@example.com',
      phone: '9027562389',
      department: 'Marketing',
      position: 'Senior Marketing Analyst',
      manager: 'karan',
      connection: 90,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et est tristique vehicula.',
    }
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const [modal, showModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const firstName = getItemInLocalStorage("Name")
    const lastName = getItemInLocalStorage("LASTNAME")
    const user = getItemInLocalStorage("user")

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <section className='flex'>
        <Navbar/>
        <div className='w-full flex mx-3 flex-col overflow-hidden'>
            <div className='flex justify-center mt-5'>
                <div className='border-2 border-gray-200  rounded-md md:w-3/5'>
                    <div className='relative'>
                        <div>
                            <img src={interview} className="rounded-md w-full h-56" alt="" />
                        </div>
                        <div className='absolute -bottom-8 left-6'>
                            <img src={image2} className="w-24 h-24 rounded-full" alt="" />
                        </div>
                        <div className='absolute top-4 right-6 border-2 border-black bg-white p-1 rounded-full '>
                            <IoCamera size={30} className='text-blue-600'/>
                        </div>
                    </div>
                    <div className='flex justify-end mt-3 mx-5'>
                        <Link to={`/admin/edit-profile`} >
                          <BiEdit size={25}/>
                        </Link>
                    </div>
                    <div className='flex md:flex-row flex-col items-center gap-3 ml-6'>
                        <h2 className="text-xl font-semibold">{firstName} {lastName}</h2>
                        <p className="text-gray-600 mt-1">{user.email}</p>
                        {/* <p className="text-gray-600 mt-1">{employee.phone}</p> */}
                    </div>
                    <div className="my-4 ml-6 ">
                        <h3 className="text-lg font-semibold">Profile Information</h3>
                        <div className="mt-2">
                            <p className='grid grid-cols-3'><span className="font-semibold">Department :</span> <span>{employee.department}</span></p>
                            <p className='grid grid-cols-3'><span className="font-semibold">Position :</span> <span>{employee.position}</span></p>
                            <p className='grid grid-cols-3'><span className="font-semibold">Manager :</span> <span>{employee.manager}</span></p>
                            <p className='grid grid-cols-3'><span className="font-semibold">Connection :</span> <span>{employee.connection}</span></p>
                            <p className="mt-2 grid"><span className="font-semibold">About Me:</span> {employee.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full md:justify-center'>
                <div className='border-2 md:flex  border-gray-200 rounded-md md:w-3/5 w-full  my-5'>
                    <div className='md:grid flex gap-2 md:grid-cols-2 my-5 mx-5'>
                        <h2
                            className={`p-1 ${
                            page === "grow" && "bg-white text-blue-500 shadow-custom-all-sides"
                            } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
                            onClick={() => setPage("grow")}
                        >
                            Grow
                        </h2>
                        <h2
                            className={`p-1 ${
                            page === "catchUp" && "bg-white text-blue-500 shadow-custom-all-sides"
                            } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
                            onClick={() => setPage("catchUp")}
                        >
                            Catch Up
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                {page === "grow" && (
                    <div>
                        <ProfileGrow/>
                   </div>
                )}
                {page === "catchUp" && (
                    <div>
                        <ProfileCatchUp/>
                   </div>
                )}
            </div>
            <div className='flex justify-center'>
        <div className='shadow-lg rounded-md mb-10 md:w-3/5 relative'>
          <div className='flex justify-between gap-2 md:mx-8 my-5 mt-5'>
            <div className='flex gap-3'>
              <img src={image} className="w-10 h-10" alt="" />
              <div className=''>
                <h2 className='text-md font-semibold'>Vinay</h2>
                <p className='text-xs font-normal'>9 November at 23:29</p>
              </div>
            </div>
            <div ref={dropdownRef} className="relative">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <BsThreeDots size={15}/>
              </button>
              {isOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Save post</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Delete</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Hide post</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Block</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Report post</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className='px-8'>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
            <img src={interview} className="w-4/5 h-3/5 mx-8 my-3 rounded-md" alt="forum-profile" />
          </div>
          <div className='flex justify-start gap-5 mx-8 my-3'>
            <div className='flex gap-3 mb-5'>
              <button><FcLike size={22} /></button>
              <button><FaComment size={22}  onClick={() => showModal(true)}/></button>
              <button><IoMdShareAlt size={22} /></button>
            </div>
            {modal && <ForumCommentsModal onclose={() => showModal(false)} />}
          </div>
        </div>
            </div>
        </div>
    </section>
  )
}
export default Profile