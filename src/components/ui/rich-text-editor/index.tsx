'use client';
import styles from "./rich-text-editor.module.scss";

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './menu-bar';

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "Add your new entry here...",
        immediatelyRender: false
    })

    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className={styles.rteEditor} />
        </>
    )
}

export default Tiptap;