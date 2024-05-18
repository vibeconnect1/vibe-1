import React, { useState } from 'react';
import { BiFile, BiUpload } from 'react-icons/bi';

const FileInputBox = ({handleChange}) => {
  const [files, setFiles] = useState([]);
  const [fileURLs, setFileURLs] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    const newFileURLs = selectedFiles.map(file => URL.createObjectURL(file));
    setFileURLs(newFileURLs);

    if (handleChange) {
        handleChange(event);
      }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <BiUpload className="w-10 h-10 mb-3 text-gray-400" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span>
          </p>
        </div>
        <input id="file-upload" type="file" className="hidden" multiple onChange={(handleFileChange)} />
      </label>
      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file, index) => (
            <div key={index} className="flex flex-col items-center">
              {file.type.startsWith('image/') ? (
                <img src={fileURLs[index]} alt={file.name} className="max-w-xs max-h-40 mt-2 rounded-lg" />
              ) : (
                <p className="text-sm  mt-2"><BiFile/> {file.name}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileInputBox;
