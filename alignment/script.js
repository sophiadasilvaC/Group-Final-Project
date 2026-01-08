
// Drag and drop functions
function allowDrop(ev) {
  ev.preventDefault();
}

// Drag function that sets the data to be dragged
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// Drop function that appends the dragged element to the target container
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var box = document.getElementById(data);
  var target = ev.target;

  // Ensure the target is the main-box or a child of the main-box
  if (target.id === "main-box" || target.id === "dragBox" || target.closest("#main-box") || target.closest("#dragBox")) {
      // Calculate the correct position within the target container
      var targetRect = target.getBoundingClientRect();
      var boxRect = box.getBoundingClientRect();
      var offsetX = ev.clientX - targetRect.left - (boxRect.width / 2);
      var offsetY = ev.clientY - targetRect.top - (boxRect.height / 2);

      // Append the box to the target container
      target.appendChild(box);

      // Set the position of the box based on the drop location
      box.style.position = "absolute";
      box.style.left = offsetX + "px";
      box.style.top = offsetY + "px";
  }
}