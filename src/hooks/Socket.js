import React, { useState, useEffect } from "react";
import socket from "../services/socket";

export function useSocket(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("getData", data => {
      setData(data);
    });
  });

  return data;
}
