const express = require("express");
const cors = require("cors");
const { config } = require("../config/index");
const routesApi = require("./routes/api-routes");
const { logErrors, errorHandler } = require('./utils/middleware/error-handler');

const app = express();
app.use(express.json());
app.use(cors());

routesApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});
