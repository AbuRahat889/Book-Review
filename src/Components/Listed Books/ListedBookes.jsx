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
      const bookApplide = storeBookes.filter(item => storedBookIds.includes(item.id))

      setBookesStore(bookApplide);
      // console.log(storeBookes, storedBookIds, bookApplide);
    }
  }, []);

  return (
    <div>
      {/* <h1>listed data length : {BookesStore.length}</h1> */}
      <div className="text-center bg-gray-400 rounded-lg mt-4">
        <h1 className="text-4xl font-bold py-10">Books</h1>
      </div>

      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books"/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {
            BookesStore.map(read => <ReadBookes 
              key={read.id}
              BookesStore={read}></ReadBookes>)
          }
        </div>

        <input type="radio" name="my_tabs_2"role="tab" className="tab"aria-label="Wishlist Books"checked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ListedBookes;
