import {useState} from 'react';

function Tracklist({tracks}) {
    const [tracklist, setTracklist] = useState(tracks);

    return (
        <div>
            <ul>
              {tracks.map(track => (
                <li key={track.id}>
                    {track.name} - {track.artist} - {track.album}
                </li>
              ))};
            </ul>
        </div>
    )
};

export default Tracklist;