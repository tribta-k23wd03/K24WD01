import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 8888;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`"Server is running on http://localhost:${PORT}"`);
  });
});
