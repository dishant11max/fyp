import CodeEditor from "./editor/CodeEditor";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-900 text-white">
      
      {/* Top Bar */}
      <header className="h-12 flex items-center px-4 border-b border-neutral-800 shrink-0">
        <h1 className="text-xl font-semibold">DotRepl</h1>
      </header>

      {/* Editor Area */}
      <div className="flex-1">
        <CodeEditor />
      </div>

    </div>
  );
}
