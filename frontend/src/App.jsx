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
  className="
    relative flex items-center gap-2
    bg-gradient-to-r from-indigo-600 to-purple-600
    hover:from-indigo-500 hover:to-purple-500
    text-white text-sm font-semibold
    px-4 py-1.5 rounded-md
    shadow-lg shadow-indigo-600/30
    transition-all duration-200
  "
>
  ▶ Run
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
