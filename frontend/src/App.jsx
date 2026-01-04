import { useState } from "react";
import CodeEditor from "./editor/CodeEditor";
import OutputPanel from "./components/OutputPanel";

export default function App() {
  const [code, setCode] = useState(
    'console.log("Hello from DotRepl");'
  );
  const [output, setOutput] = useState("");

  const runCode = () => {
    let logs = [];

    const originalLog = console.log;

    console.log = (...args) => {
      logs.push(args.join(" "));
    };

    try {
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(logs.join("\n"));
    } catch (err) {
      setOutput(err.toString());
    }

    console.log = originalLog;
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-950 text-gray-200">
      
      {/* Top bar */}
      <header className="h-12 flex items-center justify-between px-4 border-b border-neutral-800">
        <h1 className="font-semibold text-lg text-white">DotRepl</h1>
        <button
          onClick={runCode}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 rounded text-sm font-medium"
        >
          Run
        </button>
      </header>

      {/* Editor + Output */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/3">
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <div className="w-1/3">
          <OutputPanel output={output} />
        </div>
      </div>
    </div>
  );
}
