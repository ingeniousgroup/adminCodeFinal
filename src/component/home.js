
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Siderbar from "./siderbar";
import ChangePassword from "./CahngePassword/changePassword";
import SignIn from "../component/signIn/signIn";
import SignUp from "../component/signUp/signUp";
import Owner from "../component/owner";
import HouseRequest from "../component/viewHouseRequest";
import CardDemo from "../component/balance/viewBalance";
import ProtectedRoute from "./protectedRoute/protectedRoute"
import Customer from "../component/viewCustomer"
function Home() { 
  return <>
    <Navbar />
    <Siderbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />

      <Route path="/viewOwner" element={<ProtectedRoute><Owner /></ProtectedRoute>} />
      <Route path="/viewCustomer" element={<ProtectedRoute><Customer /></ProtectedRoute>} />
      <Route path="/viewHouseRequest" element={<HouseRequest />} />
       <Route path="/viewBalance" element={<ProtectedRoute>  <CardDemo /> </ProtectedRoute>} />
      <Route path="/ChangePassword" element={<ChangePassword />} /> 
    </Routes>
  </>
}
export default Home;