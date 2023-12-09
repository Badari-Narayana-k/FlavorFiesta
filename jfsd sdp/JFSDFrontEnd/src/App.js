import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./design/Navbar";
import Login from "../src/pages/Login";
import RestaurantHome from "./pages/Restaurant/RestaurantHome";
import Addfood from "./pages/Restaurant/Addfood";
import Deletefood from "./pages/Restaurant/Deletefood";
import Updatefood from "./pages/Restaurant/Updaterfood";
import Orders from "./pages/Restaurant/Orders";
import CustomerHome from "./pages/Customer/CustomerHome";
import Signup from "../src/pages/Signup";
import AdminHome from "./pages/Admin/AdminHome";
import ApproveRestaurants from "./pages/Admin/ApproveRestaurant";
import AllRestaurants from "../src/pages/Admin/AllRestaurants"
import ViewRestaurants from "../src/pages/Customer/ViewRestaurant"
import Hot from "../src/pages/Hot"
import Cart from "./components/CartDetails"
import Success from "./components/Sucess"
import Cancel from "./components/Cancel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from "./components/items"

function App() {
  return (
    <div class="App  col-12 ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/hot" element={<Hot />} />
          <Route exact path="/resthome" element={<RestaurantHome />} />
          <Route exact path="/rest/addfood" element={<Addfood />} />
          <Route exact path="/rest/deletefood" element={<Deletefood />} />
          <Route exact path="/rest/updatefood" element={<Updatefood />} />
          <Route exact path="/rest/orders" element={<Orders />} />
          <Route exact path="/cus/home" element={<CustomerHome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/admin/pending" element={<ApproveRestaurants />} />
          <Route exact path="/admin/viewres" element={<AllRestaurants />} />
          <Route exact path="viewres" element={<ViewRestaurants />} />
          <Route  path='/cart' element={<Cart />}/>
      <Route  path='/sucess' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
      <Route  path='/items' element={<Items />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
