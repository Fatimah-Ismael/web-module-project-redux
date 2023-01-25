export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
//CREATE ADD MOVIE ACTION 
export const addMovie = (movie) => {
    return ({type: ADD_MOVIE, payload:movie})
}