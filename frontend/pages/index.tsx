import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from '../components/ImageGrid';
import '../src/app/globals.css';

const Home = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false); // Track if user has performed a search

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (tags = '') => {
    try {
      const response = await axios.get(`/api/images`, {
        params: { tags },
      });
      setImages(response.data.items);
      setSearched(true); // Set searched to true after fetching images
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchImages(search);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-black">Flickr Feed Viewer</h1>
      <form onSubmit={handleSearch} className="mb-4 flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tags..."
          className="border p-2 rounded-l w-full mr-0 focus:outline-none text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
          Search
        </button>
      </form>
      {searched && images.length === 0 && (
        <p className="text-center text-gray-500">No images match your search.</p>
      )}
      <ImageGrid images={images} />
    </div>
  );
};

export default Home;
