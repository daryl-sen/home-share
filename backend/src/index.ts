import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
const YAML = require("yamljs");

const app = express();
const port = 3200;

const swaggerDocument = YAML.load(path.join(__dirname, "../src/api-doc.yml"));
console.log(swaggerDocument);

const rootPath = path.join(__dirname);
console.log(rootPath);

app.use(express.static(rootPath));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      validatorUrl: undefined,
    },
  })
);

app.get("/api", (req, res) => {
  res.send("Backend API coming soon!");
});

app.get("*", (req, res) => {
  return res.sendFile("index.html", { root: rootPath });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
