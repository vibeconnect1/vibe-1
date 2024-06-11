import React, { useState } from "react";
// import TicketSetupPage from "../SubPages/TicketSetupPage";
import { BiEdit } from "react-icons/bi";
const TicketEscalationSetup = () => {
    const [page, setPage] = useState("Response");
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
    <div className="flex w-full">
      <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
        <h2
          className={`p-1 ${
            page === "Response" &&
            `bg-white font-medium text-blue-500 shadow-custom-all-sides`
          } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
          onClick={() => setPage("Response")}
        >
           Response Escalation 
        </h2>
        <h2
          className={`p-1 ${
            page === "Resolution" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Resolution")}
        >
          Resolution Escalation 
        </h2>
        {/* <h2
          className={`p-1 ${
            page === "Cost Approval" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Cost Approval")}
        >
          Cost Approval
        </h2> */}


      </div>
    </div>
    <div>
        {page === "Response" && 
        <div className="ml-2 mt-2">
                 <select name="" id=""  className="border p-2 rounded-md border-black w-60 absolute right-0 "></select>

        <div className="flex flex-col justify-center items-center">
       {/* <select name="" id=""  className="border p-2 rounded-md border-black w-60 absolute right-0 "></select> */}

        <div className=" gap-50 mt-1 ml-10 mb-5">

            <table class="border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Levels</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Escalation To</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E1</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E2</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E3</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E4</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E5</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
    </tbody>
  </table>
  <hr/>
  &nbsp;
  <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Submit
            </button>

        </div>

        </div>
         <div className="flex gap-7 ml-10">
         <label htmlFor="" className="font-semibold">Filter</label>
         <select name="" id="" className="border p-2 rounded-md border-black w-48"></select>
         <button
className="border-2 font-semibold hover:bg-green-500 hover:text-white transition-all border-green-500 p-2 rounded-md text-green-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Apply
     </button>
     <button
className="border-2 font-semibold hover:bg-blue-500 hover:text-white transition-all border-blue-500 p-2 rounded-md text-blue-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Reset
     </button>
     </div>
     <div className="ml-10 mt-3 mb-8 mr-12">
     <p className="font-semibold">Rule 1</p>
     <div className="flex justify-end gap-x-60 mb-1">
  <BiEdit />
</div>


     <table class="w-full border-collapse table-center">

    <thead>
      <tr>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Category Type</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Levels</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Escalation To</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 text-center" rowspan="5">Demo</td>
        <td class="border border-gray-300 px-4 py-2">E1</td>
        <td class="border border-gray-300 px-4 py-2">Mahendra Lungare</td>
      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E2</td>
        <td class="border border-gray-300 px-4 py-2"></td>
      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E3</td>
        <td class="border border-gray-300 px-4 py-2"></td>
      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E4</td>
        <td class="border border-gray-300 px-4 py-2"></td>
      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E5</td>
        <td class="border border-gray-300 px-4 py-2"></td>
      </tr>
    </tbody>
  </table>
     </div>
      </div>
        }

{page === "Resolution" && 
        <div className="ml-2 mt-2">
        <div className=" flex flex-col mt-5 ml-10">
       <select name="" id=""  className="border p-2 rounded-md border-black w-60 h-10 absolute right-0"></select>
            <br/>
            <br/>
        <div className=" gap-50 mt-1 ml-10 mb-5">

            {/* <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Levels</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Escalation To</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E1</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E2</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E3</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E4</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E5</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-48"></select></td>
      </tr>
    </tbody>
  </table> */}

<table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Levels</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Escalation To</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P1</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P2</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P3</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P4</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E1</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-40"></select></td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E2</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-40"></select></td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>

        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />
        </td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E3</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-40"></select></td>

        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E4</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-40"></select></td>

        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">E5</td>
        <td class="border border-gray-300 px-4 py-2"><select name="" id="" className="border p-2 rounded-md border-black w-40"></select></td>

        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
        <td class="border border-gray-300 px-4 py-2">
        <input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1 mr-4" />
<input type="text" class="w-10 h-25 border border-gray-300 rounded-md px-2 py-1" />

        </td>
      </tr>
    </tbody>
  </table>

  <hr/>
  &nbsp;
  <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Submit
            </button>

        </div>

        </div>
         <div className="flex gap-7 ml-10">
         <label htmlFor="" className="font-semibold">Filter</label>
         <select name="" id="" className="border p-2 rounded-md border-black w-48"></select>
         <button
className="border-2 font-semibold hover:bg-green-500 hover:text-white transition-all border-green-500 p-2 rounded-md text-green-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Apply
     </button>
     <button
className="border-2 font-semibold hover:bg-blue-500 hover:text-white transition-all border-blue-500 p-2 rounded-md text-blue-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Reset
     </button>
     </div>
     <div className="ml-10 mt-3 mb-8 mr-12">
     <p className="font-semibold">Rule 1</p>
     <div className="flex justify-end gap-x-60 mb-1">
  <BiEdit />
</div>


     <table class="w-full border-collapse table-center">

    <thead>
      <tr>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Category Type</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Levels</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">Escalation To</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P1</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P2</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P3</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P4</th>
        <th class="border border-gray-300 bg-gray-100 px-4 py-2">P5</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 text-center" rowspan="5">Demo</td>
        <td class="border border-gray-300 px-4 py-2">E1</td>
        <td class="border border-gray-300 px-4 py-2">Mahendra Lungare</td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>

      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E2</td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>


      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E3</td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>

      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E4</td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>

      </tr>
      <tr>
        {/* <td class="border border-gray-300 px-4 py-2"></td> */}
        <td class="border border-gray-300 px-4 py-2">E5</td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>
        <td class="border border-gray-300 px-4 py-2"></td>

      </tr>
    </tbody>
  </table>
     </div>
      </div>
        }
    {/* {page === "Setup" &&  <TicketSetupPage/>} */}
      {/* {page === "Permit Activity" &&  <PermitActivityTable/>}
      {page === "Permit Sub Activity" &&  <PermitSubActivityTable/>}
      {page === "Permit Hazard Category" &&  <PermitHazardCategoryTable/>}
      {page === "Permit Risk" &&  <PermitRiskTable/>} */}
    </div>
  </div>
  )
}

export default TicketEscalationSetup