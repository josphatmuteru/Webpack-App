import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughingImg");
const jokeBtn = document.getElementById("jokeBtn");

laughImg.src = laughing;
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
