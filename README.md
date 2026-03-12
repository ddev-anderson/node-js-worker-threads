# Node.js Worker Threads

A practical demonstration of CPU-bound performance using Node.js Worker Threads compared to single-threaded execution.

## Objective

Show the difference in execution time between running heavy computational tasks on the **main thread** versus distributing them across multiple **Worker Threads** in parallel.

## How it works

The project creates 100 jobs, each requiring **1 billion iterations** of a counter loop — a classic CPU-intensive workload.

| File               | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `index.js`         | Runs all 100 jobs sequentially on the main thread               |
| `index-workers.js` | Spawns one Worker Thread per job, running them in parallel      |
| `worker.js`        | The worker responsible for executing each job in its own thread |

## Running

```bash
# Single-threaded (main thread only)
node index.js

# Multi-threaded (Worker Threads)
node index-workers.js
```

## Benchmark Results

| Version                             | Time                 |
| ----------------------------------- | -------------------- |
| Main thread (`index.js`)            | 78,756.79ms (~78.8s) |
| Worker Threads (`index-workers.js`) | 17,061.62ms (~17.1s) |

**~4.6x faster** using Worker Threads.

The Worker Threads version completes significantly faster because jobs run in parallel, limited only by the number of logical CPU cores available on the machine.

```bash
# Check your CPU core count
node -e "console.log(require('os').cpus().length)"
```
