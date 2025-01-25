import React, { useState } from "react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const userLoan = {
    amount: "200,000 PKR",
    startDate: "2025-02-10",
    status: "Pending",
  };

  const paymentHistory = [
    { date: "2025-03-10", amount: "20,000 PKR", lateFee: "0 PKR" },
    { date: "2025-04-10", amount: "20,000 PKR", lateFee: "500 PKR" },
    { date: "2025-05-10", amount: "20,000 PKR", lateFee: "0 PKR" },
  ];

  const appointmentDetails = {
    token: "TOKEN-12345",
    qrCode: "https://via.placeholder.com/150",
    location: "Head Office, Karachi",
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-5">
        <h2 className="text-xl font-semibold mb-6">Loan Dashboard</h2>
        <ul>
          {["dashboard", "apply", "status", "payments", "profile"].map(
            (tab) => (
              <li
                key={tab}
                className={`p-3 cursor-pointer hover:bg-gray-700 rounded ${
                  activeTab === tab ? "bg-blue-600" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">User Loan Details</h2>
              <p>
                💰 Loan Amount: <strong>{userLoan.amount}</strong>
              </p>
              <p>
                📅 Repayment Start Date: <strong>{userLoan.startDate}</strong>
              </p>
              <p>
                📌 Status:{" "}
                <strong
                  className={
                    userLoan.status === "Pending"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                >
                  {userLoan.status}
                </strong>
              </p>
            </div>
          </>
        )}

        {activeTab === "status" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Loan Status</h1>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <p>
                🔄 Current Status:{" "}
                <strong className="text-yellow-400">{userLoan.status}</strong>
              </p>
              <p>
                📆 Next EMI Due: <strong>2025-03-10</strong>
              </p>
            </div>
          </>
        )}

        {activeTab === "payments" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Payment History</h1>
            <table className="w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount Paid</th>
                  <th className="p-3">Late Fee</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="p-3">{payment.date}</td>
                    <td className="p-3">{payment.amount}</td>
                    <td className="p-3 text-red-400">{payment.lateFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === "profile" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Edit Profile</h2>
              <input
                type="text"
                placeholder="CNIC"
                className="w-full p-2 mb-3 bg-gray-700 rounded text-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 mb-3 bg-gray-700 rounded text-white"
              />
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                Update Profile
              </button>
            </div>
          </>
        )}

        {activeTab === "apply" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Apply for Loan</h1>
            <p className="text-gray-400">Coming Soon...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
