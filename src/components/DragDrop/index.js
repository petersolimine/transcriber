import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./styles.scss";

const fileTypes = ["MP3", "WAV", "MOV", "MP4", "WEBM"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader
      className="uploader"
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      classes="uploader"
      maxSize={100}
      onSizeError={() => console.log("File is too big")}
      multiple={false}
    />
  );
}

export default DragDrop;
