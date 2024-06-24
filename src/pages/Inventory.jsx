import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { API_URL, getInventory, getVibeBackground } from "../api";
import Table from "../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import AssetNav from "../components/navbars/AssetNav";
import Navbar from "../components/Navbar";
import { getItemInLocalStorage } from "../utils/localStorage";
import GRN from "./GRN";
import GDN from "./GDN";

const Inventory = () => {
  const [stocks, setStocks] = useState([]);
  const [page, setPage] = useState("stocks");
  useEffect(() => {
    const fetchInventory = async () => {
      const invResp = await getInventory();
      setStocks(invResp.data);
      console.log(invResp);
    };
    fetchInventory();
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
    {
      name: "Available Quantity",
      selector: (row) => row.available_quantity,
      sortable: true,
    },
    { name: "Rate", selector: (row) => row.rate, sortable: true },
    { name: "Group", selector: (row) => row.group, sortable: true },
    { name: "Sub Group", selector: (row) => row.sub_group, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/edit-stock/${row.id}`}>
            <BiEdit size={15} />
          </Link>
          {/* <button className="text-red-400">
            <MdDeleteForever size={25} />
          </button> */}
        </div>
      ),
    },
  ];

  const defaultImage = { index: 0, src: "" };
  let selectedImageSrc = defaultImage.src;
  let selectedImageIndex = defaultImage.index;
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const Get_Background = async () => {
    try {
      // const params = {
      //   user_id: user_id,
      // };
      const user_id = getItemInLocalStorage("VIBEUSERID");
      console.log(user_id);
      const data = await getVibeBackground(user_id);

      if (data.success) {
        console.log("sucess");

        console.log(data.data);
        selectedImageSrc = API_URL + data.data.image;

        selectedImageIndex = data.data.index;

        // Now, you can use selectedImageSrc and selectedImageIndex as needed
        console.log("Received response:", data);

        // For example, update state or perform any other actions
        setSelectedImage(selectedImageSrc);
        setSelectedIndex(selectedImageIndex);
        console.log("Received selectedImageSrc:", selectedImageSrc);
        console.log("Received selectedImageIndex:", selectedImageIndex);
        console.log(selectedImage);
        // dispatch(setBackground(selectedImageSrc));
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    // Call the function to get the background image when the component mounts
    Get_Background();
  }, []);

  return (
    <section
      className="flex"
      style={{
        background: `url(${selectedImage})no-repeat center center / cover`,
      }}
    >
      <Navbar />
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <AssetNav />
        <div className=" w-full my-2 flex  overflow-hidden flex-col">
          <div className="flex w-full">
            <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
              <h2
                className={`p-1 ${
                  page === "stocks" &&
                  `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setPage("stocks")}
              >
                Stocks
              </h2>
              <h2
                className={`p-1 ${
                  page === "grn" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("grn")}
              >
                GRN
              </h2>
              <h2
                className={`p-1 ${
                  page === "gdn" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("gdn")}
              >
                GDN
              </h2>
            </div>
          </div>
          <div>
            {/* {page === "scheduled" && <ScheduledAudit/> }
        {page === "conducted" && <ConductedAudit/> }
        {page === "checklists" && <AuditChecklist/> } */}
          </div>
        </div>

        {page === "stocks" && (
          <>
            <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
              <input
                type="text"
                placeholder="Search By Stock name"
                className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
                //   value={searchText}
                //   onChange={handleSearch}
              />
              <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
                <Link
                  to={"/admin/add-stock"}
                  className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
                >
                  <IoAddCircleOutline size={20} />
                  Add
                </Link>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={exportToExcel}
                >
                  Export
                </button>
                {/* <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownloadQRCode}
      disabled={selectedRows.length === 0}
    >
      Download QR Code
    </button> */}
              </div>
            </div>
            <Table columns={columns} data={stocks} />
          </>
        )}
        {page === "grn" && <GRN />}
        {page === "gdn" && <GDN />}
      </div>
    </section>
  );
};

export default Inventory;
