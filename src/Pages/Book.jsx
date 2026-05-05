import React, { use } from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookId, bookName, image, author } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 p-3 w-96 border shadow-sm">
        <figure>
          <img className="h-44" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{bookName}</h2>
          <p className="text-sm font-bold">Writter {author}</p>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
