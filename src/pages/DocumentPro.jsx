import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "./SubPages/FileUpload";
import Folder from "./SubPages/Folder";
import { addFolder } from "../features/FileExplorer/FileExplorer";

const DocumentPro = () => {
    const structure = useSelector(state => state.fileExplorer)
    console.log(structure)
    const dispatch = useDispatch()
    const handleAddFolder = (parentPath) => {
        const name = prompt('Enter folder name:');
        if (name) {
          dispatch(addFolder({ name, path: `${parentPath}/${name}` }));
        }
      };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="my-5 flex justify-between items-center">

        <div>
      <h1>File Explorer</h1>
      <button onClick={() => handleAddFolder('')}>Create Root Folder</button>
      <FileUpload parentPath="" />
      <div>
        {/* {structure.filter(item => item.path.split('/').length === 2).map(item => (
          item.type === 'folder'
            ? <Folder key={item.path} folder={item} />
            : <div key={item.path}>{item.name}</div>
        ))} */}
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentPro;
