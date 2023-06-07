import React from "react";

class JsonFileButton extends React.Component {
  handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/json") {
      // File is a valid JSON file, you can process it here
      console.log("Selected JSON file:", file);
    } else {
      // Invalid file format, show an error message or take appropriate action
      console.log("Invalid file format. Please select a JSON file.");
    }
  };

  render() {
    return (
      <input type="file" accept=".json" onChange={this.handleFileChange} />
    );
  }
}

export default JsonFileButton;
