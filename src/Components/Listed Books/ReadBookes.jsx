import { IoLocationOutline, IoPersonAdd } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBookes = ({ BookesStore }) => {
  const {
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
  } = BookesStore;
  return (
    <div className="mb-4 ">
      <div className="p-5 card card-side bg-base-100 shadow-xl">
        <img className=" p-10" src={image} alt="" />

        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>

          {/* Tags  */}
          <div className="flex items-center">
            <div className="">
              <p className="flex my-4 w-16 font-bold">
                Tag:
                {tags.map((item, idx) => (
                  <p key={idx} className="text-[#23be0a] ml-4 flex-1">
                    {item}
                  </p>
                ))}
              </p>
            </div>
            <div className="mr-10 flex-1">
              <h3 className="flex gap-4 justify-center items-center text-lg font-semibold">
                <IoLocationOutline />
                Year of Publishing: {yearOfPublishing}
              </h3>
            </div>
          </div>

          {/* publisher  */}
          <div className="flex items-center gap-20">
            <h2 className="flex gap-2 items-center">
              <IoPersonAdd />
              Publisher : {publisher}
            </h2>
            <h2 className="flex items-center gap-2">
              <MdOutlineContactPage></MdOutlineContactPage> Page : {totalPages}
            </h2>
          </div>
          <hr />

          {/* under hr line  */}
          <div className="flex gap-3">
            <button className="bg-[#328eff52] p-3 rounded-full">
              Catagori : {category}
            </button>
            <button className="bg-[#ffad3377] p-3 rounded-full">
              Catagori : {rating}
            </button>
            <button className="bg-[#23BE0A] p-3 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookes;
