import React from "react";

const LeaveBalanceDetails = () => {
  const monthlyBalances = [
    { month: "Jan - 2024", opening: 22.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 22.0 },
    { month: "Feb - 2024", opening: 22.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 22.0 },
    { month: "Mar - 2024", opening: 22.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 22.0 },
    { month: "Apr - 2024", opening: 22.0, accrued: 0, taken: 0, adjusted: -17.0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "May - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Jun - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Jul - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Aug - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Sep - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Oct - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Nov - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
    { month: "Dec - 2024", opening: 5.0, accrued: 0, taken: 0, adjusted: 0, lapsed: 0, encashed: 0, ending: 5.0 },
  ];

  const transactions = [
    { date: "01-01-2024", details: "Opening Balance", change: 22.0, ending: 22.0 },
    { date: "30-04-2024", details: "Leave Adjusted by Admin\nComment :- OK", change: -17.0, ending: 5.0 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4">LeaveBalanceDetails</h2>
        <div className="mb-4 flex gap-6">
          <p className="text-xl font-semibold">Employee:</p>
          <p className="text-xl font-semibold">ABC</p>
          <div className="flex gap-6">
          <p className="text-xl font-semibold">Leave Cycle:</p>
          <p className="text-xl font-semibold">Jan 2024 - Dec 2024</p>
          </div>
          <div className="flex gap-6">
          <p className="text-xl font-semibold">Category:</p>
          <p className="text-xl font-semibold">Paid Leave</p>
          </div>
          <div className=" flex gap-3">
         <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Apply</button>
        </div>
        </div>



      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Monthly Leave Balances</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">Opening Balance</th>
                <th className="border px-4 py-2">Accrued Balance</th>
                <th className="border px-4 py-2">Leaves Taken</th>
                <th className="border px-4 py-2">Leaves Adjusted</th>
                <th className="border px-4 py-2">Leaves Lapsed</th>
                <th className="border px-4 py-2">Leaves Encashed</th>
                <th className="border px-4 py-2">Ending Balance</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBalances.map((balance, index) => (
                <tr key={index} className="border-t">
                  <td className="border px-4 py-2">{balance.month}</td>
                  <td className="border px-4 py-2">{balance.opening}</td>
                  <td className="border px-4 py-2">{balance.accrued}</td>
                  <td className="border px-4 py-2">{balance.taken}</td>
                  <td className="border px-4 py-2">{balance.adjusted}</td>
                  <td className="border px-4 py-2">{balance.lapsed}</td>
                  <td className="border px-4 py-2">{balance.encashed}</td>
                  <td className="border px-4 py-2">{balance.ending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Leave Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Transaction Details</th>
                <th className="border px-4 py-2">Change</th>
                <th className="border px-4 py-2">Ending Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t">
                  <td className="border px-4 py-2">{transaction.date}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{transaction.details}</td>
                  <td className="border px-4 py-2">{transaction.change}</td>
                  <td className="border px-4 py-2">{transaction.ending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalanceDetails;