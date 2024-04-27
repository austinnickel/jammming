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
      album: "Dude Ranch",
      uri: "spotify:track:6WkSUgo1VdpzgtiXKlFPcY?si=1b16b3e1434e4a83"
    },
    {
      id: 5,
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Zozo",
      uri: "spotify:track:5CQ30WqJwcep0pYcV4AMNc?si=ee7ceee078bd4eaf"
    },
    {
      id: 6,
      name: "When the Doves Cry",
      artist: "Prince",
      album: "Purple Rain",
      uri: "spotify:track:51H2y6YrNNXcy3dfc3qSbA?si=b98f0cef3fb343f0"
    }
  
  ]
  };
  
  const [tracklist, setTracklist] = useState(mockPlaylist.tracks);
  const [playlistName, setPlaylistName] = useState(mockPlaylist.name);

const addTrackToPlaylist = (result) => {
  const isDuplicate = tracklist.some(track => track.id === result.id);
  if(!isDuplicate) {
    setTracklist(prevTracklist => [...prevTracklist, result]);
  }
};

const removeTrackFromPlaylist = (trackIdToRemove) => {
  setTracklist(prevTracklist => prevTracklist.filter(track => track.id !== trackIdToRemove));
};

const changePlaylistName = (event) => {
  setPlaylistName(event.target.value);
};

const savePlaylistAndReset = () => {
  console.log(tracklist.map(track => track.uri));
  setTracklist([]);
  setPlaylistName('');
};

  return (
    <>
    <SearchResults initialResults={initialResults} onAddTrack={addTrackToPlaylist} />
    <Playlist onChange={changePlaylistName} />
    <Tracklist tracks={mockPlaylist.tracks} onRemoveTrack={removeTrackFromPlaylist} />
    <button onClick={savePlaylistAndReset}>Save</button>
    </>
  )
}

export default App
