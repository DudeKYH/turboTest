export const onData = socket => async data => {
  //socket.buffer = Buffer.concat([socket.buffer, data]);

  console.log(`[LobbyServer] onData : ${data}`);
};