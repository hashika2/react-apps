import React from 'react';
import {connect} from 'react-redux';


const SongDetails=({song})=>{
    if(!song){
        return <div>Select a Song</div>
    }
    console.log(song);
    return(
    <div>
        <h1>Details for :</h1>
        <p>{song.title}  <br></br>
           {song.duration}
        </p>
        
    </div>)
}
const mapStateToProps=(state)=>{
    return{song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);