
export const GET_DATA = 'GET_DATA'
export const GET_MOVIES1 = 'GET_MOVIES1'
export const GET_MOVIES2 = 'GET_MOVIES2'

 





const MOVIESLIST1_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41';

export const moviesList = () => {
    try {
        return async dispatch => {
            const result = await fetch(MOVIESLIST1_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await result.json();
            
            const genres = data.genres
            console.log('check data',genres);

            if (genres) {
                dispatch({
                    type: GET_MOVIES1,
                    payload: genres
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

 
 


// export const moviesListHorizontal = (Item) => {
//     console.log('MYA DATA',Item);
//     try {
//         return async dispatch => {
//             const result = await fetch(`https://api.themoviedb.org/3/genre/${Item.id}/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
                
//             });
//             const horizontalList = await result.json();
                          
  
//             const result_ = horizontalList.results
        
//             if (result_) {
//                 dispatch({
//                     type: GET_MOVIES2,
//                     payload: result_,
//                 });
//             } else {
//                 console.log('Unable to fetch!');
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

