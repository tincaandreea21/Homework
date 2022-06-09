// document
//   .getElementById("btn-add-comment")
//   .addEventListener("click", createComment);
// function createComment() {
//   var inputValue = document.querySelector("#textarea-comment").value;
//   var listItem = document.createElement("li");
//   var listId = Math.floor(Math.random() * 1000);
//   listItem.setAttribute("id", listId);
//   listItem.innerHTML =
//     `<img
//   src="https://scontent.fclj2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/71499360_2517340528319424_4840350695741718528_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=lB0WI4dF2yoAX_8HzFk&_nc_ht=scontent.fclj2-1.fna&oh=00_AT9KpO2sru_4f_n6d6F_4Uu04xRR-AmlWuaWxQgEi3eArA&oe=622E99F2"
// />` +
//     "<p>email1@yahoo.com</p> " +
//     inputValue +
//     `<button id='delete' data-value =${listId} onclick=deleteComment(this)>Delete</button>`;

//   document.getElementById("insert-comment").appendChild(listItem);

//   //   document.getElementById("delete").addEventListener("click", deleteComment);
// }

// function deleteComment(el) {
//   document.getElementById("" + el.getAttribute("data-value")).remove();
// }
document
  .getElementById("btn-add-comment")
  .addEventListener("click", createComment);
var index = 2;
function createComment() {
  var inputValue = document.querySelector("#textarea-comment").value;
  var listItem = document.createElement("li");
  var listId = "com" + index;
  index++;
  listItem.setAttribute("id", listId);
  var btn = document.createElement("button");
  btn.setAttribute("data-value", listId);
  btn.innerHTML = "Delete";
  listItem.innerHTML =
    `<img
  src="https://scontent.fclj2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/71499360_2517340528319424_4840350695741718528_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=lB0WI4dF2yoAX_8HzFk&_nc_ht=scontent.fclj2-1.fna&oh=00_AT9KpO2sru_4f_n6d6F_4Uu04xRR-AmlWuaWxQgEi3eArA&oe=622E99F2"
/>` +
    "<div class=paragraph> <p>email1@yahoo.com</p> " +
    inputValue;
  listItem.appendChild(btn);
  document.getElementById("insert-comment").appendChild(listItem);

  btn.addEventListener("click", function () {
    document.getElementById("" + this.getAttribute("data-value")).remove();
  });
}
document.getElementById("delete").addEventListener("click", function () {
  document.getElementById("" + this.getAttribute("data-value")).remove();
});
