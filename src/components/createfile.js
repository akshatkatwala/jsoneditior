import React from "react";

class CreateJsonButton extends React.Component {
  handleCreateJson = () => {
    const fileName = prompt("Enter the JSON file name:");
    if (fileName) {
      const jsonContent = "{}"; 

   
      const fileBlob = new Blob([jsonContent], { type: "application/json" });

      
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(fileBlob);
      downloadLink.download = `${fileName}.json`;
      downloadLink.click();

      
      URL.revokeObjectURL(downloadLink.href);
    }
  };

  render() {
    return <button onClick={this.handleCreateJson}>Create JSON File</button>;
  }
}

export default CreateJsonButton;
