'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "Add your new entry here...",
        immediatelyRender: false,
    })

    return <EditorContent editor={editor} />
}


export default Tiptap