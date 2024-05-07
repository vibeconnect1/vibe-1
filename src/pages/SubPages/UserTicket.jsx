import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { fetchSubCategories, getComplaints, getIssueType, getUnits, getfloorsType, postComplaintsDetails } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";
// import axios from "axios";
import toast from "react-hot-toast";

const UserTicket = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [units, setUnits] = useState([]);
  const [unitName, setUnitName] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState();
  const [disSubmit, setDisSubmit] = useState(false);
  const [floor, setFloor] = useState([])

  const siteID = getItemInLocalStorage("SITEID")
  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",
    text: "",
    heading: "",
    of_phase: "pms",
    site_id: siteID,
    documents : [],
    issue_type_id: "",
    complaint_type: "",
    building_name: "",
    unit_id: "",
    floor_name: ""

  });

  console.log(formData);
  // console.log(attachments);

  const categories = getItemInLocalStorage("categories");
  console.log("categories-- ", categories);

  const building = getItemInLocalStorage("Building");
  console.log("BB", building);

  // const siteID = getItemInLocalStorage("SITEID")
  // setSelectedSiteId(siteID) 
  console.log("site--", siteID)

  // const complaitType = getItemInLocalStorage("complaintType")
  // console.log("complaintType", complaitType)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14);
      console.log("subCategories:", response);
    };


    const fechIssueType = async () => {
      const issue = await getIssueType()
      console.log("Issue", issue.data)
    }
    fetchData();
    fechIssueType();
  }, []);

  const handleChange = async (e) => {
    async function fetchSubCategory(categoryId) {
      try {
        const cat = await fetchSubCategories(categoryId);
        setUnits(cat.data.sub_categories.map((item) => ({ name: item.name, id: item.id })));
        console.log(cat);
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

  const buildingChange = async (e) => {
    async function fetchUnits(BuildID) {

      try {
        const build = await getUnits(BuildID);
        console.log("units n", build.data);
        setUnitName(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    }

    async function fectFloors(FloorID) {
      try {
        const floor = await getfloorsType(FloorID);
        console.log("Floors --", floor.data);
        setFloor(floor.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    }

    if (e.target.type === "select-one" && e.target.name === "building_name") {
      const BuildID = Number(e.target.value);
      await fetchUnits(BuildID);
      await fectFloors(BuildID);
      setFormData({
        ...formData,
        building_name: BuildID,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }


  // const handleFileChange = async (e) => {
  //   const files =  e.target.files;
  // const formData = new FormData();

  //   for (const file of files) {
  //     formData.append('attachments[]', file);
  //   }
  //   formData.append("category_type_id", 18)
  //   formData.append("heading", "head")
  //   formData.append("category_type", "")
  //   try {
  //           const response = await fetch('http://13.215.74.38/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6', {
  //             method: 'POST',
  //             body: formData,
  //           })

  //           if (!response.ok) {
  //             console.log("Not Correct ")
  //           } else {
  //             error;
  //           }
  //         }catch(error){
  //           console.error(error);
  //         }
          
  //   setFormData({
  //     ...formData,
  //     attachments: files, // Update attachments field instead of attachments
  //   });
  // }
  


  const handleFileChange = async (event) => {
    const files = event.target.files;
    const base64Array = [];

    for (const file of files) {
      const base64 = await convertFileToBase64(file);
      base64Array.push(base64);
    }
    console.log("Array base64-", base64Array);
    const formattedBase64Array = base64Array.map((base64) => {
      return base64.split(',')[1];
    });
    
    console.log("Fornat", formattedBase64Array);
    
      setFormData({
        ...formData, 
        documents : formattedBase64Array
      })
  };
  

   const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };


//    const handleFileChange = async (event) => {
//     const files = event.target.files;
//     const formData = new FormData();

//     for (const file of files) {
//       formData.append('attachments[]', file);
//     }
// formData.append('complaint_type',  "Complaint" )
// formData.append('building_name', 41)

// formData.append('unit_id', 245)
//     formData.append('category_type_id', "21");
//     formData.append('sub_category_id', "17");
//     formData.append('text', "hhhh");
//     formData.append('heading', "ppppp");
//     formData.append('of_phase', "pms");
//     formData.append('site_id', selectedSiteId);

//     try {
//       const response = await fetch('http://13.215.74.38/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload files');
//       }

//       console.log(response, "resss");

//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.heading || !formData.category_type_id || !formData.sub_category_id) {
        return toast.error("All Fields Required")
      }

      setDisSubmit(true)
      toast.loading("Submitting request Please Wait!")

      const response = await postComplaintsDetails(formData);
      console.log('Complaint submitted successfully:', response);
      setFormData({
        category_type_id: "",
        sub_category_id: "",
        text: "",
        heading: "",
        of_phase: "pms",
        site_id: selectedSiteId,
        documents: [],
        issue_type_id: "",
        complaint_type: "",
        building_name: "",
        floor_name: "",
        unit_id: ""
      });

      toast.dismiss();

      toast.success("Complaint sent successfully");
      navigate('/mytickets');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };



  const handleReset = () => {
    setDescription("");
    setAttachments([]);
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="fixed left-0 top-0 h-full md:static md:h-auto md:flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center overflow-x-auto w-full max-w-screen-xl sm:w-full">
        <form
          className="border border-gray-300 rounded-lg md:p-8 w-full max-w-[60rem]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
            New Ticket
          </h2>
          <div className="ml-5 flex flex-col items-start w-full gap-4">

            {/* Related To :*/}
            <div className="flex gap-5 items-center">
              <label htmlFor="" className="font-semibold">
                Related To:
              </label>
              <select
                id="five"
                value={formData.complaint_type}
                name="complaint_type"
                onChange={e => setFormData({ ...formData, complaint_type: e.target.value })}
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Issue Type</option>
                <option value="Complaint">Complaint</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Request">Request</option>

              </select>
            </div>



            {/* Type Area */}
            <div className="flex gap-5 items-center">
              <label htmlFor="" className="font-semibold">
                Type of:
              </label>
              <select
                id="five"
                value={formData.complaint_type}
                name="complaint_type"
                onChange={e => setFormData({ ...formData, complaint_type: e.target.value })}
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Issue Type</option>
                <option value="Complaint">Complaint</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Request">Request</option>

              </select>


            </div>

            <div className="flex justify-around items-start w-full">
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Tower Name :
                </label>
                <select
                  id="builiding_name"
                  value={formData.building_name}
                  name="building_name"
                  onChange={buildingChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Tower</option>
                  {building?.map(build => (
                    <option
                      key={build.id}

                      value={build.id}
                    >
                      {build.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Floor Name */}
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Floor Name :
                </label>
                <select
                  value={formData.floor_name}
                  name="floor_name"
                  onChange={buildingChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Floor</option>
                  {floor?.map(floorno => (
                    <option
                      key={floorno.id}
                      // onClick={() => console.log("checking-category")}
                      value={floorno.id}
                    >
                      {floorno.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Unit Name :
                </label>

                <select
                  id="six"
                  value={formData.unit_id}
                  name="unit_id"
                  onChange={buildingChange}
                  className="border p-2 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Unit Name</option>
                  {unitName?.map(floor => (
                    <option key={floor.id} value={floor.id}>
                      {floor.name}
                    </option>
                  ))}
                </select>


              </div>
            </div>
            <div className="flex justify-around w-full">
              <div className="flex gap-3 items-center">
                <label className="font-semibold">Categories:</label>
                <select
                  id="two"
                  value={formData.catogories}
                  name="categories"
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Category</option>
                  {categories?.map(category => (
                    <option
                      key={category.id}
                      onClick={() => console.log("checking-category")}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 items-center">
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
                  {units?.map(floor => (
                    <option key={floor.id} value={floor.id}>
                      {floor.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="" className="font-semibold">
              Heading:
            </label>
            <textarea
              name="heading"
              placeholder="heading"
              cols="15"
              rows="1"
              value={formData.heading}
              onChange={handleChange}
              className="border border-black"
            ></textarea>
          </div>
          <div className="flex flex-col my-5 gap-1 md:ml-5">
            <label htmlFor="" className="font-bold">
              Description:
            </label>
            <textarea
              name="text"
              placeholder=" Describe your concern!"
              id=""
              cols="80"
              rows="5"
              className="border border-black rounded-md"
              value={formData.text}
              onChange={handleChange}
            />
          </div>

          <input
            type="file"
            name="documents"
            id="documents"
            onChange={handleFileChange}
            multiple
            className="ml-5"
          />
          <div>
            
          </div>
          <div className="flex gap-5 justify-center items-center my-4">
            <button
              type="submit"
              className={`text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded ${disSubmit ? "bg-gray-600" : "bg-black"}`}
              // disabled={disSubmit}
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-gray-400 text-black hover:bg-black hover:text-white font-semibold text-xl py-2 px-4 rounded"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>


  );
};

export default UserTicket;
