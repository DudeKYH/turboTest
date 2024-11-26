import net from "net";
import { onConnection } from "./events/onConnection.js";
import { Person } from "@turbo-test/classes";

const gameServer = net.createServer(onConnection);

const PORT = 5555;
const HOST = "127.0.0.1";

gameServer.listen(5555, "127.0.0.1", () => {
  console.log(`[GameServer] ${HOST}:${PORT} listening`);

  const person = new Person(25, 180);
  person.grow();
});
