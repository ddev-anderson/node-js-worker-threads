const { Worker } = require("worker_threads");

const jobs = Array.from({ length: 100 }, () => 1e9);
const tick = performance.now();

let completed = 0;

for (let job of jobs) {
  const worker = new Worker("./worker.js", { workerData: job }); // create a new worker thread for each job

  worker.on("message", () => {
    // receive message from worker when it completes the job
    completed++;

    if (completed === jobs.length) {
      const tock = performance.now();
      console.log(`Worker threads took: ${tock - tick}ms`);
    }
  });
}
