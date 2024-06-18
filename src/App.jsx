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

import DocumentPro from "./pages/DocumentPro.jsx";
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

function App() {
  const themeColor = useSelector((state) => state.theme.color);
  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    themeColor
  );
  document.documentElement.style.setProperty("--calendar-Header", themeColor);
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
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
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
          <Route path="/setup" element={<Setup />} />
          <Route path="/setup/account" element={<Account />} />
          <Route
            path="/setup/account/organisation"
            element={<Organisation />}
          />
          <Route path="/setup/account/company" element={<Company />} />
          <Route path="/setup/account/country" element={<Country />} />
          <Route path="/setup/account/region" element={<Region />} />
          <Route path="/setup/account/zone" element={<Zone />} />
          <Route path="/setup/account/site" element={<Site />} />
          <Route path="/setup/account/entity" element={<Entity />} />
          <Route path="/setup/account/building" element={<Building />} />
          <Route path="/setup/account/wing" element={<Wing />} />
          <Route path="/setup/account/area" element={<Area />} />
          <Route path="/setup/account/floor" element={<Floor />} />
          <Route path="/setup/account/unit" element={<Unit />} />
          <Route path="/setup/account/room" element={<Room />} />
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
          <Route path="/business" element={<Business />} />
          <Route path="/business/details/:id" element={<BusinessDetails />} />
          <Route path="/business/add-business" element={<AddBusiness />} />
          <Route path="/business/setup-category" element={<BusinessSetup />} />
          {/* materials */}
          <Route path="/materials" element={<Materials />} />
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
          <Route path="/admin/seat-booking" element={<BookSeat />} />
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
          {/* communication */}
          <Route path="/communication" element={<Communication />} />
          <Route path="/communication/create-event" element={<CreateEvent />} />
          <Route
            path="/communication/event/event-details/:id"
            element={<EventDetails />}
          />
          <Route
            path="/communication/broadcast/create-broadcast"
            element={<CreateBroadcast />}
          />
          <Route
            path="/communication/broadcast/broadcast-details/:id"
            element={<BroadcastDetails />}
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
            element={
              <ProtectedAdminRoutes>
                <Asset />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/assets/add-asset"
            element={
              <ProtectedRoute>
                <AddAsset />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/asset-details/:id"
            element={
              <ProtectedRoute>
                <AssetDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/edit-asset/:id"
            element={
              <ProtectedRoute>
                <EditAsset />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/add-amc"
            element={
              <ProtectedRoute>
                <AddAMC />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/edit-amc/:id"
            element={
              <ProtectedRoute>
                <EditAssetAMC />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/associate-checklist/:id"
            element={
              <ProtectedRoute>
                <AssociateAssetChecklist />
              </ProtectedRoute>
            }
          />
          {/*services*/}
          <Route
            path="/services"
            element={
              <ProtectedAdminRoutes>
                <Services />
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
              <ProtectedRoute>
                <Suppliers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/suppliers/add-supplier"
            element={
              <ProtectedRoute>
                <AddSupplier />
              </ProtectedRoute>
            }
          />
          <Route
            path="/suppliers/edit-supplier/:id"
            element={
              <ProtectedRoute>
                <EditSuppliers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/suppliers/supplier-details/:id"
            element={
              <ProtectedRoute>
                <SupplierDetails />
              </ProtectedRoute>
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
            path="/admin/birthday"
            element={
              <ProtectedAdminRoutes>
                <Birthday />
              </ProtectedAdminRoutes>
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
          <Route
            path="/employee/meetings"
            element={
              <ProtectedRoute>
                <EmployeeMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/meetings/create-meeting"
            element={
              <ProtectedRoute>
                <EmployeeCreateMeeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/meeting-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeMeetingDetails />
              </ProtectedRoute>
            }
          />

          {/* admin Meetings */}

          <Route
            path="/admin/meetings"
            element={
              <ProtectedAdminRoutes>
                <Meetings />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/meetings/create-meeting"
            element={
              <ProtectedAdminRoutes>
                <CreateMeeting />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/meetings/meeting-details/:id"
            element={
              <ProtectedAdminRoutes>
                <MeetingDetails />
              </ProtectedAdminRoutes>
            }
          />
          {/*admin project management */}
          <Route
            path="/admin/project-management"
            element={
              <ProtectedAdminRoutes>
                <ProjectManagement />
              </ProtectedAdminRoutes>
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
            path="/admin/documents"
            element={
              <ProtectedAdminRoutes>
                <DocumentPro />
              </ProtectedAdminRoutes>
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
            element={
              <ProtectedAdminRoutes>
                <Passes />
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
            path="/admin/add-staff"
            element={
              <ProtectedAdminRoutes>
                <AddStaff />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/staff-details/:id"
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
            path="/admin/edit-patrolling/:id"
            element={
              <ProtectedAdminRoutes>
                <EditPatrolling />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/patrolling-details/:id"
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

          <Route
            path="/employees/passes"
            element={
              <ProtectedRoute>
                <EmployeePasses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/addnewvisitor"
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
            path="/admin/calendar"
            element={
              <ProtectedAdminRoutes>
                <Calender />
              </ProtectedAdminRoutes>
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
            path="/admin/add-loi"
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
            path="/admin/Task-management"
            element={
              <ProtectedAdminRoutes>
                <TaskManagement />
              </ProtectedAdminRoutes>
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
            path="/admin/add-material-pr"
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
          {/* <Route
            path="/employee/add-onboarding"
            element={
              <ProtectedRoute>
                <AddOnBoarding/>
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/employee/employee-onboarding-details/:id"
            element={
              <ProtectedRoute>
                <OnboardingDetails/>
              </ProtectedRoute>
            }
          /> */}
           {/* <Route path="/hrms-onboarding" element={ <ProtectedRoute><Onboarding/></ProtectedRoute>} /> */}
            {/* <Route path="/hrms-attendance" element={<div>Attendance Content</div>} />
            <Route path="/hrms-salary-slip" element={<div>Salary Slip Content</div>} />
            <Route path="/auto-salary-breakup" element={<div>Auto Salary Breakup Creation Content</div>} />
            <Route path="/leaves" element={<div>Leaves Content</div>} />
            <Route path="/roaster-planning" element={<div>Roaster Planning Content</div>} />
            <Route path="/employee-advance-claim" element={<div>Employee Advance Claim Content</div>} />
            <Route path="/employee-performance" element={<div>Employee Performance Content</div>} />
            <Route path="/employee-expenses" element={<div>Employee Expenses Content</div>} />
            <Route path="/time-sheet-tracker" element={<div>Time Sheet Tracker Content</div>} />
            <Route path="/ijp-recruitment" element={<div>IJP/Recruitment Content</div>} />
            <Route path="/employee-induction" element={<div>Employee Induction Content</div>} />
            <Route path="/employee-it-declaration" element={<div>Employee IT Declaration Content</div>} />
            <Route path="/offer-letter" element={<div>Offer Letter / Acceptance Content</div>} />
            <Route path="/employee-talent-programs" element={<div>Employee Talent Programs Content</div>} />
            <Route path="/memos" element={<div>Memos Content</div>} />
            <Route path="/employee-loans-advance" element={<div>Employee Loans & Advance Content</div>} />
            <Route path="/recruitment" element={<div>Recruitment Content</div>} />
            <Route path="/roaster" element={<div>Roaster Content</div>} />
            <Route path="/provident-fund" element={<div>Provident Fund, ESIC, Legal Compliance Content</div>} /> */}


{/* <Route
            path="/admin/hrms"
            element={
              <ProtectedAdminRoutes>
                <HRMS/>
              </ProtectedAdminRoutes>
            }
          /> */}
          {/* <Route
            path="/admin/add-employee-onboarding"
            element={
              <ProtectedAdminRoutes>
                <AddEmployeeOnBoarding/>
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/employee-onboarding-details/:id"
            element={
              <ProtectedAdminRoutes>
                <EmployeeOnBoardingDetails/>
              </ProtectedAdminRoutes>
            }
          />
           <Route
            path="/admin/employee-onboarding-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <EditEmployeeOnBoarding/>
              </ProtectedAdminRoutes>
            }
          />
           <Route path="/employee-onboarding" element={<ProtectedAdminRoutes><EmployeeOnboarding/></ProtectedAdminRoutes>} /> */}
            {/* <Route path="/hrms-attendance" element={<div>Attendance Content</div>} />
            <Route path="/hrms-salary-slip" element={<div>Salary Slip Content</div>} />
            <Route path="/auto-salary-breakup" element={<div>Auto Salary Breakup Creation Content</div>} />
            <Route path="/leaves" element={<div>Leaves Content</div>} />
            <Route path="/roaster-planning" element={<div>Roaster Planning Content</div>} />
            <Route path="/employee-advance-claim" element={<div>Employee Advance Claim Content</div>} />
            <Route path="/employee-performance" element={<div>Employee Performance Content</div>} />
            <Route path="/employee-expenses" element={<div>Employee Expenses Content</div>} />
            <Route path="/time-sheet-tracker" element={<div>Time Sheet Tracker Content</div>} />
            <Route path="/ijp-recruitment" element={<div>IJP/Recruitment Content</div>} />
            <Route path="/employee-induction" element={<div>Employee Induction Content</div>} />
            <Route path="/employee-it-declaration" element={<div>Employee IT Declaration Content</div>} />
            <Route path="/offer-letter" element={<div>Offer Letter / Acceptance Content</div>} />
            <Route path="/employee-talent-programs" element={<div>Employee Talent Programs Content</div>} />
            <Route path="/memos" element={<div>Memos Content</div>} />
            <Route path="/employee-loans-advance" element={<div>Employee Loans & Advance Content</div>} />
            <Route path="/recruitment" element={<div>Recruitment Content</div>} />
            <Route path="/roaster" element={<div>Roaster Content</div>} />
            <Route path="/provident-fund" element={<div>Provident Fund, ESIC, Legal Compliance Content</div>} /> */}
       
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
