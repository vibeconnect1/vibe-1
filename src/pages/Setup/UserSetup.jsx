import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Navbar from "../../components/Navbar";
import Table from "../../components/table/Table";
import { getSetupUsers } from "../../api";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const UserSetup = () => {
    const [users, setUsers] = useState([])


useEffect(()=>{
    const fetchUsers = async ()=>{
       try {
         const setupUsers = await getSetupUsers()
         setUsers(setupUsers.data)
       } catch (error) {
        console.log(error)
       }
    }
    fetchUsers()
},[])

    const userColumn = [
        {
            name: "View",
            cell: (row) => (
              <div className="flex items-center gap-4">
                <Link to={`/setup/user-details/${row.id}`}>
                  <BsEye size={15} />
                </Link>
              </div>
            ),
          },
          {
            name: "First Name",
            selector: (row) => row.firstname,
            sortable: true,
          },
          {
            name: "Last Name",
            selector: (row) => row.lastname,
            sortable: true,
          },
          {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
          },
          {
            name: "Mobile",
            selector: (row) => row.mobile,
            sortable: true,
          },
          
          {
            name: "Type",
            selector: (row) => row.user_type,
            sortable: true,
          },
          {
            name: "Action",
            cell: (row) => (<button className="text-red-500">Delete</button>),
            sortable: true,
          },
    ]
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col gap-4 overflow-hidden">
        <div className="mt-5 flex justify-end items-center gap-4">
          <button className="border-2 font-semibold hover:bg-black hover:text-white duration-300 ease-in-out transition-all border-black p-1 px-4 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center">
            <PiPlusCircle size={20} />
            Add User
          </button>
        </div>
        <Table columns={userColumn} data={users}  />
      </div>
    </section>
  );
};

export default UserSetup;
