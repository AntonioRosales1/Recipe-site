const verse = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "52fddf5b96msh707bfb679e0bb8fp1cc282jsn26b510fbe64f",
    "X-RapidAPI-Host": "uncovered-treasure-v1.p.rapidapi.com",
  },
};

fetch("https://uncovered-treasure-v1.p.rapidapi.com/verse/psalms%2010:5", verse)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
