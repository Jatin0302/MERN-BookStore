import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      {/* <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2> */}
      {/* <h4 className='my-2 text-gray-500'>{book._id}</h4> */}
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1 font-bold text-lg">
          {book.title} ({book.publishYear}) by {book.author}
        </h2>
      </div>
      {/* <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1 font-bold text-lg">{book.author}</h2>
      </div> */}
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        suscipit cumque, fuga tenetur quas dolorum reiciendis officia nobis odio
        ex ab consequuntur ratione sed magnam, molestiae maxime natus architecto
        sequi?
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4 cursor-pointer">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-rounded/24/visible.png"
          alt="visible"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/info--v1.png" alt="info--v1"/>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
        <img width="24" height="24" src="https://img.icons8.com/forma-thin-filled/24/edit.png" alt="edit"/>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/filled-trash.png" alt="filled-trash"/>
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
