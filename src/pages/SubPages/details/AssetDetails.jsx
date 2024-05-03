import React, { useEffect, useState } from "react";
import {
  AMCDetails,
  ActivityFeed,
  Assetinfo,
  History,
  PPM,
  Readings,
} from "./assetSubDetails";
import { getSiteAssetDetails } from "../../../api";
import { useParams } from "react-router-dom";

const AssetDetails = () => {
  const [page, setPage] = useState("assetInfo");
  const [asset, setAsset] = useState([]);
  const { id } = useParams();

 useEffect(() => {
  const getDetails = async () => {
    try {
      const details = await getSiteAssetDetails(id);
      setAsset(details.data);
      
    } catch (error) {
      console.error('Error fetching site asset details:', error);
    }
  };

  getDetails();
}, [id]);

  return (
    <section className="px-10">
      <div className="p-4 w-full my-2 flex mx-5 flex-col ">
        <div className="flex justify-center">
          <div className="flex flex-row gap-10 text-lg font-medium p-2 rounded-full bg-gray-400">
            <h2
              className={`p-1 ${
                page === "assetInfo" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer `}
              onClick={() => setPage("assetInfo")}
            >
              Asset Info
            </h2>
            <h2
              className={`p-1 ${
                page === "AMCDetails" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("AMCDetails")}
            >
              AMC Details
            </h2>
            <h2
              className={`p-1 ${
                page === "readings" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("readings")}
            >
              Readings
            </h2>
            <h2
              className={`p-1 ${
                page === "ppm" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("ppm")}
            >
              PPM
            </h2>
            <h2
              className={`p-1 ${
                page === "activityFeed" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("activityFeed")}
            >
              Activity Feed
            </h2>
            <h2
              className={`p-1 ${
                page === "history" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("history")}
            >
              History
            </h2>
          </div>
        </div>
        {page === "assetInfo" && (
          <div>
            <Assetinfo assetData={asset} />
          </div>
        )}
        {page === "AMCDetails" && (
          <div>
            <AMCDetails />
          </div>
        )}
        {page === "readings" && (
          <div>
            <Readings />
          </div>
        )}
        {page === "ppm" && (
          <div>
            <PPM />
          </div>
        )}
        {page === "activityFeed" && (
          <div>
            <ActivityFeed />
          </div>
        )}
        {page === "history" && (
          <div>
            <History />
          </div>
        )}
      </div>
    </section>
  );
};

export default AssetDetails;
