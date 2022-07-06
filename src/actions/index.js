// {
// type:'ADD_MOVIES',
// movies:[m1,m2,m3]
// }
// {
// type:'DECREASE_COUNT'
// }


//actions types
export const ADD_MOVIES = 'ADD_MOVIES';

//action creaters
export function addMovies(movies) {
    return {
        type: 'ADD_MOVIES',
        movies
    }
}