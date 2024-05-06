import { useCallback, useState } from 'react'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import SpotifyAccessToken from './components/SpotifyAccessToken/SpotifyAccessToken';
import './App.css'


function App() {
  const  [SearchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback((term) => {
    SpotifyAccessToken.search(term).then(setSearchResults);
  }, []);

  const addTrackToPlaylist = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);

  const removeTrackFromPlaylist = useCallback((track) => {
  
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
    <>
    <SpotifyAccessToken stateLength={10} />
    <SearchResults initialResults={initialResults} onAddTrack={addTrackToPlaylist} />
    <Playlist onChange={changePlaylistName} />
    <Tracklist key={JSON.stringify(tracklist)} tracks={tracklist} onRemoveTrack={removeTrackFromPlaylist} />
    <button onClick={savePlaylistAndReset}>Save</button>
    </>
  )
}

export default App
