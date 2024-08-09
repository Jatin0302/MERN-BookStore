import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(book);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <BackButton />
        <h1 className="text-3xl my-4 flex justify-center items-center mx-auto">
          Show Book
        </h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex mx-auto justify-center ">
  <div className="flex flex-col border-2 border-green-400  rounded-2xl shadow-lg w-fit p-6">
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Id</span>
      <span className="text-gray-700">{book._id}</span>
    </div>
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Title</span>
      <span className="text-gray-700">{book.title}</span>
    </div>
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Author</span>
      <span className="text-gray-700">{book.author}</span>
    </div>
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Publish Year</span>
      <span className="text-gray-700">{book.publishYear}</span>
    </div>
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Create Time</span>
      <span className="text-gray-700">{new Date(book.createdAt).toString()}</span>
    </div>
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-800 font-semibold">Last Update Time</span>
      <span className="text-gray-700">{new Date(book.updatedAt).toString()}</span>
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default ShowBook;
