import { Person } from "@turbo-test/classes";
import net from "net";

const gameServer = net.createServer((socket) => {
  console.log(
    `[gameServer] Client connected from: ${socket.remoteAddress}:${socket.remotePort}`
  );

  const player = new Person(25, 180);
  player.grow();
  console.log(player);

  socket.on("data", (socket) => async (data) => {});
  socket.on("end", (socket) => async (data) => {});
  socket.on("error", (socket) => async (err) => {});
});

gameServer.listen(6666, () => {
  console.log("lobby Server Listening");
});
