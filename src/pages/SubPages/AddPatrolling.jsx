import React from 'react'

const EditPatrolling = () => {
  return (
    <div>
         <div className="flex justify-center items-center my-5 w-full p-4">
        <form className="border border-gray-300 rounded-lg p-4 w-full mx-4">
          <h2 className="text-center md:text-xl font-bold p-2 bg-black rounded-full text-white">
            Edit Patrolling
          </h2>

          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="building" className="font-semibold">
                  Building
                </label>
                <select
                  name="building"
                  placeholder="Enter Building Name"
                  className="border p-2 rounded-md border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="wing" className="font-semibold">
                  Wing
                </label>
                <select
                  name="wing"
                  placeholder="Enter Wing"
                  className="border p-2 rounded-md border-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="floor" className="font-medium">
                  Floor
                </label>
                <select
                  name="floor"
                  className="border p-2 rounded-md border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="room" className="font-medium">
                  Room
                </label>
                <select
                  name="room"
                  className="border p-2 rounded-md border-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="startTime" className="font-medium">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  className="border p-2 rounded-md border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endTime" className="font-medium">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  className="border p-2 rounded-md border-black"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center my-4">
            <button
              type="submit"
              className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPatrolling