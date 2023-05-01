
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./balance.css"
// import { useSelector } from "react-redux";
function Balance() {
//  const{currentAdmin}=useSelector((state)=>state.currentAdmin)
    const [Balance, setBalance] = useState("");

    const loadBalance = async () => {

        let response = await axios.post("/admin/view_balance", { email: "riya@gmail.com" });
        setBalance(response.data.balance)
    }


    useEffect(() => {
        loadBalance();
    }, [])

    return <>
    <div className="container">
    <div className="row">
            <div className="col-lg-2">
         </div>
            <div className="col-lg-7" style={{ marginTop: "170px", marginLeft: '20px' }}>
            
               <div className="row " id="row">
                <div className="col-lg-5 " >
                    <img id="image" src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg"></img>
                </div>
                <div className="col-lg-5 " >
                  <h3>Available Balance is</h3>
                  <p id="rs">Rs.345678</p>
                  <h3>Account Of</h3>
                  <p id="rs">riya@gmail.com</p>
                </div>

               </div>
            </div>
        </div>
    </div>

    </>

}
export default Balance;