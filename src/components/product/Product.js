import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className={`col-lg-4 col-md-6 col-lg-13 my-3`}>
     
      <div className="card p-0 rounded">
        <Link to={`/product/${product._id}`}>
          {product.images.length > 0 && (
            <img
              className="card-img-top m-0"
              src={product.images[0].image}
              alt={product.name}
            />
          )}
        </Link>

        <div className="card-body d-flex flex-column p-3">
          <h5 className="card-title text-center">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          {/* <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width: `${product.ratings/ 5 * 100}%` }}></div>
                    </div>
                    <span id="no_of_reviews">({product.numOfReviews})</span>
                </div> */}
          <p className="card-text text-center">₹{product.price}</p>
          {/* <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}
