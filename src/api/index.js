import { getItemInLocalStorage } from "../utils/localStorage";
import axiosInstance from "./axiosInstance";
import vibeAuth from "./vibeAuth";
export const API_URL = "https://vibecopilot.ai";
export const vibeMedia = "https://vibecopilot.ai/api/media";
const token = getItemInLocalStorage("TOKEN");

export const login = async (data) => axiosInstance.post("/login.json", data);

export const getLogin = async () => axiosInstance.get("/login.json");

// dashboard
export const getTicketDashboard = async () =>
  axiosInstance.get("/pms/admin/complaints/complaints_dashboard.json", {
    params: {
      token: token,
    },
  });
//Assets
export const getSiteAsset = async () =>
  axiosInstance.get("/site_assets.json", {
    params: {
      token: token,
    },
  });
export const getSiteAssetDetails = async (id) =>
  axiosInstance.get(`/site_assets/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postSiteAsset = async (data) =>
  axiosInstance.post(`/site_assets.json`, data, {
    params: {
      token: token,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const EditSiteAsset = async (data, id) =>
  axiosInstance.put(`/site_assets/${id}.json`, data, {
    params: {
      token: token,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// vendor
export const getVendors = async () =>
  axiosInstance.get("/vendors.json", {
    params: {
      token: token,
    },
  });

export const getVendorsDetails = async (id) =>
  axiosInstance.get(`/vendors/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postVendors = async (data) =>
  axiosInstance.post("/vendors.json", data, {
    params: {
      token: token,
    },
  });
export const EditVendors = async (id, data) =>
  axiosInstance.put(`/vendors/${id}.json`, data, {
    params: {
      token: token,
    },
  });

//
export const getComplaints = async () =>
  axiosInstance.get(`/pms/complaints.json`, {
    params: {
      token: token,
    },
  });
export const getAdminComplaints = async () =>
  axiosInstance.get(`/pms/admin/complaints.json`, {
    params: {
      token: token,
    },
  });
export const getCARItems = async (ticketId) =>
  axiosInstance.get(
    `/ticket_items.json?items=true&q[ticket_id_eq]=${ticketId}`,
    {
      params: {
        token: token,
      },
    }
  );

// perPage

export const getAdminPerPageComplaints = async (page, perPage) =>
  axiosInstance.get(`/pms/admin/complaints.json`, {
    params: {
      token: token,
      per_page: perPage,
      page: page,
    },
  });

export const getComplaintsDetails = async (id) =>
  axiosInstance.get(`pms/complaints/${id}.json`, {
    params: {
      token: token,
    },
  });

export const fetchSubCategories = async (categoryId) =>
  axiosInstance.get(`/pms/admin/get_sub_categories.json`, {
    params: {
      token: token,
      category_type_id: categoryId,
    },
  });

export const fetchUserComplaints = async (data) =>
  axiosInstance.get(`complaints.json`, data, {
    params: {
      token: token,
    },
  });

//

export const getUnits = async (floor_id) =>
  axiosInstance.get(`/units.json?q[floor_id_eq]=${floor_id}`, {
    params: {
      token: token,
      // floor_id_eq: floor_id,
    },
  });

export const getFloors = async (data) =>
  axiosInstance.get(`/floors.json`, {
    params: {
      token: token,
    },
  });

export const updateComplaintsDetails = async (id, data) =>
  axiosInstance.put(`pms/complaints/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const getAssignedTo = async (data) =>
  axiosInstance.get(`/users/pms_admins.json`, {
    params: {
      token: token,
    },
  });

export const getIssueType = async () =>
  axiosInstance.get(`pms/admin/complaint_issue_types.json`, {
    params: {
      token: token,
    },
  });

export const getfloorsType = async (buildId) =>
  axiosInstance.get(`/floors.json`, {
    params: {
      token: token,
      building_id: buildId,
    },
  });

export const postComplaintsDetails = async (data) => {
  try {
    const response = await axiosInstance.post(
      `/pms/complaints.json?token=${token}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editComplaintsDetails = async (data) => {
  try {
    const response = await axiosInstance.post(
      `/complaint_logs.json?token=${token}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (data) =>
  axiosInstance.post("/users/change_password.json", data, {
    params: {
      token: token,
    },
  });

// export const editComplaintsDetails = async (compData) => {
//   axiosInstance.post (`/complaint_logs.json?token=${token}`,{
//     params : {
//       token : token,
//       complaint : compData
//     }
//   })
// }

export const getAssetGroups = async () =>
  axiosInstance.get("/asset_groups.json?q[group_for_eq]=asset", {
    params: {
      token: token,
    },
  });
export const getParentAsset = async (id) =>
  axiosInstance.get(
    `/site_assets.json?q[asset_type_eq]=parent&q[asset_group_id_eq]=${id}`,
    {
      params: {
        token: token,
      },
    }
  );

export const getAssetSubGroups = async (groupId) => {
  try {
    const response = await axiosInstance.get("/sub_groups.json", {
      params: {
        token: token,
        group_id: groupId,
      },
    });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching asset subgroups:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const postAssetGroups = async (data) =>
  axiosInstance.post("/asset_groups.json", data, {
    params: {
      token: token,
    },
  });
export const postAssetSubGroups = async (data) =>
  axiosInstance.post("/sub_groups.json", data, {
    params: {
      token: token,
    },
  });

export const postAssetparams = async (data) =>
  axiosInstance.post("/asset_params.json", data, {
    params: {
      token: token,
    },
  });

// asset checklist
// export const postChecklist = async (data) =>
//   axiosInstance.post("checklists.json", data, {
//     params: {
//       token: token,
//     },
//   });

// amc
export const getAMC = async () =>
  axiosInstance.get("/asset_amcs.json", {
    params: {
      token: token,
    },
  });
export const postAMC = async (data) =>
  axiosInstance.post("/asset_amcs.json", data, {
    params: {
      token: token,
    },
  });
export const getAMCDetails = async (assetId) =>
  axiosInstance.get(`/asset_amcs.json?q[asset_id_eq]=${assetId}`, {
    params: {
      token: token,
      // asset_id: assetId,
    },
  });
export const getEditAMCDetails = async (id) =>
  axiosInstance.get(`/asset_amcs/${id}.json`, {
    params: {
      token: token,
      // asset_id: assetId,
    },
  });

export const EditAMCDetails = async (data, id) =>
  axiosInstance.put(`/asset_amcs/${id}.json`, data, {
    params: {
      token: token,
      // asset_id: assetId,
    },
  });
export const getSubGroupsList = async () =>
  axiosInstance.get("/sub_groups.json", {
    params: {
      token: token,
    },
  });
export const getStockGroupsList = async () =>
  axiosInstance.get("/asset_groups.json?q[group_for_eq]=item", {
    params: {
      token: token,
    },
  });

export const postTicketAddItems = async (data) =>
  axiosInstance.post("/pms/admin/complaint_items.json", data, {
    params: {
      token: token,
    },
  });
export const getInventory = async () =>
  axiosInstance.get("/items.json", {
    params: {
      token: token,
    },
  });
export const postInventory = async (data) =>
  axiosInstance.post("/items.json", data, {
    params: {
      token: token,
    },
  });
export const editInventory = async (data, id) =>
  axiosInstance.put(`/items/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const getInventoryDetails = async (id) =>
  axiosInstance.get(`/items/${id}.json`, {
    params: {
      token: token,
    },
  });

export const getChecklist = async () =>
  axiosInstance.get("/checklists.json?q[ctype_eq]=routine", {
    params: {
      token: token,
    },
  });
export const getAssociationList = async (checklistId) =>
  axiosInstance.get(
    `/checklist_associations.json?checklist_id=${checklistId}`,
    {
      params: {
        token: token,
      },
    }
  );

export const getChecklistDetails = async (id) =>
  axiosInstance.get(`/checklists/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postAssetAssociation = async (data) =>
  axiosInstance.post(`/activities.json`, data, {
    params: {
      token: token,
    },
  });

export const getRoutineTask = async () =>
  axiosInstance.get("/activities.json?q[checklist_ctype_eq]=routine", {
    params: {
      token: token,
    },
  });
export const getPPMTask = async () =>
  axiosInstance.get("/activities.json?q[checklist_ctype_eq]=ppm", {
    params: {
      token: token,
    },
  });
export const getRoutineTaskDetails = async (assetId, activityId) =>
  axiosInstance.get(
    `/submissions.json?q[asset_id_eq]=${assetId}&q[activity_id_eq]=${activityId}`,
    {
      params: {
        token: token,
      },
    }
  );

  



export const getAssetPPMActivityDetails = async (assetId) =>
  axiosInstance.get(
    `/submissions.json?q[asset_id_eq]=${assetId}&q[checklist_ctype_eq]=ppm`,
    {
      params: {
        token: token,
      },
    }
  );
export const getPPMDetails = async (assetId, activityId) =>
  axiosInstance.get(
    `/submissions.json?q[asset_id_eq]=${assetId}&q[activity_id_eq]=${activityId}`,
    {
      params: {
        token: token,
      },
    }
  );
// ppm details
export const getAssetReadingDetails = async (assetId) =>
  axiosInstance.get(
    `/submissions.json?q[asset_id_eq]=${assetId}&q[asset_param_id_null]=0`,

    {
      params: {
        token: token,
      },
    }
  );

export const getSetupUsers = async () =>
  axiosInstance.get("/users.json", {
    params: {
      token: token,
    },
  });

export const sendMailToUsers = async (userId) =>
  axiosInstance.get(`/users/send_welcome_email.json?id=${userId}`, {
    params: {
      token: token,
    },
  });
export const getAttendance = async () =>
  axiosInstance.get("/attendances.json", {
    params: {
      token: token,
    },
  });
export const getEmployeeAttendance = async (userId) =>
  axiosInstance.get(`/attendances.json?q[attendance_of_id]=${userId}`, {
    params: {
      token: token,
    },
  });

// Events

export const getEvents = async () =>
  axiosInstance.get("/events.json", {
    params: {
      token: token,
      // token: "775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6",
    },
  });
export const getEventsDetails = async (id) =>
  axiosInstance.get(`/events/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postEvents = async (data) =>
  axiosInstance.post("/events.json", data, {
    params: {
      token: token,
    },
  });

//broadcast
export const getBroadCast = async () =>
  axiosInstance.get("/notices.json", {
    params: {
      token: token,
      // token: "775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6",
    },
  });
export const postBroadCast = async (data) =>
  axiosInstance.post("/notices.json", data, {
    params: {
      token: token,
    },
  });

export const getBroadcastDetails = async (id) =>
  axiosInstance.get(`/notices/${id}.json`, {
    params: {
      token: token,
    },
  });

//services
export const getServicesTaskDetails = async (serviceId, activityId) =>
  axiosInstance.get(
    `/submissions.json?q[soft_service_id_eq]=${serviceId}&q[activity_id_eq]=${activityId}`,
    {
      params: {
        token: token,
      },
    }
  );

export const postSoftServices = async (data) =>
  axiosInstance.post("/soft_services.json", data, {
    params: {
      token: token,
    },
  });
export const EditSoftServices = async (data, id) =>
  axiosInstance.put(`/soft_services/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getSoftServicesDetails = async (id) =>
  axiosInstance.get(`/soft_services/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postServiceAssociation = async (data) =>
  axiosInstance.post(`/activities.json`, data, {
    params: {
      token: token,
    },
  });

export const getSoftServices = async () =>
  axiosInstance.get("/soft_services.json", {
    params: {
      token: token,
    },
  });
export const getServicesChecklist = async () =>
  axiosInstance.get("/checklists.json?q[ctype_eq]=soft_service", {
    params: {
      token: token,
    },
  });
export const postChecklist = async (data) =>
  axiosInstance.post("/checklists.json", data, {
    params: {
      token: token,
    },
  });
export const editChecklist = async (data, id) =>
  axiosInstance.put(`/checklists/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getServicesChecklistDetails = async (checklistId) =>
  axiosInstance.get(`/checklists.json/${checklistId}`, {
    params: {
      token: token,
    },
  });

export const getAssetPPMList = async () =>
  axiosInstance.get(`/checklists.json?q[ctype_eq]=ppm`, {
    params: {
      token: token,
    },
  });
export const getServicesPPMDetails = async (id) =>
  axiosInstance.get(`/checklists/${id}.json?q[ctype_eq]=ppm`, {
    params: {
      token: token,
    },
  });

//
export const getServicesRoutineList = async () =>
  axiosInstance.get(`/activities.json?q[soft_service_id_null]=0`, {
    params: {
      token: token,
    },
  });
// export const getServicesRoutineList = async () =>
//   axiosInstance.get(`/checklists.json?q[ctype_eq]=routine`, {
//     params: {
//       token: token,
//     },
//   });
export const getServicesRoutineDetails = async (id) =>
  axiosInstance.get(`/checklists/${id}.json?q[ctype_eq]=routine`, {
    params: {
      token: token,
    },
  });

// vibe

export const vibeLogin = async (data) => vibeAuth.post("/api/login/", data);

// VIBE CALENDAR
export const getVibeCalendar = async (vibeUserId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/calender/get-calender-events/?user_id=${vibeUserId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    throw error;
  }
};

//VIBE USER
export const getVibeUsers = async (vibeUserId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-users/?user_id=${vibeUserId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    throw error;
  }
};

// vibe Create calendar event
export const postNewCalendarEvent = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/create-event/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
// vibe Create calendar Task
export const postCalendarTask = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/board/add-task/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};

// vibe meetings
// /api/employee/calender/meet/create-zoom-meeting/
export const CreateVibeZoomMeeting = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/meet/create-zoom-meeting/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const CreateVibeTeamMeeting = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/create-teams-meeting/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const CreateVibeMeeting = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/create-meeting/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const UpdateVibeTask = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/calender/update-calender-event/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
// vibeMyBoardTask
export const getVibeMyBoardTask = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/my_board/get-task/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const updateTaskStatus = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/update-status-task/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeTaskUserAssign = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-task-assigned-users/?user_id=${userId}&task_id=${taskId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const deleteVibeTask = async (userId, taskId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/board/task/trash/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeTaskChecklist = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-task_checklists/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeSubTaskChecklist = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-subtask/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeActionAndChat = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-action-and-chats/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeTaskAttachment = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-attachment/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeComments = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-comments/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const updateVibeAssignedUser = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/task/update-assign-task/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const updateVibeUserTask = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/update-user-task/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeStatus = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/task/get-status/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const API_URL_WS = "wss://vibecopilot.ai/ws";
export const getVibeMedia = async () => {
  try {
    const response = await vibeAuth.get(
      `https://vibecopilot.ai/api/media/`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const postVibeTaskChat = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/task/add-message/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const postVibeBackground = async (data) => {
  try {
    const response = await vibeAuth.post(`/api/employee/add_bg_image/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeBackground = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get_bg_image/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeMeeting = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/calender/get-meeting/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const getVibeMeetingDetails = async (userId, meetingId) => {
  try {
    const response = await vibeAuth.get(
      // `/api/employee/calender/get-specific_event/?user_id=32&category=Meeting&object_id=349`,
      `/api/employee/calender/get-specific_event/?user_id=${userId}&category=Meeting&object_id=${meetingId}&summery=true`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting meeting details:", error);
    throw error;
  }
};
export const generateVibeMeetingSummary = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/meet/generate-summery/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating calendar events:", error);
    throw error;
  }
};
export const requestVibeDueDate = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/request/make_request/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Requesting Due Date:", error);
    throw error;
  }
};
export const updateVibeChecklistItems = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/task/update-checklist-fields/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating Vibe checklist Items :", error);
    throw error;
  }
};
export const updateSalesView = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/filter/add-filter/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating sales view :", error);
    throw error;
  }
};
export const postVibeChecklist = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/task/create-task-checklist/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating checklist :", error);
    throw error;
  }
};
export const deleteVibeTaskChecklist = async (taskDeleteIDCheckList, user_id) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/task/checklist/trash/?checklist_id=${taskDeleteIDCheckList}&user_id=${user_id}`,
      
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating checklist :", error);
    throw error;
  }
};
export const updateVibeSubTask = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/task/sub_task/update-checklist-task/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating checklist :", error);
    throw error;
  }
};
export const updateVibeUserSubTask = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/task/sub_task/update-checklist-task/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating subtask :", error);
    throw error;
  }
};
export const createVibeChecklistSubTask = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/task/checklist/create-task/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating subtask :", error);
    throw error;
  }
};
export const deleteVibeSubTask = async (taskId,userId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/task/checklist/task/trash/?task_id=${taskId}&user_id=${userId}`,
     
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating subtask :", error);
    throw error;
  }
};
export const createVibeChildSubTask = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/subtask/child/create/`,
     data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating child subtask :", error);
    throw error;
  }
};
export const updateSubTaskChild = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/subtask/child/update/`,
     data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating child subtask :", error);
    throw error;
  }
};
export const deleteTaskChecklistSubTaskChild = async (taskChildId,userId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/subtask/child/delete/?task_child_id=${taskChildId}&user_id=${userId}`,
     
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating child subtask :", error);
    throw error;
  }
};
export const addVibeTaskAttachment = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/task/add-attachment/`,
     data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting Attachments :", error);
    throw error;
  }
};
export const deleteVibeTaskAttachment = async (attachmentId, taskId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/task/delete-attachment/?attachment_id=${attachmentId}&task_id=${taskId}`,
     
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting Attachments :", error);
    throw error;
  }
};
