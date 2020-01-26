import React from "react";

import GlobalStyle from "./styles/global";
import socket from "./services/socket";
import Card from "./components/Card/index";

function App() {
  socket.on("getData", data => {
    console.log(data);
  });
  return (
    <>
      <GlobalStyle />
      <div>
        <Card color="#68f"></Card>
        <Card color="#71c"></Card>
        <Card color="#0da"></Card>
        <Card color="#f90"></Card>
      </div>
    </>
  );
}

export default App;
