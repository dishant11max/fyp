export default function OutputPanel({ output }) {
  return (
    <div className="h-full bg-neutral-900 border-l border-neutral-800 p-3 text-sm overflow-auto">
      <div className="text-gray-400 mb-2">Output</div>

      <pre className="text-green-400 whitespace-pre-wrap">
        {output || "▶ Click Run to see output"}
      </pre>
    </div>
  );
}
