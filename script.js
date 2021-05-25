// Array to hold to handy list items
let handyListItems = [];

// Function to create a new item based on the input text and push into handyListItems
function addListItem() {
  const listItem = {
    text,
    checked: false,
    id: Date.now(),
  };

  handyListItems.push(listItem);
  console.log(handyListItems);
}

// Select form
const form = document.querySelector(".handyListForm");

// Add submit event listener
form.addEventListener("submit", (event) => {
  // Stop page from refreshing on form submission
  event.preventDefault();

  // Select text input
  const input = document.querySelector(".listItemInput");

  // Get the value of the input and remove the white spaces
  const text = input.nodeValue.trim();
  if (text !== "") {
    addListItem(text);
    input.value = "";
    input.focus();
  }
});

function renderListItem(listItem) {
  // Selects the first item with a class of '.js-todo-list'
  const list = document.querySelector(".handyList");

  // Checks if 'handylist.checked' is true using ternary operator
  // Assigns done to 'isChecked'. otherwise assigns an empty string
  const isChecked = handyList.checked ? "done" : "";

  // Create an 'li' and assign it to 'node'
  const node = document.createElement("li");

  // Set class attribute
  node.setAttribute("class", `handyListItem ${isChecked}`);

  // Set the data-key attribute to the id of the list item
  node.setAttribute("dataKey", handylist.id);

  // Set the contents of the `li` created above
  node.innerHTML = `
<input id="${handyList.id}" type="checkbox"/>
<label for="f${handyList.id}" class="tick checked"></label>
<span>${handyList.text}</span>
<button class="deleteListItem jsDeleteItem">
<svg><use href="#deleteIcon"></use></svg>
</button>
`;

  // Append element to DOM as the last child of the element
  // referenced by `list` variable
  list.append(node);
}
