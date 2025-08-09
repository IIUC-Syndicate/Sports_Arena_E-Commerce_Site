import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from '../components/shared/SectionTitle';
import useAxiosPublic from '../customHooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const AllEquipment = () => {
    const [products, setProducts] = useState()
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/equipment`);
                setProducts(res.data);
            } catch (error) {
                //console.log(error)
                Swal.fire({
                    title: "Error",
                    text: "Products Data Can't be Loaded",
                    icon: "error"
                })
            }
        };
        fetchData();
    }, []);
    const handleSort = () =>{
        // sorting logic here
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts(setProducts);
    }
    return (
        <>
            <SectionTitle>All Equipments</SectionTitle>
            <div className='w-full flex justify-center py-2'>
                <button className='btn btn-accent' onClick={handleSort}>Sort by price</button>
            </div>
            {/* table */} 
            <table className="table-auto w-full bg-base-100 rounded-2xl overflow-x-scroll">
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
                        <tr key={index} className={index%2===0?'bg-gray-200':'bg-base-100'}>
                            <td className="px-4 py-2 flex justify-center">
                                <img src={product.image} alt={product.itemName} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 text-center py-2">{product.itemName}</td>
                            <td className="px-4 text-center py-2">{product.categoryName}</td>
                            <td className="px-4 text-center py-2">${product.price}</td>
                            <td className="px-4 text-center py-2">{product.rating} ⭐</td>
                            <td className="px-4 text-center py-2">
                            <Link to={`/equipment-details/${product._id}`} className="btn btn-accent w-full">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='h-10'>

                </tfoot>
            </table>
        </>
    );
};

export default AllEquipment