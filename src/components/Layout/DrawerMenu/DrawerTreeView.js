import React, { useState, useContext } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import { Typography, TextField, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import QueueIcon from "@mui/icons-material/Queue";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { EditorContext } from "../../../context/editor-context";
const useStyles = makeStyles((theme) => ({
  maindiv: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  iconSize20: {
    height: 20,
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  iconSize15: {
    height: 15,
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  fontsize13: {
    fontSize: 13,
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  input: {
    backgroundColor: theme.palette.background.default,
  },
}));
const EditableTreeItem = ({
  node,
  onCopyNode,
  onUpdateNode,
  onAddChildNode,
  onAddChildNodeFile,
  onDeleteNode,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nodeName, setNodeName] = useState(node.name);
  const [showInput, setShowInput] = useState(false);
  const [isFile, setIsFile] = useState(false);
  const [newChildName, setNewChildName] = useState("");
  const { showEditor, setShowEditor } = useContext(EditorContext);
  const classes = useStyles();
  const handleEditToggle = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleInputChange = (e) => {
    setNodeName(e.target.value);
  };

  const handleSaveNode = () => {
    setIsEditing(false);
    onUpdateNode({ ...node, name: nodeName });
  };

  const handleShowInput = () => {
    setShowInput(true);
    setIsFile(false);
  };

  const handleShowInputFile = () => {
    setShowInput(true);
    setIsFile(true);
  };

  const handleAddChildNode = () => {
    if (newChildName.trim()) {
      onAddChildNode(node.id, newChildName, isFile);
      setShowInput(false);
      setIsFile(false);
      setNewChildName("");
    }
  };

  const handleRemoveNode = () => {
    onDeleteNode(node.id);
  };

  const handleCopyNode = () => {
    onCopyNode({ ...node });
  };

  const nodeClickHandler = () => {
    setShowEditor(false);
    if (node.type === "file") {
      console.log("clicked");
      setShowEditor(true);
    }
  };

  return (
    <TreeItem
      nodeId={node.id}
      label={
        isEditing ? (
          <div style={{ display: "flex" }}>
            <TextField
              value={nodeName}
              onChange={handleInputChange}
              fullWidth
              inputProps={{ "aria-label": "rename node" }}
              className={classes.input}
            />
            <IconButton size="small" onClick={handleSaveNode}>
              <CheckIcon />
            </IconButton>
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={nodeClickHandler}
          >
            <Typography className={classes.text}>{node.name}</Typography>

            {!showInput && node.type !== "file" && (
              <Tooltip title="Add Item">
                <IconButton size="small" onClick={handleShowInput}>
                  <AddIcon className={classes.iconSize15} />
                </IconButton>
              </Tooltip>
            )}
            {!showInput && node.type !== "file" && (
              <Tooltip title="Add File">
                <IconButton size="small" onClick={handleShowInputFile}>
                  <QueueIcon className={classes.iconSize15} />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Edit Item">
              <IconButton size="small" onClick={handleEditToggle}>
                <EditIcon className={classes.iconSize15} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy Item">
              <IconButton onClick={handleCopyNode}>
                <ContentCopyIcon className={classes.iconSize15} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Item">
              <IconButton onClick={handleRemoveNode}>
                <DeleteIcon className={classes.iconSize15} />
              </IconButton>
            </Tooltip>
          </div>
        )
      }
      //icon={node.children && node.isExpanded ? <FolderIcon /> : <ChevronRightIcon/>}
      expandIcon={
        node.type !== "file" ? (
          <ChevronRightIcon className={classes.iconSize15} />
        ) : (
          <TextSnippetIcon />
        )
      }
      collapseIcon={
        node.type !== "file" ? (
          <ExpandMoreIcon className={classes.iconSize15} />
        ) : (
          <TextSnippetIcon />
        )
      }
    >
      {showInput && (
        <div>
          <TextField
            value={newChildName}
            onChange={(e) => setNewChildName(e.target.value)}
            variant="outlined"
            size="small"
            placeholder="Add new item"
            inputProps={{
              style: { fontSize: 12 },
            }}
          />
          <IconButton size="small" onClick={handleAddChildNode}>
            <CheckIcon className={classes.iconSize15} />
          </IconButton>
        </div>
      )}
      {Array.isArray(node.children)
        ? node.children.map((child) => (
            <EditableTreeItem
              key={child.id}
              node={child}
              onUpdateNode={onUpdateNode}
              onAddChildNode={onAddChildNode}
            />
          ))
        : null}
    </TreeItem>
  );
};

const DrawerTreeView = ({ setIsDrawerOpen }) => {
  const [treeData, setTreeData] = useState([]);
  const classes = useStyles();
  const handleUpdateNode = (updatedNode) => {
    let check = isNameExists(treeData, updatedNode.name);
    if (check) {
      alert("name exists!");
      return;
    }
    setTreeData((prevTree) => {
      const updatedTree = [...prevTree];
      const findAndUpdateNode = (treeArray) => {
        for (let node of treeArray) {
          if (node.id === updatedNode.id) {
            node.name = updatedNode.name;
            return true;
          }
          if (node.children) {
            const found = findAndUpdateNode(node.children);
            if (found) return true;
          }
        }
        return false;
      };
      findAndUpdateNode(updatedTree);
      return updatedTree;
    });
  };

  const handleCopyNode = (copiedNode) => {
    setTreeData((prevTreeData) => {
      const newCopiedNode = { ...copiedNode, id: `${copiedNode.id}-copy` };
      const updatedTreeData = prevTreeData.map((node) =>
        node.id === copiedNode.id
          ? { ...node, children: [...(node.children || []), newCopiedNode] }
          : node
      );
      return updatedTreeData;
    });
  };

  const handleAddChildNode = (parentId, childName, isFile) => {
    console.log(isNameExists(treeData, childName));
    let check = isNameExists(treeData, childName);
    if (check) {
      alert("name exists!");
      return;
    } else {
      setTreeData((prevTree) => {
        const updatedTree = [...prevTree];
        const addChildToParent = (treeArray) => {
          for (let node of treeArray) {
            if (node.id === parentId) {
              node.children = [
                ...(node.children || []),
                {
                  id: `${parentId}-${(node.children || []).length + 1}`,
                  name: childName,
                  type: isFile ? "file" : "",
                },
              ];
              return true;
            }
            if (node.children) {
              const found = addChildToParent(node.children);
              if (found) return true;
            }
          }
          return false;
        };
        addChildToParent(updatedTree);
        return updatedTree;
      });
    }
  };

  const isNameExists = (arr, name) => {
    for (const item of arr) {
      if (item.name === name) {
        return true;
      }
      if (item.children && item.children.length) {
        if (isNameExists(item.children, name)) {
          return true;
        }
      }
    }
    return false;
  };

  const handleAddParentNode = () => {
    const newNodeId = `Collection-${treeData.length + 1}`;
    setTreeData((prevTreeData) => [
      ...prevTreeData,
      {
        id: newNodeId,
        name: `Collection ${treeData.length + 1}`,
        type: "folder",
        children: [],
      },
    ]);
  };

  const handleDeleteNode = (nodeId) => {
    const updatedTreeData = removeNodeById(treeData, nodeId);
    setTreeData(updatedTreeData);
  };

  const removeNodeById = (nodes, targetId) => {
    return nodes.filter((node) => {
      if (node.id === targetId) {
        return false; // Remove the node and its children
      }
      if (node.children) {
        node.children = removeNodeById(node.children, targetId);
      }
      return true;
    });
  };

  const hideMenuHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className={classes.maindiv}>
        <Tooltip title="Create New Item">
          <AddIcon
            onClick={handleAddParentNode}
            className={classes.iconSize20}
            sx={{pr: 3}}
          />
        </Tooltip>
        <Tooltip title="Hide Menu">
          <KeyboardDoubleArrowLeftIcon
            className={classes.iconSize20}
            onClick={hideMenuHandler}
            p={20}
          />
        </Tooltip>
      </div>
      <TreeView
        defaultCollapseIcon={<ChevronRightIcon />}
        defaultExpandIcon={<ExpandMoreIcon />}
      >
        {treeData.map((node) => (
          <EditableTreeItem
            key={node.id}
            node={node}
            onUpdateNode={handleUpdateNode}
            onAddChildNode={handleAddChildNode}
            onCopyNode={handleCopyNode}
            onDeleteNode={handleDeleteNode}
          />
        ))}
      </TreeView>
    </div>
  );
};

export default DrawerTreeView;
