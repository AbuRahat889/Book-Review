
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const BookDetails = () => {
    
    const navigate = useNavigate();

    const handleRead = ()=>{
       navigate(`/ListedBookes`);
    }
    const notify = () => toast("Added in Wishlist!");

  const bookinfo = useLoaderData();
  const { title, id, body } = bookinfo;
  return (
    <div className="mt-10">
        
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <ToastContainer />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Id : {id}</h1>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6">{body}</p>
            
            <button onClick={handleRead} className="btn btn-outline mr-4"><Link>Read</Link></button>
            
            <button onClick={notify} className="btn bg-green-600 text-white"><Link>Wishlist</Link> </button>

          </div>
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <img src="/image/pngwing.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;
