import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home";
import BookDetails from "../Components/BookDetails";
import ReadList from "../uitilis/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/public/booksData.json"),
      },
      {
        path: "/bookDetails/:id",
            loader: () => fetch("/public/booksData.json"),

        Component: BookDetails ,

      },
      {
        path: "/readList",
            loader: () => fetch("/public/booksData.json"),

        Component:ReadList ,

      },
    ],
  },
]);
