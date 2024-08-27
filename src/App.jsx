import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Attendance from "./pages/Attendance.jsx";
import Setup from "./pages/Setup.jsx";
import Account from "./pages/SubPages/Account.jsx";
import Organisation from "./pages/SubPages/Organisation.jsx";
import Company from "./pages/SubPages/Company.jsx";
import Country from "./pages/SubPages/Country.jsx";
import Region from "./pages/SubPages/Region.jsx";
import Login from "./components/Authentication/Login.jsx";
import Zone from "./pages/SubPages/Zone.jsx";
import Site from "./pages/SubPages/Site.jsx";
import Entity from "./pages/SubPages/Entity.jsx";
import Building from "./pages/SubPages/Building.jsx";
import Wing from "./pages/SubPages/Wing.jsx";
import Area from "./pages/SubPages/Area.jsx";
import Floor from "./pages/SubPages/Floor.jsx";
import Unit from "./pages/SubPages/Unit.jsx";
import Room from "./pages/SubPages/Room.jsx";
import UserRole from "./pages/SubPages/UserRole.jsx";
import { Toaster } from "react-hot-toast";
import Ticket from "./pages/Ticket.jsx";
import TicketDetails from "./pages/SubPages/details/Details.jsx";
import Footer from "./components/Footer.jsx";
import CreateTicket from "./pages/SubPages/CreateTicket.jsx";
import Business from "./pages/Business.jsx";
import BusinessDetails from "./pages/SubPages/details/BusinessDetails.jsx";
import AddBusiness from "./pages/SubPages/AddBusiness.jsx";
import BusinessSetup from "./pages/SubPages/BusinessSetup.jsx";
import Materials from "./pages/Materials.jsx";
import Booking from "./pages/Booking.jsx";
import FacilityBooking from "./pages/SubPages/FacilityBooking.jsx";
import BookingDetails from "./pages/SubPages/details/BookingDetails.jsx";
import SetupFacility from "./pages/SubPages/SetupFacility.jsx";
import Communication from "./pages/Communication.jsx";
import CreateEvent from "./pages/SubPages/CreateEvent.jsx";
import EventDetails from "./pages/SubPages/details/EventDetails.jsx";
import CreateBroadcast from "./pages/SubPages/CreateBroadcast.jsx";
import BroadcastDetails from "./pages/SubPages/details/BroadcastDetails.jsx";
import MailRoom from "./pages/MailRoom.jsx";
import CreateInbound from "./pages/SubPages/CreateInbound.jsx";
import InBoundDetails from "./pages/SubPages/details/InBoundDetails.jsx";
import CreateOutbound from "./pages/SubPages/CreateOutbound.jsx";
import OutBoundDetails from "./pages/SubPages/details/OutBoundDetails.jsx";
import Asset from "./pages/Asset.jsx";
import AddAsset from "./pages/SubPages/AddAsset.jsx";
import AssetDetails from "./pages/SubPages/details/AssetDetails.jsx";
import Services from "./pages/Services.jsx";
import AddService from "./pages/SubPages/AddService.jsx";
import ServiceDetails from "./pages/SubPages/details/ServiceDetails.jsx";
import Suppliers from "./pages/Suppliers.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import AddSupplier from "./pages/SubPages/AddSupplier.jsx";
import MyTickets from "./pages/MyTickets.jsx";
import UserTicket from "./pages/SubPages/UserTicket.jsx";
import DetailsEdit from "./pages/SubPages/details/DetailsEdit.jsx";
import User from "./components/Authentication/User.jsx";
import UserDetails from "./pages/SubPages/details/UserDetails.jsx";
import AddAMC from "./pages/SubPages/AddAMC.jsx";
import EditAsset from "./pages/SubPages/EditAsset.jsx";
import EmployeeAttendance from "./pages/Employees/EmployeeAttendance.jsx";
import ProtectedAdminRoutes from "./routes/ProtectedAdminRoutes.jsx";
import Salary from "./pages/Employees/Salary.jsx";
import SetupBookingFacility from "./pages/SubPages/SetupBookingFacility.jsx";
import BookSeat from "./pages/SubPages/BookSeat.jsx";
import EmployeeBooking from "./pages/Employees/EmployeeBooking.jsx";
import EmployeeFacilityBooking from "./pages/Employees/EmployeeFacilityBooking.jsx";
import EmployeeSeatBooking from "./pages/Employees/EmployeeSeatBooking.jsx";
import EmployeeBusinessCard from "./pages/Employees/EmployeeBusinessCard.jsx";
import EmployeeTransportation from "./pages/Employees/EmployeeTransportation.jsx";
import BookOutstation from "./pages/Employees/EmployeeSubPages/BookOutstation.jsx";
import BookPickup from "./pages/Employees/EmployeeSubPages/BookPickup.jsx";
import Transportation from "./pages/Transportation.jsx";
import AdminBookDailypickup from "./pages/SubPages/AdminBookDailypickup.jsx";
import AdminBookOutstation from "./pages/SubPages/AdminBookOutstation.jsx";
import AdminPickupDetails from "./pages/SubPages/details/AdminPickupDetails.jsx";
import AdminOutstationDetails from "./pages/SubPages/details/AdminOutstationDetails.jsx";
import EmployeePickupDetails from "./pages/Employees/EmployeePickupDetails.jsx";
import EmployeeOutstationDetails from "./pages/Employees/EmployeeOutstationDetails.jsx";
import Parkings from "./pages/Parkings.jsx";
import EmployeeParking from "./pages/Employees/EmployeeParking.jsx";
import EmployeeBookParking from "./pages/Employees/EmployeeBookParking.jsx";
import ParkingSetup from "./pages/Setup/ParkingSetup.jsx";
import AddParking from "./pages/SubPages/AddParking.jsx";
import EmployeePantry from "./pages/Employees/EmployeePantry.jsx";
import EmployeePantryDetails from "./pages/Employees/EmployeeSubPages/EmployeePantryDetails.jsx";
import Pantry from "./pages/Pantry.jsx";
import EmployeeDoctorAppointment from "./pages/Employees/EmployeeDoctorAppointment.jsx";
import EmployeeBookAppointment from "./pages/Employees/EmployeeBookAppointment.jsx";
import EmployeeDocDetails from "./pages/Employees/EmployeeSubPages/EmployeeDocDetails.jsx";
import DoctorAppointment from "./pages/DoctorAppointment.jsx";
import BookDocAppointment from "./pages/SubPages/BookDocAppointment.jsx";
import AddPantry from "./pages/SubPages/AddPantry.jsx";
import EmployeeFitness from "./pages/Employees/EmployeeFitness.jsx";
import EmployeeBookFitness from "./pages/Employees/EmployeeBookFitness.jsx";
import EmployeeFitnessDetails from "./pages/Employees/EmployeeSubPages/EmployeeFitnessDetails.jsx";
import Fitness from "./pages/Fitness.jsx";
import BookFitness from "./pages/SubPages/BookFitness.jsx";
import FitnessDetails from "./pages/SubPages/details/FitnessDetails.jsx";
import EmployeeBirthday from "./pages/Employees/EmployeeBirthday.jsx";
import Birthday from "./pages/Birthday.jsx";
import AssetGroup from "./pages/Setup/AssetGroup.jsx";
import EmployeeInsurance from "./pages/Employees/EmployeeInsurance.jsx";
import EmployeeAddInsurance from "./pages/Employees/EmployeeSubPages/EmployeeAddInsurance.jsx";
import EmployeePolicyList from "./pages/Employees/EmployeeSubPages/EmployeePolicyList.jsx";
import EmployeePolicyDetails from "./pages/Employees/EmployeeSubPages/EmployeePolicyDetails.jsx";
import Insurance from "./pages/Insurance.jsx";
import AddPolicy from "./pages/SubPages/AddPolicy.jsx";
import PolicyList from "./pages/SubPages/PolicyList.jsx";
import PolicyDetails from "./pages/SubPages/PolicyDetails.jsx";
import EmployeeMeeting from "./pages/Employees/EmployeeMeeting.jsx";
import EmployeeCreateMeeting from "./pages/Employees/EmployeeSubPages/EmployeeCreateMeeting.jsx";
import EmployeeMeetingDetails from "./pages/Employees/EmployeeSubPages/EmployeeMeetingDetails.jsx";
import Meetings from "./pages/Meetings.jsx";
import CreateMeeting from "./pages/SubPages/CreateMeeting.jsx";
import MeetingDetails from "./pages/SubPages/details/MeetingDetails.jsx";
import ProjectManagement from "./pages/ProjectManagement.jsx";
import CreateProject from "./pages/SubPages/CreateProject.jsx";
import ProjectDetails from "./pages/SubPages/details/ProjectDetails.jsx";
import AddInventory from "./pages/SubPages/AddInventory.jsx";
import AddChecklist from "./pages/SubPages/AddChecklist.jsx";
import EditChecklist from "./pages/SubPages/EditChecklist.jsx";
import EditStocks from "./pages/SubPages/EditStocks.jsx";

import DocumentPro from "./pages/DocumentsPro/DocumentPro.jsx";
import AddProjectTask from "./pages/SubPages/AddProjectTask.jsx";
import UserSetup from "./pages/Setup/UserSetup.jsx";
import UserSetupDetails from "./pages/SubPages/details/UserSetupDetails.jsx";
import EmployeeProjectManagement from "./pages/Employees/EmployeeProjectManagement.jsx";
import EmployeeCreateProject from "./pages/Employees/EmployeeSubPages/EmployeeCreateProject.jsx";
import EditProject from "./pages/SubPages/EditProject.jsx";
import EmployeeProjectDetails from "./pages/Employees/EmployeeSubPages/EmployeeProjectDetails.jsx";
import EmployeeProjectAddTask from "./pages/Employees/EmployeeSubPages/EmployeeProjectAddTask.jsx";
import EmployeeEditProject from "./pages/Employees/EmployeeSubPages/EmployeeEditProject.jsx";
import BusinessCard from "./pages/BusinessCard.jsx";
import { useSelector } from "react-redux";
import PO from "./pages/PO.jsx";
import PoDetails from "./pages/SubPages/details/PoDetails.jsx";
import Wo from "./pages/Wo.jsx";
import WoDetail from "./pages/SubPages/details/WoDetails.jsx";
import Audit from "./pages/Audit.jsx";
import AddScheduleAudit from "./pages/SubPages/AuditSubPages/AddScheduleAudit.jsx";
import GRN from "./pages/GRN.jsx";
import AddGrn from "./pages/SubPages/AddGrn.jsx";
import GrnDetails from "./pages/SubPages/details/GRNDetails.jsx";
import Passes from "./pages/Passes.jsx";
import AddNewVisitor from "./pages/AddNewVisitor.jsx";
import AddRVehicles from "./pages/SubPages/AddRVehicle.jsx";
import EditRVehicle from "./pages/SubPages/EditRVehicle.jsx";
import RVehiclesDetails from "./pages/SubPages/details/RVehicleDetails.jsx";
import AddGVehicles from "./pages/SubPages/AddGvehicle.jsx";
import EditGVehicles from "./pages/SubPages/EditGVehicle.jsx";
import GVehiclesDetails from "./pages/SubPages/details/GVehicleDetails.jsx";
import AddStaff from "./pages/SubPages/AddStaff.jsx";
import StaffDetails from "./pages/SubPages/details/StaffDetails.jsx";
import EditStaff from "./pages/SubPages/EditStaff.jsx";
import MaterialDetails from "./pages/SubPages/details/MaterialsDetails.jsx";
import AddPatrolling from "./pages/SubPages/AddPatrolling.jsx";
import PatrollingDetails from "./pages/SubPages/details/PatrollingDetails.jsx";
import EditPatrolling from "./pages/SubPages/AddPatrolling.jsx";
import InwardPassDetails from "./pages/SubPages/details/InwardPassDetails.jsx";
import OutwardPassDetails from "./pages/SubPages/OutwardsPassDetails.jsx";
import GDN from "./pages/GDN.jsx";
import AddGdn from "./pages/SubPages/AddGDN.jsx";
import GdnViewDetails from "./pages/SubPages/details/GDNViewDetails.jsx";
import SupplierDetails from "./pages/SubPages/details/SupplierDetails.jsx";
import EditSuppliers from "./pages/SubPages/EditSuppliers.jsx";
import Calender from "./pages/Calendar.jsx";
import EditOpsScheduleAudit from "./pages/SubPages/AuditSubPages/EditOpsScheduleAudit.jsx";
import AddAuditChecklist from "./pages/SubPages/AuditSubPages/AddAuditChecklist.jsx";
import EmployeePasses from "./pages/Employees/EmployeePasses.jsx";
import EmployeeAddVisitor from "./pages/Employees/EmployeeSubPages/EmployeeAddVisitor.jsx";
import EmployeeAddGVehicles from "./pages/Employees/EmployeeSubPages/EmployeeAddGvehicle.jsx";
import EmployeeGVehiclesDetails from "./pages/Employees/EmployeeSubPages/EmployeeGvehicleDetails.jsx";
import EmployeeAddRVehicles from "./pages/Employees/EmployeeSubPages/EmployeeAddRVehicle.jsx";
import EmployeeAddStaff from "./pages/Employees/EmployeeSubPages/EmployeeAddStaff.jsx";
import Bills from "./pages/Bills.jsx";
import AddBills from "./pages/SubPages/AddBills.jsx";
import OtherBillsDetails from "./pages/SubPages/details/OtherBillDetails.jsx";
import OtherFeedsBill from "./pages/SubPages/details/OtherBillFeeds.jsx";
import Insights from "./pages/Insights.jsx";
import AddInsights from "./pages/SubPages/AddInsights.jsx";
import EditInsights from "./pages/SubPages/EditInsight.jsx";
import InsightsDetails from "./pages/SubPages/details/InsightDetails.jsx";
import InsightSetup from "./pages/Setup/InsightSetup.jsx";
import Permit from "./pages/Permit.jsx";
import AddNewPermit from "./pages/SubPages/AddNewPermit.jsx";
import PermitListEdit from "./pages/SubPages/PermitListEdit.jsx";
import PermitListDetails from "./pages/SubPages/details/PermitDetails.jsx";
import PermitPendingApprovalDetails from "./pages/SubPages/details/PermitPendingApprovalDetails.jsx";
import ScheduleAuditDetails from "./pages/SubPages/details/ScheduleAuditDetails.jsx";
import ChecklistDetails from "./pages/SubPages/details/ChecklistDetails.jsx";
import PermitSetup from "./pages/Setup/PermitSetup.jsx";
import LetterOfIndent from "./pages/LetterOfIndent.jsx";
import AddLoi from "./pages/SubPages/AddLoi.jsx";
import EditLoiPO from "./pages/SubPages/details/EditLoiPo.jsx";
import LOIPoDetails from "./pages/SubPages/details/LoiPoDetails.jsx";
import EditLoiWO from "./pages/SubPages/details/EditLoiWo.jsx";
import LOIWoDetail from "./pages/SubPages/details/LoiWoDetail.jsx";
import CAR from "./pages/CAR.jsx";
import EditCAR from "./pages/SubPages/EditCAR.jsx";
import AddCAR from "./pages/SubPages/AddCAR.jsx";
import CARDetails from "./pages/SubPages/details/CARDetails.jsx";
import CARTagVendor from "./pages/SubPages/details/CARTagVendor.jsx";
import CARFeeds from "./pages/SubPages/details/CARFeeds.jsx";
import FoodsBeverage from "./pages/FoodsBeverage.jsx";
import AddFB from "./pages/SubPages/AddFB.jsx";
import FBDetails from "./pages/SubPages/details/FBDetails.jsx";
import FBEdit from "./pages/SubPages/FBEdit.jsx";
import AddResMenu from "./pages/SubPages/details/FBSubDetails/AddResMenu.jsx";
import EditResMenu from "./pages/SubPages/details/FBSubDetails/EditResMenu.jsx";
import ResMenuDetails from "./pages/SubPages/details/FBSubDetails/ResMenuDetails.jsx";
import ResOrderDetails from "./pages/SubPages/details/FBSubDetails/ResOrderDetails.jsx";
import Incidents from "./pages/Incident.jsx";
import AddIncident from "./pages/SubPages/AddIncident.jsx";
import EditIncident from "./pages/SubPages/EditIncident.jsx";
import IncidentsDetails from "./pages/SubPages/details/IncidentsDetails.jsx";
import IncidentSetup from "./pages/Setup/IncidentSetupPages/IncidentSetup.jsx";
import MeterTypeSetup from "./pages/Setup/MeterTypesSetup.jsx";
import CheckListGroupSetup from "./pages/Setup/ChecklistGroupSetup.jsx";
import ParkingDetails from "./pages/SubPages/details/ParkingDetails.jsx";
import AddParkingConfig from "./pages/Setup/ParkingSetupPages/AddParkingConfig.jsx";
import EditParkingConfiguration from "./pages/Setup/ParkingSetupPages/EditParkingConfig.jsx";
import FmUserSetup from "./pages/Setup/FMUserSetup.jsx";
import AddFmUserSetup from "./pages/Setup/AddFMUserSetup.jsx";
import EditFmUserSetup from "./pages/Setup/EditFMUserSetup.jsx";
import OccupantUserSetup from "./pages/Setup/OccupantUser/OccupantUserSetup.jsx";
import AddOccupantUserSetup from "./pages/Setup/OccupantUser/AddOccupantUserSetup.jsx";
import EditOccupantUserSetup from "./pages/Setup/OccupantUser/EditOccupantUserSetup.jsx";
import InvoiceApprovalSetup from "./pages/Setup/InvoiceApprovalSetupPages/InvoiceApprovalSetup.jsx";
import AddInvoiceApprovalsSetup from "./pages/Setup/InvoiceApprovalSetupPages/AddInvoiceApprovalSetup.jsx";
import EditInvoiceApprovalsSetup from "./pages/Setup/InvoiceApprovalSetupPages/EditInvoiceApprovalSet.jsx";
import TicketSetup from "./pages/Setup/TicketSetup/TicketSetup.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import EmailRuleSetup from "./pages/Setup/EmailRuleSetup.jsx";
import FmGroupsSetup from "./pages/Setup/FMGroupSetup.jsx";
import FmGroupSetupDetails from "./pages/Setup/FMGroupSetupDetails.jsx";
import SACHSNSetup from "./pages/Setup/SACHSNSetup.jsx";
import AddSACHSNSetup from "./pages/Setup/AddSACHSNSetup.jsx";
import SACHSNSetupDetails from "./pages/Setup/SACHSNSetupDetails.jsx";
import MaterialPR from "./pages/MaterialPR.jsx";
import AddMatertialPR from "./pages/SubPages/AddMaterialPR.jsx";
import EditMatertialPR from "./pages/SubPages/EditMaterialPR.jsx";
import MaterialPRDetails from "./pages/SubPages/details/MaterialPRDetails.jsx";
import ServicePR from "./pages/ServicePR.jsx";
import AddServicePR from "./pages/SubPages/AddServicePR.jsx";
import EditServicePR from "./pages/SubPages/EditServicePR.jsx";
import ServicePRDetails from "./pages/SubPages/details/ServicePRDetails.jsx";
import AddServicesChecklist from "./pages/SubPages/AddServicesChecklist.jsx";

import EditServiceChecklist from "./pages/SubPages/EditServiceChecklist.jsx";
import AddressesSetup from "./pages/Setup/AddressSetup/AddressSetup.jsx";
import AddAddressesSetup from "./pages/Setup/AddressSetup/AddAddressSetup.jsx";
import EditAddressesSetup from "./pages/Setup/AddressSetup/EditAddressSetup.jsx";
import AddRole from "./pages/SubPages/AddUserRole.jsx";
import AssociateServiceChecklist from "./pages/SubPages/AssociateServiceChecklist.jsx";
import AssociateAssetChecklist from "./pages/SubPages/AssociateAssetChecklist.jsx";
import EmployeeHotelRequest from "./pages/Employees/Booking&Request/EmployeeHotelRequest.jsx";
import EmployeeBookingRequest from "./pages/Employees/Booking&Request/EmployeeBookingRequest.jsx";
import EmployeeAddHotelRequest from "./pages/Employees/Booking&Request/EmployeeAddHotelRequest.jsx";
import EmployeeHotelRequestDetails from "./pages/Employees/Booking&Request/EmployeeHotelRequestDetails.jsx";
import EmployeeFlightRequest from "./pages/Employees/Booking&Request/EmployeeFlightTicketRequest.jsx";
import EmployeeAddFlightRequest from "./pages/Employees/Booking&Request/EmployeeAddFlightTicketRequest.jsx";
import EmployeeFlightRequestDetails from "./pages/Employees/Booking&Request/EmployeeFlightDetails.jsx";
import EmployeeCabRequest from "./pages/Employees/Booking&Request/EmployeeCabRequest.jsx";
import EmployeeAddCabRequest from "./pages/Employees/Booking&Request/EmployeeAddCabRequest.jsx";
import EmployeeCabRequestDetails from "./pages/Employees/Booking&Request/EmployeeCabDetails.jsx";
import EmployeeTransportationRequest from "./pages/Employees/Booking&Request/EmployeeTransportationRequest.jsx";
import EmployeeAddTransportRequest from "./pages/Employees/Booking&Request/EmployeeAddTransportationRequest.jsx";
import EmployeeTransportRequestDetails from "./pages/Employees/Booking&Request/EmployeeTransportationRequestDetails.jsx";
import EmployeeTravellingAllowanceRequest from "./pages/Employees/Booking&Request/EmployeeTravellingAllowanceRequest.jsx";
import EmployeeAddTravellingAllowanceRequest from "./pages/Employees/Booking&Request/EmployeeAddTravellingRequest.jsx";
import EmployeeTravelingAllowanceDetails from "./pages/Employees/Booking&Request/EmployeeTravellingAllowanceDetails.jsx";
import EditService from "./pages/SubPages/EditServices.jsx";
import EditServicePPM from "./pages/SubPages/EditServicePPM.jsx";
import EditAssetAMC from "./pages/SubPages/details/EditAMC.jsx";
import HotelRequest from "./pages/SubPages/Booking&Req/HotelRequest.jsx";
import AddHotelRequest from "./pages/SubPages/Booking&Req/AddHotelRequest.jsx";
import EditHotelRequest from "./pages/SubPages/Booking&Req/EditHotelRequest.jsx";
import HotelRequestDetails from "./pages/SubPages/Booking&Req/HotelRequestDetails.jsx";
import FlightRequest from "./pages/SubPages/Booking&Req/FlightRequest.jsx";
import AddFlightRequest from "./pages/SubPages/Booking&Req/AddFlightRequest.jsx";
import EditFlightRequest from "./pages/SubPages/Booking&Req/EditFlightRequest.jsx";
import FlightRequestDetails from "./pages/SubPages/Booking&Req/FlightRequestDetails.jsx";
import CabRequest from "./pages/SubPages/Booking&Req/CabRequest.jsx";
import AddCabRequest from "./pages/SubPages/Booking&Req/AddCabRequest.jsx";
import EditCabRequest from "./pages/SubPages/Booking&Req/EditCabRequest.jsx";
import CabRequestDetails from "./pages/SubPages/Booking&Req/CabRequestDetails.jsx";
import TransportationRequest from "./pages/SubPages/Booking&Req/TransportationRequest.jsx";
import AddTransportRequest from "./pages/SubPages/Booking&Req/AddTransportationRequest.jsx";
import EditTransportRequest from "./pages/SubPages/Booking&Req/EditTransporttaionRequest.jsx";
import TransportRequestDetails from "./pages/SubPages/Booking&Req/TransportationRequestDetails.jsx";
import TravellingAllowanceRequest from "./pages/SubPages/Booking&Req/TravellingAllowanceRequest.jsx";
import AddTravellingAllowanceRequest from "./pages/SubPages/Booking&Req/AddTravellingAllowanceRequest.jsx";
import EditTravellingAllowanceRequest from "./pages/SubPages/Booking&Req/EditTravellingAllowance.jsx";
import TravelingAllowanceDetails from "./pages/SubPages/Booking&Req/TravellingAllowanceDetails.jsx";
import MasterCheckListSetup from "./pages/Setup/MasterChecklistSetup.jsx";
import AddMasterCheckListSetup from "./pages/Setup/AddMaterChecklistSetup.jsx";
import EditServiceRoutine from "./pages/SubPages/EditServiceRoutine.jsx";
import HRMS from "./pages/HRMS/HRMS.jsx";
import EmployeeOnboarding from "./pages/HRMS/EmployeeOnboarding.jsx";
import AddEmployeeOnBoarding from "./pages/HRMS/AddEmployeeOnBoarding.jsx";
import EmployeeOnboardingDetails from "./pages/HRMS/EmployeeOnBoardingDetails.jsx";
import EditEmployeeOnBoarding from "./pages/HRMS/EditEmployeeOnBoarding.jsx";
import Onboarding from "./pages/Employees/EmployeeHRMS/Onboarding.jsx";
import AddOnBoarding from "./pages/Employees/EmployeeHRMS/AddOnBoarding.jsx";
import OnboardingDetails from "./pages/Employees/EmployeeHRMS/OnBoardingDetails.jsx";
import AssetRoutineDetails from "./pages/SubPages/details/AssetRoutineDetails.jsx";
import AddPPMActivity from "./pages/SubPages/AddPPMActivity.jsx";
import PPMActivityDetails from "./pages/SubPages/details/PPMActivityDetails.jsx";
import HRMSAttendanceDetails from "./pages/HRMS/HRMSAttendanceDetails.jsx";
import HRMSSalarySlipDetails from "./pages/HRMS/HRMSSalarySlipDetails.jsx";
import HRMSSalaryAutoDetails from "./pages/HRMS/HRMSSalaryAutoDetails.jsx";
import HRMSAttendance from "./pages/HRMS/HRMSAttendance.jsx";
import HRMSSalarySlip from "./pages/HRMS/HRMSSalarySlip.jsx";
import HRMSAutoSalaryBreakupCreation from "./pages/HRMS/HRMSAutoSalaryBreakupCreation.jsx";
import EmployeeHRMSAttendanceDetails from "./pages/Employees/EmployeeHRMS/EmployeeHRMSAttendanceDetails.jsx";
import EmployeeHRMSSalarySlipDetails from "./pages/Employees/EmployeeHRMS/EmployeeHRMSSalarySlipDetails.jsx";
import EmployeeAutoSalaryBreakupDetails from "./pages/Employees/EmployeeHRMS/EmployeeAutoSalaryBreakupDetails.jsx";
import AttendanceHRMS from "./pages/Employees/EmployeeHRMS/AttendanceHRMS.jsx";
import EmployeeHRMSSalarySlip from "./pages/Employees/EmployeeHRMS/EmployeeHRMSSalarySlip.jsx";
import EmployeeAutoSalaryBreakup from "./pages/Employees/EmployeeHRMS/EmployeeAutoSalaryBreakUp.jsx";
import HRMSLeaves from "./pages/HRMS/HRMSLeave.jsx";
import HRMSLeavesDetails from "./pages/HRMS/HRMSLeaveDetails.jsx";
import EmployeeHRMSLeaves from "./pages/Employees/EmployeeHRMS/EmployeeHRMSLeave.jsx";
import EmployeeLeavesDetails from "./pages/Employees/EmployeeHRMS/EmployeeHRMSLeaveDetails.jsx";
import CreatePolls from "./pages/SubPages/CreatePoll.jsx";
import CreateForum from "./pages/SubPages/CreateForum.jsx";
import ChatBot from "./pages/SubPages/ChatBot.jsx";
import CreateGroup from "./pages/SubPages/CreateGroup.jsx";
import EmployeeCommunication from "./pages/Employees/EmployeeCommunication/EmployeeCommunication.jsx";
import CreateEmployeeForum from "./pages/Employees/EmployeeCommunication/CreateEmployeeForum.jsx";
import EmployeeChatBot from "./pages/Employees/EmployeeCommunication/EmployeeChatBot.jsx";
import EmployeeGroupJoinDetails from "./pages/Employees/EmployeeCommunication/EmployeeGroupJoinDetails.jsx";
import GroupJoinDetails from "./pages/SubPages/details/GroupJoinDetails.jsx";
import AdminHRMS from "./pages/AdminHrms/AdminHrms.jsx";
import HRMSDashboard from "./pages/AdminHrms/HRMSDashboard.jsx";
import { getItemInLocalStorage } from "./utils/localStorage.js";
import { API_URL, getVibeBackground } from "./api/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBackground } from "./features/theme/backgroundSlice.js";
import ServicesTask from "./pages/SubPages/ServicesTask.jsx";
import ServicePage from "./pages/SubPages/ServicePage.jsx";
import ServiceChecklist from "./pages/SubPages/ServiceChecklist.jsx";
import AMC from "./pages/SubPages/AMC.jsx";
import Meter from "./pages/Meter.jsx";
import Checklist from "./pages/Checklist.jsx";
import RoutineTask from "./pages/RoutineTask.jsx";
import PPMActivity from "./pages/SubPages/PPMActivity.jsx";
import Inventory from "./pages/Inventory.jsx";
import Profile from "./pages/SubPages/Profile.jsx";
import EditProfile from "./pages/SubPages/EditProfile.jsx";
import EmployeeProfile from "./pages/Employees/EmployeeCommunication/EmployeeProfile.jsx";
import EditEmployeeProfile from "./pages/Employees/EmployeeCommunication/EditEmployeeProfile.jsx";
import HRMSAlert from "./pages/AdminHrms/HRMSAlert.jsx";
import GeneralSettings from "./pages/AdminHrms/GeneralSetting.jsx";
import LeaveCategories from "./pages/AdminHrms/LeaveCategories.jsx";
import Templates from "./pages/AdminHrms/Templates.jsx";
import TemplateAssignment from "./pages/AdminHrms/TemplateAssignment.jsx";
import AddLeaveCategory from "./pages/AdminHrms/AddLeaveCategory.jsx";
import AddTemplates from "./pages/AdminHrms/AddTemplate.jsx";
import LeaveApplication from "./pages/AdminHrms/LeaveApplication.jsx";
import LeaveBalance from "./pages/AdminHrms/LeaveBalance.jsx";
import Rollover from "./pages/AdminHrms/RollOver.jsx";
import EditLeaveCategory from "./pages/AdminHrms/EditLeaveCategory.jsx";
import EditTemplates from "./pages/AdminHrms/EditTemplate.jsx";
import LeaveBalanceDetails from "./pages/AdminHrms/LeaveBalanceDetails.jsx";
import BasicInformation from "./pages/AdminHrms/BasicInformation.jsx";
import AddressInformation from "./pages/AdminHrms/AddressInformation.jsx";
import GeographicalSetting from "./pages/AdminHrms/GEographicalSetting.jsx";
import Location from "./pages/AdminHrms/Location.jsx";
import Department from "./pages/AdminHrms/Department.jsx";
import Holiday from "./pages/AdminHrms/Holiday.jsx";
import BankAccount from "./pages/AdminHrms/BankAccount.jsx";
import CalendarEvent from "./pages/AdminHrms/CalendarEvent.jsx";
import PersonalInformation from "./pages/AdminHrms/PersonalInformation.jsx";
import EmployeeAddress from "./pages/AdminHrms/EmployeeAddress.jsx";
import Document from "./pages/AdminHrms/Document.jsx";
import ManageAdmin from "./pages/AdminHrms/ManageAdmin.jsx";
import ThirdParty from "./pages/AdminHrms/ThirdParty.jsx";
import PermissionsField from "./pages/AdminHrms/PermissionField.jsx";
import NewsFeedPermission from "./pages/AdminHrms/NewsFeedPermission.jsx";
import CompanyDocuments from "./pages/AdminHrms/CompanyDocuments.jsx";
import LetterTemplate from "./pages/AdminHrms/LetterTemplate.jsx";
import AddLetterTemplate from "./pages/AdminHrms/AddLetterTemplate.jsx";
import OldLetterTemplate from "./pages/AdminHrms/OldLetterTemplate.jsx";
import AddOnboardingSetting from "./pages/AdminHrms/AddOnBoardingSetting.jsx";
import WorkflowTrigger from "./pages/AdminHrms/WorkFlowTrigger.jsx";
import EmailIdMapping from "./pages/AdminHrms/EmailMapping.jsx";
import CommunicationTemplate from "./pages/AdminHrms/CommunicationTemplate.jsx";
import InvestmentSetting from "./pages/AdminHrms/InvestmentSetting.jsx";
import ImportExport from "./pages/AdminHrms/ImportExport.jsx";
import ReportGeneration from "./pages/AdminHrms/ReportGeneration.jsx";
import AuditReports from "./pages/AdminHrms/AuditReports.jsx";
import PayrollReports from "./pages/AdminHrms/PayrollReport.jsx";
import ComplianceReports from "./pages/AdminHrms/ComplianceReport.jsx";
import IncomeTaxReport from "./pages/AdminHrms/IncomeTaxDetails.jsx";
import BankReport from "./pages/AdminHrms/BankReport.jsx";
import LeaveReport from "./pages/AdminHrms/LeaveReport.jsx";
import AttendanceReport from "./pages/AdminHrms/AttendanceReport.jsx";
import ExpenseReport from "./pages/AdminHrms/ExpenseReport.jsx";
import Form16 from "./pages/AdminHrms/Form16.jsx";
import CustomReport from "./pages/AdminHrms/CustomReport.jsx";
import HRReport from "./pages/AdminHrms/HRMSReport.jsx";
import InvestmentReport from "./pages/AdminHrms/InvestmentReport.jsx";
import OnBoarding from "./pages/AdminHrms/OnBoarding.jsx";
import OffBoarding from "./pages/AdminHrms/OffBoarding.jsx";
import AddChallan from "./pages/AdminHrms/AddChallan.jsx";
import ViewForm16 from "./pages/AdminHrms/ViewForm16.jsx";
import Purchase from "./pages/Purchase.jsx";
import FieldSenseMeeting from "./pages/FieldSenseMeeting.jsx";
import CreateFieldSenseMeeting from "./pages/SubPages/CreateFieldSenseMeeting.jsx";
import FieldSenseMeetingDetails from "./pages/SubPages/details/FieldSenseMeeting.jsx";
import FieldSenseLeads from "./pages/FieldSenseLeads.jsx";
import CreateFieldSenseLeads from "./pages/SubPages/CreateFieldSenseLead.jsx";
import EmployeeFieldSenseMeeting from "./pages/Employees/EmployeeFieldSenseMeeting.jsx";
import CreateEmployeeFieldSenseMeeting from "./pages/Employees/CreateEmployeeFIeldSenseMeeting.jsx";
import EmployeeFieldSenseMeetingDetails from "./pages/Employees/EmployeeFieldSenseMeetingDetails.jsx";
import Roster from "./pages/AdminHrms/Roaster.jsx";
import RosterShift from "./pages/AdminHrms/RoasterShift.jsx";
import RunPayroll from "./pages/AdminHrms/RunPayroll.jsx";
import Payslip from "./pages/AdminHrms/Payslip.jsx";
import PayrollForm16 from "./pages/AdminHrms/PayrollForm16.jsx";
import LoanApplication from "./pages/AdminHrms/LoanApplication.jsx";
import PayrollSettings from "./pages/AdminHrms/PayrollSettings.jsx";
import LocationMaster from "./pages/AdminHrms/LocationMaster.jsx";
import FixedAllowance from "./pages/AdminHrms/FixedAllowance.jsx";
import FixedDeduction from "./pages/AdminHrms/FixedDeduction.jsx";
import VariableAllowance from "./pages/AdminHrms/VariableAllowance.jsx";
import VariableDeduction from "./pages/AdminHrms/VariableDeduction.jsx";
import OtherBenefit from "./pages/AdminHrms/OtherBenefit.jsx";
import Loans from "./pages/AdminHrms/Loans.jsx";
import AddLoan from "./pages/AdminHrms/AddLoan.jsx";
import TaxSettings from "./pages/AdminHrms/TaxSettings.jsx";
import PayslipSetting from "./pages/AdminHrms/PaySlipSetting.jsx";
import CTCTemplate from "./pages/AdminHrms/CTCTemplate.jsx";
import NPS from "./pages/AdminHrms/NPS.jsx";
import Gratuity from "./pages/AdminHrms/Gratuity.jsx";
import LeaveRecovery from "./pages/AdminHrms/LeaveRecovery.jsx";
import NoticeRecovery from "./pages/AdminHrms/NoticeRecovery.jsx";
import MinimumWage from "./pages/AdminHrms/MinimumWage.jsx";
import PF from "./pages/AdminHrms/PF.jsx";
import DailyWage from "./pages/AdminHrms/DailyWage.jsx";
import AttendanceRecords from "./pages/AdminHrms/AttendanceRecord.jsx";
import AttendanceProcess from "./pages/AdminHrms/AttendanceProcess.jsx";
import RegularizationRequest from "./pages/AdminHrms/RegularizationRequest.jsx";
import AttendanceAudit from "./pages/AdminHrms/AttendanceAudit.jsx";
import DeviceRegistration from "./pages/AdminHrms/DeviceRegistration.jsx";
import AttendanceValidation from "./pages/AdminHrms/AttendanceValidation.jsx";
import AttendanceLogs from "./pages/AdminHrms/AttendanceLogs.jsx";
import AttendanceGeneralSetting from "./pages/AdminHrms/AdminGeneralSetting.jsx";
import RegularizationReason from "./pages/AdminHrms/RegularizationReason.jsx";
import AttendanceTemplate from "./pages/AdminHrms/AttendanceTemplate.jsx";
import AttendanceTemplateAssign from "./pages/AdminHrms/AttendanceTemplateAssign.jsx";
import AttAddTemplate from "./pages/AdminHrms/AttAddTemplate.jsx";
import EmployeeDirectory from "./pages/AdminHrms/EmployeeDirectory.jsx";
import AddEmployee from "./pages/AdminHrms/AddEmployee.jsx";
import InvestmentApproval from "./pages/AdminHrms/InvestmentApproval.jsx";
import GenerationLetter from "./pages/AdminHrms/GeneratedLetter.jsx";
import OrganizationTree from "./pages/AdminHrms/OrganisationTree.jsx";
import DataChangeRequest from "./pages/AdminHrms/DateChangeRequest.jsx";
import CTCBasket from "./pages/AdminHrms/CTCBasket.jsx";
import EmpOnboarding from "./pages/AdminHrms/EmpOnBoarding.jsx";
import SeparationApplication from "./pages/AdminHrms/SeparationApplication.jsx";
import PendingContract from "./pages/AdminHrms/PendingContract.jsx";
import BillPay from "./pages/BillPay.jsx";
import BillPayDetails from "./pages/SubPages/details/BillPayDetails.jsx";
import EmployeeBillPay from "./pages/Employees/EmployeeBillPay.jsx";
import EmployeeBillPayDetails from "./pages/Employees/EmployeeBillPayDetails.jsx";
import CommunicationAccessControl from "./pages/Setup/CommunicationAccessControl.jsx";
import PersonalFinancialLogin from "./pages/PersonalFinance/PersonalFinanceLogin.jsx";
import PersonalFinancialSetup from "./pages/PersonalFinance/PersonalFinancialSetup.jsx";
import PersonalFinancialEdit from "./pages/PersonalFinance/PersonalFinancialEdit.jsx";
import EmergencyFund from "./pages/PersonalFinance/EmergencyFund.jsx";
import AddEmergencyFund from "./pages/PersonalFinance/AddEmergencyFund.jsx";
import Investment from "./pages/PersonalFinance/Investment.jsx";
import AddInvestment from "./pages/PersonalFinance/AddInvestment.jsx";
import GoalPlanning from "./pages/PersonalFinance/GoalPlanning.jsx";
import AddGoalPlanning from "./pages/PersonalFinance/AddGoalPlanning.jsx";
import PersonalInsurance from "./pages/PersonalFinance/PersonalInsurance.jsx";
import AddPersonalInsurance from "./pages/PersonalFinance/AddPersonalInsurance.jsx";
import InsuranceDetails from "./pages/PersonalFinance/InsuranceDetails.jsx";
import IndividualDetails from "./pages/PersonalFinance/IndividualDetails.jsx";
import InvestmentDetails from "./pages/PersonalFinance/InvestmentDetails.jsx";
import GoalDetails from "./pages/PersonalFinance/GoalDetails.jsx";
import EmergencyFundDetails from "./pages/PersonalFinance/EmergencyFundDetails.jsx";
import AdvanceSalaryRequest from "./pages/AdvanceSalary/AdvanceSalaryRequest.jsx";
import BankAccountCreation from "./pages/AdvanceSalary/BankAccountCreation.jsx";
import CreateBankAccount from "./pages/AdvanceSalary/CreateBankAccount.jsx";
import BankAccountDetails from "./pages/AdvanceSalary/BankAccountDetails.jsx";
import EmployeeAdvanceSalaryRequest from "./pages/Employees/EmployeeAdvanceSalary/EmployeeAdvanceSalaryRequestDetails.jsx";
import EmployeeBankAccountCreation from "./pages/Employees/EmployeeAdvanceSalary/EmployeeBankAccountCreation.jsx";
import EmployeeCreateBankAccount from "./pages/Employees/EmployeeAdvanceSalary/EmployeeCreateBankAccount.jsx";
import EmployeeBankAccountDetails from "./pages/Employees/EmployeeAdvanceSalary/EmployeeBankAccountDetails.jsx";
import ServiceTaskDetails from "./pages/SubPages/details/ServiceTaskDetails.jsx";
import AssetAmcDetails from "./pages/SubPages/details/assetSubDetails/AssetAmcDetails.jsx";
import InventoryDetails from "./pages/SubPages/details/InventoryDetails.jsx";
import PPMTask from "./pages/SubPages/PPMTask.jsx";
import PPMChecklistDetails from "./pages/SubPages/details/PPMChecklistDetails.jsx";
import AssetWidgets from "./pages/SubPages/AssetWidgets.jsx";
import DocumentMain from "./pages/DocumentsPro/DocumentMain.jsx";
import Integration from "./pages/Integrations/Integration.jsx";
import Gmail from "./pages/Integrations/Gmail.jsx";
import VisitorPage from "./pages/SubPages/VisitorPage.jsx";
import RVehicles from "./pages/SubPages/RVehicles.jsx";
import GVehicles from "./pages/SubPages/GVehicles.jsx";
import Staff from "./pages/SubPages/Staff.jsx";
import GoodsInOut from "./pages/SubPages/GoodsInOut.jsx";
import SiteDetails from "./pages/Setup/AccountSetup/SiteDetails.jsx";
import AddSite from "./pages/Setup/AccountSetup/AddSite.jsx";
import EditSite from "./pages/Setup/AccountSetup/EditSite.jsx";
import ProjectCustomBoard from "./pages/SubPages/Projectmanagement/ProjectCustomBoard.jsx";
import DashboardBeta from "./pages/DashboardBeta.jsx";
import Patrolling from "./pages/SubPages/Patrolling.jsx";
import AssetUtilities from "./pages/SubPages/AssetUtilities.jsx";
import VisitorDetails from "./pages/SubPages/details/VisitorDetails.jsx";
import EditVisitor from "./pages/SubPages/EditVisitor.jsx";
import AddUser from "./pages/Setup/users/AddUser.jsx";
import EditContactBook from "./pages/SubPages/EditContactBook.jsx";
import LOIProceed from "./pages/SubPages/LOIProceed.jsx";

// new admin hrms
import AddGenerationLetter from "./pages/AdminHrms/AddGenerationLetter.jsx";
import OrganisationView2 from "./pages/AdminHrms/OrganisationView2.jsx";
import OrganisationView3 from "./pages/AdminHrms/OrganisationView3.jsx";
import OrganisationView1 from "./pages/AdminHrms/OrganisationView1.jsx";
import BasicLink from "./pages/AdminHrms/BasicLink.jsx";
import AddBankAccount from "./pages/AdminHrms/AddBankAccount.jsx";
import LeaveLink from "./pages/AdminHrms/LeaveLink.jsx";
import AddEmployeeDirectory from "./pages/AdminHrms/AddEmployeeDirectory.jsx";
import EditCommunicationTemplate from "./pages/AdminHrms/EditCommunicationTemplate.jsx";

import SectionsPersonal from "./pages/AdminHrms/SectionsPersonal.jsx";
import SectionsEmployment from "./pages/AdminHrms/SectionEmployment.jsx";
import SectionStatutory from "./pages/AdminHrms/SectionStatutory.jsx";
import SectionSalary from "./pages/AdminHrms/SectionSalary.jsx";
import SectionTax from "./pages/AdminHrms/SectionTax.jsx";
import AddNewCTC from "./pages/AdminHrms/AddNewCTC.jsx";
import SectionDoc from "./pages/AdminHrms/SectionDoc.jsx";
import SectionLoans from "./pages/AdminHrms/SectionLoans.jsx";
import SectionTransaction from "./pages/AdminHrms/SectionTransaction.jsx";
import SectionLog from "./pages/AdminHrms/SectionLog.jsx";
import PendingRequest from "./pages/AdminHrms/PendingRequest.jsx";
import SetupIssues from "./pages/AdminHrms/SetupIssues.jsx";
import ProcessAlert from "./pages/AdminHrms/ProcessAlert.jsx";
import AlertTasks from "./pages/AdminHrms/AlertTasks.jsx";
import Deductions80C from "./pages/AdminHrms/Deductions80C.jsx";
import OtherExemptions from "./pages/AdminHrms/OtherExemptions.jsx";
import RentInformation from "./pages/AdminHrms/RentInformation.jsx";
import PrerequisiteInformation from "./pages/AdminHrms/PrerequisiteInformation.jsx";
import OtherIncomeInfo from "./pages/AdminHrms/OtherIncomeInfo.jsx";
import HousingLoanInfo from "./pages/AdminHrms/HousingLoanInfo.jsx";
import ViewRecords from "./pages/AdminHrms/ViewRecords.jsx";
import OtherDetails from "./pages/AdminHrms/OtherDetails.jsx";
import Employment from "./pages/AdminHrms/Employment.jsx";
import Statutory from "./pages/AdminHrms/Statutory.jsx";
import OnboardingSalary from "./pages/AdminHrms/Salary.jsx";
import Policies from "./pages/AdminHrms/Policies.jsx";
import Invite from "./pages/AdminHrms/Invite.jsx";
import Resignation from "./pages/AdminHrms/Resignation.jsx";
import EditAttendanceProcess from "./pages/AdminHrms/EditAttendanceProcess.jsx";
import LoanAppAdd from "./pages/AdminHrms/LoanAppAdd.jsx";
import CTCGeneralSetting from "./pages/AdminHrms/CTCGeneralSetting.jsx";
import ComponentCTCTemplate from "./pages/AdminHrms/ComponentCTCTemplate.jsx";
import Restrictions from "./pages/AdminHrms/Restrictions.jsx";
import PayslipDetailsPage from "./pages/AdminHrms/PayslipDetailsPage.jsx";
import PayslipDetails1 from "./pages/AdminHrms/PayslipDetails1.jsx";
import PayslipDetails3 from "./pages/AdminHrms/PayslipDetails3.jsx";
import PayslipDetails4 from "./pages/AdminHrms/PayslipDetails4.jsx";
import AddCustomReport from "./pages/AdminHrms/AddCustomReport.jsx";
import AddCommunicationTemplate from "./pages/AdminHrms/AddCommunicationTemplate.jsx";
import PayslipDetails2 from "./pages/AdminHrms/PayslipDetails2.jsx";
import EditLetterTemplate from "./pages/AdminHrms/EditLetterTemplate.jsx";
import StandardUnit from "./pages/Setup/StandardUnitSetup/StandardUnit.jsx";
import LOIPOTable from "./pages/SubPages/LOIPOTable.jsx";
import EmployeeVisitor from "./pages/Employees/EmployeeSubPages/EmployeeVisitor.jsx";
import EmployeeVisitorDetails from "./pages/Employees/EmployeeSubPages/EmployeeVisitorDetails.jsx";
import EmployeeVisitorEdit from "./pages/Employees/EmployeeSubPages/EmployeeVisitorEdit.jsx";
import EmployeeRVehicles from "./pages/Employees/EmployeeSubPages/EmployeeRVehiicles.jsx";
import EmployeeRVehiclesDetails from "./pages/Employees/EmployeeSubPages/EmployeeRVehicleDetails.jsx";
import EmployeeRVehiclesEdit from "./pages/Employees/EmployeeSubPages/EmployeeRVehicleEdit.jsx";
import EmployeeStaff from "./pages/Employees/EmployeeStaff.jsx";
import EmployeeEditStaff from "./pages/Employees/EmployeeSubPages/EmployeeEditStaff.jsx";
import EmployeeMaterials from "./pages/Employees/EmployeeMaterials.jsx";
import EmployeeMaterialDetails from "./pages/Employees/EmployeeSubPages/EmpolyeeMaterialDetails.jsx";
import EmployeePatrollingDetails from "./pages/Employees/EmployeeSubPages/EmployeePatrollingDetails.jsx";
import EmployeePatrolling from "./pages/Employees/EmployeePatrolling.jsx";
import EmployeeGoodsInOut from "./pages/Employees/EmployeeGoodsInOut.jsx";
import EmployeeStaffDetails from "./pages/Employees/EmployeeSubPages/EmployeeStaffDetails.jsx";
import EmployeeGVehicle from "./pages/Employees/EmployeeGVehicle.jsx"
import Schedule from "./pages/SubPages/Schedule.jsx";
import EmployeeCourseCertificate from "./pages/Employees/EmployeeSkillGrow/EmployeeCourseCertificate.jsx";
import EmployeeCourseCertificateDetails from "./pages/Employees/EmployeeSkillGrow/EmployeeCourseCertificateDetails.jsx";
import EmployeeProjectCertificate from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectCertificate.jsx";
import EmployeeRRCertificate from "./pages/Employees/EmployeeSkillGrow/EmployeeRRCertificate.jsx";
import EmployeeCourseRequestApproval from "./pages/Employees/EmployeeSkillGrow/EmployeeCourseRequestApproval.jsx";
import EmployeeCourseDetails from "./pages/Employees/EmployeeSkillGrow/EmployeeCourseDetails.jsx";
import EmployeeProjectRequestApproval from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectRequestApproval.jsx";
import EmployeeRequested from "./pages/Employees/EmployeeSkillGrow/EmployeeRequested.jsx";
import CreateEmployeeRequest from "./pages/Employees/EmployeeSkillGrow/CreateEmployeeRequest.jsx";
import EditEmployeeRequest from "./pages/Employees/EmployeeSkillGrow/EditEmployeeRequest.jsx";
import ViewEmployeeRequest from "./pages/Employees/EmployeeSkillGrow/ViewEmployeeRequest.jsx";
import EmployeeApproved from "./pages/Employees/EmployeeSkillGrow/EmployeeApproved.jsx";
import EmployeeProjectView from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectView.jsx";
import EmployeeRejected from "./pages/Employees/EmployeeSkillGrow/EmployeeRejected.jsx";
import EmployeeProjectTracking from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectTracking.jsx";
import EmployeeProjectRepository from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectRepository.jsx";
import EmployeeProjectRepositoryDetails from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectRepositoryDetails.jsx";
import EmployeeKnowledgeBase from "./pages/Employees/EmployeeSkillGrow/EmployeeKnowledgeBase.jsx";
import EmployeeProjectTaskView from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectTaskView.jsx";
import EmployeeProjectTaskCompleted from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectTaskCompleted.jsx";
import EmployeeProjectRejectDetails from "./pages/Employees/EmployeeSkillGrow/EmployeeProjectRejectDetails.jsx";
import FreeCoursesDetails from "./pages/Employees/EmployeeSkillGrow/FreeCoursesDetails.jsx";
import SupplierSetup from "./pages/Setup/Supplier/SupplierSetup.jsx";
import EmployeeDashboard from "./pages/Employees/EmployeeDashboard.jsx";
import EmployeeFieldSenseLead from "./pages/EmployeeFieldSenseLead.jsx";
import Course from "./pages/SkillGrow/Course.jsx";
import SkillGrowHeaderComponent from "./pages/SkillGrow/SkillGrowHeaderComponent.jsx";
import SkillGrowProjects from "./pages/SkillGrow/SkillGrowProjects.jsx";
import SkillGrowEmployeeProfile from "./pages/SkillGrow/SkillGrowEmployeeProfile.jsx";
import Instructor from "./pages/SkillGrow/Instructor.jsx";
import SkillGrowDashboard from "./pages/SkillGrow/SkillGrowDashboard.jsx";
import CreateCourse from "./pages/SkillGrow/CreateCourse.jsx";
import EditCourse from "./pages/SkillGrow/EditCourse.jsx";
import SkillGrowEmployeeProfileDetails from "./pages/SkillGrow/SkillGrowEmployeeProfileDetails.jsx";
import SkillGrowProjectDetails from "./pages/SkillGrow/SkillGrowProjectDetails.jsx";
import CourseDetails from "./pages/SkillGrow/CourseDetails.jsx";
import InstructorDetails from "./pages/SkillGrow/InstructorDetails.jsx";
import CreateCourseDetails from "./pages/SkillGrow/CreateCourseDetails.jsx";
import CourseDescription from "./pages/SkillGrow/CourseDescription.jsx";
import CourseCurriculum from "./pages/SkillGrow/CourseCurriculum.jsx";
import CreateFAQs from "./pages/SkillGrow/CreateFAQs.jsx";
import EditCourseDetails from "./pages/SkillGrow/EditCourseDetails.jsx";
import EditCourseDescription from "./pages/SkillGrow/EditCourseDescription.jsx";
import EditCurriculum from "./pages/SkillGrow/EditCurriculum.jsx";
import EditFAQs from "./pages/SkillGrow/EditFAQs.jsx";
import AddGoods from "./pages/SubPages/AddGoods.jsx";
import VisitorSetup from "./pages/Setup/VisitorSetup.jsx";
import EditOtherBills from "./pages/SubPages/details/EditOtherBills.jsx";
// new admin hrms

function App() {
  const themeColor = useSelector((state) => state.theme.color);
  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    themeColor
  );
  document.documentElement.style.setProperty("--calendar-Header", themeColor);
  const dispatch = useDispatch();
  const Get_Background = async () => {
    try {
      // const params = {
      //   user_id: user_id,
      // };
      const user_id = getItemInLocalStorage("VIBEUSERID");
      console.log(user_id);
      const data = await getVibeBackground(user_id);

      if (data.success) {
        console.log("sucess");

        console.log(data.data);
        const selectedImageSrc = API_URL + data.data.image;

        const selectedImageIndex = data.data.index;

        // Now, you can use selectedImageSrc and selectedImageIndex as needed
        console.log("Received response:", data);

        // For example, update state or perform any other actions
        // setSelectedImage(selectedImageSrc);
        // setSelectedIndex(selectedImageIndex);
        // console.log("Received selectedImageSrc:", selectedImageSrc);
        // console.log("Received selectedImageIndex:", selectedImageIndex);
        // console.log(selectedImage);
        dispatch(setBackground(selectedImageSrc));
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    Get_Background();
  }, [setBackground]);

  return (
    <>
      <Router>
        <Toaster />
        {/* <Navbar/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedAdminRoutes>
                <Dashboard />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                {" "}
                <User />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedAdminRoutes>
                {" "}
                <Attendance />
              </ProtectedAdminRoutes>
            }
          />
          {/* setup */}
          <Route
            path="/setup"
            element={
              <ProtectedAdminRoutes>
                <Setup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/setup/account"
            element={
              <ProtectedAdminRoutes>
                <Account />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/organisation"
            element={
              <ProtectedAdminRoutes>
                <Organisation />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/setup/account/company"
            element={
              <ProtectedAdminRoutes>
                <Company />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/country"
            element={
              <ProtectedAdminRoutes>
                <Country />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/region"
            element={
              <ProtectedAdminRoutes>
                <Region />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/zone"
            element={
              <ProtectedAdminRoutes>
                <Zone />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/site"
            element={
              <ProtectedAdminRoutes>
                <Site />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/standard-unit"
            element={
              <ProtectedAdminRoutes>
                <StandardUnit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/site/create-new-site"
            element={
              <ProtectedAdminRoutes>
                <AddSite />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/site/site-details/:id"
            element={
              <ProtectedAdminRoutes>
                <SiteDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/site/edit-site/:id"
            element={
              <ProtectedAdminRoutes>
                <EditSite />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/entity"
            element={
              <ProtectedAdminRoutes>
                <Entity />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/building"
            element={
              <ProtectedAdminRoutes>
                <Building />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/wing"
            element={
              <ProtectedAdminRoutes>
                <Wing />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/area"
            element={
              <ProtectedAdminRoutes>
                <Area />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/floor"
            element={
              <ProtectedAdminRoutes>
                <Floor />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/unit"
            element={
              <ProtectedAdminRoutes>
                <Unit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/account/room"
            element={
              <ProtectedAdminRoutes>
                <Room />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/User-role"
            element={
              <ProtectedRoute>
                <UserRole />
              </ProtectedRoute>
            }
          />
          <Route
            path="/setup/add-role/"
            element={
              <ProtectedAdminRoutes>
                <AddRole />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/users-setup"
            element={
              <ProtectedAdminRoutes>
                <UserSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/users-setup/add-new-user"
            element={
              <ProtectedAdminRoutes>
                <AddUser />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/users-details"
            element={
              <ProtectedAdminRoutes>
                <UserSetupDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/setup/asset-group"
            element={
              <ProtectedAdminRoutes>
                <AssetGroup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/routine-task-details/:assetId/:activityId"
            element={
              <ProtectedAdminRoutes>
                <AssetRoutineDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/asset/add-asset-ppm"
            element={
              <ProtectedAdminRoutes>
                <AddPPMActivity />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/ppm-task"
            element={
              <ProtectedAdminRoutes>
                <PPMTask />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/asset/ppm-activity-details/:id"
            element={
              <ProtectedAdminRoutes>
                <PPMChecklistDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/asset/asset-amc/:id"
            element={
              <ProtectedAdminRoutes>
                <AssetAmcDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="assets/asset-utilities"
            element={
              <ProtectedAdminRoutes>
                <AssetUtilities />
              </ProtectedAdminRoutes>
            }
          />

          {/* Service */}
          <Route
            path="/service/checklist/:serviceId/:activityId"
            element={
              <ProtectedAdminRoutes>
                <ServiceTaskDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* tickets -Admin*/}
          <Route path="/tickets" element={<Ticket />} />
          <Route
            path="/tickets/details/:id"
            element={
              <ProtectedRoute>
                <TicketDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets/create-ticket"
            element={
              <ProtectedAdminRoutes>
                <CreateTicket />
              </ProtectedAdminRoutes>
            }
          />
          {/* <Route path="/tickets/create-ticket" element={<CreateTicket /> } /> */}
          <Route
            path="/tickets/user-details/:id"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          {/* Edit Details */}
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <DetailsEdit />
              </ProtectedRoute>
            }
          />
          {/* tickets- user */}
          <Route
            path="/mytickets"
            element={
              <ProtectedRoute>
                <MyTickets />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/mytickets/userticket"
            element={
              <ProtectedRoute>
                {" "}
                <UserTicket />{" "}
              </ProtectedRoute>
            }
          />
          {/* business */}
          <Route
            path="/business"
            element={
              <ProtectedAdminRoutes>
                <Business />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/business/details/:id"
            element={
              <ProtectedAdminRoutes>
                <BusinessDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/business/edit-contact/:id"
            element={
              <ProtectedAdminRoutes>
                <EditContactBook />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/business/add-business"
            element={
              <ProtectedAdminRoutes>
                <AddBusiness />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/business/setup-category"
            element={
              <ProtectedAdminRoutes>
                <BusinessSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* materials */}

          {/* booking */}
          <Route path="/bookings" element={<Booking />} />
          <Route
            path="/bookings/new-facility-booking"
            element={<FacilityBooking />}
          />
          <Route
            path="/bookings/booking-details/:id"
            element={<BookingDetails />}
          />
          <Route
            path="/facility"
            element={
              <ProtectedAdminRoutes>
                <SetupBookingFacility />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/facility/setup-facility"
            element={
              <ProtectedAdminRoutes>
                <SetupFacility />
              </ProtectedAdminRoutes>
            }
          />
          <Route path="/seat-booking" element={<BookSeat />} />
          <Route path="/employees/booking" element={<EmployeeBooking />} />
          <Route
            path="/employees/facility-booking"
            element={
              <ProtectedRoute>
                <EmployeeFacilityBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/seat-booking"
            element={
              <ProtectedRoute>
                <EmployeeSeatBooking />
              </ProtectedRoute>
            }
          />
          {/* employee Communication */}
          {/* employee Communication */}
          <Route
            path="/employee/employee-communication"
            element={
              <ProtectedRoute>
                <EmployeeCommunication />
              </ProtectedRoute>
            }
          />
          {/* employee Communication create forum */}
          <Route
            path="/employee/employee-communication-create-forum"
            element={
              <ProtectedRoute>
                <CreateEmployeeForum />
              </ProtectedRoute>
            }
          />
          {/* employee Communication chatbot */}
          <Route
            path="/employee/employee-communication-chatbot"
            element={
              <ProtectedRoute>
                <EmployeeChatBot />
              </ProtectedRoute>
            }
          />
          {/* employee Communication group detail */}
          <Route
            path="/employee/communication-groupdetail"
            element={
              <ProtectedRoute>
                <EmployeeGroupJoinDetails />
              </ProtectedRoute>
            }
          />
          {/* communication */}

          {/* employee Communication group detail */}
          <Route
            path="/employee/communication-employee-profile"
            element={
              <ProtectedRoute>
                <EmployeeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/communication-edit-employee-profile"
            element={
              <ProtectedRoute>
                <EditEmployeeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/communication"
            element={
              <ProtectedAdminRoutes>
                <Communication />{" "}
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/communication/create-event"
            element={
              <ProtectedAdminRoutes>
                <CreateEvent />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/communication/event/event-details/:id"
            element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/communication/broadcast/create-broadcast"
            element={
              <ProtectedAdminRoutes>
                <CreateBroadcast />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/communication/broadcast/broadcast-details/:id"
            element={
              <ProtectedAdminRoutes>
                <BroadcastDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/*  */}
          <Route
            path="/admin/create-polls"
            element={
              <ProtectedAdminRoutes>
                <CreatePolls />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/create-forum"
            element={
              <ProtectedAdminRoutes>
                <CreateForum />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/communication-charbot"
            element={
              <ProtectedAdminRoutes>
                <ChatBot />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/communication-create-group"
            element={
              <ProtectedAdminRoutes>
                <CreateGroup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/communication-group-details"
            element={
              <ProtectedAdminRoutes>
                <GroupJoinDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* mail room */}
          <Route path="/mail-room" element={<MailRoom />} />
          <Route
            path="/mail-room/inbound/create-inbound"
            element={<CreateInbound />}
          />
          <Route
            path="/mail-room/inbound/inbound-details"
            element={<InBoundDetails />}
          />
          <Route
            path="/mail-room/outbound/create-outbound"
            element={<CreateOutbound />}
          />
          <Route
            path="/mail-room/outbound/outbound-details"
            element={<OutBoundDetails />}
          />
          {/* Asset */}
          <Route
            path="/assets"
            element={<Navigate to="/assets/all-assets" replace />}
          />
          <Route
            path="/assets/all-assets"
            element={
              <ProtectedAdminRoutes>
                <Asset />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/amc"
            element={
              <ProtectedAdminRoutes>
                <AMC />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/meter"
            element={
              <ProtectedAdminRoutes>
                <Meter />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/checklist"
            element={
              <ProtectedAdminRoutes>
                <Checklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/routine-task"
            element={
              <ProtectedAdminRoutes>
                <RoutineTask />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/ppm"
            element={
              <ProtectedAdminRoutes>
                <PPMActivity />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/stock-items"
            element={
              <ProtectedAdminRoutes>
                <Inventory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/stock-details/:id"
            element={
              <ProtectedAdminRoutes>
                <InventoryDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/add-asset"
            element={
              <ProtectedAdminRoutes>
                <AddAsset />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/asset-details/:id"
            element={
              <ProtectedAdminRoutes>
                <AssetDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/edit-asset/:id"
            element={
              <ProtectedAdminRoutes>
                <EditAsset />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/add-amc"
            element={
              <ProtectedAdminRoutes>
                <AddAMC />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/edit-amc/:id"
            element={
              <ProtectedAdminRoutes>
                <EditAssetAMC />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/associate-checklist/:id"
            element={
              <ProtectedAdminRoutes>
                <AssociateAssetChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/overview"
            element={
              <ProtectedAdminRoutes>
                <AssetWidgets />
              </ProtectedAdminRoutes>
            }
          />
          {/*services*/}
          <Route
            path="/services"
            element={<Navigate to="/services/soft-service" replace />}
          />
          <Route
            path="/services/soft-service"
            element={
              <ProtectedAdminRoutes>
                <ServicePage />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/tasks"
            element={
              <ProtectedAdminRoutes>
                <ServicesTask />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/checklist"
            element={
              <ProtectedAdminRoutes>
                <ServiceChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/add-service"
            element={
              <ProtectedAdminRoutes>
                <AddService />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/service-details/:id"
            element={
              <ProtectedAdminRoutes>
                {" "}
                <ServiceDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/edit-service/:id"
            element={
              <ProtectedAdminRoutes>
                {" "}
                <EditService />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/add-service-checklist"
            element={
              <ProtectedAdminRoutes>
                <AddServicesChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/edit-service-checklist/:id"
            element={
              <ProtectedAdminRoutes>
                <EditServiceChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/associate-checklist/:id"
            element={
              <ProtectedAdminRoutes>
                <AssociateServiceChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/edit-ppm/:id"
            element={
              <ProtectedAdminRoutes>
                <EditServicePPM />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/services/edit-routine/:id"
            element={
              <ProtectedAdminRoutes>
                <EditServiceRoutine />
              </ProtectedAdminRoutes>
            }
          />

          {/* Supplier */}
          <Route
            path="/suppliers"
            element={
              <ProtectedAdminRoutes>
                <Suppliers />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/suppliers/add-supplier"
            element={
              <ProtectedAdminRoutes>
                <AddSupplier />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/suppliers/edit-supplier/:id"
            element={
              <ProtectedAdminRoutes>
                <EditSuppliers />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/suppliers/supplier-details/:id"
            element={
              <ProtectedAdminRoutes>
                <SupplierDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/supplier-setup"
            element={
              <ProtectedAdminRoutes>
                <SupplierSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* Employee Attendance */}
          <Route
            path="/employee-attendance"
            element={
              <ProtectedRoute>
                <EmployeeAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee-salary"
            element={
              <ProtectedRoute>
                <Salary />
              </ProtectedRoute>
            }
          />
          {/* employee Business card */}
          <Route
            path="/employees/businesscard"
            element={
              <ProtectedRoute>
                <EmployeeBusinessCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/business-card"
            element={
              <ProtectedAdminRoutes>
                <BusinessCard />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/employees/transportation"
            element={
              <ProtectedRoute>
                <EmployeeTransportation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/book-outstation"
            element={
              <ProtectedRoute>
                <BookOutstation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/book-pickup"
            element={
              <ProtectedRoute>
                <BookPickup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/pickup-details/:id"
            element={
              <ProtectedRoute>
                <EmployeePickupDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/outstation-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeOutstationDetails />
              </ProtectedRoute>
            }
          />
          {/* Admin transport */}

          <Route
            path="/admin/transportation"
            element={
              <ProtectedAdminRoutes>
                <Transportation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-pickup"
            element={
              <ProtectedAdminRoutes>
                <AdminBookDailypickup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-outstation"
            element={
              <ProtectedAdminRoutes>
                <AdminBookOutstation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/pickup-details/:id"
            element={
              <ProtectedAdminRoutes>
                <AdminPickupDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/outstation-details/:id"
            element={
              <ProtectedAdminRoutes>
                <AdminOutstationDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* Admin parking */}
          <Route
            path="/admin/parking"
            element={
              <ProtectedAdminRoutes>
                <Parkings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-parking"
            element={
              <ProtectedAdminRoutes>
                <AddParking />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/parking-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ParkingDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/parking-setup"
            element={
              <ProtectedAdminRoutes>
                <ParkingSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-parking-config"
            element={
              <ProtectedAdminRoutes>
                <AddParkingConfig />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/edit-park-config/:id"
            element={
              <ProtectedAdminRoutes>
                <EditParkingConfiguration />
              </ProtectedAdminRoutes>
            }
          />

          {/* employee parking */}

          <Route
            path="/employees/parking"
            element={
              <ProtectedRoute>
                <EmployeeParking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/book-parking"
            element={
              <ProtectedRoute>
                <EmployeeBookParking />
              </ProtectedRoute>
            }
          />

          {/*parking setup */}
          <Route
            path="/admin/parking-setup"
            element={
              <ProtectedAdminRoutes>
                <ParkingSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/employees/pantry"
            element={
              <ProtectedRoute>
                <EmployeePantry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/pantry-details/:id"
            element={
              <ProtectedRoute>
                <EmployeePantryDetails />
              </ProtectedRoute>
            }
          />

          {/* admin pantry */}
          <Route
            path="/admin/pantry"
            element={
              <ProtectedAdminRoutes>
                <Pantry />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-pantry"
            element={
              <ProtectedAdminRoutes>
                <AddPantry />
              </ProtectedAdminRoutes>
            }
          />
          {/* employee doc appointment */}
          <Route
            path="/employee/doc-appointment"
            element={
              <ProtectedRoute>
                <EmployeeDoctorAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/book-doc-appointment"
            element={
              <ProtectedRoute>
                <EmployeeBookAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/doc-appointment-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeDocDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/fitness"
            element={
              <ProtectedRoute>
                <EmployeeFitness />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/book-fitness"
            element={
              <ProtectedRoute>
                <EmployeeBookFitness />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/fitness-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeFitnessDetails />
              </ProtectedRoute>
            }
          />
          {/* admin doc appointment */}
          <Route
            path="/admin/doctor-appointments"
            element={
              <ProtectedAdminRoutes>
                <DoctorAppointment />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-doc-appointment"
            element={
              <ProtectedAdminRoutes>
                <BookDocAppointment />
              </ProtectedAdminRoutes>
            }
          />
          {/* admin fitness */}
          <Route
            path="/admin/fitness"
            element={
              <ProtectedAdminRoutes>
                <Fitness />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-fitness"
            element={
              <ProtectedAdminRoutes>
                <BookFitness />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/book-fitness/:id"
            element={
              <ProtectedAdminRoutes>
                <FitnessDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* employee birthday */}
          <Route
            path="/employee/birthday"
            element={
              <ProtectedRoute>
                <EmployeeBirthday />
              </ProtectedRoute>
            }
          />
          {/* admin birthday */}
          <Route
            path="/birthday"
            element={
              <ProtectedRoute>
                <Birthday />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/insurance"
            element={
              <ProtectedRoute>
                <EmployeeInsurance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/insurance/add-policy"
            element={
              <ProtectedRoute>
                <EmployeeAddInsurance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-policy/policy-list"
            element={
              <ProtectedRoute>
                <EmployeePolicyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-policy/policy-details"
            element={
              <ProtectedRoute>
                <EmployeePolicyDetails />
              </ProtectedRoute>
            }
          />
          {/* admin Insurance */}
          <Route
            path="/admin/insurance"
            element={
              <ProtectedAdminRoutes>
                <Insurance />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/insurance/add-policy"
            element={
              <ProtectedAdminRoutes>
                <AddPolicy />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/insurance/add-policy/policy-list"
            element={
              <ProtectedAdminRoutes>
                <PolicyList />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/insurance/add-policy/policy-details"
            element={
              <ProtectedAdminRoutes>
                <PolicyDetails />
              </ProtectedAdminRoutes>
            }
          />

          {/* employee meeting */}
          {/* <Route
            path="/meetings"
            element={
              <ProtectedRoute>
                <EmployeeMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meetings/create-meeting"
            element={
              <ProtectedRoute>
                <EmployeeCreateMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meeting-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeMeetingDetails />
              </ProtectedRoute>
            }
          /> */}

          {/*  Meetings */}

          <Route
            path="/meetings"
            element={
              <ProtectedRoute>
                <Meetings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meetings/create-meeting"
            element={
              <ProtectedRoute>
                <CreateMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meetings/meeting-details/:id"
            element={
              <ProtectedRoute>
                <MeetingDetails />
              </ProtectedRoute>
            }
          />
          {/*admin project management */}
          <Route
            path="/project-management"
            element={
              <ProtectedRoute>
                <ProjectManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/project-management/create-project"
            element={
              <ProtectedAdminRoutes>
                <CreateProject />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/project-management/customBoard"
            element={
              <ProtectedAdminRoutes>
                <ProjectCustomBoard />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/project-management/project-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ProjectDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-project/:id"
            element={
              <ProtectedAdminRoutes>
                <EditProject />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/project-management/add-task/:id"
            element={
              <ProtectedAdminRoutes>
                <AddProjectTask />
              </ProtectedAdminRoutes>
            }
          />
          {/* INventory */}
          <Route
            path="/admin/add-stock"
            element={
              <ProtectedAdminRoutes>
                <AddInventory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-stock/:id"
            element={
              <ProtectedAdminRoutes>
                <EditStocks />
              </ProtectedAdminRoutes>
            }
          />
          {/* checklist */}
          <Route
            path="/admin/add-checklist"
            element={
              <ProtectedAdminRoutes>
                <AddChecklist />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-checklist/:id"
            element={
              <ProtectedAdminRoutes>
                <EditChecklist />
              </ProtectedAdminRoutes>
            }
          />

          {/* document */}
          <Route
            path="/documents"
            element={
              <ProtectedRoute>
                <DocumentMain />
              </ProtectedRoute>
            }
          />
          {/* Employee project */}
          <Route
            path="/employee/project-management"
            element={
              <ProtectedRoute>
                <EmployeeProjectManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/create-project"
            element={
              <ProtectedRoute>
                <EmployeeCreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/project-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/project-add-task/:id"
            element={
              <ProtectedRoute>
                <EmployeeProjectAddTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/edit-project/:id"
            element={
              <ProtectedRoute>
                <EmployeeEditProject />
              </ProtectedRoute>
            }
          />
          {/* Admin PO*/}

          <Route
            path="/admin/purchase"
            element={<Navigate to={"/admin/purchase/loi"} />}
          />

          <Route
            path="/admin/purchase/loi"
            element={
              <ProtectedAdminRoutes>
                <LOIPOTable />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/purchase/material-pr"
            element={
              <ProtectedAdminRoutes>
                <MaterialPR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/purchase/po"
            element={
              <ProtectedAdminRoutes>
                <PO />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/loi-proceed"
            element={
              <ProtectedAdminRoutes>
                <LOIProceed />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/PO"
            element={
              <ProtectedAdminRoutes>
                <PO />
              </ProtectedAdminRoutes>
            }
          />
          {/* Admin PO*/}
          <Route
            path="/admin/po-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <PoDetails />
              </ProtectedAdminRoutes>
            }
          />

          {/* Admin WO detail*/}
          <Route
            path="/admin/Wo"
            element={
              <ProtectedAdminRoutes>
                <Wo />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/wo-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <WoDetail />
              </ProtectedAdminRoutes>
            }
          />
          {/* Audit */}
          <Route
            path="/admin/audit"
            element={
              <ProtectedAdminRoutes>
                <Audit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/audit/schedule-audit"
            element={
              <ProtectedAdminRoutes>
                <AddScheduleAudit />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/audit/edit-schedule-audit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditOpsScheduleAudit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-audit-checklist"
            element={
              <ProtectedAdminRoutes>
                <AddAuditChecklist />
              </ProtectedAdminRoutes>
            }
          />
          {/*  */}
          <Route
            path="/admin/scheduled-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ScheduleAuditDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/audit/add-schedule-audit"
            element={
              <ProtectedAdminRoutes>
                <AddScheduleAudit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="edit-scheduled/:id"
            element={
              <ProtectedAdminRoutes>
                <EditOpsScheduleAudit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/checklist-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ChecklistDetails />
              </ProtectedAdminRoutes>
            }
          />

          {/*  */}

          {/*
           <Route
            path="/employee/rvehiclesdetails/:id"
            element={
              <ProtectedRoute>
               <RVehiclesDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/rvehicleshistdetails/:id"
            element={
              <ProtectedRoute>
               <RVehiclesHistoryDetails/>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/employee/staffdetails/:id"
            element={
              <ProtectedRoute>
               <StaffDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/materialdetails/:id"
            element={
              <ProtectedRoute>
               <MaterialDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/patrollingdetails/:id"
            element={
              <ProtectedRoute>
               <PatrollingDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/inwarddetails/:id"
            element={
              <ProtectedRoute>
               <InwardDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/outwarddetails/:id"
            element={
              <ProtectedRoute>
               <OutwardDetails/>
              </ProtectedRoute>
            }
          /> */}
          {/*  */}

          {/* grn */}
          <Route
            path="/admin/Grn"
            element={
              <ProtectedAdminRoutes>
                <GRN />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/grn-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <GrnDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-grn"
            element={
              <ProtectedAdminRoutes>
                <AddGrn />
              </ProtectedAdminRoutes>
            }
          />

          {/* admin passess */}
          <Route
            path="/admin/passes"
            element={<Navigate to="/admin/passes/visitors" replace />}
          />
          <Route
            path="/admin/passes/visitors/visitor-details/:id"
            element={
              <ProtectedAdminRoutes>
                <VisitorDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/visitors"
            element={
              <ProtectedAdminRoutes>
                <VisitorPage />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/visitors/edit-visitor/:id"
            element={
              <ProtectedAdminRoutes>
                <EditVisitor />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/registered-vehicles"
            element={
              <ProtectedAdminRoutes>
                <RVehicles />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/guest-vehicles"
            element={
              <ProtectedAdminRoutes>
                <GVehicles />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/staff"
            element={
              <ProtectedAdminRoutes>
                <Staff />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/materials"
            element={
              <ProtectedAdminRoutes>
                <Materials />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/goods-in-out"
            element={
              <ProtectedAdminRoutes>
                <GoodsInOut />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-new-visitor"
            element={
              <ProtectedAdminRoutes>
                <AddNewVisitor />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-rvehicles"
            element={
              <ProtectedAdminRoutes>
                <AddRVehicles />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-rvehicles/:id"
            element={
              <ProtectedAdminRoutes>
                <EditRVehicle />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/rvehicles-details/:id"
            element={
              <ProtectedAdminRoutes>
                <RVehiclesDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-gvehicles"
            element={
              <ProtectedAdminRoutes>
                <AddGVehicles />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-gvehicles/:id"
            element={
              <ProtectedAdminRoutes>
                <EditGVehicles />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/gvehicles-details/:id"
            element={
              <ProtectedAdminRoutes>
                <GVehiclesDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/add-staff"
            element={
              <ProtectedAdminRoutes>
                <AddStaff />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/staff-details/:id"
            element={
              <ProtectedAdminRoutes>
                <StaffDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-staff/:id"
            element={
              <ProtectedAdminRoutes>
                <EditStaff />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/material-details/:id"
            element={
              <ProtectedAdminRoutes>
                <MaterialDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/patrolling"
            element={
              <ProtectedAdminRoutes>
                <Patrolling />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-patrolling/:id"
            element={
              <ProtectedAdminRoutes>
                <EditPatrolling />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/patrolling-details/:id"
            element={
              <ProtectedAdminRoutes>
                <PatrollingDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/inwards-details/:id"
            element={
              <ProtectedAdminRoutes>
                <InwardPassDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/outward-details/:id"
            element={
              <ProtectedAdminRoutes>
                <OutwardPassDetails />
              </ProtectedAdminRoutes>
            }
          />

          {/* employee passes */}
          <Route path="/employee/passes" element={<Navigate to="/employee/passes/visitors" replace />}  />
          <Route
            path="/employee/passes/visitors"
            element={
              <ProtectedRoute>
                <EmployeeVisitor/>
              </ProtectedRoute>
            }
          />
          <Route
          path="/employee/add-new-visitor"
            element={
              <ProtectedRoute>
                <EmployeeAddVisitor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/addgvehicles"
            element={
              <ProtectedRoute>
                <EmployeeAddGVehicles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/gvehiclesdetails/:id"
            element={
              <ProtectedRoute>
                <EmployeeGVehiclesDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/addrvehicles"
            element={
              <ProtectedRoute>
                <EmployeeAddRVehicles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/addstaff"
            element={
              <ProtectedRoute>
                <EmployeeAddStaff />
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/visitors/visitor-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeVisitorDetails/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/visitors/edit-visitor/:id"
            element={
              <ProtectedRoute>
                <EmployeeVisitorEdit/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/passes/registered-vehicles"
            element={
              <ProtectedRoute>
                <EmployeeRVehicles/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/rvehicles-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeRVehiclesDetails/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/rvehicles-edit/:id"
            element={
              <ProtectedRoute>
                <EmployeeRVehiclesEdit/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/guest-vehicles"
            element={
              <ProtectedRoute>
                <EmployeeGVehicle/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/gvehicles-details/:id"
            element={
              <ProtectedRoute>
              <EmployeeGVehiclesDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/passes/staff"
            element={
              <ProtectedRoute>
              <EmployeeStaff/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/passes/staff-edit/:id"
            element={
              <ProtectedRoute>
              <EmployeeEditStaff/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/staff-details/:id"
            element={
              <ProtectedRoute>
              <EmployeeStaffDetails
              />
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/materials"
            element={
              <ProtectedRoute>
              <EmployeeMaterials/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/passes/material-details/:id"
            element={
              <ProtectedRoute>
              <EmployeeMaterialDetails/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/patrolling-details/:id"
            element={
              <ProtectedRoute>
              <EmployeePatrollingDetails/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/patrolling"
            element={
              <ProtectedRoute>
              <EmployeePatrolling/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/employee/passes/goods-in-out"
            element={
              <ProtectedRoute>
              <EmployeeGoodsInOut/>
              </ProtectedRoute>
            }
          />

          {/* GDN*/}
          <Route
            path="/admin/Gdn"
            element={
              <ProtectedAdminRoutes>
                <GDN />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/add-gdn/"
            element={
              <ProtectedAdminRoutes>
                <AddGdn />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/gnd-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <GdnViewDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* calendar */}
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calender />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar/employeeSchedule"
            element={
              // <ProtectedAdminRoutes>
                <Schedule />
              // </ProtectedAdminRoutes>
            }
          />

          {/* other bills */}
          <Route
            path="/admin/other-bills"
            element={
              <ProtectedAdminRoutes>
                <Bills />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/add-other-bills"
            element={
              <ProtectedAdminRoutes>
                <AddBills />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/-other-bills-details/:id"
            element={
              <ProtectedAdminRoutes>
                <OtherBillsDetails />
              </ProtectedAdminRoutes>
            }
          />
           <Route
            path="/admin/other-bills-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditOtherBills/>
              </ProtectedAdminRoutes>
            }
          />
          {/* add id to it */}
          <Route
            path="/admin/-other-bills-feed"
            element={
              <ProtectedAdminRoutes>
                <OtherFeedsBill />
              </ProtectedAdminRoutes>
            }
          />

          {/* Design Insights*/}
          <Route
            path="/admin/Insights"
            element={
              <ProtectedAdminRoutes>
                <Insights />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/Add-insights"
            element={
              <ProtectedAdminRoutes>
                <AddInsights />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/insights-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <InsightsDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-insight/:id"
            element={
              <ProtectedAdminRoutes>
                <EditInsights />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/insights/"
            element={
              <ProtectedAdminRoutes>
                <InsightSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* permit */}
          {/* admin permit */}
          <Route
            path="/admin/permit"
            element={
              <ProtectedAdminRoutes>
                <Permit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-new-permit"
            element={
              <ProtectedAdminRoutes>
                <AddNewPermit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-permit/:id"
            element={
              <ProtectedAdminRoutes>
                <PermitListEdit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/permit-details/:id"
            element={
              <ProtectedAdminRoutes>
                <PermitListDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/pending-details/:id"
            element={
              <ProtectedAdminRoutes>
                <PermitPendingApprovalDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/setup/permit-setup"
            element={
              <ProtectedAdminRoutes>
                <PermitSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* LOI */}

          <Route
            path="/admin/letterofindent"
            element={
              <ProtectedAdminRoutes>
                <LetterOfIndent />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/purchase/add-loi"
            element={
              <ProtectedAdminRoutes>
                <AddLoi />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-Loi-po/:id"
            element={
              <ProtectedAdminRoutes>
                <EditLoiPO />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/loi-po-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <LOIPoDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-Loi-wo/:id"
            element={
              <ProtectedAdminRoutes>
                <EditLoiWO />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/loi-wo-detail/:id"
            element={
              <ProtectedAdminRoutes>
                <LOIWoDetail />
              </ProtectedAdminRoutes>
            }
          />

          {/* CAR */}
          <Route
            path="/admin/car"
            element={
              <ProtectedAdminRoutes>
                <CAR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-CAR"
            element={
              <ProtectedAdminRoutes>
                <EditCAR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-CAR"
            element={
              <ProtectedAdminRoutes>
                <AddCAR />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/car-details/:id"
            element={
              <ProtectedAdminRoutes>
                <CARDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/car-tag-vendors"
            element={
              <ProtectedAdminRoutes>
                <CARTagVendor />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/car-feeds"
            element={
              <ProtectedAdminRoutes>
                <CARFeeds />
              </ProtectedAdminRoutes>
            }
          />
          {/* F&B */}
          <Route
            path="/admin/fb"
            element={
              <ProtectedAdminRoutes>
                <FoodsBeverage />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-fb"
            element={
              <ProtectedAdminRoutes>
                <AddFB />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fb-details/:id"
            element={
              <ProtectedAdminRoutes>
                <FBDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fb-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <FBEdit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fb-res-menu/"
            element={
              <ProtectedAdminRoutes>
                <AddResMenu />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-resmenu/:id"
            element={
              <ProtectedAdminRoutes>
                <EditResMenu />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fb-resmenudetails/:id"
            element={
              <ProtectedAdminRoutes>
                <ResMenuDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/res-order-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ResOrderDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* incident */}
          <Route
            path="/admin/incidents"
            element={
              <ProtectedAdminRoutes>
                <Incidents />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-incidents"
            element={
              <ProtectedAdminRoutes>
                <AddIncident />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-incidents"
            element={
              <ProtectedAdminRoutes>
                <EditIncident />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/incidents-details/:id"
            element={
              <ProtectedAdminRoutes>
                <IncidentsDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/setup-incidents"
            element={
              <ProtectedAdminRoutes>
                <IncidentSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* Meter Types */}
          <Route
            path="/admin/setup-meter-type"
            element={
              <ProtectedAdminRoutes>
                <MeterTypeSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* CheckList Group */}
          <Route
            path="/admin/checklist-group"
            element={
              <ProtectedAdminRoutes>
                <CheckListGroupSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* FmUSer */}
          <Route
            path="/admin/fm-user"
            element={
              <ProtectedAdminRoutes>
                <FmUserSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-fm-user"
            element={
              <ProtectedAdminRoutes>
                <AddFmUserSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/fm-user-details/:id"
            element={
              <ProtectedAdminRoutes>
                <EditFmUserSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* Occupant User */}
          <Route
            path="/admin/occupant-user-setup"
            element={
              <ProtectedAdminRoutes>
                <OccupantUserSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-occupant-user-setup"
            element={
              <ProtectedAdminRoutes>
                <AddOccupantUserSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/occupant-user-setup-details/:id"
            element={
              <ProtectedAdminRoutes>
                <EditOccupantUserSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* Invoice Approvals */}
          <Route
            path="/admin/invoice-approval-setup"
            element={
              <ProtectedAdminRoutes>
                <InvoiceApprovalSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-invoice-approval-setup"
            element={
              <ProtectedAdminRoutes>
                <AddInvoiceApprovalsSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/edit-invoice-approval-setup/:id"
            element={
              <ProtectedAdminRoutes>
                <EditInvoiceApprovalsSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/setup/ticket-setup"
            element={
              <ProtectedAdminRoutes>
                <TicketSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* task-management */}
          <Route
            path="/Task-management"
            element={
              <ProtectedRoute>
                <TaskManagement />
              </ProtectedRoute>
            }
          />
          {/* Email Rule */}
          <Route
            path="/admin/email-rule"
            element={
              <ProtectedAdminRoutes>
                <EmailRuleSetup />
              </ProtectedAdminRoutes>
            }
          />
          {/* Fm Groups */}
          <Route
            path="/admin/fm-groups-setup"
            element={
              <ProtectedAdminRoutes>
                <FmGroupsSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/fm-groups-setup-details/:id"
            element={
              <ProtectedAdminRoutes>
                <FmGroupSetupDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* SAC/HSN Setup */}
          <Route
            path="/admin/sac-hsn-setup"
            element={
              <ProtectedAdminRoutes>
                <SACHSNSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-sac-hsn-setup"
            element={
              <ProtectedAdminRoutes>
                <AddSACHSNSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/sac-hsn-setup-details/:id"
            element={
              <ProtectedAdminRoutes>
                <SACHSNSetupDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* Admin MaterialPR */}
          <Route
            path="/admin/material-pr"
            element={
              <ProtectedAdminRoutes>
                <MaterialPR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/purchase/add-material-pr"
            element={
              <ProtectedAdminRoutes>
                <AddMatertialPR />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/edit-materialpr/:id"
            element={
              <ProtectedAdminRoutes>
                <EditMatertialPR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/materialpr-details/:id"
            element={
              <ProtectedAdminRoutes>
                <MaterialPRDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* service PR */}

          <Route
            path="/admin/service-pr"
            element={
              <ProtectedAdminRoutes>
                <ServicePR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-service-pr"
            element={
              <ProtectedAdminRoutes>
                <AddServicePR />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-servicepr/:id"
            element={
              <ProtectedAdminRoutes>
                <EditServicePR />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/servicepr-details/:id"
            element={
              <ProtectedAdminRoutes>
                <ServicePRDetails />
              </ProtectedAdminRoutes>
            }
          />

          {/* Addresses */}
          <Route
            path="/admin/addresses-setup"
            element={
              <ProtectedAdminRoutes>
                <AddressesSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-addresses-setup"
            element={
              <ProtectedAdminRoutes>
                <AddAddressesSetup />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/edit-addresses-setup/:id"
            element={
              <ProtectedAdminRoutes>
                <EditAddressesSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* booking & Req */}
          <Route path="/employee/booking-request" element={<Navigate to="/employee/booking-request/hotel-request" replace />}  />
          <Route
            path="/employee/booking-request/hotel-request"
            element={
              <ProtectedRoute>
                {" "}
                <EmployeeHotelRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/booking-request"
            element={
              <ProtectedRoute>
                <EmployeeBookingRequest />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/add-hotel-request"
            element={
              <ProtectedRoute>
                <EmployeeAddHotelRequest />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/hotel-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeHotelRequestDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/booking-request/flight-ticket-request"
            element={
              <ProtectedRoute>
                {" "}
                <EmployeeFlightRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/flight-request"
            element={
              <ProtectedRoute>
                <EmployeeFlightRequest />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/add-flight-request"
            element={
              <ProtectedRoute>
                <EmployeeAddFlightRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/flight-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeFlightRequestDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/booking-request/cab-bus-request"
            element={
              <ProtectedRoute>
                {" "}
                <EmployeeCabRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-cab-request"
            element={
              <ProtectedRoute>
                <EmployeeAddCabRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/cab-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeCabRequestDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/booking-request/transportation-request"
            element={
              <ProtectedRoute>
                {" "}
                <EmployeeTransportationRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-transport-request"
            element={
              <ProtectedRoute>
                <EmployeeAddTransportRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/transport-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeTransportRequestDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/booking-request/traveling-allowance-request"
            element={
              <ProtectedRoute>
                <EmployeeTravellingAllowanceRequest />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-travelallowance-request"
            element={
              <ProtectedRoute>
                <EmployeeAddTravellingAllowanceRequest />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/travelling-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeTravelingAllowanceDetails />
              </ProtectedRoute>
            }
          />

          {/* admin booking & req */}
          <Route
            path="/admin/booking-request"
            element={
              <Navigate to="/admin/booking-request/hotel-request" replace />
            }
          />
          <Route
            path="/admin/booking-request/hotel-request"
            element={
              <ProtectedAdminRoutes>
                <HotelRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-hotel-request"
            element={
              <ProtectedAdminRoutes>
                <AddHotelRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hotel-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditHotelRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hotel-details/:id"
            element={
              <ProtectedAdminRoutes>
                <HotelRequestDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/booking-request/flight-ticket-request"
            element={
              <ProtectedAdminRoutes>
                <FlightRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-flight-request"
            element={
              <ProtectedAdminRoutes>
                <AddFlightRequest />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/flight-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditFlightRequest />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/flight-details/:id"
            element={
              <ProtectedAdminRoutes>
                <FlightRequestDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/booking-request/cab-bus-request"
            element={
              <ProtectedAdminRoutes>
                <CabRequest />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/add-cab-request"
            element={
              <ProtectedAdminRoutes>
                <AddCabRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/cab-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditCabRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/cab-details/:id"
            element={
              <ProtectedAdminRoutes>
                <CabRequestDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/booking-request/transportation-request"
            element={
              <ProtectedAdminRoutes>
                <TransportationRequest />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/add-transport-request"
            element={
              <ProtectedAdminRoutes>
                <AddTransportRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/transport-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditTransportRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/transport-details/:id"
            element={
              <ProtectedAdminRoutes>
                <TransportRequestDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/booking-request/traveling-allowance-request"
            element={
              <ProtectedAdminRoutes>
                <TravellingAllowanceRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-travelallowance-request"
            element={
              <ProtectedAdminRoutes>
                <AddTravellingAllowanceRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/travelling-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditTravellingAllowanceRequest />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/travelling-details/:id"
            element={
              <ProtectedAdminRoutes>
                <TravelingAllowanceDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* Master CheckList */}
          <Route
            path="/admin/master-checklist-setup"
            element={
              <ProtectedAdminRoutes>
                <MasterCheckListSetup />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-master-checklist-setup"
            element={
              <ProtectedAdminRoutes>
                <AddMasterCheckListSetup />
              </ProtectedAdminRoutes>
            }
          />

          {/* employee hrms */}
          <Route
            path="/hrms-onboarding"
            element={
              <ProtectedRoute>
                <Onboarding />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/add-onboarding"
            element={
              <ProtectedRoute>
                <AddOnBoarding />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/employee-onboarding-details/:id"
            element={
              <ProtectedRoute>
                <OnboardingDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/hrms-attendance-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeHRMSAttendanceDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/hrms-salary-slip-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeHRMSSalarySlipDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/hrms-salary-auto-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeAutoSalaryBreakupDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/hrms-attendance"
            element={
              <ProtectedRoute>
                <AttendanceHRMS />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/hrms-salary-slip"
            element={
              <ProtectedRoute>
                <EmployeeHRMSSalarySlip />
              </ProtectedRoute>
            }
          />
          <Route
            path="employee/auto-salary-breakup"
            element={
              <ProtectedRoute>
                <EmployeeAutoSalaryBreakup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/hrms"
            element={
              <ProtectedAdminRoutes>
                <AdminHRMS />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/dashboard"
            element={
              <ProtectedAdminRoutes>
                <HRMSDashboard />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/alerts"
            element={
              <ProtectedAdminRoutes>
                <HRMSAlert />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/leave-setting"
            element={
              <ProtectedAdminRoutes>
                <GeneralSettings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/general-settings"
            element={
              <ProtectedAdminRoutes>
                <GeneralSettings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/leave-categories"
            element={
              <ProtectedAdminRoutes>
                <LeaveCategories />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/templates"
            element={
              <ProtectedAdminRoutes>
                <Templates />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/templates-assignments"
            element={
              <ProtectedAdminRoutes>
                <TemplateAssignment />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/leave-categories"
            element={
              <ProtectedAdminRoutes>
                <AddLeaveCategory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/templates/leave-templates"
            element={
              <ProtectedAdminRoutes>
                <AddTemplates />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/leave-application"
            element={
              <ProtectedAdminRoutes>
                <LeaveApplication />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/leave-balance"
            element={
              <ProtectedAdminRoutes>
                <LeaveBalance />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/rollover"
            element={
              <ProtectedAdminRoutes>
                <Rollover />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/leave-categories/:id"
            element={
              <ProtectedAdminRoutes>
                <EditLeaveCategory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/edit-templates/:id"
            element={
              <ProtectedAdminRoutes>
                <EditTemplates />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/hrms-leavebalance-details/:id"
            element={
              <ProtectedAdminRoutes>
                <LeaveBalanceDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/organization-setting"
            element={
              <ProtectedAdminRoutes>
                <BasicInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/company-profile/basic-information"
            element={
              <ProtectedAdminRoutes>
                <BasicInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/company-profile/address-information"
            element={
              <ProtectedAdminRoutes>
                <AddressInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/geographical-settings"
            element={
              <ProtectedAdminRoutes>
                <GeographicalSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/locations"
            element={
              <ProtectedAdminRoutes>
                <Location />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/department"
            element={
              <ProtectedAdminRoutes>
                <Department />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/company-holidays"
            element={
              <ProtectedAdminRoutes>
                <Holiday />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/bank-accounts"
            element={
              <ProtectedAdminRoutes>
                <BankAccount />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/calendar-milestones-events"
            element={
              <ProtectedAdminRoutes>
                <CalendarEvent />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-fields/personal-details"
            element={
              <ProtectedAdminRoutes>
                <PersonalInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-fields/employment-details"
            element={
              <ProtectedAdminRoutes>
                <EmployeeAddress />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-fields/documents"
            element={
              <ProtectedAdminRoutes>
                <Document />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/user-setting"
            element={
              <ProtectedAdminRoutes>
                <ManageAdmin />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/manage-admin"
            element={
              <ProtectedAdminRoutes>
                <ManageAdmin />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/third-party"
            element={
              <ProtectedAdminRoutes>
                <ThirdParty />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-fields/permission"
            element={
              <ProtectedAdminRoutes>
                <PermissionsField />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-fields/news-feed-permission"
            element={
              <ProtectedAdminRoutes>
                <NewsFeedPermission />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/document-letter"
            element={
              <ProtectedAdminRoutes>
                <CompanyDocuments />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/company-documents"
            element={
              <ProtectedAdminRoutes>
                <CompanyDocuments />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/document/letter-template"
            element={
              <ProtectedAdminRoutes>
                <LetterTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-letter-template"
            element={
              <ProtectedAdminRoutes>
                <AddLetterTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/document/old-letter-template"
            element={
              <ProtectedAdminRoutes>
                <OldLetterTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/workflow-setting"
            element={
              <ProtectedAdminRoutes>
                <AddOnboardingSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/onboarding-setting"
            element={
              <ProtectedAdminRoutes>
                <AddOnboardingSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/workflow-trigger"
            element={
              <ProtectedAdminRoutes>
                <WorkflowTrigger />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/emailid-mapping"
            element={
              <ProtectedAdminRoutes>
                <EmailIdMapping />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/communication-template"
            element={
              <ProtectedAdminRoutes>
                <CommunicationTemplate />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/investment-setting"
            element={
              <ProtectedAdminRoutes>
                <InvestmentSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/reports"
            element={
              <ProtectedAdminRoutes>
                <ImportExport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/report-generation"
            element={
              <ProtectedAdminRoutes>
                <ReportGeneration />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/audit-reports"
            element={
              <ProtectedAdminRoutes>
                <AuditReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/Payroll-Reports"
            element={
              <ProtectedAdminRoutes>
                <PayrollReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/Compliance-reports"
            element={
              <ProtectedAdminRoutes>
                <ComplianceReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/income-tax-report"
            element={
              <ProtectedAdminRoutes>
                <IncomeTaxReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/bank-report"
            element={
              <ProtectedAdminRoutes>
                <BankReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/leave-report"
            element={
              <ProtectedAdminRoutes>
                <LeaveReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/attendance-report"
            element={
              <ProtectedAdminRoutes>
                <AttendanceReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/expense-report"
            element={
              <ProtectedAdminRoutes>
                <ExpenseReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/form16"
            element={
              <ProtectedAdminRoutes>
                <Form16 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/custom-report"
            element={
              <ProtectedAdminRoutes>
                <CustomReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hr-report"
            element={
              <ProtectedAdminRoutes>
                <HRReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/investment-report"
            element={
              <ProtectedAdminRoutes>
                <InvestmentReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/OnBoarding"
            element={
              <ProtectedAdminRoutes>
                <OnBoarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/OffBoarding"
            element={
              <ProtectedAdminRoutes>
                <OffBoarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/add-challan"
            element={
              <ProtectedAdminRoutes>
                <AddChallan />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/view/form16/:id"
            element={
              <ProtectedAdminRoutes>
                <ViewForm16 />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/roaster"
            element={
              <ProtectedAdminRoutes>
                <Roster />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/roaster-shift"
            element={
              <ProtectedAdminRoutes>
                <RosterShift />
              </ProtectedAdminRoutes>
            }
          />
          {/*  */}
          <Route
            path="/admin/hrms/run-payroll"
            element={
              <ProtectedAdminRoutes>
                <RunPayroll />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/pay-slip"
            element={
              <ProtectedAdminRoutes>
                <Payslip />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/payroll/form-16"
            element={
              <ProtectedAdminRoutes>
                <PayrollForm16 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/loan-app"
            element={
              <ProtectedAdminRoutes>
                <LoanApplication />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/payroll-setting"
            element={
              <ProtectedAdminRoutes>
                <PayrollSettings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/location-master"
            element={
              <ProtectedAdminRoutes>
                <LocationMaster />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fixed-allowance"
            element={
              <ProtectedAdminRoutes>
                <FixedAllowance />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/fixed-deduction"
            element={
              <ProtectedAdminRoutes>
                <FixedDeduction />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/variable-allowance"
            element={
              <ProtectedAdminRoutes>
                <VariableAllowance />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/variable-deduction"
            element={
              <ProtectedAdminRoutes>
                <VariableDeduction />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/other-benefit"
            element={
              <ProtectedAdminRoutes>
                <OtherBenefit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/loans"
            element={
              <ProtectedAdminRoutes>
                <Loans />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-loan"
            element={
              <ProtectedAdminRoutes>
                <AddLoan />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/tax-setting"
            element={
              <ProtectedAdminRoutes>
                <TaxSettings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/payslip-setting"
            element={
              <ProtectedAdminRoutes>
                <PayslipSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/CTC-Template"
            element={
              <ProtectedAdminRoutes>
                <CTCTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/NPS"
            element={
              <ProtectedAdminRoutes>
                <NPS />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/Gratuity"
            element={
              <ProtectedAdminRoutes>
                <Gratuity />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/Leave-Recovery"
            element={
              <ProtectedAdminRoutes>
                <LeaveRecovery />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/Notice-Recovery"
            element={
              <ProtectedAdminRoutes>
                <NoticeRecovery />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/Minimum-Wage"
            element={
              <ProtectedAdminRoutes>
                <MinimumWage />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="admin/PF"
            element={
              <ProtectedAdminRoutes>
                <PF />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="admin/daily-wage"
            element={
              <ProtectedAdminRoutes>
                <DailyWage />
              </ProtectedAdminRoutes>
            }
          />

          {/*  */}
          <Route
            path="/admin/hrms/attendance-records"
            element={
              <ProtectedAdminRoutes>
                <AttendanceRecords />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Attendance-Process"
            element={
              <ProtectedAdminRoutes>
                <AttendanceProcess />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Regularization-Requests"
            element={
              <ProtectedAdminRoutes>
                <RegularizationRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Attendance-Audit"
            element={
              <ProtectedAdminRoutes>
                <AttendanceAudit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Device-Request"
            element={
              <ProtectedAdminRoutes>
                <DeviceRegistration />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Attendance-Validation"
            element={
              <ProtectedAdminRoutes>
                <AttendanceValidation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/Attendance-Log"
            element={
              <ProtectedAdminRoutes>
                <AttendanceLogs />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/setting"
            element={
              <ProtectedAdminRoutes>
                <AttendanceGeneralSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/attendance/Regularization-Reason"
            element={
              <ProtectedAdminRoutes>
                <RegularizationReason />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/att/template"
            element={
              <ProtectedAdminRoutes>
                <AttendanceTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/att/template-assign"
            element={
              <ProtectedAdminRoutes>
                <AttendanceTemplateAssign />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/att/template/add"
            element={
              <ProtectedAdminRoutes>
                <AttAddTemplate />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/employee-directory"
            element={
              <ProtectedAdminRoutes>
                <EmployeeDirectory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee"
            element={
              <ProtectedAdminRoutes>
                <AddEmployee />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/investment"
            element={
              <ProtectedAdminRoutes>
                <InvestmentApproval />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/calendar"
            element={
              <ProtectedAdminRoutes>
                <Calender />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/generated-letter"
            element={
              <ProtectedAdminRoutes>
                <GenerationLetter />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/organization-tree-setting"
            element={
              <ProtectedAdminRoutes>
                <OrganizationTree />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/employee-transaction"
            element={
              <ProtectedAdminRoutes>
                <DataChangeRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/ctc-basket"
            element={
              <ProtectedAdminRoutes>
                <CTCBasket />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/onboarding"
            element={
              <ProtectedAdminRoutes>
                <EmpOnboarding />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/hrms/separation-request"
            element={
              <ProtectedAdminRoutes>
                <SeparationApplication />
              </ProtectedAdminRoutes>
            }
          />

          {/* paused */}
          {/* admin HRMS */}
          <Route
            path="admin/hrms/employee-onboarding"
            element={
              <ProtectedAdminRoutes>
                <EmployeeOnboarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee-onboarding"
            element={
              <ProtectedAdminRoutes>
                <AddEmployeeOnBoarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-onboarding-details/:id"
            element={
              <ProtectedAdminRoutes>
                <EmployeeOnboardingDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-onboarding-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditEmployeeOnBoarding />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/employee/hrms-leaves-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeLeavesDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/leaves"
            element={
              <ProtectedRoute>
                <EmployeeHRMSLeaves />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/admin/hrms"
            element={
              <ProtectedAdminRoutes>
                <HRMS/>
              </ProtectedAdminRoutes>
            }
          /> */}

          <Route
            path="/admin/hrms-attendance-details/:id"
            element={
              <ProtectedAdminRoutes>
                <HRMSAttendanceDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms-salary-slip-details/:id"
            element={
              <ProtectedAdminRoutes>
                <HRMSSalarySlipDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms-salary-auto-details/:id"
            element={
              <ProtectedAdminRoutes>
                <HRMSSalaryAutoDetails />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms-attendance"
            element={
              <ProtectedAdminRoutes>
                <HRMSAttendance />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms-salary-slip"
            element={
              <ProtectedAdminRoutes>
                <HRMSSalarySlip />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/auto-salary-breakup"
            element={
              <ProtectedAdminRoutes>
                <HRMSAutoSalaryBreakupCreation />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="admin/leaves"
            element={
              <ProtectedAdminRoutes>
                <HRMSLeaves />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms-leaves-details/:id"
            element={
              <ProtectedAdminRoutes>
                <HRMSLeavesDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/pending-contract-renewal"
            element={
              <ProtectedAdminRoutes>
                <PendingContract />
              </ProtectedAdminRoutes>
            }
          />

          {/*field sense */}
          <Route
            path="/admin/field-sense-meeting"
            element={
              <ProtectedAdminRoutes>
                <FieldSenseMeeting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/create-field-sense"
            element={
              <ProtectedAdminRoutes>
                <CreateFieldSenseMeeting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/field-sense-details/:id"
            element={
              <ProtectedAdminRoutes>
                <FieldSenseMeetingDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/create-field-sence-leads"
            element={
              <ProtectedRoute>
                <CreateFieldSenseLeads />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/field-sense-leads"
            element={
              <ProtectedAdminRoutes>
                <FieldSenseLeads />
              </ProtectedAdminRoutes>
            }
          />
          {/* employee field sense */}
          <Route
            path="/employee/field-sense-meeting"
            element={
              <ProtectedRoute>
                <EmployeeFieldSenseMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/field-sense-create-meeting"
            element={
              <ProtectedRoute>
                <CreateEmployeeFieldSenseMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/field-sense-leads"
            element={
              <ProtectedRoute>
                <EmployeeFieldSenseLead />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/field-sence-meeting-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeFieldSenseMeetingDetails />
              </ProtectedRoute>
            }
          />
          {/*Bill Pay */}
          <Route
            path="/admin/bill-pay"
            element={
              <ProtectedAdminRoutes>
                <BillPay />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/bill-pay-details"
            element={
              <ProtectedAdminRoutes>
                <BillPayDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/* Employee Bill Pay */}
          <Route
            path="/employee/bill-pay"
            element={
              <ProtectedRoute>
                <EmployeeBillPay />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/bill-pay-detail"
            element={
              <ProtectedRoute>
                <EmployeeBillPayDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/communication-access-control"
            element={
              <ProtectedAdminRoutes>
                <CommunicationAccessControl />
              </ProtectedAdminRoutes>
            }
          />

          {/*personal financial */}
          <Route
            path="/personal-finance"
            element={
              <ProtectedRoute>
                <PersonalFinancialLogin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/personal-financial-setup"
            element={
              <ProtectedRoute>
                <PersonalFinancialSetup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-financial-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <PersonalFinancialEdit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/emergency-fund"
            element={
              <ProtectedRoute>
                <EmergencyFund />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-emergency-fund"
            element={
              <ProtectedRoute>
                <AddEmergencyFund />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-investment"
            element={
              <ProtectedRoute>
                <Investment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-investment"
            element={
              <ProtectedRoute>
                <AddInvestment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/goal-plan"
            element={
              <ProtectedRoute>
                <GoalPlanning />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-goal-plan"
            element={
              <ProtectedRoute>
                <AddGoalPlanning />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-insurance"
            element={
              <ProtectedRoute>
                <PersonalInsurance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-insurance"
            element={
              <ProtectedRoute>
                <AddPersonalInsurance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-insurance-details/:id"
            element={
              <ProtectedRoute>
                <InsuranceDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-financial-details/:id"
            element={
              <ProtectedRoute>
                <IndividualDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emergency-details/:id"
            element={
              <ProtectedRoute>
                <EmergencyFundDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investment-details/:id"
            element={
              <ProtectedRoute>
                <InvestmentDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/goal-details/:id"
            element={
              <ProtectedRoute>
                <GoalDetails />
              </ProtectedRoute>
            }
          />

          {/*Advance Salary Module */}
          <Route
            path="/admin/advance-salary-request"
            element={
              <ProtectedAdminRoutes>
                <AdvanceSalaryRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/bank-account-creation"
            element={
              <ProtectedAdminRoutes>
                <BankAccountCreation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/create-bank-account"
            element={
              <ProtectedAdminRoutes>
                <CreateBankAccount />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/bank-account-details/:id"
            element={
              <ProtectedAdminRoutes>
                <BankAccountDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/*Employee Advance Salary Module */}
          <Route
            path="/employee/advance-salary"
            element={
              <ProtectedRoute>
                <EmployeeAdvanceSalaryRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/bank-account-creation"
            element={
              <ProtectedRoute>
                <EmployeeBankAccountCreation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/create-bank-account"
            element={
              <ProtectedRoute>
                <EmployeeCreateBankAccount />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee/bank-account-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeBankAccountDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/integration"
            element={
              <ProtectedRoute>
                <Integration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gmail"
            element={
              <ProtectedRoute>
                <Gmail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <DashboardBeta />
              </ProtectedRoute>
            }
          />

          {/* newest admin hrms */}
          <Route
            path="/admin/reports/"
            element={<Navigate to="/admin/reports/import-export" />}
            replace
          />

          <Route
            path="/admin/reports/import-export"
            element={
              <ProtectedAdminRoutes>
                <ImportExport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/report-generation"
            element={
              <ProtectedAdminRoutes>
                <ReportGeneration />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/audit-reports"
            element={
              <ProtectedAdminRoutes>
                <AuditReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/Payroll-Reports"
            element={
              <ProtectedAdminRoutes>
                <PayrollReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/Compliance-reports"
            element={
              <ProtectedAdminRoutes>
                <ComplianceReports />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/income-tax-report"
            element={
              <ProtectedAdminRoutes>
                <IncomeTaxReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/bank-report"
            element={
              <ProtectedAdminRoutes>
                <BankReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/leave-report"
            element={
              <ProtectedAdminRoutes>
                <LeaveReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/attendance-report"
            element={
              <ProtectedAdminRoutes>
                <AttendanceReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/expense-report"
            element={
              <ProtectedAdminRoutes>
                <ExpenseReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/form16"
            element={
              <ProtectedAdminRoutes>
                <Form16 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/custom-report"
            element={
              <ProtectedAdminRoutes>
                <CustomReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/hr-report"
            element={
              <ProtectedAdminRoutes>
                <HRReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/investment-report"
            element={
              <ProtectedAdminRoutes>
                <InvestmentReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/OnBoarding"
            element={
              <ProtectedAdminRoutes>
                <OnBoarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/OffBoarding"
            element={
              <ProtectedAdminRoutes>
                <OffBoarding />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/ctc/"
            element={<Navigate to="/admin/hrms/ctc/CTC-Template" />}
            replace
          />

          <Route
            path="/admin/hrms/ctc/CTC-Template"
            element={
              <ProtectedAdminRoutes>
                <CTCTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/basics"
            element={
              <ProtectedAdminRoutes>
                <AddEmployee />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/organization-tree-setting"
            element={
              <ProtectedAdminRoutes>
                <OrganisationView1 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/"
            element={<Navigate to="/admin/add-employee/onboarding" />}
            replace
          />

          <Route
            path="/admin/add-employee/onboarding"
            element={
              <ProtectedAdminRoutes>
                <EmpOnboarding />
              </ProtectedAdminRoutes>
            }
          />
          {/* New HRMS changes */}
          <Route
            path="/admin/employee-fields/other-details"
            element={
              <ProtectedAdminRoutes>
                <OtherDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/generation-letter"
            element={
              <ProtectedAdminRoutes>
                <AddGenerationLetter />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/separation/"
            element={<Navigate to="/hrms/separation/separation-request" />}
            replace
          />

          <Route
            path="/hrms/separation/separation-request"
            element={
              <ProtectedAdminRoutes>
                <SeparationApplication />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/organisation-view2"
            element={
              <ProtectedAdminRoutes>
                <OrganisationView2 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/organisation-view3"
            element={
              <ProtectedAdminRoutes>
                <OrganisationView3 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/organisation-view1"
            element={
              <ProtectedAdminRoutes>
                <OrganisationView1 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/company-profile/basic-link"
            element={
              <ProtectedAdminRoutes>
                <BasicLink />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-bank-account"
            element={
              <ProtectedAdminRoutes>
                <AddBankAccount />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee-directory"
            element={
              <ProtectedAdminRoutes>
                <AddEmployeeDirectory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/leave-link"
            element={
              <ProtectedAdminRoutes>
                <LeaveLink />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-communication-templates/:id"
            element={
              <ProtectedAdminRoutes>
                <EditCommunicationTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-employee-directory"
            element={
              <ProtectedAdminRoutes>
                <SectionsPersonal />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/employee-directory-Personal"
            element={
              <ProtectedAdminRoutes>
                <SectionsPersonal />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Employment"
            element={
              <ProtectedAdminRoutes>
                <SectionsEmployment />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Statutory"
            element={
              <ProtectedAdminRoutes>
                <SectionStatutory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory/"
            element={<Navigate to="/admin/employee-directory/Salary" />}
            replace
          />

          <Route
            path="/admin/employee-directory/Salary"
            element={
              <ProtectedAdminRoutes>
                <SectionSalary />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory/add-new-ctc"
            element={
              <ProtectedAdminRoutes>
                <AddNewCTC />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Tax"
            element={
              <ProtectedAdminRoutes>
                <SectionTax />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Documents"
            element={
              <ProtectedAdminRoutes>
                <SectionDoc />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-LoansAdvances"
            element={
              <ProtectedAdminRoutes>
                <SectionLoans />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Transaction"
            element={
              <ProtectedAdminRoutes>
                <SectionTransaction />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-directory-Change-logs"
            element={
              <ProtectedAdminRoutes>
                <SectionLog />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path="/admin/hrms/alerts/"
            element={<Navigate to="/admin/hrms/alerts/pending-request" />}
            replace
          />
          <Route
            path="/admin/hrms/alerts/pending-request"
            element={
              <ProtectedAdminRoutes>
                <PendingRequest />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/alerts/Setup-Issues"
            element={
              <ProtectedAdminRoutes>
                <SetupIssues />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/alerts/Process-Alerts"
            element={
              <ProtectedAdminRoutes>
                <ProcessAlert />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/alerts/tasks"
            element={
              <ProtectedAdminRoutes>
                <AlertTasks />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/tax-edit"
            element={
              <ProtectedAdminRoutes>
                <Deductions80C />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/Other-Exemptions"
            element={
              <ProtectedAdminRoutes>
                <OtherExemptions />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/Rent-Information"
            element={
              <ProtectedAdminRoutes>
                <RentInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/Prequisites Information"
            element={
              <ProtectedAdminRoutes>
                <PrerequisiteInformation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/Other-Income-Info"
            element={
              <ProtectedAdminRoutes>
                <OtherIncomeInfo />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/Housing-Loan-Info"
            element={
              <ProtectedAdminRoutes>
                <HousingLoanInfo />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/view-records"
            element={
              <ProtectedAdminRoutes>
                <ViewRecords />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/Employment"
            element={
              <ProtectedAdminRoutes>
                <Employment />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/Statutory"
            element={
              <ProtectedAdminRoutes>
                <Statutory />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/Salary"
            element={
              <ProtectedAdminRoutes>
                <OnboardingSalary />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/Policies"
            element={
              <ProtectedAdminRoutes>
                <Policies />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-employee/Invite"
            element={
              <ProtectedAdminRoutes>
                <Invite />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/hrms/separation/separate-application/resignation"
            element={
              <ProtectedAdminRoutes>
                <Resignation />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-attendance-process/:id"
            element={
              <ProtectedAdminRoutes>
                <EditAttendanceProcess />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/loan-app/add-loan"
            element={
              <ProtectedAdminRoutes>
                <LoanAppAdd />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/ctc/ctc-template/General-Settings"
            element={
              <ProtectedAdminRoutes>
                <CTCGeneralSetting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/ctc/ctc-template/Component"
            element={
              <ProtectedAdminRoutes>
                <ComponentCTCTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/hrms/ctc/ctc-template/Restrictions"
            element={
              <ProtectedAdminRoutes>
                <Restrictions />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/details-payslip/:id"
            element={
              <ProtectedAdminRoutes>
                <PayslipDetailsPage />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/details1-payslip"
            element={
              <ProtectedAdminRoutes>
                <PayslipDetails1 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/details2-payslip"
            element={
              <ProtectedAdminRoutes>
                <PayslipDetails2 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/details3-payslip"
            element={
              <ProtectedAdminRoutes>
                <PayslipDetails3 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/details4-payslip"
            element={
              <ProtectedAdminRoutes>
                <PayslipDetails4 />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/reports/add-custom-report"
            element={
              <ProtectedAdminRoutes>
                <AddCustomReport />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/add-communication-templates"
            element={
              <ProtectedAdminRoutes>
                <AddCommunicationTemplate />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-letter-templates"
            element={
              <ProtectedAdminRoutes>
                <EditLetterTemplate />
              </ProtectedAdminRoutes>
            }
          />

          {/* New HRMS changes */}

          {/* newest admin hrms */}

          {/* skill grow employee*/}
          <Route path="/employee/certificate" element={<Navigate to="/employee/certificate/course" replace />}  />
          <Route
            path="/employee/certificate/course"
            element={
              <ProtectedRoute>
                <EmployeeCourseCertificate/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/coursedetails"
            element={
              <ProtectedRoute>
                <EmployeeCourseCertificateDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project"
            element={
              <ProtectedRoute>
                <EmployeeProjectCertificate/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/rr-certificate"
            element={
              <ProtectedRoute>
                <EmployeeRRCertificate/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/course-request-approval"
            element={
              <ProtectedRoute>
                <EmployeeCourseRequestApproval/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/course-details"
            element={
              <ProtectedRoute>
                <EmployeeCourseDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval"
            element={
              <ProtectedRoute>
                <EmployeeProjectRequestApproval/>
              </ProtectedRoute>
            }
          />
          <Route path="/employee/certificate/project-request-approval" element={<Navigate to="/employee/certificate/project-request-approval/request" replace />}  />
          <Route
            path="/employee/certificate/project-request-approval/request"
            element={
              <ProtectedRoute>
                <EmployeeRequested/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval/create-request"
            element={
              <ProtectedRoute>
                <CreateEmployeeRequest/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval/edit-request/:id"
            element={
              <ProtectedRoute>
                <EditEmployeeRequest/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval/view-request/:id"
            element={
              <ProtectedRoute>
                <ViewEmployeeRequest/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval/approved"
            element={
              <ProtectedRoute>
                <EmployeeApproved/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-view"
            element={
              <ProtectedRoute>
                <EmployeeProjectView/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-request-approval/rejected"
            element={
              <ProtectedRoute>
                <EmployeeRejected/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-tracking"
            element={
              <ProtectedRoute>
                <EmployeeProjectTracking/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-repository"
            element={
              <ProtectedRoute>
                <EmployeeProjectRepository/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-repository-details"
            element={
              <ProtectedRoute>
                <EmployeeProjectRepositoryDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/knowledge-base"
            element={
              <ProtectedRoute>
                <EmployeeKnowledgeBase/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-task-view"
            element={
              <ProtectedRoute>
                <EmployeeProjectTaskView/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-task-completed"
            element={
              <ProtectedRoute>
                <EmployeeProjectTaskCompleted/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/project-reject-details"
            element={
              <ProtectedRoute>
                <EmployeeProjectRejectDetails/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/certificate/course-details-free"
            element={
              <ProtectedRoute>
                <FreeCoursesDetails/>
              </ProtectedRoute>
            }
          />
          {/* skill grow employee*/}
          <Route
            path="/employee/dashboard"
            element={
              <ProtectedRoute>
                <EmployeeDashboard/>
              </ProtectedRoute>
            }
          />
          {/* Admin Skill Grow */}
          <Route path="/admin/skill-grow" element={<Navigate to="/admin/skill-grow/course" replace />}  />
          <Route
            path="/admin/skill-grow/header"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowHeaderComponent/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/course"
            element={
              <ProtectedAdminRoutes>
                <Course />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/projects"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowProjects />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/employee-profile"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowEmployeeProfile/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/instructor"
            element={
              <ProtectedAdminRoutes>
                <Instructor/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/dashboard"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowDashboard/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/create-course"
            element={
              <ProtectedAdminRoutes>
                <CreateCourse/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/edit-course"
            element={
              <ProtectedAdminRoutes>
                <EditCourse/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/employee-profile-details"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowEmployeeProfileDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/project-details"
            element={
              <ProtectedAdminRoutes>
                <SkillGrowProjectDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/course-details"
            element={
              <ProtectedAdminRoutes>
                <CourseDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/instructor-details"
            element={
              <ProtectedAdminRoutes>
                <InstructorDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/create-course-details"
            element={
              <ProtectedAdminRoutes>
                <CreateCourseDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/course-description"
            element={
              <ProtectedAdminRoutes>
                <CourseDescription/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/course-curriculum"
            element={
              <ProtectedAdminRoutes>
                <CourseCurriculum/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/create-faqs"
            element={
              <ProtectedAdminRoutes>
                <CreateFAQs/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/edit-course-details"
            element={
              <ProtectedAdminRoutes>
                <EditCourseDetails/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/edit-course-description"
            element={
              <ProtectedAdminRoutes>
                <EditCourseDescription/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/edit-curriculum"
            element={
              <ProtectedAdminRoutes>
                <EditCurriculum/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/skill-grow/edit-faqs"
            element={
              <ProtectedAdminRoutes>
                <EditFAQs/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/passes/add-goods-in-out"
            element={
              <ProtectedAdminRoutes>
                <AddGoods/>
              </ProtectedAdminRoutes>
            }
          />
           <Route
            path="/setup/visitor-setup"
            element={
              <ProtectedAdminRoutes>
                <VisitorSetup />
              </ProtectedAdminRoutes>
            }
          />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
