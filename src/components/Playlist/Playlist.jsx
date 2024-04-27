

function Playlist({value, onChange}) {


return (
    <div>
        
        <input 
        id="Playlist Name" 
        type="text"  
        placeholder="Playlist Name"
        value={value}
        onChange={onChange}
        />
       
    </div>
)
}

export default Playlist;