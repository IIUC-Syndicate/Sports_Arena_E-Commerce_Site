
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../components/shared/SocialLogin";
import Lottie from 'lottie-react';
import registerAnimation from '../assets/register.json';
import useAuth from "../customHooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Register = () => {
    const { createUser, updateInfo } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation();
    const redirectTo = location.state?.from || '/';
    const navigate = useNavigate();
    const onSubmit = data => {
        //console.log(data);
        createUser(data.email, data.password)
        .then(res => {
            //console.log(res);
            updateInfo(data.name, data.photoURL)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Register & Login Success!",
                });
                navigate(redirectTo, { replace: true });
            })
            .catch(errors => {
                //console.error(errors);
                Swal.fire({
                    icon: "warning",
                    title: "Warning",
                    text: "Failed to upload photo but registered success.",
                });
            })
        })
        .catch(errors => {
            //console.error(errors);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to register & login. Please try again.",
            });
        });
    };
    return (
        <div>
            <div className="w-full h-full grid md:grid-cols-2 justify-center items-center">
            <Lottie animationData={registerAnimation} className="hidden md:block"></Lottie>
                <div className="card bg-base-100 w-full max-w-lg rounded-2xl shrink-0 shadow-md border border-gray-100 p-5">
                    <h2 className="text-center text-2xl font-semibold py-5">Register Here</h2>
                    <div className="divider py-0 m-0 px-10"></div>
                    <form className="px-10 py-5 grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" {...register("name", { required: "Name is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                            <p className="text-red-500">{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                            <p className="text-red-500">{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" {...register("photoURL", { required: "Photo url is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                            <p className="text-red-500">{errors.photoURL?.message}</p>
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
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn btn-accent rounded-none w-full">Register</button>
                        </div>
                        <div className="py-2">
                            <p className="text-center">Already Have An Account ? <Link to={'/login'} state={{ from: redirectTo }} className="text-accent font-semibold hover:underline">Login</Link></p>
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;