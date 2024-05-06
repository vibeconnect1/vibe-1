import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import {
  fetchSubCategories,
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
  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",
  });
  console.log(formData);

  const categories = getItemInLocalStorage("categories");
  console.log("categories-- ", categories);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getComplaintsDetails(id);
        setTicketInfo(response.data);
        setEditTicketInfo(response.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchDetails();
  }, [id]);

  // const handleChange = async (e) => {
  //   async function fetchSubCategory(categoryId) {
  //     try {
  //       const cat = await fetchSubCategories(categoryId);
  //       setUnits(
  //         cat.data.sub_categories.map((item) => ({
  //           name: item.name,
  //           id: item.id,
  //         }))
  //       );
  //       console.log(cat);
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
  //       sub_category_id: "",
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  // };

  const handleChange = async (e) => {
    async function fetchSubCategory(categoryId) {
      try {
        const cat = await fetchSubCategories(categoryId);
        setSubCate(cat.data.sub_categories.map((item) => ({ name: item.name, id: item.id })));
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


  const handleTicketDetails = (e, key) => {
    setEditTicketInfo({
      ...editTicketInfo,
      [key]: e.target.value,
    });
  };

  const saveEditDetails = async () => {
    try {
      await updateComplaintsDetails(editTicketInfo);
      console.log("Edited Ticket Details:", editTicketInfo);
    } catch (error) {
      console.error("Error Saving in details update: ", error);
    }
  };

  const ticketDetails = [
    { title: "Ticket No.:", description: ticketinfo.ticket_number || "" },
    {
      title: "Title :",
      description: (
        <input
          type="text"
          value={editTicketInfo.heading || ""}
          className="border p-1 px-4 border-gray-400 rounded-md"
          onChange={(e) => handleTicketDetails(e, "heading")}
        />
      ),
    },
    {
      title: "Status :",
      description: (
        <select
          name="status"
          value={editTicketInfo.issue_status || ""}
          onChange={(e) => handleTicketDetails(e, "issue_status")}
          className="border p-1 px-4 border-gray-400 rounded-md"
        >
          <option value="Complete">Complete</option>
          <option value="Closed">Closed</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Work In Progress">Work In Progress</option>
        </select>
      ),
    },
    {
      title: "Issue Type :",
      description: (
        <select
          name="type"
          value={editTicketInfo.issue_type || ""}
          onChange={(e) => handleTicketDetails(e, "issue_type")}
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
          value={editTicketInfo.priority || ""}
          onChange={(e) => handleTicketDetails(e, "priority")}
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
      title: "Category:",
      description: (
        <select
          id="two"
          value={formData.category_type_id || ""}
          name="categories"
          onChange={handleChange}
          className="border p-1 px-4 border-gray-500 rounded-md"
        >
          <option value="">Select Category</option>
          {categories?.map((category) => (
            <option
              key={category.name}
              onClick={() => console.log("checking-category")}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      ),
    },
    // ticketinfo.sub_category
    { title: "Subcategory:", description: (
              <select
                id="five"
                value={formData.subCategories}
                name="sub_category_id"
                onChange={handleChange}
                className="border p-1 px-4 grid border-gray-500 rounded-md"
              >
                <option value="">Sub Category</option>
                {subCate?.map((floor) => (
                  <option value={floor.id} key={floor.id}>
                    {floor.name}
                  </option>
                ))}
              </select>
    )},
    { title: "Assigned To:", description: "" },
    { title: "Description:", description:(
      <textarea
          
          value={editTicketInfo.text || ""}
          className="border p-1 px-2 border-gray-400 rounded-md w-full"
          onChange={(e) => handleTicketDetails(e, "text")}
        />
    ) },
    { title: "Comment:", description:(
      <textarea
          placeholder="Add Comment"
          value={editTicketInfo.feedbacks || ""}
          className="border p-1 px-2 border-gray-400 rounded-md w-full"
          onChange={(e) => handleTicketDetails(e, "feedbacks")}
        />
    ) },
  ];

  const Attachments = [{ title: "Attachment 1", description: " " }];

  return (
    <div className="">
      <div className="flex flex-col justify-around my-10 ">
        <div className="">
          <Detail details={ticketDetails} heading={"Edit Ticket Details"} />
        </div>

        <div className="border m-10" />
        <Detail details={Attachments} heading={"Attachments"} />
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
