import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreBookList } from "../Utillity/LocalStorage";
import ReadBookes from "./ReadBookes";

const ListedBookes = () => {
  const storeBookes = useLoaderData();
  const [BookesStore, setBookesStore] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoreBookList();
    if (storeBookes.length > 0) {
      const bookApplide = storeBookes.filter((item) =>
        storedBookIds.includes(item.id)
      );

      setBookesStore(bookApplide);
    }
  }, []);

  return (
    <div>
      <div className="text-center bg-gray-400 rounded-lg mt-4">
        <h1 className="text-4xl font-bold py-10">Books</h1>
      </div>
      {/* drop down sort button   */}
      
      <div className="text-center mt-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1  bg-[#23BE0A] text-white">
            Short By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Rating</a></li>
            <li><a>Published year</a></li>
            <li><a>Number of pages</a></li>
          </ul>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {BookesStore.map((read) => (
            <ReadBookes key={read.id} BookesStore={read}></ReadBookes>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {BookesStore.map((read) => (
            <ReadBookes key={read.id} BookesStore={read}></ReadBookes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBookes;
