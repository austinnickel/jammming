

function Tracklist({tracks}) {
   

    return (
        <div>
            <ul>
              {tracks.map(track => (
                <li key={track.id}>
                    {track.name} - {track.artist} - {track.album}
                    <button onClick={()=> onRemoveTrack(track)}>-</button>
                </li>
              ))};
            </ul>
        </div>
    )
};

export default Tracklist;