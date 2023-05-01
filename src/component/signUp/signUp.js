import axios from 'axios';
import "../signIn/signIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../navbar';
import { Navigate } from 'react-router-dom';
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let response = await axios.post('/admin/signup', { name, email, password, contact });
            if (response.data.status)
                navigate('/signIn')
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2'>

                </div>
                <div className='col-lg-8'>
                    <section className="section container">
                        <div className="row " style={{ boxShadow: "5px 8px 15px black" }}>
                            <div className="col-md-6 p-0">
                                <img src="https://media.istockphoto.com/id/511774103/photo/modern-home-at-dusk.jpg?s=612x612&w=0&k=20&c=WQt2GNcTo5-3xckrPZVJimMtjUPA6z3c0Xc1q2w0Nh8=" id="logimg" height={491} width="100%" alt="" />
                            </div>
                            <div className="col-md-6" id="sec">
                                <br />
                                <hr />

                                <form onSubmit={handleSubmit}>
                                    {success && <div class="alert alert-danger" role="alert">
                                        {success}
                                    </div>
                                    }

                                    <h1 id="log">
                                        <b>Register Here</b>
                                    </h1>
                                    <br />
                                    <input
                                        onChange={(event) => setName(event.target.value)}
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder=" Username......"
                                    />
                                    <br />
                                    <br />
                                    <input
                                        onChange={(event) => setEmail(event.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder=" email......"
                                    />
                                    <br />
                                    <br />
                                    <input
                                        onChange={(event) => setPassword(event.target.value)}
                                        type="password"
                                        id="pass"
                                        name="password"
                                        required
                                        placeholder=" password ......"
                                    />
                                    <br />
                                    <br />
                                    <input
                                        onChange={(event) => setContact(event.target.value)}
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        required
                                        placeholder=" Contact......"
                                    />

                                    <br />

                                    <button
                                        type="submit"
                                        id="in"
                                        className="btn btn-outline-dark rounded-pill mt-4">
                                        SignUp
                                    </button><br /><br /><br />
                                    <Link to="/signIn" className='ms-5'>
                                        <small>Existing User ?</small>
                                    </Link>
                                    <br />
                                    <br />
                                </form>
                                <hr /><br />
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
export default SignUp;
