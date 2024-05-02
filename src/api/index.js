import { getItemInLocalStorage } from "../utils/localStorage";
import axiosInstance from "./axiosInstance";

const token = getItemInLocalStorage("TOKEN");

export const login = async (data) => axiosInstance.post("/login.json", data);
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

  export const updateComplaintsDetails = async (id, data) => 
  axiosInstance.put('pms/complaints/${id}.json', data, {
    params : {
      token : token,
    }
  })

  

  // export const getComplaints = async () => axiosInstance.get("/pms/complaints.json", {
  //   params: {
  //     token: token
  //   }
  // });


// post api  

  // export const postComplaintsDetails = async (data) =>
  //   axiosInstance.post(`/pms/complaints.json`, {
  //     params: {
  //       token: token
  //     }
  //   });

  
  // export const postComplaintsDetails = async (data) => 
  // axiosInstance.post('/pms/complaints.json', {
  //   params: {
  //     token: token,
  //     complaint: [ 
  //     {
  //       category_type_id: data.category_type_id,
  //       sub_category_id: data.sub_category_id,
  //       text: data.text
  //     }
  //   ]
  //   }
  // })



  // export const postComplaintsDetails = async (data) => {
  //   try {
  //     const response = await axiosInstance.post('/pms/complaints.json', {
  //       token: token,
  // complaint: [
  //   {
  //     category_type_id: data.category_type_id,
  //     sub_category_id: data.sub_category_id,
  //     text: data.text
  //   }
  // ]
        
  //     });
  
  //     return response.data; // Assuming you want to return the response data
  //   } catch (error) {
  //     // Handle error
  //     console.error("Error:", error);
  //     throw error; // Rethrow the error to propagate it to the caller
  //   }
  // }
  

  export const postComplaintsDetails = async (data) => {
    try {
      const response = await axiosInstance.post(`/pms/complaints.json?token=${token}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
