import net from "net";

const HOST = "127.0.0.1";
const PORTS = [5555, 6666, 7777];

const clients = [];

PORTS.forEach((port) => {
  const client = new net.Socket();
  client.connect(port, HOST, async () => {
    console.log(
      `Connected to Server ${client.remoteAddress}:${client.remotePort}`
    );

    clients.push(client);

    client.write("Hello World!");
  });
});
