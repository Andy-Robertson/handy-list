// Array to hold to handy list items
let handyListItems = [];

// Function to create a new item based on the input text and push into handyListItems
function addListItem() {
  const listItem = {
    text,
    checked: false,
    id: Date.now(),
  };

  handyListItems.push(listItems);
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
