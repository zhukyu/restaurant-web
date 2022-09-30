import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const loginSubmit = () => {
        navigate('/')
    }
    return (
        <div className='Login' style={{width: "100vw", height: "100vh"}}>
            <div className="container py-5">
                <div className="row justify-content-center d-flex">
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className="card-header">
                                <h4 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Login
                                    <Link to={'/'} className="btn btn-primary justify-center py-2 px-4 border float-end">Back</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form className='form-login' onSubmit={loginSubmit}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <div className="my-1 flex rounded-md shadow-sm">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                />
                                            </div>
                                                <span className='text-sm font-medium text-danger'>{}</span>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="form-control focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                />
                                            </div>
                                                <span className='text-sm font-medium text-danger'>{}</span>
                                            <div className='form-group '>
                                                <button type="submit" className='btn btn-primary justify-center py-2 px-4 border mt-3 float-end'>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login