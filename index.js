(function() {
  "use strict";
  const USER_ID = "em66@uw.edu";
  window.addEventListener("load", main);

  function main() {
    let addTo = document.getElementById("add-to");
    let removeFrom = document.getElementById("remove-from");
    addTo.addEventListener("click", addToQueue);
    removeFrom.addEventListener("click", removeFromQueue);
  }

  function addToQueue() {
    console.log("added");
  }

  function removeFromQueue() {
    console.log("removed");
  }
})();
