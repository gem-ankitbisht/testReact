// import { useState } from "react";

import { useEffect, useState } from "react";


function LoginDocter() {
  // const [selectedRole, setSelectedRole] = useState("");
  const hospitals = [
    "Fortis Cancer Institute, Defence Colony, New Delhi",
    "Fortis Hospital, Bangalore",
    "Fortis Hospital, Mumbai",
  ];
  const roles = ["New Delhi", "Bangalore", "Mumbai"];

  const [hospital, setHospital] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (hospital) {
      setRole("Mumbai");
    }
  }, [hospital]);

  // const roles = ["Doctor", "Admin", "Finance", "HR"];

  return (
    <div className=" flex justify-around " style={{ height: "100vh" }}>
      <div className="w-1/2 ml-10 flex items-center">
        <div className="w-full sm:w-1/2 p-6 space-y-2">
          <h2 className="text-4xl text-gray-700">Welcome to</h2>
          <h1 className="text-5xl font-bold text-gray-900">Doctor’s</h1>
          <h1 className="text-green-600 text-5xl">Payout System</h1>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
        </div>
      </div>
      <div className=" w-1/2 flex flex-col  space-y-2  p-16 bg-white shadow-2xl rounded-2xl">
        <div className="py-18 ">
          <img src="/fortisLogo.png" alt="logo" width={100} height={100} />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Sign In</h2>
        <p className="text-gray-600">Select your details to continue</p>
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
    <p class="text-lg font-semibold">Order Status: Confirmed</p>
    <p>Your order has been successfully confirmed and is now being processed.</p>
</div>
        <label className="block mt-4 text-gray-700">
          Hospital <span className=" text-red-600">*</span>
        </label>
        <select
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-800"
        >
          {hospitals.map((hospital, index) => (
            <option value={hospital} key={index} className="text-gray-800">
              {hospital}
            </option>
          ))}
        </select>

        <label htmlFor="role" className="block mt-4 text-gray-700">
          Role <span className=" text-red-600">*</span>
        </label>
        <select
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-800"
        >
          {roles.map((hospital, index) => (
            <option key={index} className="text-gray-800">
              {hospital}
            </option>
          ))}
        </select>
        <button className=" w-max  bg-green-600 text-white py-4 px-12 mt-6 rounded">
          Login with Azure AD
        </button>
      </div>
    </div>
  );
}

export default LoginDocter;
