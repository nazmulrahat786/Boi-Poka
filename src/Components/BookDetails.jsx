import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../uitilis/addToDB';
import Swal from 'sweetalert2'

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);

  if (!singleBook) {
    return <h2 className="text-center text-red-500 mt-10">Book not found</h2>;
  }


  const {
    bookname,
    author,
    category,
    image,
    publisher,
    rating,
    yearOfPublishing,
    totalPages,
    review
  } = singleBook;



const handleMarkAsRead = id =>{

addToStoreDB(id)

}



  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Book Image */}
        <div className="flex justify-center items-center">
          <img 
            src={image} 
            alt={bookname}
            className="w-72 h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{bookname}</h1>
          
          <p className="text-lg text-gray-600">
            By <span className="font-semibold">{author}</span>
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {category}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {publisher}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <p><span className="font-semibold">📅 Year:</span> {yearOfPublishing}</p>
            <p><span className="font-semibold">📄 Pages:</span> {totalPages}</p>
            <p><span className="font-semibold">⭐ Rating:</span> {rating}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Review</h2>
            <p className="text-gray-700 leading-relaxed">
              {review}
            </p>
          </div>

          {/* Buttons */}
          <div  className="flex gap-4 mt-6">
            <button onClick={()=>{
              handleMarkAsRead(id)
            }} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
             Mark to Read 
            </button>
            <button className="border border-gray-400 hover:bg-gray-100 px-5 py-2 rounded-lg transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;