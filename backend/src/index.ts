import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
const routes = require("./routes");
const { sequelize } = require("../models");

const swagger = require("swagger-express-router");
const YAML = require("yamljs");
const app = express();
const port = 3200;

const rootPath = path.join(__dirname);

const swaggerDocument = YAML.load(path.join(rootPath, "../src/api-doc.yml"));

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

swagger.setUpRoutes(routes, app, swaggerDocument, true);

// render react app
app.get("*", (req, res) => {
  return res.sendFile("index.html", { root: rootPath });
});

app.listen(port, async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    return console.log(error);
  }
  console.log(`Example app listening on port ${port}`);
});
