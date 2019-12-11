//action creator
export const selectedSong=(song)=>{
    //return an action
    return{
        type:'SONG_SELECTED',
        payload:song
    };
}