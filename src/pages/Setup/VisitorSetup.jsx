import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import AddVisitorSetupModal from "../../containers/modals/AddVisitorSetupModal";
import EditVisitorSetupModal from "../../containers/modals/EditVisitorSetupModal";
import { getVisitorCategory, deleteVisitorCategory } from "../../api";
import toast from "react-hot-toast";
function VisitorSetup() {
  const themeColor = useSelector((state) => state.theme.color);
  const [searchText, setSearchText] = useState("");
  const [visitorSetupModal, setVisitorSetupModal] = useState(false);
  const [editVisitorSetupModal, setEditVisitorSetupModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [catId, setCatId] = useState("");
  const [added, setAdded] = useState(false);
  const column = [
    {
      name: "Sr. no.",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "category",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => handleEditCategory(row.id)}>
            <BiEdit size={15} />
          </button>
          <button onClick={() => handleCategoryDelete(row.id)}>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    if (searchValue.trim() === "") {
      setFilteredData(categories);
    } else {
      const filteredResults = filteredData.filter((items) =>
        items.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };

  const getVisitor = async () => {
    try {
      const visitorRes = await getVisitorCategory();
      setCategories(visitorRes.data.categories);
      setFilteredData(visitorRes.data.categories);
      console.log(visitorRes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryDelete = async (id) => {
    try {
      const deleteRes = await deleteVisitorCategory(id);
      toast.success("Visitor Category Delete Successfully");
      setAdded(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setAdded(false);
      }, 500);
    }
  };

  useEffect(() => {
    getVisitor();
  }, [added]);

  const handleEditCategory = (id) => {
    setCatId(id);
    setEditVisitorSetupModal(true);
  };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex flex-col sm:flex-row md:justify-between gap-3 my-3">
          <input
            type="text"
            placeholder="search"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="flex gap-3 sm:flex-row flex-col">
            <button
              className="text-white font-semibold px-4 p-1 flex gap-2 items-center rounded-md"
              style={{ background: themeColor }}
              onClick={() => setVisitorSetupModal(true)}
            >
              <IoAddCircleOutline size={22} /> Add
            </button>
          </div>
        </div>
        <div className="my-3">
          <Table columns={column} data={filteredData} isPagination={true} />
        </div>
      </div>
      {visitorSetupModal && (
        <AddVisitorSetupModal
          setAdded={setAdded}
          onclose={() => setVisitorSetupModal(false)}
        />
      )}
      {editVisitorSetupModal && (
        <EditVisitorSetupModal
          catId={catId}
          setAdded={setAdded}
          onclose={() => setEditVisitorSetupModal(false)}
        />
      )}
    </section>
  );
}

export default VisitorSetup;
