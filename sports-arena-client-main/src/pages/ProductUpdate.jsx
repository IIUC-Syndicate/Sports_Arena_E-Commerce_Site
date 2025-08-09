import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Spinner from "../components/shared/Spinner";
import useAxiosPublic from "../customHooks/useAxiosPublic";
import { useEffect } from "react";

const ProductUpdate = () => {
    const { user } = useAuth();
    //console.log(user.name, user.email);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/equipment/${id}`);
                const { itemName, categoryName, description, price, rating, customization, processingTime, image, stockStatus } = res.data;
                setValue("itemName", itemName);
                setValue("categoryName", categoryName);
                setValue("description", description);
                setValue("price", price);
                setValue("rating", rating);
                setValue("customization", customization);
                setValue("processingTime", processingTime);
                setValue("image", image);
                setValue("stockStatus", stockStatus);
                setLoading(false);
                //console.log(res.data);
            } catch (error) {
                //console.log(error)
            }
        };
        fetchData();
    }, []);

    const onSubmit = async (data) => {
        try {
            const res = await axiosPublic.patch(`/update-equipment/${id}`, data);
            //console.log(res.data);
            if (res.data.modifiedCount>0 && res.data.acknowledged) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Data updated successfully",
                });
                navigate(`/my-equipment`);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            //console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred!",
            });
        }
    };
    return (
        <>
            {
                user ?
                    <div className="w-full">
                        <div className="bg-base-100 w-full rounded-2xl shadow-md border border-gray-100 p-5">
                            <h2 className="text-center text-2xl font-semibold py-5">Enter Equipment Information</h2>

                            <div className="divider py-0 m-0 px-10"></div>
                            <form className="px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-2" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" {...register("itemName", { required: "Item name is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.itemName?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input type="text" placeholder="Category" {...register("categoryName", { required: "Category name is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.categoryName?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" {...register("description", { required: "Description is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.description?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" {...register("price", { required: "Price is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.price?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" placeholder="Rating" {...register("rating", { required: "Rating is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.rating?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Customization</span>
                                    </label>
                                    <input type="text" placeholder="Customization" {...register("customization", { required: "Customization is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.customization?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text"> Processing Time</span>
                                    </label>
                                    <input type="text" placeholder="Processing Time" {...register("processingTime", { required: " Processing Time is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.processingTime?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" {...register("image", { required: "Photo URL is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.image?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input type="number" placeholder="Stock Status" {...register("stockStatus", { required: "Stock Status is required" })} className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                    <p className="text-red-500">{errors.stockStatus?.message}</p>
                                </div>


                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Current User Name</span>
                                    </label>
                                    <input value={user.displayName} disabled className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                </div>
                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Current User Email</span>
                                    </label>
                                    <input value={user.email} disabled className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                </div>

                                <div className="form-control mt-4">
                                    <button className="btn btn-accent rounded-none w-full" type="submit">Update Data</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    :
                    <Spinner></Spinner>
            }
        </>
    );
};

export default ProductUpdate;