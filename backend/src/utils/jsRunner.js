import { exec } from "child_process";
import fs from "fs";
import path from "path";

export const runJavaScript = (code) => {
  return new Promise((resolve, reject) => {
    const tempDir = "temp";
    const filePath = path.join(tempDir, "script.js");

    fs.mkdirSync(tempDir, { recursive: true });
    fs.writeFileSync(filePath, code);

    exec(`node ${filePath}`, { timeout: 2000 }, (err, stdout, stderr) => {
      if (err) return reject(stderr);
      resolve(stdout);
    });
  });
};
