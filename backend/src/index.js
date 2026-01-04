import app from "./app.js";
import { PORT } from "./constants.js";

app.listen(PORT, () => {
  console.log(`DotRepl backend running on port http://localhost:${PORT}`);
});
