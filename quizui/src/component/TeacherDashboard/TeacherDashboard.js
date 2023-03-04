import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import './stylex.css'

function TeacherDashboard() {
    return ( 
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <div className="col">
                    <div className="row-md-4 mt-3">
                        <Link to="/student-dashboard/marks"> <button type="button" className="btn btn-warning">Check Result</button></Link>
                        <Link>
                        <button type="button" className="btn btn-info">Create Quiz</button>
                        </Link>
                    


                    </div>
                </div>
                <div className="col">
                    <div className="row-md-4 mt-3">
                    <h3>Posted Quiz</h3>
                    <div className="col-md-10 ">
    <div className="row ">
        <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">DSA</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Computer Network</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3 ">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Data Architect</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Data Science</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">AI & ML</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Oops Concept</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Full Stack</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
            <div className="card l-bg-cherry ml-3">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Mathematics</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex rowxx">
                        <div className="col-8">
                            <h6 className="d-flex align-items-center mb-0">
                                Attampts: 42/80
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Delete
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checks">
                                Update
                            </h6>
                            <h6 className="d-flex align-items-center mb-0 checkss">
                                View Result
                            </h6>

                            
                        </div>
                        
                    </div>
                    <div className="progress mt-1 " data-height="8" >
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
            </div>
        
        
        
    </div>
</div>
                    
                    

                    


                    </div>
                </div>

            </div>
            
{/* <button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button> */}
        </React.Fragment>
     );
}

export default TeacherDashboard;