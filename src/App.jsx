import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
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
function App() {
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
          <Route path="/attendance" element={<Attendance />} />
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
          {/* tickets -Admin*/}
          <Route path="/tickets" element={<Ticket />} />
          <Route path="/tickets/details/:id" element={<ProtectedRoute><TicketDetails /></ProtectedRoute>} />
          <Route path="/tickets/create-ticket" element={<CreateTicket /> } />
          {/* Edit Details */}
          <Route path="/edit/:id" element={<ProtectedRoute><DetailsEdit /></ProtectedRoute>} />
          {/* tickets- user */}
          <Route path="/mytickets" element= { <MyTickets /> } />
          <Route path="/mytickets/userticket" element= {<UserTicket />} />
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
          <Route path="/bookings/setup-facility" element={<SetupFacility />} />
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
              <ProtectedRoute>
                <Asset />
              </ProtectedRoute>
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
        </Routes>
        <Footer />
      </Router>
      </>
  );
}

export default App;
