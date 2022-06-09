let ul = document.querySelector("#list-item");

document
  .getElementById("btn-add-comment")
  .addEventListener("click", createComment);
function createComment() {
  let input = document.getElementById("input-field");
  let inputComment = input.value;
  if (input.value === "") {
    alert("Invalid item!");
  } else {
    input.value = "";
    let listItem = document.createElement("li");
    listItem.innerHTML = `<p class='p-style'>${inputComment}</p>`;
    ul.insertBefore(listItem, ul.firstChild);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.classList.add("fa", "fa-trash-o");
    listItem.appendChild(deleteBtn);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "edit");
    editBtn.classList.add("fa", "fa-pencil-square-o");
    listItem.appendChild(editBtn);
  }
}
fetch(" https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    let i = 0;
    for (const product of data) {
      console.log(product);
      let listItem = document.createElement("li");
      listItem.innerHTML = `<p class='p-style'>${product.title}</p>`;
      ul.appendChild(listItem);
      let listId = product.id;
      listItem.setAttribute("id", listId);

      let deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("id", "delete");
      deleteBtn.classList.add("fa", "fa-trash-o");
      listItem.appendChild(deleteBtn);

      let editBtn = document.createElement("button");
      editBtn.setAttribute("id", "edit");
      editBtn.classList.add("fa", "fa-pencil-square-o");
      listItem.appendChild(editBtn);
      i++;
      if (i >= 5) {
        return;
      }
    }
  });

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.id === "delete") {
      ul.removeChild(li);
    } else if (button.id === "edit") {
      const par = li.firstElementChild;
      const input = document.createElement("input");
      input.setAttribute("id", "input-edit");
      input.type = "text";
      input.value = par.textContent;
      li.insertBefore(input, par);
      li.removeChild(par);
      let saveBtn = document.createElement("button");
      saveBtn.setAttribute("id", "save");
      saveBtn.setAttribute("class", "fa fa-floppy-o");
      li.appendChild(saveBtn);
      button.remove();
    } else if (button.id === "save") {
      const input = li.firstElementChild;
      const par = document.createElement("p");
      par.setAttribute("class", "p-style");
      par.textContent = input.value;
      li.insertBefore(par, input);
      li.removeChild(input);
      button.remove();
      let editBtn = document.createElement("button");
      editBtn.setAttribute("id", "edit");
      editBtn.classList.add("fa", "fa-pencil-square-o");
      li.appendChild(editBtn);
    }
  }
});

//   deleteBtn.addEventListener("click", deleteComment);
//   function deleteComment() {
//     document.getElementById(listId).remove();
//   }
//   editBtn.addEventListener("click", editComment);
//   function editComment() {
//     const input = document.createElement("input");
//     const par = listItem.firstElementChild;
//     input.type = "text";
//     input.value = par.textContent;

//     input.setAttribute("id", "edit");
//     listItem.insertBefore(input, par);
//     listItem.removeChild(par);
//     editBtn.remove();
//     let saveBtn = document.createElement("button");
//     saveBtn.innerHTML = "save";
//     listItem.appendChild(saveBtn);
//     saveBtn.addEventListener("click", saveComment);
//     function saveComment() {
//       const par = document.createElement("p");
//       const input = listItem.firstElementChild;
//       par.type = "text";
//       par.textContent = input.value;
//       par.setAttribute("id", "edit");
//       listItem.insertBefore(par, input);
//       listItem.removeChild(input);
//       editBtn = document.createElement("button");
//       editBtn.innerHTML = "Edit";

//       listItem.appendChild(editBtn);
//       saveBtn.remove();
//       editBtn.addEventListener("click", editComment);
//     }
//   }
