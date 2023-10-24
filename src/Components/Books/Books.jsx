import { Link } from "react-router-dom";
import { useBooks } from "../../Context/Context";
import { useEffect, useState } from "react";
function Books() {
  const { services } = useBooks();

  const [searchBook, setSearchBook] = useState("");
  const [foundBook, setFoundBook] = useState(null);

  useEffect(() => {
    const book = services.find((book) => book.title === searchBook);
    if (book) {
      setFoundBook(book);
    } else {
      setFoundBook(null);
    }
  }, []);
  return (
    <>
      <div>
        <div className="flex grow my-3 justify-center">
          <input
            className="flex h-10 w-[650px] rounded-md bg-white border-black border-2 mx-4 px-3 py-2 text-sm placeholder:text-gray-900 focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed"
            type="text"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            placeholder="Search Books Here..."
          />
        </div>
      </div>


      <div className="flex justify-evenly flex-wrap gap-4 mx-6 my-4">
        {foundBook ? (
          <div></div>
        ) : (
          services?.map((item, id) => (
            <div className="w-[300px] rounded-md border"  style={{display : searchBook ==="" || item.title.toLowerCase().includes(searchBook.toLowerCase())? "inline-block" : "none"}} key={id}>
             
              <img
                src={item?.image_url}
                alt="Laptop"
                className="h-[280px] w-full"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {item?.title.slice(0, 30) + "..."}
                </h1>
                <p className="mt-3 text-base text-gray-600">
                  <span className="font-semibold">Author:</span> {item?.authors}
                </p>
                <p className="text-sm pt-2">
                  {item?.Quote1.slice(0, 60) + "..."}
                </p>
                <p className="mt-3 text-base text-gray-600">
                  <span className="font-semibold">Ratings:</span> {item?.rating}
                  /5
                </p>
                <Link to={`/bookDetail/${item.id}`}>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </Link>
                <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-red-800 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Books;
