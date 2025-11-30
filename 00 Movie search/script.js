const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    director: "Christopher Nolan",
    rating: 9.0,
    poster:
      "https://w0.peakpx.com/wallpaper/611/61/HD-wallpaper-dark-knight-batman-batman-dark-knight-dark-knight.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    rating: 8.6,
    poster:
      "https://wallpapercat.com/w/full/1/0/4/306076-1242x2208-iphone-hd-interstellar-background-image.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    poster: "https://c4.wallpaperflare.com/wallpaper/892/243/798/action-fantasy-neo-supernatural-wallpaper-preview.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 6,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    director: "Bong Joon Ho",
    rating: 8.6,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 7,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    director: "Todd Phillips",
    rating: 8.4,
    poster:
      "https://m.media-amazon.com/images/I/81V0EHAIX+L.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    rating: 8.8,
    poster:
    "https://c8.alamy.com/comp/PXNB1J/forrest-gump-original-movie-poster-PXNB1J.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    director: "Quentin Tarantino",
    rating: 8.9,
    poster: "https://storage.googleapis.com/pod_public/750/157513.jpg",
    video: "./assets/v3.mp4",
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    director: "David Fincher",
    rating: 8.8,
    poster:
      "https://images-cdn.ubuy.co.in/6585bef7a2ae5d32f8760cfb-fight-club-movie-poster-1-wall-art.jpg",
    video: "./assets/v3.mp4",
  },
];

const container = document.querySelector("#movieList");

function renderMovies(list) {
  container.innerHTML = " ";
  if (list.length === 0) {
    container.innerHTML = "<h2>No Movies Found.</h2>";
    return;
  }

  list.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}"
                    alt="${movie.title}" />
                    <video src="${movie.video}" autoplay loop muted></video>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p><strong>Year:</strong>${movie.year}</p>
                    <p><strong>Genre:</strong>${movie.genre}</p>
                    <p><strong>Rating:</strong> ${movie.rating}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                </div>`;

    container.appendChild(card);
  });
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filtered = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm)
    );
  });

  renderMovies(filtered);
});
renderMovies(movies);

const toggleBtn = document.querySelector(".changeTheme");
const body = document.body;

let dark = true;
toggleBtn.addEventListener("click", () => {
  if (dark) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.style.backgroundColor = "black";
    toggleBtn.style.color = "white";

    dark = false;
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleBtn.style.backgroundColor = "white";
    toggleBtn.style.color = "black";
    dark = true;
  }
});
