import React from 'react'

const Dashboard = ({userobj}) => {

    console.log(userobj)

    return (
    <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-black">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" />
                                    <h5>{userobj.name}</h5>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{userobj.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">{userobj.phone}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Address</h6>
                                                <p className="text-muted">{userobj.address}</p>
                                            </div>
                                        </div>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Recent</h6>
                                                <p className="text-muted">Lorem ipsum</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Most Viewed</h6>
                                                <p className="text-muted">Dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
 
export default Dashboard;