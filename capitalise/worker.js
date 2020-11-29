let data = [];
fetch("data.json")
  .then((r) => r.json())
  .then((response) => {
    data = response;
  });

importScripts("distance.js");

// listening on the message being received from the main thread
self.addEventListener("message", (event) => {
  if (event.data.action === "start") {
    start();
  }
});

function start() {
  let html = "";
  data.forEach((country, i) => {
    html += `<h1>${country.country}</h1>`;
    html += `<p>Capital City: ${country.capital.name}`;
    html += `<h2>Distances to other Capitals</h2>
                    <ul>`;
    data.forEach((compareCountry) => {
      html += `<li>${compareCountry.capital.name}:
                ${Math.round(
                  distance(
                    {
                      latitude: country.capital.latitude,
                      longitude: country.capital.longitude,
                    },
                    {
                      latitude: compareCountry.capital.latitude,
                      longitude: compareCountry.capital.longitude,
                    }
                  )
                )} miles
            </li>`;
    });
    html += "</ul><hr>";
    //
    self.postMessage({
      action: "progress",
      data: i / data.length,
    });
  });
  self.postMessage({
    action: "output",
    data: html,
  });
}
