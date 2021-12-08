onload = todoMain;

function todoMain() {
  let inputElem, inputElem2, button, ulElem;

  getElements();
  addListeners();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    button = document.getElementById("addBtn");
    ulElem = document.getElementsByTagName("ul")[0];
  }

  function addListeners() {
    button.addEventListener("click", addEntry, false);
  }

  function addEntry(event) {
    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem2.value = "";

    // Lägg till en ny rad

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);

    // checkbox cell
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click", done, false);
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);

    // to-do
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);

    // Kategorier
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    trElem.appendChild(tdElem3);

    // ta bort
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

    function deleteItem() {
      trElem.remove();
    }

    function done() {
      trElem.classList.toggle("strike");
    }
  }
}
