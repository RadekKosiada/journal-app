'use client';
import { TaskItem, TaskList } from '@tiptap/extension-list';
import { Placeholder } from '@tiptap/extensions';
import styles from "./rich-text-editor.module.scss";

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from '../rte-menu-bar';

const RichTextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Write something …',
            }),
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
        ],
        // content: "",
        immediatelyRender: false
    })

    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className={styles.rteEditor} />
        </>
    )
}

export default RichTextEditor;