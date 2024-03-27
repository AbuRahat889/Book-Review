import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBookes from "./Components/Listed Books/ListedBookes";
import PagetoRead from "./Components/Page to Read/PagetoRead";
import HomePage from "./Components/Home page/HomePage";
// import Bookdetail from "./Components/Home page/Bookdetail";
import BookDetails from "./Components/Home page/BookDetails";
import ErrorPage from "./Components/Utillity/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/BooksData.json"),
        element: <HomePage></HomePage>,
      },
      {
        path: "/ListedBookes",
        element: <ListedBookes></ListedBookes>,
        loader:() => fetch ("/BooksData.json")
      },
      {
        path: "/PagetoRead",
        element: <PagetoRead></PagetoRead>,
        loader: () => fetch ('/BooksData.json'),
      },
      {
        path: "/bookes/:id",
        loader: () => fetch ('/BooksData.json'),
        element: <BookDetails></BookDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
