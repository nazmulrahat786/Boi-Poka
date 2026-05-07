import React, { use } from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookId, bookName, image, author , totalPages,rating} = singleBook;
  console.log(singleBook);

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card hover:bg-indigo-300   bg-base-100 p-3  border shadow-xl">
        <figure>
          <img className="h-44" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          
          <h2 className="card-title font-bold">{bookName}</h2>
          <p className="text-sm font-bold">Writter {author}</p>
          <p> Total Pages{totalPages}</p>
          <p>Rating {rating}</p>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          
        </div>
      </div>
    </Link>
  );
};

export default Book;
