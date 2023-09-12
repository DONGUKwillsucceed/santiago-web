import { Editor } from "@toast-ui/react-editor";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface Props {
  editorRef: MutableRefObject<any>;
  initialValue: string;
  onUploadImage: any;
}

export default function PostEditor({ editorRef, initialValue, onUploadImage }: Props) {
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
      initialValue={initialValue}
      previewStyle="vertical"
      height="100vh"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      hideModeSwitch={true}
      toolbarItems={toolbarItems}
      ref={editorRef}
      hooks={{ addImageBlobHook: onUploadImage }}
    />
  );
}
