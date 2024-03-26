import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBookes from "./Components/Listed Books/ListedBookes";
import PagetoRead from "./Components/Page to Read/PagetoRead";
import HomePage from "./Components/Home page/HomePage";
import BookDetails from "./Components/Home page/BookDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        loader: ()=> fetch('/BooksData.json'),
        element: <HomePage></HomePage>,
      },
      {
        path: "/ListedBookes",
        element: <ListedBookes></ListedBookes>,
      },
      {
        path: "/PagetoRead",
        element: <PagetoRead></PagetoRead>,
      },
      {
        path:'/bookes/:id',
        loader:()=> fetch(`/BooksData.json`),
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<BookDetails></BookDetails>
      }
      
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
