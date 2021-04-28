/*=============================================
VALIDAR FUNCIONAMIENTO DE JAVASCRIPT
=============================================*/

/*=============================================
CONSTANTE DE API 
=============================================*/

const URL_PATH = "https://api.themoviedb.org";

const API_KEY = "8cec90df944eb2814c3086fecd461a76";

document.addEventListener("DOMContentLoaded", () => {

    renderNewsMovies();

})

const getNewsMovies = () => {

    const url = `${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

    return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .catch(error => console.log(error))

}

const renderNewsMovies = async () => {

    const newMovies = await getNewsMovies();
    //console.log(newMovies);

    let html = "";

    newMovies.forEach((movie, index) => {
    	const {id, title, overview, backdrop_path} = movie;
    	const urlImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    	const urlMovie = `../movie.html?id=${id}`;

    	       

        html += `<div class="carousel-item ${index === 0 ? "active" : null}"  style="background-image: url('${urlImage}')">
                     <div class="carousel-caption"> 
                      <center>	<h5 style="color: white"> <strong>${title}</strong></h5>
                    	<p style="color: white"> ${overview}</p>
                    	<a href="${urlMovie}" class="btn btn-primary">Más información</a>
                    	 </center>
                     </div> 

                 </div>`;

    });

    html += `<button class="carousel-control-prev" type="button" data-bs-target="#carousel-news-movies" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel-news-movies" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`;

    document.getElementsByClassName('list-news-movies')[0].innerHTML = html;


}