import path from "path";
import { spawn } from "child_process";
import http from "http";

async function spawnPromise(
  command: string,
  args: Array<string> = [],
  cwd: string = process.cwd(),
  extraEnv = {}
) {
  return new Promise((resolve, reject) => {
    const env = process.env;
    let stdout = "";
    let stderr = "";

    const spawnProcess = spawn(command, args, {
      cwd,
      env: Object.assign(extraEnv, env),
    });

    spawnProcess.stdout.on("data", (data) => {
      stdout += String(data);
    });

    spawnProcess.stderr.on("data", (data) => {
      stderr += String(data);
    });

    spawnProcess.on("close", (code) => {
      if (code !== 0) {
        console.log(stdout);
        console.error(stderr);
        return reject(new Error("something is wrong with the process"));
      }

      resolve();
    });
  });
}

async function httpGet(url: string) {
  return new Promise((resolve, reject) => {
    let data = "";
    http
      .get(url, (resp) => {
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          return resolve(data);
        });
      })
      .on("error", (error) => {
        return reject(error);
      });
  });
}

// set server overrides
const port = 12346;
const url = `http://localhost:${port}`;
const projectPath = path.join(__dirname, "..", "..");

let serverProcess;

export async function sleep(timeMs = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
}

export async function shutdown() {
  if (serverProcess) {
    await serverProcess.kill();
  }
}

export async function waitForServer(count = 0) {
  if (count >= 30) {
    throw new Error("giving up on the server...");
  }

  try {
    const response = await httpGet(url);
    // console.log(`server up and running @ ${url}`);
  } catch (error) {
    // console.log(`cannot reach server: ${error}, sleeping and trying again...`);
    await sleep(1000);
    await waitForServer(count + 1);
  }
}

export async function prepareForIntegrationTest() {
  const env = process.env;

  // start the server
  serverProcess = spawn(
    "./node_modules/.bin/next",
    ["start", "--port", port.toString()],
    {
      cwd: projectPath,
      env: Object.assign(
        {
          port: port,
          JEST_WORKER_ID: undefined,
        },
        env
      ),
    }
  );

  // serverProcess.stdout.on("data", (data) => {
  //   console.log(data.toString());
  // });
  // serverProcess.stderr.on("data", (data) => {
  //   console.log(data.toString());
  // });

  await waitForServer();
  await sleep();

  return {
    port,
    url,
  };
}
