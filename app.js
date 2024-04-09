import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import serveIndex from "serve-index";

const app = express();

const port = 5555;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/api/photos",
  express.static(path.join(__dirname, "public")),
  serveIndex("public", { icons: true })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
