import React from 'react';
// import BackButton from "../../../Buttons/BackButton";

const EditFlightRequest = () => (
  <div className="w-full mt-1 mx-2 ">
          {/* <BackButton to={"/employee/flight-request"} /> */}

    <div className="flex justify-center items-center my-5 w-full p-4">
    <form className="border border-gray-300 rounded-lg p-4 w-full mx-4 max-h-screen overflow-y-auto">
      <h2 className="text-center md:text-xl font-bold p-2 bg-black rounded-full text-white">
       Edit Flight Request
      </h2>
  <div className="grid md:grid-cols-3 gap-5 mt-5">
    <div className="grid gap-2 items-center w-full">
      <label htmlFor="employeeId" className="font-semibold">
        Employee ID:
      </label>
      <input
        type="number"
        id="employeeId"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Employee ID"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="employeeName" className="font-semibold">
        Employee Name:
      </label>
      <input
        type="text"
        id="employeeName"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Employee Name"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="destination" className="font-semibold">
      Departure City:
      </label>
      <input
        type="text"
        id="destination"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Destination"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="checkInDate" className="font-semibold">
      Arrival City:
      </label>
      <input
        type="date"
        id="checkInDate"
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="departureDate" className="font-semibold">
        Departure Date:
      </label>
      <input
        type="date"
        id="departureDate"
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="returnDate" className="font-semibold">
        Return Date (If Round Trip):
      </label>
      <input
        type="date"
        id="returnDate"
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="preferredAirlines" className="font-semibold">
        Preferred Airline(s):
      </label>
      <input
        type="text"
        id="preferredAirlines"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Preferred Airline(s)"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="class" className="font-semibold">
        Class:
      </label>
      <select id="class" className="border border-gray-400 p-2 rounded-md">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
      </select>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="passengerNames" className="font-semibold">
        Passenger Name(s):
      </label>
      <input
        type="text"
        id="passengerNames"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Passenger Name(s)"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="passportInformation" className="font-semibold">
        Passport Information:
      </label>
      <textarea
        id="passportInformation"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Passport Information"
      ></textarea>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="ticketConfirmationNumber" className="font-semibold">
        Ticket Confirmation Number:
      </label>
      <input
        type="text"
        id="ticketConfirmationNumber"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Ticket Confirmation Number"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="bookingStatus" className="font-semibold">
        Booking Status:
      </label>
      <select id="bookingStatus" className="border border-gray-400 p-2 rounded-md">
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>


    <div className="grid gap-2 items-center w-full">
      <label htmlFor="managerApproval" className="font-semibold">
        Manager Approval :
      </label>
      <select id="managerApproval" className="border border-gray-400 p-2 rounded-md">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="bookingConfirmationEmail" className="font-semibold">
        Booking Confirmation Email:
      </label>
      <input
        type="email"
        id="bookingConfirmationEmail"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Booking Confirmation Email"
      />
    </div>
  </div>
  <div className="flex gap-5 justify-center items-center my-4">
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
  </form>
  </div></div>
);

export default EditFlightRequest;