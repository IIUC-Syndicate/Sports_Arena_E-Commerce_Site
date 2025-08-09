import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from '../components/shared/SectionTitle';
import useAxiosPublic from '../customHooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';

const MyEquipments = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([])
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/my-equipment?email=${user?.email}`);
                setProducts(res.data);
            } catch (error) {
                //console.log(error)
            }
        };
        fetchData();
    }, [user]);
    //console.log(products);
    const handleDelete = (id) => {
        //console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/delete-equipment/${id}`);
                    //console.log(res.data);
                    if (res.data.acknowledged && res.data.deletedCount > 0) {

                        Swal.fire(
                            'Deleted!',
                            'Your equipment has been deleted.',
                            'success'
                        );
                        setProducts(products.filter(product => product._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'Your equipment has been deleted.',
                            'success'
                        );
                    }
                } catch (error) {
                    //console.log(error);
                    Swal.fire({
                        title: "Error",
                        text: "Failed to delete the equipment",
                        icon: "error"
                    });
                }
            }
        });
    }
    return (
        <>
            <SectionTitle>My Equipments</SectionTitle>
            {
                products.length > 0 ?
                    <table className=" w-full bg-base-100 rounded-2xl overflow-x-scroll">
                        <thead>
                            <tr className='rounded-lg'>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Item Name</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Rating</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map((product, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200 h-fit' : 'bg-base-100'}>
                                    <td className="px-4 py-2 flex justify-center">
                                        <img src={product.image} alt={product.itemName} className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="px-4 text-center">{product.itemName}</td>
                                    <td className="px-4 text-center">{product.categoryName}</td>
                                    <td className="px-4 text-center">${product.price}</td>
                                    <td className="px-4 text-center">{product.rating} ⭐</td>
                                    <td className="space-x-1 text-center">
                                        <Link to={`/update/${product._id}`} className="btn btn-accent">Update</Link>
                                        <button className="btn btn-error" onClick={() => { handleDelete(product._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className='h-10'>

                        </tfoot>
                    </table>
                    :
                    <div className='flex justify-center'>
                        <h2 className='text-center text-3xl md:text-5xl'>Sorry! No equipment data found.</h2>
                    </div>
            }
        </>
    );
};

export default MyEquipments;