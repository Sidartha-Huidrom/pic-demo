import React, { useState, useEffect } from 'react';
import './assets/main.css';
import ImageCard from './components/image_card';
import ImageSearch from './components/image_search';
import AppBar from './components/appbar';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [term])


  return (
    <div className="container mx-auto"> 
      <AppBar/>
      
      <ImageSearch searchText={(text) => setTerm(text)}/>
      
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}

      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> : 
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />
        })}
      </div>}
    </div>
  );
}

export default App;
