import { IoLocationOutline, IoPersonAdd, MdOutlineContactPage  } from "react-icons/io5";

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
    totalPages
  } = BookesStore;
  return (
    <div className="mb-4 ">
      <div className="p-5 card card-side bg-base-100 shadow-xl">
        <img src={image} alt="" />

        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>

          {/* Tags  */}
          <div className="flex ">
            <div className="flex-1">
              <p className="flex my-4 w-16 font-bold">
                Tag:
                {tags.map((item, idx) => (
                  <p key={idx} className="text-[#23be0a] ml-4 flex-1">
                    {item}
                  </p>
                ))}
              </p>
            </div>
            <div className="mr-10">
              <h3 className="flex gap-4 justify-center items-center text-lg font-semibold">
                <IoLocationOutline />
                Year of Publishing: {yearOfPublishing}
              </h3>
            </div>
          </div>
          {/* publisher  */}
          <div className="flex items-center">
            <h2 className="flex gap-2 items-center">
              <IoPersonAdd />
              Publisher: {category}
            </h2>
            <h2 className="flex items-center"><MdOutlineContactPage /> Page : {totalPages}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookes;
