import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr>
          <th className="text-center px-6 py-3 border-b-2 border-gray-200 bg-gray-50  text-lg font-semibold text-gray-600    tracking-wider">
            No.
          </th>
          <th className="text-center px-6 py-3 border-b-2 border-gray-200 bg-gray-50  text-lg font-semibold text-gray-600 uppercase tracking-wider">
            Title
          </th>
          <th className="text-center px-6 py-3 border-b-2 border-gray-200 bg-gray-50  text-lg font-semibold text-gray-600 uppercase tracking-wider max-md:hidden">
            Author
          </th>
          <th className="text-center px-6 py-3 border-b-2 border-gray-200 bg-gray-50  text-lg font-semibold text-gray-600 uppercase tracking-wider max-md:hidden">
            Publish Year
          </th>
          <th className="text-center px-6 py-3 border-b-2 border-gray-200 bg-gray-50  text-lg font-semibold text-gray-600 uppercase tracking-wider">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="px-6 py-4 border-b border-gray-200 text-base text-center">
              {index + 1}
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-base text-center">
              {book.title}
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-base text-center max-md:hidden">
              {book.author}
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-base text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-base text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/info--v1.png"
                    alt="info--v1"
                  />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/forma-thin-filled/24/edit.png"
                    alt="edit"
                  />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-sharp/24/filled-trash.png"
                    alt="filled-trash"
                  />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
