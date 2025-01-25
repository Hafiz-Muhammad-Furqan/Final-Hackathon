// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const LoanCalculatorPage = () => {
//   const categories = {
//     Wedding: ["Venue", "Jewelry", "Clothing"],
//     Home: ["Construction", "Renovation", "Furniture"],
//     Business: ["Startup", "Expansion", "Equipment"],
//     Education: ["School", "College", "University"],
//   };

//   const [selectedCategory, setSelectedCategory] = useState("Wedding");
//   const [selectedSubcategory, setSelectedSubcategory] = useState(
//     categories["Wedding"][0]
//   );
//   const [loanAmount, setLoanAmount] = useState("");
//   const [downPayment, setDownPayment] = useState("");
//   const [loanPeriod, setLoanPeriod] = useState("1 Year");
//   const [emi, setEmi] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const interestRate = 10;
//   const processingFee = 2;

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setSelectedSubcategory(categories[e.target.value][0]);
//   };

//   const calculateEMI = () => {
//     if (!loanAmount || isNaN(loanAmount) || loanAmount <= 0) {
//       toast.error("Please enter a valid loan amount.");
//       return;
//     }

//     const principal = loanAmount - (downPayment || 0);
//     const rate = interestRate / 100 / 12;
//     const months = parseInt(loanPeriod) * 12;
//     const emiValue =
//       (principal * rate * Math.pow(1 + rate, months)) /
//       (Math.pow(1 + rate, months) - 1);
//     const totalAmount = emiValue * months;
//     const totalProcessingFee = (processingFee / 100) * principal;

//     setEmi({
//       monthlyInstallment: emiValue.toFixed(2),
//       totalRepayable: (totalAmount + totalProcessingFee).toFixed(2),
//       processingFee: totalProcessingFee.toFixed(2),
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
//       <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>

//       <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-[350px] md:w-[450px]">
//         <label className="block mb-2">Loan Category:</label>
//         <select
//           className="w-full p-2 rounded bg-slate-700 text-white mb-4"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           {Object.keys(categories).map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>

//         <label className="block mb-2">Subcategory:</label>
//         <select
//           className="w-full p-2 rounded bg-slate-700 text-white mb-4"
//           value={selectedSubcategory}
//           onChange={(e) => setSelectedSubcategory(e.target.value)}
//         >
//           {categories[selectedCategory].map((sub) => (
//             <option key={sub} value={sub}>
//               {sub}
//             </option>
//           ))}
//         </select>

//         <label className="block mb-2">Loan Amount:</label>
//         <input
//           type="number"
//           className="w-full p-2 rounded bg-slate-700 text-white mb-4"
//           placeholder="Enter amount"
//           value={loanAmount}
//           onChange={(e) => setLoanAmount(e.target.value)}
//         />

//         <label className="block mb-2">Down Payment (Optional):</label>
//         <input
//           type="number"
//           className="w-full p-2 rounded bg-slate-700 text-white mb-4"
//           placeholder="Enter down payment"
//           value={downPayment}
//           onChange={(e) => setDownPayment(e.target.value)}
//         />

//         <label className="block mb-2">Loan Period:</label>
//         <select
//           className="w-full p-2 rounded bg-slate-700 text-white mb-4"
//           value={loanPeriod}
//           onChange={(e) => setLoanPeriod(e.target.value)}
//         >
//           <option value="1">1 Year</option>
//           <option value="2">2 Years</option>
//           <option value="3">3 Years</option>
//           <option value="5">5 Years</option>
//         </select>

//         <button
//           className="w-full bg-blue-700 p-2 rounded hover:bg-blue-500 transition"
//           onClick={calculateEMI}
//         >
//           Calculate EMI
//         </button>
//       </div>

//       {emi && (
//         <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-[350px] md:w-[450px]">
//           <h2 className="text-xl font-semibold mb-4 text-green-400">
//             Loan Breakdown
//           </h2>
//           <p>
//             📌 Monthly Installment: <strong>${emi.monthlyInstallment}</strong>
//           </p>
//           <p>
//             ⚡ Processing Fee: <strong>${emi.processingFee}</strong>
//           </p>
//           <p>
//             💰 Total Repayable Amount: <strong>${emi.totalRepayable}</strong>
//           </p>

//           {/* Proceed Button */}
//           <button
//             className="w-full mt-4 bg-green-600 p-2 rounded hover:bg-green-500 transition"
//             onClick={() => setShowPopup(true)}
//           >
//             Proceed to Apply
//           </button>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[400px] text-black">
//             <h2 className="text-xl font-semibold mb-4">Apply for Loan</h2>
//             <p className="mb-4">
//               Fill in your details to proceed with the loan application.
//             </p>

//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-2 mb-3 border rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-2 mb-3 border rounded"
//             />
//             <input
//               type="phone"
//               placeholder="Phone Number"
//               className="w-full p-2 mb-3 border rounded"
//             />

//             <button className="w-full bg-blue-700 p-2 rounded text-white hover:bg-blue-500 transition">
//               Submit Application
//             </button>

//             <button
//               className="w-full mt-2 bg-red-600 p-2 rounded text-white hover:bg-red-500 transition"
//               onClick={() => setShowPopup(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanCalculatorPage;

import React, { useState } from "react";
import { toast } from "react-toastify";

const LoanCalculatorPage = () => {
  const categories = {
    Wedding: ["Venue", "Jewelry", "Clothing"],
    Home: ["Construction", "Renovation", "Furniture"],
    Business: ["Startup", "Expansion", "Equipment"],
    Education: ["School", "College", "University"],
  };

  const [selectedCategory, setSelectedCategory] = useState("Wedding");
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    categories["Wedding"][0]
  );
  const [loanAmount, setLoanAmount] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("1 Year");
  const [emi, setEmi] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const interestRate = 10;
  const processingFee = 2;

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory(categories[e.target.value][0]);
  };

  const calculateEMI = () => {
    if (!loanAmount || isNaN(loanAmount) || loanAmount <= 0) {
      toast.error("Please enter a valid loan amount.");
      return;
    }

    const principal = loanAmount - (downPayment || 0);
    const rate = interestRate / 100 / 12;
    const months = parseInt(loanPeriod) * 12;
    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);
    const totalAmount = emiValue * months;
    const totalProcessingFee = (processingFee / 100) * principal;

    setEmi({
      monthlyInstallment: emiValue.toFixed(2),
      totalRepayable: (totalAmount + totalProcessingFee).toFixed(2),
      processingFee: totalProcessingFee.toFixed(2),
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>

      {/* Hide Form if EMI is Calculated */}
      {!emi && (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-[350px] md:w-[450px] transition-all duration-500">
          <label className="block mb-2">Loan Category:</label>
          <select
            className="w-full p-2 rounded bg-slate-700 text-white mb-4"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label className="block mb-2">Subcategory:</label>
          <select
            className="w-full p-2 rounded bg-slate-700 text-white mb-4"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
          >
            {categories[selectedCategory].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          <label className="block mb-2">Loan Amount:</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-slate-700 text-white mb-4"
            placeholder="Enter amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <label className="block mb-2">Down Payment (Optional):</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-slate-700 text-white mb-4"
            placeholder="Enter down payment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />

          <label className="block mb-2">Loan Period:</label>
          <select
            className="w-full p-2 rounded bg-slate-700 text-white mb-4"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          >
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="5">5 Years</option>
          </select>

          <button
            className="w-full bg-blue-700 p-2 rounded hover:bg-blue-500 transition"
            onClick={calculateEMI}
          >
            Calculate EMI
          </button>
        </div>
      )}

      {/* Loan Breakdown */}
      {emi && (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-[350px] md:w-[450px] transition-all duration-500">
          <h2 className="text-xl font-semibold mb-4 text-green-400">
            Loan Breakdown
          </h2>
          <p>
            📌 Monthly Installment: <strong>${emi.monthlyInstallment}</strong>
          </p>
          <p>
            ⚡ Processing Fee: <strong>${emi.processingFee}</strong>
          </p>
          <p>
            💰 Total Repayable Amount: <strong>${emi.totalRepayable}</strong>
          </p>

          <button
            className="w-full mt-4 bg-green-600 p-2 rounded hover:bg-green-500 transition"
            onClick={() => setShowPopup(true)}
          >
            Proceed to Apply
          </button>
        </div>
      )}

      {/* Animated Popup */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
          showPopup
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[350px] md:w-[400px] transition-transform duration-300">
          <h2 className="text-xl font-semibold mb-4">Apply for Loan</h2>
          <p className="mb-4">
            Fill in your details to proceed with the loan application.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-3 bg-gray-700 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mb-3 bg-gray-700 rounded"
          />
          <input
            type="phone"
            placeholder="Cnic"
            className="w-full p-2 mb-3 bg-gray-700 rounded"
          />

          <button
            className="w-full bg-blue-700 p-2 rounded hover:bg-blue-500 transition"
            onClick={handleSubmit}
          >
            Submit Application
          </button>

          <button
            className="w-full mt-2 bg-red-600 p-2 rounded hover:bg-red-500 transition"
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;
