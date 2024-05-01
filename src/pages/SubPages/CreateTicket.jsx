import Collapsible from "react-collapsible";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CustomTrigger from "../../containers/CustomTrigger";
import Selector from "../../containers/Selector";
import { useNavigate } from "react-router-dom";
import FileInput from "../../Buttons/FileInput";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { fetchSubCategories } from "../../api";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [behalf, setBehalf] = useState("self");
  const [ticketType, setTicketType] = useState("");
  //   const [selectedOption, setSelectedOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedCustomerPriority, setSelectedCustomerPriority] = useState("");
  const [selectedAdminPriority, setSelectedAdminPriority] = useState("");
  const [units, setUnits] = useState([])
  const [user, setUser] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [formData, setFormData] = useState({
    category_type_id: "18",
    sub_category_id: "", 
    assigned_to: "",
    priority: ""
  })

  const options = {
    Catregory: [
      "Air Conditioning",
      "IT Support",
      "Elevator",
      "Cafeteria/Pantry",
      "Technical",
      "Repair & Maintenance",
      "Sanitization",
      "House Keeping",
      "Washing Cleaning",
      "Others",
    ],
    subCategory: [],
    adminPriority: ["P1", "P2", "P3", "P4"],
    priority: ["Low", "Medium", "High"],
    proactiveReactive: ["Proactive", "Reactive"],
    user: ["user1", "user2"],
  };
  
  console.log(formData);
  console.log(attachments);
 
  const categories = getItemInLocalStorage("categories");
  console.log("Categories", categories)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14);
      // console.log("subCategories:", response);
    };
    fetchData();
  }, []);

  const handleOptionChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setAttachments(fileList);
  };

  const handleChange = async (e) => {
    async function fetchSubCategory(categoryId) {
      try {
        const cat = await fetchSubCategories(categoryId);
        setUnits(cat.data.sub_categories.map((item) => ({ name: item.name, id: item.id })));
        // console.log(cat);
      } catch (e) {
        console.log(e);
      }
    }

    if (e.target.type === "select-one" && e.target.name === "categories") {
      const categoryId = Number(e.target.value);
      await fetchSubCategory(categoryId);
      setFormData({
        ...formData,
        category_type_id: categoryId,
        sub_category_id: "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://3.6.98.113/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6',
        formData
      );
      // console.log('Complaint submitted successfully:', response.data);
      setFormData({
        category_type_id: "",
        sub_category_id: "",
        text: "",
        heading: "read",
        of_phase: "pms",
        site_id: selectedSiteId,
      });
      navigate('/mytickets/userticket');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  const handleReset = () => {
    setAttachments([]);
    setSelectedSubCategory("");
    setSelectedCategory("");
    setSelectedCustomerPriority("");
    setSelectedCategory("");
  };
  return (
    <section className="justify-center items-center min-h-screen my-15 md:flex">
      <div className="fixed left-0 top-0 h-full">
          <Navbar />
        </div>
      <form
        className="border border-gray-300 rounded-lg sm:w-[60rem] p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Create Ticket
        </h2>
        {/* <ul className="flex sm:flex-row flex-col justify-around my-5 items-center">
          <li className="font-bold">On Behalf Of:</li>
          <li
            className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
              behalf === "self" ? "bg-black text-white" : ""
            }`}
            onClick={() => setBehalf("self")}
          >
            Self
          </li>
          <li
            className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
              behalf === "occupant" ? "bg-black text-white" : ""
            }`}
            onClick={() => setBehalf("occupant")}
          >
            Occupant User
          </li>
          <li
            className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
              behalf === "FM" ? "bg-black text-white" : ""
            }`}
            onClick={() => setBehalf("FM")}
          >
            FM User
          </li>
        </ul> */}
        <div>
          {behalf === "self" ? (
            <Collapsible
              readOnly
              trigger={
                <CustomTrigger isOpen={isOpen}>Requestor Details</CustomTrigger>
              }
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
              className="bg-gray-300 p-2 rounded-md font-bold "
            >
              <div className="grid grid-cols-3 bg-gray-300 p-2 rounded-md gap-5 pb-4">
                <p>Name:</p>
                <p>Contact No:</p>
                <p>Site:</p>
                <p>Department:</p>
                <p>Unit:</p>
              </div>
            </Collapsible>
          ) : (
            <div className="flex items-center  gap-4 my-5">
              <h2 className="font-bold ">Requestor Deatils :</h2>
              <Selector
                selectedOption={user}
                handleOptionChange={(e) => handleOptionChange(e, setUser)}
                subHeading={"Choose User"}
                options={options.user}
              />
            </div>
          )}
        </div>
        <div>
          {/* <ul className="flex sm:flex-row flex-col justify-around my-5 items-center">
            <li className="font-bold">Ticket Type:</li>
            <li
              className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
                ticketType === "Complaint" ? "bg-black text-white" : ""
              }`}
              onClick={() => setTicketType("Complaint")}
            >
              Complaint
            </li>
            <li
              className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
                ticketType === "Suggestion" ? "bg-black text-white" : ""
              }`}
              onClick={() => setTicketType("Suggestion")}
            >
              Suggestion
            </li>
            <li
              className={`hover:bg-black hover:text-white cursor-pointer rounded-full px-5 py-2 ${
                ticketType === "Request" ? "bg-black text-white" : ""
              }`}
              onClick={() => setTicketType("Request")}
            >
              Request
            </li>
          </ul> */}
        </div>
        <div className="ml-5 grid sm:grid-cols-3 place-content-center w-full gap-4">
        <select
                  id="two"
                  value={formData.catogories}
                  name="categories"
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Category</option>
                  {categories?.map(
                    category => (
                      <option onClick={() => console.log("checking-category")} value={category.id}>{category.name}</option>
                    )
                  )}
                </select>

                <label htmlFor="" className="font-semibold">
                  Sub Category:
                </label>
                <select
                  id="five"
                  value={formData.subCategories}
                  name="sub_category_id"
                  onChange={handleChange}
                  className="border p-2 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Sub Category</option>
                  {units?.map(
                    floor => (
                      <option value={floor.id}>{floor.name}</option>
                    )
                  )}
                </select>
          {/* <Selector
            heading={"Admin Priority"}
            subHeading={"Choose Admin Priority"}
            options={options.adminPriority}
            selectedOption={selectedAdminPriority}
            handleOptionChange={(e) =>
              handleOptionChange(e, setSelectedAdminPriority)
            }
          /> */}
          <Selector
            heading={"Assigned To"}
            subHeading={"Assign To"}
            options={options.Catregory}
          />
          <Selector
            heading={"Customer Priority"}
            subHeading={"Choose Priority"}
            options={options.priority}
            selectedOption={selectedCustomerPriority}
            handleOptionChange={(e) =>
              handleOptionChange(e, setSelectedCustomerPriority)
            }
          />
          {/* <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              Reference Number:
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Reference Number"
              className="border border-black rounded-md w-48 p-2"
            />
          </div> */}
          {/* <Selector
            heading={"Proactive/Reactive"}
            subHeading={"Choose Proactive/Reactive"}
            options={options.proactiveReactive}
            selectedOption={selectedProactiveReactive}
            handleOptionChange={(e) =>
              handleOptionChange(e, setSelectedProactiveReactive)
            }
          /> */}
        </div>
        <div className="flex flex-col my-5 gap-1">
          <label htmlFor="" className="font-bold">
            Description :
          </label>
          <textarea
            name=""
            id=""
            cols="80"
            rows="5"
            className="border border-black rounded-md"
          />
        </div>

        <FileInput handleFileChange={handleFileChange} />
        <div>
          {attachments.map((file, index) => (
            <div key={index}>
              <p className="text-green">File Name: {file.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-center items-center my-4">
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-400 text-black hover:bg-black hover:text-white font-semibold text-xl py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateTicket;
