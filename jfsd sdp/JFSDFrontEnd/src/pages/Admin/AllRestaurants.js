import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const AllRestaurants = () => {
  const [res, setRestaurants] = useState([]);
  
  const[color,setColor]  = useState('blue')

  const handleActive = async (id,status) => {
    
    if(status)
    {
      await axios.post(`http://localhost:2020/res/makeinactive/${id}`);
      // setColor("red")
    }
    else
    {
      await axios.post(`http://localhost:2020/res/makeactive/${id}`);
      // setColor("blue")
    }

    displayres();
  };
  const displayres = async () => {
    const result = await axios.get("http://localhost:2020/res/getallres");
    setRestaurants(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    displayres();
  }, []);

  return (
    <div className="flex">
      {console.log("I am inside the Body")}
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
              <div>
                {res.map((restaurant) => (
                  <div className="py-2 flex justify-between">
                    <div className="px-4 pt-1">
                      <h3 className="font-bold text-lg">{restaurant?.name}</h3>
                    </div>

                    <div>
                      <span>Status : </span>
                      <button
                        class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 border border-blue-700 rounded`}
                        onClick={() => handleActive(restaurant.id,restaurant.isactive)}
                      >
                       {restaurant.isactive ? "Active" :"In Active"}
                      </button>
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

export default AllRestaurants;

// {res.map((restaurant) => (
//                 <div className="py-2">
//                     <div className="flex justify-between">
//                     <div className="px-4  pt-1">
//                         <h3 className="font-bold text-lg">{restaurant?.name}</h3>
//                     </div>
//                     </div>
//                 </div>
//                 ))}
