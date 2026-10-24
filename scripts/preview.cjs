const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = path.resolve(__dirname, "../dist/v-01/browser");
const port = 4201;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

async function start() {
  try {
    await fs.access(path.join(root, "index.html"));
  } catch {
    console.error("Build the portfolio first: npm run build");
    process.exitCode = 1;
    return;
  }

  const server = http.createServer(async (request, response) => {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" });
      response.end();
      return;
    }
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://127.0.0.1").pathname,
      );
      let file = path.resolve(root, "." + pathname);
      if (file !== root && !file.startsWith(root + path.sep)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }
      if ((await fs.stat(file)).isDirectory())
        file = path.join(file, "index.html");
      const data = await fs.readFile(file);
      response.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "Content-Length": data.length,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(request.method === "HEAD" ? undefined : data);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });

  server.on("error", (error) => {
    console.error(
      error.code === "EADDRINUSE"
        ? "Port 4201 is already in use. Close the previous preview before starting another."
        : error.message,
    );
    process.exitCode = 1;
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(`Portfolio preview: http://127.0.0.1:${port}/`);
    console.log(
      "Keep this process running while viewing the portfolio. Ctrl+C stops it.",
    );
  });
}

start();
