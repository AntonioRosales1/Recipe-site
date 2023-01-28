const clickMe = document.getElementById(`verse1`);
let verseImg1 = document.getElementById(`verseImg1`);
let verse1Change = document.getElementById("verse1Change");
let firstVerse = document.getElementById(`firstVerse`);
let verse1 = document.getElementById(`verse1`);

var imgArray = [
  "./img/father verse.webp",

  "./img/Mother verse.jpeg",
  "./img/Prayer for son.webp",
  "./img/SIster verse.jpg",
  "./img/Verse.jpg",
  "./img/Wife verse.webp",
];

clickMe.addEventListener(`click`, function (e) {
  let chngImg = verseImg1.getAttribute(`src`);
  const h1 = verse1Change;

  if (chngImg === "/img/Verse.jpg") {
    verseImg1.setAttribute(`src`, "/img/Prayer for son.webp");
    h1.innerText = `A son is everything in life.`;
  } else {
    verseImg1.setAttribute(`src`, "/img/Mother verse.jpeg");
    h1.innerText = ` Blessed you are to have you mother.`;
    clickMe.style.backgroundColor = `#E89B9B `;
    clickMe.innerText = `Thanks for viewing. You are out of clicks for the day. Come back tomorrow!`;
    verse1.style.transform = false;
  }
});
