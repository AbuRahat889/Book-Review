import { Link, useLoaderData } from "react-router-dom";
import BookItem from "./BookItem";
import bannerImg from "../../../public/image/bannar.png";

const HomePage = () => {
  const BookesData = useLoaderData([]);
  //   console.log(BooksData);
  return (
    <div>
      {/* bannar section  */}
      <div className="hero h-2/4 rounded-3xl mt-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-48">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold mb-10">
              Books to freshen up <br />
              your bookshelf
            </h1>
            <button className="btn bg-[#23be0a] text-white">
             <Link to={'/ListedBookes'}> View The List</Link>
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mt-20">
        Books : {BookesData.length}
      </h1>

      {/* use card */}
      <div  className="grid md:grid-cols-3 gap-4 mt-10">
        {
            BookesData.map( bookes => (
            <BookItem key={BookesData.id} bookes={bookes}></BookItem>
            ))
        }
      </div>
    </div>
  );
};

export default HomePage;
