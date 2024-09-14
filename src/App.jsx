import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import About from "./components/About";
import AlbumList from "./components/AlbumList"
import AlbumDetails from "./components/AlbumDetails";
import AddAlbum from "./components/AddAlbum";
import Footer from "./components/Footer"

import albums from "./data/albums.json";
import Home from "./components/Home";


function App() {

  const [albumsToDisplay, setAlbumsToDisplay] = useState(albums);


  const createAlbum = (albumDetails) => {
    
    // find out id for the album that we want to add
    const albumIds = albumsToDisplay.map((album) => album.id);
    const maxId = Math.max(...albumIds);
    const nextId = maxId + 1;

    const newAlbum = {
      ...albumDetails,
      id: nextId
    }

    const newList = [newAlbum, ...albumsToDisplay];
    setAlbumsToDisplay(newList);

  }

  const deleteAlbum = (albumId) => {
    const newList = albumsToDisplay.filter((element) => {
      return albumId !== element.id;
    });

    setAlbumsToDisplay(newList);
  }


  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumList albumsToDisplay={albumsToDisplay} callbackToDelete={deleteAlbum} />} />
        <Route path="/create" element={<AddAlbum callbackToCreate={createAlbum} />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums/:albumId" element={<AlbumDetails albumsToDisplay={albumsToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer /> 

    </>
  )
}

export default App
