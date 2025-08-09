import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";
import Lottie from 'lottie-react';
import loginAnimation from '../assets/login.json';
import useAuth from "../customHooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {

    const { signInUser } = useAuth();
    
    const location = useLocation();
    const redirectTo = location.state?.from || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then(res => {
                //console.error(res);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Login success.",
                });
                navigate(redirectTo, { replace: true });
            })
            .catch(errors => {
                //console.error(errors);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Login failed. Please try again.",
                });
            });
    };
    return (
        <div className="w-full h-full grid md:grid-cols-2 justify-center items-center">
            <Lottie animationData={loginAnimation} className="hidden md:block"></Lottie>
            <div className="card bg-base-100 w-full max-w-lg rounded-2xl shrink-0 shadow-md border border-gray-100 p-5">
                <h2 className="text-center text-2xl font-semibold py-5">Login your account</h2>

                <div className="divider py-0 m-0 px-10"></div>
                <form className="px-10 py-5 grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.{6,})/,
                                    message: "Password must be at least 6 digits long, contain a uppercase letter and a lowercase letter"
                                }
                            })}
                            className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                        <p className="text-red-500">{errors.password?.message}</p>
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    <div className="form-control mt-4">
                        <button className="btn btn-accent rounded-none w-full">Login</button>
                    </div>
                    <div className="py-2">
                        <p className="text-center">Dont’t Have An Account ? <Link to={'/register'} state={{ from: redirectTo }} className="text-accent font-semibold hover:underline">Register</Link></p>
                    </div>
                    <div className="divider">OR</div>
                </form>
                <SocialLogin></SocialLogin>


            </div>
        </div>
    );
};

export default Login;