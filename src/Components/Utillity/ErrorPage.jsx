import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-center text-4xl">Upps!!!</h2>
      <h1 className="text-center text-4xl">This Page Not Found</h1>
      <div className="text-center mt-4">
        <Link className="btn btn-info" to="/">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
