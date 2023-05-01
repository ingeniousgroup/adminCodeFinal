import { useState } from 'react';
import './signIn.css';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { setAdmin } from '../../reudux-config/adminSlice';
function SignIn() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            let response = await axios.post("/admin/signin",{email,password});
            console.log(response.data)
            dispatch(setAdmin(response.data.user));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return <>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8  mt-5'>
            <section className="section container ml-5 ">
            <div className="row " style={{ boxShadow: "5px 8px 15px black" }}>
                <div className="col-md-6 p-0">
                    <img src="https://media.istockphoto.com/id/511774103/photo/modern-home-at-dusk.jpg?s=612x612&w=0&k=20&c=WQt2GNcTo5-3xckrPZVJimMtjUPA6z3c0Xc1q2w0Nh8=" id="logimg" height={491} width="100%" alt="" />
                </div>
                <div className="col-md-6" id="sec">
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <h1 id="log">
                            <b>Login Here</b>
                        </h1>
                        <br />
                        <input
                            onChange={(event)=>setEmail(event.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="  email......"
                        />
                        <br />
                        <br />
                        <input
                            onChange={(event)=>setPassword(event.target.value)}
                            type="password"
                            id="pass"
                            name="password"
                            placeholder="  password ......"
                        />
                        <br />
                        <br />
                        {/* <input type="checkbox" id="check" className="mt-1" />
                        <small><Link to="/forgetPassword" className='ms-5' >Forget  Password</Link></small>
                        <br /> */}
                        <br />
                        <button
                            type="submit"
                            id="in"
                            className="btn btn-outline-dark rounded-pill mt-3"
                        >
                            SignIn
                        </button>
                        <br />
                        <br />
                        <br />
                        <Link className='ms-5' to="/signup">
                            <small>New User ?</small>
                        </Link>
                        <br />
                        <br />
                    </form>
                    <hr />
                    <br />
                </div>
            </div>
        </section>
        <br />
        <br />
        <br />



            </div>
        </div>
         </div>
    </>

}

export default SignIn;