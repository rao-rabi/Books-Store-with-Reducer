import { useBooks } from "../../Context/Context";
const Cart = () => {
  const { products, removeFromCart } = useBooks();
  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold py-3">CART</h2>
      {products.length === 0 ? (
        <h1 className="font-bold text-center text-red-800 py-5">Your cart is empty.</h1>
      ) : (
        <div className="m-5">
          {products.map((product, index) => (
              <div className="w-full rounded-md border flex mb-4" key={index}>
                  <img
                    src={product.image_url}
                    alt="Laptop"
                    className="h-[220px] w-[180px]"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      {product.title.slice(0, 30) + "..."}
                    </h1>
                    <p className="mt-3 text-base text-gray-600">
                      <span className="font-semibold">Author:</span>{" "}
                      {product.authors}
                    </p>
                    <p className="text-sm pt-2">
                      {product.Quote1.slice(0, 60) + "..."}
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      <span className="font-semibold">Ratings:</span>{" "}
                      {product.rating}
                      /5
                    </p>
                    <button
                    type="button"
                    className="mt-4 w-[200px] rounded-sm bg-red-800 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove From Cart
                  </button>
                  </div>
                </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
