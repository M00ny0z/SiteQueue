(function() {
  "use strict";
  const USER_ID = "em66@uw.edu";
  const TUTOR_ID = "TAem66@uw.edu";
  window.addEventListener("load", main);

  function main() {
    let addTo = document.getElementById("add-to");
    let removeFrom = document.getElementById("remove-from");
    let removeAs = document.getElementById("remove-as");
    addTo.addEventListener("click", addToQueue);
    removeFrom.addEventListener("click", removeFromQueue);
    removeAs.addEventListener("click", removeAsQueue);
  }

  function addToQueue() {
    console.log("added");
  }

  function removeFromQueue() {
    let status = document.getElementById("status");
    console.log("removed");

  }

  function removeAsQueue() {
    console.log("REMOVED BY " + TUTOR_ID);
    removeFromQueue();
  }
})();
