import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBooksList } from "../Utillity/LocalStorage";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bookes = bookData.find((bookes) => bookes.id == idInt);

  const [readStatus, setReadStatus] = useState(false);
  const [wishlistStatus, setWishlistStatus] = useState(false);

  const handleApplyBook = () => {
    saveBooksList(idInt);

    if (readStatus) {
      setReadStatus(true);
      toast.error("All Ready Added to read list 1");
    } else {
      setReadStatus(true);
      toast.success("Added to read list 2");
    }
  };
  const handleWhishlist = () => {
    if (wishlistStatus) {
      toast.error("You have already read this book 3");
    } else {
      setWishlistStatus(true);
      toast.success("Book added to wishlist 4");
    }
  };

  return (
    <div className="mt-10">
      <div className="hero rounded-lg bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-48">
          <div className="text-center lg:text-left flex-1">
            <ToastContainer />
            <h1 className="text-3xl font-bold">{bookes.bookName}</h1>
            <h2 className="my-4">BY: {bookes.author}</h2>
            <hr />
            <h2>{bookes.category}</h2>
            <hr />

            <p className="py-6">{bookes.review}</p>
            <p className="flex my-4">
              Tag :
              {bookes.tags.map((item, idx) => (
                <p key={idx} className="text-[#23be0a] text-xl mx-3">
                  {item}
                </p>
              ))}
            </p>
            <hr />
            <div className="space-y-4 ">
              <h1>Number of Pages: {bookes.totalPages}</h1>
              <h1>Publisher: {bookes.publisher}</h1>
              <h1>Year of Publishing: {bookes.yearOfPublishing}</h1>
              <h1>Rating: {bookes.rating}</h1>
            </div>

            <div className="mt-4">
              <Link
                onClick={handleApplyBook}
                className="btn btn-outline btn-success"
              >
                Read
              </Link>
              <Link onClick={handleWhishlist} className="btn ml-4 btn-success">
                Wishlist
              </Link>
            </div>
          </div>

          {/* image  */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
            <img src={bookes.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
