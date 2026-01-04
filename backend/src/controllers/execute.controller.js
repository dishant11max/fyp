export const executeCode = async (req, res) => {
  const { code, language } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    let output = [];

    const originalLog = console.log;
    console.log = (...args) => {
      output.push(args.join(" "));
    };

    if (language === "javascript") {
      eval(code);
    } else {
      throw new Error("Language not supported yet");
    }

    console.log = originalLog;

    res.json({
      output: output.join("\n") || "✔ Code executed (no output)",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
