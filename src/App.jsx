import { useState } from 'react'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import './App.css'

function App() {
  const [tracklist, setTracklist] = useState(mockPlaylist.tracks);
  const [playlistName, setPlaylistName] = useState(mockPlaylist.name);

  
  
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

const addTrackToPlaylist = (track) => {
  const isDuplicate = tracklist.some(track => track.id === track.id);
  if(!isDuplicate) {
    setTracklist(prevTracklist => [...prevTracklist, track]);
  }
};

const removeTrackFromPlaylist = (trackIdToRemove) => {
  setTracklist(prevTracklist => prevTracklist.filter(track => track.id !== trackIdToRemove));
};

const changePlaylistName = (event) => {
  setPlaylistName(event.target.value);
};

  return (
    <>
    <Playlist onChange={changePlaylistName} />
    <Tracklist tracks={mockPlaylist.tracks} onRemoveTrack={removeTrackFromPlaylist} />
    <SearchResults initialResults={initialResults} onAddTrack={addTrackToPlaylist} />  
    </>
  )
}

export default App
