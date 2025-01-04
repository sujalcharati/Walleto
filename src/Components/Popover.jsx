// import React, { useState } from 'react';

// const Popover = ({ onClose ,onSave }) => {

//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [type, setType] = useState("income");

//   const handleSave = (e) => {
//     e.preventDefault();
//     const parsedAmount = parseFloat(amount);
//     if (!isNaN(parsedAmount) && parsedAmount > 0) {
//       onSave(type, parsedAmount);
//       onClose();
//     } else {
//       alert("Please enter a valid amount!");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-gray-800 shadow-lg rounded-lg p-5 w-96 relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl">
//           &times;
//         </button>
//         <form onSubmit={handleSave} >
//           <div className="mb-2.5">
//             <label className="block mb-1.5 text-white">Amount:</label>
//             <input type="number" placeholder="Enter amount" className="w-full p-2 box-border border border-gray-300 rounded"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//              />
//           <div className="mb-2.5">
//             <label className="block mb-1.5 text-white">Type:</label>
//             <select
//               className="w-full p-2 box-border border border-gray-300 rounded"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//             >
//               <option value="income">Income</option>
//               <option value="expense">Expense</option>
//             </select>
//           </div>
//           </div>
//           <div className="mb-2.5">
//             <label className="block mb-1.5 text-white">Description:</label>
//             <input
//               type="text"
//               placeholder="Enter description"
//               className="w-full p-2 box-border border border-gray-300 rounded"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           <div className="flex justify-between">
//             <button type="submit" className="px-5 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600"
//             >
//               Save
//             </button>
//             <button type="button" onClick={onClose} className="px-5 py-2 bg-red-600 text-white border-none rounded cursor-pointer hover:bg-red-700">
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Popover;
import React, { useState } from "react";

const Popover = ({ onClose, onSave }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");

  const handleSave = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      onSave(type, parsedAmount);
      onClose();
    } else {
      alert("Please enter a valid amount!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 shadow-lg rounded-lg p-5 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          &times;
        </button>
        <form onSubmit={handleSave}>
          <div className="mb-2.5">
            <label className="block mb-1.5 text-white">Amount:</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 box-border border border-gray-300 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-2.5">
            <label className="block mb-1.5 text-white">Description:</label>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full p-2 box-border border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2.5">
            <label className="block mb-1.5 text-white">Type:</label>
            <select
              className="w-full p-2 box-border border border-gray-300 rounded"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="mb-2.5">
            <label className="block mb-1.5 text-white">Date:</label>
            <input
              type="date"
              className="w-full p-2 box-border border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600"
              value="income"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-red-600 text-white border-none rounded cursor-pointer hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popover;
