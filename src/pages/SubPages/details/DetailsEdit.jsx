import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import {
  editComplaintsDetails,
  // editComplaintsDetails,
  fetchSubCategories,
  getAssignedTo,
  getComplaintsDetails,
  updateComplaintsDetails,
} from "../../../api";
import { useParams } from "react-router-dom";
import { getItemInLocalStorage } from "../../../utils/localStorage";

const DetailsEdit = () => {
  const { id } = useParams();
  const [ticketinfo, setTicketInfo] = useState({});
  const [editTicketInfo, setEditTicketInfo] = useState({});
  const [subCate, setSubCate] = useState([]);
  const [assignedUser, setAssignedUser] = useState();
  const [categ , setCateg] = useState([])
  const [unit, setUnit] = useState([])
  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",  
    heading: "",
    text: "",
    assigned_to: "",
    status: "",
    priority: "",
    issue_status: "",
    issue_type: "",
    comment: "",
    of_phase: "pms",
    complaint_id: id,
    root_cause: "",
    impact:"",
    corrective_action: "",
    proactive_reactive: "",
    preventive_action: ""
    
  });
  console.log(formData);

  const categories = getItemInLocalStorage("categories");
  // console.log(categories , "Catss")
  const statuses = getItemInLocalStorage("STATUS");

  // const complaint = getItemInLocalStorage("complaint")

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getComplaintsDetails(id);
        setFormData({...formData, heading:response.data.heading, assigned_to: response.data.assigned_to, priority: response.data.priority, text: response.data.text,
           issue_status: response.data.issue_status , category_type_id: response.data.category_type_id, sub_category_id: response.data.sub_category_id,
          issue_type: response.data.issue_type })
        setTicketInfo(response.data);
        setEditTicketInfo(response.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    const fetchAssignedTo = async () => {
      try {
        const response = await getAssignedTo();
        setAssignedUser(response.data);
        
        setEditTicketInfo(response.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
    fetchAssignedTo();
  }, [id]);

  
  // const handleChange = async (e) => {
  //   async function fetchSubCategory(id) {
  //     try {
  //       const response = await getComplaintsDetails(id);
  //      setFormData({...formData, category_type_id: response.data.category_type_id, sub_category_id: response.data.sub_category_id })
  //       console.log("Categories" ,response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  
  //   if (e.target.type === "select-one" && e.target.name === "categories") {
  //     const categoryId = Number(e.target.value);
  //     await fetchSubCategory(categoryId);
  //     setFormData({
  //       ...formData,
  //       category_type_id: categoryId,
  //       sub_category_id: "", // Reset sub-category when category changes
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  // };
  

  const handleTicketDetails = (e, name) => {
    setFormData({
      ...formData,
     [e.target.name]: e.target.value,
    });
  };

  const saveEditDetails = async () => {
    try {
      await editComplaintsDetails(formData);
      console.log("Edited Ticket Details:",formData);
    } catch (error) {
      console.error("Error Saving in details update: ", error);
    }
  };

  console.log("A", assignedUser)

  const ticketDetails = [
    { title: "Ticket No.:", description: ticketinfo.ticket_number || "" },
    {
      title: "Title :",
      description: (
        
        <p> 
          {formData.heading}
        </p>      
      ),
    },
    
    

    {
      title: "Categories :",
      description: (
        <div className="flex gap-3 items-center">
          <select
            id="two"
            value={formData.category_type_id} 
            name="categories"
            onChange={e => setFormData({...formData, category_type_id: e.target.value})}
            className="border p-1 px-4 border-gray-500 rounded-md"
          >
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option
                value={category.id} key={category.id} // Change value here
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      ),
    },
    
    {
      title: "SubCategories :",
  description: (
    <div className="flex gap-3 items-center">
      <select
        id="five"
        value={formData.sub_category_id} 
        name="sub_category_id"
        onChange={e => setFormData({...formData, sub_category_id: e.target.value})}
        className="border p-2 px-4 border-gray-500 rounded-md"
      >
        <option value="">Sub Category</option>
        {unit?.map((floor) => ( 
          <option key={floor.id} value={floor.id}>
            {floor.name}
          </option>
        ))}
      </select>
    </div>
      ),
    },
    {
      title: "Status :",
      description: (
        <select
          
          value={formData.issue_status}
          name="issue_status"
          onChange={e=> setFormData({...formData, issue_status: e.target.value})}
          className="border p-1 px-4 grid border-gray-500 rounded-md"
        >
          {statuses?.map((status) => (
            <option value={status.id} key={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      ),
    },
    
    {
      title: "Issue Type :",
      description: (
        <select
          name="issue_type"
          value={formData.issue_type}
          onChange={e => setFormData({...formData, issue_type: e.target.value})}
          className="border p-1 px-4 border-gray-400 rounded-md"
        >
          <option value="Request">Request</option>
          <option value="Complaint">Complaint</option>
          <option value="Suggestion">Suggestion</option>
        </select>
      ),
    },
    {
      title: "Priority :",
      description: (
        <select
          name="priority"
          value={formData.priority || ""}
          onChange={e => setFormData({...formData, priority: e.target.value})}
          className="border p-1 px-4 border-gray-400 rounded-md"
        >
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
          <option value="P4">P4</option>
          <option value="P5">P5</option>
        </select>
      ),
    },
   
    {
      title: "Assigned To:",
      description: (
        <select
    value={formData.assigned_to}
    name="assigned_to"
  onChange={(e) => setFormData({ ...formData, assigned_to: e.target.value })}
  className="border p-1 px-4 border-gray-500 rounded-md"
>
  <option value="">Select Assign To</option>
  {assignedUser?.map((assign) => (
    <option key={assign.id} value={assign.id} selected={assign.id === formData.assigned_to}>
      {assign.firstname} {assign.lastname}
    </option>
  ))}
</select>

      ),
    },
    
    
    {
      title: "Root Cause :",
      description: (
        <div className="border rounded-lg">
            <textarea
              name="heading"
              // placeholder="heading"
              cols="15"
              rows="1"
              // value={formData.heading}
              // onChange={handleChange}
              className="border border-black"
            ></textarea>
           </div>   
      ),
    },
    {
      title: "Impact :",
      description: (
        <div className="border rounded-lg">
            <textarea
              name="heading"
              // placeholder="heading"
              cols="15"
              rows="1"
              // value={formData.heading}
              // onChange={handleChange}
              className="border border-black"
            ></textarea>
           </div>   
      ),
    },
    {
      title: "Corrective Action :",
      description: (
        <div className="border rounded-lg">
            <textarea
              name="heading"
              // placeholder="heading"
              cols="15"
              rows="1"
              // value={formData.heading}
              // onChange={handleChange}
              className="border border-black"
            ></textarea>
           </div>   
      ),
    },
    {
      title: "Proactive/Reactive :",
      description: (
        <div className="border rounded-lg">
            <textarea
              name="heading"
              // placeholder="heading"
              cols="15"
              rows="1"
              // value={formData.heading}
              // onChange={handleChange}
              className="border border-black"
            ></textarea>
           </div>   
      ),
    },
    {
      title: "Preventive Action :",
      description: (
        <div className="border rounded-lg ">
            <textarea
              name="heading"
              // placeholder="heading"
              cols="15"
              rows="1"
              // value={formData.heading}
              // onChange={handleChange}
              className="border border-black"
            ></textarea>
           </div>   
      ),
    },
  ];

  const Attachments = [{ title: "Attachment 1", description: " " }];

  return (

    <div className="">
    <div className="flex flex-col justify-around my-10 ">
      <div className="">
        <Detail details={ticketDetails} heading={"Edit Ticket Details"} />
      </div>


      <div className="p-1">
        <div className="p-4">
          <label htmlFor="description" className="font-medium ">Additonal Notes:</label>
          <textarea
             name="text"
            value={formData.text }
            className="border p-1 px-2 border-gray-400 rounded-md w-full"
            onChange={e => setFormData({...formData, text:e.target.value})}
          />
        </div>
      </div>

      <div className="p-1">
        <div className="p-4">
          <label htmlFor="description" className="font-medium ">Comments:</label>
          <textarea
             name="text"
            value={formData.heading }
            className="border p-1 px-2 border-gray-400 rounded-md w-full"
            onChange={e => setFormData({...formData, heading:e.target.value})}
          />
        </div>
      </div>
    </div>
       <div className="items-center gap-6 align-middle">
    <input type="file" name="attachments" id="" />
    </div>
    <div className=" m-10 w-full flex justify-center  ">
      <button
        onClick={saveEditDetails}
        className="bg-black px-4 font-medium rounded-md p-2 text-white"
      >
        Save
      </button>
    </div>
  </div>

  
  );
};

export default DetailsEdit;