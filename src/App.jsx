import { useState } from 'react'
import SearchResults from './components/SearchResults/SearchResults'
import './App.css'

function App() {
  
  const initialResults = [
    {
        name: "Lemonade",
        artist: "Beyonce",
        album: "Lemonade",
        id: "Lemonade-Beyonce"
    },

    {
        name: "Ain't No Thief",
        artist: "Viagra Boys",
        album: "Cave World",
        id: "Ain'tNoThief-ViagraBoys"
    },

    {
        name: "For Whom the Bell Tolls",
        artist: "Metallica",
        album: "Ride the Lightning",
        id: "ForWhomtheBellTolls-Metallica"
    }
]

  return (
    <>
    <SearchResults initialResults={initialResults} />  
    </>
  )
}

export default App
