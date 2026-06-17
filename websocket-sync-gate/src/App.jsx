import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3000");

function App() {
  const [users, setUsers] = useState(0);
  const [status, setStatus] = useState("Waiting...");
  const [lastUpdate, setLastUpdate] = useState("--:--");

  useEffect(() => {
    socket.on("nodeCountUpdated", (count) => setUsers(count));
    socket.on("systemMetrics", (data) => {
      setStatus(data.systemHealth);
      setLastUpdate(data.heartbeat);
    });

    return () => {
      socket.off("nodeCountUpdated");
      socket.off("systemMetrics");
    };
  }, []);

  return (
    <div className="monitor-container">
      <h1 className="title">System Monitor</h1>
      
      <div className="grid-cards">
        <div className="card">
          <h3>System Health</h3>
          <p className={`status-value ${status === "OPERATIONAL" ? "online" : "maintenance"}`}>
            {status}
          </p>
        </div>
        <div className="card">
          <h3>Active Nodes</h3>
          <p className="status-value">{users}</p>
        </div>
      </div>

      <div className="status-box">
        <p>Last Sync: {lastUpdate}</p>
      </div>
    </div>
  );
}

export default App;