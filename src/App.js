import "./App.css";
import FolderTree from "./components/FolderTree";
import treeData from "./data/basicTree.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFolder,
  faFolderOpen,
  faFile,
  faFileCode,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFolder, faFolderOpen, faFile, faFileCode, faFileImage);

function App() {
  return (
    <div className="App">
      <FolderTree data={treeData} />
    </div>
  );
}

export default App;
