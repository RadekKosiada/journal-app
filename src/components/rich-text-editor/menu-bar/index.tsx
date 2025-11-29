import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Editor } from '@tiptap/react';
import { Redo2, Undo2 } from "lucide-react";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <ButtonGroup aria-label="Menu Bar">
            <div className="flex flex-col items-start gap-y-2 px-2">
                <div className="flex flex-row items-start gap-2">
                    <ButtonGroup aria-label="adjust typography">
                        <Button variant="outline" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</Button>
                        <Button variant="outline" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Button>
                        <Button variant={"outline"} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Button>
                        <Button variant={"outline"} onClick={() => editor.chain().focus().setParagraph().run()}>Paragraph</Button>
                        <Button variant="outline" onClick={() => editor.chain().focus().toggleBold().run()}><strong>Bold</strong></Button>
                        <Button variant={"outline"} onClick={() => editor.chain().focus().toggleItalic().run()}><em>Italic</em></Button>
                    </ButtonGroup>

                    <ButtonGroup aria-label="undo redo">
                        <Button onClick={() => editor.commands.undo()} size="icon" variant={"outline"} title="Undo"><Undo2 /> </Button>
                        <Button onClick={() => editor.commands.redo()} size="icon" variant={"outline"} title="Redo"><Redo2 /></Button>
                    </ButtonGroup>
                </div>

                <ButtonGroup aria-label="manage list">
                    <Button variant={"outline"}
                        onClick={() => editor.chain().focus().toggleTaskList().run()}
                        className={editor.isActive('taskList') ? 'is-active' : ''}
                    >
                        Toggle task list
                    </Button>
                    <Button variant={"outline"}
                        onClick={() => editor.chain().focus().splitListItem('taskItem').run()}
                        disabled={editor.can().splitListItem('taskItem')}
                    >
                        Create a new Todo
                    </Button>
                    <Button variant={"outline"}
                        onClick={() => editor.chain().focus().sinkListItem('taskItem').run()}
                        disabled={editor.can().sinkListItem('taskItem')}
                    >
                        Nest Todo
                    </Button>
                    <Button variant={"outline"}
                        onClick={() => editor.chain().focus().liftListItem('taskItem').run()}
                        disabled={editor.can().liftListItem('taskItem')}
                    >
                        Align Todo
                    </Button>
                </ButtonGroup>
            </div>
        </ButtonGroup >
    );
}

export default MenuBar;



