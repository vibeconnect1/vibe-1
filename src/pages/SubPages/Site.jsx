import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Account from "./Account";
import { PiPlusCircle } from "react-icons/pi";
import Switch from "../../Buttons/Switch";

const Site = () => {
  return (
    <div className="w-full mt-1">
      <Account />
      <div className="flex flex-col mx-10 my-10 gap-2">
     

        <div className="flex justify-center items-center ">
          {/* {showCountry && selectedCountries.length > 0 && ( */}
          <div className="mt-4 w-screen">
            <table className="border-collapse w-full ">
              <thead>
                <tr>
                  <th className=" border-md p-2 bg-black border-r-2 text-white rounded-l-xl">
                    Country
                  </th>
                  <th className=" border-md p-2 bg-black border-r-2 text-white ">
                    Region
                  </th>
                  <th className=" border-md p-2 bg-black border-r-2 text-white ">
                    Zone
                  </th>
                  <th className=" border-md p-2 bg-black border-r-2 text-white ">
                    Site
                  </th>
                  <th className=" border-md p-2 bg-black border-r-2 text-white ">
                    Latitude
                  </th>
                  <th className=" border-md p-2 bg-black border-r-2 text-white ">
                    Longitude
                  </th>
                  <th className="border-md border-r-2 p-2 bg-black text-white">
                    Status
                  </th>
                  <th className="  rounded-r-xl p-2 bg-black text-white">
                    Qr Code
                  </th>
                </tr>
              </thead>
                <tbody>
                    <tr className="border-md border-black border-b-2">
                      <td className="text-center p-2 border-r-2 border-black">Country 1</td>
                      <td className="text-center p-2 border-r-2 border-black">Region 1</td>
                      <td className="text-center p-2 border-r-2 border-black">Zone 1</td>
                      <td className="text-center p-2 border-r-2 border-black"> Kalyan</td>
                      <td className="text-center p-2 border-r-2 border-black">0.0</td>
                      <td className="text-center p-2 border-r-2 border-black">0.0</td>
                      <td className="text-center p-2 border-r-2 border-black"> Active</td>
                      <td className="text-center p-2"> </td>
                    </tr>
                    <tr className="border-md border-black border-b-2">
                      <td className="text-center p-2  border-r-2 border-black">Country 2</td>
                      <td className="text-center p-2  border-r-2 border-black">Region 2</td>
                      <td className="text-center p-2  border-r-2 border-black">Zone 2</td>
                      <td className="text-center p-2 border-r-2 border-black"> Kalyan</td>
                      <td className="text-center p-2 border-r-2 border-black">0.0</td>
                      <td className="text-center p-2 border-r-2 border-black">0.0</td>
                      <td className="text-center p-2 border-r-2 border-black">
                      <Switch/>
                      </td>
                      <td className="text-center p-2"> </td>
                    </tr>
                </tbody>
              
            </table>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Site;
