import cors from "cors";
import express from "express";

import "./config/setup.js";
import handleErrorsMiddleware from "./middleware/handleErrorsMiddleware.js";
import router from "./routers/router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

const port: number = +process.env.PORT || 5000;

app.listen(port, () => console.log(`Server online at port ${port}`));
