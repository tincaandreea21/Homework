fetch("https://rickandmortyapi.com/api/episode")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.results.forEach((element) => {
      createEpisodeList(element);
    });
  });

function createEpisodeContent(text) {
  var elem = document.createElement("div");
  elem.innerText = text;
  return elem;
}
var containerEpisode = document.querySelector("#container-episode");
var containerCharacters = document.querySelector("#container-characters");

function createEpisodeList(episode) {
  var listItemContainer = document.createElement("div");
  listItemContainer.setAttribute("class", "list-item");

  var episodeName = createEpisodeContent(`${episode.name}/ `);
  var episodeNumber = createEpisodeContent(`${episode.episode}/ `);
  var episodeAirDate = createEpisodeContent(`${episode.air_date}/ `);

  listItemContainer.appendChild(episodeNumber);
  listItemContainer.appendChild(episodeName);
  listItemContainer.appendChild(episodeAirDate);

  var episodeLink = document.createElement("a");
  episodeLink.innerText = `View ${episode.characters.length} Characters`;
  listItemContainer.appendChild(episodeLink);

  containerEpisode.appendChild(listItemContainer);

  episodeLink.addEventListener("click", function () {
    containerCharacters.innerHTML = "";
    let title = document.createElement("p");
    title.id = "character-container-title";
    title.innerText = `Episode title: ${episode.name}`;
    containerCharacters.appendChild(title);

    episode.characters.forEach((character) => {
      fetch(character)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var characterProfile = document.createElement("div");
          characterProfile.id = "div-character-profile";
          let img = document.createElement("img");
          img.src = data.image;
          characterProfile.appendChild(img);

          let paragraph = document.createElement("p");
          paragraph.innerText = data.name;
          characterProfile.appendChild(paragraph);

          containerCharacters.appendChild(characterProfile);
        });
    });
  });
}

// var button = document.createElement("button");
// button.innerText = "Extensive characters list";
// document.getElementById("container").appendChild(button);
// button.addEventListener("click", function () {
//   window.location.href = "characters.html";
// });
