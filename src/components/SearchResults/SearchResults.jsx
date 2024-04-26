import {useState} from 'react'


function SearchResults({initialResults}) {
const [result, setResult] = useState(initialResults);
   return (
    <div>
        { results.map(track => (
            <div key={track.id}>
                <p>Name: {track.name}</p>
                <p>Artist: {track.artist}</p>
                <p>Album: {track.album}</p>
            </div>
            ))};
    </div>
   )
};

export default SearchResults;