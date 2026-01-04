import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="javascript"
      defaultValue={`// Welcome to DotRepl\n\nconsole.log("Hello world");`}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        automaticLayout: true,
      }}
    />
  );
}

