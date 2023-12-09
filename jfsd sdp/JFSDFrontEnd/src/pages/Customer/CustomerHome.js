import React from "react";

import { Link, useNavigate } from "react-router-dom";
const CustomerHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked");
    navigate("/");
  };
  return (
    <>
      <div className="w-2/12 h-[90vh] bg-[#1c3155]">
        <div className="flex">
          <ul className="p-5 my-3">
            <Link
              to="/rest/addfood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              My Profile
            </Link>

            <Link
              to="/rest/deletefood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              My Orders
            </Link>

            <Link
              to="/rest/updatefood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Offers
            </Link>

            <li
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto w-20 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
              onClick={handleClick}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
