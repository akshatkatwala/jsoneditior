const WebSocket = require("ws");
const fs = require("fs");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("WebSocket connection established");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      console.log("Received data:", data);

      // Save the received data to a file
      fs.appendFile("data.json", message + "\n", (err) => {
        if (err) {
          console.error("Error saving data:", err);
        } else {
          console.log("Data saved successfully");
        }
      });
    } catch (error) {
      console.error("Invalid JSON data:", error);
    }
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});
