import React from 'react';

const EditHotelRequest = () => (
    <div className="flex justify-center items-center my-5 w-full p-4">
    <form className="border border-gray-300 rounded-lg p-4 w-full mx-4 max-h-screen overflow-y-auto">
      <h2 className="text-center md:text-xl font-bold p-2 bg-black rounded-full text-white">
        Edit Hotel Request
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
        Destination:
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
        Check-in Date:
      </label>
      <input
        type="date"
        id="checkInDate"
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="checkOutDate" className="font-semibold">
        Check-out Date:
      </label>
      <input
        type="date"
        id="checkOutDate"
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="numberOfRooms" className="font-semibold">
        Number of Rooms:
      </label>
      <input
        type="number"
        id="numberOfRooms"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Number of Rooms"
      />
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="roomType" className="font-semibold">
        Room Type:
      </label>
      <select id="roomType" className="border border-gray-400 p-2 rounded-md">
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="specialRequests" className="font-semibold">
        Special Requests:
      </label>
      <textarea
        id="specialRequests"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Special Requests"
      ></textarea>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="hotelPreferences" className="font-semibold">
        Hotel Preferences:
      </label>
      <textarea
        id="hotelPreferences"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Hotel Preferences"
      ></textarea>
    </div>

    <div className="grid gap-2 items-center w-full">
      <label htmlFor="bookingConfirmationNumber" className="font-semibold">
        Booking Confirmation Number:
      </label>
      <input
        type="text"
        id="bookingConfirmationNumber"
        className="border border-gray-400 p-2 rounded-md"
        placeholder="Enter Booking Confirmation Number"
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
  </div>
);

export default EditHotelRequest;