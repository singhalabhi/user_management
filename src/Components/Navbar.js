import React ,{useState} from 'react'
import { Link , useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate=useNavigate();
    const handleClickev=async(e)=>{
        e.preventDefault();
        localStorage.removeItem("authToken");
        navigate('/Login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-black bg-black ">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 text-light"  to="/">DashBoard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex " id="navbarSupportedContent" style={{justifyContent:'space-between'}}>
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex " style={{alignItems:'center'}}>
                            <li className="nav-item">
                                <Link className="nav-link active Home1 fs-3" aria-current="page" to="/">Home</Link>
                            </li>
                            
                        </ul>
                        
                            <div className='d-flex'>    
                                <Link className="btn text-white fs-5 mx-2 p-1" style={{background:'#3F51B5'}}   to="/Signup">Account Creation</Link>
                                <Link className=" btn text-white fs-5 mx-2 p-1" style={{background:'#3F51B5'}}  to="/">User Details</Link>
                            </div>
                            {/* :
                                <div className='d-flex ' style={{alignItems:'center'}}>
                                    
                                </div> */}
                        
                        

                    </div>
                </div>
            </nav>
        </div>
    )
}
