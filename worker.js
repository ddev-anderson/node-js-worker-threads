const { workerData, parentPort } = require("worker_threads");

let count = 0;

for (let i = 0; i < workerData; i++) {
  count++;
}

parentPort.postMessage(count); // send message back to main thread when the job is done
