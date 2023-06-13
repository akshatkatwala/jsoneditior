import React from "react";
import Navbar from "./components/Navbar";
import FileSelector from "./components/FileSelector";
import JsonEditor from "./components/JsonEditor";
import FileCreator from "./components/FileCreator";

class App extends React.Component {
  state = {
    selectedFile: null,
    jsonContent: {},
  };

  handleFileSelect = (file) => {
    // Read the selected file's content
    const reader = new FileReader();
    reader.onload = () => {
      const content = JSON.parse(reader.result);
      this.setState({ selectedFile: file, jsonContent: content });
    };
    reader.readAsText(file);
  };

  handleJsonUpdate = (updatedContent) => {
    this.setState({ jsonContent: updatedContent });
  };

  render() {
    const { selectedFile, jsonContent } = this.state;

    return (
      <div>
        <Navbar />
        <h1>JSON File Creator</h1>
        <FileSelector onFileSelect={this.handleFileSelect} />
        {selectedFile ? (
          <JsonEditor
            jsonContent={jsonContent}
            onJsonUpdate={this.handleJsonUpdate}
          />
        ) : (
          <FileCreator />
        )}
      </div>
    );
  }
}

export default App;
