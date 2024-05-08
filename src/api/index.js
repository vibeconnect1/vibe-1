import { getItemInLocalStorage } from "../utils/localStorage";
import axiosInstance from "./axiosInstance";

const token = getItemInLocalStorage("TOKEN");

export const login = async (data) => axiosInstance.post("/login.json", data);

export const getLogin = async () => axiosInstance.get("/login.json")

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
export const postSiteAsset = async (id) =>
  axiosInstance.get(`/site_assets.json`,  {
    params: {
      token: token,
    },
  });

  
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
      category_type_id: categoryId
    },
  },);



  export const fetchUserComplaints = async (data) =>
  axiosInstance.get(`complaints.json`, data ,{
    params: {
      token: token,
    },
  })

  //

  export const getUnits = async (floor_id) =>
    axiosInstance.get(`/units.json` ,{
      params: {
        token: token,
        floor_id_eq : floor_id
      },
    },);

    export const getFloors = async (data) => 
      axiosInstance.get(`/floors.json`, {
        params : {
          token : token,
        }
      })

  export const updateComplaintsDetails = async (id, data) => 
  axiosInstance.put(`pms/complaints/${id}.json`, data, {
    params : {
      token : token,
    }
  })


  export const getAssignedTo = async (data) => 
    axiosInstance.get(`/users/pms_admins.json`, {
      params : {
        token : token,
      }
    })
  
    export const getIssueType = async () => 
      axiosInstance.get(`pms/admin/complaint_issue_types.json`, {
        params : {
          token : token,
        }
      })

      export const getfloorsType = async (buildId) => 
        axiosInstance.get(`/floors.json`, {
          params : {
            token : token,
            building_id  : buildId
          }
        })
      
    
  export const postComplaintsDetails = async (data) => {
    try {
      const response = await axiosInstance.post(`/pms/complaints.json?token=${token}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const editComplaintsDetails = async (data) => {
    try {
      const response = await axiosInstance.post(`/complaint_logs.json?token=${token}`, data)
      return response.data
    } catch (error) {
      throw error;
    }
  }
  

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
