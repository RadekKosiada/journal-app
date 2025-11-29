import { Editor } from '@tiptap/react';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.commands.undo()}
                    className={''}
                >
                    Undo
                </button>
                <button
                    onClick={() => editor.commands.redo()}
                    className={''}
                >
                    Redo
                </button>
                <br />

                <button
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                    className={editor.isActive('taskList') ? 'is-active' : ''}
                >
                    Toggle task list
                </button>
                <button
                    onClick={() => editor.chain().focus().splitListItem('taskItem').run()}
                    disabled={editor.can().splitListItem('taskItem')}
                >
                    Create a new Todo
                </button>
                <button
                    onClick={() => editor.chain().focus().sinkListItem('taskItem').run()}
                    disabled={editor.can().sinkListItem('taskItem')}
                >
                    Nest Todo
                </button>
                <button
                    onClick={() => editor.chain().focus().liftListItem('taskItem').run()}
                    disabled={editor.can().liftListItem('taskItem')}
                >
                    Align Todo
                </button>


            </div>
        </div>
    )
}

export default MenuBar;