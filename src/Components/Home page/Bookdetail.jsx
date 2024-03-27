import { useLoaderData, useParams } from "react-router-dom";


const Bookdetail = () => {
    const allBookes = useLoaderData();
    // console.log(allBookes);
    const { id } = useParams();
    const book = allBookes.find(book => book.id == id)
    console.log(book , id);
    // console.log(book,id);


    return (
        <div>
            <h1>book name : </h1>
        </div>
    );
};

export default Bookdetail;