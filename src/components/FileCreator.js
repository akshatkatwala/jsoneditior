import React from "react";
import "./FileCreator.css";

class FileCreator extends React.Component {
  state = {
    fileName: "",
    propertyName: "",
    propertyValue: "",
    jsonContent: [],
    websocket: null,
  };

  componentDidMount() {
    const websocket = new WebSocket('ws://localhost:8080'); 

    websocket.onopen = () => {
      console.log("WebSocket connection established");
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    this.setState({ websocket });
  }

  handleFileNameChange = (event) => {
    this.setState({ fileName: event.target.value });
  };

  handlePropertyNameChange = (event) => {
    this.setState({ propertyName: event.target.value });
  };

  handlePropertyValueChange = (event) => {
    this.setState({ propertyValue: event.target.value });
  };

  handleAddElement = () => {
    const { propertyName, propertyValue, jsonContent } = this.state;
    if (propertyName && propertyValue) {
      const newEntry = { [propertyName]: propertyValue };
      this.setState((prevState) => ({
        jsonContent: [...prevState.jsonContent, newEntry],
        propertyName: "",
        propertyValue: "",
      }));

      this.sendDataToServer(newEntry);
    }
  };

  sendDataToServer = (data) => {
    const { websocket } = this.state;
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      const json = JSON.stringify(data);
      websocket.send(json);
    }
  };

  handleCreateFile = () => {
    const { fileName, jsonContent } = this.state;
    const fileContent = JSON.stringify(jsonContent);
    const blob = new Blob([fileContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  render() {
    const { fileName, propertyName, propertyValue, jsonContent } = this.state;

    return (
      <div className="file-creator">
        <h2>Create a New JSON File:</h2>
        <div className="form-field">
          <label htmlFor="file-name">File Name:</label>
          <input
            type="text"
            id="file-name"
            value={fileName}
            onChange={this.handleFileNameChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="property-name">Property Name:</label>
          <input
            type="text"
            id="property-name"
            value={propertyName}
            onChange={this.handlePropertyNameChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="property-value">Property Value:</label>
          <input
            type="text"
            id="property-value"
            value={propertyValue}
            onChange={this.handlePropertyValueChange}
          />
        </div>
        <button className="add-button" onClick={this.handleAddElement}>
          Add Element
        </button>
        <div className="file-content">
          <h3>File Content:</h3>
          {jsonContent.map((entry, index) => (
            <div key={index}>
              <span className="property-name">{Object.keys(entry)[0]}:</span>{" "}
              <span className="property-value">{Object.values(entry)[0]}</span>
            </div>
          ))}
        </div>
        <button className="create-button" onClick={this.handleCreateFile}>
          Create File
        </button>
      </div>
    );
  }
}

export default FileCreator;
