import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../customHooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Spinner from '../components/shared/Spinner';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/equipment/${id}`);
                setProduct(res.data);
                setLoading(false);
                //console.log(res.data);
            } catch (error) {
                //console.log(error)
                Swal.fire({
                    title: "Error",
                    text: "Product Data Can't be Loaded",
                    icon: "error"
                })
            }
        };
        fetchData();
    }, []);
    const handleBuy=()=>{
        Swal.fire({
            title: "Success",
            text: "Product purchase successfully.",
            icon: "success"
        })
    }
    return (
        <>
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className="grid md:grid-cols-2 w-full justify-center items-center bg-base-100 shadow-md border border-gray-200 rounded-2xl">
                        <figure className="p-4 w-full h-full flex justify-center items-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-lg"
                            />
                        </figure>
                        <div className="card-body p-6 space-y-4">
                            <h2 className="card-title text-xl font-semibold text-gray-800">{product.itemName}</h2>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Category:</strong> {product.categoryName}
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Description:</strong> {product.description}
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Price: </strong>
                                <span className="badge badge-accent">${product.price}</span>
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Rating: </strong>
                                <span className="text-yellow-500 font-bold">{product.rating} ⭐</span>
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Customization: </strong> {product.customization}
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Processing Time:</strong> {product.processingTime}
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Stock Status: </strong>
                                <span className={product.stockStatus > 0 ? "badge badge-success" : "badge badge-error"}>
                                    {product.stockStatus > 0 ? `Available` : "Out of stock"}
                                </span>
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Owner Email: </strong> {product.userEmail}
                            </p>

                            <p className="text-sm text-gray-600">
                                <strong className="font-medium">Owner Name: </strong> {product.userName}
                            </p>

                            <div className="card-actions">
                                <button className="btn btn-accent" onClick={handleBuy}>Buy Now</button>
                            </div>
                        </div>
                    </div>

            }
        </>
    );
};

export default ProductDetails;