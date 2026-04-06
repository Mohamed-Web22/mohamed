import { Link } from 'react-router-dom';
import { formatPrice, truncateText } from '../../utils/helpers/helpers';

const ProductCard = ({ product }) => {

  return (

    <div className="group block bg-beige rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-navy-dark">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-navy/10">
        <Link
          to={`/products/${product.id}`}
          className=""
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-navy-dark transition-colors">
          {truncateText(product.title, 25)}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-navy">
            {formatPrice(product.price)}
          </span>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.floor(product.rating.rate)
                        ? 'text-[#d2a517]'
                        : 'text-navy/20'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-navy/70">
                ({product.rating.count})
              </span>
            </div>
          )}
        </div>

        {/* Category */}
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-navy/10 text-navy rounded-full capitalize">
            {product.category}
          </span>
        </div>
      </div>

      <div className="relative group p-4 transition-all duration-300">
        <Link to={`/products/${product.id}`} className="bg-navy text-white w-full px-4 py-2 rounded-md absolute top-1/2 left-0 opacity-0 -translate-y-1/2 group-hover:opacity-100 transition-all duration-300 text-center">
          View Details
        </Link>
      </div>

    </div>

  );
};

export default ProductCard; 