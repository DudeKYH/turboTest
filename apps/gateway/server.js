import { Person } from "@turbo-test/classes";
import net from "net";
import { onConnection } from "./events/onConnection.js";

const gateWayServer = net.createServer(onConnection);

const PORT = 6666;
const HOST = "127.0.0.1";

gateWayServer.listen(PORT, HOST, () => {
  console.log(`[GatewayServer] ${HOST}:${PORT} Listening`);

  const player = new Person(25, 180);
  player.grow();
  console.log(player);
});
