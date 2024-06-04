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
import Navbar from "./components/Navbar";
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
import CreateBroadcst from "./pages/SubPages/CreateBroadcst.jsx";
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
import EmployeeVisitors from "./pages/Employees/EmployeeVisitors.jsx";
import EmployeeCreateVisitor from "./pages/Employees/EmployeeSubPages/EmployeeCreateVisitor.jsx";
import EmployeeVisitorDetails from "./pages/Employees/EmployeeSubPages/EmployeeVisitorDetails.jsx";
import EmployeeDeliveryDetails from "./pages/Employees/EmployeeSubPages/EmployeeDeliveryDetails.jsx";
import EmployeeCabDetails from "./pages/Employees/EmployeeSubPages/EmployeeCabDetails.jsx";
import Visitors from "./pages/Visitors.jsx";
import CreateVisitor from "./pages/SubPages/CreateVisitor.jsx";
import VisitorDetails from "./pages/SubPages/details/VisitorDetails.jsx";
import DeliveryStaffDetails from "./pages/SubPages/details/DeliveryStaffDetails.jsx";
import CabDetails from "./pages/SubPages/details/CabDetails.jsx";
import CabEdit from "./pages/SubPages/details/CabEdit.jsx";
import VisitorEdit from "./pages/SubPages/details/VisitorEdit.jsx";
import DeliveryEdit from "./pages/SubPages/details/DeliveryEdit.jsx";
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


function App() {
  const themeColor = useSelector((state) => state.theme.color);
  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    themeColor
  );
  document.documentElement.style.setProperty(
    "--calendarHeader",
    themeColor
  );
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
          <Route path="/setup/User-role" element={<UserRole />} />
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
            element={<CreateBroadcst />}
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/add-service" element={<AddService />} />
          <Route
            path="/services/service-details"
            element={<ServiceDetails />}
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
          {/* Employee Visitor */}
          <Route
            path="/employees/visitors"
            element={
              <ProtectedRoute>
                <EmployeeVisitors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/create-visitor"
            element={
              <ProtectedRoute>
                <EmployeeCreateVisitor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/visitor-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeVisitorDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/delivery-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeDeliveryDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/cab-details/:id"
            element={
              <ProtectedRoute>
                <EmployeeCabDetails />
              </ProtectedRoute>
            }
          />

          {/* admin visitor */}
          <Route
            path="/admin/visitor"
            element={
              <ProtectedAdminRoutes>
                <Visitors />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/create-visitor"
            element={
              <ProtectedAdminRoutes>
                <CreateVisitor />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/visitor-details/:id"
            element={
              <ProtectedAdminRoutes>
                <VisitorDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/deliverydetails/:id"
            element={
              <ProtectedAdminRoutes>
                <DeliveryStaffDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/cab-details/:id"
            element={
              <ProtectedAdminRoutes>
                <CabDetails />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-visitor/:id"
            element={
              <ProtectedAdminRoutes>
                <VisitorEdit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/edit-delivery/:id"
            element={
              <ProtectedAdminRoutes>
                <DeliveryEdit />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            path="/admin/cab-edit/:id"
            element={
              <ProtectedAdminRoutes>
                <CabEdit />
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
