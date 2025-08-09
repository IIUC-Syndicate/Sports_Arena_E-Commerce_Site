import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from '../shared/SectionTitle';
import ProductCard from './ProductCard';
import useAxiosPublic from '../../customHooks/useAxiosPublic';

const Services = () => {
    const [products, setProducts] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/equipment`);
                setProducts(res.data.slice(0, 6));
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
    return (
        <>
            <SectionTitle>Products</SectionTitle>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between py-5'>
                {
                    products && products.map((product, index) =>
                        <ProductCard product={product} key={index}></ProductCard>
                    )
                }
            </div>
        </>
    );
};

export default Services;