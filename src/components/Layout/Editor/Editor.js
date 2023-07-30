import React, { useContext } from "react";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";
import Alert from "editorjs-alert";
import Raw from "@editorjs/raw";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
import NestedList from "@editorjs/nested-list";
import Underline from "@editorjs/underline";
import ImageTool from "@editorjs/image";
import ColorPlugin from "editorjs-text-color-plugin";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import FontFamily from "editorjs-inline-font-family-tool";
import FontSizeTool from 'editorjs-inline-font-size-tool';
import List from "@editorjs/list";
import { makeStyles } from "@mui/styles";
import { EditorContext } from "../../../context/editor-context";
window.onerror = (error) => {
  console.log("erro", error);
  return true;
};

const useStyles = makeStyles((theme) => ({
  editor: {
    backgroundColor: theme.palette.background.default,
  },
  text: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  container: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
    width: "50%",
    height: "100vh",
    padding: 30,
    borderRight: "1px solid #F2F2F2",
    borderLeft: "1px solid #F2F2F2",
  },
}));

const Editor = () => {
  const { showEditor, setShowEditor } = useContext(EditorContext);
  const classes = useStyles();
  const imageData = [
    "https://www.bing.com/images/blob?bcid=SzfUpci9O-UFqxcxoNWLuD9SqbotqVTdPyo",
    "https://i.pinimg.com/564x/66/44/b3/6644b34c91f57f8d40a4eaa94e3cb797.jpg",
    "https://i.pinimg.com/564x/92/6d/67/926d6741e7dd7ff19995e0c9fced9888.jpg",
    "https://i.pinimg.com/564x/f0/57/28/f05728828151251ad6341d8544adc235.jpg",
    "https://i.pinimg.com/564x/d1/a5/16/d1a516d5bc1073821881cf1d0d6baed6.jpg",
  ];
  let editor;
  React.useEffect(() => {
    try {
      editor = new EditorJS({
        holder: "editorjs",
        tools: {
          paragraph: {
            inlineToolbar: true,
            tunes: ["alignmentTuneTool"],
          },
          header: {
            class: Header,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: async (file) => {
                  return Promise.resolve({
                    success: 1,
                    file: {
                      url: imageData[
                        Math.floor(Math.random() * imageData.length)
                      ],
                    },
                  });
                  /* const formData = new FormData();
                    formData.append('file', file);
                    fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                      method: "post",
                      body: formData,
                    mode: "no-cors",
                    }).then((res) => res.json())
                      .then((res) => {
                        console.log(res,'res')
                        Promise.resolve({
                          success: 1,
                          file: `${API_URL}/${res.filename}`
                        });
                      })
                      .catch((err) => {
                        Promise.reject(err);
                }); */
                },
              },
            },
          },
          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              placeholder: "List",
            },
            tunes: ["alignmentTuneTool"],
          },
          fontSize: FontSizeTool,
          fontFamily: FontFamily,
          quote: Quote,
          warning: {
            class: Warning,
            inlineToolbar: true,
            tunes: ["alignmentTuneTool"],
          },
          Color: {
            class: ColorPlugin,
            config: {
              type: "text",
            },
          },
          Marker: {
            class: ColorPlugin,
            config: {
              type: "marker",
            },
          },
          code: {
            class: CodeTool,
            inlineToolbar: true,
          },
          delimiter: Delimiter,
          inlineCode: InlineCode,
          // linkTool: LinkTool,
          embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
              services: {
                youtube: true,
                soundcloud: true,
                twitter: true,
              },
            },
            shortcut: "CMD+SHIFT+E",
            tunes: ["alignmentTuneTool"],
          },
          table: {
            class: Table,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+T",
            tunes: ["alignmentTuneTool"],
          },
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+A",
            tunes: ["alignmentTuneTool"],
          },
          raw: Raw,
          underline: Underline,
          alignmentTuneTool: {
            class: AlignmentTuneTool,
          },
        },
      });
    } catch (er) {
      console.log(er);
    }
  }, []);
  const save = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
        new EditorJS({
          holder: "preview",
          tools: {
            header: Header,
            list: List,
          },
          readOnly: true,
          data: outputData,
        });
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <div
      className={classes.container}
      style={{
        margin: !showEditor ? "auto" : "",
        marginLeft: showEditor ? "31%" : "",
      }}
    >
      <h1>WYSIWYG Editor!</h1>
      <div id="editorjs" className={classes.editor}>
        Start editing below.
      </div>
    </div>
  );
};

export default Editor;
