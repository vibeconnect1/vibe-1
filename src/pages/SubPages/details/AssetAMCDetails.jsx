import React from 'react'

const AssetAMCDetails = () => {
  return (
    <section>
    <div className="m-2">
      <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400">
        <h2 className="border-b  text-xl border-black font-semibold">
          AMC Details
        </h2>
        {/* <div className=" flex sm:flex-row flex-col gap-5 justify-between "> */}
        <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
          <div className="grid grid-cols-2 items-center">
            <p>Asset :</p>
            <p className="text-sm font-normal ">{amcDetails.asset_name}</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Vendor :</p>
            <p className="text-sm font-normal ">{amcDetails.vendor_name}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Start Date : </p>
            <p className="text-sm font-normal">{amcDetails.start_date}</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>End Date :</p>
            <p className="text-sm font-normal">{amcDetails.end_date}</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Frequency : </p>
            <p className="text-sm font-normal">{amcDetails.frequency}</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Created On : </p>
            <p className="text-sm font-normal">{amcDetails.created_at}</p>
          </div>
        </div>
        <h2 className="border-b  text-xl border-black font-semibold">
          AMC Terms Attachments
        </h2>
        <p>No Attachments</p>
      </div>
      </div>
      </section>
  )
}

export default AssetAMCDetails
