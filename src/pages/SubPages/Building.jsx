import React, { useState } from "react";
import Account from "./Account";
import { PiPlusCircle } from "react-icons/pi";
import Switch from "../../Buttons/Switch";

const Building = () => {
  const [site, setSite] = useState("");
  const [building, setBuilding] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [showRows, setShowRows] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!site || !building) {
      return;
    }

    const newData = {
      site: site,
      building: building,
      wing: true,
      area: true,
      floor: true,
      room: true,
      status: "Active",
    };
    setSubmittedData((prevData) => [...prevData, newData]);

    setSite("");
    setBuilding("");
    setShowRows(true);
  };

  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };

  const handleBuildingChange = (e) => {
    setBuilding(e.target.value);
  };

  return (
    <div className="w-full mt-1">
      <Account />
      <div className="flex flex-col mx-10 my-10 gap-2">
        <h2
          className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2"
          onClick={() => setShowFields(!showFields)}
        >
          <PiPlusCircle size={20} />
          Add Building
        </h2>
        {showFields && (
          <div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Site"
                className="border border-gray-500 rounded-md mt-5 p-2"
                value={site}
                onChange={handleSiteChange}
              />
              <input
                type="text"
                placeholder="Enter Building Name"
                className="border border-gray-500 rounded-md mt-5 p-2"
                value={building}
                onChange={handleBuildingChange}
              />
            </div>
            <div className="flex my-2 gap-4">
              <div className="flex  gap-2">
                <input type="checkbox" name="wing" id="wing" />
                <label htmlFor="wing">Wing</label>
              </div>
              <div className="flex  gap-2">
                <input type="checkbox" name="area" id="area" />
                <label htmlFor="area">Area</label>
              </div>
              <div className="flex  gap-2">
                <input type="checkbox" name="floor" id="floor" />
                <label htmlFor="floor">Floor</label>
              </div>
              <div className="flex  gap-2">
                <input type="checkbox" name="room" id="room" />
                <label htmlFor="room">Room</label>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        )}

        <div className="flex justify-center items-center">
          <div className="mt-4 w-screen">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border-md p-2 bg-black border-r-2 text-white rounded-l-xl">
                    Site
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white ">
                    Building
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white ">
                    Wing
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white ">
                    Area
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white ">
                    Floor
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white ">
                    Room
                  </th>
                  <th className="border-md p-2 bg-black border-r-2 text-white rounded-r-xl ">
                    Status
                  </th>
                </tr>
              </thead>
              {showRows && (
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-md border-black border-b-2"
                    >
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.site}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.building}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.wing ? "Yes" : "No"}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.area ? "Yes" : "No"}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.floor ? "Yes" : "No"}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {data.room ? "Yes" : "No"}
                      </td>
                      <td className="text-center p-2">
                        {" "}
                       <Switch/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
