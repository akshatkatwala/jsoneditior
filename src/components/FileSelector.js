import React from "react";

const FileSelector = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div>
      <h2>Select an Existing JSON File:</h2>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};

export default FileSelector;
