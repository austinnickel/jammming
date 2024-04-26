import {useState} from 'react';

function Playlist({name}) {
const [playListName, setPlayListName] =useState(name);

return (
    <div>
        <h2>Playlist Name: {name}</h2>
    </div>
)
}

export default Playlist;