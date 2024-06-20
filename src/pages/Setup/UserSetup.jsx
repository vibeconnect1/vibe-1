import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Navbar from "../../components/Navbar";
import Table from "../../components/table/Table";
import { getSetupUsers } from "../../api";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";

const UserSetup = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const themeColor = useSelector((state)=> state.theme.color)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const setupUsers = await getSetupUsers();
        setUsers(setupUsers.data);
        setFilteredData(setupUsers.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      setFilteredData(users);
    } else {
      const filteredResults = users.filter((item) =>
        // item.name.toLowerCase().includes(searchValue.toLowerCase())
      (item.firstname &&
        item.firstname.toLowerCase().includes(searchValue.toLowerCase())) || (item.lastname &&
          item.lastname.toLowerCase().includes(searchValue.toLowerCase()))
      );
      setFilteredData(filteredResults);
    }
  };

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
      name: "Send Email",
      cell: (row) => (
        <button style={{background: themeColor}} className="text-white md:text-sm text-xs rounded-full  shadow-custom-all-sides p-1 px-4">
          Send 
        </button>
      ),
      sortable: true,
    },
  ];
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col gap-4 overflow-hidden">
        <div className="mt-5 flex md:flex-row flex-col justify-between md:items-center gap-4">
          <input
            type="text"
            placeholder="Search By Name"
            className=" p-2 md:w-96 border border-gray-300 rounded-md placeholder:text-sm outline-none"
            value={searchText}
            onChange={handleSearch}
          />
          <button className="border-2 font-semibold hover:bg-black hover:text-white duration-300 ease-in-out transition-all border-black p-1 px-4 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center">
            <PiPlusCircle size={20} />
            Add User
          </button>
        </div>
        <Table columns={userColumn} data={filteredData} />
      </div>
    </section>
  );
};

export default UserSetup;
