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
  
  setTracklist(prevTracklist =>  prevTracklist.filter(track => track.id !== trackIdToRemove));

};

const changePlaylistName = (event) => {
  setPlaylistName(event.target.value);
};

const savePlaylistAndReset = () => {
  console.log(tracklist.map(track => track.uri));
  setTracklist([]);
  setPlaylistName('');
};

const client_id = 'd90891e3a05449b5992d7c531d9a8cc1';
const redirect_uri = 'http://localhost:5173/';

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}  

const state = generateRandomString(16);


const scope ="user-read-private playlist-modify-private playlist-modify-public";

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&state=' + encodeURIComponent(state);

const params = new URLSearchParams(window.location.hash.substring(1));
const accessToken = params.get('access_token');
const tokenType = params.get('token_type');
const expiresIn = parseInt(params.get('expires_in'));

if(accessToken) {

localStorage.setItem('access_token', accessToken);
localStorage.setItem('token_type', tokenType);
localStorage.setItem('expires_at', Date.now() + expiresIn * 1000);

window.history.replaceState({}, document.title, window.location.pathname);

} else {
  alert("Error: Access denied. Please log in and grant access to your Spotify account.");
};

const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('expires_at');
  return Date.now() > expiresAt;

};

const handleTokenExpiration = () => {
  if(isTokenExpired()) {
    alert("Your Spotify access has expired. Please login again.");
    window.location = 'https://accounts.spotify.com/authorize?client_id=d90891e3a05449b5992d7c531d9a8cc1&redirect_uri=http://localhost:5173/&scope=user-read-private,playlist-modify-private,playlist-modify-public&response_type=token';
  }
};

useEffect(() => {
  handleTokenExpiration();
},[]);

  return (
    <>
    <SearchResults initialResults={initialResults} onAddTrack={addTrackToPlaylist} />
    <Playlist onChange={changePlaylistName} />
    <Tracklist key={JSON.stringify(tracklist)} tracks={tracklist} onRemoveTrack={removeTrackFromPlaylist} />
    <button onClick={savePlaylistAndReset}>Save</button>
    </>
  )
}

export default App
