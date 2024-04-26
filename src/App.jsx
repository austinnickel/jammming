import { useState } from 'react'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import './App.css'

function App() {
  
  const initialResults = [
    {
        name: "Lemonade",
        artist: "Beyonce",
        album: "Lemonade",
        id: 1
    },

    {
        name: "Ain't No Thief",
        artist: "Viagra Boys",
        album: "Cave World",
        id: 2
    },

    {
        name: "For Whom the Bell Tolls",
        artist: "Metallica",
        album: "Ride the Lightning",
        id: 3
    }
];

const mockPlaylist = {
  name: "My New Playlist", 
  tracks: [
    {
      id: 4,
      name: "Damnit",
      artist: "Blink-182",
      album: "Dude Ranch"
    },
    {
      id: 5,
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Zozo"
    },
    {
      id: 6,
      name: "When the Doves Cry",
      artist: "Prince",
      album: "Purple Rain"
    }

  ]
};

  return (
    <>
    <Playlist name={mockPlaylist.name} />
    <Tracklist tracks={mockPlaylist.tracks} />
    <SearchResults initialResults={initialResults} />  
    </>
  )
}

export default App
