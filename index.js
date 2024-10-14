const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJokes = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJokes);

generateJokes();
