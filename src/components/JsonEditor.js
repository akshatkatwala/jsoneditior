import React from "react";

class JsonEditor extends React.Component {
  handleKeyChange = (event, index) => {
    const { jsonContent, onJsonUpdate } = this.props;
    const updatedJson = { ...jsonContent };
    updatedJson[index].key = event.target.value;
    onJsonUpdate(updatedJson);
  };

  handleValueChange = (event, index) => {
    const { jsonContent, onJsonUpdate } = this.props;
    const updatedJson = { ...jsonContent };
    updatedJson[index].value = event.target.value;
    onJsonUpdate(updatedJson);
  };

  render() {
    const { jsonContent } = this.props;

    return (
      <div>
        <h2>JSON Editor:</h2>
        {jsonContent.map((entry, index) => (
          <div key={index}>
            <input
              type="text"
              value={entry.key}
              onChange={(event) => this.handleKeyChange(event, index)}
            />
            <input
              type="text"
              value={entry.value}
              onChange={(event) => this.handleValueChange(event, index)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default JsonEditor;
