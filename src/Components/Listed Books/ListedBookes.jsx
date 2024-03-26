const ListedBookes = () => {
  return (
    <div>
      <div className="text-center bg-gray-400 rounded-lg mt-4">
        <h1 className="text-4xl font-bold py-10">Books</h1>
      </div>

      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Read Books
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ListedBookes;
