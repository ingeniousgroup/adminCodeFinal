import { useSelector } from "react-redux";
import Navbar from "../navbar";
import Siderbar from "../siderbar"
import "./viewProfile.css";
import { current } from "@reduxjs/toolkit";
function Profile() {
    const { currentAdmin } = useSelector((state) => state.admin)
    return <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2  ">
                    <Siderbar />
                </div>
                <div className="col-lg-9  text-center " style={{ marginTop: "110px"}}>
                    
                        <div className=" card text-center" >
                            <div id="img" >{currentAdmin.name.substring(0,1).toUpperCase()} </div>
                            <div className="row mt-5 ">
                                <div className="col-lg-4">
                                    <div className="" >Name</div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="card-text">{currentAdmin.name.toUpperCase()}</div>
                                </div>
                            </div>
                            <div className="row  mt-5">
                                <div className="col-lg-4">
                                    <div className="card-text" >Email</div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="card-text" >{currentAdmin.email}</div>
                                </div>
                            </div>
                            <div className="row  mt-5">
                                <div className="col-lg-4">
                                    <div className="card-text" >Contact</div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="card-text" >{currentAdmin.contact}</div>
                                </div>
                            </div>
                            < div className="row  mt-5 mb-5">
                                <div className="col-lg-4">
                                    <div className="card-text" >Available Balance</div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="card-text" >Rs. {currentAdmin.balance}</div>
                                </div>
                            </div>




                        </div>
                    
                </div>
            </div>
        </div>

    </>
}
export default Profile;