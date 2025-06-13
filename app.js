const poster = document.querySelector("#poster");
const title = document.querySelector("#title");
const genre = document.querySelector("#genre");
const description = document.querySelector("#description");
const actors = document.querySelector("#actors");
const director = document.querySelector("#director");
const awards = document.querySelector("#awards");
const language = document.querySelector("#language");
const collection = document.querySelector("#collection");
const rating = document.querySelector("#rating");

const error = document.querySelector("#error");
const banner = document.querySelector("#banner");
const movieContainer = document.querySelector("#movie-container");

movieContainer.classList.add("hidden");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  banner.classList.add("hidden");

  const movieInput = document.querySelector("#movieInput");
  let movieName = movieInput.value;

  let apikey = "dfbb4694";

  fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${movieName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.Poster);
      console.log(data.Title);
      console.log(data.Genre);
      console.log(data.Plot);
      console.log(data.Actors);
      console.log(data.Director);
      console.log(data.Awards);
      console.log(data.Language);
      console.log(data.BoxOffice);
      console.log(data.imdbRating);

      if (data.Error === "Movie not found!") {
        error.classList.remove("hidden");
        error.innerText = "Movie not found!";
      } else {
        error.classList.add("hidden");
        movieContainer.classList.remove("hidden");
        poster.src = data.Poster;
        title.innerText = data.Title;
        genre.innerText = data.Genre;
        description.innerText = data.Plot;
        actors.innerText = data.Actors;
        director.innerText = data.Director;
        awards.innerText = data.Awards;
        language.innerText = data.Language;
        collection.innerText = data.BoxOffice;
        rating.innerText = data.imdbRating;

        if (data.imdbRating >= 7) {
          banner.classList.remove("hidden");
          banner.classList.add("bg-green-500");
          banner.innerText = "👍 Highly Recommended";
        } else if (data.imdbRating >= 5 && data.imdbRating < 7) {
          banner.classList.remove("hidden");
          banner.classList.add("bg-yellow-400");
          banner.innerText = "🤔 Decent Watch";
        } else {
          banner.classList.remove("hidden");
          banner.classList.add("bg-red-600");
          banner.innerText = "👎 Consider Other Options";
        }
      }
    });

  movieInput.value = "";
});
