import { Person } from "@turbo-test/classes";
import net from "net";

const lobbyServer = net.createServer((socket) => {
  console.log(
    `[lobbyServer] Client connected from: ${socket.remoteAddress}:${socket.remotePort}`
  );

  const player = new Person(30, 175);
  player.grow();
  console.log(player);

  socket.on("data", (socket) => async (data) => {});
  socket.on("end", (socket) => async (data) => {});
  socket.on("error", (socket) => async (err) => {});
});

lobbyServer.listen(5555, () => {
  console.log("lobby Server Listening");
});
