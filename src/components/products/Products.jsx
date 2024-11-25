import "./Product.css"

const Products = () => {

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const products = [
    {
      id: 1,
      name: "Special Coffee Gold",
      rating: StarRating(5),
      price: "$29.99",
      image: "./src/assets/product__img.svg"
    },
    {
      id: 2,
      name: "Special Coffee Silver",
      rating: StarRating(5),
      price: "$24.99",
      image: "./src/assets/product__img.svg"
    },
    {
      id: 3,
      name: "Special Coffee Bronze",
      rating: StarRating(5),
      price: "$19.99",
      image: "./src/assets/product__img.svg"
    }
  ];

  return (
    <section className="products__popular text-light-text py-20">
      <div className="products__type">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {products.map((product) => (

          <div key={product.id} className="bg-black/30 rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-64 object-cover rounded-lg mb-4"
            />
          </div>
        ))}
      </div>
      <button className="btn__card">
        VIEW ALL PRODUCTS
      </button>
      </div>
      
      
      
      <div className="products">
      <div className="category__text__gold">
        <p>Popular Product</p>
      </div>
      <h2 className="category__text font-bold mb-12 text-center">Coffee Popular Product</h2>
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {products.map((product) => (
          <div key={product.id} className="bg-black/30 rounded-lg p-6 flex flex-col items-center">
            <img  
              src={product.image}
              alt={product.name}
              className="w-48 h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <StarRating rating={product.rating} />
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <button className="btn__card">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <button className="btn__card">
        VIEW ALL PRODUCTS
      </button>
      </div>

      {/* Machine Section */}
      <div className="grid__machine">
        <div className="flex justify-center">
          <img
            src="./src/assets/blender.png"
            alt="Coffee Machine"
            className="w-full max-w-md rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Coffee machine buy for home</h2>
          <p className="text-gray-300 mb-6">
            Experience cafe-quality coffee in the comfort of your home with our premium coffee machines. 
            Perfect for coffee enthusiasts who appreciate the art of brewing.
          </p>
          <button className="btn__card hover:bg-[#B88E5F] text-white px-8 py-3 rounded-full transition-all duration-300">
            Discover Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;