import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
const content = "";

export default function Demo({
  setTask,
  task,
}: {
  task: string;
  setTask: (v: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,

      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
  });

  useEffect(() => {
    setTask(editor?.getHTML()!);
  }, [editor?.getHTML()]);
  useEffect(() => {
    editor?.commands?.clearContent();
    editor?.commands?.setTextAlign("justify");
  }, [task == ""]);
  useEffect(() => {
    editor?.commands?.setTextAlign("justify");
    editor?.commands.focus(false);
  }, []);
  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic tabIndex={-1} />
          <RichTextEditor.Strikethrough tabIndex={-1} />
          <RichTextEditor.ClearFormatting tabIndex={-1} />
          <RichTextEditor.Highlight tabIndex={-1} />
          <RichTextEditor.Code tabIndex={-1} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 tabIndex={-1} />
          <RichTextEditor.H2 tabIndex={-1} />
          <RichTextEditor.H3 tabIndex={-1} />
          <RichTextEditor.H4 tabIndex={-1} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote tabIndex={-1} />
          <RichTextEditor.Hr tabIndex={-1} />
          <RichTextEditor.BulletList tabIndex={-1} />
          <RichTextEditor.OrderedList tabIndex={-1} />
          <RichTextEditor.Subscript tabIndex={-1} />
          <RichTextEditor.Superscript tabIndex={-1} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link tabIndex={-1} />
          <RichTextEditor.Unlink tabIndex={-1} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft tabIndex={-1} />
          <RichTextEditor.AlignCenter tabIndex={-1} />
          <RichTextEditor.AlignJustify tabIndex={-1} />
          <RichTextEditor.AlignRight tabIndex={-1} />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ColorPicker
            colors={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
            tabIndex={-1}
          />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
