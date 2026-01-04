import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
  language = "javascript",
}) {
  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          tabSize: 2,
          cursorBlinking: "smooth",
        }}
      />
    </div>
  );
}

