import httpProxy from "http-proxy";
import http, { IncomingMessage, ServerResponse } from "http";

const proxy = httpProxy.createProxyServer();
proxy.on("proxyReq", (pReq, req, res, opt) => {
  console.log("Req");
  console.log(pReq);
  console.log(req);
  console.log(res);
  console.log(opt);
});
proxy.on("proxyRes", (pReq, req, res) => {
  console.log("Req");
  console.log(pReq);
  console.log(req);
  console.log(res);
});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: "http://localhost:5050" });
});

console.log("Server listen on port 5050");
server.listen(5050);
