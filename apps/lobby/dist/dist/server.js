import net from "net";
import { Person } from "@turbo-test/classes";
import { onConnection } from "./events/onConnection.js";
const lobbyServer = net.createServer(onConnection);
const PORT = 7777;
const HOST = "127.0.0.1";
lobbyServer.listen(PORT, HOST, () => {
  console.log(`[GameServer] ${HOST}:${PORT} listening`);
  const person = new Person(25, 180);
  person.grow();
});