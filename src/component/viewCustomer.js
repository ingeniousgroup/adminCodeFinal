import axios from "axios";
import { useEffect, useState } from "react";
import "./owner.css"
function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const loadOwner = async () => {
        let response = await axios.post("/admin/view_tenants", { role: 'tenant' });
        console.log(response.data)
        setCustomerList(response.data.tenantList);
    }

    const removeCustomer = async (id) => {
        if (window.confirm("are you sure to delete customer")) {
            let response = await axios.post("/admin/remove_tenant", { id });

            customerList.findIndex((customer, index) => {
                if (customer._id == id) {
                    customerList.splice(index, 1);
                    setCustomerList([...customerList]);
                }
            });
        }
    }


    useEffect(() => {
        loadOwner();
    }, []);
    return <>
        <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-9 " style={{ marginTop: "50px", marginLeft: '90px' }}>
                {/* <div className="card"> */}
                    <h3 className="card ">Customers List</h3>

                        <div className="table-responsive">
                            <table className="table">

                                <thead className="text-center">
                                    <tr id="th">
                                        <td> S.No </td>
                                        <td> Name </td>
                                        <td> Email </td>
                                        <td> Contact </td>
                                        <td> Remove </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerList.map((data, index) => <tr><td>{index + 1}</td>
                                        <td>{data.name.substring(0, 1).toUpperCase()}{data.name.substring(1)}</td>
                                        <td id="emai">{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td ><button className="btn btn-secondary" style={{ color: "red" }} onClick={() => { removeCustomer(data._id) }}>Delete</button></td>
                                    </tr>
                                    )} </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            {/* </div> */}
        




    </>
}
export default Customer;