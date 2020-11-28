const name = self.name ? `with name: ${self.name}` : "unnamed";
console.log(`I'm the worker ${name}`);

const ports = [];
self.addEventListener("connect", event => {
    ports.push(event.port);
    console.log("A new proxy was connected");
})