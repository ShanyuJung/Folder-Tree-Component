import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const TreeNode = ({ className, node }) => {
  const [childVisible, setChildVisible] = useState(false);
  const isChild = node.child ? true : false;
  const nodeChild = node.child;
  //Use .sort() to let all Folders have higher order than Files.
  if (nodeChild !== undefined) {
    nodeChild.sort(function (a, b) {
      if (a["type"] > b["type"]) {
        return -1;
      }
      if (a["type"] < b["type"]) {
        return 1;
      }
      return 0;
    });
  }

  //Handle folder open or close. If folder opened, show contain inside it.
  const childVisibleHandler = () => {
    setChildVisible((childVisible) => !childVisible);
  };

  return (
    <StyledTreeNode className={className}>
      {node.type === "Folder" ? (
        <>
          <div className="folderContainer" onClick={childVisibleHandler}>
            <div className={childVisible ? "active" : ""}>
              <FontAwesomeIcon icon={faCaretRight} size="2x" />
            </div>
            <div className="folder">
              <FontAwesomeIcon
                icon={childVisible ? "fa-folder-open" : node.icon}
                size="2x"
                color={node.color}
              />
              <p>{node.label}</p>
            </div>
          </div>

          {isChild && childVisible && (
            <div className="child-tree-node">
              {nodeChild.map((child) => {
                //Using the principle of recursion, pass node.child into <TreeNode> itself to build child folders.
                return child.type === "Folder" ? (
                  <TreeNode key={child.id} node={child} color={child.color} />
                ) : (
                  <div className="file" key={child.id}>
                    <FontAwesomeIcon
                      icon={child.icon}
                      size="2x"
                      color={child.color}
                    />
                    <p>{`${child.label}${
                      child.fileExtension ? "." + child.fileExtension : ""
                    }`}</p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className="file">
          <FontAwesomeIcon icon={node.icon} size="2x" color={node.color} />
          <p>{`${node.label}${
            node.fileExtension ? "." + node.fileExtension : ""
          }`}</p>
        </div>
      )}
    </StyledTreeNode>
  );
};

const FolderTree = ({ data = [] }) => {
  //Use .sort() to let all Folders have higher order than Files.
  const dataList = data.sort(function (a, b) {
    if (a.type > b.type) {
      return -1;
    }
    if (a.type < b.type) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      {dataList.map((data) => {
        return <TreeNode key={data.id} node={data} />;
      })}
    </>
  );
};

const StyledTreeNode = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  margin: 1rem auto;

  .folderContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .active {
    transform: rotate(45deg);
  }

  .folder {
    display: flex;
    margin-left: 1rem;
    align-items: center;
  }

  .folder p {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .file {
    display: flex;
    margin-left: 1rem;
    padding-left: 16px;
    align-items: center;
  }

  .file p {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .child-tree-node {
    padding: 0 2rem;
  }
`;

export default FolderTree;
