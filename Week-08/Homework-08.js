var img = document.getElementById("img");

// function loadDogImg() {
//   fetch("https://random.dog/woof.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response);
//       // img.setAttribute("src", response.url);
//     });
// }
function loadDogImg() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      img.setAttribute("src", response.message);
    });
}
loadDogImg();

document.getElementById("choose-btn").addEventListener("click", function () {
  var select = document.getElementById("animal");
  var option = select.value;
  img.classList.remove("hidden");
  console.log(option);
  if (option === "dog") {
    loadDogImg();
  } else if (option === "fox") {
    loadFoxImg();
  } else {
    loadCatImg();
  }
});
/*
function loadFoxImg() {
  fetch("https://randomfox.ca/floof/")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      img.setAttribute("src", response.image);
    });
}

function loadCatImg() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.setAttribute("src", response[0].url);
    });
}


*/

// let dictionary = {
//   dog: "https://random.dog/woof.json",
//   cat: "https://api.thecatapi.com/v1/images/search",
//   fox: "https://randomfox.ca/floof/",
// };

// const array = Object.keys(dictionary);
// const arrayValue = Object.values(dictionary);

// let arrayAnimal = ["dog", "fox", "cat"];
// arrayAnimal.includes("dog");

// document.getElementById("choose-btn").addEventListener("click", function () {
//   var select = document.getElementById("animal");
//   var option = select.value;
//   img.classList.remove("hidden");
//   // var url = "";
//   var index = array.indexOf(option);
//   var url = arrayValue[index];
//   //   if (option === "dog") {
//   //     var index = array.indexOf("dog");
//   //     url = arrayValue[index];
//   //   } else if (option === "fox") {
//   //     var index = array.indexOf("fox");
//   //     url = arrayValue[index];
//   //   } else {
//   //     var index = array.indexOf("cat");
//   //     url = arrayValue[index];
//   //   }
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       var src = null;
//       switch (option) {
//         case "dog": {
//           src = response.url;
//           break;
//         }
//         case "fox": {
//           src = response.image;
//           break;
//         }
//         case "cat": {
//           src = response[0].url;
//           break;
//         }
//       }
//       if (src !== null) {
//         img.setAttribute("src", src);
//       }
//     });
// });
