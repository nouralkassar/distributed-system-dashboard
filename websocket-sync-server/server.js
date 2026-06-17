const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});


let activeNodesCount = 0; 
io.on("connection", (socket) => {
  activeNodesCount++;
  console.log("New node connected. Total:", activeNodesCount);

  io.emit("nodeCountUpdated", activeNodesCount);

  socket.on("disconnect", () => {
    activeNodesCount--;
    io.emit("nodeCountUpdated", activeNodesCount);
    console.log("Node disconnected.");
  });
});

setInterval(() => {
  io.emit("systemMetrics", {
    systemHealth: Math.random() > 0.2 ? "OPERATIONAL" : "MAINTENANCE",
    heartbeat: new Date().toLocaleTimeString(),
    loadIndex: activeNodesCount
  });
}, 2000);

server.listen(3000, () => {
  console.log("Distributed System Monitor Running On Port 3000");
});