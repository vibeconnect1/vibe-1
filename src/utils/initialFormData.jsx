import { getItemInLocalStorage } from "./localStorage";
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
const siteID = getItemInLocalStorage("SITEID")
export const initialAddAssetFormData = {
    
    site_id: siteID,
    building_id: "",
    floor_id: "",
    unit_id: "",
    name: "",
    serial_number: "",
    model_number: "",
    purchase_cost: "",
    capacity: "",
    unit: "",
    asset_group_id: "",
    asset_sub_group_id: "",
    asset_type: "",
    purchased_on: "",
    breakdown: false,
    critical: false,
    installation: "",
    warranty: false,
    warranty_start: "",
    warranty_expiry: "",
    is_meter: false,
    // meter_type: "",
    applicable_meter_category: "",
    parent_meter: "",
    meter_category: "",
    vendor_id: "",
    oem_name:"",
    parent_asset_id:"",
  
    
  
    invoice: [],
    insurance: [],
    manuals: [],
    others: [],
  };