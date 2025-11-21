import React from "react";

export const Summary = ({ title, value, icon, color }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-800 text-white">
      <div className="flex items-center gap-2">
        <div
          className={`p-2 rounded-full ${color} flex justify-center items-center`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
};

