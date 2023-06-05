import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className='container login'>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0" id='loginUser'>
                            {/* <!-- Nested Row within Card Body --> */}
                            <h1 className='text-center mt-5'>
                                <b> <mark style={{ color: 'white', background: 'none' }}>Digital Library</mark></b>
                            </h1>
                            <div className="row">
                                <div className="col-lg-6" id='customer-login'>
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-white mb-4"><mark style={{ color: 'white', background: 'none', fontWeight: 'bold', textDecoration: 'underline' }}>Customer Login!</mark></h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter your Membership id" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customerCheck" />
                                                    <label className="custom-control-label text-white" htmlFor="customerCheck">Remember
                                                        Me
                                                    </label>
                                                </div>
                                            </div>
                                            <Link to="/customer-portal/customer-dashboard"
                                                className="btn btn-primary btn-user btn-block"
                                                style={{ fontSize: "1rem", color: 'white' }}  >
                                                Login
                                            </Link>
                                            <hr style={{ borderColor: "white" }} />
                                        </form>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html"><mark style={{ color: "red" }}>Forgot Password?</mark></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" id='librarian-login'>
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-white mb-4"><mark style={{ color: 'white', background: 'none', fontWeight: 'bold', textDecoration: 'underline' }}>Librarian Login!</mark></h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" 
                                                    id="exampleInputEmailteach" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPasswordteach" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="librarianCheck" />
                                                    <label className="custom-control-label text-white" htmlFor="librarianCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <Link to="/librarian-portal/librarian-dashboard" className="btn btn-primary btn-user btn-block button-login" style={{ fontSize: "1rem" }}>
                                                Login
                                            </Link>
                                            <hr style={{ borderColor: "white" }} />
                                        </form>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html"><mark style={{ color: "red" }}>Forgot Password?</mark></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login