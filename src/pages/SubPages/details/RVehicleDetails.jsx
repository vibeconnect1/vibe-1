const RVehiclesDetails = () => {
    return (
      <section>
        <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Vehicle Details
          </h2>
        </div>
        <div className="flex flex-col items-center mx-10">
  
          <div className=" flex justify-end w-full">
  
          </div>
          <div className="grid grid-cols-3 w-full gap-5 my-5">
            <p className="text-xl font-medium">Slot Number :</p>
            <p  className="text-xl font-medium">Vehicle Category :</p>
            <p  className="text-xl font-medium">Vehicle Type :</p>
            <p  className="text-xl font-medium">Sticker Number:</p>
            <p  className="text-xl font-medium">Registration Number :</p>
            <p  className="text-xl font-medium">Insurance Number :</p>
            <p  className="text-xl font-medium">Insurance Valid Till :</p>
            <p  className="text-xl font-medium">Category :</p>
            <p  className="text-xl font-medium">Vehicle Number :</p>
            <p  className="text-xl font-medium">Unit :</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default RVehiclesDetails;