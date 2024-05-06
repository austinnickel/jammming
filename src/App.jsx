import { useCallback, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import SpotifyAccessToken from './components/SpotifyAccessToken/SpotifyAccessToken';
import './App.css'


function App() {
  const  [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback((term) => {
    SpotifyAccessToken.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);

  const removeTrack = useCallback((track) => {
  
  setPlaylistTracks((prevTracklist) =>  prevTracklist.filter((currentTrack) => currentTrack.id !== track.id));

  }, []);

  const changePlaylistName = useCallback((name) => {
  setPlaylistName(name);
  }, []);



  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    SpotifyAccessToken.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
 
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>
        Jammming
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={changePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App
