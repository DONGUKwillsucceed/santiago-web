import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";

export default function PostEditor() {
  const editorRef = useRef(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  return (
    <Editor
    initialValue="typing here!"
    previewStyle="vertical"
    height="100vh"
    initialEditType="wysiwyg"
    useCommandShortcut={false}
    hideModeSwitch={true}
      toolbarItems={toolbarItems}
      ref={editorRef}
    />
  );
}
