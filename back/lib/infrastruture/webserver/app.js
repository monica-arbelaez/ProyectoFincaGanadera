const express = require("express");
const { config } = require("../config/index");
const routesApi = require("./routes/api-routes");

const app = express();
app.use(express.json());

routesApi(app);

app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});
