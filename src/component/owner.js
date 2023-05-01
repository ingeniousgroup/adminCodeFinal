import axios from "axios";
import { useEffect, useState } from "react";
import "./owner.css"
import { ToastContainer,toast } from "react-toastify";
function Owner() {
    const [ownerList, setOwnerList] = useState([]);
    const loadOwner = async () => {
        try {
            let response = await axios.post("/admin/view_owners", { role: 'owner' });
            setOwnerList(response.data.ownerList);
        }
        catch (error) {
            console.log(error);
        }
    }


    const ownerRemove=async(id)=>{
         let response = await axios.post("/admin/remove_owner",{id});
         
         ownerList.findIndex((owner,index)=>{
             if(owner._id==id){
                 ownerList.splice(index,1);
                setOwnerList([...ownerList]);
             }
         });

    }


    useEffect(() => {
        loadOwner();
    }, []);


    return <>
    <ToastContainer/>
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-9 " style={{ marginTop: "50px", marginLeft: '90px' }}>
                <div className="card1 ">
                    <h3 className="card">Owner List</h3>
                    <div className="  ">
                        <div className="table-responsive">
                            <table className="table ">
                                <thead className="text-center">
                                    <tr id="th" >
                                        <td> S.No </td>
                                        <td> Name </td>
                                        <td> Email </td>
                                        <td> Contact </td>
                                        <td> Remove </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ownerList.map((data, index) => <tr><td>{index + 1}</td>
                                        <td>{data.name.substring(0,1).toUpperCase()}{data.name.substring(1)}</td>
                                        <td id="emai">{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td ><button className="btn btn-secondary" style={{color:"red"}} onClick={()=>ownerRemove(data._id)}>Delete</button></td>
                                    </tr>
                                    )} </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </>
}
export default Owner;




