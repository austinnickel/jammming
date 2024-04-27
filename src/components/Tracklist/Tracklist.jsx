

function Tracklist({tracks, onRemoveTrack}) {
   

    return (
        <div>
            <ul>
              {tracks.map(track => (
                <li key={track.id}>
                    {track.name} - {track.artist} - {track.album}
                    <button onClick={()=> onRemoveTrack(track.id)}>-</button>
                </li>
              ))}
            </ul>
        </div>
    );
};

export default Tracklist;