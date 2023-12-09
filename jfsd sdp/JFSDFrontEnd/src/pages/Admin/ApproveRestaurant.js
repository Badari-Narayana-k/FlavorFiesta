import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Alert from "../../design/Alert";
const ApproveRestaurants = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [pendinglist, setPendingList] = useState([
    {
      id: "",
      name: "",
      approved: "",
      isactive: ""
    },
  ]);
  const pendingrequests = async () => {
    const result = await axios.get("http://localhost:2020/res/pending");
    setPendingList(result.data);
    // console.log(result.data.json)
    console.log(pendinglist);
  };

  const handleApprove = async (id) => {
    await axios.post(`http://localhost:2020/res/approve/${id}`);
    setShowAlert(true);
    pendingrequests();
  };

  useEffect((id) => {
    pendingrequests();
  },[]);

  return (
    <div className="flex">
      <div className="w-2/12 h-[90vh] bg-[#1c3155]">
        <div className="flex">
          <ul className="p-5 my-3">
            <Link
              to="/rest/addfood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Add Restaurant
            </Link>

            <Link
              to="/rest/deletefood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Delete Restaurant
            </Link>

            <Link
              to="/admin/pending"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Approve Restaurants
            </Link>

            <Link
              to="/admin/viewres"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Restaurants
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-10/12 h-[90vh] bg-[#1c3155] p-6">
        <div class="w-10/12 flex items-center justify-center bg-[#1c3155]">
          <div class="container max-w-screen-lg mx-auto ">
            <div
              class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
              role="alert"
            >
              {showAlert && <Alert message={"Restaurant has been Approved."} />}
              <div>
                {pendinglist.map((restaurant) => (
                  <div className="py-2">
                    <div className="flex justify-between">
                      <div className="px-4  pt-1">
                        <h3 className="font-bold text-lg">
                          {restaurant?.name}
                        </h3>
                      </div>
                      <div>
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 border border-blue-700 rounded"
                          onClick={() => {
                            handleApprove(restaurant.id);
                          }}
                        >
                          Approve
                        </button>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveRestaurants;
