import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const Login = () => {
    const { singnIn } = useContext(AuthContex)
    const handeleLogin = e => {
        e.preventDefault()
        // console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const email = from.get("email")
        const password = from.get("password")
        
        singnIn(email,password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10">
                <h2 className="text-3xl text-center">Please Login</h2>
                <div>
                    <form onSubmit={handeleLogin} className="md:w-3/4 lg:1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mt-6">DO not account go to <Link to="/register" className="font-bold text-blue-600 underline">Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;