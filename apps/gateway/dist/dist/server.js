import net from "net";
import { Person } from "@turbo-test/classes";
import { onConnection } from "./events/onConnection.js";
const gatewayServer = net.createServer(onConnection);
const PORT = 6666;
const HOST = "127.0.0.1";
gatewayServer.listen(PORT, HOST, () => {
  console.log(`[GameServer] ${HOST}:${PORT} listening`);
  const person = new Person(25, 180);
  person.grow();
});