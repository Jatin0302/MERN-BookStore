import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
    .then((response) => {
        console.log(response)
        setAuthor(response.data.book.author);
        setPublishYear(response.data.book.publishYear)
        setTitle(response.data.book.title)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center'>
      <BackButton />
      <h1 className='text-3xl my-4 flex justify-center items-center mx-auto'>Edit Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-gray-300 rounded-xl w-[600px] p-6 mx-auto bg-white bg-opacity-70 backdrop-blur-lg shadow-lg'>
  <div className='my-4'>
    <label className='text-xl font-semibold mr-4 text-gray-700'>Title</label>
    <input
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className='border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500'
    />
  </div>
  <div className='my-4'>
    <label className='text-xl font-semibold mr-4 text-gray-700'>Author</label>
    <input
      type='text'
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      className='border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500'
    />
  </div>
  <div className='my-4'>
    <label className='text-xl font-semibold mr-4 text-gray-700'>Publish Year</label>
    <input
      type='number'
      value={publishYear}
      onChange={(e) => setPublishYear(e.target.value)}
      className='border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500'
    />
  </div>
  <button
    className='p-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold rounded-lg m-8 hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500'
    onClick={handleEditBook}
  >
    Save
  </button>
</div>

    </div>
  )
}

export default EditBook