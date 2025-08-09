import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, image, itemName, categoryName, price, rating } = product;
    return (
        <div className="card bg-base-100 rounded-none shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={itemName}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="text-lg font-bold px-2 py-1 rounded-full w-full text-center">{itemName}</h2>
                <p>Category: <span className='font-bold'>{categoryName}</span></p>
                <p>Price: <span className='bg-yellow-600/30 rounded-full px-4 font-bold'>{price}</span></p>
                <p>Rating: <span className='bg-yellow-600/30 rounded-full px-4 font-bold'>{rating}</span></p>
                <Link to={`/equipment-details/${_id}`} className="btn btn-accent w-full">View Details</Link>

            </div>
        </div>
    );
};

export default ProductCard;