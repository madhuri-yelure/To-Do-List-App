let total = 0;
let done = 0;

function showInput() {
  document.getElementById("popup").style.display = "block";
}

function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;

  if (text === "") return;

  let li = document.createElement("li");

  // ✅ checkbox create
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.innerText = text;

  total++;
  updateStats();

  // ✅ checkbox logic
  checkbox.onchange = function () {
    if (checkbox.checked) {
      done++;
      span.style.opacity = "0.5";   // fade effect
    } else {
      done--;
      span.style.opacity = "1";
    }
    updateStats();
  };

  // ❌ delete button
  let del = document.createElement("span");
  del.innerText = "❌";
  del.style.cursor = "pointer";

  del.onclick = function () {
    if (checkbox.checked) done--;
    total--;
    li.remove();
    updateStats();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
  document.getElementById("popup").style.display = "none";
}

function updateStats() {
  document.getElementById("total").innerText = total;
  document.getElementById("done").innerText = done;
  document.getElementById("remaining").innerText = total - done;
}