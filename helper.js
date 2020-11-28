let dWorker, sWorker;
function startDedicated() {
    dWorker = new Worker("worker.js", { name: "dedicated "});
}
function terminateDedicated() {
    if (dWorker) dWorker.terminate();
}
function start10Dedicated() {
    for (let i=0; i<10; i++) {
        new Worker("worker.js", { name: `multiple worker ${i+1}`});
    }
}        
function startShared() {
    if ('SharedWorker' in window)
    sWorker = new SharedWorker("shared.js", { name: "shared"});
}