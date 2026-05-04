import React, { Suspense, useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ books }) => {
  // const [books,setBooks] = useState([])

  //     useEffect( ()=>{
  //               fetch("/public/booksData.json")
  //         .then(res => res.json())
  //         .then(data =>{
  //             console.log(data);
  //         })

  //     },[]
  //   )
  // const books =  fetch("/public/booksData.json")
  //         .then(res => res.json())

  return (
    <div>
      <h1 className="text-center m-5 text-2xl font-bold">Books</h1>

      <Suspense fallback={<span>Loading........</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto items-center gap-10 justify-center ">
          
          {books.map((singleBook) => (
            <Book singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
