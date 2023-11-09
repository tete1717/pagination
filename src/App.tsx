import { useEffect, useState } from 'react'
import './App.css'
import Album from './type';
import Paginate from './Paginate';

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(()=>{
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res) => res.json())
        .then((albums) => setAlbums(albums));
    };
    getAlbums();
  },[]);

  return (
      <div>
        <Paginate albums ={albums} />
      </div>
  );
}

export default App
