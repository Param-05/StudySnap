"use client";

import { useRef, useState } from "react";

export default function TextSelector() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedText, setSelectedText] = useState("");

  const handleSelect = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const { selectionStart, selectionEnd, value } = textarea;
      const text = value.substring(selectionStart, selectionEnd);
      setSelectedText(text);
    }
  };

  return (
    <div className="p-4">
      <textarea
        ref={textareaRef}
        onMouseUp={handleSelect}
        onKeyUp={handleSelect}
        rows={6}
        className="w-full border p-2"
        placeholder="Select some text in this box..."
      />
      <div className="mt-4">
        <strong>Selected Text:</strong> {selectedText}
      </div>
    </div>
  );
}
