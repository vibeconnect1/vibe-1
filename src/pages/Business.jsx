import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ImEye } from "react-icons/im";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import profile from "/profile.png";
import Switch from "../Buttons/Switch";
import Table from "../components/table/Table";
import { useSelector } from "react-redux";
import { getContactBook } from "../api";
import { BsEye } from "react-icons/bs";

const Business = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [contacts, setContacts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    const fetchContactBook = async () => {
      try {
        const contactRes = await getContactBook();
        const sortedData = contactRes.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setContacts(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContactBook();
  }, []);
  const column = [
    {
      name: "Actions",
      cell: (row) => (
        <Link to={`/business/details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
      sortable: true,
    },

    { name: "Company Logo", selector: (row) => row.logo, sortable: true },
    {
      name: "Company Name",
      selector: (row) => row.company_name,
      sortable: true,
    },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.SubCategory,
      sortable: true,
    },
    {
      name: "Contact Person",
      selector: (row) => row.contact_person_name,
      sortable: true,
    },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    { name: "Landline", selector: (row) => row.landline_no, sortable: true },
    {
      name: "Primary Email",
      selector: (row) => row.primary_email,
      sortable: true,
    },
    {
      name: "Key Offerings",
      selector: (row) => row.key_offering,
      sortable: true,
    },
    { name: "Status", selector: (row) => row.status, sortable: true },
  ];

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    if (searchValue.trim() === "") {
      setFilteredData(contacts);
    } else {
      const filteredResults = contacts.filter(
        (item) =>
          item.company_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          (item.contact_person_name &&
            item.contact_person_name
              .toLowerCase()
              .includes(searchValue.toLowerCase()))
      );
      setFilteredData(filteredResults);
    }
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by Company name"
            className="border bg-gray-50 p-2 w-full border-gray-300 rounded-lg placeholder:text-sm"
            onChange={handleSearch}
            value={searchText}
          />
          <div className="flex gap-4 justify-end w-full overflow-hidden">
            <Link
              to={"/business/add-business"}
              className="bg-black w-20 rounded-lg flex items-center justify-center gap-2 text-white p-2 my-5"
              style={{ background: themeColor }}
            >
              <IoAddCircleOutline />
              Add
            </Link>
          </div>
        </div>

        <Table columns={column} data={filteredData} />
      </div>
    </section>
  );
};

export default Business;
