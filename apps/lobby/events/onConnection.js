import { getNumber } from "@turbo-test/utils";
import { onData } from "./onData.js";
import { onEnd } from "./onEnd.js";
import { onError } from "./onError.js";
export const onConnection = (socket) => {
  console.log(
    `[LobbyServer] Client connected from: ${socket.remoteAddress}:${socket.remotePort}`,
    `socket.id: ${socket.id}`
  );
  console.log(`getNumber : ${getNumber()}`);
  socket.on("data", onData(socket));
  socket.on("end", onEnd(socket));
  socket.on("error", onError(socket));
};
