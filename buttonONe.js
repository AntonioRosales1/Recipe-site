const clickMe = document.getElementById(`verse1`);
let verseImg1 = document.getElementById(`verseImg1`);
let verse1Change = document.getElementById("verse1Change");
let firstVerse = document.getElementById(`firstVerse`);

clickMe.addEventListener(`click`, function (e) {
  let chngImg = verseImg1.getAttribute(`src`);
  const h1 = verse1Change;

  if (chngImg === "/img/Verse.jpg") {
    verseImg1.setAttribute(`src`, "/img/Prayer for son.webp");
    h1.innerText = `A son is everything in life.`;
  } else {
    verseImg1.setAttribute(`src`, "/img/Mother verse.jpeg");
    h1.innerText = ` Blessed you are to have you mother.`;
    clickMe.remove();
  }
});