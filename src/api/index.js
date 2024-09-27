import { data } from "autoprefixer";
import { getItemInLocalStorage } from "../utils/localStorage";
import axiosInstance from "./axiosInstance";
import HrmsAuth from "./HrmsAuth";
import vibeAuth from "./vibeAuth";
export const API_URL = "https://vibecopilot.ai";
export const vibeMedia = "https://vibecopilot.ai/api/media/";
const token = getItemInLocalStorage("TOKEN");
export const domainPrefix = "https://admin.vibecopilot.ai";
// export const domainPrefix = "http://13.215.74.38";
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
export const getPerPageSiteAsset = async (page, perPage) =>
  axiosInstance.get(`/site_assets.json?per_page=${perPage}&page=${page}`, {
    params: {
      token: token,
    },
  });
export const getSiteAsset = async (page) =>
  axiosInstance.get(`/site_assets.json`, {
    params: {
      token: token,
    },
  });
export const getMeteredSiteAsset = async () =>
  axiosInstance.get(`/site_assets.json?q[is_meter]=true`, {
    params: {
      token: token,
    },
  });
export const getSiteSearchedAsset = async (oem, assetName, building, unit) =>
  axiosInstance.get(
    `/site_assets.json?q[oem_name_cont]=${oem}&q[name_cont]=${assetName}&q[building_name_cont]=${building}&q[unit_name_cont]=${unit}`,
    {
      params: {
        token: token,
      },
    }
  );
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

// other bills
export const postOtherBills = async (data) =>
  axiosInstance.post("/other_bills.json", data, {
    params: {
      token: token,
    },
  });
export const getOtherBills = async () =>
  axiosInstance.get("/other_bills.json", {
    params: {
      token: token,
    },
  });
export const getOtherBillsDetails = async (id) =>
  axiosInstance.get(`/other_bills/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editOtherBillsDetails = async (id, data) =>
  axiosInstance.put(`/other_bills/${id}.json`, data, {
    params: {
      token: token,
    },
  });
//polls
export const postPolls = async (data) =>
  axiosInstance.post("/polls.json", data, {
    params: {
      token: "775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6",
    },
  });
export const postPollVote = async (id, data) =>
  axiosInstance.post(`/polls/${id}/poll_votes.json`, data, {
    params: {
      token: "775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6",
    },
  });
export const getPolls = async () =>
  axiosInstance.get("/polls.json", {
    params: {
      token: "775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6",
    },
  });

// vendor
export const getVendors = async () =>
  axiosInstance.get("/vendors.json", {
    params: {
      token: token,
    },
  });
export const getVendorCategory = async () =>
  axiosInstance.get("/vendor_categories.json", {
    params: {
      token: token,
    },
  });
export const getVendorCategoryDetails = async (id) =>
  axiosInstance.get(`/vendor_categories/${id}.json`, {
    params: {
      token: token,
    },
  });
export const deleteVendorCategory = async (id) =>
  axiosInstance.delete(`/vendor_categories/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postVendorCategory = async (data) =>
  axiosInstance.post("/vendor_categories.json", data, {
    params: {
      token: token,
    },
  });
export const postVendorType = async (data) =>
  axiosInstance.post("/vendor_suppliers.json", data, {
    params: {
      token: token,
    },
  });
export const editVendorTypeDetails = async (id, data) =>
  axiosInstance.put(`/vendor_suppliers/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getVendorsType = async () =>
  axiosInstance.get("/vendor_suppliers.json", {
    params: {
      token: token,
    },
  });
export const getVendorsTypeDetails = async (id) =>
  axiosInstance.get(`/vendor_suppliers/${id}.json`, {
    params: {
      token: token,
    },
  });

export const editVendorType = async (id, data) =>
  axiosInstance.patch(`/vendor_suppliers/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const editVendorCategory = async (id, data) =>
  axiosInstance.patch(`/vendor_categories/${id}.json`, data, {
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
export const deleteVendorType = async (id) =>
  axiosInstance.delete(`/vendor_suppliers/${id}.json`, {
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
export const getHelpDeskCategoriesSetup = async () =>
  axiosInstance.get(`/pms/admin/helpdesk_categories.json`, {
    params: {
      token: token,
    },
  });

export const getHelpDeskCategoriesSetupDetails = async (id) =>
  axiosInstance.get(`/pms/admin/helpdesk_categories/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editHelpDeskCategoriesSetupDetails = async (id, data) =>
  axiosInstance.put(`/pms/admin/helpdesk_categories/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postHelpDeskCategoriesSetup = async (data) =>
  axiosInstance.post(`/pms/admin/helpdesk_categories.json`, data, {
    params: {
      token: token,
    },
  });
export const postHelpDeskSubCategoriesSetup = async (data) =>
  axiosInstance.post(`/pms/admin/create_helpdesk_sub_category.json`, data, {
    params: {
      token: token,
    },
  });
export const getHelpDeskEscalationSetup = async () =>
  axiosInstance.get(`/pms/admin/helpdesk_categories/complaint_workers.json`, {
    params: {
      token: token,
    },
  });
export const deleteEscalationRule = async (id) =>
  axiosInstance.delete(`/pms/admin/delete_complaint_worker/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postHelpDeskEscalationSetup = async (data) =>
  axiosInstance.post(`/pms/admin/create_complaint_worker.json`, data, {
    params: {
      token: token,
    },
  });
export const deleteHelpDeskCategorySetup = async (id, data) =>
  axiosInstance.patch(`/pms/admin/modify_helpdesk_category/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getGRN = async () =>
  axiosInstance.get(`/grn_details.json`, {
    params: {
      token: token,
    },
  });

export const postHelpDeskResolutionEscalationSetup = async (data) =>
  axiosInstance.post(`/pms/admin/create_escalation.json`, data, {
    params: {
      token: token,
    },
  });
export const getHelpDeskSubCategoriesSetup = async () =>
  axiosInstance.get(`/pms/admin/get_sub_categories.json`, {
    params: {
      token: token,
    },
  });
export const getHelpDeskSubCategoriesSetupDetails = async (id) =>
  axiosInstance.get(`/pms/admin/get_sub_categories/${id}.json`, {
    params: {
      token: token,
    },
  });
export const getHelpDeskStatusSetup = async () =>
  axiosInstance.get(`/pms/admin/helpdesk_categories/complaint_statuses.json`, {
    params: {
      token: token,
    },
  });
export const getHelpDeskStatusDetailsSetup = async (id) =>
  axiosInstance.get(
    `/pms/admin/helpdesk_categories/complaint_statuses/${id}.json`,
    {
      params: {
        token: token,
      },
    }
  );
export const editHelpDeskStatusDetailsSetup = async (id, data) =>
  axiosInstance.put(
    `/pms/admin/helpdesk_categories/complaint_statuses/${id}.json`,
    data,
    {
      params: {
        token: token,
      },
    }
  );
export const postHelpDeskStatusSetup = async (data) =>
  axiosInstance.post(`/pms/admin/create_complaint_statuses.json`, data, {
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

export const getFloors = async (buildId) =>
  axiosInstance.get(`/floors.json?q[building_id_eq]=${buildId}`, {
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
export const getAssetGroupsDetails = async (id) =>
  axiosInstance.get(`/asset_groups/${id}.json?q[group_for_eq]=asset`, {
    params: {
      token: token,
    },
  });
export const editAssetGroupsDetails = async (id, data) =>
  axiosInstance.put(`/asset_groups/${id}.json?q[group_for_eq]=asset`, data, {
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
export const getAssetparamsDetails = async (id) =>
  axiosInstance.get(`/asset_params/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editAssetparamsDetails = async (id, data) =>
  axiosInstance.put(`/asset_params/${id}.json`, data, {
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
// export const PostItemsApproval = async (data) =>
//   axiosInstance.post("/pms/admin/complaint_items.json", data, {
//     params: {
//       token: token,
//     },
//   });
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
export const getScheduleDetails = async (sId, activityId) =>
  axiosInstance.get(
    `/submissions.json?q[soft_service_id_eq]=${sId}&q[activity_id_eq]=${activityId}`,
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
export const getAssetPPMs = async (assetId) =>
  axiosInstance.get(`/site_assets/${assetId}/asset_ppm_show.json`, {
    params: {
      token: token,
    },
  });

export const getSoftServiceStatus = async (data) =>
  axiosInstance.get(
    `/activities.json?q[soft_service_id_null]=0&q[status_eq]=${data}`,
    {
      params: {
        token: token,
      },
    }
  );

//booking & request
export const postFlightTicketRequest = async (data) =>
  axiosInstance.post(`/flight_requests.json`, data, {
    params: {
      token: token,
    },
  });
// ppm details/

export const getPPMDetails = async (assetId, activityId) =>
  axiosInstance.get(
    `/submissions.json?q[asset_id_eq]=${assetId}&q[activity_id_eq]=${activityId}`,
    {
      params: {
        token: token,
      },
    }
  );

//Field sense
export const postFieldSenseMeetingManagement = async (data) =>
  axiosInstance.post(`/field_sense_meeting_managements.json`, data, {
    params: {
      token: token,
    },
  });
export const getFieldSenseMeetingManagement = async () =>
  axiosInstance.get("/field_sense_meeting_managements.json", {
    params: {
      token: token,
    },
  });
export const getFieldSenseMeetingManagementDetails = async (id) =>
  axiosInstance.get(`/field_sense_meeting_managements/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postFieldSenseLeadManagement = async (data) =>
  axiosInstance.post(`/field_sense_leads_managements.json`, data, {
    params: {
      token: token,
    },
  });
export const getFieldSenseLeadManagement = async () =>
  axiosInstance.get("/field_sense_leads_managements.json", {
    params: {
      token: token,
    },
  });
export const getFieldSenseLeadManagementDetails = async (id) =>
  axiosInstance.get(`/field_sense_leads_managements/${id}.json`, {
    params: {
      token: token,
    },
  });
//Booking & Request
export const getHotelRequest = async () =>
  axiosInstance.get("/hotels.json", {
    params: {
      token: token,
    },
  });
export const postHotelRequest = async (data) =>
  axiosInstance.post(`/hotels.json`, data, {
    params: {
      token: token,
    },
  });
export const getHotelRequestDetails = async (id) =>
  axiosInstance.get(`/hotels/${id}.json`, {
    params: {
      token: token,
    },
  });
export const UpdateHotelRequest = async (data, id) =>
  axiosInstance.put(`/hotels/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const UpdateFlightRequest = async (data, id) =>
  axiosInstance.put(`/flight_requests/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getFlightRequestDetails = async (id) =>
  axiosInstance.get(`/flight_requests/${id}.json`, {
    params: {
      token: token,
    },
  });

export const getFlightTicketRequest = async () =>
  axiosInstance.get("/flight_requests.json", {
    params: {
      token: token,
    },
  });
export const UpdateCabRequest = async (data, id) =>
  axiosInstance.put(`/cab_and_bus_requests/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getCabRequestDetails = async (id) =>
  axiosInstance.get(`/cab_and_bus_requests/${id}.json`, {
    params: {
      token: token,
    },
  });
export const getcabRequest = async () =>
  axiosInstance.get("/cab_and_bus_requests.json", {
    params: {
      token: token,
    },
  });
export const postCabRequest = async (data) =>
  axiosInstance.post(`/cab_and_bus_requests.json`, data, {
    params: {
      token: token,
    },
  });
export const UpdatetransportRequest = async (data, id) =>
  axiosInstance.put(`/transport_requests/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const gettransportRequestDetails = async (id) =>
  axiosInstance.get(`/transport_requests/${id}.json`, {
    params: {
      token: token,
    },
  });
export const gettransportRequest = async () =>
  axiosInstance.get("/transport_requests.json", {
    params: {
      token: token,
    },
  });
export const postTransportRequest = async (data) =>
  axiosInstance.post(`/transport_requests.json`, data, {
    params: {
      token: token,
    },
  });
export const getTravellingAllowanceRequest = async () =>
  axiosInstance.get("/transportation_allowance_requests.json", {
    params: {
      token: token,
    },
  });
export const postTravellingAllowanceRequest = async (data) =>
  axiosInstance.post(`/transportation_allowance_requests.json`, data, {
    params: {
      token: token,
    },
  });
export const UpdatetravellingallowanceRequest = async (data, id) =>
  axiosInstance.put(`/transportation_allowance_requests/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getTravellingAllowanceRequestDetails = async (id) =>
  axiosInstance.get(`/transportation_allowance_requests/${id}.json`, {
    params: {
      token: token,
    },
  });
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
export const getHostList = async (siteId) =>
  axiosInstance.get(`/visitors/fetch_potential_hosts.json?site_id=${siteId}`, {
    params: {
      token: token,
    },
  });
export const postSetupUsers = async (data) =>
  axiosInstance.post("/users/create.json", data, {
    params: {
      token: token,
    },
  });
export const getVehicleParking = async () =>
  axiosInstance.get(`/parking_configurations.json`, {
    params: {
      token: token,
    },
  });
export const postVehicleParking = async (data) =>
  axiosInstance.post(`/parking_configurations.json`, data, {
    params: {
      token: token,
    },
  });
export const deleteVehicleParking = async (id) =>
  axiosInstance.delete(`/parking_configurations/${id}.json`, {
    params: {
      token: token,
    },
  });

export const getVehicleParkingDetails = async (id) =>
  axiosInstance.get(`/parking_configurations/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editVehicleParking = async (data, id) =>
  axiosInstance.patch(`/parking_configurations/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const postNewVisitor = async (data) =>
  axiosInstance.post("/visitors.json", data, {
    params: {
      token: token,
    },
  });

export const getPatrollings = async () =>
  axiosInstance.get("/patrollings.json", {
    params: {
      token: token,
    },
  });
export const getPatrollingDetails = async (id) =>
  axiosInstance.get(`/patrollings/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editPatrollingDetails = async (id, data) =>
  axiosInstance.put(`/patrollings/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postPatrolling = async (data) =>
  axiosInstance.post("/patrollings.json", data, {
    params: {
      token: token,
    },
  });
export const getGoods = async () =>
  axiosInstance.get("/goods_in_outs.json", {
    params: {
      token: token,
    },
  });
export const getGoodsDetails = async (id) =>
  axiosInstance.get(`/goods_in_outs/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postGoods = async (data) =>
  axiosInstance.post("/goods_in_outs.json", data, {
    params: {
      token: token,
    },
  });
export const getVisitorStaffCategory = async () =>
  axiosInstance.get("/visitor_staff_category.json", {
    params: {
      token: token,
    },
  });
export const postNewGoods = async (data) =>
  axiosInstance.post("/goods_in_outs.json", data, {
    params: {
      token: token,
    },
  });
export const getStaff = async () =>
  axiosInstance.get("/staffs.json", {
    params: {
      token: token,
    },
  });
export const getStaffDetails = async (id) =>
  axiosInstance.get(`/staffs/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editStaffDetails = async (id, data) =>
  axiosInstance.put(`/staffs/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postStaff = async (data) =>
  axiosInstance.post("/staffs.json", data, {
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
export const getSoftServiceSchedule = async (sid) =>
  axiosInstance.get(`/soft_services/${sid}/softservices_log_show.json`, {
    params: {
      token: token,
    },
  });
export const getSoftserviceActivityDetails = async (id) =>
  axiosInstance.get(`/soft_services/${id}/softservices_log_show.json?`, {
    params: {
      token: token,
    },
  });
export const deleteAssociationList = async (
  checklistId,
  assignedto,
  serviceId
) =>
  axiosInstance.get(
    `/delete_user_activity.json?checklist_id=${checklistId}&assigned_to=${assignedto}&asset_id=&soft_service_id=${serviceId}`,
    {
      params: {
        token: token,
      },
    }
  );

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
export const getGenericGroup = async () =>
  axiosInstance.get(`/generic_infos.json?q[info_type_eq]=soft_services`, {
    params: {
      token: token,
    },
  });
export const getGenericSubGroup = async (groupid) =>
  axiosInstance.get(
    `/generic_sub_infos.json?q[generic_info_id_eq]=${groupid}`,
    {
      params: {
        token: token,
      },
    }
  );
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
export const getServicesRoutineList = async (page, perpage) =>
  axiosInstance.get(
    `/activities.json?q[soft_service_id_null]=0&per_page=${perpage}&page=${page}`,
    {
      params: {
        token: token,
      },
    }
  );
export const postServicePR = async (data) =>
  axiosInstance.post(`/service_orders.json`, data, {
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
export const getExpectedVisitor = async () =>
  axiosInstance.get(`/visitors.json`, {
    params: {
      token: token,
    },
  });
export const getRegisteredVehicle = async () =>
  axiosInstance.get(`/registered_vehicles.json`, {
    params: {
      token: token,
    },
  });
export const getRegisteredVehicleDetails = async (id) =>
  axiosInstance.get(`/registered_vehicles/${id}.json`, {
    params: {
      token: token,
    },
  });
export const getPatrollingHistory = async () =>
  axiosInstance.get(`/patrolling_histories.json`, {
    params: {
      token: token,
    },
  });
export const editRegisteredVehicleDetails = async (id, data) =>
  axiosInstance.put(`/registered_vehicles/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const postRegisteredVehicle = async (data) =>
  axiosInstance.post(`/registered_vehicles.json`, data, {
    params: {
      token: token,
    },
  });
export const getParkingConfig = async () =>
  axiosInstance.get(`/parking_configurations.json`, {
    params: {
      token: token,
    },
  });
export const getVisitorApprovals = async () =>
  axiosInstance.get(`/visitors/approval_form.json`, {
    params: {
      token: token,
    },
  });
export const visitorApproval = async (id, data) =>
  axiosInstance.patch(`/visitors/${id}/approve_visitor.json`, data, {
    params: {
      token: token,
    },
  });
export const getVisitorHistory = async () =>
  axiosInstance.get(`/visitors/approval_history.json`, {
    params: {
      token: token,
    },
  });
export const getVisitorDetails = async (id) =>
  axiosInstance.get(`/visitors/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editVisitorDetails = async (id, data) =>
  axiosInstance.put(`/visitors/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const getVisitorCategory = async () =>
  axiosInstance.get("/visitor_staff_category.json", {
    params: {
      token: token,
    },
  });

export const postVisitorCategory = async (data) =>
  axiosInstance.post("/visitor_staff_categories.json", data, {
    params: {
      token: token,
    },
  });

export const deleteVisitorCategory = async (id) =>
  axiosInstance.delete(`/visitor_staff_categories/${id}.json`, {
    params: {
      token: token,
    },
  });

export const getVisitorCategoryDetails = async (id) =>
  axiosInstance.get(`/visitor_staff_categories/${id}.json`, {
    params: {
      token: token,
    },
  });

export const editVisitorCategory = async (id, data) =>
  axiosInstance.patch(`/visitor_staff_categories/${id}.json`, data, {
    params: {
      token: token,
    },
  });

export const postLOI = async (data) =>
  axiosInstance.post(`/loi_details.json`, data, {
    params: {
      token: token,
    },
  });
export const getLOI = async () =>
  axiosInstance.get(`/loi_details.json`, {
    params: {
      token: token,
    },
  });
export const getServicePR = async () =>
  axiosInstance.get(`/loi_services.json`, {
    params: {
      token: token,
    },
  });
export const getLOIDetails = async (id) =>
  axiosInstance.get(`/loi_details/${id}.json`, {
    params: {
      token: token,
    },
  });
export const getLOIItems = async () =>
  axiosInstance.get(`/loi_items.json`, {
    params: {
      token: token,
    },
  });
export const getLOIItemsDetails = async (id) =>
  axiosInstance.get(`/loi_items/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postLOIItems = async (data) =>
  axiosInstance.post(`/loi_items.json`, data, {
    params: {
      token: token,
    },
  });
export const getStandardUnits = async () =>
  axiosInstance.get(`/standard_units.json`, {
    params: {
      token: token,
    },
  });
export const getContactBook = async () =>
  axiosInstance.get(`/contact_books.json`, {
    params: {
      token: token,
    },
  });
export const postContactBook = async (data) =>
  axiosInstance.post(`/contact_books.json`, data, {
    params: {
      token: token,
    },
  });
export const editContactBook = async (id, data) =>
  axiosInstance.put(`/contact_books/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const getGenericCategory = async () =>
  axiosInstance.get(`/generic_infos.json`, {
    params: {
      token: token,
    },
  });
export const getGenericCategoryDetails = async (id) =>
  axiosInstance.get(`/generic_infos/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editGenericCategoryDetails = async (id, data) =>
  axiosInstance.put(`/generic_infos/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postGenericCategory = async (data) =>
  axiosInstance.post(`/generic_infos.json`, data, {
    params: {
      token: token,
    },
  });
export const postGenericSubCategory = async (data) =>
  axiosInstance.post(`/generic_sub_infos.json`, data, {
    params: {
      token: token,
    },
  });
export const getGenericSubCategory = async () =>
  axiosInstance.get(`/generic_sub_infos.json`, {
    params: {
      token: token,
    },
  });
export const getDependentGenericSubCategory = async (id) =>
  axiosInstance.get(`/generic_sub_infos.json?generic_info_id=${id}`, {
    params: {
      token: token,
    },
  });
export const getContactBookDetails = async (id) =>
  axiosInstance.get(`/contact_books/${id}.json`, {
    params: {
      token: token,
    },
  });

// setup
export const getCompanies = async () =>
  axiosInstance.get(`/sites/company_list.json`, {
    params: {
      token: token,
    },
  });
export const createCompany = async (data) =>
  axiosInstance.post(`/companies.json`, data, {
    params: {
      token: token,
    },
  });
export const getAllFeature = async () =>
  axiosInstance.get(`/sites/all_features.json`, {
    params: {
      token: token,
    },
  });
export const getBuildings = async () =>
  axiosInstance.get(`/buildings.json`, {
    params: {
      token: token,
    },
  });

export const getSites = async () =>
  axiosInstance.get(`/sites.json`, {
    params: {
      token: token,
    },
  });
export const getSiteDetails = async (id) =>
  axiosInstance.get(`/sites/${id}.json`, {
    params: {
      token: token,
    },
  });
export const EditSiteDetails = async (id, data) =>
  axiosInstance.put(`/sites/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postSite = async (data) =>
  axiosInstance.post(`/sites.json`, data, {
    params: {
      token: token,
    },
  });
export const postBuilding = async (data) =>
  axiosInstance.post(`/buildings.json`, data, {
    params: {
      token: token,
    },
  });
export const getAllFloors = async () =>
  axiosInstance.get(`/floors.json`, {
    params: {
      token: token,
    },
  });
export const getFloorDetails = async (id) =>
  axiosInstance.get(`/floors/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editFloorDetails = async (id, data) =>
  axiosInstance.put(`/floors/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postNewFloor = async (data) =>
  axiosInstance.post(`/floors.json`, data, {
    params: {
      token: token,
    },
  });
export const getAllUnits = async () =>
  axiosInstance.get(`/units.json`, {
    params: {
      token: token,
    },
  });
export const getUnitDetails = async (id) =>
  axiosInstance.get(`/units/${id}.json`, {
    params: {
      token: token,
    },
  });
export const editUnitDetails = async (id, data) =>
  axiosInstance.put(`/units/${id}.json`, data, {
    params: {
      token: token,
    },
  });
export const postNewUnit = async (data) =>
  axiosInstance.post(`/units.json`, data, {
    params: {
      token: token,
    },
  });
export const getAllAddress = async () =>
  axiosInstance.get(`/addresses.json`, {
    params: {
      token: token,
    },
  });
export const getAddressDetails = async (id) =>
  axiosInstance.get(`/addresses/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postAddress = async (data) =>
  axiosInstance.post(`/addresses.json`, data, {
    params: {
      token: token,
    },
  });
export const editAddress = async (id, data) =>
  axiosInstance.put(`/addresses/${id}.json`, data, {
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
export const getVibeProjectUsers = async (vibeUserId, orgId, boardId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-users/?user_id=${vibeUserId}&org_id=${orgId}&board_id=${boardId}`,
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
export const getProjectUsers = async (vibeUserId, vibeOrgId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-users/?user_id=${vibeUserId}&org_id=${vibeOrgId}&os:false`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project users events:", error);
    throw error;
  }
};
export const getOutsideUsers = async (vibeUserId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get_outsiders/?user_id=${vibeUserId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching outside users events:", error);
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
      `/api/v1/employee/my_board/get-task/?user_id=${userId}`,

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
      `/api/v1/employee/task/update-status/`,
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
      `/api/v1/employee/task/get-checklist/?task_id=${taskId}&user_id=${userId}`,

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
      `/api/v1/employee/task/update_task/`,
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
      `/api/v1/employee/task/update-checklist/`,
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
      // `/api/employee/task/create-task-checklist/`,
      `/api/v1/employee/task/create-checklist/`,
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
export const deleteVibeTaskChecklist = async (
  taskDeleteIDCheckList,
  user_id
) => {
  try {
    const response = await vibeAuth.delete(
      `/api/v1/employee/task/delete-checklist/?checklist_id=${taskDeleteIDCheckList}&user_id=${user_id}`,

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
      `/api/v1/employee/task/update_task/`,
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
      `/api/v1/employee/create_task/`,
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
export const deleteVibeSubTask = async (taskId, userId) => {
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
export const deleteTaskChecklistSubTaskChild = async (taskChildId, userId) => {
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
export const postNewProjectBoard = async (data) => {
  try {
    const response = await vibeAuth.post(`/api/employee/add-board/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting new board :", error);
    throw error;
  }
};
export const getVibeSocialData = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/social-media/get-auth-info/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting social data :", error);
    throw error;
  }
};
export const getGmailAuthenticate = async (platform) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/social-media/gmail/get-auth/?platform=${platform}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting gmail data :", error);
    throw error;
  }
};
export const updateLoginGmailStatus = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/social-media/gmail/update-status-login/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting gmail data :", error);
    throw error;
  }
};
export const addGmailAuthenticate = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/social-media/gmail/create-auth/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding gmail data :", error);
    throw error;
  }
};
export const getVibeUserBoard = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-user-board/?user_id=${userId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding gmail data :", error);
    throw error;
  }
};
export const deleteVibeUserBoard = async (boardId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/delete-board?board_id=${boardId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting board :", error);
    throw error;
  }
};
export const updateVibeBoardDate = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/board/update_date/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating board date :", error);
    throw error;
  }
};
export const getVibeBoardTemplate = async (userID) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-template/?user_id=${userID}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Getting project template :", error);
    throw error;
  }
};
export const updateVibeBoardTemplate = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/update-board-template/`,
      data,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating project template :", error);
    throw error;
  }
};
export const getVibeBoardData = async (boardId, userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/custom_board/get-task/?board_id=${boardId}&user_id=${userId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting project data :", error);
    throw error;
  }
};
export const getVibeBoardUser = async (userId, orgId, boardId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-board-users/?user_id=${userId}&org_id=${orgId}&board_id=${boardId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting project data :", error);
    throw error;
  }
};
export const getVibeCalenderEventsNew = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/calender/get-events/?user_id=${userId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting new events data :", error);
    throw error;
  }
};
export const deleteVibeCalenderTask = async (userId, category, id) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/calender/delete-calender-event/?user_id=${userId}&category=${category}&id=${id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleing task data :", error);
    throw error;
  }
};
export const createVibeSchedule = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/work_schedule/create-schedule/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating Schedule :", error);
    throw error;
  }
};
export const getVibeSchedule = async (userID, startDate, endDate) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/work_schedule/get-schedule/?user_id=${userID}&from_date=${startDate}&to_date=${endDate}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Schedule :", error);
    throw error;
  }
};
export const getVibeTodaySlots = async (userId, fromDate, endDate) => {
  try {
    const response = await vibeAuth.get(
      `/api/doctor/get-today-my-slots/?user_id=${userId}&from_date=${fromDate}&to_date=${endDate}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting slots :", error);
    throw error;
  }
};
export const postVisitorOTPApi = async (data) => {
  try {
    const response = await vibeAuth.post(
      `https://vibecopilot.ai/api/send-test-otp/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting slots :", error);
    throw error;
  }
};
export const postOutlookAuth = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/social-media/outlook/create-auth/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting slots :", error);
    throw error;
  }
};
export const getProjectTaskDependencies = async (userId, boardId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/get-dependencies/?user_id=${userId}&board_id=${boardId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting dependencies :", error);
    throw error;
  }
};
export const getDependencies = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/get-dependencies/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting dependencies :", error);
    throw error;
  }
};
export const getVibeUserBirthday = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/calender/get-users-birthday/?user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting birthday :", error);
    throw error;
  }
};
export const createVibeUserBirthday = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/calender/add-birthday/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating birthday :", error);
    throw error;
  }
};
export const deleteVibeUserBirthday = async (userId, BdId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/calender/delete-birthday/?user_id=${userId}&birthday_id=${BdId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting birthday :", error);
    throw error;
  }
};
export const postVibeTaskComment = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/v1/employee/task/add-comment/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Creating Comment :", error);
    throw error;
  }
};
export const getVibeMainTaskDependencies = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/get-depend_on/?user_id=${userId}&task_id=${taskId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting dependent task :", error);
    throw error;
  }
};
export const GetTaskBulk = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/children/get_task_bulk/?user_id=${userId}&task_id=${taskId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting bulk task :", error);
    throw error;
  }
};
export const GetVibeBoardTaskPermission = async (userId, boardId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/board/get_task_permission/?user_id=${userId}&board_id=${boardId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting task permission:", error);
    throw error;
  }
};
export const updateChecklistSequence = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/board/checklist/update-checklist-sequence/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating checklist sequence :", error);
    throw error;
  }
};
export const Updatetaskchecklist = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/v1/employee/task/relocate-task/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task checklist :", error);
    throw error;
  }
};
export const UpdateTaskAction = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/task/add-task-action/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task action :", error);
    throw error;
  }
};
export const UpdateProjectSectionTitle = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/board/update-board-checklist/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating title :", error);
    throw error;
  }
};

export const deleteSection = async (taskDeleteIDSection, userId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/employee/board/delete-board-checklist/?check_id=${taskDeleteIDSection}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting section :", error);
    throw error;
  }
};
export const addBoardChecklist = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/board/add-board-checklist/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting section :", error);
    throw error;
  }
};

export const deleteProjectTask = async (taskId, userId) => {
  try {
    const response = await vibeAuth.delete(
      `/api/v1/employee/tasks/trash/?task_id=${taskId}&user_id=${userId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting task :", error);
    throw error;
  }
};
export const getProjectAssignedUser = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/get_task_assigned_users?user_id=${userId}&task_id=${taskId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting task :", error);
    throw error;
  }
};
export const updateProjectAssigned = async (data) => {
  try {
    const response = await vibeAuth.put(
      `/api/employee/board/update-board-assign/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating assign :", error);
    throw error;
  }
};
export const postOutSiderInvite = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/outsider/invite/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Assign task :", error);
    throw error;
  }
};
export const getTaskUsersAssign = async (userId, taskId) => {
  try {
    const response = await vibeAuth.get(
      `/api/v1/employee/task/get_task_assigned_users/?user_id=${userId}&task_id=${taskId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Assign task :", error);
    throw error;
  }
};
export const getBoardSection = async (userId, boardId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/board/get_board_sections/?user_id=${userId}&board_id=${boardId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Assign task :", error);
    throw error;
  }
};
export const getDocAppointmentList = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-appointment-list/?user_id=${userId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting appointment list :", error);
    throw error;
  }
};
export const getDocCancelCheck = async (userId, consultId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/check-cancel/?user_id=${userId}&consultation_id=${consultId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting cancellation :", error);
    throw error;
  }
};
export const postDocCancellation = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/doctor/cancel-consultation/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting cancellation :", error);
    throw error;
  }
};
export const getConsultationDetails = async (userId) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-consultation-details/?user_id=${userId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting cancellation :", error);
    throw error;
  }
};
export const getOrganizations = async (userId, orgId) => {
  try {
    const response = await vibeAuth.get(
      `/api/organization/get-organization-branch/?user_id=${userId}&org_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting organization :", error);
    throw error;
  }
};
export const getDoctors = async (
  userId,
  date,
  orgId,
  meetingMode,
  branchId
) => {
  try {
    const response = await vibeAuth.get(
      `/api/employee/get-doctors/?user_id=${userId}&date=${date}&organization_id=${orgId}&meeting_mode=${meetingMode}&branch_id=${branchId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting doctors :", error);
    throw error;
  }
};
export const getTimeSlot = async (
  userId,
  date,
  orgId,
  meetingMode,
  doctorId
) => {
  try {
    const response = await vibeAuth.get(
      `/api/doctor/get-slots/?user_id=${userId}&date=${date}&organization_id=${orgId}&meeting_mode=${meetingMode}&doctor_id=${doctorId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting doctors :", error);
    throw error;
  }
};
export const postDocAppointment = async (data) => {
  try {
    const response = await vibeAuth.post(
      `/api/employee/book-doctor-consultation/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting appointment :", error);
    throw error;
  }
};
// HRMS
export const getAllHrmsOrganisation = async () => {
  try {
    const response = await HrmsAuth.get(`/organization/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting HRMS organisation :", error);
    throw error;
  }
};
export const getMyOrganization = async (orgHrId) => {
  try {
    const response = await HrmsAuth.get(`/organization/${orgHrId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting My organisation :", error);
    throw error;
  }
};
export const editMyOrganization = async (orgHrId, data) => {
  try {
    const response = await HrmsAuth.put(`/organization/${orgHrId}/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing My organisation :", error);
    throw error;
  }
};
export const getAllOrganizationAddress = async () => {
  try {
    const response = await HrmsAuth.get(`/organization/address/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing My organisation :", error);
    throw error;
  }
};
// my organization
export const getMyOrganizationAddress = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/address/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting My organization :", error);
    throw error;
  }
};
export const getOrganizationAddress = async (addressId) => {
  try {
    const response = await HrmsAuth.get(`/organization/address/${addressId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing My organisation :", error);
    throw error;
  }
};
export const editOrganizationAddress = async (addressId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/address/${addressId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing Address :", error);
    throw error;
  }
};
export const getAllOrganizationGeoSettings = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/geographical-settings/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing Geo settings :", error);
    throw error;
  }
};
export const getOrganizationGeoMasterData = async (geoId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/geographical-master-data/${geoId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Geo master data :", error);
    throw error;
  }
};
export const editOrganizationGeoSettings = async (geoId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/geographical-settings/${geoId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing Geo settings :", error);
    throw error;
  }
};
// location
export const getMyOrganizationLocations = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/location/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Locations :", error);
    throw error;
  }
};
export const postMyOrganizationLocations = async (data) => {
  try {
    const response = await HrmsAuth.post(`/organization/location/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error post Locations :", error);
    throw error;
  }
};

export const getOrganizationLocation = async (locationId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/location/${locationId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Location :", error);
    throw error;
  }
};
export const editOrganizationLocation = async (locationId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/location/${locationId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing Location :", error);
    throw error;
  }
};
export const getMyOrgDepartments = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/department/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting department :", error);
    throw error;
  }
};

export const getMyHRMSEmployees = async (orgId) => {
  try {
    const response = await HrmsAuth.get(`/employee/?organization_id=${orgId}`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting employee :", error);
    throw error;
  }
};
export const deleteHRMSEmployee = async (empId) => {
  try {
    const response = await HrmsAuth.delete(`/employee/${empId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error delete employee :", error);
    throw error;
  }
};
export const addHrmsOrganizationDepartment = async (data) => {
  try {
    const response = await HrmsAuth.post(`/organization/department/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting employee :", error);
    throw error;
  }
};

export const getHrmsDepartmentDetails = async (deptId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/department/${deptId}/`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting employee :", error);
    throw error;
  }
};
export const deleteHrmsDepartment = async (deptId) => {
  try {
    const response = await HrmsAuth.delete(
      `/organization/department/${deptId}/`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting employee :", error);
    throw error;
  }
};
export const editHrmsOrganizationDepartment = async (deptId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/department/${deptId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting employee :", error);
    throw error;
  }
};
export const postCompanyHoliday = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/organization/company-holidays/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting company holiday :", error);
    throw error;
  }
};
export const getMyBankAccounts = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/bank-accounts/?organization_id=${orgId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting bank account :", error);
    throw error;
  }
};
export const postMyBankAccounts = async (data) => {
  try {
    const response = await HrmsAuth.post(`/organization/bank-accounts/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting bank account :", error);
    throw error;
  }
};
export const getMyBankDetails = async (bankId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/bank-accounts/${bankId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting bank account :", error);
    throw error;
  }
};
export const deleteMyBankDetails = async (bankId) => {
  try {
    const response = await HrmsAuth.delete(
      `/organization/bank-accounts/${bankId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting bank account :", error);
    throw error;
  }
};
export const editMyBankAccount = async (bankId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/bank-accounts/${bankId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating bank account :", error);
    throw error;
  }
};
export const getManageAdmin = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/user-setting/administrator-setting/?organization_id=${orgId}`,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Admins:", error);
    throw error;
  }
};
export const getManageAdminDetails = async (adminId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/user-setting/administrator-setting/${adminId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Admin detail:", error);
    throw error;
  }
};
export const editManageAdminDetails = async (adminId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/user-setting/administrator-setting/${adminId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error edit Admin detail:", error);
    throw error;
  }
};
export const postManageAdmin = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/organization/user-setting/administrator-setting/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting Admins:", error);
    throw error;
  }
};
export const deleteManageAdmin = async (adminId) => {
  try {
    const response = await HrmsAuth.delete(
      `/organization/user-setting/administrator-setting/${adminId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting Admins:", error);
    throw error;
  }
};
export const getEmployeePermission = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee_permission/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting permission:", error);
    throw error;
  }
};
export const editEmployeePermission = async (permissionId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employee_permission/${permissionId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating permission:", error);
    throw error;
  }
};
export const getNewsEmployeePermission = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `employee-NewsFeed-permission/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting permission:", error);
    throw error;
  }
};
export const editNewsEmployeePermission = async (newsId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employee-NewsFeed-permission/${newsId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating permission:", error);
    throw error;
  }
};
export const getOnBoardingGeneralSetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/onboarding-settings/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting onboarding general settings:", error);
    throw error;
  }
};
export const editOnBoardingGeneralSetting = async (settingId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/onboarding-settings/${settingId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting onboarding general settings:", error);
    throw error;
  }
};
export const getCommunicationTemplate = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/communication-template/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting communication template:", error);
    throw error;
  }
};
export const postCommunicationTemplate = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/organization/communication-template/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding communication template:", error);
    throw error;
  }
};
// Employee
export const postEmployeeOnBoarding = async (data) => {
  try {
    const response = await HrmsAuth.post(`/employee/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding employee onboarding:", error);
    throw error;
  }
};
export const postEmployeeFamily = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/employee/family-information/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding employee family:", error);
    throw error;
  }
};
export const postEmployeeAddress = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/employee/address-information/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding employee address:", error);
    throw error;
  }
};
export const getPaymentModeList = async () => {
  try {
    const response = await HrmsAuth.get(`/employee/payment-mode/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting employee mode list:", error);
    throw error;
  }
};

export const postEmployeePaymentInfo = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/employee/payment-information/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding employee payment Info:", error);
    throw error;
  }
};
export const getEmployeePaymentInfo = async (empId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee/payment-information/?employee_id=${empId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting employee payment Info:", error);
    throw error;
  }
};
export const postEmployeeStatutoryInfo = async (data) => {
  try {
    const response = await HrmsAuth.post(`/employee/Statutory/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding employee payment Info:", error);
    throw error;
  }
};
export const getEmployeeDetails = async (empId) => {
  try {
    const response = await HrmsAuth.get(`/employee/${empId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting employee Details:", error);
    throw error;
  }
};

export const editEmployeeDetails = async (empId, data) => {
  try {
    const response = await HrmsAuth.put(`/employee/${empId}/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating employee Details:", error);
    throw error;
  }
};

export const getEmployeeFamilyDetails = async (empId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee/family-information/?employee_id=${empId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting family Details:", error);
    throw error;
  }
};
export const editEmployeeFamilyDetails = async (familyId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employee/family-information/${familyId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating family Details:", error);
    throw error;
  }
};
export const getEmployeeAddressDetails = async (empId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee/address-information/?employee_id=${empId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting address Details:", error);
    throw error;
  }
};
export const editEmployeeAddressDetails = async (addressId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employee/address-information/${addressId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating address Details:", error);
    throw error;
  }
};
export const postEmployeeEmploymentInfo = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/employment-information/`,
      data,

      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting Employment details:", error);
    throw error;
  }
};
export const getCountriesList = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/country-name-list/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Countries list:", error);
    throw error;
  }
};

export const getCountryData = async (countryId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/country-name/?id=${countryId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Country data:", error);
    throw error;
  }
};
export const getEmployeeRegularizationReq = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/attendance/regularization/requests/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting regularization data:", error);
    throw error;
  }
};
export const postRegularizationApproval = async (approvalId, data) => {
  try {
    const response = await HrmsAuth.post(
      `/attendance/regularization/requests/status/${approvalId}/`,
      data
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data/",
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting regularization approval:", error);
    throw error;
  }
};
export const getRegularizationDetails = async (reqId) => {
  try {
    const response = await HrmsAuth.get(
      `/attendance/regularization/requests/${reqId}/`
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data/",
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting regularization details:", error);
    throw error;
  }
};
export const getAttendanceRecord = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/employees/attendance-bulk?organization_id=${orgId}`
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data/",
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting attendance records:", error);
    throw error;
  }
};
export const postLeaveCategory = async (data) => {
  try {
    const response = await HrmsAuth.post(`/leave-categories/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting leave category:", error);
    throw error;
  }
};
export const getLeaveCategory = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/leave-categories/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave categories:", error);
    throw error;
  }
};
export const getLeaveSetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/leave-settings/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave settings:", error);
    throw error;
  }
};
export const editLeaveSetting = async (settingId, data) => {
  try {
    const response = await HrmsAuth.put(`/leave-settings/${settingId}/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating leave settings:", error);
    throw error;
  }
};
export const getLeaveCategoryDetails = async (categoryId) => {
  try {
    const response = await HrmsAuth.get(`/leave-categories/${categoryId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting leave category:", error);
    throw error;
  }
};
export const editLeaveCategoryDetails = async (categoryId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/leave-categories/${categoryId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating leave category:", error);
    throw error;
  }
};
export const deleteLeaveCategory = async (deleteId) => {
  try {
    const response = await HrmsAuth.delete(`/leave-categories/${deleteId}/`, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting leave category:", error);
    throw error;
  }
};

export const getLeaveApplications = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee/leave-request/?organization_id=${orgId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave applications:", error);
    throw error;
  }
};
export const postSingleLeaveApplication = async (data) => {
  try {
    const response = await HrmsAuth.post(`/employee/leave-request/`, data, {
      headers: {
        "Content-Type": "multipart/form-data/",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting leave applications:", error);
    throw error;
  }
};
export const getLeaveApplicationDetails = async (applicationId) => {
  try {
    const response = await HrmsAuth.get(
      `/employee/leave-request/${applicationId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave applications:", error);
    throw error;
  }
};
export const editLeaveApplicationDetails = async (applicationId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employee/leave-request/${applicationId}/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave applications:", error);
    throw error;
  }
};
export const deleteLeaveApplication = async (applicationId) => {
  try {
    const response = await HrmsAuth.delete(
      `/employee/leave-request/${applicationId}/`,
      {
        headers: {
          "Content-Type": "multipart/form-data/",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting leave applications:", error);
    throw error;
  }
};
export const postLeaveApplicationApproval = async (applicationId, data) => {
  try {
    const response = await HrmsAuth.post(
      `/leave/requests/status/${applicationId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error posting leave approval:", error);
    throw error;
  }
};
export const getEmployeeEmploymentDetails = async (empId) => {
  try {
    const response = await HrmsAuth.get(
      `/employment-information/?employee_id=${empId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting employment details:", error);
    throw error;
  }
};
export const editEmployeeEmploymentDetails = async (employmentId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/employment-information/${employmentId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error getting employment details:", error);
    throw error;
  }
};
// payroll
export const getPayrollGeneralSetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/general-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting payroll general setting:", error);
    throw error;
  }
};
export const editPayrollGeneralSetting = async (payrollId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/general-settings/${payrollId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating payroll general setting:", error);
    throw error;
  }
};
export const getPayrollGratuity = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/gratuity-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting payroll gratuity:", error);
    throw error;
  }
};
export const editPayrollGratuity = async (gratuityId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/gratuity-settings/${gratuityId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating payroll gratuity:", error);
    throw error;
  }
};
export const getFixedAllowance = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/allowance/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error updating payroll gratuity:", error);
    throw error;
  }
};
export const postFixedAllowance = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/allowance/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating payroll gratuity:", error);
    throw error;
  }
};
export const deleteFixedAllowance = async (FAid) => {
  try {
    const response = await HrmsAuth.delete(`/payroll/allowance/${FAid}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting Fixed Allowance:", error);
    throw error;
  }
};
export const getFixedAllowanceDetails = async (FAid) => {
  try {
    const response = await HrmsAuth.get(`/payroll/allowance/${FAid}/`);
    return response.data;
  } catch (error) {
    console.error("Error getting Fixed Allowance:", error);
    throw error;
  }
};
export const editFixedAllowanceDetails = async (FAid, data) => {
  try {
    const response = await HrmsAuth.put(`/payroll/allowance/${FAid}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating Fixed Allowance:", error);
    throw error;
  }
};
export const getFixedDeductions = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/deduction/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Fixed deduction:", error);
    throw error;
  }
};
export const postFixedDeductions = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/deduction/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting Fixed deduction:", error);
    throw error;
  }
};
export const deleteFixedDeductions = async (deductionId) => {
  try {
    const response = await HrmsAuth.delete(
      `/payroll/deduction/${deductionId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting Fixed deduction:", error);
    throw error;
  }
};
export const getFixedDeductionDetails = async (deductionId) => {
  try {
    const response = await HrmsAuth.get(`/payroll/deduction/${deductionId}/`);
    return response.data;
  } catch (error) {
    console.error("Error getting Fixed deduction:", error);
    throw error;
  }
};
export const editFixedDeductionDetails = async (deductionId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/deduction/${deductionId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Fixed deduction:", error);
    throw error;
  }
};
export const postVariableAllowance = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/variable-allowance/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting variable allowance:", error);
    throw error;
  }
};
export const getVariableAllowance = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/variable-allowance/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting variable allowance:", error);
    throw error;
  }
};
export const deleteVariableAllowance = async (variableId) => {
  try {
    const response = await HrmsAuth.delete(
      `/payroll/variable-allowance/${variableId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting variable allowance:", error);
    throw error;
  }
};
export const postVariableDeduction = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/variable-deduction/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting variable deduction:", error);
    throw error;
  }
};
export const getVariableDeduction = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/variable-deduction/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting variable deduction:", error);
    throw error;
  }
};
export const getOtherBenefits = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/benefit/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting other benefit:", error);
    throw error;
  }
};
export const postOtherBenefits = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/benefit/`, data);
    return response.data;
  } catch (error) {
    console.error("Error getting other benefit:", error);
    throw error;
  }
};
export const deleteOtherBenefits = async (benefitId) => {
  try {
    const response = await HrmsAuth.delete(`/payroll/benefit/${benefitId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting other benefit:", error);
    throw error;
  }
};
export const getOtherBenefitDetails = async (benefitId) => {
  try {
    const response = await HrmsAuth.get(`/payroll/benefit/${benefitId}/`);
    return response.data;
  } catch (error) {
    console.error("Error getting other benefit:", error);
    throw error;
  }
};
export const editOtherBenefitDetails = async (benefitId, data) => {
  try {
    const response = await HrmsAuth.put(`/payroll/benefit/${benefitId}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating other benefit:", error);
    throw error;
  }
};
export const getPayrollLoanCategory = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/loan-category/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting loan category:", error);
    throw error;
  }
};
export const deletePayrollLoanCategory = async (CatId) => {
  try {
    const response = await HrmsAuth.delete(`/payroll/loan-category/${CatId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting loan category:", error);
    throw error;
  }
};
export const postPayrollLoanCategory = async (data) => {
  try {
    const response = await HrmsAuth.post(`/payroll/loan-category/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting loan category:", error);
    throw error;
  }
};
export const getPayrollPaySetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/payslip-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting payslip setting:", error);
    throw error;
  }
};
export const editPayrollPaySetting = async (paySlipId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/payslip-settings/${paySlipId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating payslip setting:", error);
    throw error;
  }
};
export const getLeaveEncashment = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/leave-encashment-recovery/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave encashment setting:", error);
    throw error;
  }
};
export const editLeaveEncashment = async (enCashId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/leave-encashment-recovery/${enCashId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating encashment setting:", error);
    throw error;
  }
};
export const getNoticePeriodRecovery = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/payroll/notice-period-recovery/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave recovery:", error);
    throw error;
  }
};
export const editNoticePeriodRecovery = async (noticeId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/payroll/notice-period-recovery/${noticeId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error getting leave recovery:", error);
    throw error;
  }
};
export const getInvestmentSetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/organization/investment-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting investment setting:", error);
    throw error;
  }
};
export const editInvestmentSetting = async (invId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/organization/investment-settings/${invId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error editing investment setting:", error);
    throw error;
  }
};
export const getRosterShift = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/roster/shift-master-data/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting roster shift:", error);
    throw error;
  }
};
export const deleteRosterShift = async (shiftId) => {
  try {
    const response = await HrmsAuth.delete(
      `/roster/shift-master-data/${shiftId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting roster shift:", error);
    throw error;
  }
};
export const postRosterShift = async (data) => {
  try {
    const response = await HrmsAuth.post(`/roster/shift-master-data/`, data);
    return response.data;
  } catch (error) {
    console.error("Error post roster shift:", error);
    throw error;
  }
};
export const getRosterShiftDetails = async (shiftId) => {
  try {
    const response = await HrmsAuth.get(
      `/roster/shift-master-data/${shiftId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting roster shift:", error);
    throw error;
  }
};
export const editRosterShiftDetails = async (shiftId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/roster/shift-master-data/${shiftId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating roster shift:", error);
    throw error;
  }
};
export const getRosterRecords = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/roster-shift-list/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting roster records:", error);
    throw error;
  }
};
export const getRosterRecordDetails = async (shiftId) => {
  try {
    const response = await HrmsAuth.get(`/roster/roster-shift/${shiftId}/`);
    return response.data;
  } catch (error) {
    console.error("Error getting roster records:", error);
    throw error;
  }
};
export const editRosterRecord = async (shiftId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/roster/roster-shift/${shiftId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating roster records:", error);
    throw error;
  }
};
export const deleteRosterRecord = async (shiftId) => {
  try {
    const response = await HrmsAuth.delete(`/roster/roster-shift/${shiftId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting roster records:", error);
    throw error;
  }
};
export const postRosterRecord = async (data) => {
  try {
    const response = await HrmsAuth.post(`/roster/roster-shift/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting roster records:", error);
    throw error;
  }
};

// attendance settings
//
export const getAttendanceGeneralSetting = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/attendance/attendance-general-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting attendance general setting:", error);
    throw error;
  }
};
export const editAttendanceGeneralSetting = async (settingId, data) => {
  try {
    const response = await HrmsAuth.put(
      `/attendance/attendance-general-settings/${settingId}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating attendance general setting:", error);
    throw error;
  }
};
export const getAttendanceRegularization = async (orgId) => {
  try {
    const response = await HrmsAuth.get(
      `/attendance/attendance-regularization-settings/?organization_id=${orgId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting attendance regularization:", error);
    throw error;
  }
};
export const postAttendanceRegularization = async (data) => {
  try {
    const response = await HrmsAuth.post(
      `/attendance/attendance-regularization-settings/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error posting attendance regularization:", error);
    throw error;
  }
};
export const getAttendanceRegularizationDetails = async (regReasonId) => {
  try {
    const response = await HrmsAuth.get(
      `/attendance/attendance-regularization-settings/${regReasonId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting attendance regularization:", error);
    throw error;
  }
};
