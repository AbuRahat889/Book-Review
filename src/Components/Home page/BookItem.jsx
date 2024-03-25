import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookItem = ({ bookes }) => {
  const {id, image, bookName, author, rating, tags } = bookes;
  return (
    <div>
      <Link to={`/BookDetails/:${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
          <img src={image} alt="Error" className="rounded-xl" />
        </figure>

        <div className="card-body  ">
          <p className="flex">
            {tags.map((item, idx) => (
              <p key={idx} className="text-[#23be0a] text-xl">
                {item}
              </p>
            ))}
          </p>

          <h2 className="card-title my-4">{bookName} </h2>
          <p className="text-lg text-[#131313cc] work">By : {author} </p>
          <hr />
          <div className="flex justify-between work">
            <h2>Fiction</h2>
            <h2 className="flex items-center justify-center gap-2">
              <span>{rating}</span>
              <CiStar className="text-xl" />
            </h2>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BookItem;
