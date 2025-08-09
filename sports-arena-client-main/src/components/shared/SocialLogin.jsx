import { FcGoogle } from "react-icons/fc";
import useAuth from "../../customHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleSign } = useAuth();
    const location = useLocation();
    const redirectTo = location?.state?.from || '/';
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSign()
            .then((res) => {
                Swal.fire({
                    icon: "scuccess",
                    title: "Success",
                    text: "Register & Login Successfully!",
                });
                navigate(redirectTo, { replace: true });
            })
            .catch((err) => {
                //console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Try Again",
                    text: "Oops...Something went wrong!",
                });
            });
    }
    return (
        <div className="flex flex-col gap-2 max-w-[200px] mx-auto">
            <button className="btn btn-neutral" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle> Login with Google</button >
        </div>
    );
};

export default SocialLogin;