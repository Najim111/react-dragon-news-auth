import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const Register = () => {
    const {  creatUser } = useContext(AuthContex)


    const handeleRegister = e => {
        e.preventDefault()
        // console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const img = from.get('img')
        const name = from.get('name')
        const password = from.get('password')

        //  creat User
        creatUser(email,password,img,name)
        .then(res =>{
            console.log(res.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10">
                <h2 className="text-3xl text-center">Please Register</h2>
                <div>
                    <form onSubmit={handeleRegister} className="md:w-3/4 lg:1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Img URl</span>
                            </label>
                            <input type="text" required name="img" placeholder="Img " className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mt-6"> Alredy you have account
                        <Link to="/login" className=" font-bold text-blue-600 underline">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;