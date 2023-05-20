import { API, API_KEY} from "./constants";
import {generateUrl} from "./utils";

// fetch('https://api.themoviedb.org/3/movie/550?api_key=8af5b40217583f356e05122a7ffc4c31')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })


const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(generateUrl('/movie/popular'), options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const movies = data.results.map(({poster_path,original_title}) => (`
    <div class="movie">
        <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="original_title">
        <div class="title">${original_title}</div>
    </div>
    `)).join('')
    document.querySelector('.popular').innerHTML = movies
  })
  .catch(err => console.error(err));
