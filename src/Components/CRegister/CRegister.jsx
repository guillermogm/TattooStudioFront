import React from 'react'
import "./CRegister.css"

export const CRegister = () => {
    return (
        <>
            <div id="principal" className="mb-5">
            <h1 className="text-center mt-5">Login</h1>
                <div className="container">
                    <form className="">
                        <div className="row mb-3 mt-5">
                            <div className="col-sm-3">
                            </div>
                            <label htmlFor="inputEmail" className="col-sm-2 col-xl-1 col-form-label">Email:</label>
                            <div className="col-sm-4">
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>
                            <div className="col-sm-3 col-xl-4">
                            </div>
                        </div>
                        <div className="row mb-3 mt-2">
                            <div className="col-sm-3 ">
                            </div>
                            <label htmlFor="inputPassword" className="col-sm-2 col-xl-1 col-form-label">Password:</label>
                            <div className="col-sm-4">
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                            <div className="col-sm-3 col-xl-4">
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
