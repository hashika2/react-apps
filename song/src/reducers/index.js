import {combineReducers} from 'redux';

const songReducer=()=>{
    return[
        {title:'No matter',duration:'2.56'},
        {title:'what i do you', duration:'2.30'},
        {title:'known', duration:'2.30'},
        {title:'Sunney', duration:'4.30'}
    ];
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});