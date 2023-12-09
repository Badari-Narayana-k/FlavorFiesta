import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../design/Alert";
import axios from "axios";
const Signup = () => {
  const[id,setId]=useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setshowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name);
      await axios.post("http://localhost:2020/res/signup", {id,name,password});
      setshowAlert(true);
    } catch (error) {}
  };

  return (
    <>
      <div className="bg-[#1c3155]">
        <div className="bg-[#1c3155] h-[90vh] flex items-center justify-evenly mx-4">
          <div class="w-full max-w-xs bg-[#1c3155]">
            {showAlert && <Alert setshowAlert = {() => setshowAlert(false)}  message = {"A Request has been Sent to Admin .Try to Sign in 3-4hrs"}/>}
            <form class="px-8 pt-6 pb-8 mb-4 bg-[#1c3155] rounded-lg shadow-2xl">
              <div class="mb-4">
                <h3 className="text-white font-serif font-bold mb-4">
                  Restaurant SignUp
                </h3>
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="id"
                >
                  id
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="id"
                  placeholder="Id"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <br/>
                <br/>
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="name"
                >
                  name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <br/>
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="name"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                      
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              {console.log(name)}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
