import { useParams } from "react-router-dom";
import { useBooks } from "../../Context/Context";

const BookDetails = () => {
  const { services } = useBooks();
  const { id } = useParams();
  const book = services.find(book => book.id === parseInt(id));
  if(!book){
    return <div>no record found</div>
  }
  return (
    <div className="flex md:flex-nowrap flex-wrap mt-5 gap-9 lg:mx-36 md:mx-24 mx-8">
      <div className="h-96">
        <img
          src={book?.image_url}
          alt="Laptop"
          className=" rounded-md h-96 w-[2000px]"
        />
      </div>
      <div className="flex justify-start flex-col">
        <h1 className="font-bold text-3xl">{book?.title}</h1>
        <h1 className="text-lg pt-2">
          <span className="font-bold text-xl">Author: </span>
          {book?.authors}
        </h1>
        <h2 className="font-bold text-2xl pt-2">Description:</h2>
        <p className="text-lg">{book?.description}</p>
        <h1 className="text-lg pt-2">
          <span className="font-bold text-xl">Total Pages: </span>
          {book?.num_pages}
        </h1>
        <h1 className="text-lg pt-2">
          <span className="font-bold text-xl">Ratings: </span>
          {book?.rating}/5
        </h1>
        <h1 className="text-lg pt-2">
          <span className="font-bold text-xl">Quote: </span>
          {book?.Quote2}
        </h1>
      </div>
    </div>
  );
};

export default BookDetails;
