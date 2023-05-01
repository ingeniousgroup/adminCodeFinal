
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchHouseRequest } from "../reudux-config/houseRequestSlice";
import axios from "axios";

function HouseRequest() {
    const { houseRequestList, error, isLoading } = useSelector((state) => state.houseRequest);
    const dispatch = useDispatch();


    const ownerRequest = async (userId, propertyId) => {
        let response = await axios.post("/admin/owner_request", { userId, propertyId });
        window.alert(response.data.message);
    }


    const requestRemove = async (id) => {
        console.log("---------------------------------------------"+ id);
        let response = await axios.post("/admin/    ", { id });
            window.alert("recjd")
            window.alert(response.data.message);
    }


    useEffect(() => {
        dispatch(fetchHouseRequest());
    }, []);

    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 "></div>
                <div className="col-lg-10">
                    <div style={{ marginTop: "50px", marginLeft: "60px" }} className="row">
                                <div className="card-body">
                                    <h3 className="card">Recent Request </h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="text-center" style={{color:"white"}}>
                                                <tr>
                                                    <th> S.No. </th>
                                                    <th> HouseImage </th>
                                                    <th>  For HouseId </th>
                                                    <th> By UserId </th>
                                                    <th> Message </th>
                                                    <th>Date</th>
                                                    <th>Request</th>
                                                    <th>Send Owner</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {houseRequestList.map((data, index) => <tr>
                                                    <td>{index + 1}</td>
                                                    <td>                                                        <img
                                                        src={data.propertyId.imagesUrlArray[0]}
                                                        className="me-5"
                                                        alt="image"
                                                    />
                                                    </td>
                                                    <td>{data.propertyId._id}</td>
                                                    <td>{data.userId._id}</td>
                                                    <td>{data.message}</td>
                                                    <td>{data.date}</td>
                                                    <td><button className=" btn-success" onClick={() => requestRemove(data._id)}>Accepted</button></td>
                                                    <td><button className=" btn-info" onClick={() => ownerRequest(data.userId, data.propertyId)}>Send </button></td>
                                                </tr>)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            
        
    </>
}
export default HouseRequest;