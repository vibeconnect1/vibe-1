import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../../components/table/Table";
import EmployeeHRMS from "./EmployeeHRMS";

const RoasterModal = ({ isOpen, onClose, onSubmit }) => {
    const [employeeName, setEmployeeName] = useState('');
    const [role, setRole] = useState('');
    const [shiftStartTime, setShiftStartTime] = useState('');
    const [shiftEndTime, setShiftEndTime] = useState('');
    const [assignment, setAssignment] = useState('');
    const [breakTime, setBreakTime] = useState('');
    const [daysOff, setDaysOff] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ employeeName, role, shiftStartTime, shiftEndTime, assignment, breakTime, daysOff });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Add Roaster</h2>
                <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Employee Name</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded-md"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Role</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded-md"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Shift Start Time</label>
                        <input
                            type="time"
                            className="w-full border p-2 rounded-md"
                            value={shiftStartTime}
                            onChange={(e) => setShiftStartTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Shift End Time</label>
                        <input
                            type="time"
                            className="w-full border p-2 rounded-md"
                            value={shiftEndTime}
                            onChange={(e) => setShiftEndTime(e.target.value)}
                            required
                        />
                    </div>
                   
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Break Time</label>
                        <input
                            type="time"
                            className="w-full border p-2 rounded-md"
                            value={breakTime}
                            onChange={(e) => setBreakTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Days Off</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded-md"
                            value={daysOff}
                            onChange={(e) => setDaysOff(e.target.value)}
                            required
                        />
                    </div></div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Assignment</label>
                        <textarea
                            type="text"
                            className="w-full border p-2 rounded-md"
                            value={assignment}
                            onChange={(e) => setAssignment(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="border-2 font-semibold hover:bg-gray-200 duration-150 transition-all border-black p-1 px-4 rounded-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-1 px-4 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const EmployeeHRMSRoasterPlanning = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form Data:', formData);
    };

    const columns = [
        {
            name: "Action",
            cell: (row) => (
                <div className="flex items-center gap-4">
                    <Link to={`/employee/hrms-roaster-planning-details/${row.id}`}>
                        <BsEye size={15} />
                    </Link>
                </div>
            ),
        },
        // {
        //     name: "Employee Name",
        //     selector: (row) => row.name,
        //     sortable: true,
        // },
        // {
        //     name: "Role",
        //     selector: (row) => row.role,
        //     sortable: true,
        // },
        {
            name: "Shift Start time",
            selector: (row) => row.start,
            sortable: true,
        },
        {
            name: "Shift End time",
            selector: (row) => row.end,
            sortable: true,
        },
        {
            name: "Assignment",
            selector: (row) => row.assign,
            sortable: true,
        },
        {
            name: "Break Time",
            selector: (row) => row.break,
            sortable: true,
        },
        {
            name: "Days off",
            selector: (row) => row.off,
            sortable: true,
        },
    ];

    // Custom styles
    // const customStyle = {
    //     headRow: {
    //         style: {
    //             backgroundColor: "black",
    //             color: "white",
    //             fontSize: "10px",
    //         },
    //     },
    //     headCells: {
    //         style: {
    //             textTransform: "uppercase",
    //         },
    //     },
    // };

    const data = [
        {
            id: 1,
            name: "Mittu",
            role: "Developer",
            assign: "Develop frontend",
            start: "2:00AM",
            end: "2:00AM",
            break: "2:00AM",
            off: "2:00AM",
        },
        {
            id: 2,
            name: "Mittu",
            role: "Developer",
            assign: "Develop frontend",
            start: "2:00AM",
            end: "2:00AM",
            break: "2:00AM",
            off: "2:00AM",
        },
        {
            id: 3,
            name: "Mittu",
            role: "Developer",
            assign: "Develop frontend",
            start: "2:00AM",
            end: "2:00AM",
            break: "2:00AM",
            off: "2:00AM",
        },
    ];

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    return (
        <section className="flex">
            <EmployeeHRMS/>
            <div className="w-full flex mx-3 flex-col overflow-hidden">
                <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2">
                    <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="all"
                                name="status"
                                checked={selectedStatus === "all"}
                                onChange={() => handleStatusChange("all")}
                            />
                            <label htmlFor="all" className="text-sm">
                                All
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="upcoming"
                                name="status"
                                checked={selectedStatus === "upcoming"}
                                onChange={() => handleStatusChange("upcoming")}
                            />
                            <label htmlFor="upcoming" className="text-sm">
                                Upcoming
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="completed"
                                name="status"
                                checked={selectedStatus === "completed"}
                                onChange={() => handleStatusChange("completed")}
                            />
                            <label htmlFor="completed" className="text-sm">
                                Completed
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="cancelled"
                                name="status"
                                checked={selectedStatus === "cancelled"}
                                onChange={() => handleStatusChange("cancelled")}
                            />
                            <label htmlFor="cancelled" className="text-sm">
                                Cancelled
                            </label>
                        </div>
                    </div>

                    <span className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
                        />
                        {/* <button
                            onClick={handleAddClick}
                            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                        >
                            Add
                        </button> */}
                        <button
                            className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                        >
                            Filter
                        </button>
                    </span>
                </div>
                <Table
                    columns={columns}
                    data={data}
                    // customStyles={customStyle}
                    isPagination={true}
                />
            </div>
            <RoasterModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleFormSubmit}
            />
        </section>
    );
};

export default EmployeeHRMSRoasterPlanning;
