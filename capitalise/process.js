// Main Thread
const worker = new Worker("worker.js", { name: "cities" });
worker.addEventListener("message", (event) => {
  switch (event.data.action) {
    case "output":
      console.log("output received");
      document.querySelector("#output").innerHTML = event.data.data;
      break;
    case "progress":
      document.querySelector("progress").value = event.data.data;
      break;
  }
});

function start() {
  // Communicating to the worker thread
  worker.postMessage({
    action: "start",
  });
}
