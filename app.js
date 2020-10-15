// Global values:
const dropdown = document.getElementById("selectbox");
const form = document.getElementById("form-animals");
var dropChoice = 0;

// Button function (find and connect to options on drop down menu):
button = document.getElementById("submit-btn");
button.addEventListener("click", function () {
  dropChoice = dropdown.options[dropdown.selectedIndex].value;
  switch (dropChoice) {
    case "1":
      dogs();
      break;

    case "2":
      cats();
      break;

    case "3":
      foxes();
      break;
  }
});

// Dog code:
function dogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((image) => {
      return image;
    })
    .then((image) => {
      document.getElementById("animal-img").src = image.message;
    });
}

// Cat code:
function cats() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((image) => {
      return image;
    })
    .then((image) => {
      document.getElementById("animal-img").src = image.file;
    });
}

// Fox code:
function foxes() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((image) => {
      return image;
    })
    .then((image) => {
      document.getElementById("animal-img").src = image.image;
    });
}
