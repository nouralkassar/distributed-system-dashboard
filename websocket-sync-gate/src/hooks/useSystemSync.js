import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export const useSystemSync = () => {
  const [nodes, setNodes] = useState(0);
  const [systemHealth, setSystemHealth] = useState("Initializing...");
  const [heartbeat, setHeartbeat] = useState("");

  useEffect(() => {
    socket.on("nodeCountUpdated", (count) => setNodes(count));
    socket.on("systemMetrics", (data) => {
      setSystemHealth(data.systemHealth);
      setHeartbeat(data.heartbeat);
    });

    return () => {
      socket.off("nodeCountUpdated");
      socket.off("systemMetrics");
    };
  }, []);

  return { nodes, systemHealth, heartbeat };
};